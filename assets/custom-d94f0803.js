import{o as a,a as n,z as l}from"./vue-libs-9b0981d5.js";const p={class:"van-doc-markdown-body"},t=l(`<h2 id="zhu-ti-xiang-guan" tabindex="-1">主题相关</h2><div class="van-doc-card"><h3 id="yuan-li" tabindex="-1">原理</h3><ul><li>ui库主题是通过css变量来实现所以，可以通过root直接覆盖变量即可定制，例如：</li></ul><pre><code class="language-css"><span class="hljs-selector-pseudo">:root</span>{
  <span class="hljs-attr">--jyb-red</span>:<span class="hljs-number">#000</span>;
}
</code></pre></div><div class="van-doc-card"><h3 id="bian-liang" tabindex="-1">变量</h3><pre><code class="language-scss"><span class="hljs-selector-pseudo">:root</span> {
  <span class="hljs-attr">--jyb-red</span>: <span class="hljs-number">#ef4033</span>; <span class="hljs-comment">//主色——主要用于导航栏</span>
  <span class="hljs-attr">--jyb-orange</span>: <span class="hljs-number">#ff4b10</span>; <span class="hljs-comment">//辅助色——多用于金额，也用于需要突出和强调的文字</span>
  <span class="hljs-attr">--jyb-blue</span>: <span class="hljs-number">#5792fd</span>; <span class="hljs-comment">//辅助色——主要用于颜色提醒</span>
  <span class="hljs-attr">--jyb-green</span>: <span class="hljs-number">#06c764</span>; <span class="hljs-comment">//辅助色——主要用于颜色提醒</span>
  <span class="hljs-attr">--jyb-yellow</span>: <span class="hljs-number">#ffc000</span>; <span class="hljs-comment">//辅助色——多用于颜色提醒</span>
  <span class="hljs-attr">--jyb-brown</span>: <span class="hljs-number">#b79255</span>; <span class="hljs-comment">//辅助色——多用于颜色提醒</span>
  <span class="hljs-attr">--jyb-black</span>: <span class="hljs-number">#000</span>;
  <span class="hljs-attr">--jyb-white</span>: <span class="hljs-number">#fff</span>;
  <span class="hljs-attr">--jyb-gray-1</span>: <span class="hljs-number">#f5f5f5</span>; <span class="hljs-comment">//主背景色——通用于背景色及区域间隔的底色</span>
  <span class="hljs-attr">--jyb-gray-2</span>: <span class="hljs-number">#ededed</span>; <span class="hljs-comment">//线条——通用于线条及分隔线</span>
  <span class="hljs-attr">--jyb-gray-3</span>: <span class="hljs-number">#c0c4cc</span>; <span class="hljs-comment">//输入框——用于输入框提示性文字</span>
  <span class="hljs-attr">--jyb-gray-4</span>: <span class="hljs-number">#969696</span>; <span class="hljs-comment">//日期、时间——用于标注性文字的内容、日期、时间</span>
  <span class="hljs-attr">--jyb-gray-5</span>: <span class="hljs-number">#666666</span>; <span class="hljs-comment">//副标题、内容2——用于个别副标题内容、次重要叙述性内容、普通级段落信息、内容</span>
  <span class="hljs-attr">--jyb-gray-6</span>: <span class="hljs-number">#333333</span>; <span class="hljs-comment">//小标题、内容1——用于个别重要title、重要叙述性内容</span>
  <span class="hljs-attr">--jyb-gray-7</span>: <span class="hljs-number">#000000</span>; <span class="hljs-comment">//模块标题——如导航名称、大板块标题、类目名称等</span>

  <span class="hljs-comment">// Gradient Colors</span>
  <span class="hljs-attr">--jyb-gradient-red</span>: <span class="hljs-built_in">linear-gradient</span>(to right, <span class="hljs-number">#ff6155</span>, <span class="hljs-number">#ef4033</span>);

  <span class="hljs-comment">// Font</span>
  <span class="hljs-attr">--jyb-font-size-1</span>: <span class="hljs-number">10px</span>; <span class="hljs-comment">//极少辅助性文字、底部栏文字</span>
  <span class="hljs-attr">--jyb-font-size-2</span>: <span class="hljs-number">12px</span>; <span class="hljs-comment">//较为次要的内容</span>
  <span class="hljs-attr">--jyb-font-size-3</span>: <span class="hljs-number">13px</span>; <span class="hljs-comment">//列表地址、日期时间、提示</span>
  <span class="hljs-attr">--jyb-font-size-4</span>: <span class="hljs-number">14px</span>; <span class="hljs-comment">//列表页内容</span>
  <span class="hljs-attr">--jyb-font-size-5</span>: <span class="hljs-number">15px</span>; <span class="hljs-comment">//模块标题、内容、按钮文字</span>
  <span class="hljs-attr">--jyb-font-size-6</span>: <span class="hljs-number">16px</span>; <span class="hljs-comment">//列商品主标题</span>
  <span class="hljs-attr">--jyb-font-size-7</span>: <span class="hljs-number">17px</span>; <span class="hljs-comment">//导航栏标题</span>
  <span class="hljs-attr">--jyb-font-weight-bold</span>: <span class="hljs-number">500</span>;
  <span class="hljs-attr">--jyb-line-height-xs</span>: <span class="hljs-number">14px</span>;
  <span class="hljs-attr">--jyb-line-height-sm</span>: <span class="hljs-number">18px</span>;
  <span class="hljs-attr">--jyb-line-height-md</span>: <span class="hljs-number">20px</span>;
  <span class="hljs-attr">--jyb-line-height-lg</span>: <span class="hljs-number">22px</span>;

  <span class="hljs-comment">// button</span>
  <span class="hljs-attr">--jyb-default-height</span>: <span class="hljs-number">40px</span>;
  <span class="hljs-attr">--jyb-large-height</span>: <span class="hljs-number">48px</span>;
  <span class="hljs-attr">--jyb-small-height</span>: <span class="hljs-number">34px</span>;
  <span class="hljs-attr">--jyb-mini-height</span>: <span class="hljs-number">27px</span>;
  <span class="hljs-attr">--jyb-button-radius</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attr">--jyb-button-small-font-size</span>: <span class="hljs-number">14px</span>;

  <span class="hljs-comment">// Padding</span>
  <span class="hljs-attr">--jyb-padding-base</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attr">--jyb-padding-xs</span>: <span class="hljs-built_in">var</span>(--jyb-padding-base) * <span class="hljs-number">2</span>;
  <span class="hljs-attr">--jyb-padding-sm</span>: <span class="hljs-built_in">var</span>(--jyb-padding-base) * <span class="hljs-number">3</span>;
  <span class="hljs-attr">--jyb-padding-md</span>: <span class="hljs-built_in">var</span>(--jyb-padding-base) * <span class="hljs-number">4</span>;
  <span class="hljs-attr">--jyb-padding-lg</span>: <span class="hljs-built_in">var</span>(--jyb-padding-base) * <span class="hljs-number">6</span>;
  <span class="hljs-attr">--jyb-padding-xl</span>: <span class="hljs-built_in">var</span>(--jyb-padding-base) * <span class="hljs-number">8</span>;

  <span class="hljs-comment">// Border</span>
  <span class="hljs-attr">--jyb-border-color</span>: <span class="hljs-built_in">var</span>(--jyb-gray-<span class="hljs-number">2</span>);
  <span class="hljs-attr">--jyb-border-width-base</span>: <span class="hljs-number">1px</span>;
  <span class="hljs-attr">--jyb-border-radius-sm</span>: <span class="hljs-number">2px</span>;
  <span class="hljs-attr">--jyb-border-radius-md</span>: <span class="hljs-number">5px</span>;
  <span class="hljs-attr">--jyb-border-radius-lg</span>: <span class="hljs-number">8px</span>;
  <span class="hljs-attr">--jyb-border-radius-max</span>: <span class="hljs-number">999px</span>;
}
</code></pre></div>`,3),c=[t],m={__name:"custom",setup(j,{expose:s}){return s({frontmatter:{}}),(r,h)=>(a(),n("div",p,c))}};export{m as default};
