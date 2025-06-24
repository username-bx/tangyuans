---
title: mac安装homebrew
shortTitle: mac安装homebrew
icon: pen-to-square
date: 2024-09-04
order: 23
tag: 
  - homebrew
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: homebrew

---

# homebrew

Homebrew 主要由四个部分组成: brew、homebrew-core 、homebrew-cask、homebrew-bottles。

brew：Homebrew 的源代码仓库
homebrew-core：Homebrew 的核心源
homebrew-cask：提供 macOS 应用和大型二进制文件的安装
homebrew-bottles：预编译二进制软件包


## 安装

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

```


## 命令

```shell
brew ls 查看本地命令；
brew search mongodb 查找软件；
brew -v 查看版本；
brew update 更新版本；
brew install --cask firefox 安装图形化界面软件
brew config 查看配置。

```

## 其它命令

```shell
brew update	更新 Homebrew
brew search package	搜索软件包
brew install package	安装软件包
brew uninstall package	卸载软件包
brew upgrade	升级所有软件包
brew upgrade package	升级指定软件包
brew list	列出已安装的软件包列表
brew services command package	管理 brew 安装软件包
brew services list	列出 brew 管理运行的服务
brew info package	查看软件包信息
brew deps package	列出软件包的依赖关系
brew help	查看帮助
brew cleanup	清除过时软件包
brew link package	创建软件包符号链接
brew unlink package	取消软件包符号链接
brew doctor	检查系统是否存在问题
brew tap [user/repo]	将开源仓库添加到源


```