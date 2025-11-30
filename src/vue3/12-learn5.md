---
title: 5. 重新学习vue3 响应式reactive
shortTitle: vue3
icon: file-code
date: 2025-11-30
order: 12
star: true
tag:
  - vue3
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vue3
---

# 5. 重新学习vue3 响应式reactive

## 1. rective 创建一个响应式对象

## 2. ref 和 reactive
- vue 使用 proxy API创建响应式，但是 proxy 只能代理对象。
- ref 使用 defined
- reactive 使用 proxy
- ref 实际调用了 reactive API

### 此时产生的问题:
- reactive 性能更好，应该推荐用户使用 reactive。
- ref 实际调用 reactive，是不是代表：只需要 ref

## 3. shallowReactive



## 最佳实践

声明响应式推荐使用 ref

## reactive 局限性

- 不能声明原始值
- 
