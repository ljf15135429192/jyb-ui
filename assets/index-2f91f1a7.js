import{u as ie}from"./use-id-7f4b502d.js";import{a as ee}from"./use-touch-7ef5a55b.js";import{u as ue}from"./useFontScale-afa8cc55.js";import{c as te,t as J,n as K,h as de,g as re,u as ce,j as me,X as pe,q as ve,s as fe,x as be,B as _e,a as ge,D as ye,d as q,l as Ve}from"./index-137ae4a8.js";import{A as le,y,C as $,e as t,o as D,a as j,d as x,F as we,b as ke,w as m,g as W,t as z,D as H,n as Ce,i as oe,h as xe,L as he,V as Oe,R as Pe,j as Se,v as Be,r as Te,f as X,B as c}from"./vue-libs-9b0981d5.js";import{H as $e}from"./use-route-8dafc2dc.js";import{P as De}from"./index-9fc963e1.js";import{J as je}from"./index-3becbacd.js";import{_ as M}from"./locales-fdfe9afb.js";import{J as Re}from"./index-524bc51a.js";import{_ as Ie}from"./index-2ac19e6b.js";/* empty css                                                              */import{C as Y}from"./index-52403669.js";import"./index-bffcfc4b.js";import"./index-ff210e3d.js";import"./useCssVar-9ccf4a46.js";import"./use-refs-83704085.js";import"./index-0362a036.js";import"./index-14647d2a.js";import"./index-1d7fc5ab.js";const[Ue,N]=te("dropdown-menu"),Ne={overlay:J,zIndex:K,duration:de(.2),direction:re("down"),activeColor:String,closeOnClickOutside:J,closeOnClickOverlay:J,swipeThreshold:K,isTab:Boolean,isRight:Boolean},ae=Symbol("JybDropdownMenu"),P=le({name:Ue,props:Ne,setup(e,{slots:s}){const r=ie(),u=y(),o=y(),n=y(0),{children:i,linkChildren:V}=ce(ae),v=me(u),{fontClass:k}=ue({name:"jyb-dropdown-scale"}),f=$(()=>i.some(p=>p.state.showWrapper)),a=$(()=>e.swipeThreshold&&i.length>+e.swipeThreshold),_=$(()=>{if(f.value&&_e(e.zIndex))return{zIndex:+e.zIndex+1}}),l=()=>{i.forEach(p=>{p.toggle(!1)})},h=()=>{e.closeOnClickOutside&&l()},S=()=>{if(o.value){const p=fe(o);e.direction==="down"?n.value=p.bottom:n.value=be.value-p.top}},L=()=>{f.value&&S()},A=p=>{i.forEach((C,O)=>{O===p?C.toggle():C.state.showPopup&&C.toggle(!1,{immediate:!0})})},R=(p,C)=>{const{showPopup:O}=p.state,{disabled:d,titleClass:b}=p;return t("div",{id:`${r}-${C}`,role:"button",tabindex:d?void 0:0,class:[N("item",{disabled:d,grow:a.value}),{[$e]:!d}],onClick:()=>{d||A(C)}},[t("span",{class:[N("title",{down:O===(e.direction==="down"),active:p.modelValue!==-1||!p.modelValue&&p.modelValue===0}),b],style:{color:O?e.activeColor:""}},[t("div",{class:"van-ellipsis"},[p.renderTitle()])])])},B=()=>(console.log("children :>> ",i),e.isRight&&i[0]?[i[0]].map(R):i.map(R));return ee({close:l}),V({id:r,props:e,offset:n,updateOffset:S}),pe(u,h),ve("scroll",L,{target:v,passive:!0}),console.log("slots.default :>> ",s.default),()=>{var p;return t("div",{ref:u,class:[N(),k.value,e.isTab&&"dropdown__tab",e.isRight&&"dropdown-right"]},[t("div",{ref:o,style:_.value,class:N("bar",{opened:f.value,scrollable:a.value})},[B()]),(p=s.default)==null?void 0:p.call(s)])}}}),Je=e=>{const s=y(e),r=y(e);return{formData:s,oldFormData:r,confirm:()=>{if(typeof s.value=="object"){const n=JSON.parse(JSON.stringify(s.value));for(const i in n)Object.hasOwnProperty.call(n,i)&&(r.value[i]=n[i])}else r.value=s.value},reset:()=>{if(typeof s.value=="object")for(const n in r.value)Object.hasOwnProperty.call(s,n)&&(s.value[n]=r.value[n]);else s.value=-1,r.value=-1}}};const ze={class:"linkage__box"},Le=["onClick"],Ae={__name:"linkageCard",props:{list:Array,active:[String,Number,Object],type:{type:String,default:"dropdown"},grid:[Number,String],checkedType:{type:String,default:"right--red"},isBtn:Boolean,activeList:[Array,Object,String,Number]},emits:["update:active","update:modelValue","click"],setup(e,{emit:s}){const r=e,u=y(r.type),o=y(r.checkedType),n=$(()=>r.list.value||r.list);console.log(r,"props"),r.isBtn&&(u.value="popup",o.value="");const i=s,V=(v,k)=>{console.log("点击触发",v,k),i("click",v),i("update:active",v),i("update:modelValue",v)};return(v,k)=>(D(),j("div",{class:"linkage",style:oe({"--gird":e.grid})},[x("div",{class:Ce("linkage__"+u.value)},[x("div",ze,[(D(!0),j(we,null,ke(n.value,f=>(D(),j("div",{class:"linkage__btn",onClick:a=>V(f)},[t(je,H({type:o.value,active:f.id||f.value,"active-list":e.activeList},{...v.$attrs}),{default:m(()=>[W(z(f.name||f.text),1)]),_:2},1040,["type","active","active-list"])],8,Le))),256))])],2)],4))}},Z=M(Ae,[["__scopeId","data-v-dfe47af0"]]);const Ee={name:"",components:{},mixins:[],props:{item:Object,domRef:Object,styleType:Object},data(){return{}},computed:{},watch:{},filter:{},created(){},mounted(){},methods:{reset(){this.$emit("btnReset")},confirm(){this.$emit("confirm",this.item)}}},Fe={class:"submit"},We={class:"submit__body"};function He(e,s,r,u,o,n){return D(),j("div",Fe,[x("div",We,[xe(e.$slots,"default",{},void 0,!0)]),x("div",{class:"submit__bottom",style:oe(r.styleType)},[x("div",{class:"submit__left",onClick:s[0]||(s[0]=(...i)=>n.reset&&n.reset(...i))},"重置"),x("div",{class:"submit__right",onClick:s[1]||(s[1]=(...i)=>n.confirm&&n.confirm(...i))},"确定")],4)])}const G=M(Ee,[["render",He],["__scopeId","data-v-7470d54e"]]);function F(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Pe(e)}const[bt,Q]=te("dropdown-item"),Me={title:String,options:ye(),disabled:Boolean,teleport:[String,Object],lazyRender:J,modelValue:q,titleClass:q,isBtn:Boolean},g=le({name:"JybDropdownItem",components:{linkageCard:Z,submitBtn:G},inheritAttrs:!1,props:Me,emits:["open","opened","close","closed","change","update:modelValue"],setup(e,{emit:s,slots:r,attrs:u}){const o=he({showPopup:!1,transition:!0,showWrapper:!1}),{parent:n,index:i}=ge(ae),{formData:V,oldFormData:v,confirm:k,reset:f}=Je(e.modelValue);if(console.log("parent :>> ",n),!n)return;const{title:a}=e,_=d=>()=>s(d),l=_("open"),h=_("close"),S=_("opened"),L=()=>{o.showWrapper=!1,s("closed")},A=d=>{e.teleport&&d.stopPropagation()},R=(d=!o.showPopup,b={})=>{d!==o.showPopup&&(o.showPopup=d,o.transition=!b.immediate,d&&(n.updateOffset(),o.showWrapper=!0,e.isBtn||(V.value=v.value)))},B=$(()=>e.options.find(b=>b.value===e.modelValue)),p=()=>{var b;const{isRight:d}=n.props;return d?" ":(b=B.value)!=null&&b.value?B.value.value===-1?a:B.value.text:a},C=d=>{console.log(d,"option");const b=e.isBtn?e.modelValue:V.value,I=e.isBtn?e.modelValue:V.value,U=w=>{e.isBtn?(console.log("option.value !== props.modelValue :>> ",w,e.modelValue),w.value!==e.modelValue&&(s("update:modelValue",w.value),s("change",w.value)),o.showPopup=!1):(console.log("object :>> ",w),V.value=w.value)},T=r.default?r.default({active:b,activeList:I,state:o,update:U}):t(Z,H({list:d,active:b,activeList:I,onClick:U},u,e),null);return e.isBtn?T:t(G,{onBtnReset:()=>{f(),console.log("oldFormData :>> ",v),s("update:modelValue",v.value),s("change",v.value),o.showPopup=!1},onConfirm:()=>{k(),s("update:modelValue",v.value),s("change",v.value),o.showPopup=!1}},F(T)?T:{default:()=>[T]})},O=()=>{let d;const{offset:b}=n,{zIndex:I,overlay:U,duration:T,direction:w,closeOnClickOverlay:ne}=n.props,E=Ve(I);return w==="down"?E.top=`${b.value}px`:E.bottom=`${b.value}px`,Se(t("div",H({style:E,class:Q([w]),onClick:A},u),[t(De,{show:o.showPopup,"onUpdate:show":se=>o.showPopup=se,role:"menu",class:Q("content"),overlay:U,position:w==="down"?"top":"bottom",duration:o.transition?T:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${n.id}-${i.value}`,closeOnClickOverlay:ne,onOpen:l,onClose:h,onOpened:S,onClosed:L},F(d=C(e.options))?d:{default:()=>[d]})]),[[Be,o.showWrapper]])};return ee({state:o,toggle:R,renderTitle:p,checkedData:B}),()=>{if(e.teleport){let d;return t(Oe,{to:e.teleport},F(d=O())?d:{default:()=>[d]})}return O()}}});const Ke={class:"box"},qe={class:"box-content"},Xe={__name:"index",setup(e){const s=y(0),r=y([{name:"dropdown-menu"},{name:"dropdown-item"}]),u=y(-1),o=y(-1),n=[{text:"全部",value:-1},{text:"新款商品",value:1},{text:"活动商品1",value:2},{text:"活动商品2",value:3},{text:"活动商品4",value:4},{text:"活动商品5",value:5}],i=[{text:"默认",value:-1},{text:"好评排序b",value:"b"},{text:"销量排序c",value:"c"},{text:"销量排序d",value:"d"},{text:"销量排序e",value:"e"},{text:"销量排序f",value:"f"}],V=y("全部"),v=f=>{f({text:"活动商品1",value:2})},k=f=>{f({text:"活动商品1",value:2})};return(f,a)=>{const _=Te("demo-block");return D(),j("div",Ke,[t(Ie,{"offset-top":"55px"}),X(` <Tabs v-model:active="active" sticky>\r
      <Tab v-for="index in 4" :title="'选项 ' + index">\r
        内容 {{ index }}\r
      </Tab>\r
    </Tabs> `),x("div",qe,[t(c(Re),{list:r.value,modelValue:s.value,"onUpdate:modelValue":a[13]||(a[13]=l=>s.value=l),sticky:"","offset-top":"145px"},{title:m(({item:l})=>[x("div",null,z(l.name),1)]),tab0:m(()=>[t(_,{title:"基础用法"},{default:m(()=>[t(c(P),null,{default:m(()=>[t(c(g),{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=l=>u.value=l),options:n,title:"全部"},null,8,["modelValue"]),t(c(g),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),options:i,title:"默认"},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{title:"tab风格"},{default:m(()=>[t(c(P),{"is-tab":""},{default:m(()=>[t(c(g),{modelValue:u.value,"onUpdate:modelValue":a[2]||(a[2]=l=>u.value=l),options:n,title:"全部"},null,8,["modelValue"]),t(c(g),{modelValue:o.value,"onUpdate:modelValue":a[3]||(a[3]=l=>o.value=l),options:i,title:"默认"},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{title:"箭头风格"},{default:m(()=>[t(c(P),{"is-right":""},{default:m(()=>[t(c(g),{modelValue:u.value,"onUpdate:modelValue":a[4]||(a[4]=l=>u.value=l),options:n,title:"全部"},null,8,["modelValue"])]),_:1})]),_:1})]),tab1:m(()=>[t(_,{title:"btn风格"},{default:m(()=>[t(c(P),null,{default:m(()=>[t(c(g),{"is-btn":"",modelValue:u.value,"onUpdate:modelValue":a[5]||(a[5]=l=>u.value=l),options:n,title:"全部"},null,8,["modelValue"]),t(c(g),{"is-btn":"",modelValue:o.value,"onUpdate:modelValue":a[6]||(a[6]=l=>o.value=l),options:i,title:"默认"},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{title:"btn风格-控制列数"},{default:m(()=>[t(c(P),null,{default:m(()=>[t(c(g),{"is-btn":"",modelValue:u.value,"onUpdate:modelValue":a[7]||(a[7]=l=>u.value=l),options:n,grid:"2",title:"全部"},null,8,["modelValue"]),t(c(g),{"is-btn":"",modelValue:o.value,"onUpdate:modelValue":a[8]||(a[8]=l=>o.value=l),options:i,grid:"4",title:"默认"},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{title:"自定义"},{default:m(()=>[t(c(P),null,{default:m(()=>[t(c(g),{modelValue:u.value,"onUpdate:modelValue":a[9]||(a[9]=l=>u.value=l),options:n,title:V.value},{default:m(({update:l,active:h})=>[t(c(Y),{title:"点击选择",onClick:S=>v(l)},{default:m(()=>[W(z(h===2?"选中":"未选中"),1)]),_:2},1032,["onClick"])]),_:1},8,["modelValue","title"]),t(c(g),{modelValue:o.value,"onUpdate:modelValue":a[10]||(a[10]=l=>o.value=l),options:i,title:"默认"},null,8,["modelValue"])]),_:1})]),_:1}),t(_,{title:"自定义-btn风格"},{default:m(()=>[t(c(P),null,{default:m(()=>[t(c(g),{modelValue:u.value,"onUpdate:modelValue":a[11]||(a[11]=l=>u.value=l),"is-btn":"",options:n,title:"全部"},{default:m(({update:l,active:h})=>[t(c(Y),{title:"点击选择",onClick:S=>k(l)},{default:m(()=>[W(z(h===2?"选中":"未选中"),1)]),_:2},1032,["onClick"])]),_:1},8,["modelValue"]),t(c(g),{modelValue:o.value,"onUpdate:modelValue":a[12]||(a[12]=l=>o.value=l),"is-btn":"",options:i,title:"默认"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1},8,["list","modelValue"])]),X(' <JybButton @click="click1">数据</JybButton> ')])}}},_t=M(Xe,[["__scopeId","data-v-7413426a"]]);export{_t as default};
