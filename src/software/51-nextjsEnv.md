---
title: Nextjs 双环境部署完整思路
shortTitle: Nextjs 双环境部署
icon: pen-to-square
date: 2025-10-10
star: true
order: 51
category:
  - Nextjs
tag: 
  - Nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Nextjs
---


# Nextjs 双环境部署

### **部署方式现状：**

**第一种部署方式：**
```bash
bun i 
NODE_ENV=production bun run build
```
- 直接在服务器上运行
- 使用 `NODE_ENV=production`
- 读取 `.env.production` 文件

**第二种部署方式：**
```dockerfile
FROM oven/bun:slim AS base
WORKDIR /app
ENV NODE_ENV=production  # ← 这里设置了production
# ... 你提供的完整Dockerfile
```
- 使用Docker容器运行
- Dockerfile中设置了 `ENV NODE_ENV=production`
- 同样读取 `.env.production` 文件

## ❌ **核心问题描述**

**问题：两种部署方式都使用同一个环境配置**
- 第一种部署（直接部署）和第二种部署（Docker）都设置了 `NODE_ENV=production`
- 两种部署方式都会读取同一个 `.env.production` 文件
- **但实际上你希望这两种部署方式使用不同的环境配置**




我来详细解释 `bun run build` 的完整流程，特别是在你的双环境部署场景下：我来详细解释 `bun run build` 的完整流程，特别是在你的双环境场景下：

## 🔄 **核心流程**

```
bun run build → 查找package.json → 执行next build → 读取next.config.js → 加载环境变量 → 编译构建
```

## ⚙️ **关键时机：next.config.js 的执行**

**当 `bun run build` 开始时：**

1. **Next.js 立即读取并执行 next.config.js**
2. **这时候你的环境检测代码就运行了：**

```javascript
// next.config.js 在构建开始时执行
console.log('🔍 Current APP_ENV:', process.env.APP_ENV);

if (process.env.APP_ENV === 'staging') {
  require('dotenv').config({ path: '.env.staging' });    // 加载测试环境变量
} else {
  require('dotenv').config({ path: '.env.production' }); // 加载生产环境变量
}
```

## 🌍 **两种部署的环境变量状态**

### **第一种部署（bun直接）：**
```bash
NODE_ENV=production bun run build
```

**此时环境变量：**
- `process.env.NODE_ENV = 'production'` ✅
- `process.env.APP_ENV = undefined` ✅ (未设置)

**执行结果：**
```javascript
if (undefined === 'staging') → false
// 走 else 分支 → 加载 .env.production
```

### **第二种部署（Docker）：**
```dockerfile
ENV NODE_ENV=production
ENV APP_ENV=staging    # 这里设置的！
RUN bun run build
```

**此时环境变量：**
- `process.env.NODE_ENV = 'production'` ✅  
- `process.env.APP_ENV = 'staging'` ✅ (Docker设置的)

**执行结果：**
```javascript
if ('staging' === 'staging') → true  
// 走 if 分支 → 加载 .env.staging
```

## 🎯 **为什么在Dockerfile中设置 `ENV APP_ENV=staging`？**

**就是为了让Docker构建时：**
1. **next.config.js 能检测到 `APP_ENV=staging`**
2. **从而加载 `.env.staging` 而不是 `.env.production`**
3. **最终构建出使用测试环境配置的应用**

## 📁 **构建结果的区别**

**第一种部署构建后：**
```javascript
// .next/ 目录中的代码包含：
process.env.NEXT_PUBLIC_API_URL = "https://api.prod.example.com"
```

**第二种部署构建后：**
```javascript
// .next/ 目录中的代码包含：
process.env.NEXT_PUBLIC_API_URL = "https://api.staging.example.com"  
```

## 💡 **关键理解**

**`ENV APP_ENV=staging` 的作用时机：**
- ⏰ **构建时**（`bun run build` 执行期间）
- 📍 **在 next.config.js 中被检测**
- 🎯 **决定加载哪个环境配置文件**
- 🏗️ **影响整个构建过程和最终产物**

**简单来说：** 这个环境变量就是告诉构建过程"我现在是Docker部署，请使用测试环境的配置来构建应用"！

这样理解了吗？这个环境变量是在**构建时**起作用的，不是运行时！