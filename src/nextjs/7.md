---
title: 使用tzData，格式化带地区的时间
shortTitle: nextjs TZData
image: 
icon: pen-to-square
date: 2025-04-23
order: 7
tag: 
  - nextjs TZData
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs TZData 
---

```js
export function getDateRange(startTime: number, endTime: number) {
  const start = new TZDate(startTime, "Asia/Shanghai");
  const end = new TZDate(endTime, "Asia/Shanghai");
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const startDay = start.getDate();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();
  const endDay = end.getDate();
  const resultStart = new TZDate(startYear, startMonth, startDay, "Asia/Shanghai").getTime();
  const resultEnd = new TZDate(endYear, endMonth, endDay, "Asia/Shanghai").getTime();
  return { resultStart, resultEnd };
}


```