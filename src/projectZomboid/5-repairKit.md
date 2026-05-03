---
title: repari kit 
shortTitle: repari kit 
image: 
icon: pen-to-square
date: 2026-05-02
order: 5
star: true
tag: 
  - Project Zomboid
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Project Zomboid 
---







## 1. 查找游戏原版物品定义
```sh
cd /Users/benjamin/Library/Application\ Support/Steam/steamapps/common/ProjectZomboid/Project\ Zomboid.app/Contents/Java/media/scripts

grep -rni "item Epoxy" .
# ./generated/items/drainable.txt:488:    item Epoxy
```


## 2. 物品刷新


创建掉落脚本文件

media/lua/server/Items/RepairKit_Distributions.lua

```lua

-- 确保游戏原版的物资表先加载
require 'Items/ProceduralDistributions'

-- 1. 定义一个安全的注入函数
local function addItemToSpawn(containerName, itemFullName, spawnWeight)
    local dist = ProceduralDistributions.list[containerName]
    
    -- 安全检查：如果这个容器存在，就把物品和概率塞进去
    if dist and dist.items then
        table.insert(dist.items, itemFullName)
        table.insert(dist.items, spawnWeight)
    end
end

-- 2. 开始注入你的物品
-- 参数依次为："容器/物资池名称", "物品代码", "刷新权重(概率)"

-- 🚗 【车辆修理包】刷新配置
-- 放入汽修店货架 (权重 10)
addItemToSpawn("MechanicShelfMisc", "Base.VehicleRepairKit", 10)
-- 放入修车工具箱/木箱 (权重 20，更容易出)
addItemToSpawn("CrateMechanics", "Base.VehicleRepairKit", 20)
-- 放入普通汽车的后备箱 (权重 5，比较稀有)
addItemToSpawn("VehicleTrunkStandard", "Base.VehicleRepairKit", 5)
-- 放入重型车辆（皮卡/货车）后备箱 (权重 10)
addItemToSpawn("VehicleTrunkHeavy", "Base.VehicleRepairKit", 10)

-- 🛠️ 【超级环氧树脂】刷新配置
-- 放入五金店货架
addItemToSpawn("HardwareStoreTools", "Base.VehicleRepairKit", 10)
-- 放入普通工具箱
addItemToSpawn("CrateTools", "Base.VehicleRepairKit", 15)
-- 放入民居车库的架子
addItemToSpawn("GarageTools", "Base.VehicleRepairKit", 5)


```

```sh
cd "~/Library/Application Support/Steam/steamapps/common/Project Zomboid/Project Zomboid.app/Contents/Java/media/lua/server/Items"
cat ProceduralDistributions.lua | grep "name="

```



去原版的 ProceduralDistributions.lua 里搜一下 Jack（千斤顶）或者 Wrench（扳手），看看它们在哪些容器里，权重是多少