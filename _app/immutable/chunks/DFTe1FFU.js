import{aj as C,ak as O,al as D,a3 as F,am as j,a0 as Y,an as I,O as B,G as H,I as U,ao as w,J as h,K as N,Q as M,M as m,X as W,ap as $,aq as G,a6 as J,_ as K,ar as Q,E as X,T as R,p as Z,ac as z,B as g,a as x,F as aa,R as ea,V as ra,W as ta,Y as k,U as L,as as sa}from"./DLVKTe8I.js";import{r as na}from"./CRkC7qCf.js";import{e as ia}from"./B2HswawM.js";const fa=["touchstart","touchmove"];function oa(a){return fa.includes(a)}const la=new Set,V=new Set;function b(a){var A;var r=this,s=r.ownerDocument,i=a.type,f=((A=a.composedPath)==null?void 0:A.call(a))||[],e=f[0]||a.target,o=0,u=a.__root;if(u){var d=f.indexOf(u);if(d!==-1&&(r===document||r===window)){a.__root=r;return}var _=f.indexOf(r);if(_===-1)return;d<=_&&(o=d)}if(e=f[o]||a.target,e!==r){C(a,"currentTarget",{configurable:!0,get(){return e||s}});var T=j,l=Y;O(null),D(null);try{for(var n,t=[];e!==null;){var c=e.assignedSlot||e.parentNode||e.host||null;try{var v=e["__"+i];if(v!=null&&(!e.disabled||a.target===e))if(F(v)){var[y,...q]=v;y.apply(e,[a,...q])}else v.call(e,a)}catch(E){n?t.push(E):n=E}if(a.cancelBubble||c===r||c===null)break;e=c}if(n){for(let E of t)queueMicrotask(()=>{throw E});throw n}}finally{a.__root=r,delete a.currentTarget,O(T),D(l)}}}function va(a,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=s,a.nodeValue=s+"")}function ua(a,r){return P(a,r)}function pa(a,r){I(),r.intro=r.intro??!1;const s=r.target,i=g,f=m;try{for(var e=B(s);e&&(e.nodeType!==8||e.data!==H);)e=U(e);if(!e)throw w;h(!0),N(e),M();const o=P(a,{...r,anchor:e});if(m===null||m.nodeType!==8||m.data!==W)throw $(),w;return h(!1),o}catch(o){if(o===w)return r.recover===!1&&G(),I(),J(s),h(!1),ua(a,r);throw o}finally{h(i),N(f),na()}}const p=new Map;function P(a,{target:r,anchor:s,props:i={},events:f,context:e,intro:o=!0}){I();var u=new Set,d=l=>{for(var n=0;n<l.length;n++){var t=l[n];if(!u.has(t)){u.add(t);var c=oa(t);r.addEventListener(t,b,{passive:c});var v=p.get(t);v===void 0?(document.addEventListener(t,b,{passive:c}),p.set(t,1)):p.set(t,v+1)}}};d(K(la)),V.add(d);var _=void 0,T=Q(()=>{var l=s??r.appendChild(X());return R(()=>{if(e){Z({});var n=z;n.c=e}f&&(i.$$events=f),g&&ia(l,null),_=a(l,i)||{},g&&(Y.nodes_end=m),e&&x()}),()=>{var c;for(var n of u){r.removeEventListener(n,b);var t=p.get(n);--t===0?(document.removeEventListener(n,b),p.delete(n)):p.set(n,t)}V.delete(d),l!==s&&((c=l.parentNode)==null||c.removeChild(l))}});return S.set(_,T),_}let S=new WeakMap;function ha(a,r){const s=S.get(a);return s?(S.delete(a),s(r)):Promise.resolve()}function ma(a,r,[s,i]=[0,0]){g&&s===0&&M();var f=a,e=null,o=null,u=sa,d=s>0?ea:0,_=!1;const T=(n,t=!0)=>{_=!0,l(t,n)},l=(n,t)=>{if(u===(u=n))return;let c=!1;if(g&&i!==-1){if(s===0){const y=f.data;y===H?i=0:y===ra?i=1/0:(i=parseInt(y.substring(1)),i!==i&&(i=u?1/0:-1))}const v=i>s;!!u===v&&(f=ta(),N(f),h(!1),c=!0,i=-1)}u?(e?k(e):t&&(e=R(()=>t(f))),o&&L(o,()=>{o=null})):(o?k(o):t&&(o=R(()=>t(f,[s+1,i]))),e&&L(e,()=>{e=null})),c&&h(!0)};aa(()=>{_=!1,r(T),_||l(null,null)},d),g&&(f=m)}export{pa as h,ma as i,ua as m,va as s,ha as u};
