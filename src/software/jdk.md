---
title: brew安装jdk
shortTitle: brew安装jdk
icon: pen-to-square
date: 2024-09-04
order: 22
tag: 
  - brew jdk
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: brew jdk
---




# 使用brew安装jdk
```shell
brew info openjdk@22
```

```shell
brew install openjdk@22
```

```shell
echo 'export PATH="/opt/homebrew/opt/openjdk/bin:$PATH"' >> ~/.zshrc
```

```shell
cat ~/.zshrc
```

```shell
source ~/.zshrc
```

```shell
sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
```

```shell
java -version
```
