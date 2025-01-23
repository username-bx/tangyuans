import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,d as a,o as n}from"./app-DUEOSN51.js";const l={};function t(h,i){return n(),e("div",null,i[0]||(i[0]=[a(`<h1 id="liunx-常用的部分指令" tabindex="-1"><a class="header-anchor" href="#liunx-常用的部分指令"><span>liunx 常用的部分指令</span></a></h1><h2 id="_1-修改linux-root-密码" tabindex="-1"><a class="header-anchor" href="#_1-修改linux-root-密码"><span>1. 修改linux root 密码</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> passwd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-nginx相关命令" tabindex="-1"><a class="header-anchor" href="#_2-nginx相关命令"><span>2. nginx相关命令</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">whereis</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> nginx</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /usr/local/nginx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-使用wget下载github" tabindex="-1"><a class="header-anchor" href="#_3-使用wget下载github"><span>3. 使用wget下载github</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/xxxxx/xxx/xxxx.zip</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 如果是404</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 1.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 检查链接能否正常访问</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 2.</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 检查链接是不是直接进去下载</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-解压" tabindex="-1"><a class="header-anchor" href="#_4-解压"><span>4. 解压</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unzip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [目录名] [压缩包名]</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">//</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 不提示,直接覆盖重名文件</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">unzip</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [目录名] [压缩包名]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-上传本地文件到服务器" tabindex="-1"><a class="header-anchor" href="#_5-上传本地文件到服务器"><span>5. 上传本地文件到服务器</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /path/index.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@142.141.1.31:/usr/local/nginx/html/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-从服务器上下载文件" tabindex="-1"><a class="header-anchor" href="#_6-从服务器上下载文件"><span>6. 从服务器上下载文件</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@142.141.1.31:/usr/local/nginx/html/index.html</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Document/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 本地目录</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-上传本地文件到服务器" tabindex="-1"><a class="header-anchor" href="#_7-上传本地文件到服务器"><span>7. 上传本地文件到服务器</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> local_dir</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@142.141.1.31:/usr/local/nginx/html/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-从服务器下载整个目录" tabindex="-1"><a class="header-anchor" href="#_8-从服务器下载整个目录"><span>8. 从服务器下载整个目录</span></a></h2><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">scp</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> root@142.141.1.31:/usr/local/nginx/html/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ~/Document/</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 本地目录</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const p=s(l,[["render",t],["__file","liunx.html.vue"]]),k=JSON.parse('{"path":"/software/liunx.html","title":"liunx 常用的部分指令","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2023-10-19T00:00:00.000Z","order":6,"tag":["Liunx"],"description":"liunx 常用的部分指令 1. 修改linux root 密码 2. nginx相关命令 3. 使用wget下载github 4. 解压 5. 上传本地文件到服务器 6. 从服务器上下载文件 7. 上传本地文件到服务器 8. 从服务器下载整个目录","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/software/liunx.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"liunx 常用的部分指令"}],["meta",{"property":"og:description","content":"liunx 常用的部分指令 1. 修改linux root 密码 2. nginx相关命令 3. 使用wget下载github 4. 解压 5. 上传本地文件到服务器 6. 从服务器上下载文件 7. 上传本地文件到服务器 8. 从服务器下载整个目录"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Liunx"}],["meta",{"property":"article:published_time","content":"2023-10-19T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"liunx 常用的部分指令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-19T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 修改linux root 密码","slug":"_1-修改linux-root-密码","link":"#_1-修改linux-root-密码","children":[]},{"level":2,"title":"2. nginx相关命令","slug":"_2-nginx相关命令","link":"#_2-nginx相关命令","children":[]},{"level":2,"title":"3. 使用wget下载github","slug":"_3-使用wget下载github","link":"#_3-使用wget下载github","children":[]},{"level":2,"title":"4. 解压","slug":"_4-解压","link":"#_4-解压","children":[]},{"level":2,"title":"5. 上传本地文件到服务器","slug":"_5-上传本地文件到服务器","link":"#_5-上传本地文件到服务器","children":[]},{"level":2,"title":"6. 从服务器上下载文件","slug":"_6-从服务器上下载文件","link":"#_6-从服务器上下载文件","children":[]},{"level":2,"title":"7. 上传本地文件到服务器","slug":"_7-上传本地文件到服务器","link":"#_7-上传本地文件到服务器","children":[]},{"level":2,"title":"8. 从服务器下载整个目录","slug":"_8-从服务器下载整个目录","link":"#_8-从服务器下载整个目录","children":[]}],"git":{},"readingTime":{"minutes":0.64,"words":193},"filePathRelative":"software/liunx.md","localizedDate":"2023年10月19日","excerpt":"\\n<h2>1. 修改linux root 密码</h2>\\n<div class=\\"language-shell line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"shell\\" data-title=\\"shell\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">sudo</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> passwd</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\"> root</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{p as comp,k as data};
