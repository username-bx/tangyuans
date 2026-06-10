import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as i,o as t}from"./app-CYyKF8l1.js";const s={};function o(r,e){return t(),a("div",null,e[0]||(e[0]=[i(`<h1 id="修改衣服属性-增加配方" tabindex="-1"><a class="header-anchor" href="#修改衣服属性-增加配方"><span>修改衣服属性，增加配方</span></a></h1><h2 id="文件路径" tabindex="-1"><a class="header-anchor" href="#文件路径"><span>文件路径</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>~/Zomboid/mods/你的模组名字/</span></span>
<span class="line"><span>├── mod.info</span></span>
<span class="line"><span>└── media/</span></span>
<span class="line"><span>    └── scripts/</span></span>
<span class="line"><span>        └── 随便什么名字.txt (确保是纯文本)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配方" tabindex="-1"><a class="header-anchor" href="#配方"><span>配方</span></a></h2><p>module Base<br> {<br> craftRecipe Make_Super_Jacket<br> {</p><pre><code>    category = Tailoring,
    inputs
    {
        item 3 [Base.RippedSheets],
    }
    outputs
    {
        item 1 Base.Jacket_ArmyCamoUrban,
    }
}
</code></pre><p>}</p><h2 id="修改属性" tabindex="-1"><a class="header-anchor" href="#修改属性"><span>修改属性</span></a></h2><ol><li>BloodLocation 防御部位 <ul><li>LongJacket Hands ShirtLongSleeves 这些是系统预设 包含好几个部位</li><li>LowerLeg_L;UpperLeg_L 也可以这样写</li></ul></li><li>BiteDefense 防咬</li><li>ScratchDefense 防抓</li><li>BodyLocation 装备位置 也就是判断会不会冲突 会不会替换别的衣服</li><li>Weight = 0.1, // 重量 (原版很重，改成 0.1 就像羽毛一样)</li><li>RunSpeedModifier = 1.1, // 跑步速度加成！(原版穿厚衣服会减速，1.1代表穿上跑得更快)</li><li>CombatSpeedModifier = 1.2, // 攻击速度加成！(穿上后挥舞武器更快)</li><li>Insulation = 0.8, // 保暖度 (0.0 到 1.0)</li></ol><p>module Base{<br> item StockingsWhite{<br> DisplayCategory = Accessory,<br> ItemType = base:clothing,<br> Weight = 0.1,</p><pre><code>    BloodLocation = LongJacket;LowerLeg_L;UpperLeg_L;Hands;ForeArm_L;ForeArm_R,
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
</code></pre><p>}</p>`,12)]))}const p=n(s,[["render",o]]),d=JSON.parse('{"path":"/projectZomboid/3-craft.html","title":"修改衣服属性，增加配方","lang":"zh-CN","frontmatter":{"title":"修改衣服属性，增加配方","shortTitle":"修改衣服属性，增加配方","image":null,"icon":"pen-to-square","date":"2026-05-02T00:00:00.000Z","order":3,"star":true,"tag":["Project Zomboid"],"auther":"Tang Yuan","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"修改衣服属性，增加配方\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-05-02T00:00:00.000Z\\",\\"dateModified\\":\\"2026-05-02T02:47:59.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tang Yuan\\",\\"url\\":\\"\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/projectZomboid/3-craft.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"修改衣服属性，增加配方"}],["meta",{"property":"og:description","content":"修改衣服属性，增加配方 文件路径 配方 module Base { craftRecipe Make_Super_Jacket { } 修改属性 BloodLocation 防御部位 LongJacket Hands ShirtLongSleeves 这些是系统预设 包含好几个部位 LowerLeg_L;UpperLeg_L 也可以这样写 BiteDe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-05-02T02:47:59.000Z"}],["meta",{"property":"article:tag","content":"Project Zomboid"}],["meta",{"property":"article:published_time","content":"2026-05-02T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-05-02T02:47:59.000Z"}],["meta",{"name":"keywords","content":"Project Zomboid"}]],"description":"修改衣服属性，增加配方 文件路径 配方 module Base { craftRecipe Make_Super_Jacket { } 修改属性 BloodLocation 防御部位 LongJacket Hands ShirtLongSleeves 这些是系统预设 包含好几个部位 LowerLeg_L;UpperLeg_L 也可以这样写 BiteDe..."},"git":{"createdTime":1777689875000,"updatedTime":1777690079000,"contributors":[{"name":"tangyuans","username":"tangyuans","email":"tangyuans@gmail.com","commits":2,"url":"https://github.com/tangyuans"}]},"readingTime":{"minutes":1.05,"words":315},"filePathRelative":"projectZomboid/3-craft.md","excerpt":"\\n<h2>文件路径</h2>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-\\"><span class=\\"line\\"><span>~/Zomboid/mods/你的模组名字/</span></span>\\n<span class=\\"line\\"><span>├── mod.info</span></span>\\n<span class=\\"line\\"><span>└── media/</span></span>\\n<span class=\\"line\\"><span>    └── scripts/</span></span>\\n<span class=\\"line\\"><span>        └── 随便什么名字.txt (确保是纯文本)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,d as data};
