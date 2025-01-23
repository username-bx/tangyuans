---
title: 事件
shortTitle: react component event
image: /assets/images/navicat.png
icon: pen-to-square
date: 2024-05-28
order: 7
tag: 
  - react component event
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: react component event
---


# 事件

## 1. react 元素


## 2. 自定义 react 元素

1. 在React中，组件的事件，本质上就是一个属性

按照之前React对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法

**如果没有特殊处理，在事件处理函数中，this指向undefined**

1. 使用bind函数，绑定this
2. 使用箭头函数


```js

import React, { Component } from 'react'
import Tick from "./Tick"

export default class TickControl extends Component {

    state = {
        isOver: false //倒计时是否完成
    }

    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    //     this.handleOver = this.handleOver.bind(this);
    // }

    handleClick() {
        console.log(this)
        console.log("点击了")
    }

    handleOver() {
        this.setState({
            isOver: true
        })
    }

    render() {
        let status = "正在倒计时";
        if (this.state.isOver) {
            status = "倒计时完成";
        }
        return (
            <div>
                <Tick
                    onClick={this.handleClick.bind(this)}
                    onOver={this.handleClick.bind(this)}
                    number={10} />
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}


```


```js

import React, { Component } from 'react'
import Tick from "./Tick"

export default class TickControl extends Component {

    state = {
        isOver: false //倒计时是否完成
    }

    // 结果：handleClick不在原型上，而在对象上
    handleClick = () => {
        console.log(this)
        console.log("点击了")
    }

    handleOver = () => {
        this.setState({
            isOver: true
        })
    }

    render() {
        let status = "正在倒计时";
        if (this.state.isOver) {
            status = "倒计时完成";
        }
        return (
            <div>
                <Tick
                    onClick={this.handleClick}
                    onOver={this.handleClick}
                    number={10} />
                <h2>
                    {status}
                </h2>
            </div>
        )
    }
}


```