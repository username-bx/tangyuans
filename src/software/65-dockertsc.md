---
title: dockerfile分步构建，不安装dev开发依赖，导致tsc报错
shortTitle: dockerfile分步构建，不安装dev开发依赖，导致tsc报错
icon: pen-to-square
date: 2025-12-11
star: true
order: 65
category:
  - dockerfile
tag:
  - dockerfile
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: dockerfile
---

# 这是因为 TypeScript 编译器 `tsc` 没有找到，通常是依赖安装不完整导致的。

## 问题分析

### 错误原因

```bash
sh: 1: tsc: not found
# TypeScript 编译器未安装或不在 PATH 中
```

## 解决方案

### 方案一：检查依赖安装

```dockerfile
# 确保安装了所有依赖（包括 devDependencies）
COPY package*.json ./
RUN npm ci  # 移除 --only=production
```

### 方案二：完整的 Dockerfile

```dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# 复制依赖文件
COPY package.json package-lock.json ./

# 安装所有依赖（包括 devDependencies）
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# 复制源代码
COPY . .

# 构建项目
RUN npm run build:stage

# 生产镜像
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### 方案三：确认 TypeScript 安装

```dockerfile
# 调试版本：检查 TypeScript 是否安装
RUN npm list typescript
RUN which tsc || echo "tsc not found"
RUN npm run build:stage
```

### 方案四：使用 npx 运行

```json
// package.json - 修改 scripts
{
  "scripts": {
    "build:stage": "npx tsc -b && npx vite build --mode stage"
  }
}
```

## 常见原因

### 1. 只安装了生产依赖

```dockerfile
# ❌ 这会跳过 devDependencies
RUN npm ci --only=production

# ✅ 构建时需要所有依赖
RUN npm ci
```

### 2. TypeScript 版本问题

```json
// 检查 package.json 中是否有 TypeScript
{
  "devDependencies": {
    "typescript": "~5.9.3", // 确保存在
    "vue-tsc": "^3.1.4" // Vue 的 TypeScript 编译器
  }
}
```

**最可能的解决方案：** 移除 `--only=production`，确保安装了包括 TypeScript 在内的所有开发依赖。
