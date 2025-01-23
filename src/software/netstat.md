---
title: 查看端口占用 windows
shortTitle: netstat
icon: pen-to-square
date: 2024-05-23
order: 11
tag:
  - netstat
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: netstat
---

# 查看端口占用 windows

## 1. 查看被占用端口对应的 PID

```shell

netstat -aon|findstr "8081"

```

![图片](./image/netstat01.png)

## 2. 结束进程

```shell

taskkill /T /F /PID 9088 

```