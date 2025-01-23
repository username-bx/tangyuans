import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as e,o as t}from"./app-ZQtYJUnM.js";const n="/assets/react_dom-bMeBsnwj.png",l={};function h(r,i){return t(),a("div",null,i[0]||(i[0]=[e(`<h1 id="体验react" tabindex="-1"><a class="header-anchor" href="#体验react"><span>体验react</span></a></h1><h2 id="_1-react-核心库-react-createelement" tabindex="-1"><a class="header-anchor" href="#_1-react-核心库-react-createelement"><span>1. react 核心库 React.createElement</span></a></h2><p><em>React.createElement 生成的不是 html 对象,而是一个 react 虚拟对象</em></p><p>创建一个React元素，称作虚拟DOM，本质上是一个对象</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> span</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> React</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;span&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {}, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;一个span元素&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">dir</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+n+`" alt="图片" tabindex="0" loading="lazy"><figcaption>图片</figcaption></figure><ol start="2"><li><p>React.createElement</p><ol><li>参数1：元素类型，如果是字符串，一个普通的HTML元素</li><li>参数2：元素的属性，一个对象</li><li>后续参数：元素的子节点</li></ol></li></ol><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //创建一个span元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> span</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> React</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;span&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {}, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;一个span元素&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    //创建一个H1元素</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> h1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> React</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">createElement</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;h1&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        title</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;第一个React元素&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;World&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">span</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">    ReactDOM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">render</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">h1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">document</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">getElementById</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;root&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-jsx" tabindex="-1"><a class="header-anchor" href="#_2-jsx"><span>2. JSX</span></a></h2><p>JS的扩展语法，需要使用babel进行转义。</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- &lt;script&gt;&lt;/script&gt;  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- &lt;script type=&#39;text/script&#39;&gt;&lt;/script&gt; --&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- 上面两种写法是一样的 --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">&lt;!-- &lt;script type=&quot;text/babel&quot;&gt;&lt;/script&gt; --&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11)]))}const d=s(l,[["render",h],["__file","experience.html.vue"]]),c=JSON.parse('{"path":"/react/experience.html","title":"体验react","lang":"zh-CN","frontmatter":{"title":"体验react","shortTitle":"react experience","image":"/assets/images/navicat.png","icon":"pen-to-square","date":"2024-05-24T00:00:00.000Z","order":1,"tag":["react"],"auther":"Tang Yuan","head":[["meta",{"name":"keywords","content":"react experience"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/react/experience.html"}],["meta",{"property":"og:site_name","content":"汤圆"}],["meta",{"property":"og:title","content":"体验react"}],["meta",{"property":"og:description","content":"体验react 1. react 核心库 React.createElement React.createElement 生成的不是 html 对象,而是一个 react 虚拟对象 创建一个React元素，称作虚拟DOM，本质上是一个对象 图片图片 React.createElement 参数1：元素类型，如果是字符串，一个普通的HTML元素 参数2：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-23T09:09:53.000Z"}],["meta",{"property":"article:tag","content":"react"}],["meta",{"property":"article:published_time","content":"2024-05-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-23T09:09:53.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"体验react\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-24T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-23T09:09:53.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]],"description":"体验react 1. react 核心库 React.createElement React.createElement 生成的不是 html 对象,而是一个 react 虚拟对象 创建一个React元素，称作虚拟DOM，本质上是一个对象 图片图片 React.createElement 参数1：元素类型，如果是字符串，一个普通的HTML元素 参数2：..."},"headers":[{"level":2,"title":"1. react 核心库 React.createElement","slug":"_1-react-核心库-react-createelement","link":"#_1-react-核心库-react-createelement","children":[]},{"level":2,"title":"2. JSX","slug":"_2-jsx","link":"#_2-jsx","children":[]}],"git":{"createdTime":1737623393000,"updatedTime":1737623393000,"contributors":[{"name":"benjamin","username":"benjamin","email":"benjamin@manka.co.jp","commits":1,"url":"https://github.com/benjamin"}]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"react/experience.md","localizedDate":"2024年5月24日","excerpt":"\\n<h2>1. react 核心库 React.createElement</h2>\\n<p><em>React.createElement 生成的不是 html 对象,而是一个 react 虚拟对象</em></p>\\n<p>创建一个React元素，称作虚拟DOM，本质上是一个对象</p>\\n<div class=\\"language-js line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"js\\" data-title=\\"js\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">var</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\"> span</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\"> React</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">createElement</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"span\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, {}, </span><span style=\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\">\\"一个span元素\\"</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">);</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\">console</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">dir</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\">span</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{d as comp,c as data};
