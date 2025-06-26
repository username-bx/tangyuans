---
title: ssh连接服务器
shortTitle: ssh ssh.config serve
icon: pen-to-square
date: 2025-06-26
order: 37
tag: 
  - ssh ssh.config serve
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: ssh ssh.config serve
---

# ssh连接

1. 自动使用你指定的用户名和私钥 并且使用别名

```bash

ssh myserver

```
SSH 配置文件使用方法
1. 打开或创建配置文件：

```bash

nano ~/.ssh/config

```
2. 添加一段配置，例如：

```bash

Host myserver
  HostName xx.xx.xx.xx          # 你的服务器公网 IP
  User ubuntu                   # 登录用户名（如 root、ubuntu、ec2-user）
  IdentityFile ~/.ssh/id_rsa    # 私钥路径（.pem 或 id_rsa）
  Port 22                       # 默认是22端口，如有改过这里也要改


```

3. 保存后，使用别名连接：
```bash

ssh myserver

```
等同于：

```bash

ssh -i ~/.ssh/id_rsa ubuntu@xx.xx.xx.xx

```