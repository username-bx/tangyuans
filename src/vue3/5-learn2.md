---
title: 2. 重新学习vue3 搭建工程
shortTitle: vue3
icon: file-code
date: 2025-11-26
order: 5
star: true
tag: 
  - vue3
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3
---

# 重新学习vue3 

## 1. 项目搭建

两种方式

```bash
npm create vue@latest
```

```bash
npm create vite@latest my-vue-app -- --template vue
```

## 2. vue开发需要的vscode插件

1. Vue(official)
2. Eslient
3. Prettier
4. EditorConfig for VS Code
5. Vue VSCode Snippets



## ⚠️ **Prettier 不处理的一些 EditorConfig 范围**

比如：

* `end_of_line`（LF/CRLF） → Prettier *不一定会自动修复为指定格式*
* `insert_final_newline`（文件末尾空行） → Prettier 默认会插，但不能覆盖所有情况
* 去除行尾空格 → Prettier 可做，但某些编辑器层面仍由 EditorConfig 更稳定地控制
* 使用 tab 还是 space → Prettier 可设置，但 EditorConfig 可以作为所有编辑器通用的“硬规则”

## ⭐ 最佳做法（团队常用）

**EditorConfig + Prettier 组合使用**

* `.editorconfig`：统一最基础、跨编辑器的规则
* `prettier`：统一复杂的代码格式

## 📌 总结一句

> Prettier 能覆盖大部分格式化功能，但 EditorConfig 更适合作为“基础统一规则”，两者常一起使用，更稳定。



## vite config


https://cn.vite.dev/config/shared-options


1. base

```
开发或生产环境服务的公共基础路径。合法的值包括以下几种：

绝对 URL 路径名，例如 /foo/
完整的 URL，例如 https://bar.com/foo/ （域名部分在开发环境中不会被使用，因此该值与 /foo/ 相同）
空字符串或 ./（用于嵌入形式的开发）

```
2. server
3. build



## vite插件 包依赖

pnpm add -D vite-plugin-vue-devtools


```js
// vite.config.ts
//  Configuration Vite

import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vueDevTools(),
  ],
})
```