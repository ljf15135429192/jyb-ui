import{O as m,N as p,S as g,q as C}from"./vue-libs-9b0981d5.js";function y(r={gloal:!1,reset:!1}){const{gloal:c,reset:f}=r,t=c?document.querySelector(":root"):m();let n;c&&t instanceof Element&&(n=window.getComputedStyle(t));const o={},i=(e,s,l)=>{n=window.getComputedStyle(e),o[s]||(o[s]=a(s)),e==null||e.style.setProperty(s,l)},u=(e,s)=>{c?i(t,e,s):C(()=>{var l;if(!(t instanceof Element)){const d=(l=t==null?void 0:t.vnode)==null?void 0:l.el;i(d,e,s)}})},a=e=>n==null?void 0:n.getPropertyValue(e);return p(()=>{var e;t instanceof Element||(n=window.getComputedStyle((e=t==null?void 0:t.vnode)==null?void 0:e.el))}),g(()=>{if(console.log("执行了list :>> ",o),f)for(const e in o)Object.prototype.hasOwnProperty.call(o,e)&&i(t,e,o[e])}),{setCssVar:u,getCssVar:a}}export{y as u};