import{J as i,U as _}from"./index-1932c615.js";import{J as v}from"./index-a8f5e5fa.js";import{A as b,y as a,r as m,o as y,c as h,w as o,e,f as n,d as l,B as t,g as k}from"./vue-libs-9b0981d5.js";import{_ as g}from"./locales-ae98208f.js";import"./useArray-7b7e81ea.js";import"./index-137ae4a8.js";import"./use-touch-7ef5a55b.js";import"./use-route-8dafc2dc.js";import"./index-5a51eca5.js";import"./index-14647d2a.js";import"./index-9fc963e1.js";import"./index-ff210e3d.js";import"./index-c9c363c8.js";import"./function-call-1ec1bbbb.js";import"./useFontScale-afa8cc55.js";import"./index-fb8599c9.js";/* empty css                                                              */const U={class:"box-left"},j={class:"box-left"},z={class:"box-left"},C={class:"box-left"},B={class:"box-left"},L={class:"box-left"},w=b({__name:"index",setup(J){const r=a([]),p=a(null);a([{url:"https://zjkj-jyb-qgb.obs.cn-north-4.myhuaweicloud.com/zjkjTest/JYB/image/2023/2/VM1jYkUpUlL6b5THP6yNI.png"}]);const u=()=>{p.value.uploadFile().then(d=>{console.log(d)})};return(d,c)=>{const s=m("demo-block"),f=m("demo-section");return y(),h(f,null,{default:o(()=>[e(s,{title:"基础用法"},{default:o(()=>[n(" 直接上传 "),n(` accept=".zip,images/*" @oversize="oversize"  :maxCount='3' :maxSize="10485760" `),l("div",U,[e(t(i),{url:t(_),"file-list":r.value,"onUpdate:fileList":c[0]||(c[0]=x=>r.value=x),"is-auto":!0},null,8,["url","file-list"])])]),_:1}),e(s,{title:"手动上传"},{default:o(()=>[l("div",j,[n(' :fileList.sync="fileList1"   v-model="fileList1"  maxSize="100" :maxCount="3" fileType="images"'),e(t(i),{ref_key:"jybUploaderRef",ref:p,url:t(_)},null,8,["url"]),e(v,{size:"small",onClick:u},{default:o(()=>[k("点击上传")]),_:1})])]),_:1}),e(s,{title:"触发样式"},{default:o(()=>[l("div",z,[e(t(i),{"input-type":"button","input-text":"按钮样式"})]),e(t(i),{"input-type":"card","input-text":"卡片样式"})]),_:1}),e(s,{title:"展示样式-文件"},{default:o(()=>[l("div",C,[e(t(i),{"preview-type":"file"})])]),_:1}),e(s,{title:"提示语"},{default:o(()=>[l("div",B,[e(t(i),{"preview-type":"file",message:"测试一下提示语"})])]),_:1}),e(s,{title:"限制个数-单个上传"},{default:o(()=>[l("div",L,[e(t(i),{"max-count":"1"})])]),_:1})]),_:1})}}});const O=g(w,[["__scopeId","data-v-3d481dca"]]);export{O as default};
