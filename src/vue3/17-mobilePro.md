---
title: vue3移动端项目
shortTitle: vue3移动端项目
icon: file-code
date: 2025-11-26
order: 4
star: true
tag:
  - vue3移动端项目
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3移动端项目
---

# vue3 移动端项目

## 1. vue 脚手架搭箭

```sh
pnpm create vue@latest
```

## 2. 安装 axios

```sh
pnpm add axios
```

## 3. 安装 vant ui 库

```sh
pnpm add vant

# 自动导入
pnpm add @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
```

## 4. ui 组件自动导入

```sh
pnpm add @vant/auto-import-resolver unplugin-vue-components unplugin-auto-import -D
```

## 5. 配置 vite config

```js
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";

export default {
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

## vant 桌面端适配

```sh
# 安装模块
pnpm i @vant/touch-emulator -S
```

使用方式

```js
// main.ts 引入css
// vant
import "@vant/touch-emulator";
```

## 6. 安装 postcss

```sh
pnpm add postcss-mobile-forever -D
pnpm add autoprefixer -D
```

## 配置 postcss

```js
// 修改配置后重启服务生效
export default {
  plugins: {
    // 自动添加浏览器前缀
    autoprefixer: {},
    // 移动端适配插件
    "postcss-mobile-forever": {
      // UI 设计稿宽度
      viewportWidth: (file: string) => (file.includes("vant") ? 375 : 375),
      // 限制视图的最大宽度
      maxDisplayWidth: 420,
      // 页面最外层选择器
      appSelector: "#app",
      // 是否对「页面最外层选择器」对应的元素进行描边
      border: true,
      // 转换单位后保留的小数点位数
      unitPrecision: 3,
      // 转换后的单位
      mobileUnit: "vw",
      // 需要转换的属性
      propList: ["*"],
      // 忽略的选择器
      selectorBlackList: [".ignore", ".keep-px"],
      // 忽略的属性
      propertyBlackList: {
        ".van-icon": "font",
      },
      // 忽略的属性值
      valueBlackList: ["1px"],
      // 忽略的目录或文件
      exclude: [],
      // 包含块是根元素的选择器列表
      rootContainingBlockSelectorList: [".van-tabbar", ".van-popup"],
    },
  },
};
```

## 7. 新增 main.css

```css
# main.css #app {
  height: 100%;
}
```

```js
// main.ts 引入css
import "./main.css";
```

## 8. 安装 进度条 插件

```sh
pnpm add nprogress
```

使用方式

```js
// main.ts 引入css
import "./main.css";
```

## 9. 安装 vconsole 插件

```sh
pnpm add vconsole
```

使用方式

```js
import VConsole from "vconsole";

const vConsole = new VConsole();
// or init with options
const vConsole = new VConsole({ theme: "dark" });

// call `console` methods as usual
console.log("Hello world");

// remove it when you finish debugging
vConsole.destroy();
```

## 10. 安装 vue-use

```sh
pnpm i @vueuse/core
```
