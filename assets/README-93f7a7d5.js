import{o as a,a as t,z as n}from"./vue-libs-9b0981d5.js";const l={class:"van-doc-markdown-body"},d=n(`<h1>NavBar 头部导航</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>NavBar 是一个头部导航栏，为页面提供搜索和导航功能，常用于页面顶部。</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">JybNavBar</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;jyb-ui&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">jyb-nav-bar</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;顶部导航&#39;&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">jyb-nav-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="sou-suo-dao-hang" tabindex="-1">搜索导航</h3><pre><code class="language-html"> <span class="hljs-tag">&lt;<span class="hljs-name">jyb-nav-bar</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;搜索导航&#39;&quot;</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;searchValue&quot;</span> <span class="hljs-attr">isSearch</span> @<span class="hljs-attr">search</span>=<span class="hljs-string">&quot;search&quot;</span> <span class="hljs-attr">:fixed</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">jyb-nav-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>
<span class="hljs-keyword">import</span> { showToast } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vant&#39;</span>;

<span class="hljs-keyword">const</span> searchValue = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;初始值&#39;</span>);
<span class="hljs-keyword">const</span> radio = <span class="hljs-title function_">ref</span>(<span class="hljs-string">&#39;default&#39;</span>);

<span class="hljs-keyword">function</span> <span class="hljs-title function_">search</span>(<span class="hljs-params">item</span>) {
    <span class="hljs-title function_">showToast</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">&#39;当前搜索值:&#39;</span> + item });
}
</code></pre></div><div class="van-doc-card"><h3 id="zi-ding-yi-you-ce" tabindex="-1">自定义右侧</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">jyb-nav-bar</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;顶部导航&#39;&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">right</span>&gt;</span> 添加 <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">jyb-nav-bar</span>&gt;</span>
</code></pre></div><div class="van-doc-card"><h3 id="fan-hui-xiao-yan" tabindex="-1">返回校验</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">jyb-nav-bar</span> <span class="hljs-attr">:title</span>=<span class="hljs-string">&quot;&#39;顶部导航&#39;&quot;</span> <span class="hljs-attr">:clickBack</span>=<span class="hljs-string">&quot;clickBack&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">jyb-nav-bar</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-keyword">function</span> <span class="hljs-title function_">clickBack</span>(<span class="hljs-params"></span>) {
    <span class="hljs-comment">//无法返回</span>
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
}
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="props" tabindex="-1">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>名称</td><td><em>string</em></td><td>-</td></tr><tr><td>url</td><td>返回指定 url，默认值返回上一级</td><td><em>string</em></td><td>-</td></tr><tr><td>isSearch</td><td>是否为搜索</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>v-model</td><td>搜索绑定值</td><td><em>string</em></td><td>-</td></tr><tr><td>clickBack</td><td>返回函数，true 返回，false 中断</td><td><em>function&lt;<code>boolean</code>&gt;</em></td><td>-</td></tr><tr><td>fontSizeScale</td><td>是否放大字体 (default:原始大小 medium:1.2倍 large:1.4倍)</td><td><em>string</em></td><td><code>default</code></td></tr></tbody></table></div><div class="van-doc-card"><h3 id="events" tabindex="-1">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>search</td><td>点击搜索时触发</td><td>当前搜索项</td></tr></tbody></table></div><div class="van-doc-card"><h3 id="slots" tabindex="-1">Slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>right</td><td>右侧文本插槽</td></tr></tbody></table></div>`,12),e=[d],i={__name:"README",setup(c,{expose:s}){return s({frontmatter:{}}),(r,h)=>(a(),t("div",l,e))}};export{i as default};