---
title: cloudflare debug
shortTitle: cloudflare debug
icon: pen-to-square
date: 2026-06-09
star: true
order: 69
category:
  - cloudflare
tag: 
  - cloudflare
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: cloudflare
---

# cloudflare debug

## 1. 本地调试 Workers

1. 更新 wrangler

```sh
pnpm install -g wrangler@latest
```
2. 调试命令

```sh
npx wrangler dev --remote
```
3. wrangle session 过期

如果出现 `[ERROR] Could not create remote preview session on your account` 的错误，运行以下命令，重新登录：

```sh
npx wrangler logout
npx wrangler login

# 删除缓存
rm -rf ./.wrangler
rm -rf ./node_modules
```



