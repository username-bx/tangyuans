---
title: 数字千分位
shortTitle: nextjs 数字千分位
image: 
icon: pen-to-square
date: 2025-04-23
order: 8
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---



```js


export function formatNumber(
  num: number,
  {
    minimumFractionDigits,
    maximumFractionDigits = 2,
  }: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  } = {},
) {
  return new Intl.NumberFormat("en", {
    minimumFractionDigits,
    maximumFractionDigits,
    roundingMode: "floor",
  }).format(num);
}



```