---
title: grafana 记录日志
shortTitle: grafana 记录日志
icon: pen-to-square
date: 2025-08-29
star: true
order: 43
category:
  - grafana
tag: 
  - grafana
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: grafana
---

# grafana

## 项目结构和部署方式

1. 项目使用nextjs框架完成
2. api请求使用axios包，封装了一个通用的apiRequest函数
3. 项目的部署步骤是，使用build命令，输出文件，然后使用nodejs运行了输出文件中的servejs


## AI整理后的项目结构

### 项目架构理解总结

1. **前端部分：**

    - 使用 Next.js 框架开发
    - API 请求通过 axios 封装的 apiRequest 通用函数处理
    - 使用 npm run build 构建项目

2. **部署方式：**

    - npm run build 生成 .next 目录（包含静态资源和 server.js）
    - 使用 Node.js 直接运行 .next 目录中的 server.js 文件
    - 这是标准的 Next.js SSR/SSG 生产部署模式

3. **关键理解：**

    - 这是 Next.js 全栈应用（不是纯静态 + 独立后端）
    - server.js 是 Next.js 自动生成的服务器文件
    - API 路由在 pages/api/ 或 app/api/ 目录下
    - 前端通过封装的 apiRequest 函数调用这些 API

4. **需要监控的内容：**

    - Next.js API 路由的请求日志（/api/* 路径）
    - 前端页面访问日志（可选）
    - 通过 apiRequest 函数发起的 API 调用



## 使用http直推的方式

这个文件的核心思路是 **"收集-缓冲-批量发送"模式**：

你的API请求 → 收集监控数据 → 内存缓冲区 → 批量HTTP推送 → Loki → Grafana



1. 创建监控工具 lib/requestMonitor.js

```js

import axios from 'axios';

class RequestMonitor {
  constructor() {
    this.lokiUrl = process.env.LOKI_URL;
    this.batchSize = 50;
    this.flushInterval = 3000;
    this.logBuffer = [];
    this.isEnabled = process.env.NODE_ENV === 'production' && this.lokiUrl;
    
    if (this.isEnabled) {
      this.startFlushSchedule();
      console.log('🔍 Request Monitor initialized');
    }
  }

  /**
   * 记录API请求监控数据
   */
  logRequest({
    url,
    method = 'GET',
    status,
    code,
    duration,
    ip,
    locale,
    token,
    error = false,
    data,
    params
  }) {
    if (!this.isEnabled) return;

    const logEntry = {
      timestamp: Date.now(),
      level: error ? 'error' : (status >= 400 || code !== 0 ? 'warn' : 'info'),
      message: error ? 'API Request Error' : 'API Request',
      // 基础信息
      type: 'api_request',
      url: this.cleanUrl(url),
      method: method?.toUpperCase() || 'GET',
      status,
      code,
      duration: Math.round(duration),
      // 上下文信息
      ip: this.extractIP(ip),
      locale,
      hasToken: !!token,
      hasData: !!data,
      hasParams: !!params,
      // 分类标签
      api_path: this.extractApiPath(url),
      status_class: this.getStatusClass(status, code),
      is_error: error || status >= 400 || code !== 0
    };

    this.addToBuffer(logEntry);
  }

  /**
   * 添加到批处理缓冲区
   */
  addToBuffer(logEntry) {
    const stream = {
      stream: {
        app: process.env.APP_NAME || 'nextjs-app',
        env: process.env.NODE_ENV || 'production',
        type: logEntry.type,
        level: logEntry.level,
        method: logEntry.method,
        status_class: logEntry.status_class,
        api_path: logEntry.api_path
      },
      values: [[
        (logEntry.timestamp * 1000000).toString(),
        JSON.stringify(logEntry)
      ]]
    };

    this.logBuffer.push(stream);

    if (this.logBuffer.length >= this.batchSize) {
      this.flush();
    }
  }

  /**
   * 刷新日志到Loki
   */
  async flush() {
    if (this.logBuffer.length === 0) return;

    const logsToSend = [...this.logBuffer];
    this.logBuffer = [];

    try {
      await axios.post(`${this.lokiUrl}/loki/api/v1/push`, {
        streams: logsToSend
      }, {
        timeout: 5000,
        headers: { 'Content-Type': 'application/json' },
        ...(process.env.LOKI_USERNAME && {
          auth: {
            username: process.env.LOKI_USERNAME,
            password: process.env.LOKI_PASSWORD
          }
        })
      });

      console.log(`✅ Sent ${logsToSend.length} logs to Grafana`);
    } catch (error) {
      console.error('❌ Failed to send logs:', error.message);
      // 失败的日志重新加入队列（限制数量避免内存泄漏）
      this.logBuffer.unshift(...logsToSend.slice(0, 20));
    }
  }

  /**
   * 启动定时刷新
   */
  startFlushSchedule() {
    setInterval(() => this.flush(), this.flushInterval);
    
    // 进程退出时刷新剩余日志
    if (typeof process !== 'undefined') {
      process.on('exit', () => this.flush());
      process.on('SIGINT', () => this.flush());
      process.on('SIGTERM', () => this.flush());
    }
  }

  // 工具方法
  cleanUrl(url) {
    return url?.replace(/\?.*$/, '') || 'unknown';
  }

  extractIP(ip) {
    if (!ip) return 'unknown';
    return ip.split(',')[0]?.split(':').pop()?.trim() || 'unknown';
  }

  extractApiPath(url) {
    if (!url) return 'unknown';
    const match = url.match(/\/api\/([^\/\?]*)/);
    return match ? match[1] : 'unknown';
  }

  getStatusClass(status, code) {
    if (status >= 500 || code >= 500) return '5xx';
    if (status >= 400 || code >= 400) return '4xx';
    if (status >= 300) return '3xx';
    if (status >= 200 && (code === 0 || code === 200)) return '2xx';
    return '1xx';
  }
}

// 创建全局实例
const requestMonitor = new RequestMonitor();

export default requestMonitor;

```
2.2 apiRequest

```js


  // 计算耗时
  const duration = performance.now() - start;
  
  // 🔍 新增：发送监控数据（仅此一行改动！）
  requestMonitor.logRequest({
    url,
    method,
    status: result.status,
    code: result.data.code,
    duration,
    ip,
    locale,
    token,
    data,
    params,
    error: result.status >= 400 || result.data.code !== 0
  });

  

```