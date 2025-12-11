---
title: mac连接android，调试web软件
shortTitle: mac连接android，调试web软件
icon: pen-to-square
date: 2025-12-11
star: true
order: 62
category:
  - mac android
tag:
  - mac android
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: mac android
---

**方式一：Chrome DevTools 远程调试（推荐）**

**手机端：**

1. 设置 → 关于手机 → 连续点击"版本号" 7 次开启开发者模式
2. 设置 → 开发者选项 → 开启 USB 调试
3. USB 连接 Mac，手机弹窗选择"允许调试"

**Mac 端：**

1. 打开 Chrome 浏览器
2. 地址栏输入 `chrome://inspect`
3. 勾选 "Discover USB devices"
4. 手机用 Chrome 打开网页
5. 页面会出现在列表中，点击 "inspect"
