---
title: 工具方法
shortTitle: util method
image: /assets/images/navicat.png
icon: pen-to-square
date: 2024-06-14
order: 21
tag: 
  - util method
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: util method
---


# 工具方法


```js
const requsetData = [
  { type: "1", min: 1, max: 10 },
  { type: "2", min: 1, max: 10 },
  { type: "3", min: 1, max: 10 },
  { type: "14", min: 1, max: 10 },
  { type: "15", min: 1, max: 10 },
  { type: "16", min: 1, max: 10 },
  { type: "77", min: 1, max: 10 },
  { type: "88", min: 1, max: 10 },
  { type: "99", min: 1, max: 10 },
];
const dic = [
  { value: 1, text: "AAAAA", remarks: "group1", sortOrder: 1 },
  { value: 2, text: "BBBBB", remarks: "group1", sortOrder: 2 },
  { value: 3, text: "BBBBB", remarks: "group1", sortOrder: 3 },

  { value: 14, text: "aaaa", remarks: "group2", sortOrder: 4 },
  { value: 15, text: "bbbb", remarks: "group2", sortOrder: 5 },
  { value: 16, text: "cccc", remarks: "group2", sortOrder: 6 },

  { value: 77, text: "1111", remarks: "group3", sortOrder: 7 },
  { value: 88, text: "2222", remarks: "group3", sortOrder: 8 },
  { value: 99, text: "3333", remarks: "group3", sortOrder: 9 },
];

/**
 * 1. 映射 添加名字
 * 2. 根据sortOrder 排序
 * 3. group1 group2 group3 分组
 * 4. 分组添加 colSpan 自定义的数据
 * @param data 数据数组
 * @param orderArr 排序数组 映射名字关系
 * @returns 
 */
function format(data, orderArr) {
  let result = [];
  if (data?.length === 0 || orderArr?.length === 0) {
    return result;
  }
  return result = data
    .map((eachData) => {
      const temp = orderArr.find((i) => Number(i.value) === Number(eachData.type));
      return {
        ...eachData,
        text: temp?.text,
        remarks: temp?.remarks,
        sortOrder: temp?.sortOrder,
      };
    })
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .reduce((pre, cur) => {
      const length = pre.length;
      if (length === 0) {
        return pre.concat(
          { text: cur.remarks, remarks: cur.remarks, isColSpan: true },
          cur
        );
      } else {
        const last = pre[length - 1];
        if (last.remarks === cur.remarks) {
          return pre.concat(cur);
        } else {
          return pre.concat(
            { text: cur.remarks, remarks: cur.remarks, isColSpan: true },
            cur
          );
        }
      }
    }, []);
}

const finalData = format(requsetData, dic);
console.log("finalData", finalData);



```