---
title: 3. 重新学习vue3 模板语法
shortTitle: vue3
icon: file-code
date: 2025-11-26
order: 7
star: true
tag:
  - vue3
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3
---

# 3. 重新学习 vue3 模板语法

## 1. 文本插值

最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号)

```vue
<template>
  <div>{{ name }}</div>
</template>

<script setup>
const name = "lorem";
</script>
```

## 2.原始 HTML​
双大括号会将数据解释为纯文本，而不是 HTML。若想插入 HTML，你需要使用 v-html 指令

```vue
<template>
  <div>{{ htmlCode }}</div>
  <div v-html="htmlCode"></div>
</template>

<script setup>
const htmlCode = '<span style="color: red;">Lorem, ipsum.</span>'
</script>

```

内置指令：https://cn.vuejs.org/api/built-in-directives#v-html

自定义指令：https://cn.vuejs.org/guide/reusability/custom-directives

## 3. Attribute 绑定

双大括号不能在 HTML attributes 中使用。想要响应式地绑定一个 attribute，应该使用 v-bind 指令


```vue
<template>
  <div v-bild:id="customId">Lorem.</div>
  <!-- 简写 -->
  <div :id="customId">Lorem.</div>
</template>

<script setup>
const customId = 'my-id'
</script>
```


### 3.1 同名简写
```vue
<template>
  <div :id>Lorem.</div>
</template>

<script setup>
// 如果属性名和变量名相同 可以简写 仅支持 3.4 版本及以上
const id = 'same-id'
</script>
```



### 3.2 布尔型 Attribute

```vue
<template>
  <button :disabled="isDisable0">按钮</button>
  <button :disabled="isDisable1">按钮</button>
  <button :disabled="isDisable2">按钮</button>
  <button :disabled="isDisable3">按钮</button>
  <button :disabled="isDisable4">按钮</button>
  <button :disabled="isDisable5">按钮</button>
  <button :disabled="isDisable6">按钮</button>
</template>

<script setup>
const isDisable0 = false
const isDisable1 = true
const isDisable2 = 'str'
const isDisable3 = ''
const isDisable4 = 0
const isDisable5 = null
const isDisable6 = undefined
</script>
```



### 3.3 动态绑定多个值

如果有像这样的一个包含多个 attribute 的 JavaScript 对象
通过不带参数的 v-bind，你可以将它们绑定到单个元素上：
```vue
<template>
  <div v-bind="objectOfAttrs">Lorem.</div>
</template>

<script setup>
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green',
}
</script>

```


浏览器显示结果
```vue
<div id="container" class="wrapper" style="background-color: green;">Lorem.</div>
```

## 4. 使用 JavaScript 表达式


```vue
<template>
  <div>{{ number + 1 }}</div>

  <div>{{ ok ? 'YES' : 'NO' }}</div>

  <div>{{ message.split('').reverse().join('') }}</div>

  <div :id="`list-${id}`"></div>
</template>

<script setup>

const number = 3
const ok = false
const message = 'lorem'
const id = 1

</script>
```

在 Vue 模板内，JavaScript 表达式可以被使用在如下场景上：

- 在文本插值中 (双大括号)
- 在任何 Vue 指令 (以 v- 开头的特殊 attribute) attribute 的值中


### 4.1 仅支持表达式
每个绑定仅支持单一表达式，也就是一段能够被求值的 JavaScript 代码。

一个简单的判断方法是是否可以合法地写在 return 后面。

因此，下面的例子都是无效的：

```html
<!-- 这是一个语句，而非表达式 -->
{{ var a = 1 }}

<!-- 条件控制也不支持，请使用三元表达式 -->
{{ if (ok) { return message } }}

```


### 4.2 调用函数

```html
<time :title="toTitleDate(date)" :datetime="date">
  {{ formatDate(date) }}
</time>

```


### 4.3 受限的全局访问

模板中的表达式将被沙盒化，仅能够访问到有限的全局对象列表。该列表中会暴露常用的内置全局对象，比如 Math 和 Date。

有限的全局对象列表: 


```html
<template>
  <div>{{ Math.random() }}</div>
</template>
```



```js
const GLOBALS_ALLOWED =
  'Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,' +
  'decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,' +
  'Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol'
```

例如用户附加在 window 上的属性。然而，你也可以自行在 app.config.globalProperties 上显式地添加它们，供所有的 Vue 表达式使用。


```html
<template>
  <div>{{ name }}</div>
  <div>{{ age }}</div>
</template>

<script setup>
const name = 'lorem'
// window 上的属性 访问不到
window.age = 13
</script>

```
可以在 app.config.globalProperties 上显式地添加它们

```js
// main.js

const app = createApp(App)

app.config.globalProperties = {
  age: 12,
}

```