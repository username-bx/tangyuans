---
title: docker 常用命令, 安装 mongo
shortTitle: docker
icon: pen-to-square
date: 2024-08-11
order: 15
tag: 
  - docker
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: docker
---

# docker

## centos7安装Docker全过程记录

1.查看当前的内核版本

```shell
uname -r
# 我这里是3.10 ，满足条件。
```
2. 安装需要的软件包， yum-util 提供yum-config-manager功能，另两个是devicemapper驱动依赖1.安装需要的软件包， yum-util 提供yum-config-manager功能，另两个是devicemapper驱动依赖

```shell
yum install -y yum-utils device-mapper-persistent-data lvm2
```

3. 设置 yum 源 (设置一个yum源，下面两个都可用)

```shell
yum-config-manager --add-repo http://download.docker.com/linux/centos/docker-ce.repo（中央仓库）

yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo（阿里仓库）

```

4. 查看可用版本有哪些

```shell
yum list docker-ce --showduplicates | sort -r
```

5. 选择一个版本并安装：yum install docker-ce-版本号

```shell
yum -y install docker-ce-18.03.1.ce
```

## docker 常用命令

```shell
  docker version
  # 检查 client server
  # windos 双击exe 启动
  # centent systemctl start docker
```
Dockerfile 文件编写

```shell
# FROM：表示新建的iamge（镜像）需要在node环境中进行，那么就需要node镜像。
# WORKDIR：声明了工作目录`/app`，即node代码在该目录下进行
# COPY：作用是，将当前目录的所有代码都复制到工作目录下
# RUN shell 命令
# CMD：后面跟着一句shell 命令
FROM node:20-alpine
COPY . /
RUN npm install
CMD ["node", "index.js"]

```

```shell

docker build -t my-docker-demo:1.0 .

```
使用 -f <file_name> 指定构建文件
```shell

docker build -t house:1.0 . -f Dockerfile.dev

```

```shell

docker run <name:version>

docker run --name <xxx> -p 3000:3000 -d <name:version>
```
查询本机正在的容器

```shell
docker ps -a
docker stop <container_id>
docker start <container_name>

```

查看容器 镜像 删除容器 删除镜像

```shell
docker container ls -a
docker image ls

docker rm <container_id> docker container rm <container_id>

docker rmi <image_id> docker image rm <image_id>
```

保存镜像到压缩文件 加载压缩文件到docker镜像

```shell

docker save -o ~/Document/<file.name>.tar house:1.0

docker load -i ~/Document/<file.name>.tar

```

## docker 安装 mongo

1. 拉取 MongoDB Docker 映像

```shell
docker pull mongo
docker pull mongodb/mongodb-community-server:latest
```

2. 将映像作为 container 运行

```shell
docker run --name mongodb -p 27017:27017 -d mongodb/mongodb-community-server:latest

docker run --name mymongo -p 27017:27017 -d -v /usr/data/mongo:/data/db mongo:latest --auth
```

>> 此命令中的 -p 27017:27017 会将容器端口映射到主机端口。这样即可使用一个 localhost:27017 连接字符串连接到 MongoDB。

>> 此命令中的 -v 映射容器中的文件到本地

3. 进入 mongo 容器

```shell
docker exec -it <container_id> bash

```

4. 使用 mongosh

```shell
cd ./bin
./mongosh

use admin
db.auth("xx","xx")

db.createUser({ user: "useradmin", pwd: "adminpassword", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
db.updateUser('root', {pwd: "root123", roles: [{ role: "readWrite", db: "lineDB" },{ role: "readWrite", db: "tgDB" }] })

```

5. 使用 mongodump 备份

```shell
cd ./bin
./mongodump --host=xx.xx.xx.xx --port=27011 --username=root --password=root123 --out=/usr/backup/mongodump-1
```

6. 使用 docker -p 复制文件到本地目录

```shell
docker -p <container_id>:/usr/backup /usr/data/mongo
```



## 使用 docker 部署nodejs

1. 切换路径
```shell
cd /usr/share/nginx/lineBotWebhook/
```

2. 构建镜像 build images

```shell
docker -build -t <image_name>:<version> .
```

3. 根据镜像 运行实例

```shell
docker run --name <container_name> -p 4100:4100 -d <image_name>:<version>
```
>> --name 给容器实例设置名称
>> -p 映射端口号
>> -d 后台运行容器