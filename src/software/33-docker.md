---
title: docker的一些快捷操作
shortTitle: docker shell
icon: pen-to-square
date: 2025-06-24
order: 33
tag: 
  - docker shell
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: docker shell
---


# docker


1. 查询所有容器

```shell

docker container ls -a

```

2. 停用容器

```shell
# 容器ID 96f60614ed05

docker stop 96f60614ed05
# 或者只写ID 第一位9

docker stop 9

```
3. 删除容器
```shell

# 容器ID 96f60614ed05

docker stop 96f60614ed05
# 或者只写ID 第一位9

docker rm 9

```
4. 删除镜像

```shell

# 容器ID 96f60614ed05

docker rmi 96f60614ed05
# 或者只写ID 第一位9

docker rmi 9

```