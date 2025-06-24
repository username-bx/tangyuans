---
title: brew安装nvm，nvm常用命令
shortTitle: brew nvm
icon: pen-to-square
date: 2024-09-04
order: 16
tag: 
  - brew nvm
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: brew nvm
---




# 使用brew安装jdk
```shell
brew info nvm
```

```shell
brew install nvm
```

```shell
export NVM_DIR="$HOME/.nvm"
  [ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # This loads nvm
  [ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" 
```

```shell
cat ~/.zshrc
```

```shell
source ~/.zshrc
```

```shell
```

```shell
nvm -v
```


## nvm常用命令
```shell
nvm ls
```

```shell
nvm ls-remote
```

```shell
nvm current
```

```shell
nvm install v20.1.0
```

```shell
nvm use v20.1.0
```


## node开启自带的pnpm

> 只有node 版本大于16.20.0，才可以使用corepack

```shell
corepack enable pnpm
```