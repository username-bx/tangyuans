---
title: 组件
shortTitle: react component
image: /assets/images/navicat.png
icon: pen-to-square
date: 2024-05-26
order: 5
tag: 
  - react component
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: react component
---

# 组件

## 1. 组件

组件是 ui 单元  (内容、样式和功能)

## 2. 创建组件

1. 函数组件

1. 函数名用于组建虚拟 dom 树.可以是匿名函数,dom 树的节点为unknow
2. **函数名必须是大驼峰** (本质是更改 React 元素对象的 type 如果是小写，认为是一个普通的react元素，而不是react组件)
3. 返回一个 React 元素对象


```js
// import React form 'react'

function MyFuncComp () {
    return (<span>函数组件</span>)
}

```

2. 类组件

1. 必须继承 React.Component
2. 必须有render函数 返回一个 React 元素对象

```js

// import React form 'react'

class MyFuncComp extend React.Component() {
    render () {
        return (<span>类组件</span>)
    }
}

```

```js

// import React, { Component } form 'react'

class MyClassComp extend Component() {
    render () {
        return (<span>类组件</span>)
    }
}

```






## 3. 组件的使用


1. 函数执行的方式

```js

import MyFuncComp form './MyFuncComp'

function App () {
    return (<div>
        (MyFuncComp())
    <div>)
}

```



2. 表达式


```js

import MyFuncComp form './MyFuncComp'

const comp = MyFuncComp()
// const comp = <MyFuncComp />

function App () {
    return (<div>
        (comp)
    <div>)
}

```

3. 作为组件使用，会组建dom树，节点名称为函数名，本质是更改 React 元素对象的 type


```js

import MyFuncComp form './MyFuncComp'

function App () {
    return (<div>
        <MyFuncComp />
    <div>)
}

```

## 4. 组件的属性

1. 对于函数组件，属性会作为一个对象的属性，传递给函数的参数
2. 对于类组件，属性会作为一个对象的属性，传递给构造函数(constructor)的参数

注意：组件的属性，应该使用小驼峰命名法


```js
// MyFuncComp.jsx
import React from 'react'

export default function MyFuncComp(props) {
    // return <h1>函数组件的内容</h1>
    return <h1>函数组件，目前的数字：{props.number}</h1>
}

```
```js

// App.jsx
export default function App () {
    return <div>
                <MyFuncComp number="2" />
                <MyFuncComp number={5} />
                <MyFuncComp number={6} />
            <div>
}

```



```js
// MyClassComp.jsx
import React from 'react'

export default class MyClassComp extends React.Component {

    // constructor(props) {
    //     super(props); // this.props = props;
    //     console.log(props, this.props, props === this.props);
    // }

    /**
     * 该方法必须返回React元素
     */
    render() {
        if (this.props.obj) {
            return (
                <>
                    <p>
                        姓名：{this.props.obj.name}
                    </p>
                    <p>
                        年龄：{this.props.obj.age}
                    </p>
                </>
            );
        }
        else if (this.props.ui) {
            return (
                <div>
                    <h1>下面是传入的内容</h1>
                    {this.props.ui}
                </div>
            );
        }
        return <h1>类组件的内容，数字：{this.props.number}</h1>
    }
}



// App.jsx
export default function App () {
    return <div>
                <MyFuncComp number="2" />
                <MyFuncComp obj={ {name: 'a', age: 12} } />
                <MyFuncComp ui={ <h2>xxxx</h2> } />
            <div>
}

```

## 5. 组件中的数据

数据属于谁(哪个组件)，(那个组件)谁有权利可以更改。