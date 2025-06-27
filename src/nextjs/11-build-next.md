---
title: nextjs项目build后部署（不使用docker部署）
shortTitle: next.config.js
image: 
icon: pen-to-square
date: 2025-06-25
order: 11
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---

# nextjs项目build后，部署node服务



1. 配置文件 output 只能为  standalone


```js

const nextConfig: NextConfig = {
    output: "standalone",
}


```


2. 打包后的静态文件更改位置

```shell

mv .next/static .next/standalone/.next


```


2. env.production


```bash

NODE_ENV=production bun run build

```