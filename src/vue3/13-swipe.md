---
title: Swiper vue3
shortTitle: Swiper
icon: pen-to-square
date: 2025-12-11
star: true
order: 13
category:
  - Swiper
tag:
  - Swiper
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Swiper
---

Vue 3 中使用 Swiper Element，根据内容动态显示 slides：

```vue
<template>
  <swiper-container :slides-per-view="'auto'" :space-between="10">
    <swiper-slide
      v-for="(item, index) in items"
      :key="index"
      style="width: auto;"
    >
      {{ item }}
    </swiper-slide>
  </swiper-container>
</template>

<script setup>
import { register } from "swiper/element/bundle";

register();

const items = ["短文本", "这是一段比较长的文本内容", "中等"];
</script>

<style>
swiper-slide {
  width: auto !important;
  white-space: nowrap;
}
</style>
```

**关键配置：**

- `slides-per-view="auto"` - 让每个 slide 根据内容自适应宽度
- `style="width: auto"` - slide 宽度由内容决定
- `white-space: nowrap` - 防止文字换行

如果需要告诉 Vue 这是自定义元素，在 `vite.config.ts` 添加：

```ts
vue({
  template: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper-"),
    },
  },
});
```
