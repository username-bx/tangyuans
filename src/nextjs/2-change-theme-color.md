---
title: nextjs 改变主题颜色
shortTitle: nextjs 改变shadcn主题颜色
image: 
icon: pen-to-square
date: 2024-10-26
order: 2
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---

# next项目 shadcn更换主题

在 global.css 中添加变量
bg-background
bg-foreground

text-primary
text-secondary
text-muted
text-brand

:root {
  --third: #f0f0f0;
}
.dark {
  --third: #121212;
}