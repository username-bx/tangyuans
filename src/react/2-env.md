---
title: 环境搭建
shortTitle: react
image: /assets/images/navicat.png
icon: pen-to-square
date: 2024-05-25
order: 2
tag: 
  - react
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: react 
---


# 环境搭建


## 1. 使用官方脚手架搭建

```shell

npx create-react-app xxxxx
cd xxxxx
npm start


```


## 2. index.js

凡是使用JSX的文件，必须导入React

```js

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<h1>Hello World <span>span元素</span></h1>, document.getElementById('root'));


```
