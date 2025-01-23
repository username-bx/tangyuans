---
title: table scroll
shortTitle: table scroll
icon: pen-to-square
date: 2024-09-19
order: 26
tag:
  - table scroll
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: table scroll
---

# table 滚动, 固定表头，tbody 滚动

在实际开发中，我们经常需要处理大量数据的表格，而且通常需要固定表头，只让表格内容部分滚动。以下是一个实现这种效果的 HTML 和 CSS 示例：

```html
<table class="w-full">
  <thead>
    <tr>
      <th class="w-24 min-w-24">Name</th>
      <th class="w-auto">Age</th>
      <th class="w-auto">Gender</th>
    </tr>
  </thead>
  <tbody class="w-full block lg:h-[50dvh] overflow-y-auto h-[300px]">
    <tr class="w-full table">
      <td class="w-24 min-w-24">John Doe</td>
      <td class="w-auto">30</td>
      <td class="w-auto">Male</td>
    </tr>
  </tbody>
</table>
```

## 1.

使用 w-24 min-w-24 和 w-auto 来设置列的宽度，min-w-24 确保列的最小宽度为 24，w-auto 表示列的宽度根据内容自动调整。

> 要保证 w-auto 宽度一致，需要加一个 <span> class="w-24 min-w-24">...</span> 标签，并设置宽度为 24

1. th td 左右对齐
2. tbody 滚动

## 2.

```shell

  <tbody class="w-full block lg:h-[50dvh] overflow-y-auto h-[300px]">
    <tr class="w-full table"></tr>
  </tbody>

```

## 3.

```shell

<thead class="table" :class="cn([formatData?.length < 20 ? 'w-full' : 'w-[calc(100%-1rem)]',])">
</thead>

```
