---
title: iTerm2 oh-my-zsh 设置 zsh-autosuggestions 插件的文字颜色
shortTitle: iTerm2 oh-my-zsh zsh-autosuggestions
icon: pen-to-square
date: 2025-08-20
order: 41
tag: iTerm2 oh-my-zsh zsh-autosuggestions
  - 
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: iTerm2 oh-my-zsh zsh-autosuggestions
---


# 设置 zsh-autosuggestions 插件的文字颜色

zsh-autosuggestions 是一个 Zsh 的插件，它可以根据用户之前输入的命令建议当前命令的自动补全。

在命令行下，zsh-autosuggestions 默认使用灰色来显示建议的部分，以与实际命令区分开。

想要修改建议文本的颜色，可以在 Zsh 配置文件（通常是 ~/.zshrc）中添加一行类似这样的代码：

```shell

vi ~/.zshrc

```
添加一行


```shell

ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE="fg=white,bg=#ff00ff,bold"

```


也可以将 'fg=white' 替换为其他颜色值，比如 'fg=blue' 表示蓝色，'fg=green' 表示绿色，等等。

一旦修改了配置文件，记得执行一下   <span style="color:red">**source ~/.zshrc**</span>. 重新加载 Zsh 配置，或者打开一个新的终端窗口，改动才会生效。



```shell

source ~/.zshrc

```