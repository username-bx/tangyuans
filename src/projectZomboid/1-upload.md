---
title: steam上传mod
shortTitle: steam上传mod
image: 
icon: pen-to-square
date: 2026-05-02
order: 1
star: true
tag: 
  - steam
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: steam 
---

# 上传mod


## 1. 下载steamcmd（不使用僵毁的上传）

```sh
brew install steamcmd
```

## 2. 创建一个文件 upload.vdf

```shell
cat << 'EOF' > /Users/benjamin/upload.vdf
"workshopitem"
{
    "appid" "108600"
    "publishedfileid" "3717711932"
    "contentfolder" "/Users/benjamin/PZ_Upload"
    "previewfile" "/Users/benjamin/preview.png"
    "visibility" "0"
    "title" "Simple unlock"
    "description" "Simple unlock mod"
    "changenote" "Update"
}
EOF
```
1. 僵毁这个游戏的appid 固定是 108600，写死就好
2. 先用僵毁游戏主界面，上传了一次，得到了modID，填到publishedfileid
3. contentfolder 这个文件放到desktop，有可能读不到，就往上提了一级
4. previewfile 僵毁主界面提交需要preview.png 大小为256*256 使用steamcmd 需要的是poster.png


## 3. pz_upload这个文件的文件层级

```
/Users/benjamin/                        <-- 你的 Mac 个人主目录
│
├── upload.vdf                          <-- 你在终端生成的配置文件
├── poster.png                          <-- Steam 创意工坊的封面图 (256x256)
│
└── PZ_Upload/                          <-- VDF 中 "contentfolder" 指向的文件夹
    └── mods/                           <-- [必须] 放在 Contents 里面
        └── SimpleUnlock/               <-- 你的内部 Mod 名字
            ├── 42
                └──media
                ├──mod.info
                ├──poster.png
            ├── mod.info                <-- [必须] 给游戏引擎看的配置
            ├── poster.png              <-- [可选] 游戏内显示的缩略图
            └── media/                  <-- 你的代码和资源
                ├── lua/
                └── ...

```
