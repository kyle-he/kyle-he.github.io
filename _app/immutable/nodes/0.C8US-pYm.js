import{t as A,a as S,s as q,b as z}from"../chunks/B2HswawM.js";import{i as B,p as H}from"../chunks/DqQv2HVU.js";import{B as p,Q as K,p as L,s as v,f as M,t as P,a as Q,c as u,r as c,j as T}from"../chunks/DLVKTe8I.js";import{s as d}from"../chunks/DUgwhGiq.js";import{b as h}from"../chunks/0JAQ-WHv.js";function W(l,n,i,e,r){var s;p&&K();var t=(s=n.$$slots)==null?void 0:s[i],a=!1;t===!0&&(t=n.children,a=!0),t===void 0||t(l,a?()=>e:e)}const w=[...` 	
\r\f \v\uFEFF`];function C(l,n,i){var e=""+l;if(i){for(var r in i)if(i[r])e=e?e+" "+r:r;else if(e.length)for(var t=r.length,a=0;(a=e.indexOf(r,a))>=0;){var s=a+t;(a===0||w.includes(e[a-1]))&&(s===e.length||w.includes(e[s]))?e=(a===0?"":e.substring(0,a))+e.substring(s+1):a=s}}return e===""?null:e}function $(l,n,i,e,r,t){var a=l.__className;if(p||a!==i){var s=C(i,e,t);(!p||s!==l.getAttribute("class"))&&(s==null?l.removeAttribute("class"):l.className=s),l.__className=i}else if(t&&r!==t)for(var f in t){var o=!!t[f];(r==null||o!==!!r[f])&&l.classList.toggle(f,o)}return t}const D=!0,E=!1,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:D,ssr:E},Symbol.toStringTag,{value:"Module"}));var F=A('<head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></head> <div class="container mx-auto max-w-3xl p-4"><div class="flex flex-col sm:flex-row sm:items-center justify-between mt-8 gap-4 sm:gap-0"><a class="font-serif text-2xl sm:text-3xl font-semibold text-center sm:text-left">Kyle He</a> <nav class="font-serif text-base flex items-center justify-center sm:justify-end"><div class="w-[2.5rem] text-center"><a>blog</a></div> <span class="mx-2">/</span> <div class="w-[3.5rem] text-center"><a>resume</a></div></nav></div> <!></div>',1);function X(l,n){L(n,!1);const[i,e]=q(),r=()=>z(H,"$page",i);B();var t=F(),a=v(M(t),2),s=u(a),f=u(s);d(f,"href",`${h??""}/`);var o=v(f,2),m=u(o),b=u(m);d(b,"href",`${h??""}/blog`);let g;c(m);var _=v(m,4),x=u(_);d(x,"href",`${h??""}/resume`);let j;c(_),c(o),c(s);var y=v(s,2);W(y,n,"default",{}),c(a),P((N,O)=>{g=$(b,1,"text-blue-700 hover:underline transition duration-300",null,g,N),j=$(x,1,"text-blue-700 hover:underline transition duration-300",null,j,O)},[()=>({"font-bold":r().url.pathname.startsWith("/blog")}),()=>({"font-bold":r().url.pathname==="/resume"})],T),S(l,t),Q(),e()}export{X as component,V as universal};
