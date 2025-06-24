---
icon: pen-to-square
date: 2023-10-29
order: 5
tags: 
  - SSH
  - Linux
---

# linux使用ssh连接github

1. 切换路径到 .ssh
2. 使用 ssh 生成密钥
3. 新建一个 config 文件
4. 打开 ssh 代理
5. 添加新的密钥到 ssh 代理
6. 添加密钥到 github
7. 测试 github 连接

```shell
# 1. 切换路径到 .ssh
$ cd ~/.ssh
# 2. 使用 ssh 生成密钥
$ ssh-keygen -t ed25519 -C "bx.ma@gmail.com"
# 3. 新建一个 config 文件 ("i" 输入, "Esc" 命令, ":wq" 保存退出)
$ vi config 
# 4. 打开 ssh 代理
$ ssh-agent bash
# 5. 添加新的密钥到 ssh 代理
$ ssh-add ./github
# 6. 添加密钥到 github
# 7. 测试 github 连接
$ ssh -T git@github.com

# 安装 git
$ yum install git


```

