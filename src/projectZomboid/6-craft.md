---
title: craftRecipe 配方
shortTitle: craftRecipe 配方
image:
icon: pen-to-square
date: 2026-05-21
order: 6
star: true
tag:
  - Project Zomboid
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Project Zomboid
---

## 木炭燃烧桶原版配方

配方文件路径：Java/media/scripts/generated/entities/blacksmith/craftRecipes

```
module Base
{
    craftRecipe MakeWoodCharcoal
    {
        time = 20,
        timedAction = Making_With_Kiln,
        Tags = WoodCharcoal,
        inputs
        {
            item 2 [Base.Log;3:Base.LargeBranch;6:Base.Plank] flags[IsExclusive;AllowDestroyedItem],
        }
        outputs
        {
            item 12 Base.CharcoalCrafted,
        }
    }
}

timedAction	= Making_With_Kiln    制作动画/交互逻辑。角色会执行“使用炭窑（Kiln）”的动作。
Tags = WoodCharcoal    配方标签。用于 UI 检索或与其他系统联动时的标记。
```

## 上传mod的脚本

1. publishedfileid 为 "0" 时，它会知道这是一个新项目
2. changenote 你可以随意改成 "Initial release"、"首次发布"、"Version 1.0" 都可以

```bash
cat << 'EOF' > /Users/benjamin/upload1.vdf
"workshopitem"
{
    "appid" "108600"
    "publishedfileid" "0"
    "contentfolder" "/Users/benjamin/PZ_Upload1"
    "previewfile" "/Users/benjamin/poster1.png"
    "visibility" "0"
    "title" "xxxxxxxx"
    "description" "xxxxxxxx"
    "changenote" "Version 1.0"
}
EOF

steamcmd +login username password +workshop_build_item /Users/benjamin/upload1.vdf +quit
```

## 文件层级

```
/Users/benjamin/                        <-- 你的 Mac 个人主目录
│
├── upload.vdf                          <-- 你在终端生成的配置文件
├── poster.png                          <-- Steam 创意工坊的封面图 (256x256)
│
└── PZ_Upload/                          <-- VDF 中 "contentfolder" 指向的文件夹
    └── mods/                           <-- [必须] 放在 Contents 里面
        └── SimpleUnlock/               <-- 你的内部 Mod 名字
            └── 42
                └──media
                  ├──lua
                  ├──script
                ├──mod.info
                ├──poster.png
                ├──icon.png


```

## 第一个报错以及解决

Apple无法验证“Breakpad.framework”是否包含可能危害Mac安全或泄漏隐私的恶意软件。

1. 打开 Mac 的 系统设置 (System Settings)。

2. 点击左侧的 隐私与安全性 (Privacy & Security)。

3. 向下滚动，找到“安全性”板块。你会看到一行提示：“已阻止使用 Breakpad.framework，因为来自身份不明的开发者”。

4. 点击旁边的 “仍要打开” (Allow Anyway) 按钮（可能需要输入 Mac 密码或指纹解锁）。

5. 回到终端，再次运行 steamcmd.sh，如果弹窗再次出现，这次会多出一个 “打开” (Open) 的按钮，点击它即可放行。

## 第二个报错以及解决

1. 图片名称不能是 xxx01.png 改为 xxx1.png
2. 编辑图片和视频时 上传图片格式为png
