import{A as j,e as t,T as ce,C as B,o as _,a as S,d as T,O as Y,y as P,W as re,B as l,F as K,b as Z,t as de,X as A,f as x,E as fe,w as f,L,c as N,n as pe,i as V,N as ge,D as me,r as z,g as ve,p as he,k as ye}from"./vue-libs-9b0981d5.js";import{c as D,t as Q,g as E,I as U,w as O,u as _e,h as be,n as we,a as Ce,e as Se}from"./index-137ae4a8.js";import{I as ee}from"./index-5a51eca5.js";import{C as I}from"./index-52403669.js";import{P as te}from"./index-9fc963e1.js";import{s as le}from"./function-call-1ec1bbbb.js";import{_ as ae}from"./locales-577a401d.js";import{I as J}from"./index-ff210e3d.js";import{u as ke}from"./useFontScale-afa8cc55.js";import{H as xe}from"./use-route-8dafc2dc.js";import"./use-touch-7ef5a55b.js";import"./index-14647d2a.js";import"./index-c9c363c8.js";const[Pe,G]=D("tag"),je={size:String,mark:Boolean,show:Q,type:E("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var Ae=j({name:Pe,props:je,emits:["close"],setup(e,{slots:c,emit:n}){const u=m=>{m.stopPropagation(),n("close",m)},p=()=>e.plain?{color:e.textColor||e.color,borderColor:e.color}:{color:e.textColor,background:e.color},r=()=>{var m;const{type:s,mark:i,plain:o,round:a,size:d,closeable:g}=e,b={mark:i,plain:o,round:a};d&&(b[d]=d);const h=g&&t(U,{name:"cross",class:[G("close"),xe],onClick:u},null);return t("span",{style:p(),class:G([b,s])},[(m=c.default)==null?void 0:m.call(c),h])};return()=>t(ce,{name:e.closeable?"van-fade":void 0},{default:()=>[e.show?r():null]})}});const Be=O(Ae),[ne,Te]=D("row"),se=Symbol(ne),$e={tag:E("div"),wrap:Q,align:String,gutter:{type:[String,Number,Array],default:0},justify:String};var Ie=j({name:ne,props:$e,setup(e,{slots:c}){const{children:n,linkChildren:u}=_e(se),p=B(()=>{const s=[[]];let i=0;return n.forEach((o,a)=>{i+=Number(o.span),i>24?(s.push([a]),i-=24):s[s.length-1].push(a)}),s}),r=B(()=>{let s=0;Array.isArray(e.gutter)?s=Number(e.gutter[0])||0:s=Number(e.gutter);const i=[];return s&&p.value.forEach(o=>{const a=s*(o.length-1)/o.length;o.forEach((d,g)=>{if(g===0)i.push({right:a});else{const b=s-i[d-1].right,h=a-b;i.push({left:b,right:h})}})}),i}),m=B(()=>{const{gutter:s}=e,i=[];if(Array.isArray(s)&&s.length>1){const o=Number(s[1])||0;if(o<=0)return i;p.value.forEach((a,d)=>{d!==p.value.length-1&&a.forEach(()=>{i.push({bottom:o})})})}return i});return u({spaces:r,verticalSpaces:m}),()=>{const{tag:s,wrap:i,align:o,justify:a}=e;return t(s,{class:Te({[`align-${o}`]:o,[`justify-${a}`]:a,nowrap:!i})},{default:()=>{var d;return[(d=c.default)==null?void 0:d.call(c)]}})}}});const[Fe,Ne]=D("col"),Le={tag:E("div"),span:be(0),offset:we};var Ke=j({name:Fe,props:Le,setup(e,{slots:c}){const{parent:n,index:u}=Ce(se),p=B(()=>{if(!n)return;const{spaces:r,verticalSpaces:m}=n;let s={};if(r&&r.value&&r.value[u.value]){const{left:o,right:a}=r.value[u.value];s={paddingLeft:o?`${o}px`:null,paddingRight:a?`${a}px`:null}}const{bottom:i}=m.value[u.value]||{};return Se(s,{marginBottom:i?`${i}px`:null})});return()=>{const{tag:r,span:m,offset:s}=e;return t(r,{style:p.value,class:Ne({[m]:m,[`offset-${s}`]:s})},{default:()=>{var i;return[(i=c.default)==null?void 0:i.call(c)]}})}}});const H=O(Ke),M=O(Ie),De=["innerHTML"],W=j({__name:"cell-html",props:{value:{type:String,required:!0}},setup(e){const c=e,n=B(()=>c.value.replace(new RegExp("<img","gi"),'<img style="width:242px;"'));return(u,p)=>(_(),S("div",null,[T("div",{innerHTML:n.value},null,8,De)]))}}),Ee="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/yZXBQbAfmWc0--f4vAYm3.png",Ue="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/aRGd1jISyI3L0jCylc98J.png",Oe="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/JhVxSKMGFsSqWoyDt30Pf.png",Re="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/TlrFfJMzl955E87zI6X4h.png",Ve="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/3_5ZOjEhMUvKyOa4S_MEV.png",ze="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/HvGJGcLOwVbfK7nB995Hd.png",Je="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/UgisrBsjJyaoAYDlo2A8F.png",Ge="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/KCBwXHsJoDIf1Dgw6Ewx_.png",He="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/ybdOECcVTJU76GCruWRaO.png",Me="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/app/2022/04/1649730879728.png",We=e=>{switch(e==null?void 0:e.substring((e==null?void 0:e.lastIndexOf("."))+1)){case"pdf":return Ee;case"xls":case"xlsx":return Ue;case"docx":return Oe;case"ppt":return Re;case"png":case"jpg":case"jpeg":case"gif":return Ve;case"zip":case"rar":case"7z":case"CAB":case"ARJ":case"LZH":return ze;case"bmp":return Je;case"mp3":case"wma":case"asf":case"media":return Ge;case"mp4":case"3gp":case"flv":case"mkv":case"avi":case"mov":case"wmv":case"webm":return He;default:return Me}},ie=()=>{const{appContext:e}=Y();return{proxy:e.config.globalProperties}};function Xe(){const e=P(!1),c=P({}),n=P([]),{proxy:u}=ie(),p=u==null?void 0:u.$hybrid;return{isShowPreview:e,imageData:c,previewList:n,previews:(i,o)=>{c.value=i,n.value=[],o&&i[o]!==void 0&&n.value.push(i[o]),e.value=!0},isPreview:i=>{const o=i.substring(i.lastIndexOf(".")+1);return["gif","jpg","jpeg","png","GIF","JPEG","JPG","PNG"].includes(o)},download:(i,o,a)=>{i[o]&&(a?p.jybFileDownload({url:i[o]}):window.location.href=i[o])}}}const qe={key:0},Ye=["src"],Ze={class:"box__click--left"},Qe={class:"box__click--right"},et=["onClick"],tt=["onClick"],lt=["onClick"],at=j({__name:"cell-file",props:{value:{},fileText:{default:""},isApp:{type:Boolean,default:!1},valueKey:{default:""},type:{default:""},downable:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1}},emits:["delet"],setup(e,{emit:c}){const{proxy:n}=ie(),{isShowPreview:u,imageData:p,previewList:r,previews:m,isPreview:s,download:i}=Xe(),o=e,{value:a}=re(o),d=P(!1),g=c,b=n==null?void 0:n.$hybrid;function h(C,w,y){if(o.fileText){le(o.fileText);return}C==="preview"?(o.isApp?b.jybFilePreview({url:w[o.valueKey]},function(){}):m(w,o.valueKey),console.log(w,"预览附件")):C==="download"?i(w,o.valueKey,o.isApp):C==="delet"&&(a==null||a.value.splice(y,1),g("delet",{list:a==null?void 0:a.value,index:y}))}function $(){var C;b.savePicture({name:(C=p.value)==null?void 0:C.name,url:p.value[o.valueKey]},function(){})}function ue(C){setTimeout(()=>{u.value&&o.isApp&&(d.value=!0)},500)}return(C,w)=>(_(),S("div",null,[l(a).length>0?(_(),S("div",qe,[(_(!0),S(K,null,Z(l(a),(y,F)=>(_(),S("div",{class:"box__click",key:F,src:y[C.valueKey]},[T("div",Ze,[t(l(U),{class:"icon-arrow",name:l(We)(y[C.valueKey]),size:"18"},null,8,["name"]),T("span",null,de(y.name),1)]),T("div",Qe,[l(s)(y[C.valueKey])?(_(),S("span",{key:0,onClick:A(R=>h("preview",y,F),["stop"])},"预览",8,et)):x("v-if",!0),C.downable?(_(),S("span",{key:1,onClick:A(R=>h("download",y),["stop"])},"下载",8,tt)):x("v-if",!0),C.deletable?(_(),S("span",{key:2,class:"box__click--delete",onClick:A(R=>h("delet",y,F),["stop"])},"删除",8,lt)):x("v-if",!0)])],8,Ye))),128))])):x("v-if",!0),x(" 图片处理 "),l(u)?(_(),S("div",{key:1,class:"image-preview",onClick:w[1]||(w[1]=A(()=>{},["stop"]))},[t(l(ee),{onChange:A(ue,["stop"]),show:l(u),"onUpdate:show":w[0]||(w[0]=y=>fe(u)?u.value=y:null),images:l(r),"show-index":!1,loop:!1,closeable:!0},null,8,["show","images"])])):x("v-if",!0),t(l(te),{modelValue:d.value,"onUpdate:modelValue":w[4]||(w[4]=y=>d.value=y),position:"bottom",class:"van-popup"},{default:f(()=>[t(l(I),{onClick:w[2]||(w[2]=y=>$()),center:"",title:"保存图片到相册"}),t(l(I),{onClick:w[3]||(w[3]=y=>d.value=!1),center:"",title:"取消"})]),_:1},8,["modelValue"])]))}});const X=ae(at,[["__scopeId","data-v-f1c0532c"]]),nt={key:2,class:"image-preview"},q=j({__name:"cell-image",props:{title:{default:""},value:{},isStyle:{type:Boolean,default:!1},click:{type:Boolean,default:!1},isApp:{type:Boolean,default:!1},valueKey:{default:"fileUrl"},isLineFeed:{type:Boolean,default:!1}},emits:["getClick"],setup(e,{emit:c}){const n=e,u=P(!1),p=P(!1);L({});let r=L([]);const m=c;function s(a){if(n.click){let d={name:n.title};d[n.valueKey]=a,m("getClick",d)}else r=[],n.title,r.push(a),u.value=!0}function i(a){setTimeout(()=>{u.value&&n.isApp&&(p.value=!0)},500)}function o(){}return(a,d)=>(_(),S("div",null,[Array.isArray(a.value)?(_(),N(l(M),{key:0,gutter:"5"},{default:f(()=>[(_(!0),S(K,null,Z(a.value,(g,b)=>(_(),N(l(H),{key:b,span:a.isLineFeed?a.isStyle?"":6:a.isStyle?"":8},{default:f(()=>[t(l(J),{class:pe(a.isStyle?"":"jyb-cell__img"),onClick:A(h=>s(g[a.valueKey]),["stop"]),style:V(a.isStyle),src:g[a.valueKey],fit:"cover"},null,8,["class","onClick","style","src"])]),_:2},1032,["span"]))),128))]),_:1})):(_(),N(l(M),{key:1,gutter:"5"},{default:f(()=>[t(l(H),{span:"12"},{default:f(()=>[t(l(J),{class:"jyb-cell__imgs",onClick:d[0]||(d[0]=A(g=>s(a.value),["stop"])),style:V(a.isStyle),src:a.value,fit:"cover"},null,8,["style","src"])]),_:1})]),_:1})),x(" 图片处理 "),u.value?(_(),S("div",nt,[t(l(ee),{onChange:i,show:u.value,"onUpdate:show":d[1]||(d[1]=g=>u.value=g),images:l(r),"show-index":!1,loop:!1,closeable:!0},null,8,["show","images"])])):x("v-if",!0),t(l(te),{show:p.value,"onUpdate:show":d[4]||(d[4]=g=>p.value=g),position:"bottom",class:"van-popup"},{default:f(()=>[t(l(I),{onClick:d[2]||(d[2]=g=>void 0),center:"",title:"保存图片到相册"}),t(l(I),{onClick:d[3]||(d[3]=g=>p.value=!1),center:"",title:"取消"})]),_:1},8,["show"])]))}});function st(e){return e.name==="NavigationDuplicated"||e.message&&e.message.indexOf("redundant navigation")!==-1}function it(e,c){const{to:n,url:u,replace:p}=c;if(n&&e){const r=e[p?"replace":"push"](n);r&&r.catch&&r.catch(m=>{if(m&&!st(m))throw m})}else u&&(p?location.replace(u):location.href=u);console.log(e,c,"---rorter,config")}function ot(e){console.log("context123: ",e),it(e.parent&&e.parent.$router,e.props)}const v=j({name:"RenderType",components:{cellHtml:W,cellFile:X,cellImage:q},props:{type:{type:String,default:()=>"text"},title:{type:String,default:()=>""},value:{type:[Array,String,Number,Object,Boolean],default:()=>""},url:{type:String,default:()=>""},to:[String,Object],valueColor:{type:String,default:()=>"#333"},titleColor:{type:String,default:()=>"#666"},titleWidth:{type:String,default:()=>"80px"},titlePaddingRight:{type:String,default:()=>"12px"},isStyle:String,fileText:String,lineClamp:String,isApp:Boolean,valueKey:{type:String,default:()=>"fileUrl"},imagesKey:{type:String,default:()=>"fileUrl"},isLineFeed:Boolean,downable:{type:Boolean,default:!1},deletable:{type:Boolean,default:!1}},emits:["click"],setup(e,{emit:c,slots:n}){const u=P(!1),p=P(!1),r=Y(),{fontClass:m}=ke({name:"jyb-cell-scale"}),s=B(()=>({"--titleColor":e.titleColor,"--valueColor":e.valueColor,"--lineClamp":e.lineClamp||99,"--titleWidth":e.titleWidth,"--titlePaddingRight":e.titlePaddingRight})),i=B(()=>{let g=e.title.length;const b=e.title.length;let h;for(h=0;h<b;h++)e.title.charCodeAt(h)>255&&g++;return"cell__title--"+(g>10?"linefeed":"single")}),o=()=>{var g;c("click",{title:e.title,value:e.value}),(e.to||e.url)&&ot({props:e,parent:((g=r==null?void 0:r.proxy)==null?void 0:g.$parent)||void 0})},a=()=>{p.value=!p.value};P(null),ge(()=>{var g,b;if((g=r.refs)!=null&&g.thisslot){const h=(b=r.refs)==null?void 0:b.thisslot,$=h==null?void 0:h.offsetHeight;$&&60<$&&(u.value=!0)}});const d=g=>{switch(g){case"file":return t(X,{title:e.title,value:e.value,fileText:e.fileText,isStyle:e.isStyle,isApp:e.isApp,valueKey:e.valueKey,isLineFeed:e.isLineFeed,downable:e.downable,deletable:e.deletable},null);case"image":return t(q,{title:e.title,value:e.value,valueKey:e.valueKey,isStyle:e.isStyle,isApp:e.isApp,isLineFeed:e.isLineFeed},null);case"html":return t(W,{title:e.title,value:e.value},null);case"text":return e.lineClamp?t("span",{class:"line-clamp"},[e.value]):t("div",{class:"cell__value--hidded"},[t("p",{ref:"thisslot",class:{"cell__value--clamp":u.value&&!p.value}},[e.value]),u.value?t("div",{class:"btn"},[p.value?"":" ... ",t("span",{class:"btn__color",onClick:a},[p.value?"收起":"展开"])]):""])}};return()=>t("div",{class:["cell",e.isLineFeed&&"cell--line",m.value],style:s.value},[e.title||n.title?t("div",{class:{cell__title:!0,[i.value]:!0}},[n.title?n.title():t("span",null,[e.title])]):"",t("div",{class:{cell__value:!0,box__click:e.to||e.url},onClick:o},[n.value?n.value():d(e.type)])])}}),k=j({name:"JybCellGroup",inheritAttrs:!1,props:{title:String,inset:Boolean,isInside:Boolean,titleColor:{type:String,default:"#000"}},setup(e,{slots:c,attrs:n}){const u=c&&c.default&&c.default();return()=>t("div",{class:"cell-group",style:{"--titleColor":e.titleColor}},[e.isInside?"":e.title?t("div",{class:"cell-group__title"},[t("span",{class:"cell-group__title--line"},null),t("span",{class:"cell-group__title--text"},[c.title?c.title():e.title])]):"",u?t("div",me({class:["cell-group__box",{"cell-group__box--inset":e.inset}]},n),[e.isInside&&e.title?t("div",{class:["cell-group__title","cell-group__title--padding"]},[t("span",{class:"cell-group__title--line"},null),t("span",{class:"cell-group__title--text"},[c.title?c.title():e.title])]):"",u]):""])}});const oe=e=>(he("data-v-ac43b306"),e=e(),ye(),e),ut=oe(()=>T("span",null,"标题",-1)),ct=oe(()=>T("span",{class:"custom-value"},"自定义内容",-1)),rt={__name:"index",setup(e){const c=P('<img data-src="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg" src="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg" lazy="loaded"><p style="color: #4fc08d;">这是html类型文案</p><p style="color: #4994df;">这是html类型文案</p>'),n=L([{title:"标题",value:[{push:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/app/2021/11/1637053720879.png",name:"营业执照.jpg"}],type:"file",fileText:"该格式无法查看，请前往电脑端操作"},{title:"标题",value:[{fileUrl:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg",name:"营业执照营业执照营业执执照营业执照营业执照.jpg"},{fileUrl:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/qJENjNCAC73ins3IuH9n2.zip",name:"app规范9-18_slices.zip"}],type:"file",images:[{fileUrl:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg",name:"营业执照.jpg"},{fileUrl:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/mF7QVKy9qhNnlhV_aDDNk.jpeg",name:"小猫咪.jpg"},{fileUrl:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg",name:"营业执照.jpg"},{fileUrl:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/mF7QVKy9qhNnlhV_aDDNk.jpeg",name:"小猫咪.jpg"}],titleKey:"fileName",valueKey:"fileUrl"},{title:"标题",value:"https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg",type:"image"},{title:"标题",value:'<img data-src="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg" src="https://shigongbang.obs.cn-east-3.myhuaweicloud.com/2023/02/14/member_center/610000/2023024514454143241568.jpg" lazy="loaded"><p style="color: #4fc08d;">这是html类型文案</p><p style="color: #4994df;">这是html类型文案</p>',type:"html"}]);function u(r){le(JSON.stringify(r)),console.log(r,"---getClick")}function p(r){n=r.list}return(r,m)=>{const s=z("demo-block"),i=z("demo-section");return _(),S(K,null,[t(i,null,{default:f(()=>[x(" <jyb-fonst-scale></jyb-fonst-scale> "),t(s,{title:"基础用法"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{title:"标题标题标题标题",value:"超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起超出三行展开收起"}),t(l(v),{title:"标题文本标",value:"内容","title-color":"#4fc08d","value-color":"#5792fd",onClick:u}),t(l(v),{title:"标题文本",value:"内容","title-color":"#4fc08d","value-color":"#5792fd",onClick:u})]),_:1})]),_:1}),t(s,{title:"只设置 value"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{value:"内容"})]),_:1})]),_:1}),t(s,{title:"卡片风格"},{default:f(()=>[t(l(k),{inset:""},{default:f(()=>[t(l(v),{title:"标题文本",value:"一行显示、溢出隐藏;一行显示、溢出隐藏;一行显示、溢出隐藏;","line-clamp":"1"}),t(l(v),{title:"标题文本",value:"二行显示、溢出隐藏;二行显示、溢出隐藏;二行显示、溢出隐藏;二行显示、溢出隐藏;二行显示、溢出隐藏;","line-clamp":"2","title-color":"#4fc08d","value-color":"#5792fd",onClick:u})]),_:1})]),_:1}),t(s,{title:"页面导航"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{title:"URL 跳转",value:"打开经营帮h5",url:"https://m.jybtech.cn/"}),t(l(v),{title:"路由跳转",value:"打开top-bar",to:"jyb-nav-bar"})]),_:1})]),_:1}),t(s,{title:"分组标题"},{default:f(()=>[t(l(k),{title:"分组1"},{default:f(()=>[t(l(v),{title:"标题文本",value:"内容"})]),_:1}),t(l(k),{title:"分组2"},{default:f(()=>[t(l(v),{title:"标题文本",value:"内容"}),t(l(v),{title:"标题文本",value:"内容"})]),_:1})]),_:1}),t(s,{title:"标题显示在内部"},{default:f(()=>[t(l(k),{title:"标题文本","is-inside":""},{default:f(()=>[t(l(v),{title:"标题文本",value:"内容"}),t(l(v),{title:"标题文本",value:"内容"})]),_:1}),t(l(k),{title:"分组21111111111","title-color":"#B79255"})]),_:1}),t(s,{title:"type为file类型"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{type:"file",deletable:"",title:"标题文本",value:n[1].value},null,8,["value"]),t(l(v),{type:"file",title:"标题文本2",value:n[1].value,"file-text":"该格式无法查看，请前往电脑端操作"},null,8,["value"]),x(" type为file类型,图片分开展示 "),t(l(v),{type:"file",deletable:"",downable:"",onDelet:p,title:"标题文本",isLineFeed:"",value:n[1].value,"file-text":n[1].fileText},null,8,["value","file-text"])]),_:1})]),_:1}),t(s,{title:"html"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{type:"html",value:c.value,title:"标题文本",label:"标题下方的描述信息"},null,8,["value"])]),_:1})]),_:1}),t(s,{title:"type为image"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{type:"image",title:"标题文本",value:n[2].value},null,8,["value"]),x("多张图片数组,图片分开展示 "),t(l(v),{type:"image",title:"标题文本",value:n[1].images,"file-text":n[1].fileText},null,8,["value","file-text"]),t(l(v),{type:"image",title:"标题文本",isLineFeed:"",value:n[1].images,"file-text":n[1].fileText},null,8,["value","file-text"])]),_:1})]),_:1})]),_:1}),t(s,{title:"使用插槽"},{default:f(()=>[t(l(k),null,{default:f(()=>[t(l(v),{value:"内容"},{title:f(()=>[ut,t(l(Be),{round:"",type:"success"},{default:f(()=>[ve("标签")]),_:1})]),_:1}),t(l(v),{title:"标题文本"},{value:f(()=>[ct,t(l(U),{name:"map-marked"})]),_:1})]),_:1})]),_:1})],64)}}},kt=ae(rt,[["__scopeId","data-v-ac43b306"]]);export{kt as default};
