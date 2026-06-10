---
title: 更新mod
shortTitle: 更新mod
image:
icon: pen-to-square
date: 2026-05-21
order: 7
star: true
tag:
  - Project Zomboid
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Project Zomboid
---

## 文件层级

1. 把108600下面某个id下的 mods 整个复制到 mod1 中
2. 复制poster
3. 创建脚本
4. 上传
5. 修改描述信息

## 创建vdf上传脚本

### 1. 撬锁

```bash
cat << 'EOF' > /Users/benjaminma/upload1.vdf
"workshopitem"
{
    "appid" "108600"
    "publishedfileid" "3717762143"
    "contentfolder" "/Users/benjaminma/mod1"
    "previewfile" "/Users/benjaminma/poster1.png"
    "visibility" "0"
    "title" "Simple unlock"
    "description" "原mod一直未更新，所以自行修复，侵权立删。"
    "changenote" "update 4218"
}
EOF
```

描述信息

```txt

**简易开锁**

原mod一直未更新，所以自行修复，侵权立删。
原mod地址 https://steamcommunity.com/sharedfiles/filedetails/?id=2991923398

简易开锁，简易撬锁，需要身上有螺丝刀和回形针

**更新内容 - 2026/05/21**

1. 添加一个删除物品的功能，右键背包，地上，容器的物品可以删除（用于删掉生成在背包的钥匙

**更新内容 - 2026/05/25**

1. 添加json翻译文件

**更新内容 - 2026/05/25**

1. 读条动作 获取特质 player:hasTrait(CharacterTrait.BURGLAR)

modID:3717762143


**Simple Lockpicking**
Since the original mod hasn't been updated for a long time, I fixed it myself. I will take this down immediately if it infringes on the original author's rights.

Original mod link: https://steamcommunity.com/sharedfiles/filedetails/?id=2991923398

Simple Lockpicking: Requires a screwdriver and a paperclip in your inventory to pick locks.

**Update - 2026/05/21**

1. Added an item deletion feature. You can now delete items from your inventory, the ground, or containers via the right-click menu (mainly designed for deleting unwanted keys that spawn in your backpack).

**Update - 2026/05/25**

1. added json tranlste file

**Update - 2026/05/27**

1. get player trait  method: player:hasTrait(CharacterTrait.BURGLAR)

```

## 2. 车辆修理包

https://steamcommunity.com/sharedfiles/filedetails/?id=3720145222

```bash
cat << 'EOF' > /Users/benjaminma/upload2.vdf
"workshopitem"
{
    "appid" "108600"
    "publishedfileid" "3720145222"
    "contentfolder" "/Users/benjaminma/mod2"
    "previewfile" "/Users/benjaminma/poster2.png"
    "visibility" "0"
    "title" "车辆修理包"
    "description" "可以修理轮胎 引擎"
    "changenote" "update 4218"
}
EOF
```

描述信息

```txt
此mod很超模，修理车变得极其简单，谨慎订阅

可修理部位：
座椅
引擎
油箱
轮胎
引擎罩
车窗
车门

可以在下面位置搜刮获得：

-- 🚗 【车辆修理包】刷新配置
-- 放入汽修店货架 (权重 10)
-- 放入修车工具箱/木箱 (权重 20，更容易出)
-- 放入普通汽车的后备箱 (权重 5，比较稀有)
-- 放入重型车辆（皮卡/货车）后备箱 (权重 10)

-- 放入五金店货架
-- 放入普通工具箱
-- 放入民居车库的架子


可以在制作菜单制作
```

## 3. 木炭

```bash
cat << 'EOF' > /Users/benjaminma/upload3.vdf
"workshopitem"
{
    "appid" "108600"
    "publishedfileid" "3720145222"
    "contentfolder" "/Users/benjaminma/mod3"
    "previewfile" "/Users/benjaminma/poster3.png"
    "visibility" "0"
    "title" "车辆修理包"
    "description" "可以修理轮胎 引擎"
    "changenote" "update"
}
EOF
```

描述信息

```txt

**木屑 小树枝 树枝 树苗 木板 制作木炭**

木炭燃烧桶新增配方

新增配方：

1. 木屑 数量：1  -> 自制木炭1
2. 小树枝 数量：1  -> 自制木炭1
3. 树枝 数量：1  -> 自制木炭2
4. 树苗 数量：1  -> 自制木炭2
5. 木板 数量：1  -> 自制木炭2


**2026/06/05**
为配合水泵模组使用，新增配方
1. 木屑 数量：1  -> 木炭1
2. 小树枝 数量：1  -> 木炭1
3. 树枝 数量：1  -> 木炭2
4. 树苗 数量：1  -> 木炭2
5. 木板 数量：1  -> 木炭2
```
