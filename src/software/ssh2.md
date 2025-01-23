---
icon: pen-to-square
date: 2023-10-21
order: 4
tag: 
  - SSH
---


# 使用ssh同时连接gitlab github


1. 打开文件夹 c:/user/xxx/.ssh

2. 右键 git bash here

3. 生成ssh

   ```shell
   $ ssh-keygen -t ed25519 -C "bx.ma@gmail.com"
   // 输入名称 id_ssh_gitlab
   $ ssh-keygen -t ed25519 -C "bx.ma@gmail.com"
   // 输入名称 id_ssh_github
   ```

   

4. 启动ssh-agent

   ```shell
   $ ssh-agent bash
   ```

   

5. 添加ssh到ssh-agent

   ````shell
   $ ssh-add c:/user/xxx/.ssh/id_ssh_gitlab
   $ ssh-add c:/user/xxx/.ssh/id_ssh_github
   ````

   

6. 添加config文件

```
Host gitlab.com
Hostname 192.168.1.178
Port 8088
IdentityFile ~/.ssh/id_ssh_github 

Host github.com
Hostname ssh.github.com
Username xxx
IdentityFile ~/.ssh/id_ssh_github
```

7. 测试连接

```
ssh -T git@github.com
ssh -T git@gitee.com
```

