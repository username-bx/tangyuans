---
title: mac连接iphone，调试web软件
shortTitle: mac连接iphone，调试web软件
icon: pen-to-square
date: 2026-01-20
star: true
order: 67
category:
  - mac iphone
tag:
  - mac iphone
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: mac iphone
---

**步骤**

**1. iPhone 设置**

设置 → Safari → 高级 → 打开「网页检查器」

**2. Mac 设置**

Safari → 设置 → 高级 → 勾选「在菜单栏中显示"开发"菜单」

**3. 连接调试**

1. 用数据线连接 iPhone 和 Mac
2. iPhone 上信任此电脑
3. iPhone Safari 打开要调试的网页
4. Mac Safari → 开发 → 选择你的 iPhone → 选择网页

**调试 WebView / 微信等**

如果是 App 内的 WebView，需要 App 开启了调试模式才能看到。

**调试 Chrome 网页**

iPhone Chrome 不支持 Safari 调试，只能用 Safari 打开网页调试。

---

**常见问题**

| 问题             | 解决                     |
| ---------------- | ------------------------ |
| 看不到设备       | 重新插拔数据线，信任电脑 |
| 看不到网页       | 确认「网页检查器」已开启 |
| 开发菜单没有设备 | 重启 Safari，重连        |

**替代方案：无线调试**

iOS 16+ 支持无线调试，但稳定性不如有线。
