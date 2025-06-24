---
title: nginx 重启 linux 关闭防火墙
shortTitle: nginx linux firewalld
icon: pen-to-square
date: 2024-05-23
order: 12
tag:
  - nginx linux firewalld
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: nginx linux firewalld
---


# nginx 重启 linux 关闭防火墙




1. 查看进程号

```shell
    ps -ef|grep nginx
```

2. 杀死进程

```shell
    kill -QUIT 2072
```

3. 重启Nginx服务

```shell
    ./nginx -s reload
```

4. 验证nginx配置文件是否正确

```shell
    ./nginx -t
```

5. 查看防火状态

```shell
    systemctl status firewalld
```

6. 暂时关闭防火墙

```shell
    systemctl stop firewalld
```

7. 永久关闭防火墙

```shell
    systemctl disable firewalld
```