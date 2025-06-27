---
title: nextjs项目 input限制9位数字
shortTitle: next input限制9位数字
image: 
icon: pen-to-square
date: 2025-06-27
order: 12
tag: 
  - nextjs
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nextjs 
---



# input限制9位数字

```js

    <Input
    value={memberId ?? ""}
    className="w-52 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
    onChange={(e) => setMemberId(e.target.value)}
    placeholder={t("memberAccountPlaceholder")}
    type="text"
    pattern="[0-9]*"
    maxLength={9}
    inputMode="numeric"
    />

```