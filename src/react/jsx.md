---
title: jsx
shortTitle: react jsx
image: /assets/images/navicat.png
icon: pen-to-square
date: 2024-05-25
order: 4
tag: 
  - react jsx
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: react jsx
---

# jsx

## 1. jsx

1. jsx 本质是一个对象, 是一个 React.createElement 生成的对象.

1. 表达式 需要加 ()

2. 只有一个根节点

3. <></> 语法糖



## 2. 在 jsx 中写表达式

### 1. 将表达式作为内容的一部分

1. 普通表达式

```js

const a = 1
const b = 2

const div = (
  <div>
    {a} * {b} = {a * b}
  </div>
)

```

2. null、undefined、false不会显示

```js

const a = 1
const b = 2

const div = (
  <div>
    <p>null</p>
    <p>false</p>
    <p>undefined</p>
    {/* 0 会显示 */}
    <p>0</p>
  </div>
)

```

3. 普通对象 不能做为子元素

```js

const obj = { name: 'aaa' }

const div = (
  <div>
    {/* 报错 */}
    <p>{obj}</p>
  </div>
)

```

4. 可以放数组 

```js

const arr = [1, 2, 3]
const arr1 = [1, 2, 3, {age: 18}]

const div = (
  <div>
    {/* ok */}
    <p>{arr}</p>
    {/* 报错 */}
    <p>{arr1}</p>
  </div>
)

```
5. 可以放置React元素对象

```js

const arr = [1, 2, 3]

const lis = arr.map(item => (<li>item</li>))

const div = (
  <div>
    {/* 报错 */}
    <p>{lis}</p>
  </div>
)

```

### 2. 将表达式作为属性

6. 属性

属性可以是正常的对象


```js

const url = "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2962719555,3613138778&fm=27&gp=0.jpg";
const cls = "image";
const div = (
    <div>
        <img src={url} className={cls} style={{
            marginLeft: "50px",
            width:"200px"
        }} alt="" />
    </div>
);

```

7. 特殊字符 防止注入攻击
  - 自动编码
  - dangerouslySetInnerHTML

```js
const content = "<h1>标题</h1><p>小标题</p>";
const div = (
    <div dangerouslySetInnerHTML={{
        __html: content
    }}>
    </div>
);

```


## 3. 元素的不可变性


```js

let num = 0;

setInterval(() => {
    num++;
    const div = (
        <div title="name">
            {num}
        </div>
    );
    ReactDOM.render(div, document.getElementById("root"));
}, 1000);

// Object.frez(obj)

// div是一个react元素对象
// 不能更改
div.props.title = 'newname'
// 不能更改
div.props.childre = 2

```