---
title: 搭建一个react项目
shortTitle: react
icon: pen-to-square
date: 2025-11-05
star: true
order: 53
category:
  - react
tag: 
  - react
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: react
---


# 搭建项目

## 1. react 官网

https://react.dev/learn/creating-a-react-app

```shell
npx create-react-router@latest

```
https://react.dev/learn/build-a-react-app-from-scratch

```shell
npm create vite@latest my-app -- --template react

```


## 2. vite 官网

1. vite + react

```shell
npm create vite@latest my-app -- --template react

```

2. vite + react + ts

```shell
npm create vite@latest my-app -- --template react-ts

```



## 添加vite/tailwind

https://tailwindcss.com/docs/installation/using-vite

```shell
npm install tailwindcss @tailwindcss/vite

```



```ts
# vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' // <---

export default defineConfig({
  plugins: [
    tailwindcss(),  // <---
  ],
})

```

```shell
# CSS

@import "tailwindcss";

```

```html
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="/src/style.css" rel="stylesheet"> // <---
</head>
<body>
  <h1 class="text-3xl font-bold underline">  // <---
    Hello world!
  </h1>
</body>
</html>

```


## 添加 react-router-dom

```shell

npm i react-router-dom

```

