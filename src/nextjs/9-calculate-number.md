---
title: 在js程序中，数字计算
shortTitle: 在js程序中，数字计算
image: 
icon: pen-to-square
date: 2025-04-23
order: 9
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---

```js
export function divide(num: number, divisor: number) {
  return new Big(num).div(divisor).toNumber();
}

```