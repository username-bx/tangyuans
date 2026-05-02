---
title: mod击杀数
shortTitle: mod击杀数
image: 
icon: pen-to-square
date: 2026-05-02
order: 1
star: true
tag: 
  - Project Zomboid
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Project Zomboid 
---

# mod击杀数

## 事件绑定

```lua
Events.OnPlayerUpdate.Add(KillHalo.checkKills)

```

## 查询击杀数

```lua

if not player or player:isDead() then
    return
end

if not KillHalo.isInitialized then
    KillHalo.lastKillCount = player:getZombieKills()
    KillHalo.isInitialized = true
    return
end

local currentKills = player:getZombieKills()
```

## 定义全局变量

```lua
local KillHalo = {}
KillHalo.lastKillCount = 0
KillHalo.isInitialized = false
```






## 显示方式：玩家喊话 或者  add

```lua

player:Say(text)
```

## 翻译文件
翻译文件一直不生效，最后使用的 ASCII 字符


文件位置
lua shared Translate CN


文件名
IG_UI_CN.txt

文件内容
IGUI_CN = {
    UI_Kill_Text = "击杀了 ",
    UI_Total_Text = "总计: ",
}



## getStats 一直拿不到具体的值