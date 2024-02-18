import{A as q,y as C,C as w,U as De,e as r,u as U,q as ae,D as $,N as we,R as Pe,j as Se,v as Me,g as Be,V as Ee}from"./vue-libs-9b0981d5.js";import{J as Fe}from"./index-b86bb4a1.js";import{u as Ne,a as Ae}from"./useArray-7b7e81ea.js";import{u as ve}from"./useFontScale-afa8cc55.js";import{f as je,F as Ie}from"./index-b73281c4.js";import{C as Re}from"./index-2aa06360.js";import{c as J,B as He,e as Y,C as Z,n as X,m as z,D as p,a as ge,q as he,z as ye,h as G,t as _e,g as Ye,u as Ue,k as $e,E as L,p as le,w as be,F as xe,G as ie}from"./index-137ae4a8.js";import{u as Le,a as ke}from"./use-touch-7ef5a55b.js";import{L as qe}from"./index-c9c363c8.js";import{H as ue,a as Ke}from"./use-route-8dafc2dc.js";import{P as pe}from"./index-9fc963e1.js";import{s as Je}from"./function-call-1ec1bbbb.js";import"./index-d9be5e18.js";const[ze,I,ce]=J("picker"),Ce=e=>e.find(t=>!t.disabled)||e[0];function Ge(e,t){const l=e[0];if(l){if(Array.isArray(l))return"multiple";if(t.children in l)return"cascade"}return"default"}function Q(e,t){t=Z(t,0,e.length);for(let l=t;l<e.length;l++)if(!e[l].disabled)return l;for(let l=t-1;l>=0;l--)if(!e[l].disabled)return l;return 0}const re=(e,t,l)=>t!==void 0&&!!e.find(c=>c[l.value]===t);function ne(e,t,l){const c=e.findIndex(m=>m[l.value]===t),u=Q(e,c);return e[u]}function Qe(e,t,l){const c=[];let u={[t.children]:e},m=0;for(;u&&u[t.children];){const d=u[t.children],b=l.value[m];if(u=He(b)?ne(d,b,t):void 0,!u&&d.length){const v=Ce(d)[t.value];u=ne(d,v,t)}m++,c.push(d)}return c}function Ze(e){const{transform:t}=window.getComputedStyle(e),l=t.slice(7,t.length-1).split(", ")[5];return Number(l)}function We(e){return Y({text:"text",value:"value",children:"children"},e)}const se=200,de=300,Xe=15,[Te,ee]=J("picker-column"),Ve=Symbol(Te);var et=q({name:Te,props:{value:X,fields:z(Object),options:p(),readonly:Boolean,allowHtml:Boolean,optionHeight:z(Number),swipeDuration:z(X),visibleOptionNum:z(X)},emits:["change","clickOption","scrollInto"],setup(e,{emit:t,slots:l}){let c,u,m,d,b;const v=C(),P=C(),y=C(0),x=C(0),S=Le(),k=()=>e.options.length,F=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,V=g=>{let a=Q(e.options,g);const i=-a*e.optionHeight,f=()=>{a>k()-1&&(a=Q(e.options,g));const A=e.options[a][e.fields.value];A!==e.value&&t("change",A)};c&&i!==y.value?b=f:f(),y.value=i},O=()=>e.readonly||!e.options.length,o=g=>{c||O()||(b=null,x.value=se,V(g),t("clickOption",e.options[g]))},h=g=>Z(Math.round(-g/e.optionHeight),0,k()-1),D=w(()=>h(y.value)),B=(g,a)=>{const i=Math.abs(g/a);g=y.value+i/.003*(g<0?-1:1);const f=h(g);x.value=+e.swipeDuration,V(f)},T=()=>{c=!1,x.value=0,b&&(b(),b=null)},j=g=>{if(!O()){if(S.start(g),c){const a=Ze(P.value);y.value=Math.min(0,a-F())}x.value=0,u=y.value,m=Date.now(),d=u,b=null}},N=g=>{if(O())return;S.move(g),S.isVertical()&&(c=!0,ye(g,!0));const a=Z(u+S.deltaY.value,-(k()*e.optionHeight),e.optionHeight),i=h(a);i!==D.value&&t("scrollInto",e.options[i]),y.value=a;const f=Date.now();f-m>de&&(m=f,d=a)},R=()=>{if(O())return;const g=y.value-d,a=Date.now()-m;if(a<de&&Math.abs(g)>Xe){B(g,a);return}const f=h(y.value);x.value=se,V(f),setTimeout(()=>{c=!1},0)},H=()=>{const g={height:`${e.optionHeight}px`};return e.options.map((a,i)=>{const f=a[e.fields.text],{disabled:A}=a,n=a[e.fields.value],s={role:"button",style:g,tabindex:A?-1:0,class:[ee("item",{disabled:A,selected:n===e.value}),a.className],onClick:()=>o(i)},E={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:f};return r("li",s,[l.option?l.option(a,i):r("div",E,null)])})};return ge(Ve),ke({stopMomentum:T}),De(()=>{const g=c?Math.floor(-y.value/e.optionHeight):e.options.findIndex(f=>f[e.fields.value]===e.value),a=Q(e.options,g),i=-a*e.optionHeight;c&&a<g&&T(),y.value=i}),he("touchmove",N,{target:v}),()=>r("div",{ref:v,class:ee(),onTouchstartPassive:j,onTouchend:R,onTouchcancel:R},[r("ul",{ref:P,style:{transform:`translate3d(0, ${y.value+F()}px, 0)`,transitionDuration:`${x.value}ms`,transitionProperty:x.value?"all":"none"},class:ee("wrapper"),onTransitionend:T},[H()])])}});const[tt]=J("picker-toolbar"),W={title:String,cancelButtonText:String,confirmButtonText:String},at=["cancel","confirm","title","toolbar"],lt=Object.keys(W);var nt=q({name:tt,props:W,emits:["confirm","cancel"],setup(e,{emit:t,slots:l}){const c=()=>{if(l.title)return l.title();if(e.title)return r("div",{class:[I("title"),"van-ellipsis"]},[e.title])},u=()=>t("cancel"),m=()=>t("confirm"),d=()=>{const v=e.cancelButtonText||ce("cancel");return r("button",{type:"button",class:[I("cancel"),ue],onClick:u},[l.cancel?l.cancel():v])},b=()=>{const v=e.confirmButtonText||ce("confirm");return r("button",{type:"button",class:[I("confirm"),ue],onClick:m},[l.confirm?l.confirm():v])};return()=>r("div",{class:I("toolbar")},[l.toolbar?l.toolbar():[d(),c(),b()]])}});const[ot,At]=J("picker-group"),it=Symbol(ot);Y({tabs:p(),activeTab:G(0),nextStepText:String},W);const oe=Y({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:G(44),showToolbar:_e,swipeDuration:G(1e3),visibleOptionNum:G(6)},W),ut=Y({},oe,{columns:p(),modelValue:p(),toolbarPosition:Ye("top"),columnsFieldNames:Object});var ct=q({name:ze,props:ut,emits:["confirm","cancel","change","scrollInto","clickOption","update:modelValue"],setup(e,{emit:t,slots:l}){const c=C(),u=C(e.modelValue.slice(0)),{parent:m}=ge(it),{children:d,linkChildren:b}=Ue(Ve);b();const v=w(()=>We(e.columnsFieldNames)),P=w(()=>$e(e.optionHeight)),y=w(()=>Ge(e.columns,v.value)),x=w(()=>{const{columns:a}=e;switch(y.value){case"multiple":return a;case"cascade":return Qe(a,v.value,u);default:return[a]}}),S=w(()=>x.value.some(a=>a.length)),k=w(()=>x.value.map((a,i)=>ne(a,u.value[i],v.value))),F=w(()=>x.value.map((a,i)=>a.findIndex(f=>f[v.value.value]===u.value[i]))),V=(a,i)=>{if(u.value[a]!==i){const f=u.value.slice(0);f[a]=i,u.value=f}},O=()=>({selectedValues:u.value.slice(0),selectedOptions:k.value,selectedIndexes:F.value}),o=(a,i)=>{V(i,a),y.value==="cascade"&&u.value.forEach((f,A)=>{const n=x.value[A];re(n,f,v.value)||V(A,n.length?n[0][v.value.value]:void 0)}),ae(()=>{t("change",Y({columnIndex:i},O()))})},h=(a,i)=>{const f={columnIndex:i,currentOption:a};t("clickOption",Y(O(),f)),t("scrollInto",f)},D=()=>{d.forEach(i=>i.stopMomentum());const a=O();return ae(()=>{t("confirm",a)}),a},B=()=>t("cancel",O()),T=()=>x.value.map((a,i)=>r(et,{value:u.value[i],fields:v.value,options:a,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:P.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:f=>o(f,i),onClickOption:f=>h(f,i),onScrollInto:f=>{t("scrollInto",{currentOption:f,columnIndex:i})}},{option:l.option})),j=a=>{if(S.value){const i={height:`${P.value}px`},f={backgroundSize:`100% ${(a-P.value)/2}px`};return[r("div",{class:I("mask"),style:f},null),r("div",{class:[Ke,I("frame")],style:i},null)]}},N=()=>{const a=P.value*+e.visibleOptionNum,i={height:`${a}px`};return r("div",{ref:c,class:I("columns"),style:i},[T(),j(a)])},R=()=>{if(e.showToolbar&&!m)return r(nt,$(le(e,lt),{onConfirm:D,onCancel:B}),le(l,at))};U(x,a=>{a.forEach((i,f)=>{i.length&&!re(i,u.value[f],v.value)&&V(f,Ce(i)[v.value.value])})},{immediate:!0});let H;return U(()=>e.modelValue,a=>{!L(a,u.value)&&!L(a,H)&&(u.value=a.slice(0),H=a.slice(0))},{deep:!0}),U(u,a=>{L(a,e.modelValue)||(H=a.slice(0),t("update:modelValue",H))},{immediate:!0}),he("touchmove",ye,{target:c}),ke({confirm:D,getSelectedOptions:()=>k.value}),()=>{var a,i;return r("div",{class:I()},[e.toolbarPosition==="top"?R():null,e.loading?r(qe,{class:I("loading")},null):null,(a=l["columns-top"])==null?void 0:a.call(l),N(),(i=l["columns-bottom"])==null?void 0:i.call(l),e.toolbarPosition==="bottom"?R():null])}}});const Oe=be(ct),rt=Y({},oe,{modelValue:p(),filter:Function,formatter:{type:Function,default:(e,t)=>t}}),st=Object.keys(oe);function dt(e,t){if(e<0)return[];const l=Array(e);let c=-1;for(;++c<e;)l[c]=t(c);return l}const ft=(e,t)=>32-new Date(e,t-1,32).getDate(),te=(e,t,l,c,u,m)=>{const d=dt(t-e+1,b=>{const v=xe(e+b);return c(l,{text:v,value:v})});return u?u(l,d,m):d},mt=(e,t)=>e.map((l,c)=>{const u=t[c];if(u.length){const m=+u[0].value,d=+u[u.length-1].value;return xe(Z(+l,m,d))}return l}),fe=new Date().getFullYear(),[vt]=J("date-picker"),gt=Y({},rt,{columnsType:{type:Array,default:()=>["year","month","day"]},minDate:{type:Date,default:()=>new Date(fe-10,0,1),validator:ie},maxDate:{type:Date,default:()=>new Date(fe+10,11,31),validator:ie}});var ht=q({name:vt,props:gt,emits:["confirm","cancel","change","update:modelValue"],setup(e,{emit:t,slots:l}){const c=C(e.modelValue),u=C(!1),m=()=>{const o=e.minDate.getFullYear(),h=e.maxDate.getFullYear();return te(o,h,"year",e.formatter,e.filter)},d=o=>o===e.minDate.getFullYear(),b=o=>o===e.maxDate.getFullYear(),v=o=>o===e.minDate.getMonth()+1,P=o=>o===e.maxDate.getMonth()+1,y=o=>{const{minDate:h,columnsType:D}=e,B=D.indexOf(o),T=u.value?e.modelValue[B]:c.value[B];if(T)return+T;switch(o){case"year":return h.getFullYear();case"month":return h.getMonth()+1;case"day":return h.getDate()}},x=()=>{const o=y("year"),h=d(o)?e.minDate.getMonth()+1:1,D=b(o)?e.maxDate.getMonth()+1:12;return te(h,D,"month",e.formatter,e.filter)},S=()=>{const o=y("year"),h=y("month"),D=d(o)&&v(h)?e.minDate.getDate():1,B=b(o)&&P(h)?e.maxDate.getDate():ft(o,h);return te(D,B,"day",e.formatter,e.filter)},k=w(()=>e.columnsType.map(o=>{switch(o){case"year":return m();case"month":return x();case"day":return S();default:return[]}}));U(c,o=>{L(o,e.modelValue)||t("update:modelValue",o)}),U(()=>e.modelValue,(o,h)=>{u.value=L(h,c.value),o=mt(o,k.value),L(o,c.value)||(c.value=o),u.value=!1},{immediate:!0});const F=(...o)=>t("change",...o),V=(...o)=>t("cancel",...o),O=(...o)=>t("confirm",...o);return()=>r(Oe,$({modelValue:c.value,"onUpdate:modelValue":o=>c.value=o,columns:k.value,onChange:F,onCancel:V,onConfirm:O},le(e,st)),l)}});const yt=be(ht);function bt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Pe(e)}const xt={...je,modelValue:{type:[String,Number,Array]},columns:{type:Array},apiUrl:{type:[Function]},showPickerBefore:Function,rightText:String,isCheckbox:{type:Boolean,default:!1},isPicker:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},isVertical:{type:Boolean,default:!1},isDateTimePicker:{type:Boolean,default:!1},pickerConfig:{type:Object,default:()=>{}},query:{type:Object,default:()=>{}},isLinkage:{type:Boolean,default:!1},realValue:{type:[Object,String,Array,Number]},messageType:{type:String,default:""},slotType:{type:String,default:""},cardConfig:{type:Object,default:()=>{}},emptyMessage:{type:String,default:""},fontSizeScale:{type:String,default:"default"},isFilledRequire:{type:Boolean,default:!1}},me=q({name:"JybField",components:{},props:xt,emits:["update:modelValue","confirm","showPickerAfter","update:realValue","update:checked","getAfter","getBefore"],setup(e,{emit:t,slots:l,attrs:c}){const{fontClass:u}=ve({name:"jyb-field-scale"}),m=C(!1),d=C({}),b=C(""),v=C([]),P=C({}),y=C(!0),x=C(""),S=C(),k=C(null),F=C();e.inputAlign||(d.value.inputAlign="right");const V=w({get(){return e.columns||F.value},set(n){F.value=n}}),O=w(()=>e.isPicker||e.isDateTimePicker);O.value&&(d.value.readonly=!0,d.value.isLink=!0);const o=w(()=>e.slotType==="add"?!1:T("border",!0)),h=w(()=>T("required",!1)),D=w(()=>({"columns-field-names":{text:"text",value:"value",children:"children"},...e.pickerConfig})),B=n=>{let s;e.isDateTimePicker?s=H:e.isPicker&&(s=N),t("update:modelValue",s==null?void 0:s(n))},T=(n,s)=>Object.prototype.hasOwnProperty.call(e,n)?e[n]===!1?!0:e[n]:s,j=async()=>{var E,M;t("getBefore"),console.log(e.apiUrl);const n=await((E=e.apiUrl)==null?void 0:E.call(e));console.log(n,"接口返回");const s=Object.prototype.hasOwnProperty.call(n,"payload")?n.data:n.data.data;e.isLinkage?V.value=s:V.value=s==null?void 0:s.map(_=>(delete _.children,_)),((M=V.value)==null?void 0:M.length)>0?(y.value=!1,P.value=e.query,m.value=!0):e.emptyMessage&&Je({message:e.emptyMessage}),t("getAfter")},N=n=>{const s=D.value["columns-field-names"].text;return Array.isArray(n)||(n=n.selectedOptions),n.length>1?n.map(M=>typeof M=="string"?M:M==null?void 0:M[s]).join(""):s&&n[0]?n[0][s]:n},R=n=>{var s;e.isLinkage?t("update:realValue",((s=S.value)==null?void 0:s.getSelectedOptions())||n):t("update:modelValue",N(n)),m.value=!1,t("confirm")},H=n=>{let s="/";if(n!="/"){console.log(n,333);const E=new Date(n),M=E.getFullYear();let _=E.getMonth()+1;_=_<10?"0"+_:_;let K=E.getDate();K=K<10?"0"+K:K,s=M+"-"+_+"-"+K}return s},g=()=>{m.value=!1},a=()=>{if(O.value){if(e.showPickerBefore&&e.showPickerBefore()===!1)return;ae(async()=>{e.apiUrl&&(y.value||JSON.stringify(P.value)!==JSON.stringify(e.query))?await j():m.value=!0,t("showPickerAfter")})}},i=()=>{e.isCheckbox&&t("update:checked",!e.checked)},f=(n,s)=>(n==="year"?s.text+="年":n==="month"?s.text+="月":n==="day"&&(s.text+="日"),s);we(()=>{if(e.slotType==="add")d.value.readonly=!0;else{const{placeholder:n,label:s}=e;b.value=`你已选择${e.rightText}，再次点击退出${e.rightText}`;let E;e.messageType==="uploader"?E="请上传":E=e.isPicker?"请选择":"请输入";const M=E+s;x.value=M,n||(d.value.placeholder=M),e.isVertical&&(d.value.inputAlign="left"),h.value&&(d.value.rules=[{required:!0,message:M}])}}),Ne({onCancel:g});const A=()=>{let n;return l.default?n=r("div",null,[l.default()]):e.isDateTimePicker?n=r(yt,$({modelValue:v.value,"onUpdate:modelValue":s=>v.value=s,ref:S,title:x.value,onCancel:()=>m.value=!1,onConfirm:R,formatter:f},D.value),null):e.isPicker&&(n=r(Oe,$({ref:S,"show-toolbar":!0,title:x.value,onCancel:()=>m.value=!1,onConfirm:R,columns:V.value},D.value),null)),r(pe,{show:m.value,"onUpdate:show":s=>m.value=s,position:"bottom"},bt(n)?n:{default:()=>[n]})};return U(()=>e.realValue,(n,s)=>{console.log("变化了，",n,s),n!==s&&e.realValue&&B(e.realValue)}),()=>r("div",{class:"filed"},[r("div",{class:["filed-box",o.value&&"filed-border",h.value&&"filed-required",e.isVertical&&"filed-vertical",e.isCheckbox&&e.checked&&"filed-checkbox",u.value]},[e.slotType==="add"?r("div",{class:"van-cell van-cell--borderless Field"},[r("div",{class:"van-cell__title van-field__label"},[r("span",null,[e.label])])]):r(Ie,$({onClick:a},c,e,d.value,{border:!1,"error-message":" ",modelValue:e.modelValue,"onUpdate:modelValue":n=>t("update:modelValue",n)}),l),A(),(e.rightText||e.isCheckbox)&&r("div",{class:"filed-box--right"},[e.isCheckbox&&r(Re,{modelValue:e.checked,"onUpdate:modelValue":n=>{t("update:checked",n)}},null),r("div",{onClick:i},[e.checked?b.value:e.rightText])]),l.right&&r("div",{class:"filed-box--right"},[l.right()]),e.slotType==="add"&&r("div",{class:"filed-box--right"},[r(kt,$(c,e.cardConfig,{isFilledRequire:e.isFilledRequire,teleport:k.value}),null)])]),e.slotType==="add"&&r("div",{class:"filed-card",ref:k},null)])}}),kt=q({name:"JybCard",components:{},props:{modelValue:{type:Array,default:()=>[]},title:{type:String,default:""},maxCount:{type:Number,default:5},keyMaxLength:{type:Number,default:10},valueMaxLength:{type:Number,default:200},addLabel:{type:String,default:"添加"},isTextarea:{type:Boolean,default:!1},isFilledRequire:{type:Boolean,default:!1},groupKey:{type:String,default:""},name:{type:String,default:""},teleport:{type:[String,Object]}},emits:["update:modelValue"],setup(e,{emit:t}){const{fontClass:l}=ve({name:"jyb-card-scale"}),c={fieldKey:"",fieldValue:""},u=C(null),m=w(()=>!e.teleport),{list:d,delData:b,addData:v,init:P}=Ae(e.modelValue,{item:c}),y=()=>{e.modelValue.length>=e.maxCount||(e.groupKey&&(c.groupKey=e.groupKey),v(1),t("update:modelValue",d.value))},x=k=>{b(k),t("update:modelValue",d.value)},S=w(()=>e.modelValue.length<e.maxCount);return U(()=>e.modelValue,k=>{P(k)}),()=>{const{title:k,addLabel:F,name:V,keyMaxLength:O,isFilledRequire:o,isTextarea:h,valueMaxLength:D}=e;return console.log(d,d.value,2222),r("div",{class:"jyb-card"},[k&&r("div",{class:"jyb-card-title"},[k]),Se(r(Fe,{class:"jyb-card-btn",size:"mini",plain:!0,onClick:y},{default:()=>[Be("+"),F]}),[[Me,S]]),r(Ee,{to:e.teleport,disabled:m.value},{default:()=>{var B;return[r("div",{ref:u,class:l.value},[(B=d.value)==null?void 0:B.map((T,j)=>r("div",{class:"jyb-card-box"},[r(me,{"input-align":"left",modelValue:T.fieldKey,"onUpdate:modelValue":N=>T.fieldKey=N,label:"",name:V+"Key"+j,maxlength:O,placeholder:"请输入标题"},null),r(me,{"input-align":"left",modelValue:T.fieldValue,"onUpdate:modelValue":N=>T.fieldValue=N,label:"",border:!1,type:"textarea",rules:[{validator:()=>o?!(!T.fieldKey||!T.fieldValue):!0,message:"请输入完整标题和内容"}],name:V+"Value"+j,rows:h?"3":"1",autosize:!h,maxlength:D,"show-word-limit":h,placeholder:"请输入内容"},null),r("div",{class:"jyb-delete-icon",onClick:()=>x(j)},null)]))])]}})])}}});export{kt as J,me as a};
