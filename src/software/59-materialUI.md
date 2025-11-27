---
title: metarial template怎么使用
shortTitle: metarial
icon: pen-to-square
date: 2025-10-13
star: true
order: 59
category:
  - metarial
tag: 
  - metarial
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: metarial
---

# 使用 material 

```shell

website: https://mui.com/material-ui/getting-started/templates/

```
![图片](./image/materialUI1.png)


```shell

website: https://github.com/mui/material-ui/blob/v7.3.5/docs/data/material/getting-started/templates/dashboard/README.md


```

## Dashboard template

### Usage

<!-- #target-branch-reference -->

1. Copy these folders (`dashboard` and `shared-theme`) into your project, or one of the [example projects](https://github.com/mui/material-ui/tree/master/examples).
2. Make sure your project has the required dependencies: @mui/material, @mui/icons-material, @emotion/styled, @emotion/react, @mui/x-charts, @mui/x-date-pickers, @mui/x-data-grid, @mui/x-tree-view, dayjs
3. Import and use the `Dashboard` component.

### Demo

<!-- #host-reference -->

View the demo at https://mui.com/material-ui/getting-started/templates/dashboard/.



## 新建项目

```shell
npm create vite@latest notebook -- --template react-ts
```

## 添加material UI


```shell

npm install @mui/material @emotion/react @emotion/styled


npm install @mui/icons-material


npm install @mui/x-charts @mui/x-date-pickers @mui/x-data-grid @mui/x-tree-view dayjs

```

克隆项目


```shell

git clone https://github.com/mui/material-ui.git

```

复制文件到自己项目中

```shell

docs/data/material/getting-started/templates/dashboard

两个文件夹 dashboard  shard-theme 复制到 src/ 下面

```



✘ [ERROR] The JSX syntax extension is not currently enabled


[plugin:vite:import-analysis] Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.