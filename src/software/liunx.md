---
icon: pen-to-square
date: 2023-10-19
order: 6
tag: 
  - Liunx
---

# liunx 常用的部分指令

## 1. 修改linux root 密码

```shell


sudo passwd root


```



## 2. nginx相关命令

```shell

whereis nginx


cd /usr/local/nginx

```

## 3. 使用wget下载github

```shell


wget https://github.com/xxxxx/xxx/xxxx.zip


// 如果是404
// 1. 检查链接能否正常访问
// 2. 检查链接是不是直接进去下载


```

## 4. 解压

```shell

unzip -d [目录名] [压缩包名]


// 不提示,直接覆盖重名文件
unzip -o -d [目录名] [压缩包名]


```

## 5. 上传本地文件到服务器

```shell

scp /path/index.html root@142.141.1.31:/usr/local/nginx/html/ 


```

## 6. 从服务器上下载文件

```shell

scp root@142.141.1.31:/usr/local/nginx/html/index.html ~/Document/ 本地目录


```

## 7. 上传本地文件到服务器

```shell

scp  -r local_dir root@142.141.1.31:/usr/local/nginx/html/

```

## 8. 从服务器下载整个目录

```shell


scp -r root@142.141.1.31:/usr/local/nginx/html/ ~/Document/ 本地目录


```