---
title: steam上传mod
shortTitle: steam上传mod
image: 
icon: pen-to-square
date: 2026-05-02
order: 5
star: true
tag: 
  - steam
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: steam 
---



## 1. 先使用游戏上传，获得一个modid

```
~/Zomboid/Workshop/你的工坊项目名/   <-- 这个名字自己随便起，比如 MySuperMod_WS
├── preview.png                     <-- preview.png 放在这里（最好是 256x256 尺寸，小于 256KB）。这是在 Steam 页面上显示的缩略图！
└── Contents/                       <-- 新建这个文件夹 (首字母大写)
    └── mods/                       <-- 新建这个文件夹 (全小写)
        └── 你的模组真实名称/         <-- 把你原本在 mods 文件夹里的整个项目拖进来！
            ├── mod.info
            ├── poster.png          <-- (宽版海报留在里面)
            └── media/
                └── ... (你的代码)

```
find /Users/benjamin/Zomboid/Workshop/MyMod -name ".DS_Store" -delete


## 2. 创建一个文件 upload.vdf

把contents 和 preview.png 拷贝到～/xxxname/

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