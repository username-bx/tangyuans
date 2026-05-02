---
title: 修改衣服属性，增加配方
shortTitle: 修改衣服属性，增加配方
image: 
icon: pen-to-square
date: 2026-05-02
order: 3
star: true
tag: 
  - Project Zomboid
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: Project Zomboid 
---


# 修改衣服属性，增加配方



## 文件路径

```
~/Zomboid/mods/你的模组名字/
├── mod.info
└── media/
    └── scripts/
        └── 随便什么名字.txt (确保是纯文本)

```



## 配方
module Base
{
    craftRecipe Make_Super_Jacket
    {
        
        category = Tailoring,
        inputs
        {
            item 3 [Base.RippedSheets],
        }
        outputs
        {
            item 1 Base.Jacket_ArmyCamoUrban,
        }
    }
}


## 修改属性


1. BloodLocation 防御部位
    - LongJacket Hands ShirtLongSleeves 这些是系统预设 包含好几个部位
    - LowerLeg_L;UpperLeg_L 也可以这样写
2. BiteDefense 防咬
3. ScratchDefense 防抓
4. BodyLocation 装备位置 也就是判断会不会冲突 会不会替换别的衣服
5. Weight = 0.1,            // 重量 (原版很重，改成 0.1 就像羽毛一样)
6. RunSpeedModifier = 1.1,  // 跑步速度加成！(原版穿厚衣服会减速，1.1代表穿上跑得更快)
7. CombatSpeedModifier = 1.2, // 攻击速度加成！(穿上后挥舞武器更快)
8. Insulation = 0.8,        // 保暖度 (0.0 到 1.0)



module Base{
    item StockingsWhite{
        DisplayCategory = Accessory,
        ItemType = base:clothing,
        Weight = 0.1,

        BloodLocation = LongJacket;LowerLeg_L;UpperLeg_L;Hands;ForeArm_L;ForeArm_R,
        BiteDefense = 100,
        ScratchDefense = 100,

        Icon = StockingsWhite,
        BodyLocation = base:underwearextra1,
        ClothingItem = StockingsWhite,
        WorldStaticModel = StockingsWhite_Ground,
        Tags = base:isfirefuel;base:isfiretinder,
    }

    item Tshirt_WhiteLongSleeveTINT
    {
        DisplayCategory = Clothing,
        ItemType = base:clothing,
        Icon = ShirtGeneric,
        BloodLocation = ShirtLongSleeves,

        BiteDefense = 100,
        ScratchDefense = 100,

        BodyLocation = base:tshirt,
        ClothingItem = Tshirt_WhiteLongSleeveTINT,
        FabricType = Cotton,
        Insulation = 0.3,
        WindResistance = 0.15,
        WorldStaticModel = Shirt_Ground,
        Tags = base:canbedyed;base:ripclothingcotton,
    }
}