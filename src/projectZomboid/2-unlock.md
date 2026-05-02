---
title: 开锁mod
shortTitle: 开锁mod
image: 
icon: pen-to-square
date: 2026-05-02
order: 2
star: true
tag: 
  - Project Zomboid
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Project Zomboid 
---

# 开锁mod


1. 获取背包

```lua
local inv = player:getInventory();
-- 直接找原版螺丝刀，这是最不可能报错的
local screwdriver = inv:getFirstTypeRecurse("Base.Screwdriver");
local paperclip = inv:getFirstTypeRecurse("Base.Paperclip");

if screwdriver and paperclip then
    -- 执行逻辑
end

```


2. 获取门的钥匙 背包添加物品

```lua
local doorKeyId = door:getKeyId();

local inv = player:getInventory();
local key = inv:AddItem("Base.Key1")
key:setName(keyName)
key:setKeyId(doorKeyId)

```


3. 门的属性 方法

```lua
if instanceof(obj, "IsoDoor") or instanceof(obj, "IsoThumpable") then
    -- 2. 解除物理锁和钥匙锁
    obj:setLocked(false)
    obj:setLockedByKey(false)
end



door:getOpenSprite() 贴图

```



4. 事件挂载

```lua
-- 在世界对象上点击，能拿到玩家id，点击的一系列对象
Events.OnFillWorldObjectContextMenu.Add(lockPickContextMenu);

-- 添加右键菜单
context:addOption()
```
