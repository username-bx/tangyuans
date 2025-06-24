---
title: git 常用命令
shortTitle: git
icon: pen-to-square
date: 2024-05-23
order: 4
tag:
  - git
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: git
---


# git 常用命令

## 分支

1. 查看本地分支 远程分支 全部分支
```shell
git branch 
git branch -r 
git branch -a
```
2. 切换分支，新建分支
```shell
git checkout <branch_name>

git checkout -b <new_branch_name>

// 快速切换分支 并设置 track (设置基于分支)
git checkout -b <new_branch_name> --track <remote_name>/<branch_name>
```
3. 删除分支
```shell
git branch -d <branch_name>
git branch -D <branch_name>

git push -d <remote_name> <brnach_name>
```
4. 添加文件
```shell
git add
git add .
git add -A
```
5. git commit
```shell
git commit -m ''
git commit --no-verify -m ''
```
6. git reset
```shell
git reset --soft HEAD~
git reset --soft HEAD~2
git reset --soft HEAD~3

git reset --soft <commit_id>
```
7. git config 
```shell
git config --list
// 设置编辑器
git config --global core.editor Code
git config --global core.editor notepad++
git config --global core.editor "'E:\\Software\\Notepad++\\notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
core.editor="D:\Software\notepad++\notepad++.exe" -multiInst -notabbar -nosession -noPlugin
// 设置 commit 模板
git config --global commit.template D:/commit_template
// C:\Users\Administrator\.gitconfig


// 重命名
git config --global alias.br branch
git br
```

8. stash 
```shell
// 临时储存一下 没有必要commit的时候
git stash list
git stash save xxx
git stash pop
git stash apply 
git stash drop
```

9. revert

```shell
// 回退 一个commit
git revert
// 回退过去 时光机
git reset --hard commit_id
git log
```
10. remote
```shell
git remote -v

git remote add <remote_name> <http://>

git remote remove <remote_name> // git remote remove origin
```

11. cherry-pick

```shell
git cherry-pick <commit_id>
```
12. merge 

```shell

git merge <branch_name>

git merge --abort

git merge <branch_name> --no-ff
```
> git merge 的三个合并参数模式：
-ff 自动合并模式：当合并的分支为当前分支的后代的，那么会自动执行 --ff (Fast-forward) 模式，如果不匹配则执行
--no-ff（non-Fast-forward） 合并模式

--no-ff 非 Fast-forward 模式：在任何情况下都会创建新的 commit 进行多方合并（及时被合并的分支为自己的直接后代）
--ff-only Fast-forward 模式：只会按照 Fast-forward 模式进行合并，如果不符合条件（并非当前分支的直接后代），则会拒绝合并请求并且推出
以下是关于 --ff, --no-ff, --ff-only 三种模式的官方说明（使用 git merge --help 即可查看）：


13. git pull git fetch --rebase

14. git pull

```shell
git pull

git branch --set-upstream-to <branch_name> origin/<branch_name>
```

15. git push

```shell
git push origin localBranch:remoteBranch

git push -u origin dev

```

## 1. git push

###　1．推送分支 推送时可以改变名字，可以让本地分支名和远程分支名不一样

```shell
    git push origin localBranch:remoteBranch
```

### 2. 推送分支 (简化版) 远程分支将和本地分支一个名
```shell
    git push origin localBranch
```

### 3. 删除远程分支
```shell
    git push origin -d remoteBranch
```




## 2. git tag 


### 1. 新建标签
```shell
    git tag xxxxxx
```

### 2. 查询标签
```shell
    git tag
```

### 3. 删除本地标签
```shell
    git tag -d xxxxxx
```

### 4. 推送标签
```shell
    git push origin xxxxxx
```

###　5. 删除远程标签
```shell
    git tag push origin -d xxx
```


## 3. git fetch

### 1. 提取之前，请删除远程不再存在的所有远程跟踪参考
```shell
    git fetch -p
```

### 2. 命令用于删除本地 Git 仓库中与远程仓库 origin 不再关联的分支
```shell
    git remote prune origin
```