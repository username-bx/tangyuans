---
title: 4. 重新学习vue3 响应式ref
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



# ref

## 1. ref 在模版中使用
1. 当ref的值为时，模板不需要.value
2. 当ref的值为对象时，模板不需要.value

```vue
<template>
  <div>{{ num }}</div>
  <div>{{ person.name }}</div>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
const person = ref({ name: 'tom' })

setTimeout(() => {
  // 需要 .value
  num.value++
  // 需要 .value
  person.value.name = 'bill'
}, 2000)
</script>
```


## 2. ref

1. 使用 ref 包裹一个对象，ref.value 不等于 原始对象

```vue
<template>
  <div>{{ refObj.id }}</div>
</template>

<script setup>
import { ref } from 'vue'

const originObj = { id: 1 }
const refObj = ref(originObj)

console.log(refObj.value === originObj)  //false
</script>
```


## 3. ref 和 reactive 改变原始对象，不会响应式更新Dom

```vue
<template>
  <div>{{ refObj.id }}</div>
  <div>{{ reactiveObj.id }}</div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const originObj = { id: 1 }
const refObj = ref(originObj)
const reactiveObj = reactive(originObj)

setTimeout(() => {
  originObj.id++
  console.log(originObj)
}, 2000)
</script>
```


