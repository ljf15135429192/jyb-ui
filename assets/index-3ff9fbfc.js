import{u as de,J as fe}from"./index-524bc51a.js";import{A as F,y as i,C as z,u as V,a0 as ve,N as ee,e as a,q as te,L as ge,_ as he,R as me,g as O,X as ye,r as Y,o as N,c as j,w as b,B as D,d as W,t as _e}from"./vue-libs-9b0981d5.js";import{j as J}from"./index-bffcfc4b.js";import{u as xe}from"./useFontScale-afa8cc55.js";import{c as ae,h as H,g as Te,t as be,j as le,q as ne,s as Z,r as ke,w as oe,n as Se,z as Ce,y as Be}from"./index-137ae4a8.js";import{a as Le,u as De}from"./use-touch-7ef5a55b.js";import{L as ie}from"./index-c9c363c8.js";import{C as Ae}from"./index-2aa06360.js";import{C as Pe}from"./index-40504885.js";import{_ as pe}from"./index-2ac19e6b.js";import{_ as qe}from"./locales-fdfe9afb.js";import{C as E}from"./index-52403669.js";import{B as K}from"./index-fb8599c9.js";import{s as U}from"./function-call-1ec1bbbb.js";import"./useCssVar-9ccf4a46.js";import"./use-id-7f4b502d.js";import"./use-route-8dafc2dc.js";import"./use-refs-83704085.js";import"./index-0362a036.js";import"./index-14647d2a.js";import"./index-ff210e3d.js";import"./index-1d7fc5ab.js";import"./index-9fc963e1.js";const[we,q,Oe]=ae("list"),Ve={error:Boolean,offset:H(300),loading:Boolean,disabled:Boolean,finished:Boolean,scroller:Object,errorText:String,direction:Te("down"),loadingText:String,finishedText:String,immediateCheck:be};var Ne=F({name:we,props:Ve,emits:["load","update:error","update:loading"],setup(e,{emit:_,slots:u}){const m=i(e.loading),B=i(),k=i(),S=de(),s=le(B),L=z(()=>e.scroller||s.value),v=()=>{te(()=>{if(m.value||e.finished||e.disabled||e.error||(S==null?void 0:S.value)===!1)return;const{direction:r}=e,C=+e.offset,T=Z(L);if(!T.height||ke(B))return;let o=!1;const f=Z(k);r==="up"?o=T.top-f.top<=C:o=f.bottom-T.bottom<=C,o&&(m.value=!0,_("update:loading",!0),_("load"))})},h=()=>{if(e.finished){const r=u.finished?u.finished():e.finishedText;if(r)return a("div",{class:q("finished-text")},[r])}},P=()=>{_("update:error",!1),v()},x=()=>{if(e.error){const r=u.error?u.error():e.errorText;if(r)return a("div",{role:"button",class:q("error-text"),tabindex:0,onClick:P},[r])}},A=()=>{if(m.value&&!e.finished&&!e.disabled)return a("div",{class:q("loading")},[u.loading?u.loading():a(ie,{class:q("loading-icon")},{default:()=>[e.loadingText||Oe("loading")]})])};return V(()=>[e.loading,e.finished,e.error],v),S&&V(S,r=>{r&&v()}),ve(()=>{m.value=e.loading}),ee(()=>{e.immediateCheck&&v()}),Le({check:v}),ne("scroll",v,{target:L,passive:!0}),()=>{var r;const C=(r=u.default)==null?void 0:r.call(u),T=a("div",{ref:k,class:q("placeholder")},null);return a("div",{ref:B,role:"feed",class:q(),"aria-busy":m.value},[e.direction==="down"?C:T,A(),h(),x(),e.direction==="up"?C:T])}}});const je=oe(Ne),[Ee,w,Re]=ae("pull-refresh"),se=50,He=["pulling","loosing","success"],$e={disabled:Boolean,modelValue:Boolean,headHeight:H(se),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:Se,successDuration:H(500),animationDuration:H(300)};var Je=F({name:Ee,props:$e,emits:["change","refresh","update:modelValue"],setup(e,{emit:_,slots:u}){let m;const B=i(),k=i(),S=le(B),s=ge({status:"normal",distance:0,duration:0}),L=De(),v=()=>{if(e.headHeight!==se)return{height:`${e.headHeight}px`}},h=()=>s.status!=="loading"&&s.status!=="success"&&!e.disabled,P=t=>{const l=+(e.pullDistance||e.headHeight);return t>l&&(t<l*2?t=l+(t-l)/2:t=l*1.5+(t-l*2)/4),Math.round(t)},x=(t,l)=>{const p=+(e.pullDistance||e.headHeight);s.distance=t,l?s.status="loading":t===0?s.status="normal":t<p?s.status="pulling":s.status="loosing",_("change",{status:s.status,distance:t})},A=()=>{const{status:t}=s;return t==="normal"?"":e[`${t}Text`]||Re(t)},r=()=>{const{status:t,distance:l}=s;if(u[t])return u[t]({distance:l});const p=[];return He.includes(t)&&p.push(a("div",{class:w("text")},[A()])),t==="loading"&&p.push(a(ie,{class:w("loading")},{default:A})),p},C=()=>{s.status="success",setTimeout(()=>{x(0)},+e.successDuration)},T=t=>{m=Be(S.value)===0,m&&(s.duration=0,L.start(t))},o=t=>{h()&&T(t)},f=t=>{if(h()){m||T(t);const{deltaY:l}=L;L.move(t),m&&l.value>=0&&L.isVertical()&&(Ce(t),x(P(l.value)))}},y=()=>{m&&L.deltaY.value&&h()&&(s.duration=+e.animationDuration,s.status==="loosing"?(x(+e.headHeight,!0),_("update:modelValue",!0),te(()=>_("refresh"))):x(0))};return V(()=>e.modelValue,t=>{s.duration=+e.animationDuration,t?x(+e.headHeight,!0):u.success||e.successText?C():x(0,!1)}),ne("touchmove",f,{target:k}),()=>{var t;const l={transitionDuration:`${s.duration}ms`,transform:s.distance?`translate3d(0,${s.distance}px, 0)`:""};return a("div",{ref:B,class:w()},[a("div",{ref:k,class:w("track"),style:l,onTouchstartPassive:o,onTouchend:y,onTouchcancel:y},[a("div",{class:w("head"),style:v()},[r()]),(t=u.default)==null?void 0:t.call(u)])])}}});const Ke=oe(Je);function I(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!me(e)}const R=F({name:"JybList",components:{jybEmpty:J},props:{isCheckBox:{type:Boolean,default:!1},url:Function,checkedBefore:Function,query:Object,checkBoxStyle:Object,listStyle:Object,listClass:String,refreshStyle:{type:Object,default:()=>({"min-height":"80vh"})},queryConfig:{type:Object,default:()=>{}},isRefresh:{type:Boolean,default:!0},isScroll:{type:Boolean,default:!0},isAuto:{type:Boolean,default:!0},isClearList:{type:Boolean,default:!1}},emits:["onChecked","update:isList","getAfter"],setup(e,{emit:_,slots:u,attrs:m}){const{fontClass:B}=xe({name:"jyb-list-scale"}),k=i(),S=i(),s=i(),L=i(),v=i(),h=i([]),P=i(!0),x=i(!1),A=i(!1),r=i([]),C=i(null),T=i("加载中..."),o=i(!1),f=i(0),y=z(()=>{e.isAuto&&e.isRefresh}),t=z(()=>({query:e.query,isAuto:e.isAuto,url:e.url}));function l(){console.log("加载更多"),console.log(JSON.stringify(v.value)),v.value[k.value]++,T.value="加载中...",M(!0)}function p(){var n,c,g,d;k.value=((n=e.queryConfig)==null?void 0:n.pageKey)||"pageSize",S.value=((c=e.queryConfig)==null?void 0:c.dataKey)||"records",s.value=((g=e.queryConfig)==null?void 0:g.totalKey)||"total",L.value=((d=e.queryConfig)==null?void 0:d.limitKey)||"limit",v.value={[L.value]:10},v.value[k.value]=0}function ue(n){var c;e.isAuto&&(((c=C==null?void 0:C.value)==null?void 0:c.scrollTop)>0&&(C.value.scrollTop=0),e.isClearList&&(h.value=[]),G(n))}function M(n){if(!e.url)return;const c={...v.value,...e.query};e.url(c).then(g=>{console.log(g,"组件列表");let d=g.hasOwnProperty("payload")?g.data:g.data.data||g.data.result;Array.isArray(d)&&(d[S.value]=JSON.parse(JSON.stringify(g.data))),f.value===0&&(d[S.value].length===0?(o.value=!0,_("update:isList",!1)):(_("update:isList",!0),o.value=!1),f.value++),A.value&&(A.value=!1,h.value=[]),n?h.value=h.value.concat(d[S.value]):h.value=d[S.value],h.value.length>=d[s.value]?x.value=!0:x.value=!1,P.value=!1,console.log("newData： ",d),_("getAfter",h.value,d)}).catch(g=>{console.log(g,"错误"),v.value[k.value]===1&&(h.value=[],o.value=!0)})}function G(n){T.value=n||" ",console.log("清空列表"),x.value=!1,v.value!==null&&k.value!==null&&(v.value[k.value]=1),P.value=!0,r.value=[],f.value=0,M()}const $=i([]);function Q(n,c){var d;let g=r.value.find(ce=>ce==c);e.checkedBefore&&!g&&e.checkedBefore(c,r.value)===!1||((d=$.value[n])==null||d.toggle(),setTimeout(()=>{_("onChecked",r.value)},0))}he(()=>{$.value=[]});function re(){if(e.isCheckBox){let n;return a(Pe,{modelValue:r.value,"onUpdate:modelValue":c=>r.value=c},I(n=h.value.map((c,g)=>a("div",{class:["list__box",B.value],onClick:ye(d=>{d.stopPropagation(),d.preventDefault(),Q(g,c)},["capture"])},[a("div",{class:"list__checkbox",style:e.checkBoxStyle},[a(Ae,{onClick:d=>{d.stopPropagation(),d.preventDefault(),Q(g,c)},name:c,ref:d=>$.value[g]=d},null)]),a("div",null,[u.default&&u.default({item:c})])])))?n:{default:()=>[n]})}return h.value.map((n,c)=>a("div",null,[u.default&&u.default({item:n})]))}function X(){if(o.value||!e.url){if(u.noLength){let n;return a(J,null,I(n=u.noLength())?n:{default:()=>[n]})}return a(J,null,{default:()=>[O("暂无数据")]})}return a(je,{loading:P.value,"onUpdate:loading":n=>P.value=n,finished:x.value,loadingText:T.value,finishedText:"没有更多了",onLoad:l},{default:()=>[a("div",{class:(e.listClass?e.listClass:"list__page")+" list__base",style:e.listStyle},[re()])]})}return V(()=>t.value,(n,c)=>{p();let g=n!=null&&n.isAuto?"加载中...":"";ue(g)},{deep:!0}),V(()=>e.queryConfig,(n,c)=>{p()},{immediate:!0}),ee(()=>{e.isAuto&&l()}),()=>{let n;return a("div",{class:e.isScroll?"list":""},[a("div",{class:e.isScroll?"list__scroll":"",ref:"vanListRef"},[y&&e.url?a(Ke,{modelValue:A.value,"onUpdate:modelValue":c=>A.value=c,onRefresh:G,style:e.refreshStyle},I(n=X())?n:{default:()=>[n]}):X()])])}}});const Ue={style:{width:"300px"}},Ie={__name:"index",setup(e){const _=i(0),u=i({id:1}),m=i(0),B=i(!0),k=i([{name:"基础用法"},{name:"自定义请求"},{name:"无数据"},{name:"多选"}]),S=i("请求中");function s(o,f){}function L(){console.log(B.value),B.value=!B.value}function v(o){U(JSON.stringify(o))}function h(){u.value={id:2}}function P(o,f){}function x(){return new Promise(o=>{setTimeout(()=>{let f=[];for(let y=0;y<10;y++)f.push(y);o({data:f,payload:""})},1e3)})}function A(){return new Promise(o=>{setTimeout(()=>{o({data:{data:{records:[]}}})},3e3)})}function r(){return new Promise(o=>{setTimeout(()=>{let f=[];for(let y=0;y<10;y++)m.value++,f.push(m.value);o({data:{data:{records:f}}})},1e3)})}function C(o){return console.log(o,"请求数据"),U(`当前请求数据${JSON.stringify(o)}`),new Promise(f=>{setTimeout(()=>{let y=[];for(let t=0;t<10;t++)m.value++,y.push(m.value);f({data:{data:{records:y}}})},1e3)})}function T(o){console.log(o,"选中项"),U(`message: 选中项${JSON.stringify(o)}`)}return(o,f)=>{const y=Y("demo-block"),t=Y("demo-section");return N(),j(t,null,{default:b(()=>[a(pe),a(y,null,{default:b(()=>[a(D(fe),{list:k.value,modelValue:_.value,"onUpdate:modelValue":f[0]||(f[0]=l=>_.value=l)},{title:b(({item:l})=>[W("div",null,_e(l.name),1)]),tab0:b(()=>[a(D(R),{url:x,onGetAfter:s},{default:b(({item:l})=>[(N(),j(D(E),{key:l,title:l},null,8,["title"]))]),_:1})]),tab1:b(()=>[a(D(K),{type:"primary",size:"small",onClick:h},{default:b(()=>[O("更改query")]),_:1}),a(D(K),{type:"primary",size:"small",onClick:L,style:{margin:"10px"}},{default:b(()=>[O("是否自动请求")]),_:1}),a(D(R),{url:C,query:u.value,isAuto:B.value},{default:b(({item:l})=>[(N(),j(D(E),{key:l,title:l},null,8,["title"]))]),_:1},8,["query","isAuto"])]),tab2:b(()=>[a(D(K),{type:"primary",size:"small",onClick:v},{default:b(()=>[O("首次是否有数据")]),_:1}),a(D(R),{url:A,isList:S.value},{default:b(({item:l})=>[(N(),j(D(E),{key:l,title:l},null,8,["title"]))]),noLength:b(()=>[O(" 数据跑丢了 ")]),_:1},8,["isList"])]),tab3:b(()=>[a(D(R),{isCheckBox:"",onOnChecked:T,url:r,checkedBefore:P},{default:b(({item:l})=>[W("div",Ue,[a(D(E),{center:"",title:"单元格"+l,value:"内容",label:"描述信息"},null,8,["title"])])]),_:1})]),_:1},8,["list","modelValue"])]),_:1})]),_:1})}}},gt=qe(Ie,[["__scopeId","data-v-123deb66"]]);export{gt as default};
