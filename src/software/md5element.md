---
title: 使用md5检查el-table中,被修改的一行数据
shortTitle: md5 element
icon: pen-to-square
date: 2024-05-23
order: 8
tag:
  - md5 element
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: md5 element
---

# 使用 md5 检查 el-table 中,被修改的一行数据

## 1. 安装包 md5 (vue2)

```shell
npm i -S js-md5

```

## 2. 在组件中导入包

```javascript
import md5 from "js-md5";

export default {
  data() {
    return {
      list: [],
      listInitDataMd5: {},
      listModifiedDataMd5: {},
    };
  },
  methods: {
    getList () {
      // 获取数据，每一行数据都保存一个md5 { key: value } 形式
      this.list.forEach(row => {
        const id = row['id']
        this.listInitDataMd5[roomId] = md5(JSON.stringify(row))
      })
    }，
    handleSubmit () {
      // 提交数据之前，每一行数据都保存一个md5 { key: value } 形式
      this.list.forEach(row => {
        const id = row['id']
        this.listModifiedDataMd5[id] = md5(JSON.stringify(row))
      })
      // id 数组
      const idArr = Object.keys(this.listInitDataMd5)
      // md5不匹配的 ids
      const idsModefied = idArr.filter(id => this.listInitDataMd5[id] !== this.listModifiedDataMd5[id])
      // 从list筛选出有变化的数据
      const patchDataList = this.list.filter(row => idsModefied.includes(row.id))
    }
  }
};



// *需要注意的是：input 输入框中的数字，一旦修改就变成了字符串数字*
```
