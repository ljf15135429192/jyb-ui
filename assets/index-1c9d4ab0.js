import{L as ee,y as v,a1 as M,A as T,a2 as O,u as ne,C as te,o as I,a as S,F as oe,b as ae,c as q,w as l,g as w,t as z,f as j,r as P,e as t,d as g,B as r}from"./vue-libs-9b0981d5.js";import{J as ie}from"./index-6ca86020.js";import{J as B}from"./index-a8f5e5fa.js";import{_ as G}from"./locales-ae98208f.js";import"./index-77469a0c.js";import"./index-ff210e3d.js";import"./index-137ae4a8.js";import"./useFontScale-afa8cc55.js";import"./useCssVar-9ccf4a46.js";import"./use-id-7f4b502d.js";import"./use-route-8dafc2dc.js";import"./use-refs-83704085.js";import"./use-touch-7ef5a55b.js";import"./index-0362a036.js";import"./index-14647d2a.js";import"./index-fb8599c9.js";import"./index-c9c363c8.js";/* empty css                                                              */const C=(b,L=[],h={})=>{console.log("list传入 :>> ",L);const a=ee([]),u=[],i=[],_=[],m=[],p=[],V=v([]),{levels:F=3,isInfinite:U=!1,maxLevels:A=99}=h,y=(e,o)=>{_[o](e),i[o]=e,a[o]=(e==null?void 0:e.id)||-1;const n=o+1;p[n]&&p[n](null,n),U&&!p[n]&&o<A-1&&(e!=null&&e.children)&&V.value.push(M(D(n)))},D=e=>T({setup(o,n){var c;return _[e]=n.attrs["onUpdate:modelValue"]||(s=>n.emit("update:modelValue",s)),p[e]=y,n.attrs.modelValue&&(i[e]=n.attrs.modelValue||null,a[e]=((c=i[e])==null?void 0:c.id)||-1),e===0?m[e]=J(v(L),e):m[e]=J(m[e-1],e),n.attrs.modelValue&&ne(()=>n.attrs.modelValue,(s,d)=>{console.log("监听 ",s,d),y(s,e)}),()=>O(b,{...n.attrs,list:e===0?v(L).value:m[e-1].value,activeList:a,"onUpdate:modelValue":n.attrs.modelValue?"":s=>y(s,e)})}}),J=(e,o)=>te(()=>{var c;return((c=e.value.find(s=>{if(s.id===a[o])return s.children}))==null?void 0:c.children)||[]}),R=(e,o=0)=>{const n=[e[0]],c=F-1;if(console.log(o<=c,n),o<=A-1&&o<=c)n[0].children||(n[0].children=[{}]);else return;n.map(s=>{const d=o;a[d]||(a[d]=-1),i[d]||(i[d]=null),u[d]||(u[d]=M(D(d))),_[d]||(_[d]=()=>null),s.children&&R(s.children,d+1)})};R(L),console.log("activeList :>> ",a),console.log("componentList :>> ",u),console.log("onLinkageChangeList :>> ",p);const $={reset:()=>{console.log("重置");for(let e=0;e<i.length;e++)i[e]=null,a[e]=-1},init:e=>{let o=L;for(let n=0;n<e.length;n++){const c=o.find(s=>e[n]===s.id);c&&(o=c.children||[],i[n]=c,a[n]=e[n])}console.log("list :>> ",e,i)},modelValueList:i,activeList:a,componentListRef:V};return U?(V.value=u,$.Linkage=T({setup(){return()=>V.value.map(e=>O(e))}})):Object.assign($,{...u.reduce((e,o,n)=>(e[`Linkage${n+1}`]=o,e),{})}),$},se=["onClick"],le=T({__name:"card",props:{list:Array,activeList:Array},emits:["update:modelValue"],setup(b,{emit:L}){const h=b;console.log("activeList :>> ",h.activeList);const a=L,u=i=>{console.log("activeList :>> ",h.activeList),a("update:modelValue",i)};return(i,_)=>(I(),S("div",null,[(I(!0),S(oe,null,ae(b.list,m=>{var p;return I(),S("div",{onClick:V=>u(m),class:"box"},[m.id?(I(),q(B,{key:0,color:(p=b.activeList)!=null&&p.includes(m==null?void 0:m.id)?"red":"black"},{default:l(()=>[w(z(m.name),1)]),_:2},1032,["color"])):j("v-if",!0)],8,se)}),256)),j(' <button @click="myClick">当前</button> ')]))}});const N=G(le,[["__scopeId","data-v-cface81a"]]);const ce={class:"box"},de={class:"box--btn"},re={class:"box"},me={class:"box"},ue={class:"box--btn"},pe={class:"box"},ge={class:"box--btn"},Le={class:"box"},_e={class:"box"},ke={__name:"index",setup(b){const L=v([{name:"联动"},{name:"无限联动"}]),h=v(0),a=[{no:"110000",simpleName:"北京",name:"北京",id:11e4},{no:"120000",simpleName:"山西",name:"山西",id:12e4,children:[{no:"120100",simpleName:"山西市",name:"山西市",id:120100,children:[{no:"120101",simpleName:"山西和平区",name:"山西和平区",id:120101},{no:"120102",simpleName:"山西河东区",name:"山西河东区",id:120102},{no:"120103",simpleName:"山西河西区",name:"山西河西区",id:120103}]}]},{no:"1200001",simpleName:"天津",name:"天津",id:1200001,children:[{no:"120100111",simpleName:"天津1",name:"天津1",id:1201001111,children:[{no:"120101",simpleName:"天津2",name:"天津2",id:12010112312,children:[{no:"120100111111",simpleName:"天津3",name:"天津3",id:120100111111,children:[{no:"12010122222",simpleName:"天津4",name:"天津4",id:12010122222}]}]}]}]}],u=v({}),i=v({}),_=v({}),{Linkage1:m,Linkage2:p,Linkage3:V,reset:F,modelValueList:U,activeList:A,componentListRef:y}=C(N,a),D=()=>{F()},J=()=>{console.log("modelValueList :>> ",U),console.log("activeList :>> ",A),console.log("componentListRef :>> ",y)},{Linkage1:R,Linkage2:E,Linkage3:H,Linkage4:$}=C(N,a,{levels:2}),{Linkage1:e,Linkage2:o,Linkage3:n}=C(N,a),{Linkage1:c,Linkage2:s,Linkage3:d,init:K}=C(N,a),Q=()=>{console.log(2222),u.value={name:"山西",id:12e4},i.value={name:"山西市",id:120100},_.value={name:"山西河西区",id:120103}},W=()=>{K([12e4,120100,120101])},{Linkage:X,init:fe}=C(N,a,{isInfinite:!0}),{Linkage:Y}=C(N,a,{isInfinite:!0,maxLevels:3});return(ve,f)=>{const x=P("demo-block"),Z=P("demo-section");return I(),q(Z,null,{default:l(()=>[t(r(ie),{list:L.value,modelValue:h.value,"onUpdate:modelValue":f[3]||(f[3]=k=>h.value=k)},{title:l(({item:k})=>[g("div",null,z(k.name),1)]),tab0:l(()=>[t(x,{title:"基础用法"},{default:l(()=>[g("div",ce,[t(r(m)),t(r(p)),t(r(V))]),g("div",de,[t(B,{onClick:D},{default:l(()=>[w("重置")]),_:1}),t(B,{onClick:J},{default:l(()=>[w("获取结果")]),_:1})])]),_:1}),t(x,{title:"指定层级"},{default:l(()=>[g("div",re,[t(r(R)),t(r(E)),j(` <Linkage33/>\r
            <Linkage44/> `)])]),_:1}),t(x,{title:"model参数初始化"},{default:l(()=>[g("div",me,[t(r(e),{modelValue:u.value,"onUpdate:modelValue":f[0]||(f[0]=k=>u.value=k)},null,8,["modelValue"]),t(r(o),{modelValue:i.value,"onUpdate:modelValue":f[1]||(f[1]=k=>i.value=k)},null,8,["modelValue"]),t(r(n),{modelValue:_.value,"onUpdate:modelValue":f[2]||(f[2]=k=>_.value=k)},null,8,["modelValue"])]),g("div",ue,[t(B,{onClick:Q},{default:l(()=>[w("点击初始化")]),_:1})]),t(x,{title:"init参数初始化"},{default:l(()=>[g("div",pe,[t(r(c)),t(r(s)),t(r(d))]),g("div",ge,[t(B,{onClick:W},{default:l(()=>[w("点击初始化")]),_:1})])]),_:1})]),_:1})]),tab1:l(()=>[t(x,{title:"无限层级"},{default:l(()=>[g("div",Le,[t(r(X))])]),_:1}),t(x,{title:"无限层级-最大层级"},{default:l(()=>[g("div",_e,[t(r(Y))])]),_:1})]),tab2:l(()=>[]),_:1},8,["list","modelValue"])]),_:1})}}},Te=G(ke,[["__scopeId","data-v-8fc28c21"]]);export{Te as default};
