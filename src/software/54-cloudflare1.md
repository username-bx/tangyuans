---
title: cloudflare 部署 vuepress 静态页面
shortTitle: cloudflare
icon: pen-to-square
date: 2025-11-05
star: true
order: 54
category:
  - cloudflare vuepress
tag: 
  - cloudflare vuepress
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: cloudflare vuepress
---


# cloudflare 部署 github 静态的 vuepress 项目

1. 登录 cloudflare 面板

```bash

https://dash.cloudflare.com/

```

2. 左侧 Compute&AI

3. Workers & Pages
![图片](./image/cloudflare1.png)

4. create

5. connet github

6. set Build configuration

```shell

1. BUild Command 参考package.json
2. Build output directory 填写build后生成的静态文件的路径

```
![图片](./image/cloudflare2.png)


