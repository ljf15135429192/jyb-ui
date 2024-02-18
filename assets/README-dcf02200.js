import{o as a,a as n,z as t}from"./vue-libs-9b0981d5.js";const l={class:"van-doc-markdown-body"},e=t(`<h1>useCssVar</h1><div class="van-doc-card"><h3 id="jie-shao" tabindex="-1">介绍</h3><p>设置css变量</p></div><div class="van-doc-card"><h3 id="yin-ru" tabindex="-1">引入</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> useCssVar <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;jyb-ui/hooks/useCssVar&#39;</span>;
</code></pre></div><h2 id="dai-ma-yan-shi" tabindex="-1">代码演示</h2><div class="van-doc-card"><h3 id="ji-chu-yong-fa" tabindex="-1">基础用法</h3><pre><code class="language-vue"> &lt;JybButton type=&#39;danger&#39; @click=&quot;handleClick&quot;&gt;修改全局--jyb-red为黑色&lt;/JybButton&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> {getCssVar,setCssVar} =<span class="hljs-title function_">useCssVar</span>({<span class="hljs-attr">gloal</span>:<span class="hljs-literal">true</span>})

<span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-string">&#39;全局变量&#39;</span>,<span class="hljs-title function_">getCssVar</span>(<span class="hljs-string">&#39;--jyb-red&#39;</span>));

<span class="hljs-keyword">const</span> <span class="hljs-title function_">handleClick</span>=(<span class="hljs-params"></span>)=&gt;{
 <span class="hljs-title function_">setCssVar</span>(<span class="hljs-string">&#39;--jyb-red&#39;</span>,<span class="hljs-string">&#39;black&#39;</span>)
}
</code></pre></div><div class="van-doc-card"><h3 id="quan-ju-hui-fu" tabindex="-1">全局恢复</h3><pre><code class="language-vue"> &lt;JybButton type=&#39;danger&#39; @click=&quot;handleClick&quot;&gt;组件修改全局--jyb-red为绿色，卸载后复原&lt;/JybButton&gt;
</code></pre><pre><code class="language-js">  <span class="hljs-keyword">const</span> {setCssVar} =<span class="hljs-title function_">useCssVar</span>({
    <span class="hljs-attr">gloal</span>:<span class="hljs-literal">true</span>,
    <span class="hljs-attr">reset</span>:<span class="hljs-literal">true</span>
  })
    
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">handleClick</span>=(<span class="hljs-params"></span>)=&gt;{
    <span class="hljs-title function_">setCssVar</span>(<span class="hljs-string">&#39;--jyb-red&#39;</span>,<span class="hljs-string">&#39;#42b883&#39;</span>)
  }
</code></pre></div><div class="van-doc-card"><h3 id="ju-bu" tabindex="-1">局部</h3><pre><code class="language-vue"> &lt;JybButton type=&#39;danger&#39;&gt;组件修改局部--jyb-red为蓝色&lt;/JybButton&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> { getCssVar, setCssVar } = <span class="hljs-title function_">useCssVar</span>()


<span class="hljs-title function_">setCssVar</span>(<span class="hljs-string">&#39;--jyb-red&#39;</span>, <span class="hljs-string">&#39;#5792fd&#39;</span>)

<span class="hljs-title function_">onMounted</span>(<span class="hljs-function">() =&gt;</span> {
  <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(<span class="hljs-title function_">getCssVar</span>(<span class="hljs-string">&#39;--jyb-red&#39;</span>), <span class="hljs-string">&#39;局部获取jyb-red&#39;</span>);
})
</code></pre></div><h2 id="api" tabindex="-1">API</h2><div class="van-doc-card"><h3 id="config" tabindex="-1">config</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>gloal</td><td>是否全局</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td>reset</td><td>是否恢复</td><td><em>boolean</em></td><td><code>false</code></td></tr></tbody></table></div>`,9),c=[e],h={__name:"README",setup(p,{expose:s}){return s({frontmatter:{}}),(o,r)=>(a(),n("div",l,c))}};export{h as default};
