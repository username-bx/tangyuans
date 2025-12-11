---
title: 一个 vue3 的 mobie web程序，在pc的chrome 手机模式下，高度显示正常，但是手机上的chrome显示高度不对，怎么优化
shortTitle: 一个 vue3 的 mobie web程序，在pc的chrome 手机模式下，高度显示正常，但是手机上的chrome显示高度不对，怎么优化
icon: pen-to-square
date: 2025-12-11
star: true
order: 62
category:
  - vue3 mobie
tag:
  - vue3 mobie
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3 mobie
---

这通常是移动端浏览器地址栏/工具栏导致的视口高度问题。

**问题原因：**

```
PC模拟器: 100vh = 屏幕高度
手机浏览器: 100vh = 屏幕高度（包含地址栏），实际可视区域更小
```

**解决方案：**

**方式一：使用 dvh（推荐）**

```css
.container {
  height: 100dvh; /* dynamic viewport height */
}
```

`dvh` 会随地址栏收起/展开动态变化，现代移动浏览器都支持。

**方式二：JS 动态计算**

```js
// main.js 或 App.vue
function setVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVh();
window.addEventListener("resize", setVh);
```

```css
.container {
  height: calc(var(--vh, 1vh) * 100);
}
```

**方式三：使用 svh/lvh**

```css
.container {
  /* svh: 最小视口（地址栏展开时） */
  /* lvh: 最大视口（地址栏收起时） */
  min-height: 100svh;
  /* 或固定用小视口 */
  height: 100svh;
}
```

**完整示例：**

```vue
<template>
  <div class="app">
    <header>头部</header>
    <main>内容</main>
    <footer>底部</footer>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.app {
  height: 100dvh;
  /* 兼容旧浏览器 */
  height: 100vh;
  height: 100dvh;

  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  overflow-y: auto;
}
</style>
```

**兼容性写法：**

```css
.container {
  /* 回退方案 */
  height: 100vh;
  height: -webkit-fill-available;
  height: 100dvh;
}
```

建议优先用 `dvh`，2023 年后的移动浏览器基本都支持。
