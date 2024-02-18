import{o as a,a as n,z as t}from"./vue-libs-9b0981d5.js";const e={class:"van-doc-markdown-body"},d=t(`<h1>useFontScale</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>字体大小</p></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="dan-ci-diao-yong" tabindex="-1">单次调用</h3><p>通过 <code>useFontScale</code> 方法，可以修改组件库整体大小，获取当前大小。</p><pre><code class="language-js"><span class="hljs-keyword">import</span> { useFontScale } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@jyb-ui/hooks&#39;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
  <span class="hljs-title function_">setup</span>(<span class="hljs-params"></span>) {
    <span class="hljs-keyword">const</span> {fontClass} =<span class="hljs-title function_">useFontScale</span>({<span class="hljs-attr">name</span>:<span class="hljs-string">&#39;jyb-xxx-scale&#39;</span>})
  },
};
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="lei-xing-ding-yi" tabindex="-1">类型定义</h3><pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">CallbackFunction</span> = <span class="hljs-function">(<span class="hljs-params">...args: <span class="hljs-built_in">any</span>[]</span>) =&gt;</span> <span class="hljs-built_in">void</span>;
<span class="hljs-keyword">interface</span> optionsType {
    name?:<span class="hljs-built_in">string</span>,
    watch?:<span class="hljs-title class_">CallbackFunction</span>,
    activated?: <span class="hljs-built_in">boolean</span>
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">useFontScale</span>(<span class="hljs-params">options:optionsType={}</span>) {}
</code></pre></div><div class="van-doc-card"><h3 id="can-shu-dui-xiang" tabindex="-1">参数对象</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>name</td><td>名称</td><td><em>string</em></td><td>-</td></tr><tr><td>watch</td><td>大小更改后执行函数</td><td><em>(...args: any[]) =&gt; void;</em></td><td>-</td></tr><tr><td>activated</td><td>缓存切换时，是否更新</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>`,7),l=[d],r={__name:"useFontScale",setup(c,{expose:s}){return s({frontmatter:{}}),(p,i)=>(a(),n("div",e,l))}};export{r as default};
