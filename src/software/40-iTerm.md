---
title: iTerm2 oh-my-zsh 配置
shortTitle: iTerm2 oh-my-zsh
icon: pen-to-square
date: 2025-08-20
star: true
order: 40
tag: iTerm2 oh-my-zsh
  - 
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: iTerm2 oh-my-zsh
---


# iTerm2 oh-my-zsh 修改主题，添加插件


### 下载iTerm2

安装方法有两种

可以直接去官网下载：https://www.iterm2.com/

也可以使用brew
```bash
brew install --cask iterm2
```

安装完成后，在/bin目录下会多出一个zsh的文件。

Mac系统默认使用dash作为终端，可以使用命令修改默认使用zsh：

```bash
chsh -s /bin/zsh
```

如果想修改回默认dash，同样使用chsh命令即可：

```bash
chsh -s /bin/bash
```


### 安装Oh my zsh

安装方法有两种，可以使用curl或wget，看自己环境或喜好：

```bash
# curl 安装方式
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```bash
# wget 安装方式
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"
```



### 安装主题

主题排行 https://www.slant.co/topics/7553/~theme-for-oh-my-zsh

安装主题 powerlevel10k

```bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc
```

在 ~/.zshrc 设置 ZSH_THEME="powerlevel10k/powerlevel10k"。接下来，终端会自动引导你配置 powerlevel10k。


### 安装插件

安装方式：把插件下载到本地的 ~/.oh-my-zsh/custom/plugins 目录。
```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
```