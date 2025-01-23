---
title: vue3中 实现复制到剪切板功能
shortTitle: vue3 clipbord vue-use
icon: pen-to-square
date: 2024-05-23
order: 9
tag:
  - vue3 clipbord vue-use
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3 clipbord vue-use
---

# vue3中 实现复制到剪切板功能


## 1. vue-clipbord3

```shell

npm install --save vue-clipboard3

```

```javascript

import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()

const url = ref()
await toClipboard(url.value)




const handleClickCopyApp = async () => {
  console.log('Copied to clipboard', url.value)
  try {
    await toClipboard(url.value)
    console.log('Copied to clipboard', url.value)
    ElMessage.success('复制成功')
  } catch (e) {
    console.error(e)
    ElMessage.success('复制失败')
  }
}

```


## 2. vue-use

```shell

// package.json

"@vueuse/core": "^10.9.0"

```

```javascript

import { useClipboard } from '@vueuse/core'
const { copy, isSupported } = useClipboard({ source })
const url = ref()
await copy(url.value)

async function handleClickCopyApp() {
  console.log('Copied to clipboard', url.value)
  try {
    await copy(url.value)
    console.log('Copied to clipboard', url.value)
    ElMessage.success('复制成功')
  }
  catch (e) {
    console.error(e)
    ElMessage.success('复制失败')
  }
}


```