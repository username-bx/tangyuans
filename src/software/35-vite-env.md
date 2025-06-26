---
title: react项目 vue项目 vite打包设置 env 环境变量
shortTitle: vite
icon: pen-to-square
date: 2025-06-24
order: 35
tag: 
  - vite
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vite
---

# env 环境变量 （vite打包）

## Vite 支持 .env.production，但变量必须以 VITE_ 开头。

```env

VITE_API_URL=https://api.example.com
VITE_LOG_LEVEL=error


```

## 在代码中使用

```js

const apiUrl = import.meta.env.VITE_API_URL;

```
