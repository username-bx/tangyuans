---
title: vps
shortTitle: vps
icon: pen-to-square
date: 2025-01-20
star: true
order: 1
category:
  - vps
tag: 
  - vps
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: vps
---

# vps

## 1. 连接
```shell
ssh root@198.144.176.108
```
## 2. 查看系统
```shell
cat /etc/os-release
```
## 3. 更新 apt
sudo apt update
## 4. 安装nginx
sudo apt install -y nginx
## 5. 查询状态
systemctl status nginx
## 6. 设置配置文件
nano /etc/nginx

# /etc/nginx/nginx.conf

user www-data;
worker_processes auto;
pid /run/nginx.pid;

events {
    worker_connections 1024;
}

http {
    # 基本 MIME 类型
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    # 日志
    access_log /var/log/nginx/access.log;
    error_log  /var/log/nginx/error.log;

    # 站点配置（必须在 http{} 内）
    server {
        listen 80 default_server;
        listen [::]:80 default_server;

        server_name _;

        root /usr/share/nginx/html/dist;
        index index.html;

        location / {
            try_files $uri $uri/ =404;
        }
    }
}


## 7. 文件路径
cd /usr/share/nginx/html/
## 8. 重启
```sh
# 启动
sudo systemctl start nginx
# 停止
sudo systemctl stop nginx
# 重启
sudo systemctl restart nginx
# 热加载配置
sudo systemctl reload nginx
```
## 上传文件
scp -r ./dist/ root@198.144.176.108:/usr/share/nginx/html/