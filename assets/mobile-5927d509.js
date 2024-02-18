import{_ as g,k as r,h as I,d as M,l as S,j as K,m as z,u as H}from"./locales-ae98208f.js";import{a as _,t as E,f as V,h as j,o as u,n as C,d as p,r as b,F as R,b as J,c as w,w as B,g as X,e as L,l as U,m as Y,u as N,q as W,j as q,v as G,x as Z,K as Q,s as tt}from"./vue-libs-9b0981d5.js";const et={name:"DemoBlock",props:{card:Boolean,title:String},data(){return{slugify:null}},computed:{slugifyTitle(){return this.slugify?this.slugify(this.title):""}},watch:{slugifyTitle(t){t&&this.$nextTick(()=>{let s="";top?s=top.location.hash.split("#").pop():s=location.hash.split("#").pop();const n=document.getElementById(t);n&&t===s&&n.scrollIntoView(!0)})}},async mounted(){const{slugify:t}=await r(()=>import("./bundle.esm.min-411ccac0.js"),[]);this.slugify=t}},ot={class:"van-doc-demo-block"},nt=["id"],st={key:1,class:"van-doc-demo-block__card"};function ct(t,s,n,c,a,o){return u(),_("div",ot,[n.title?(u(),_("h2",{key:0,class:"van-doc-demo-block__title",id:o.slugifyTitle},E(n.title),9,nt)):V("v-if",!0),n.card?(u(),_("div",st,[j(t.$slots,"default")])):j(t.$slots,"default",{key:2})])}const A=g(et,[["render",ct]]);const it={name:"DemoSection",computed:{demoName(){const{meta:t}=this.$route||{};return t&&t.name?`demo-${I(t.name)}`:""}}};function rt(t,s,n,c,a,o){return u(),_("section",{class:C(["van-doc-demo-section",o.demoName])},[j(t.$slots,"default")],2)}const x=g(it,[["render",rt]]);const at=()=>r(()=>import("./index-2f478734.js"),["assets/index-2f478734.js","assets/vue-libs-9b0981d5.js","assets/locales-ae98208f.js","assets/index-720e7064.css"]),ut=()=>r(()=>import("./index-270b9b43.js"),["assets/index-270b9b43.js","assets/index-a8f5e5fa.js","assets/index-137ae4a8.js","assets/vue-libs-9b0981d5.js","assets/useFontScale-afa8cc55.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css","assets/index-2ac19e6b.js","assets/index-1d7fc5ab.js","assets/index-0362a036.js"]),lt=()=>r(()=>import("./index-587ee463.js"),["assets/index-587ee463.js","assets/index-2ac19e6b.js","assets/useFontScale-afa8cc55.js","assets/vue-libs-9b0981d5.js","assets/index-1d7fc5ab.js","assets/index-137ae4a8.js","assets/index-0362a036.js","assets/index-62c4b0e6.js","assets/index-a8f5e5fa.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css","assets/useArray-7b7e81ea.js","assets/index-b73281c4.js","assets/index-52403669.js","assets/use-id-7f4b502d.js","assets/use-touch-7ef5a55b.js","assets/index-2aa06360.js","assets/index-9fc963e1.js","assets/function-call-1ec1bbbb.js","assets/index-d9be5e18.js"]),_t=()=>r(()=>import("./index-be159b79.js"),["assets/index-be159b79.js","assets/vue-libs-9b0981d5.js","assets/index-137ae4a8.js","assets/index-5a51eca5.js","assets/use-touch-7ef5a55b.js","assets/use-route-8dafc2dc.js","assets/index-14647d2a.js","assets/index-9fc963e1.js","assets/index-ff210e3d.js","assets/index-c9c363c8.js","assets/index-52403669.js","assets/function-call-1ec1bbbb.js","assets/locales-ae98208f.js","assets/useFontScale-afa8cc55.js","assets/index-4bb5265d.css"]),dt=()=>r(()=>import("./index-e7b6ef87.js"),["assets/index-e7b6ef87.js","assets/index-f764ec60.js","assets/useFontScale-afa8cc55.js","assets/vue-libs-9b0981d5.js","assets/locales-ae98208f.js","assets/index-2a262a5d.css","assets/index-2ac19e6b.js","assets/index-1d7fc5ab.js","assets/index-137ae4a8.js","assets/index-0362a036.js"]),mt=()=>r(()=>import("./index-c840944e.js"),["assets/index-c840944e.js","assets/use-id-7f4b502d.js","assets/vue-libs-9b0981d5.js","assets/use-touch-7ef5a55b.js","assets/index-137ae4a8.js","assets/use-route-8dafc2dc.js","assets/useFontScale-afa8cc55.js","assets/index-9fc963e1.js","assets/index-f764ec60.js","assets/locales-ae98208f.js","assets/index-2a262a5d.css","assets/index-6ca86020.js","assets/index-77469a0c.js","assets/index-ff210e3d.js","assets/index-a956402d.css","assets/useCssVar-9ccf4a46.js","assets/use-refs-83704085.js","assets/index-0362a036.js","assets/index-14647d2a.js","assets/index-2ac19e6b.js","assets/index-1d7fc5ab.js","assets/index-52403669.js","assets/index-b6eef460.css","assets/index-6d95c408.css"]),ht=()=>r(()=>import("./index-905bbf3d.js"),["assets/index-905bbf3d.js","assets/index-77469a0c.js","assets/vue-libs-9b0981d5.js","assets/index-ff210e3d.js","assets/index-137ae4a8.js","assets/locales-ae98208f.js","assets/index-a956402d.css"]),pt=()=>r(()=>import("./index-6aa3b120.js"),["assets/index-6aa3b120.js","assets/index-62c4b0e6.js","assets/vue-libs-9b0981d5.js","assets/index-a8f5e5fa.js","assets/index-137ae4a8.js","assets/useFontScale-afa8cc55.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css","assets/useArray-7b7e81ea.js","assets/index-b73281c4.js","assets/index-52403669.js","assets/use-id-7f4b502d.js","assets/use-touch-7ef5a55b.js","assets/index-2aa06360.js","assets/index-1d7fc5ab.js","assets/index-9fc963e1.js","assets/function-call-1ec1bbbb.js","assets/index-d9be5e18.js","assets/index-2ac19e6b.js","assets/index-0362a036.js"]),ft=()=>r(()=>import("./index-ab3e94b9.js"),["assets/index-ab3e94b9.js","assets/index-2ac19e6b.js","assets/useFontScale-afa8cc55.js","assets/vue-libs-9b0981d5.js","assets/index-1d7fc5ab.js","assets/index-137ae4a8.js","assets/index-0362a036.js"]),vt=()=>r(()=>import("./index-cb6cefd4.js"),["assets/index-cb6cefd4.js","assets/vue-libs-9b0981d5.js","assets/locales-ae98208f.js","assets/index-447a623f.js","assets/index-9fc963e1.js","assets/index-137ae4a8.js","assets/use-touch-7ef5a55b.js","assets/use-route-8dafc2dc.js","assets/index-fb8599c9.js","assets/index-c9c363c8.js","assets/use-placeholder-6fd570b8.js","assets/function-call-1ec1bbbb.js","assets/useFontScale-afa8cc55.js","assets/index-d9be5e18.js","assets/index-fe0b174c.css","assets/index-a8f5e5fa.js","assets/index-6d95c408.css","assets/index-2ac19e6b.js","assets/index-1d7fc5ab.js","assets/index-0362a036.js","assets/index-70933c3a.css"]),yt=()=>r(()=>import("./index-1d84177e.js"),["assets/index-1d84177e.js","assets/index-1932c615.js","assets/index-a8f5e5fa.js","assets/index-137ae4a8.js","assets/vue-libs-9b0981d5.js","assets/useFontScale-afa8cc55.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css","assets/useArray-7b7e81ea.js","assets/use-touch-7ef5a55b.js","assets/index-5a51eca5.js","assets/index-14647d2a.js","assets/index-9fc963e1.js","assets/index-ff210e3d.js","assets/function-call-1ec1bbbb.js","assets/index-62c4b0e6.js","assets/index-b73281c4.js","assets/index-52403669.js","assets/use-id-7f4b502d.js","assets/index-2aa06360.js","assets/index-1d7fc5ab.js","assets/index-d9be5e18.js","assets/index-40504885.js","assets/use-refs-83704085.js"]),gt=()=>r(()=>import("./index-ebbb6945.js"),["assets/index-ebbb6945.js","assets/index-6ca86020.js","assets/index-77469a0c.js","assets/vue-libs-9b0981d5.js","assets/index-ff210e3d.js","assets/index-137ae4a8.js","assets/locales-ae98208f.js","assets/index-a956402d.css","assets/useFontScale-afa8cc55.js","assets/useCssVar-9ccf4a46.js","assets/use-id-7f4b502d.js","assets/use-route-8dafc2dc.js","assets/use-refs-83704085.js","assets/use-touch-7ef5a55b.js","assets/index-0362a036.js","assets/index-14647d2a.js","assets/index-c9c363c8.js","assets/index-2aa06360.js","assets/index-1d7fc5ab.js","assets/index-40504885.js","assets/index-2ac19e6b.js","assets/index-52403669.js","assets/index-fb8599c9.js","assets/function-call-1ec1bbbb.js","assets/index-9fc963e1.js","assets/index-14bc2b24.css"]),bt=()=>r(()=>import("./index-1c5a06e6.js"),["assets/index-1c5a06e6.js","assets/index-a8f5e5fa.js","assets/index-137ae4a8.js","assets/vue-libs-9b0981d5.js","assets/useFontScale-afa8cc55.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css","assets/index-2ac19e6b.js","assets/index-1d7fc5ab.js","assets/index-0362a036.js","assets/index-447a623f.js","assets/index-9fc963e1.js","assets/use-touch-7ef5a55b.js","assets/use-placeholder-6fd570b8.js","assets/function-call-1ec1bbbb.js","assets/index-d9be5e18.js","assets/index-fe0b174c.css","assets/index-d0e7cfb7.css"]),Et=()=>r(()=>import("./index-022933fd.js"),["assets/index-022933fd.js","assets/index-2ac19e6b.js","assets/useFontScale-afa8cc55.js","assets/vue-libs-9b0981d5.js","assets/index-1d7fc5ab.js","assets/index-137ae4a8.js","assets/index-0362a036.js","assets/index-b73281c4.js","assets/index-52403669.js","assets/use-route-8dafc2dc.js","assets/use-id-7f4b502d.js","assets/use-touch-7ef5a55b.js","assets/use-placeholder-6fd570b8.js","assets/function-call-1ec1bbbb.js","assets/index-9fc963e1.js","assets/index-c9c363c8.js"]),Tt=()=>r(()=>import("./index-0081bcfd.js"),["assets/index-0081bcfd.js","assets/index-6ca86020.js","assets/index-77469a0c.js","assets/vue-libs-9b0981d5.js","assets/index-ff210e3d.js","assets/index-137ae4a8.js","assets/locales-ae98208f.js","assets/index-a956402d.css","assets/useFontScale-afa8cc55.js","assets/useCssVar-9ccf4a46.js","assets/use-id-7f4b502d.js","assets/use-route-8dafc2dc.js","assets/use-refs-83704085.js","assets/use-touch-7ef5a55b.js","assets/index-0362a036.js","assets/index-14647d2a.js","assets/index-2ac19e6b.js","assets/index-1d7fc5ab.js","assets/function-call-1ec1bbbb.js","assets/index-9fc963e1.js","assets/index-c9c363c8.js"]),$t=()=>r(()=>import("./index-de892c1f.js"),["assets/index-de892c1f.js","assets/index-1932c615.js","assets/index-a8f5e5fa.js","assets/index-137ae4a8.js","assets/vue-libs-9b0981d5.js","assets/useFontScale-afa8cc55.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css","assets/useArray-7b7e81ea.js","assets/use-touch-7ef5a55b.js","assets/index-5a51eca5.js","assets/index-14647d2a.js","assets/index-9fc963e1.js","assets/index-ff210e3d.js","assets/function-call-1ec1bbbb.js","assets/index-a938c15b.css"]),Lt=()=>r(()=>import("./index-e65a2a9a.js"),["assets/index-e65a2a9a.js","assets/useCssVar-9ccf4a46.js","assets/vue-libs-9b0981d5.js","assets/index-a8f5e5fa.js","assets/index-137ae4a8.js","assets/useFontScale-afa8cc55.js","assets/index-fb8599c9.js","assets/use-route-8dafc2dc.js","assets/index-c9c363c8.js","assets/locales-ae98208f.js","assets/index-6d95c408.css"]),wt=()=>r(()=>import("./index-1c9d4ab0.js"),["assets/index-1c9d4ab0.js","assets/vue-libs-9b0981d5.js","assets/index-6ca86020.js","assets/index-77469a0c.js","assets/index-ff210e3d.js","assets/index-137ae4a8.js","assets/locales-ae98208f.js","assets/index-a956402d.css","assets/useFontScale-afa8cc55.js","assets/useCssVar-9ccf4a46.js","assets/use-id-7f4b502d.js","assets/use-route-8dafc2dc.js","assets/use-refs-83704085.js","assets/use-touch-7ef5a55b.js","assets/index-0362a036.js","assets/index-14647d2a.js","assets/index-a8f5e5fa.js","assets/index-fb8599c9.js","assets/index-c9c363c8.js","assets/index-6d95c408.css","assets/index-fb5cf433.css"]),D={DemoButton:at,JybButton:ut,JybCard:lt,JybCell:_t,JybChecked:dt,JybDropdownMenu:mt,JybEmpty:ht,JybField:pt,JybFontScale:ft,JybFooterBar:vt,JybForm:yt,JybList:gt,JybModalBox:bt,JybNavBar:Et,JybTab:Tt,JybUploader:$t,UseCssVar:Lt,UseLinkage:wt},k={name:"jyb-ui",build:{css:{preprocessor:"sass",base:"style/custom.module.scss"},site:{publicPath:"/"}},site:{title:"jyb-ui",logo:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/WkXmjmZB9z5IKfGHMnzTE.png",description:"vue3版本UI",versions:[{label:"v2",link:"https://zjkj-ui.jybtech.cn/"}],nav:[{title:"基础组件",items:[{path:"jyb-button",title:"Button 按钮"},{path:"jyb-list",title:"List 列表"},{path:"jyb-nav-bar",title:"NavBar 导航栏"},{path:"jyb-cell",title:"Cell 单元文本"},{path:"jyb-modal-box",title:"ModalBox 弹框"},{path:"jyb-footer-bar",title:"FooterBar 底部导航"},{path:"jyb-card",title:"Card 卡片"},{path:"jyb-field",title:"Field 输入框"},{path:"jyb-form",title:"Form 表单"},{path:"jyb-tab",title:"Tab 选项"},{path:"jyb-font-scale",title:"FonstScale 字体"},{path:"jyb-empty",title:"Empty 无数据"},{path:"jyb-checked",title:"Checked 选中"},{path:"jyb-dropdown-menu",title:"DropdownMenu 下拉菜单"},{path:"jyb-uploader",title:"Uploader 图片上传"}]},{title:"组合式api",items:[{path:"use-css-var",title:"css变量"},{path:"use-linkage",title:"动态联动"}]}]}},kt={},Dt={viewBox:"0 0 1024 1024"},jt=p("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"},null,-1),Bt=p("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"},null,-1),Ot=[jt,Bt];function Rt(t,s){return u(),_("svg",Dt,Ot)}const At=g(kt,[["render",Rt]]);const xt={components:{ArrowRight:At},props:{lang:String,group:Object},data(){return{active:[]}},computed:{base(){return this.lang?`/${this.lang}`:""}}},Pt={class:"demo-home-nav"},It={class:"demo-home-nav__title"},Vt={class:"demo-home-nav__group"};function Ct(t,s,n,c,a,o){const m=b("arrow-right"),f=b("router-link");return u(),_("div",Pt,[p("div",It,E(n.group.title),1),p("div",Vt,[(u(!0),_(R,null,J(n.group.items,d=>(u(),w(f,{class:"demo-home-nav__block",key:d.path,to:`${o.base}/${d.path}`},{default:B(()=>[X(E(d.title)+" ",1),L(m,{class:"demo-home-nav__icon"})]),_:2},1032,["to"]))),128))])])}const Jt=g(xt,[["render",Ct]]);const Nt={components:{DemoHomeNav:Jt},computed:{lang(){const{lang:t}=this.$route.meta;return t},config(){const{locales:t}=k.site;return t?t[this.lang]:k.site},smallTitle(){return this.config.title.length>=8}}},Ft={class:"demo-home"},Mt=["src"],St={key:0,class:"demo-home__desc"};function Kt(t,s,n,c,a,o){const m=b("demo-home-nav");return u(),_("div",Ft,[p("h1",{class:C(["demo-home__title",{"demo-home__title--small":o.smallTitle}])},[p("img",{src:o.config.logo},null,8,Mt),p("span",null,E(o.config.title),1)],2),o.config.description?(u(),_("h2",St,E(o.config.description),1)):V("v-if",!0),(u(!0),_(R,null,J(o.config.nav,(f,d)=>(u(),w(m,{key:d,lang:o.lang,group:f},null,8,["lang","group"]))),128))])}const P=g(Nt,[["render",Kt]]),{locales:O,defaultLang:zt}=k.site;M(zt);function Ht(t){const s=t.path.split("/")[1];return Object.keys(O).indexOf(s)!==-1?s:K()}function Xt(){const t=[],s=Object.keys(D),n=O?Object.keys(O):[];return n.length?(t.push({name:"NotFound",path:"/:path(.*)+",redirect:c=>({name:Ht(c)})}),n.forEach(c=>{t.push({name:c,path:`/${c}`,component:P,meta:{lang:c}})})):(t.push({name:"NotFound",path:"/:path(.*)+",redirect:{name:"home"}}),t.push({name:"home",path:"/",component:P})),s.forEach(c=>{const a=I(c);n.length?n.forEach(o=>{t.push({name:`${o}/${a}`,path:`/${o}/${a}`,component:D[c],meta:{name:c,lang:o}})}):t.push({name:a,path:`/${a}`,component:D[c],meta:{name:c}})}),t}const T=U({history:Y(),routes:Xt(),scrollBehavior:(t,s,n)=>n||{x:0,y:0}});N(T.currentRoute,()=>{T.currentRoute.value.redirectedFrom||W(z)});S(T);window.vueRouter=T;const Ut={data(){return{path:"M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z"}},computed:{title(){const{name:t}=this.$route.meta||{};return t?t.replace(/-/g,""):""}},methods:{onBack(){history.length>1?history.back():this.$router.replace("/")}}},Yt={class:"demo-nav"},Wt={class:"demo-nav__title"},qt=["d"];function Gt(t,s,n,c,a,o){return q((u(),_("div",Yt,[p("div",Wt,E(o.title),1),(u(),_("svg",{class:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:s[0]||(s[0]=(...m)=>o.onBack&&o.onBack(...m))},[p("path",{fill:"#969799","fill-rule":"evenodd",d:a.path},null,8,qt)]))],512)),[[G,o.title]])}const Zt=g(Ut,[["render",Gt]]);const Qt={components:{DemoNav:Zt},setup(){const t=H();N(t,(s,n)=>{document.documentElement.classList.remove(`van-doc-theme-${n}`),document.documentElement.classList.add(`van-doc-theme-${s}`);const{darkModeClass:c,lightModeClass:a}=k.site;c&&document.documentElement.classList.toggle(c,s==="dark"),a&&document.documentElement.classList.toggle(a,s==="light")},{immediate:!0})}};function te(t,s,n,c,a,o){const m=b("demo-nav"),f=b("demo-section"),d=b("router-view");return u(),_(R,null,[L(m),L(d,null,{default:B(({Component:$})=>[L(f,null,{default:B(()=>[(u(),w(Q,null,[(u(),w(Z($)))],1024))]),_:2},1024)]),_:1})],64)}const ee=g(Qt,[["render",te]]);(function(){if(typeof window>"u")return;var t,s="ontouchstart"in window;document.createTouch||(document.createTouch=function(i,e,l,h,v,y,F){return new n(e,l,{pageX:h,pageY:v,screenX:y,screenY:F,clientX:h-window.pageXOffset,clientY:v-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var i=c(),e=0;e<arguments.length;e++)i[e]=arguments[e];return i.length=arguments.length,i}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(i){var e=this;do{if(e.matches(i))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var n=function(e,l,h,v,y){v=v||0,y=y||0,this.identifier=l,this.target=e,this.clientX=h.clientX+v,this.clientY=h.clientY+y,this.screenX=h.screenX+v,this.screenY=h.screenY+y,this.pageX=h.pageX+v,this.pageY=h.pageY+y};function c(){var i=[];return i.item=function(e){return this[e]||null},i.identifiedTouch=function(e){return this[e+1]||null},i}var a=!1;function o(i){return function(e){e.type==="mousedown"&&(a=!0),e.type==="mouseup"&&(a=!1),!(e.type==="mousemove"&&!a)&&((e.type==="mousedown"||!t||t&&!t.dispatchEvent)&&(t=e.target),t.closest("[data-no-touch-simulate]")==null&&m(i,e),e.type==="mouseup"&&(t=null))}}function m(i,e){var l=document.createEvent("Event");l.initEvent(i,!0,!0),l.altKey=e.altKey,l.ctrlKey=e.ctrlKey,l.metaKey=e.metaKey,l.shiftKey=e.shiftKey,l.touches=d(e),l.targetTouches=d(e),l.changedTouches=f(e),t.dispatchEvent(l)}function f(i){var e=c();return e.push(new n(t,1,i,0,0)),e}function d(i){return i.type==="mouseup"?c():f(i)}function $(){window.addEventListener("mousedown",o("touchstart"),!0),window.addEventListener("mousemove",o("touchmove"),!0),window.addEventListener("mouseup",o("touchend"),!0)}$.multiTouchOffset=75,s||new $})();window.app=tt(ee).use(T).component(A.name,A).component(x.name,x);setTimeout(()=>{window.app.mount("#app")},0);document.addEventListener("touchstart",()=>{},{passive:!0});