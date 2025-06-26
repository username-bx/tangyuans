---
title: 复制到剪切板
shortTitle: 复制到剪切板
image: 
icon: pen-to-square
date: 2025-05-09
order: 10
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---


# 复制到剪切板

```js

import { useCopyToClipboard } from "react-use";
const [, copyToClipboard] = useCopyToClipboard();
copyToClipboard(inviteCode);



await navigator.clipboard.writeText('文本');

有些浏览器不支持 navigator.clipboard，特别是 HTTP 环境下（非 HTTPS）或 Safari 的某些旧版本

```