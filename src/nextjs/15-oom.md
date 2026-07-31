---
title: nextjs 内存泄露
shortTitle: nextjs 内存泄露
image:
icon: pen-to-square
date: 2025-11-25
order: 15
star: true
tag:
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs
---

# nextjs 内存泄露

1. 更新next版本 16.2.9

官网

```sh
bun add next@latest react@latest react-dom@latest
```

2. 修改next.config.ts 配置文件
   - ppr
   - dynamic
   - cachecomponent

3. 设置内存快照
