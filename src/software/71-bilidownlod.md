---
title: 下载哔哩哔哩视频
shortTitle: 下载哔哩哔哩视频
icon: pen-to-square
date: 2026-07-31
star: true
order: 71
category:
  - mac
tag:
  - mac
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: mac
---

# 下载哔哩哔哩视频

1. 首先创建一个临时的python环境

```sh
# 假设临时环境叫做 videodl_env 视频下载环境
python3.14 -m venv ~/videodl_env

# 激活
source ~/videodl_env/bin/activate

#下载工具
pip install yt-dlp

#可以下载视频了
yt-dlp "https://www.bilibili.com/video/BV1Pk346UEXx/"
```

2. 视频和音频不能自动合成

```sh
# 新开一个终端 下载ffmeg
pip install ffmpeg


# 多线程下载
brew install aria2

#可以多线程下载视频
yt-dlp --downloader aria2c "https://v.douyin.com/Xpj9rAP9i-Q/"
```

3. 如果需要cookie

```sh
yt-dlp --downloader aria2c --cookies-from-browser chrome "https://www.bilibili.com/video/BV1Pk346UEXx/"
```
