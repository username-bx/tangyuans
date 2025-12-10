---
title: 组合式api中的 watch
shortTitle: vue3
icon: file-code
date: 2025-11-28
order: 11
star: true
tag:
  - vue3
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3
---

# 组合式 api 中的 watch

1. 创建一个 useCount.js 文件，包含 变量 和 watch

```js
// useCount.ts
import { ref, watch } from "vue";

const count = ref(0);

const doubleCount = ref(0);

function handleChangeCount() {
  count.value++;
}

watch(count, () => {
  doubleCount.value = count.value * 2;
});

export function useCounter() {
  return {
    count,
    handleChangeCount,
    doubleCount,
  };
}
```

2. 在页面中使用, watch 会被加载进这个组件。

```js
<template>
  <button @click="handleChangeCount">count:{{ count }}</button>

  <span>doubleCount:{{ doubleCount }}</span>
</template>

<script setup>
import { useCounter } from './hooks/useCount'
const { count, handleChangeCount, doubleCount } = useCounter()
</script>

```

## 2. useCount 被复用，多个组件现实的值都是一样的

home 组件点击，hall 组件的值，也会发生改变。

1. App.vue

```js
<template>
  <HomeView />
  <HallView />
</template>

<script setup>
import HallView from './views/HallView.vue'
import HomeView from './views/HomeView.vue'
</script>
```

2. HomeView.vue

```js
<template>
  <button @click="handleChangeCount">count:{{ count }}</button>

  <span>doubleCount:{{ doubleCount }}</span>
</template>

<script setup>
import { useCounter } from '../hooks/useCount'
const { count, handleChangeCount, doubleCount } = useCounter()
</script>
```

3. HallView.vue

```js
<template>
  <button @click="handleChangeCount">count:{{ count }}</button>

  <span>doubleCount:{{ doubleCount }}</span>
</template>

<script setup>
import { useCounter } from '../hooks/useCount'
const { count, handleChangeCount, doubleCount } = useCounter()
</script>
```

## 3. 问题： 怎么复用一个 useCount，使其数据不互相影响。

在不同的文件中使用 useCount，等于每次执行函数 useCount。 为了达到数据不互相影响，需要把声明变量，保存数据放在函数体内。

```js
export function useCount() {
  const count = ref(0);

  const doubleCount = ref(0);

  function handleChangeCount() {
    count.value++;
  }

  return {
    count,
    handleChangeCount,
    doubleCount,
  };
}
```

声明变量，在函数外部，会共用一个数据。

```js
const count = ref(0);
const doubleCount = ref(0);

export function useCount() {
  function handleChangeCount() {
    count.value++;
  }

  return {
    count,
    handleChangeCount,
    doubleCount,
  };
}
```
