import{t as O,h as S,a as j,s as q,b as z}from"../chunks/BQQhW9Qe.js";import{i as B,p as F}from"../chunks/C7aHuJX5.js";import{B as g,F as H,p as K,t as L,a as M,c as m,s as h,r as u,j as P}from"../chunks/BrQfsZ0w.js";import{s as p}from"../chunks/BzXgSeeD.js";import{b as d}from"../chunks/AQ1WUPqA.js";function T(r,n,l,e,i){var s;g&&H();var t=(s=n.$$slots)==null?void 0:s[l],a=!1;t===!0&&(t=n.children,a=!0),t===void 0||t(r,a?()=>e:e)}const y=[...` 	
\r\f \v\uFEFF`];function W(r,n,l){var e=""+r;if(l){for(var i in l)if(l[i])e=e?e+" "+i:i;else if(e.length)for(var t=i.length,a=0;(a=e.indexOf(i,a))>=0;){var s=a+t;(a===0||y.includes(e[a-1]))&&(s===e.length||y.includes(e[s]))?e=(a===0?"":e.substring(0,a))+e.substring(s+1):a=s}}return e===""?null:e}function N(r,n,l,e,i,t){var a=r.__className;if(g||a!==l){var s=W(l,e,t);(!g||s!==r.getAttribute("class"))&&(s==null?r.removeAttribute("class"):r.className=s),r.__className=l}else if(t&&i!==t)for(var o in t){var f=!!t[o];(i==null||f!==!!i[o])&&r.classList.toggle(o,f)}return t}const C=!0,D=!0,V=Object.freeze(Object.defineProperty({__proto__:null,prerender:C,ssr:D},Symbol.toStringTag,{value:"Module"}));var E=O('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">'),G=O('<div class="container mx-auto max-w-3xl p-4"><div class="flex items-start min-[480px]:items-center justify-between mt-8"><a class="font-serif text-3xl font-semibold">Kyle He</a> <nav class="font-serif text-base flex flex-col min-[480px]:flex-row items-end min-[480px]:items-center"><div class="text-right min-[480px]:w-[2.5rem] min-[480px]:text-center"><a>blog</a></div> <span class="hidden min-[480px]:inline mx-2">/</span> <div class="text-right min-[480px]:w-[3.5rem] min-[480px]:text-center mt-1 min-[480px]:mt-0"><a>resume</a></div></nav></div> <!></div>');function X(r,n){K(n,!1);const[l,e]=q(),i=()=>z(F,"$page",l);B();var t=G();S(c=>{var v=E();j(c,v)});var a=m(t),s=m(a);p(s,"href",`${d??""}/`);var o=h(s,2),f=m(o),b=m(f);p(b,"href",`${d??""}/blog`);let x;u(f);var _=h(f,4),w=m(_);p(w,"href",`${d??""}/resume`);let $;u(_),u(o),u(a);var A=h(a,2);T(A,n,"default",{}),u(t),L((c,v)=>{x=N(b,1,"link-highlight",null,x,c),$=N(w,1,"link-highlight",null,$,v)},[()=>({"font-bold":i().url.pathname.startsWith("/blog")}),()=>({"font-bold":i().url.pathname==="/resume"})],P),j(r,t),M(),e()}export{X as component,V as universal};
