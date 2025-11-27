---
title: nextjs项目部署后，图片404
shortTitle: nextjs项目部署后，图片404
image: 
icon: pen-to-square
date: 2025-11-25
order: 14
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---


# nextjs项目部署后，图片404

## 1. 项目配置

```ts

const nextConfig: NextConfig = {
    output: "standalone",
}

```

## 2. 部署方式 

1. bun run build
2. node server.js


## 3. 项目代码

```js

<img
    src={`/images/${gameId}/${col}.png`}
    alt={col.toString()}
    className="inline-block object-contain"
    height={50}
    width={50}
/>

```

## 4. 出现的问题

```
https://abc.com/images/203/6.png 404 not found


```

## 4. 验证构建后的文件

```
# 构建项目
npm run build

# 检查构建后的静态文件
ls -la .next/static/
```

## 6. 问题分析

```
# .next/static/ 只包含：
- chunks/  (JS代码块)
- media/   (可能是优化后的媒体文件)
- rSiMOHbqr_RVSXAKi-Xkb/ (构建哈希目录)

# 但是没有 images/ 目录
# public/images/ 的文件没有被复制到构建输出中





# 构建后手动复制
npm run build
cp -r public .next/standalone/public

```

