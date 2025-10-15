---
title: 部署生产环境记录
shortTitle: aws部署生产环境记录
icon: pen-to-square
date: 2025-06-27
order: 38
tag: production build
  - 
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: production build
---


# 部署生产环境

## 1. 目标 Nginx反向代理，隐藏请求地址和端口

### 1. 下载Nginx源码包

```bash

wget https://nginx.org/download/nginx-1.26.1.tar.gz

```

### 2. 解压源码包

```bash

tar -zxvf nginx-1.26.1.tar-gz
cd nginx-1.26.1

```

### 3. 配置编译选项

```bash

-/configure --prefix=/usr/local/nginx \
--with-http_ssl_module \
--with-http_v2_module \
--with-http_gzip_static_module \
--with-threads

```
> -prefix 指定安装路径 (可以改成你喜欢的，比如/opt/nginx)


### 配置编译项报错

1. 报错信息：

```bash

checking for OS + Linux 6.1.140-154.222.amzn2023.x86_64 x86_64
checking for C compiler ... not found

./configure: error: C compiler cc is not found

```

解决方式：

这意味着你在尝试编译 Nginx 源码的过程中，./configure 脚本在检查你的系统是否具备编译环境时 没有找到 C 编译器（也就是 cc 或 gcc）。

```bash

sudo dnf install gcc make -y

```

2. 报错信息

```bash

./configure: error: the HTTP rewrite module requires the PCRE library.
You can either disable the module by using --without-http_rewrite_module
option, or install the PCRE library into the system, or build the PCRE library
statically from the source with nginx by using --with-pcre=<path> option.

```
解决方式：

这个错误说明你在配置 Nginx 时启用了 http_rewrite_module（默认启用），但系统中 没有安装 PCRE 库（Perl Compatible Regular Expressions），这是该模块所依赖的。

```bash

sudo dnf install pcre-devel zlib-devel openssl-devel -y

```

3. 报错信息

```bash

nginx: [emerg] open() "/etc/nginx/mime.types" failed (2: No such file or directory) in /usr/local/nginx/conf/nginx.conf:6
nginx: configuration file /usr/local/nginx/conf/nginx.conf test failed

```
❗ 报错解释：
Nginx 启动时报错说它 在读取配置文件 /usr/local/nginx/conf/nginx.conf 时，找不到 mime.types 文件。

- /usr/local/nginx/conf/nginx.conf:6 表示出错在配置文件第 6 行。

- (2: No such file or directory) 是系统错误码，表示“文件不存在”。

- /etc/nginx/mime.types 是 Nginx 配置中引用的 MIME 类型文件，它用来告诉浏览器如何处理不同类型的文件（如 .html、.css、.jpg 等）。


✅ 常见原因：
你是从源码编译安装的 Nginx，它默认的安装路径是 /usr/local/nginx，而配置文件却引用了 /etc/nginx/mime.types（通常是系统包安装路径）。

解决方法（任选其一）：

✅ 方法一：复制 mime.types 文件到对应位置

你可以从 Nginx 官方源码中把 mime.types 拷贝到配置中指定的位置：

```bash

sudo cp /usr/local/nginx/conf/mime.types /etc/nginx/mime.types

```

✅ 方法二：修改 nginx.conf 中的引用路径

打开配置文件：

```bash

sudo nano /usr/local/nginx/conf/nginx.conf

```
找到这一行（通常是第 6 行）：

```bash

include       /etc/nginx/mime.types;

```

```bash

include       mime.types;

```
这样它就会去当前目录 /usr/local/nginx/conf/ 下找 mime.types。


✅ 验证端口监听状态：

```bash

sudo netstat -tulnp | grep 500

```

```bash

sudo lsof -i :5000
sudo lsof -i :5001
sudo lsof -i :5002

```

4. 报错信息：nginx 404 Not Found 怎么检查哪里的问题

查看 Nginx 日志
- 错误日志通常在 /var/log/nginx/error.log 或 /usr/local/nginx/logs/error.log


```bash

sudo tail -n 50 /var/log/nginx/error.log

```

5. 报错信息

```bash

2025/06/26 05:02:29 [crit] 4125319#4125319: *12 stat() "/home/ec2-user/app/mg/dist/favicon.ico" failed (13: Permission denied), 
client: 60.137.100.89, 
server: localhost, 
request: "GET /favicon.ico HTTP/1.1", 
host: "54.46.30.69:5002", 
referrer: "http://54.46.30.69:5002/"

```

解决方式

主要问题是权限不足（Permission denied）导致 Nginx 无法访问这个文件

```bash

sudo chmod o+x /home
sudo chmod o+x /home/ec2-user
sudo chmod o+x /home/ec2-user/app
sudo chmod o+x /home/ec2-user/app/mg

```

## 配置Nginx.config



1. 上传文件

```bash

scp nginx.conf xx.xx.xx.xx:/usr/local/nginx/conf

```


## 前端函数fetch，请求相对路径

1. 请求绝对路径

```js


const url = new URL(xx.xx.xx.xx/getData)
url.searchParams.set("pageNum", pageNum.toString());
url.searchParams.set("pageSize", pageSize.toString());

fetch(url)

```
2. 请求相对路径

```js


const params = new URLSearchParams({ pageNum: pageNum.toString(), pageSize: pageSize.toString() });

fetch(`/api/reporter/selectGameBySummary?${params.toString()}`, {
    method: "GET"
})

```






> nginx 配置文件：



```bash
events {
    worker_connections 1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    
    sendfile        on;
    keepalive_timeout  65;

    # 服务1 - 端口5000，路径/home/ec2-user/app/cq
    server {
        listen 5000;
        server_name localhost;
        
        root /home/ec2-user/app/cq/dist;
        index index.html index.htm;
        
        location / {
            try_files $uri $uri/ =404;
        }
        
        # API反向代理
        location /api/ {
            proxy_pass http://localhost:9080/admin/client/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    # 服务2 - 端口5001，路径/home/ec2-user/app/bbin
    server {
        listen 5001;
        server_name localhost;
        
        root /home/ec2-user/app/bbin/dist;
        index index.html index.htm;
        
        location / {
            try_files $uri $uri/ =404;
        }
        
        # API反向代理
        location /api/ {
            proxy_pass http://localhost:9080/admin/client/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }

    # 服务3 - 端口5002，路径/home/ec2-user/app/mg
    server {
        listen 5002;
        server_name localhost;
        
        root /home/ec2-user/app/mg/dist;
        index index.html index.htm;
        
        location / {
            try_files $uri $uri/ =404;
        }
        
        # API反向代理
        location /api/ {
            proxy_pass http://localhost:9080/admin/client/;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
}


```