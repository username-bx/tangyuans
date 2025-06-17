# React 防止点击时选中文字的几种方法

在使用 React 开发交互组件时，经常会遇到一个问题：**用户点击元素时，意外选中其中的文字**，这会影响交互体验，尤其是在按钮、拖拽、卡片点击等场景中。

以下是几种常见的解决方案：

---

## ✅ 方法一：使用 CSS 禁止用户选择文字

通过 CSS `user-select: none` 属性，禁止用户选中该区域内的文字。

```css
/* CSS 样式 */
.noselect {
  user-select: none;
  -webkit-user-select: none; /* Chrome/Safari */
  -moz-user-select: none;    /* Firefox */
  -ms-user-select: none;     /* IE/Edge */
}

function MyButton() {
  return (
    <div className="noselect" onClick={handleClick}>
      点击我不会选中文字
    </div>
  );
}

<div style={{ userSelect: 'none' }} onClick={handleClick}>
  点我不会选中文字
</div>
```

## ✅ 方法二：onMouseDown 中阻止默认行为（推荐）
```jsx
function MyComponent() {
  const handleClick = () => {
    console.log('点击了！');
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // 阻止选中文字
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onClick={handleClick}
      style={{
        cursor: 'pointer',
        padding: '10px',
        border: '1px solid #ccc',
        userSelect: 'none', // 可选，进一步保障
      }}
    >
      点我不会选中文字
    </div>
  );
}
```

## ✅ 方法三：点击后清除文字选择
```jsx
function handleClick() {
  if (window.getSelection) {
    window.getSelection().removeAllRanges(); // 清除选中内容
  }
}

```