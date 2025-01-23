---
icon: pen-to-square
date: 2023-10-21
order: 3
tags: 
  - SSH
---

# SSH生成密钥,git使用ssh连接

### 打开Git Bash

切换路径到 c:/user/xxx/.ssh 下.
打开 git bash here

### 生成ssh密钥

```shell

$ ssh-keygen -t ed25519 -C "your_email@example.com"

$ ssh-keygen -t ed25519 -C "bx.ma@gmail.com"

```

1. 按Enter接受默认文件位置
2. 键入默认文件位置并将 id_ssh_keyname 替换为您的自定义密钥名称

### ssh-agent 来管理密钥

1. 启动 ssh-agent
```shell

#start the ssh-agent in the background

$ eval $(ssh-agent -s)\
// 或者
$ ssh-agent bash

```

2. 添加密钥到 ssh-agent
```shell

$ ssh-add C:\Users\xxx/.ssh/id_ssh_xxx

```

### 添加公钥到github

1. "setting"
2. "ssh and gpg keys"
3. "new ssh key"
4. 复制 pub 到 ssh

### 添加ssh config

```
$ vim config
"i" 切换为输入模式
"esc" 切换为命令模式
":wq" 命令模式下,保存退出

Host github.com
User username-bx
Hostname ssh.github.com
IdentityFile ~/.ssh/xxx
Port 443

```

### 设置git config

```shell
$ git config --global user.name "xxx"
$ git config --global user.email "xxx"
```

### 验证连接
```shell

$ ssh -T git@github.com

Hi username-bx! You've successfully authenticated, but GitHub does not provide shell access.

```

###  git clone

```shell
$ git clone xxx
```

 