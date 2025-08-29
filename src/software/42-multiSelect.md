---
title: shadcn 下拉多选框
shortTitle: shadcn 下拉多选框
icon: pen-to-square
date: 2025-08-29
star: true
order: 42
category:
  - shadcn
tag: 
  - shadcn 下拉多选框
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: shadcn 下拉多选框
---


# shadcn 下拉多选框

```shell

多选功能 全部选择 清除全部选择 一行展示 超多部分隐藏并显示数量

```

demo地址：https://shadcn-multi-select-component.vercel.app

github地址：https://github.com/sersavan/shadcn-multi-select-component



```js

    <MultiSelect
      options={gameNameOptions}
      onValueChange={setSelectedValues}
      defaultValue={selectedValues}
      searchable={false}
      autoSize={true}
      modalPopover={true}
      placeholder={t("placeholderselect")}
    />

```