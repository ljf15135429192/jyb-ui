import{J as ze,U as Ee}from"./index-1932c615.js";import{c as Q,b as ne,n as L,d as ue,f as K,w as oe,g as ve,h as q,t as H,S as Ne,q as ke,z as J,I as ge,s as ae,E as be,a0 as Ie,a1 as Pe,A as Te,C as Re,P as he,B as Ve,Q as Ae,u as _e}from"./index-137ae4a8.js";import{u as Be,c as Ue,a as Fe}from"./use-touch-7ef5a55b.js";import{A as X,e as o,y as N,C as $,u as se,j as re,v as de,D as ye,q as Me,r as Se,o as Le,c as $e,w as k,f as ce,B as g,g as j,d as qe}from"./vue-libs-9b0981d5.js";import{H as we,L as He,F as De}from"./use-route-8dafc2dc.js";import{s as Ge}from"./function-call-1ec1bbbb.js";import{a as R}from"./index-62c4b0e6.js";import{J as Ce}from"./index-a8f5e5fa.js";import{L as je}from"./index-c9c363c8.js";import{C as Je}from"./index-40504885.js";import{u as Xe}from"./use-refs-83704085.js";import{C as me}from"./index-2aa06360.js";import{R as Ye,a as xe}from"./index-1d7fc5ab.js";import"./useArray-7b7e81ea.js";import"./index-5a51eca5.js";import"./index-14647d2a.js";import"./index-9fc963e1.js";import"./index-ff210e3d.js";import"./useFontScale-afa8cc55.js";import"./index-b73281c4.js";import"./index-52403669.js";import"./use-id-7f4b502d.js";import"./index-d9be5e18.js";import"./index-fb8599c9.js";/* empty css                                                              */import"./locales-ae98208f.js";const[Oe,fe]=Q("switch"),We={size:L,loading:Boolean,disabled:Boolean,modelValue:ue,activeColor:String,inactiveColor:String,activeValue:{type:ue,default:!0},inactiveValue:{type:ue,default:!1}};var Ke=X({name:Oe,props:We,emits:["change","update:modelValue"],setup(e,{emit:n,slots:f}){const h=()=>e.modelValue===e.activeValue,V=()=>{if(!e.disabled&&!e.loading){const c=h()?e.inactiveValue:e.activeValue;n("update:modelValue",c),n("change",c)}},S=()=>{if(e.loading){const c=h()?e.activeColor:e.inactiveColor;return o(je,{class:fe("loading"),color:c},null)}if(f.node)return f.node()};return ne(()=>e.modelValue),()=>{var c;const{size:I,loading:x,disabled:b,activeColor:P,inactiveColor:T}=e,w=h(),A={fontSize:K(I),backgroundColor:w?P:T};return o("div",{role:"switch",class:fe({on:w,loading:x,disabled:b}),style:A,tabindex:b?void 0:0,"aria-checked":w,onClick:V},[o("div",{class:fe("node")},[S()]),(c=f.background)==null?void 0:c.call(f)])}}});const Qe=oe(Ke),[Ze,ee]=Q("rate");function pe(e,n,f,h){return e>=n?{status:"full",value:1}:e+.5>=n&&f&&!h?{status:"half",value:.5}:e+1>=n&&f&&h?{status:"half",value:Math.round((e-n+1)*1e10)/1e10}:{status:"void",value:0}}const et={size:L,icon:ve("star"),color:String,count:q(5),gutter:L,clearable:Boolean,readonly:Boolean,disabled:Boolean,voidIcon:ve("star-o"),allowHalf:Boolean,voidColor:String,touchable:H,iconPrefix:String,modelValue:Ne(0),disabledColor:String};var tt=X({name:Ze,props:et,emits:["change","update:modelValue"],setup(e,{emit:n}){const f=Be(),[h,V]=Xe(),S=N(),c=$(()=>e.readonly||e.disabled),I=$(()=>c.value||!e.touchable),x=$(()=>Array(+e.count).fill("").map((r,u)=>pe(e.modelValue,u+1,e.allowHalf,e.readonly)));let b,P,T=Number.MAX_SAFE_INTEGER,w=Number.MIN_SAFE_INTEGER;const A=()=>{P=ae(S);const r=h.value.map(ae);b=[],r.forEach((u,v)=>{T=Math.min(u.top,T),w=Math.max(u.top,w),e.allowHalf?b.push({score:v+.5,left:u.left,top:u.top,height:u.height},{score:v+1,left:u.left+u.width/2,top:u.top,height:u.height}):b.push({score:v+1,left:u.left,top:u.top,height:u.height})})},_=(r,u)=>{for(let v=b.length-1;v>0;v--)if(u>=P.top&&u<=P.bottom){if(r>b[v].left&&u>=b[v].top&&u<=b[v].top+b[v].height)return b[v].score}else{const F=u<P.top?T:w;if(r>b[v].left&&b[v].top===F)return b[v].score}return e.allowHalf?.5:1},s=r=>{c.value||r===e.modelValue||(n("update:modelValue",r),n("change",r))},i=r=>{I.value||(f.start(r),A())},m=r=>{if(!I.value&&(f.move(r),f.isHorizontal()&&!f.isTap.value)){const{clientX:u,clientY:v}=r.touches[0];J(r),s(_(u,v))}},l=(r,u)=>{const{icon:v,size:F,color:M,count:a,gutter:C,voidIcon:z,disabled:t,voidColor:d,allowHalf:y,iconPrefix:B,disabledColor:E}=e,U=u+1,Y=r.status==="full",D=r.status==="void",G=y&&r.value>0&&r.value<1;let O;C&&U!==+a&&(O={paddingRight:K(C)});const Z=p=>{A();let ie=y?_(p.clientX,p.clientY):U;e.clearable&&f.isTap.value&&ie===e.modelValue&&(ie=0),s(ie)};return o("div",{key:u,ref:V(u),role:"radio",style:O,class:ee("item"),tabindex:t?void 0:0,"aria-setsize":a,"aria-posinset":U,"aria-checked":!D,onClick:Z},[o(ge,{size:F,name:Y?v:z,class:ee("icon",{disabled:t,full:Y}),color:t?E:Y?M:d,classPrefix:B},null),G&&o(ge,{size:F,style:{width:r.value+"em"},name:D?z:v,class:ee("icon",["half",{disabled:t,full:!D}]),color:t?E:D?d:M,classPrefix:B},null)])};return ne(()=>e.modelValue),ke("touchmove",m,{target:S}),()=>o("div",{ref:S,role:"radiogroup",class:ee({readonly:e.readonly,disabled:e.disabled}),tabindex:e.disabled?void 0:0,"aria-disabled":e.disabled,"aria-readonly":e.readonly,onTouchstartPassive:i},[x.value.map(l)])}});const lt=oe(tt),[at,W]=Q("slider"),nt={min:q(0),max:q(100),step:q(1),range:Boolean,reverse:Boolean,disabled:Boolean,readonly:Boolean,vertical:Boolean,barHeight:L,buttonSize:L,activeColor:String,inactiveColor:String,modelValue:{type:[Number,Array],default:0}};var ot=X({name:at,props:nt,emits:["change","dragEnd","dragStart","update:modelValue"],setup(e,{emit:n,slots:f}){let h,V,S;const c=N(),I=[N(),N()],x=N(),b=Be(),P=$(()=>Number(e.max)-Number(e.min)),T=$(()=>{const t=e.vertical?"width":"height";return{background:e.inactiveColor,[t]:K(e.barHeight)}}),w=t=>e.range&&Array.isArray(t),A=()=>{const{modelValue:t,min:d}=e;return w(t)?`${(t[1]-t[0])*100/P.value}%`:`${(t-Number(d))*100/P.value}%`},_=()=>{const{modelValue:t,min:d}=e;return w(t)?`${(t[0]-Number(d))*100/P.value}%`:"0%"},s=$(()=>{const d={[e.vertical?"height":"width"]:A(),background:e.activeColor};x.value&&(d.transition="none");const y=()=>e.vertical?e.reverse?"bottom":"top":e.reverse?"right":"left";return d[y()]=_(),d}),i=t=>{const d=+e.min,y=+e.max,B=+e.step;t=Re(t,d,y);const E=Math.round((t-d)/B)*B;return Pe(d,E)},m=()=>{const t=e.modelValue;w(t)?S=t.map(i):S=i(t)},l=t=>{var d,y;const B=(d=t[0])!=null?d:Number(e.min),E=(y=t[1])!=null?y:Number(e.max);return B>E?[E,B]:[B,E]},r=(t,d)=>{w(t)?t=l(t).map(i):t=i(t),be(t,e.modelValue)||n("update:modelValue",t),d&&!be(t,S)&&n("change",t)},u=t=>{if(t.stopPropagation(),e.disabled||e.readonly)return;m();const{min:d,reverse:y,vertical:B,modelValue:E}=e,U=ae(c),Y=()=>B?y?U.bottom-t.clientY:t.clientY-U.top:y?U.right-t.clientX:t.clientX-U.left,D=B?U.height:U.width,G=Number(d)+Y()/D*P.value;if(w(E)){const[O,Z]=E,p=(O+Z)/2;G<=p?r([G,Z],!0):r([O,G],!0)}else r(G,!0)},v=t=>{e.disabled||e.readonly||(b.start(t),V=e.modelValue,m(),x.value="start")},F=t=>{if(e.disabled||e.readonly)return;x.value==="start"&&n("dragStart",t),J(t,!0),b.move(t),x.value="dragging";const d=ae(c),y=e.vertical?b.deltaY.value:b.deltaX.value,B=e.vertical?d.height:d.width;let E=y/B*P.value;if(e.reverse&&(E=-E),w(S)){const U=e.reverse?1-h:h;V[U]=S[U]+E}else V=S+E;r(V)},M=t=>{e.disabled||e.readonly||(x.value==="dragging"&&(r(V,!0),n("dragEnd",t)),x.value="")},a=t=>typeof t=="number"?W("button-wrapper",["left","right"][t]):W("button-wrapper",e.reverse?"left":"right"),C=(t,d)=>{const y=x.value==="dragging";if(typeof d=="number"){const B=f[d===0?"left-button":"right-button"];let E;if(y&&Array.isArray(V)&&(E=V[0]>V[1]?h^1:h),B)return B({value:t,dragging:y,dragIndex:E})}return f.button?f.button({value:t,dragging:y}):o("div",{class:W("button"),style:Te(e.buttonSize)},null)},z=t=>{const d=typeof t=="number"?e.modelValue[t]:e.modelValue;return o("div",{ref:I[t??0],role:"slider",class:a(t),tabindex:e.disabled?void 0:0,"aria-valuemin":e.min,"aria-valuenow":d,"aria-valuemax":e.max,"aria-disabled":e.disabled||void 0,"aria-readonly":e.readonly||void 0,"aria-orientation":e.vertical?"vertical":"horizontal",onTouchstartPassive:y=>{typeof t=="number"&&(h=t),v(y)},onTouchend:M,onTouchcancel:M,onClick:Ie},[C(d,t)])};return r(e.modelValue),ne(()=>e.modelValue),I.forEach(t=>{ke("touchmove",F,{target:t})}),()=>o("div",{ref:c,style:T.value,class:W({vertical:e.vertical,disabled:e.disabled}),onClick:u},[o("div",{class:W("bar"),style:s.value},[e.range?[z(0),z(1)]:z()])])}});const it=oe(ot),[ut,te]=Q("stepper"),st=200,le=(e,n)=>String(e)===String(n),rt={min:q(1),max:q(1/0),name:q(""),step:q(1),theme:String,integer:Boolean,disabled:Boolean,showPlus:H,showMinus:H,showInput:H,longPress:H,autoFixed:H,allowEmpty:Boolean,modelValue:L,inputWidth:L,buttonSize:L,placeholder:String,disablePlus:Boolean,disableMinus:Boolean,disableInput:Boolean,beforeChange:Function,defaultValue:q(1),decimalLength:L};var dt=X({name:ut,props:rt,emits:["plus","blur","minus","focus","change","overlimit","update:modelValue"],setup(e,{emit:n}){const f=(a,C=!0)=>{const{min:z,max:t,allowEmpty:d,decimalLength:y}=e;return d&&a===""||(a=he(String(a),!e.integer),a=a===""?0:+a,a=Number.isNaN(a)?+z:a,a=C?Math.max(Math.min(+t,a),+z):a,Ve(y)&&(a=a.toFixed(+y))),a},h=()=>{var a;const C=(a=e.modelValue)!=null?a:e.defaultValue,z=f(C);return le(z,e.modelValue)||n("update:modelValue",z),z};let V;const S=N(),c=N(h()),I=$(()=>e.disabled||e.disableMinus||+c.value<=+e.min),x=$(()=>e.disabled||e.disablePlus||+c.value>=+e.max),b=$(()=>({width:K(e.inputWidth),height:K(e.buttonSize)})),P=$(()=>Te(e.buttonSize)),T=()=>{const a=f(c.value);le(a,c.value)||(c.value=a)},w=a=>{e.beforeChange?Ue(e.beforeChange,{args:[a],done(){c.value=a}}):c.value=a},A=()=>{if(V==="plus"&&x.value||V==="minus"&&I.value){n("overlimit",V);return}const a=V==="minus"?-e.step:+e.step,C=f(Pe(+c.value,a));w(C),n(V)},_=a=>{const C=a.target,{value:z}=C,{decimalLength:t}=e;let d=he(String(z),!e.integer);if(Ve(t)&&d.includes(".")){const B=d.split(".");d=`${B[0]}.${B[1].slice(0,+t)}`}e.beforeChange?C.value=String(c.value):le(z,d)||(C.value=d);const y=d===String(+d);w(y?+d:d)},s=a=>{var C;e.disableInput?(C=S.value)==null||C.blur():n("focus",a)},i=a=>{const C=a.target,z=f(C.value,e.autoFixed);C.value=String(z),c.value=z,Me(()=>{n("blur",a),Ae()})};let m,l;const r=()=>{l=setTimeout(()=>{A(),r()},st)},u=()=>{e.longPress&&(m=!1,clearTimeout(l),l=setTimeout(()=>{m=!0,A(),r()},He))},v=a=>{e.longPress&&(clearTimeout(l),m&&J(a))},F=a=>{e.disableInput&&J(a)},M=a=>({onClick:C=>{J(C),V=a,A()},onTouchstartPassive:()=>{V=a,u()},onTouchend:v,onTouchcancel:v});return se(()=>[e.max,e.min,e.integer,e.decimalLength],T),se(()=>e.modelValue,a=>{le(a,c.value)||(c.value=f(a))}),se(c,a=>{n("update:modelValue",a),n("change",a,{name:e.name})}),ne(()=>e.modelValue),()=>o("div",{role:"group",class:te([e.theme])},[re(o("button",ye({type:"button",style:P.value,class:[te("minus",{disabled:I.value}),{[we]:!I.value}],"aria-disabled":I.value||void 0},M("minus")),null),[[de,e.showMinus]]),re(o("input",{ref:S,type:e.integer?"tel":"text",role:"spinbutton",class:te("input"),value:c.value,style:b.value,disabled:e.disabled,readonly:e.disableInput,inputmode:e.integer?"numeric":"decimal",placeholder:e.placeholder,"aria-valuemax":e.max,"aria-valuemin":e.min,"aria-valuenow":c.value,onBlur:i,onInput:_,onFocus:s,onMousedown:F},null),[[de,e.showInput]]),re(o("button",ye({type:"button",style:P.value,class:[te("plus",{disabled:x.value}),{[we]:!x.value}],"aria-disabled":x.value||void 0},M("plus")),null),[[de,e.showPlus]])])}});const ct=oe(dt),[Dt,mt]=Q("form"),ft={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:L,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:H,showErrorMessage:H,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"},isToast:{type:Boolean,default:!1}},vt=X({name:"JybForm",props:ft,emits:["submit","failed"],setup(e,{emit:n,slots:f}){const{children:h,linkChildren:V}=_e(De),S=i=>i?h.filter(m=>i.includes(m.name)):h,c=i=>new Promise((m,l)=>{const r=[];S(i).reduce((v,F)=>v.then(()=>{if(!r.length)return F.validate().then(M=>{M&&r.push(M)})}),Promise.resolve()).then(()=>{r.length?l(r):m()})}),I=i=>new Promise((m,l)=>{const r=S(i);Promise.all(r.map(u=>u.validate())).then(u=>{u=u.filter(Boolean),u.length?l(u):m()})}),x=i=>{const m=h.find(l=>l.name===i);return m?new Promise((l,r)=>{m.validate().then(u=>{u?r(u):l()})}):Promise.reject()},b=i=>typeof i=="string"?x(i):e.validateFirst?c(i):I(i),P=i=>{typeof i=="string"&&(i=[i]),S(i).forEach(l=>{l.resetValidation()})},T=()=>h.reduce((i,m)=>(i[m.name]=m.getValidationStatus(),i),{}),w=(i,m)=>{h.some(l=>l.name===i?(l.$el.scrollIntoView(m),!0):!1)},A=()=>h.reduce((i,m)=>(m.name!==void 0&&(i[m.name]=m.formValue.value),i),{}),_=()=>{const i=A();b().then(()=>n("submit",i)).catch(m=>{n("failed",{values:i,errors:m});const l=m.filter(r=>{const u=h.find(F=>r.name===F.name);console.log("field :>> ",u);const v=u==null?void 0:u.$parent;return v!=null&&v.checked?"":r});if(l.length===0){n("submit",i);return}n("failed",{values:i,errors:l}),e.isToast&&Ge({message:l[0].message}),e.scrollToError&&m[0].name&&w(m[0].name)})},s=i=>{J(i),_()};return V({props:e}),Fe({submit:_,validate:b,getValues:A,scrollToField:w,resetValidation:P,getValidationStatus:T}),()=>{var i;return o("form",{class:mt(),onSubmit:s},[(i=f.default)==null?void 0:i.call(f)])}}}),gt={style:{margin:"16px 16px 0"}},Gt=X({__name:"index",setup(e){const n=N({}),f=N(!1),h=N([{text:"杭州",value:"Hangzhou"},{text:"宁波",value:"Ningbo"},{text:"温州",value:"Wenzhou"},{text:"绍兴",value:"Shaoxing"},{text:"湖州",value:"Huzhou"}]),V=N(!1),S=N(!1),c=N([]),I=N("1"),x=N(1),b=N(3),P=N(50),T=N("default"),w=_=>{console.log("submit",_)},A=_=>{console.log("failed",_)};return(_,s)=>{const i=Se("demo-block"),m=Se("demo-section");return Le(),$e(m,null,{default:k(()=>[ce(" <jyb-fonst-scale></jyb-fonst-scale> "),o(i,{title:"基本用法"},{default:k(()=>[o(g(vt),{onSubmit:w,onFailed:A,"is-toast":""},{default:k(()=>[o(g(R),{modelValue:n.value.fieldValue,"onUpdate:modelValue":s[0]||(s[0]=l=>n.value.fieldValue=l),label:"基础用法",name:"fieldValue"},null,8,["modelValue"]),o(g(R),{modelValue:n.value.fieldValue1,"onUpdate:modelValue":s[1]||(s[1]=l=>n.value.fieldValue1=l),label:"必传",name:"fieldValue1",required:""},null,8,["modelValue"]),o(g(R),{label:"选择器",name:"fieldValue2",modelValue:n.value.fieldValue2,"onUpdate:modelValue":s[2]||(s[2]=l=>n.value.fieldValue2=l),"is-picker":"",columns:h.value},null,8,["modelValue","columns"]),o(g(R),{label:"右侧文本",name:"fieldValue3","input-align":"right",modelValue:n.value.fieldValue3,"onUpdate:modelValue":s[3]||(s[3]=l=>n.value.fieldValue3=l),"right-text":"元/天"},null,8,["modelValue"]),o(g(R),{label:"右侧自定义",name:"fieldValue4",modelValue:n.value.fieldValue4,"onUpdate:modelValue":s[4]||(s[4]=l=>n.value.fieldValue4=l)},{right:k(()=>[o(Ce,{size:"mini",color:"#ee0a24","native-type":"button","font-size-scale":T.value},{default:k(()=>[j("自定义")]),_:1},8,["font-size-scale"])]),_:1},8,["modelValue"]),o(g(R),{label:"右侧添加",modelValue:n.value.fieldValue8,"onUpdate:modelValue":s[5]||(s[5]=l=>n.value.fieldValue8=l),"is-filled-require":"","slot-type":"add"},null,8,["modelValue"]),o(g(R),{label:"复选框","label-width":"60px",name:"fieldValue5",modelValue:n.value.fieldValue5,"onUpdate:modelValue":s[6]||(s[6]=l=>n.value.fieldValue5=l),"is-checkbox":"",checked:f.value,"onUpdate:checked":s[7]||(s[7]=l=>f.value=l),"right-text":"面议",required:"",rules:[{required:!0,message:"请选择或者输入复选框"}]},null,8,["modelValue","checked"]),o(g(R),{label:"上传图片",name:"fileList",required:"",rules:[{required:!0,message:"请上传图片"}],"is-vertical":""},{input:k(()=>[o(g(ze),{url:g(Ee),"file-list":n.value.fileList,"onUpdate:fileList":s[8]||(s[8]=l=>n.value.fileList=l),"is-auto":!0},null,8,["url","file-list"]),ce(' <jyb-uploader ref="jybUploader" :url="Upload"></jyb-uploader> ')]),_:1}),o(g(R),{type:"textarea",label:"文本框",name:"fieldValue7",modelValue:n.value.fieldValue7,"onUpdate:modelValue":s[9]||(s[9]=l=>n.value.fieldValue7=l),"show-word-limit":"",maxlength:"50",required:"","is-vertical":""},null,8,["modelValue"]),qe("div",gt,[o(Ce,{round:"",block:"",type:"primary","native-type":"submit"},{default:k(()=>[j(" 表单提交 ")]),_:1})])]),_:1})]),_:1}),ce(" 表单二 "),o(i,{title:"结合 vant 类型项"},{default:k(()=>[o(g(R),{name:"switch",label:"开关","font-size-scale":T.value},{input:k(()=>[o(g(Qe),{modelValue:V.value,"onUpdate:modelValue":s[10]||(s[10]=l=>V.value=l),size:"20"},null,8,["modelValue"])]),_:1},8,["font-size-scale"]),o(g(R),{name:"checkbox",label:"复选框","font-size-scale":T.value},{input:k(()=>[o(g(me),{modelValue:S.value,"onUpdate:modelValue":s[11]||(s[11]=l=>S.value=l),shape:"square"},null,8,["modelValue"])]),_:1},8,["font-size-scale"]),o(g(R),{name:"checkboxGroup",label:"复选框组","font-size-scale":T.value},{input:k(()=>[o(g(Je),{modelValue:c.value,"onUpdate:modelValue":s[12]||(s[12]=l=>c.value=l),direction:"horizontal"},{default:k(()=>[o(g(me),{name:"1",shape:"square"},{default:k(()=>[j("复选框 1")]),_:1}),o(g(me),{name:"2",shape:"square"},{default:k(()=>[j("复选框 2")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["font-size-scale"]),o(g(R),{name:"radio",label:"单选框","font-size-scale":T.value},{input:k(()=>[o(g(Ye),{modelValue:I.value,"onUpdate:modelValue":s[13]||(s[13]=l=>I.value=l),direction:"horizontal"},{default:k(()=>[o(g(xe),{name:"1"},{default:k(()=>[j("单选框 1")]),_:1}),o(g(xe),{name:"2"},{default:k(()=>[j("单选框 2")]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["font-size-scale"]),o(g(R),{name:"stepper",label:"步进器","font-size-scale":T.value},{input:k(()=>[o(g(ct),{modelValue:x.value,"onUpdate:modelValue":s[14]||(s[14]=l=>x.value=l)},null,8,["modelValue"])]),_:1},8,["font-size-scale"]),o(g(R),{name:"rate",label:"评分","font-size-scale":T.value},{input:k(()=>[o(g(lt),{modelValue:b.value,"onUpdate:modelValue":s[15]||(s[15]=l=>b.value=l)},null,8,["modelValue"])]),_:1},8,["font-size-scale"]),o(g(R),{name:"slider",label:"滑块","font-size-scale":T.value},{input:k(()=>[o(g(it),{modelValue:P.value,"onUpdate:modelValue":s[16]||(s[16]=l=>P.value=l)},null,8,["modelValue"])]),_:1},8,["font-size-scale"])]),_:1})]),_:1})}}});export{Gt as default};
