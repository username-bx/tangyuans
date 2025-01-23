import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,d as a,o as n}from"./app-DUEOSN51.js";const l={};function t(r,s){return n(),i("div",null,s[0]||(s[0]=[a(`<h1 id="部署到服务器后-vuepress出现的一些问题记录" tabindex="-1"><a class="header-anchor" href="#部署到服务器后-vuepress出现的一些问题记录"><span>部署到服务器后,vuepress出现的一些问题记录</span></a></h1><h2 id="_1-build后-样式没有" tabindex="-1"><a class="header-anchor" href="#_1-build后-样式没有"><span>1. build后,样式没有</span></a></h2><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// .vuepress/config.js</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">base: &#39;./&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-头像显示" tabindex="-1"><a class="header-anchor" href="#_2-头像显示"><span>2. 头像显示</span></a></h2><p>修改路径从 &#39;/img/avatar.jpg&#39; 为 &#39;./img/avatar.jpg&#39;</p><h2 id="_3-自定义页面-一直报错" tabindex="-1"><a class="header-anchor" href="#_3-自定义页面-一直报错"><span>3. 自定义页面,一直报错</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>尝试的思路: </span></span>
<span class="line"><span>1. 添加 readme </span></span>
<span class="line"><span>2. 重新加载依赖</span></span>
<span class="line"><span>3. 改变文件路径</span></span>
<span class="line"><span>4. configjs 添加page 字段</span></span>
<span class="line"><span></span></span>
<span class="line"><span>最后解决方案:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>vuepress 版本号 1.9.10</span></span>
<span class="line"><span>vuepress-theme-meteorlxy 版本号 ^1.9.0</span></span>
<span class="line"><span></span></span>
<span class="line"><span>修改文件中 router的mode.  从history改为默认的hash</span></span>
<span class="line"><span>&quot;\\node_modules\\@vuepress\\core\\lib\\client\\app.js&quot; </span></span>
<span class="line"><span></span></span>
<span class="line"><span>// mode: &#39;history&#39;,</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-刷新后-丢失样式" tabindex="-1"><a class="header-anchor" href="#_4-刷新后-丢失样式"><span>4. 刷新后,丢失样式</span></a></h2><p>原因: router的方式 model 不对</p><p>解决方式:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span></span></span>
<span class="line"><span>修改文件中 router的mode.  从history改为默认的hash</span></span>
<span class="line"><span>&quot;\\node_modules\\@vuepress\\core\\lib\\client\\app.js&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const c=e(l,[["render",t],["__file","2.html.vue"]]),h=JSON.parse(`{"path":"/vuepress/2.html","title":"部署到服务器后,vuepress出现的一些问题记录","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-10-19T00:00:00.000Z","order":2,"category":["VuePress 1.0"],"tag":["VuePress 1.0"],"description":"部署到服务器后,vuepress出现的一些问题记录 1. build后,样式没有 2. 头像显示 修改路径从 '/img/avatar.jpg' 为 './img/avatar.jpg' 3. 自定义页面,一直报错 4. 刷新后,丢失样式 原因: router的方式 model 不对 解决方式:","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress/2.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"部署到服务器后,vuepress出现的一些问题记录"}],["meta",{"property":"og:description","content":"部署到服务器后,vuepress出现的一些问题记录 1. build后,样式没有 2. 头像显示 修改路径从 '/img/avatar.jpg' 为 './img/avatar.jpg' 3. 自定义页面,一直报错 4. 刷新后,丢失样式 原因: router的方式 model 不对 解决方式:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"VuePress 1.0"}],["meta",{"property":"article:published_time","content":"2023-10-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署到服务器后,vuepress出现的一些问题记录\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. build后,样式没有","slug":"_1-build后-样式没有","link":"#_1-build后-样式没有","children":[]},{"level":2,"title":"2. 头像显示","slug":"_2-头像显示","link":"#_2-头像显示","children":[]},{"level":2,"title":"3. 自定义页面,一直报错","slug":"_3-自定义页面-一直报错","link":"#_3-自定义页面-一直报错","children":[]},{"level":2,"title":"4. 刷新后,丢失样式","slug":"_4-刷新后-丢失样式","link":"#_4-刷新后-丢失样式","children":[]}],"git":{},"readingTime":{"minutes":0.61,"words":184},"filePathRelative":"vuepress/2.md","localizedDate":"2023年10月19日","excerpt":"\\n<h2>1. build后,样式没有</h2>\\n<div class=\\"language-json line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"json\\" data-title=\\"json\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">// .vuepress/config.js</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">base: './'</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{c as comp,h as data};
