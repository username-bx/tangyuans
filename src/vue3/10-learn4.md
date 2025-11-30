---
title: 4. 重新学习vue3 响应式ref
shortTitle: vue3
icon: file-code
date: 2025-11-27
order: 10
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


## 1. 使用 ref 创建一个响应式数据
```vue
<template>
  <div>{{ num }}</div>
</template>

<script setup>
import { ref } from 'vue'
const num = ref(0)
</script>
```
## 2. ref 可以创建任意类型的值，原始值，对象，数组
```vue
<template>
  <div>{{ person.name }}</div>
</template>

<script setup>
import { ref } from 'vue'
const person = ref({ name: 'tom' })
</script>
```

## 3. ref 创建的对象是深层次的响应式

尤其是嵌套对象的时候

```vue
<template>
  <div>{{ person.name }}</div>
</template>

<script setup>
import { ref } from 'vue'
const person = ref({ name: 'tom'，cars: {
    type: 'tokyo',
    money: '20'
}})
</script>
```
## 4. shallowRef 创建浅层的响应式

```js
import { shallowRef } from 'vue'
const num = shallowRef(0);
```


## 5. 响应式数据的更新和Dom的更新

异步更新Dom
nextTick()

```js
// nextTick 两种使用方式
async function handleClick() {
  num.value++
  console.log(num.value)
  await nextTick()
  console.log(num.value)
}

function handleClick() {
  num.value++
  console.log(num.value)
  nextTick(() => {
    console.log(num.value)
  })
}
```


## 1. ref 在模版中使用
1. 当ref的值为原始值时，模板不需要.value
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



## 问题： ref 包含了 reactive 的功能， reactive还需要用吗，什么时候只能使用reactive？
