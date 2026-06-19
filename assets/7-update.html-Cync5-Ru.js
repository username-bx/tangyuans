import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as a,o as e}from"./app-DO9l_Jwt.js";const l={};function p(t,s){return e(),i("div",null,s[0]||(s[0]=[a(`<h2 id="文件层级" tabindex="-1"><a class="header-anchor" href="#文件层级"><span>文件层级</span></a></h2><ol><li>把108600下面某个id下的 mods 整个复制到 mod1 中</li><li>复制poster</li><li>创建脚本</li><li>上传</li><li>修改描述信息</li></ol><h2 id="创建vdf上传脚本" tabindex="-1"><a class="header-anchor" href="#创建vdf上传脚本"><span>创建vdf上传脚本</span></a></h2><h3 id="_1-撬锁" tabindex="-1"><a class="header-anchor" href="#_1-撬锁"><span>1. 撬锁</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/Users/benjaminma/upload1.vdf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;workshopitem&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;appid&quot; &quot;108600&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;publishedfileid&quot; &quot;3717762143&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;contentfolder&quot; &quot;/Users/benjaminma/mod1&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;previewfile&quot; &quot;/Users/benjaminma/poster1.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;visibility&quot; &quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;title&quot; &quot;Simple unlock&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;description&quot; &quot;原mod一直未更新，所以自行修复，侵权立删。&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;changenote&quot; &quot;update 4218&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述信息</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-txt"><span class="line"><span></span></span>
<span class="line"><span>**简易开锁**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>原mod一直未更新，所以自行修复，侵权立删。</span></span>
<span class="line"><span>原mod地址 https://steamcommunity.com/sharedfiles/filedetails/?id=2991923398</span></span>
<span class="line"><span></span></span>
<span class="line"><span>简易开锁，简易撬锁，需要身上有螺丝刀和回形针</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**更新内容 - 2026/05/21**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 添加一个删除物品的功能，右键背包，地上，容器的物品可以删除（用于删掉生成在背包的钥匙</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**更新内容 - 2026/05/25**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 添加json翻译文件</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**更新内容 - 2026/05/25**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 读条动作 获取特质 player:hasTrait(CharacterTrait.BURGLAR)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>modID:3717762143</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Simple Lockpicking**</span></span>
<span class="line"><span>Since the original mod hasn&#39;t been updated for a long time, I fixed it myself. I will take this down immediately if it infringes on the original author&#39;s rights.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Original mod link: https://steamcommunity.com/sharedfiles/filedetails/?id=2991923398</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Simple Lockpicking: Requires a screwdriver and a paperclip in your inventory to pick locks.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Update - 2026/05/21**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Added an item deletion feature. You can now delete items from your inventory, the ground, or containers via the right-click menu (mainly designed for deleting unwanted keys that spawn in your backpack).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Update - 2026/05/25**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. added json tranlste file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>**Update - 2026/05/27**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. get player trait  method: player:hasTrait(CharacterTrait.BURGLAR)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-车辆修理包" tabindex="-1"><a class="header-anchor" href="#_2-车辆修理包"><span>2. 车辆修理包</span></a></h2><p><a href="https://steamcommunity.com/sharedfiles/filedetails/?id=3720145222" target="_blank" rel="noopener noreferrer">https://steamcommunity.com/sharedfiles/filedetails/?id=3720145222</a></p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/Users/benjaminma/upload2.vdf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;workshopitem&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;appid&quot; &quot;108600&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;publishedfileid&quot; &quot;3720145222&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;contentfolder&quot; &quot;/Users/benjaminma/mod2&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;previewfile&quot; &quot;/Users/benjaminma/poster2.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;visibility&quot; &quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;title&quot; &quot;车辆修理包&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;description&quot; &quot;可以修理轮胎 引擎&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;changenote&quot; &quot;update 4218&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述信息</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-txt"><span class="line"><span>此mod很超模，修理车变得极其简单，谨慎订阅</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可修理部位：</span></span>
<span class="line"><span>座椅</span></span>
<span class="line"><span>引擎</span></span>
<span class="line"><span>油箱</span></span>
<span class="line"><span>轮胎</span></span>
<span class="line"><span>引擎罩</span></span>
<span class="line"><span>车窗</span></span>
<span class="line"><span>车门</span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以在下面位置搜刮获得：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 🚗 【车辆修理包】刷新配置</span></span>
<span class="line"><span>-- 放入汽修店货架 (权重 10)</span></span>
<span class="line"><span>-- 放入修车工具箱/木箱 (权重 20，更容易出)</span></span>
<span class="line"><span>-- 放入普通汽车的后备箱 (权重 5，比较稀有)</span></span>
<span class="line"><span>-- 放入重型车辆（皮卡/货车）后备箱 (权重 10)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>-- 放入五金店货架</span></span>
<span class="line"><span>-- 放入普通工具箱</span></span>
<span class="line"><span>-- 放入民居车库的架子</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>可以在制作菜单制作</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-木炭" tabindex="-1"><a class="header-anchor" href="#_3-木炭"><span>3. 木炭</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &lt;&lt; </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&#39;EOF&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> &gt; </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">/Users/benjaminma/upload3.vdf</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;workshopitem&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">{</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;appid&quot; &quot;108600&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;publishedfileid&quot; &quot;3720145222&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;contentfolder&quot; &quot;/Users/benjaminma/mod3&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;previewfile&quot; &quot;/Users/benjaminma/poster3.png&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;visibility&quot; &quot;0&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;title&quot; &quot;车辆修理包&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;description&quot; &quot;可以修理轮胎 引擎&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    &quot;changenote&quot; &quot;update&quot;</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EOF</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>描述信息</p><div class="language-txt line-numbers-mode" data-highlighter="shiki" data-ext="txt" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-txt"><span class="line"><span></span></span>
<span class="line"><span>**木屑 小树枝 树枝 树苗 木板 制作木炭**</span></span>
<span class="line"><span></span></span>
<span class="line"><span>木炭燃烧桶新增配方</span></span>
<span class="line"><span></span></span>
<span class="line"><span>新增配方：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 木屑 数量：1  -&gt; 自制木炭1</span></span>
<span class="line"><span>2. 小树枝 数量：1  -&gt; 自制木炭1</span></span>
<span class="line"><span>3. 树枝 数量：1  -&gt; 自制木炭2</span></span>
<span class="line"><span>4. 树苗 数量：1  -&gt; 自制木炭2</span></span>
<span class="line"><span>5. 木板 数量：1  -&gt; 自制木炭2</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>**2026/06/05**</span></span>
<span class="line"><span>为配合水泵模组使用，新增配方</span></span>
<span class="line"><span>1. 木屑 数量：1  -&gt; 木炭1</span></span>
<span class="line"><span>2. 小树枝 数量：1  -&gt; 木炭1</span></span>
<span class="line"><span>3. 树枝 数量：1  -&gt; 木炭2</span></span>
<span class="line"><span>4. 树苗 数量：1  -&gt; 木炭2</span></span>
<span class="line"><span>5. 木板 数量：1  -&gt; 木炭2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const c=n(l,[["render",p]]),h=JSON.parse(`{"path":"/projectZomboid/7-update.html","title":"更新mod","lang":"zh-CN","frontmatter":{"title":"更新mod","shortTitle":"更新mod","image":null,"icon":"pen-to-square","date":"2026-05-21T00:00:00.000Z","order":7,"star":true,"tag":["Project Zomboid"],"auther":"Tang Yuan","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"更新mod\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2026-05-21T00:00:00.000Z\\",\\"dateModified\\":\\"2026-06-10T14:54:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Tang Yuan\\",\\"url\\":\\"\\"}]}"],["meta",{"property":"og:url","content":"https://mister-hope.github.io/projectZomboid/7-update.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"更新mod"}],["meta",{"property":"og:description","content":"文件层级 把108600下面某个id下的 mods 整个复制到 mod1 中 复制poster 创建脚本 上传 修改描述信息 创建vdf上传脚本 1. 撬锁 描述信息 2. 车辆修理包 https://steamcommunity.com/sharedfiles/filedetails/?id=3720145222 描述信息 3. 木炭 描述信息"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-06-10T14:54:02.000Z"}],["meta",{"property":"article:tag","content":"Project Zomboid"}],["meta",{"property":"article:published_time","content":"2026-05-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2026-06-10T14:54:02.000Z"}],["meta",{"name":"keywords","content":"Project Zomboid"}]],"description":"文件层级 把108600下面某个id下的 mods 整个复制到 mod1 中 复制poster 创建脚本 上传 修改描述信息 创建vdf上传脚本 1. 撬锁 描述信息 2. 车辆修理包 https://steamcommunity.com/sharedfiles/filedetails/?id=3720145222 描述信息 3. 木炭 描述信息"},"git":{"createdTime":1779351007000,"updatedTime":1781103242000,"contributors":[{"name":"benjamin","username":"benjamin","email":"benjaminma@example.com","commits":5,"url":"https://github.com/benjamin"},{"name":"tangyuans","username":"tangyuans","email":"tangyuans@gmail.com","commits":1,"url":"https://github.com/tangyuans"}]},"readingTime":{"minutes":2.49,"words":748},"filePathRelative":"projectZomboid/7-update.md","excerpt":"<h2>文件层级</h2>\\n<ol>\\n<li>把108600下面某个id下的 mods 整个复制到 mod1 中</li>\\n<li>复制poster</li>\\n<li>创建脚本</li>\\n<li>上传</li>\\n<li>修改描述信息</li>\\n</ol>\\n<h2>创建vdf上传脚本</h2>\\n<h3>1. 撬锁</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-bash\\"><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">cat</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &lt;&lt; </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">'EOF'</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> &gt; </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">/Users/benjaminma/upload1.vdf</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"workshopitem\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">{</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"appid\\" \\"108600\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"publishedfileid\\" \\"3717762143\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"contentfolder\\" \\"/Users/benjaminma/mod1\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"previewfile\\" \\"/Users/benjaminma/poster1.png\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"visibility\\" \\"0\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"title\\" \\"Simple unlock\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"description\\" \\"原mod一直未更新，所以自行修复，侵权立删。\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">    \\"changenote\\" \\"update 4218\\"</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">EOF</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,h as data};
