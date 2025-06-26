---
title: 组件
shortTitle: react effect
image: /assets/images/navicat.png
icon: pen-to-square
date: 2024-09-13
order: 8
tag: 
  - react effect
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: react effect
---



[text](https://zh-hans.react.dev/learn/synchronizing-with-effects)


useEffect(() => {
  // 这里的代码会在每次渲染后执行
});

useEffect(() => {
  // 这里的代码只会在组件挂载后执行
}, []);

useEffect(() => {
  //这里的代码只会在每次渲染后，并且 a 或 b 的值与上次渲染不一致时执行
}, [a, b]);







effect 作用
1. 副作用 操作dom 只能在渲染后，才能执行
2. 不是交互引起的，组件渲染引起的
3. 只在渲染挂载后 执行一次


摘要

1. 与事件不同，Effect 是由渲染本身，而非特定交互引起的。
2. Effect 允许你将组件与某些外部系统（第三方 API、网络等）同步。
3. 默认情况下，Effect 在每次渲染（包括初始渲染）后运行。
4. 如果 React 的所有依赖项都与上次渲染时的值相同，则将跳过本次 Effect。
5. 不能随意选择依赖项，它们是由 Effect 内部的代码决定的。
6. 空的依赖数组（[]）对应于组件“挂载”，即添加到屏幕上。
7. 仅在严格模式下的开发环境中，React 会挂载两次组件，以对 Effect 进行压力测试。
8. 如果 Effect 因为重新挂载而中断，那么需要实现一个清理函数。 // 真正错误原因是 Effect 启动后，但没有提供清理函数，所以上一次的 Effect 残留就没有被除去。
9. React 将在下次 Effect 运行之前以及卸载期间这两个时候调用清理函数。



```js
const ref = useRef(null);

useEffect(() => {
  // ref 
  ref.current.focus()
  // 一个空的依赖数组 []  确保这个 Effect 只在组件挂载时执行而不是在每一轮渲染时都执行
}, [])

<input ref={ref} />
```



在 严格模式 下，React 在开发模式中，每个组件都会重复挂载一次。
然而，这并不是 React 本身的错：而是 Effect 代码中本身就存在问题。React 只不过把这个问题放大了。真正的错误原因是这样的 Effect 启动后，但没有提供清理函数，所以上一次的 Effect 残留就没有被除去。

```js
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }

    const intervalId = setInterval(onTick, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return <h1>{count}</h1>;
}

```



首先选择 Alice，然后选择 Bob，然后紧接着选择 Taylor。如果操作得足够快，会注意到这个错误：Taylor 被选中了，但下面的一段却说：“这是Bob的传记。”

```js

import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);

  useEffect(() => {
    setBio(null);
    fetchBio(person).then(result => {
      setBio(result);
    });
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? '加载中……'}</i></p>
    </>
  );
}

```

选中 'Bob' 触发 fetchBio('Bob')
选中 'Taylor' 触发 fetchBio('Taylor')
在 'Bob' 的数据完成加载之前，就已经完成了对 'Taylor' 的数据的加载
加载 'Taylor' 数据的 Effect 调用了 setBio('这是Taylor的传记')
加载完成 'Bob' 的数据
加载 'Bob' 数据的 Effect 调用了 setBio('这是Bob的传记')
这就是为什么即使 Taylor 被选中了，但显示的仍然是 Bob 的数据。这种问题被称之为 条件竞争，因为两个异步操作都在彼此竞争，谁先谁后是不可预期的。


```js

import { useState, useEffect } from 'react';
import { fetchBio } from './api.js';

export default function Page() {
  const [person, setPerson] = useState('Alice');
  const [bio, setBio] = useState(null);
  useEffect(() => {
    let ignore = false;
    setBio(null);
    fetchBio(person).then(result => {
      if (!ignore) {
        setBio(result);
      }
    });
    return () => {
      ignore = true;
    }
  }, [person]);

  return (
    <>
      <select value={person} onChange={e => {
        setPerson(e.target.value);
      }}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p><i>{bio ?? '加载中……'}</i></p>
    </>
  );
}


```