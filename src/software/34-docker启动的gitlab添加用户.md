---
title: docker启动gitlab，添加用户
shortTitle: docker shell
icon: pen-to-square
date: 2025-06-24
order: 34
star: true
tag:
  - docker shell
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: docker shell
---

# docker启动gitlab，在终端中添加用户

1. 进入 GitLab 容器（假设容器名叫 gitlab）：

```shell

docker exec -it gitlab /bin/bash

```

2. 进入 Rails 控制台：

```shell

gitlab-rails console

```

3. 创建用户命令如下（修改为你的信息）：

```shell

u = User.new(username: 'lenic', email: 'lenic@123.com', name: 'lenic', password: 'qwe123456', password_confirmation: 'qwe123456')
u.assign_personal_namespace(Organizations::Organization.default_organization)
u.skip_confirmation!
u.save!

```

4. 退出

```shell

exit

```

## 设置gitlab管理员，可以管理全部项目

### 1. 找到docker容器

```sh

docker ps

# 找到容器 NAMES： gitlab
```

### 2. 进入 gitlab 容器

```sh
docker exec -it gitlab bash
```

### 3. 进入 Rails 控制台

```sh
# 进入控制台
gitlab-rails console
```

### 4. 设置用户

```sh
# 找到用户
user = User.find_by(username: '用户名')

# 设置为管理员
user.admin = true
user.save!

# 验证
user.admin?
# => true
```
