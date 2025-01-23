---
title: certbot
shortTitle: certbot
icon: pen-to-square
date: 2024-08-15
order: 17
tag: 
  - certbot
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: certbot
---

1. 安装Certbot客户端

yum install certbot

2. 获取证书
certbot certonly --webroot -w /var/www/example -d example.com -d www.example.com

>> 这个命令会为 example.com 和 www.example.com 这两个域名生成一个证书，使用 --webroot 模式会在 /var/www/example 中创建 .well-known 文件夹，这个文件夹里面包含了一些验证文件，certbot 会通过访问 example.com/.well-known/acme-challenge 来验证你的域名是否绑定的这个服务器。这个命令在大多数情况下都可以满足需求，

3. 但是有些时候我们的一些服务并没有根目录，例如一些微服务，这时候使用 --webroot 就走不通了。certbot 还有另外一种模式 --standalone ， 这种模式不需要指定网站根目录，他会自动启用服务器的443端口，来验证域名的归属。我们有其他服务（例如nginx）占用了443端口，就必须先停止这些服务，在证书生成完毕后，再启用。

certbot certonly --standalone -d example.com -d www.example.com

证书生成完毕后，我们可以在 /etc/letsencrypt/live/ 目录下看到对应域名的文件夹，里面存放了指向证书的一些快捷方式。

4. Nginx 配置启用 HTTPS






1. centOS 安装

sudo yum install epel-release
sudo yum install certbot-nginx

2. 停止您的 Web 服务器服务 否则你会得到以下错误

Problem binding to port 80: Could not bind to IPv4 or IPv6

3. 继续生成 Let’s Encrypt 免费 SSL 证书：

certbot certonly --standalone --preferred-challenges http -d my-domain.com -d www.my-domain.com

>> -d 选项采用域名。您可以-d在单个命令中使用多个选项。例如

4. 如果这是您第一次运行 certbot，系统会提示您输入电子邮件地址并同意服务条款。执行此操作后， certbot 将与 Let’s Encrypt 服务器通信，然后运行质询以验证您是否控制要为其申请证书的域。

如果成功，certbot 将显示一条消息，告诉您该过程已成功以及您的证书存储在何处

5. 列出您保存在/etc/letsencrypt/live/my-domain.com 目录中的证书 。

6. 为了让您的Web 服务器使用 Let’s Encrypt 免费 SSL 证书，您需要在其配置中指定它们。例如，如果您使用 Nginx，则需要将以下块添加到您的域配置文件中/etc/nginx/sites-enabled/my-domain.conf

server {
    listen 443;
    server_name my-domain.com;
    ssl on;
    ssl_certificate /etc/letsencrypt/live/my-domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/my-domain.com/privkey.pem;
}