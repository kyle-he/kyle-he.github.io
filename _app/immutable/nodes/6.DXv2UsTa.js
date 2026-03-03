import{t as Ct,a as Et,f as Hi,c as xu}from"../chunks/C6zT8n4T.js";import{i as Ro}from"../chunks/WTAFqMLX.js";import{j as eo,k as Mu,O as Ou,L as Lu,p as So,X as Zs,Z as N,J as yt,ax as Pa,Y as qc,c as ut,g as v,s as Vt,r as ot,t as Zt,m as Oe,a as bo,aK as Fu,ah as Uu,aL as Bu,f as mr,n as Gs}from"../chunks/QZo_flVt.js";import{s as no}from"../chunks/A7XwNNtU.js";import{i as ye}from"../chunks/CwLF0HRe.js";import{e as gr,i as rs}from"../chunks/CKMoo3YY.js";import{s as mn,a as $u}from"../chunks/DSMYfwqr.js";import{t as qu,s as Va,a as Ee}from"../chunks/CCGA2w1I.js";import{e as qt}from"../chunks/BaprkmMV.js";import{b as jc}from"../chunks/B5elikI5.js";import{M as ju}from"../chunks/VFKqRSxi.js";import{p as Ke}from"../chunks/ChjhM4qK.js";import{b as Jt,c as zu}from"../chunks/DhCKQwHf.js";function Hu(n){eo&&Mu(n)!==null&&Ou(n)}function Me(n,t,e,r){var s=n.__style;if(eo||s!==t){var o=qu(t);(!eo||o!==n.getAttribute("style"))&&(o==null?n.removeAttribute("style"):n.style.cssText=o),n.__style=t}return r}function Gu(n,t){var o;var e=(o=n.$$events)==null?void 0:o[t.type],r=Lu(e)?e.slice():e==null?[]:[e];for(var s of r)s.call(this,t)}var Wu=Ct('<div class="polaroid-bg-cover svelte-s3ace8" aria-hidden="true"></div>'),Ku=Ct('<img class="polaroid-bg svelte-s3ace8" alt="" aria-hidden="true">'),Qu=Ct('<div><div><!> <!> <!></div> <span class="polaroid-date svelte-s3ace8"> </span> <div class="polaroid-footer svelte-s3ace8"><!></div> <img alt="" class="polaroid-overlay svelte-s3ace8" aria-hidden="true"></div>');function Da(n,t){So(t,!1);let e=Ke(t,"date",8,""),r=Ke(t,"backgroundUrl",8,""),s=Ke(t,"innerEl",12,void 0),o=Ke(t,"mini",8,!1),a=Ke(t,"shadow",8,!1),u=yt(""),h=yt(!0),d=0,m=yt(0);function T(){return`https://picsum.photos/id/${Math.floor(Math.random()*200)}/600/600.jpg`}function A(E){if(!E){N(h,!1),N(u,"");return}d+=1;const y=d;N(h,!0),N(u,"");const p=new Image;p.onload=()=>{y===d&&(N(u,E),N(h,!1))},p.onerror=()=>{y===d&&(v(m)<5?(N(m,v(m)+1),A(T())):N(h,!1))},p.src=E}Zs(()=>(Pa(r()),Pa(o())),()=>{r()!==void 0&&(N(m,0),o()?(N(u,r()),N(h,!1)):A(r()))}),qc(),Ro();var P=Qu();let O;var F=ut(P);let L;var Y=ut(F);{var G=E=>{var y=Wu();Et(E,y)};ye(Y,E=>{!o()&&v(h)&&E(G)})}var W=Vt(Y,2);{var ht=E=>{var y=Ku();Zt(()=>mn(y,"src",v(u))),Et(E,y)};ye(W,E=>{v(u)&&E(ht)})}var dt=Vt(W,2);Va(dt,t,"canvas",{}),ot(F),jc(F,E=>s(E),()=>s());var nt=Vt(F,2),I=ut(nt,!0);ot(nt);var g=Vt(nt,2),_=ut(g);Va(_,t,"footer",{}),ot(g);var w=Vt(g,2);mn(w,"src",`${Jt??""}/images/polaroid.png`),ot(P),Zt((E,y)=>{O=Ee(P,1,"polaroid-frame svelte-s3ace8",null,O,E),L=Ee(F,1,"polaroid-inner svelte-s3ace8",null,L,y),no(I,e())},[()=>({mini:o(),shadow:a()}),()=>({loading:!o()&&v(h)})],Oe),Et(n,P),bo()}var Yu=Ct('<button type="button" class="palette-button svelte-1t30eac"><img alt="sticker option" loading="lazy" draggable="false"></button>'),Xu=Ct('<aside class="palette svelte-1t30eac"><p class="palette-title svelte-1t30eac"><span class="palette-title-text svelte-1t30eac">add stickers!</span> <button type="button" title="Reload"><span class="reload-tilt svelte-1t30eac"><span class="reload-spin svelte-1t30eac"><img alt="Reload" class="reload-icon svelte-1t30eac"></span></span></button></p> <div></div></aside>');function Ju(n,t){So(t,!1);let e=Ke(t,"stickers",24,()=>[]),r=Ke(t,"draggingSrc",8,null),s=Ke(t,"maxHeight",8,0),o=Ke(t,"phase",8,null);const a=Fu();let u=yt(!1);function h(W,ht){W.preventDefault();const nt=W.currentTarget.querySelector("img").getBoundingClientRect();a("dragstart",{src:ht,clientX:W.clientX,clientY:W.clientY,imgWidth:nt.width,imgHeight:nt.height,offsetX:W.clientX-nt.left,offsetY:W.clientY-nt.top})}function d(){N(u,!1),requestAnimationFrame(()=>{N(u,!0)})}Ro();var m=Xu(),T=ut(m),A=Vt(ut(T),2);let P;var O=ut(A),F=ut(O),L=ut(F);mn(L,"src",`${Jt??""}/images/reload.png`),ot(F),ot(O),ot(A),ot(T);var Y=Vt(T,2);let G;gr(Y,5,e,rs,(W,ht)=>{var dt=Yu(),nt=ut(dt);let I;ot(dt),Zt(g=>{mn(nt,"src",v(ht)),I=Ee(nt,1,"palette-image svelte-1t30eac",null,I,g),Me(nt,s()?`max-height: ${s()}px; height: auto;`:"")},[()=>({dragging:r()===v(ht)})],Oe),qt("pointerdown",dt,g=>h(g,v(ht))),Et(W,dt)}),ot(Y),ot(m),Zt((W,ht)=>{P=Ee(A,1,"reload-button svelte-1t30eac",null,P,W),G=Ee(Y,1,"palette-grid svelte-1t30eac",null,G,ht)},[()=>({spinning:v(u)}),()=>({"palette-out":o()==="out","palette-in":o()==="in"})],Oe),qt("click",A,()=>{d(),a("reload")}),qt("animationend",A,()=>N(u,!1)),qt("animationend",Y,function(W){Gu.call(this,t,W)}),Et(n,m),bo()}const Zu=()=>{};var ka={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},th=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Hc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),r.push(e[m],e[T],e[A],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(zc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):th(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new eh;const A=o<<2|u>>4;if(r.push(A),d!==64){const P=u<<4&240|d>>2;if(r.push(P),T!==64){const O=d<<6&192|T;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nh=function(n){const t=zc(n);return Hc.encodeByteArray(t,!0)},oi=function(n){return nh(n).replace(/\./g,"")},rh=function(n){try{return Hc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=()=>sh().__FIREBASE_DEFAULTS__,oh=()=>{if(typeof process>"u"||typeof ka>"u")return;const n=ka.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ah=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&rh(n[1]);return t&&JSON.parse(t)},Co=()=>{try{return Zu()||ih()||oh()||ah()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ch=n=>{var t,e;return(e=(t=Co())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},lh=n=>{const t=ch(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Gc=()=>{var n;return(n=Co())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function hh(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[oi(JSON.stringify(e)),oi(JSON.stringify(a)),""].join(".")}const as={};function fh(){const n={prod:[],emulator:[]};for(const t of Object.keys(as))as[t]?n.emulator.push(t):n.prod.push(t);return n}function mh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Na=!1;function gh(n,t){if(typeof window>"u"||typeof document>"u"||!Po(window.location.host)||as[n]===t||as[n]||Na)return;as[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=fh().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Na=!0,a()},A}function m(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=mh(r),P=e("text"),O=document.getElementById(P)||document.createElement("span"),F=e("learnmore"),L=document.getElementById(F)||document.createElement("a"),Y=e("preprendIcon"),G=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const W=A.element;u(W),m(L,F);const ht=d();h(G,Y),W.append(G,O,L,ht),document.body.appendChild(W)}o?(O.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(G.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _h(){var t;const n=(t=Co())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yh(){return!_h()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Eh(){try{return typeof indexedDB=="object"}catch{return!1}}function vh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="FirebaseError";class kr extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Th,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wc.prototype.create)}}class Wc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Ih(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new kr(s,u,r)}}function Ih(n,t){return n.replace(wh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const wh=/\{\$([^}]+)}/g;function ai(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(xa(o)&&xa(a)){if(!ai(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function xa(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n){return n&&n._delegate?n._delegate:n}class hs{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new uh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Sh(t))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bn){return this.instances.has(t)}getOptions(t=Bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bn){return this.component?this.component.multipleInstances?t:Bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rh(n){return n===Bn?void 0:n}function Sh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ah(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var et;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(et||(et={}));const Ch={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},Ph=et.INFO,Vh={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Dh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Vh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kc{constructor(t){this.name=t,this._logLevel=Ph,this._logHandler=Dh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Ch[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const kh=(n,t)=>t.some(e=>n instanceof e);let Ma,Oa;function Nh(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xh(){return Oa||(Oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qc=new WeakMap,ro=new WeakMap,Yc=new WeakMap,Gi=new WeakMap,Vo=new WeakMap;function Mh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(pn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Qc.set(e,n)}).catch(()=>{}),Vo.set(t,n),t}function Oh(n){if(ro.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ro.set(n,t)}let so={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ro.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Yc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return pn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Lh(n){so=n(so)}function Fh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Wi(this),t,...e);return Yc.set(r,t.sort?t.sort():[t]),pn(r)}:xh().includes(n)?function(...t){return n.apply(Wi(this),t),pn(Qc.get(this))}:function(...t){return pn(n.apply(Wi(this),t))}}function Uh(n){return typeof n=="function"?Fh(n):(n instanceof IDBTransaction&&Oh(n),kh(n,Nh())?new Proxy(n,so):n)}function pn(n){if(n instanceof IDBRequest)return Mh(n);if(Gi.has(n))return Gi.get(n);const t=Uh(n);return t!==n&&(Gi.set(n,t),Vo.set(t,n)),t}const Wi=n=>Vo.get(n);function Bh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=pn(a);return r&&a.addEventListener("upgradeneeded",h=>{r(pn(a.result),h.oldVersion,h.newVersion,pn(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const $h=["get","getKey","getAll","getAllKeys","count"],qh=["put","add","delete","clear"],Ki=new Map;function La(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ki.get(t))return Ki.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=qh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||$h.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Ki.set(t,o),o}Lh(n=>({...n,get:(t,e,r)=>La(t,e)||n.get(t,e,r),has:(t,e)=>!!La(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(zh(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function zh(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const io="@firebase/app",Fa="0.14.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=new Kc("@firebase/app"),Hh="@firebase/app-compat",Gh="@firebase/analytics-compat",Wh="@firebase/analytics",Kh="@firebase/app-check-compat",Qh="@firebase/app-check",Yh="@firebase/auth",Xh="@firebase/auth-compat",Jh="@firebase/database",Zh="@firebase/data-connect",td="@firebase/database-compat",ed="@firebase/functions",nd="@firebase/functions-compat",rd="@firebase/installations",sd="@firebase/installations-compat",id="@firebase/messaging",od="@firebase/messaging-compat",ad="@firebase/performance",cd="@firebase/performance-compat",ld="@firebase/remote-config",ud="@firebase/remote-config-compat",hd="@firebase/storage",dd="@firebase/storage-compat",fd="@firebase/firestore",md="@firebase/ai",gd="@firebase/firestore-compat",pd="firebase",_d="12.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="[DEFAULT]",yd={[io]:"fire-core",[Hh]:"fire-core-compat",[Wh]:"fire-analytics",[Gh]:"fire-analytics-compat",[Qh]:"fire-app-check",[Kh]:"fire-app-check-compat",[Yh]:"fire-auth",[Xh]:"fire-auth-compat",[Jh]:"fire-rtdb",[Zh]:"fire-data-connect",[td]:"fire-rtdb-compat",[ed]:"fire-fn",[nd]:"fire-fn-compat",[rd]:"fire-iid",[sd]:"fire-iid-compat",[id]:"fire-fcm",[od]:"fire-fcm-compat",[ad]:"fire-perf",[cd]:"fire-perf-compat",[ld]:"fire-rc",[ud]:"fire-rc-compat",[hd]:"fire-gcs",[dd]:"fire-gcs-compat",[fd]:"fire-fst",[gd]:"fire-fst-compat",[md]:"fire-vertex","fire-js":"fire-js",[pd]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map,Ed=new Map,ao=new Map;function Ua(n,t){try{n.container.addComponent(t)}catch(e){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ci(n){const t=n.name;if(ao.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;ao.set(t,n);for(const e of ds.values())Ua(e,n);for(const e of Ed.values())Ua(e,n);return!0}function vd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Td(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Wc("app","Firebase",Id);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=_d;function Xc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:oo,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(e||(e=Gc()),!e)throw _n.create("no-options");const o=ds.get(s);if(o){if(ai(e,o.options)&&ai(r,o.config))return o;throw _n.create("duplicate-app",{appName:s})}const a=new bh(s);for(const h of ao.values())a.addComponent(h);const u=new wd(e,r,a);return ds.set(s,u),u}function Jc(n=oo){const t=ds.get(n);if(!t&&n===oo&&Gc())return Xc();if(!t)throw _n.create("no-app",{appName:n});return t}function Rd(){return Array.from(ds.values())}function vr(n,t,e){let r=yd[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ye.warn(a.join(" "));return}ci(new hs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="firebase-heartbeat-database",bd=1,fs="firebase-heartbeat-store";let Qi=null;function Zc(){return Qi||(Qi=Bh(Sd,bd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(fs)}catch(e){console.warn(e)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function Cd(n){try{const e=(await Zc()).transaction(fs),r=await e.objectStore(fs).get(tl(n));return await e.done,r}catch(t){if(t instanceof kr)Ye.warn(t.message);else{const e=_n.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(e.message)}}}async function Ba(n,t){try{const r=(await Zc()).transaction(fs,"readwrite");await r.objectStore(fs).put(t,tl(n)),await r.done}catch(e){if(e instanceof kr)Ye.warn(e.message);else{const r=_n.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(r.message)}}}function tl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=1024,Vd=30;class Dd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$a();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Vd){const a=xd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$a(),{heartbeatsToSend:r,unsentEntries:s}=kd(this._heartbeatsCache.heartbeats),o=oi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ye.warn(e),""}}}function $a(){return new Date().toISOString().substring(0,10)}function kd(n,t=Pd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),qa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),qa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Nd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Eh()?vh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Cd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ba(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ba(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function qa(n){return oi(JSON.stringify({version:2,heartbeats:n})).length}function xd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Md(n){ci(new hs("platform-logger",t=>new jh(t),"PRIVATE")),ci(new hs("heartbeat",t=>new Dd(t),"PRIVATE")),vr(io,Fa,n),vr(io,Fa,"esm2020"),vr("fire-js","")}Md("");var Od="firebase",Ld="12.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vr(Od,Ld,"app");var ja=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn,el;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function _(){}_.prototype=g.prototype,I.F=g.prototype,I.prototype=new _,I.prototype.constructor=I,I.D=function(w,E,y){for(var p=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)p[Mt-2]=arguments[Mt];return g.prototype[E].apply(w,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,_){_||(_=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=I.g[0],_=I.g[1],E=I.g[2];let y=I.g[3],p;p=g+(y^_&(E^y))+w[0]+3614090360&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[1]+3905402710&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[2]+606105819&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(y^_&(E^y))+w[4]+4118548399&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[5]+1200080426&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[6]+2821735955&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(y^_&(E^y))+w[8]+1770035416&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[9]+2336552879&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[10]+4294925233&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(y^_&(E^y))+w[12]+1804603682&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[13]+4254626195&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[14]+2792965006&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(E^y&(_^E))+w[1]+4129170786&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[6]+3225465664&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[11]+643717713&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^y&(_^E))+w[5]+3593408605&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[10]+38016083&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[15]+3634488961&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^y&(_^E))+w[9]+568446438&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[14]+3275163606&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[3]+4107603335&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^y&(_^E))+w[13]+2850285829&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[2]+4243563512&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[7]+1735328473&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(_^E^y)+w[5]+4294588738&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[8]+2272392833&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[11]+1839030562&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^y)+w[1]+2763975236&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[4]+1272893353&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[7]+4139469664&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^y)+w[13]+681279174&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[0]+3936430074&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[3]+3572445317&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^y)+w[9]+3654602809&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[12]+3873151461&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[15]+530742520&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(E^(_|~y))+w[0]+4096336452&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[7]+1126891415&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[14]+2878612391&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~y))+w[12]+1700485571&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[3]+2399980690&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[10]+4293915773&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~y))+w[8]+1873313359&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[15]+4264355552&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[6]+2734768916&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~y))+w[4]+4149444226&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[11]+3174756917&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[2]+718787259&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+y&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const _=g-this.blockSize,w=this.C;let E=this.h,y=0;for(;y<g;){if(E==0)for(;y<=_;)s(this,I,y),y+=this.blockSize;if(typeof I=="string"){for(;y<g;)if(w[E++]=I.charCodeAt(y++),E==this.blockSize){s(this,w),E=0;break}}else for(;y<g;)if(w[E++]=I[y++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var _=I.length-8;_<I.length;++_)I[_]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)I[g++]=this.g[_]>>>w&255;return I};function o(I,g){var _=u;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=g(I)}function a(I,g){this.h=g;const _=[];let w=!0;for(let E=I.length-1;E>=0;E--){const y=I[E]|0;w&&y==g||(_[E]=y,w=!1)}this.g=_}var u={};function h(I){return-128<=I&&I<128?o(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return T;if(I<0)return L(d(-I));const g=[];let _=1;for(let w=0;I>=_;w++)g[w]=I/_|0,_*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return L(m(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let w=T;for(let y=0;y<I.length;y+=8){var E=Math.min(8,I.length-y);const p=parseInt(I.substring(y,y+E),g);E<8?(E=d(Math.pow(g,E)),w=w.j(E).add(d(p))):(w=w.j(_),w=w.add(d(p)))}return w}var T=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(F(this))return-L(this).m();let I=0,g=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);I+=(w>=0?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(O(this))return"0";if(F(this))return"-"+L(this).toString(I);const g=d(Math.pow(I,6));var _=this;let w="";for(;;){const E=ht(_,g).g;_=Y(_,E.j(g));let y=((_.g.length>0?_.g[0]:_.h)>>>0).toString(I);if(_=E,O(_))return y+w;for(;y.length<6;)y="0"+y;w=y+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function O(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function F(I){return I.h==-1}n.l=function(I){return I=Y(this,I),F(I)?-1:O(I)?0:1};function L(I){const g=I.g.length,_=[];for(let w=0;w<g;w++)_[w]=~I.g[w];return new a(_,~I.h).add(A)}n.abs=function(){return F(this)?L(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),_=[];let w=0;for(let E=0;E<=g;E++){let y=w+(this.i(E)&65535)+(I.i(E)&65535),p=(y>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=p>>>16,y&=65535,p&=65535,_[E]=p<<16|y}return new a(_,_[_.length-1]&-2147483648?-1:0)};function Y(I,g){return I.add(L(g))}n.j=function(I){if(O(this)||O(I))return T;if(F(this))return F(I)?L(this).j(L(I)):L(L(this).j(I));if(F(I))return L(this.j(L(I)));if(this.l(P)<0&&I.l(P)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,_=[];for(var w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const y=this.i(w)>>>16,p=this.i(w)&65535,Mt=I.i(E)>>>16,ne=I.i(E)&65535;_[2*w+2*E]+=p*ne,G(_,2*w+2*E),_[2*w+2*E+1]+=y*ne,G(_,2*w+2*E+1),_[2*w+2*E+1]+=p*Mt,G(_,2*w+2*E+1),_[2*w+2*E+2]+=y*Mt,G(_,2*w+2*E+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new a(_,0)};function G(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function W(I,g){this.g=I,this.h=g}function ht(I,g){if(O(g))throw Error("division by zero");if(O(I))return new W(T,T);if(F(I))return g=ht(L(I),g),new W(L(g.g),L(g.h));if(F(g))return g=ht(I,L(g)),new W(L(g.g),g.h);if(I.g.length>30){if(F(I)||F(g))throw Error("slowDivide_ only works with positive integers.");for(var _=A,w=g;w.l(I)<=0;)_=dt(_),w=dt(w);var E=nt(_,1),y=nt(w,1);for(w=nt(w,2),_=nt(_,2);!O(w);){var p=y.add(w);p.l(I)<=0&&(E=E.add(_),y=p),w=nt(w,1),_=nt(_,1)}return g=Y(I,E.j(g)),new W(E,g)}for(E=T;I.l(g)>=0;){for(_=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),y=d(_),p=y.j(g);F(p)||p.l(I)>0;)_-=w,y=d(_),p=y.j(g);O(y)&&(y=A),E=E.add(y),I=Y(I,p)}return new W(E,I)}n.B=function(I){return ht(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)&I.i(w);return new a(_,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)|I.i(w);return new a(_,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)^I.i(w);return new a(_,this.h^I.h)};function dt(I){const g=I.g.length+1,_=[];for(let w=0;w<g;w++)_[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(_,I.h)}function nt(I,g){const _=g>>5;g%=32;const w=I.g.length-_,E=[];for(let y=0;y<w;y++)E[y]=g>0?I.i(y+_)>>>g|I.i(y+_+1)<<32-g:I.i(y+_);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,el=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,yn=a}).apply(typeof ja<"u"?ja:typeof self<"u"?self:typeof window<"u"?window:{});var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nl,ss,rl,ti,co,sl,il,ol;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ws=="object"&&Ws];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var S=i[f];if(!(S in l))break t;l=l[S]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function m(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function T(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,S,b){for(var x=Array(arguments.length-2),X=2;X<arguments.length;X++)x[X-2]=arguments[X];return c.prototype[S].apply(f,x)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function O(i,c){for(let f=1;f<arguments.length;f++){const S=arguments[f];var l=typeof S;if(l=l!="object"?l:S?Array.isArray(S)?"array":l:"null",l=="array"||l=="object"&&typeof S.length=="number"){l=i.length||0;const b=S.length||0;i.length=l+b;for(let x=0;x<b;x++)i[l+x]=S[x]}else i.push(S)}}class F{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(i){a.setTimeout(()=>{throw i},0)}function Y(){var i=I;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class G{constructor(){this.h=this.g=null}add(c,l){const f=W.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var W=new F(()=>new ht,i=>i.reset());class ht{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let dt,nt=!1,I=new G,g=()=>{const i=Promise.resolve(void 0);dt=()=>{i.then(_)}};function _(){for(var i;i=Y();){try{i.h.call(i.g)}catch(l){L(l)}var c=W;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}nt=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i}();function p(i){return/^[\s\xa0]*$/.test(i)}function Mt(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}T(Mt,E),Mt.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Mt.Z.h.call(this)},Mt.prototype.h=function(){Mt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),St=0;function tn(i,c,l,f,S){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=S,this.key=++St,this.da=this.fa=!1}function bt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function we(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function en(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function qe(i){const c={};for(const l in i)c[l]=i[l];return c}const Lr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fr(i,c){let l,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(l in f)i[l]=f[l];for(let b=0;b<Lr.length;b++)l=Lr[b],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function bn(i){this.src=i,this.g={},this.h=0}bn.prototype.add=function(i,c,l,f,S){const b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);const x=de(i,c,f,S);return x>-1?(c=i[x],l||(c.fa=!1)):(c=new tn(c,this.src,b,!!f,S),c.fa=l,i.push(c)),c};function Xn(i,c){const l=c.type;if(l in i.g){var f=i.g[l],S=Array.prototype.indexOf.call(f,c,void 0),b;(b=S>=0)&&Array.prototype.splice.call(f,S,1),b&&(bt(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function de(i,c,l,f){for(let S=0;S<i.length;++S){const b=i[S];if(!b.da&&b.listener==c&&b.capture==!!l&&b.ha==f)return S}return-1}var Ae="closure_lm_"+(Math.random()*1e6|0),nn={};function Ur(i,c,l,f,S){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Ur(i,c[b],l,f,S);return null}return l=je(l),i&&i[ne]?i.J(c,l,u(f)?!!f.capture:!1,S):bs(i,c,l,!1,f,S)}function bs(i,c,l,f,S,b){if(!c)throw Error("Invalid event type");const x=u(S)?!!S.capture:!!S;let X=Zn(i);if(X||(i[Ae]=X=new bn(i)),l=X.add(c,l,f,x,b),l.proxy)return l;if(f=Cs(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)y||(S=x),S===void 0&&(S=!1),i.addEventListener(c.toString(),f,S);else if(i.attachEvent)i.attachEvent($r(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Cs(){function i(l){return c.call(i.src,i.listener,l)}const c=Cn;return i}function Br(i,c,l,f,S){if(Array.isArray(c))for(var b=0;b<c.length;b++)Br(i,c[b],l,f,S);else f=u(f)?!!f.capture:!!f,l=je(l),i&&i[ne]?(i=i.i,b=String(c).toString(),b in i.g&&(c=i.g[b],l=de(c,l,f,S),l>-1&&(bt(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[b],i.h--)))):i&&(i=Zn(i))&&(c=i.g[c.toString()],i=-1,c&&(i=de(c,l,f,S)),(l=i>-1?c[i]:null)&&Jn(l))}function Jn(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[ne])Xn(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent($r(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Zn(c))?(Xn(l,i),l.h==0&&(l.src=null,c[Ae]=null)):bt(i)}}}function $r(i){return i in nn?nn[i]:nn[i]="on"+i}function Cn(i,c){if(i.da)i=!0;else{c=new Mt(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Jn(i),i=l.call(f,c)}return i}function Zn(i){return i=i[Ae],i instanceof bn?i:null}var Re="__closure_events_fn_"+(Math.random()*1e9>>>0);function je(i){return typeof i=="function"?i:(i[Re]||(i[Re]=function(c){return i.handleEvent(c)}),i[Re])}function Ot(){w.call(this),this.i=new bn(this),this.M=this,this.G=null}T(Ot,w),Ot.prototype[ne]=!0,Ot.prototype.removeEventListener=function(i,c,l,f){Br(this,i,c,l,f)};function Bt(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var S=c;c=new E(f,i),Fr(c,S)}S=!0;let b,x;if(l)for(x=l.length-1;x>=0;x--)b=c.g=l[x],S=rn(b,f,!0,c)&&S;if(b=c.g=i,S=rn(b,f,!0,c)&&S,S=rn(b,f,!1,c)&&S,l)for(x=0;x<l.length;x++)b=c.g=l[x],S=rn(b,f,!1,c)&&S}Ot.prototype.N=function(){if(Ot.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)bt(l[f]);delete i.g[c],i.h--}}this.G=null},Ot.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},Ot.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function rn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let S=!0;for(let b=0;b<c.length;++b){const x=c[b];if(x&&!x.da&&x.capture==l){const X=x.listener,Ft=x.ha||x.src;x.fa&&Xn(i.i,x),S=X.call(Ft,f)!==!1&&S}}return S&&!f.defaultPrevented}function qr(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function tr(i){i.g=qr(()=>{i.g=null,i.i&&(i.i=!1,tr(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class H extends w{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:tr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Se(i){w.call(this),this.h=i,this.g={}}T(Se,w);var sn=[];function be(i){we(i.g,function(c,l){this.g.hasOwnProperty(l)&&Jn(c)},i),i.g={}}Se.prototype.N=function(){Se.Z.N.call(this),be(this)},Se.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=a.JSON.stringify,on=a.JSON.parse,Li=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function zr(){}function Hr(){}var Ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function an(){E.call(this,"d")}T(an,E);function Gr(){E.call(this,"c")}T(Gr,E);var ze={},Ps=null;function fe(){return Ps=Ps||new Ot}ze.Ia="serverreachability";function er(i){E.call(this,ze.Ia,i)}T(er,E);function Pe(i){const c=fe();Bt(c,new er(c))}ze.STAT_EVENT="statevent";function Vs(i,c){E.call(this,ze.STAT_EVENT,i),this.stat=c}T(Vs,E);function Ht(i){const c=fe();Bt(c,new Vs(c,i))}ze.Ja="timingevent";function Wr(i,c){E.call(this,ze.Ja,i),this.size=c}T(Wr,E);function cn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Pn(){this.g=!0}Pn.prototype.ua=function(){this.g=!1};function Ds(i,c,l,f,S,b){i.info(function(){if(i.g)if(b){var x="",X=b.split("&");for(let mt=0;mt<X.length;mt++){var Ft=X[mt].split("=");if(Ft.length>1){const $t=Ft[0];Ft=Ft[1];const xe=$t.split("_");x=xe.length>=2&&xe[1]=="type"?x+($t+"="+Ft+"&"):x+($t+"=redacted&")}}}else x=null;else x=b;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+c+`
`+l+`
`+x})}function ln(i,c,l,f,S,b,x){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+c+`
`+l+`
`+b+" "+x})}function He(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ui(i,l)+(f?" "+f:"")})}function Fi(i,c){i.info(function(){return"TIMEOUT: "+c})}Pn.prototype.info=function(){};function Ui(i,c){if(!i.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(i=0;i<b.length;i++)if(Array.isArray(b[i])){var l=b[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var S=f[0];if(S!="noop"&&S!="stop"&&S!="close")for(let x=1;x<f.length;x++)f[x]=""}}}}return jr(b)}catch{return c}}var Vn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ks={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nr;function Dn(){}T(Dn,zr),Dn.prototype.g=function(){return new XMLHttpRequest},nr=new Dn;function un(i){return encodeURIComponent(String(i))}function Ns(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function me(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new Se(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new xs}function xs(){this.i=null,this.g="",this.h=!1}var Ms={},Kr={};function kn(i,c,l){i.M=1,i.A=lr(oe(c)),i.u=l,i.R=!0,Qr(i,null)}function Qr(i,c){i.F=Date.now(),rr(i),i.B=oe(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),pe(l.i,"t",f),i.C=0,l=i.j.L,i.h=new xs,i.g=Ra(i.j,l?c:null,!i.u),i.P>0&&(i.O=new H(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var S="readystatechange";Array.isArray(S)||(S&&(sn[0]=S.toString()),S=sn);for(let b=0;b<S.length;b++){const x=Ur(l,S[b],f||c.handleEvent,!1,c.h||c);if(!x)break;c.g[x.key]=x}c=i.J?qe(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Pe(),Ds(i.i,i.v,i.B,i.l,i.S,i.u)}me.prototype.ba=function(i){i=i.target;const c=this.O;c&&Yt(i)==3?c.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const X=Yt(this.g),Ft=this.g.ya(),mt=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||ma(this.g)))){this.K||X!=4||Ft==7||(Ft==8||mt<=0?Pe(3):Pe(2)),sr(this);var c=this.g.ca();this.X=c;var l=Nn(this);if(this.o=c==200,ln(this.i,this.v,this.B,this.l,this.S,X,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,S=this.g;if((f=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(f)){var b=f;break e}}b=null}if(i=b)He(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ir(this,i);else{this.o=!1,this.m=3,Ht(12),Ge(this),xn(this);break t}}if(this.R){i=!0;let $t;for(;!this.K&&this.C<l.length;)if($t=Bi(this,l),$t==Kr){X==4&&(this.m=4,Ht(14),i=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if($t==Ms){this.m=4,Ht(15),He(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else He(this.i,this.l,$t,null),ir(this,$t);if(Os(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||l.length!=0||this.h.h||(this.m=1,Ht(16),i=!1),this.o=this.o&&i,!i)He(this.i,this.l,l,"[Invalid Chunked Response]"),Ge(this),xn(this);else if(l.length>0&&!this.W){this.W=!0;var x=this.j;x.g==this&&x.aa&&!x.P&&(x.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),ji(x),x.P=!0,Ht(11))}}else He(this.i,this.l,l,null),ir(this,l);X==4&&Ge(this),this.o&&!this.K&&(X==4?Ta(this.j,this):(this.o=!1,rr(this)))}else ku(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ht(12)):(this.m=0,Ht(13)),Ge(this),xn(this)}}}catch{}finally{}};function Nn(i){if(!Os(i))return i.g.la();const c=ma(i.g);if(c==="")return"";let l="";const f=c.length,S=Yt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ge(i),xn(i),"";i.h.i=new a.TextDecoder}for(let b=0;b<f;b++)i.h.h=!0,l+=i.h.i.decode(c[b],{stream:!(S&&b==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function Os(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Bi(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Kr:(l=Number(c.substring(l,f)),isNaN(l)?Ms:(f+=1,f+l>c.length?Kr:(c=c.slice(f,f+l),i.C=f+l,c)))}me.prototype.cancel=function(){this.K=!0,Ge(this)};function rr(i){i.T=Date.now()+i.H,Ls(i,i.H)}function Ls(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=cn(d(i.aa,i),c)}function sr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}me.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Fi(this.i,this.B),this.M!=2&&(Pe(),Ht(17)),Ge(this),this.m=2,xn(this)):Ls(this,this.T-i)};function xn(i){i.j.I==0||i.K||Ta(i.j,i)}function Ge(i){sr(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,be(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function ir(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||hn(l.h,i))){if(!i.L&&hn(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)js(l),$s(l);else break t;qi(l),Ht(18)}}else l.xa=S[1],0<l.xa-l.K&&S[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=cn(d(l.Va,l),6e3));Yr(l.h)<=1&&l.ta&&(l.ta=void 0)}else Fn(l,11)}else if((i.L||l.g==i)&&js(l),!p(c))for(S=l.Ba.g.parse(c),c=0;c<S.length;c++){let mt=S[c];const $t=mt[0];if(!($t<=l.K))if(l.K=$t,mt=mt[1],l.I==2)if(mt[0]=="c"){l.M=mt[1],l.ba=mt[2];const xe=mt[3];xe!=null&&(l.ka=xe,l.j.info("VER="+l.ka));const Un=mt[4];Un!=null&&(l.za=Un,l.j.info("SVER="+l.za));const dn=mt[5];dn!=null&&typeof dn=="number"&&dn>0&&(f=1.5*dn,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const fn=i.g;if(fn){const Hs=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var b=f.h;b.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(cr(b,b.h),b.h=null))}if(f.G){const zi=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;zi&&(f.wa=zi,ft(f.J,f.G,zi))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var x=i;if(f.na=Aa(f,f.L?f.ba:null,f.W),x.L){Us(f.h,x);var X=x,Ft=f.O;Ft&&(X.H=Ft),X.D&&(sr(X),rr(X)),f.g=x}else Ea(f);l.i.length>0&&qs(l)}else mt[0]!="stop"&&mt[0]!="close"||Fn(l,7);else l.I==3&&(mt[0]=="stop"||mt[0]=="close"?mt[0]=="stop"?Fn(l,7):$i(l):mt[0]!="noop"&&l.l&&l.l.qa(mt),l.A=0)}}Pe(4)}catch{}}var Fs=class{constructor(i,c){this.g=i,this.map=c}};function or(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ar(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Yr(i){return i.h?1:i.g?i.g.size:0}function hn(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function cr(i,c){i.g?i.g.add(c):i.h=c}function Us(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}or.prototype.cancel=function(){if(this.i=Mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Mn(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return P(i.i)}var Xr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bs(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let S,b=null;f>=0?(S=i[l].substring(0,f),b=i[l].substring(f+1)):S=i[l],c(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ve(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof Ve?(this.l=i.l,On(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.u),this.h=i.h,Jr(this,ae(i.i)),this.m=i.m):i&&(c=String(i).match(Xr))?(this.l=!1,On(this,c[1]||"",!0),this.o=R(c[2]||""),this.g=R(c[3]||"",!0),Ln(this,c[4]),this.h=R(c[5]||"",!0),Jr(this,c[6]||"",!0),this.m=R(c[7]||"")):(this.l=!1,this.i=new vt(null,this.l))}Ve.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(V(c,B,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(V(c,B,!0),"@"),i.push(un(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(V(l,l.charAt(0)=="/"?j:$,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",V(l,wt)),i.join("")},Ve.prototype.resolve=function(i){const c=oe(this);let l=!!i.j;l?On(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)Ln(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var S=c.h.lastIndexOf("/");S!=-1&&(f=c.h.slice(0,S+1)+f)}if(S=f,S==".."||S==".")f="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){f=S.lastIndexOf("/",0)==0,S=S.split("/");const b=[];for(let x=0;x<S.length;){const X=S[x++];X=="."?f&&x==S.length&&b.push(""):X==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&x==S.length&&b.push("")):(b.push(X),f=!0)}f=b.join("/")}else f=S}return l?c.h=f:l=i.i.toString()!=="",l?Jr(c,ae(i.i)):l=!!i.m,l&&(c.m=i.m),c};function oe(i){return new Ve(i)}function On(i,c,l){i.j=l?R(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Jr(i,c,l){c instanceof vt?(i.i=c,pt(i.i,i.l)):(l||(c=V(c,rt)),i.i=new vt(c,i.l))}function ft(i,c,l){i.i.set(c,l)}function lr(i){return ft(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function R(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function V(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,k),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function k(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var B=/[#\/\?@]/g,$=/[#\?:]/g,j=/[#\?]/g,rt=/[#\?@]/g,wt=/#/g;function vt(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function lt(i){i.g||(i.g=new Map,i.h=0,i.i&&Bs(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=vt.prototype,n.add=function(i,c){lt(this),this.i=null,i=Pt(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function st(i,c){lt(i),c=Pt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function At(i,c){return lt(i),c=Pt(i,c),i.g.has(c)}n.forEach=function(i,c){lt(this),this.g.forEach(function(l,f){l.forEach(function(S){i.call(c,S,f,this)},this)},this)};function ge(i,c){lt(i);let l=[];if(typeof c=="string")At(i,c)&&(l=l.concat(i.g.get(Pt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return lt(this),this.i=null,i=Pt(this,i),At(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=ge(this,i),i.length>0?String(i[0]):c):c};function pe(i,c,l){st(i,c),l.length>0&&(i.i=null,i.g.set(Pt(i,c),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const S=un(l);l=ge(this,l);for(let b=0;b<l.length;b++){let x=S;l[b]!==""&&(x+="="+un(l[b])),i.push(x)}}return this.i=i.join("&")};function ae(i){const c=new vt;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Pt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function pt(i,c){c&&!i.j&&(lt(i),i.i=null,i.g.forEach(function(l,f){const S=f.toLowerCase();f!=S&&(st(this,f),pe(this,S,l))},i)),i.j=c}function It(i,c){const l=new Pn;if(a.Image){const f=new Image;f.onload=m(ct,l,"TestLoadImage: loaded",!0,c,f),f.onerror=m(ct,l,"TestLoadImage: error",!1,c,f),f.onabort=m(ct,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(ct,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Lt(i,c){const l=new Pn,f=new AbortController,S=setTimeout(()=>{f.abort(),ct(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(S),b.ok?ct(l,"TestPingServer: ok",!0,c):ct(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),ct(l,"TestPingServer: error",!1,c)})}function ct(i,c,l,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(l)}catch{}}function le(){this.g=new Li}function De(i){this.i=i.Sb||null,this.h=i.ab||!1}T(De,zr),De.prototype.g=function(){return new _t(this.i,this.h)};function _t(i,c){Ot.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(_t,Ot),n=_t.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,We(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_e(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;re(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function re(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?_e(this):We(this),this.readyState==3&&re(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,_e(this))},n.Na=function(i){this.g&&(this.response=i,_e(this))},n.ga=function(){this.g&&_e(this)};function _e(i){i.readyState=4,i.l=null,i.j=null,i.B=null,We(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function We(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(_t.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ur(i){let c="";return we(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Gt(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=ur(l),typeof i=="string"?l!=null&&un(l):ft(i,c,l))}function it(i){Ot.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(it,Ot);var hr=/^https?$/i,dr=["POST","PUT"];n=it.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nr.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){Zr(this,b);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)l.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())l.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),S=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(dr,c,void 0)>=0)||f||S||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,x]of l)this.g.setRequestHeader(b,x);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(b){Zr(this,b)}};function Zr(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,ke(i),se(i)}function ke(i){i.A||(i.A=!0,Bt(i,"complete"),Bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Bt(this,"complete"),Bt(this,"abort"),se(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),se(this,!0)),it.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ne(this):this.Xa())},n.Xa=function(){Ne(this)};function Ne(i){if(i.h&&typeof o<"u"){if(i.v&&Yt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Bt(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const b=i.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=b===0){let x=String(i.D).match(Xr)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),f=!hr.test(x?x.toLowerCase():"")}l=f}if(l)Bt(i,"complete"),Bt(i,"success");else{i.o=6;try{var S=Yt(i)>2?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.ca()+"]",ke(i)}}finally{se(i)}}}}function se(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Bt(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),on(c)}};function ma(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function ku(i){const c={};i=(i.g&&Yt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(p(i[f]))continue;var l=Ns(i[f]);const S=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=c[S]||[];c[S]=b,b.push(l)}en(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ts(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function ga(i){this.za=0,this.i=[],this.j=new Pn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ts("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ts("baseRetryDelayMs",5e3,i),this.Za=ts("retryDelaySeedMs",1e4,i),this.Ta=ts("forwardChannelMaxRetries",2,i),this.va=ts("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new or(i&&i.concurrentRequestLimit),this.Ba=new le,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=ga.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,f){Ht(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=Aa(this,null,this.W),qs(this)};function $i(i){if(pa(i),i.I==3){var c=i.V++,l=oe(i.J);if(ft(l,"SID",i.M),ft(l,"RID",c),ft(l,"TYPE","terminate"),es(i,l),c=new me(i,i.j,c),c.M=2,c.A=lr(oe(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=Ra(c.j,null),c.g.ea(c.A)),c.F=Date.now(),rr(c)}wa(i)}function $s(i){i.g&&(ji(i),i.g.cancel(),i.g=null)}function pa(i){$s(i),i.v&&(a.clearTimeout(i.v),i.v=null),js(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function qs(i){if(!ar(i.h)&&!i.m){i.m=!0;var c=i.Ea;dt||g(),nt||(dt(),nt=!0),I.add(c,i),i.D=0}}function Nu(i,c){return Yr(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=cn(d(i.Ea,i,c),Ia(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const S=new me(this,this.j,i);let b=this.o;if(this.U&&(b?(b=qe(b),Fr(b,this.U)):b=this.U),this.u!==null||this.R||(S.J=b,b=null),this.S)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=ya(this,S,c),l=oe(this.J),ft(l,"RID",i),ft(l,"CVER",22),this.G&&ft(l,"X-HTTP-Session-Id",this.G),es(this,l),b&&(this.R?c="headers="+un(ur(b))+"&"+c:this.u&&Gt(l,this.u,b)),cr(this.h,S),this.Ra&&ft(l,"TYPE","init"),this.S?(ft(l,"$req",c),ft(l,"SID","null"),S.U=!0,kn(S,l,null)):kn(S,l,c),this.I=2}}else this.I==3&&(i?_a(this,i):this.i.length==0||ar(this.h)||_a(this))};function _a(i,c){var l;c?l=c.l:l=i.V++;const f=oe(i.J);ft(f,"SID",i.M),ft(f,"RID",l),ft(f,"AID",i.K),es(i,f),i.u&&i.o&&Gt(f,i.u,i.o),l=new me(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=ya(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),cr(i.h,l),kn(l,f,c)}function es(i,c){i.H&&we(i.H,function(l,f){ft(c,f,l)}),i.l&&we({},function(l,f){ft(c,f,l)})}function ya(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var S=i.i;let X=-1;for(;;){const Ft=["count="+l];X==-1?l>0?(X=S[0].g,Ft.push("ofs="+X)):X=0:Ft.push("ofs="+X);let mt=!0;for(let $t=0;$t<l;$t++){var b=S[$t].g;const xe=S[$t].map;if(b-=X,b<0)X=Math.max(0,S[$t].g-100),mt=!1;else try{b="req"+b+"_"||"";try{var x=xe instanceof Map?xe:Object.entries(xe);for(const[Un,dn]of x){let fn=dn;u(dn)&&(fn=jr(dn)),Ft.push(b+Un+"="+encodeURIComponent(fn))}}catch(Un){throw Ft.push(b+"type="+encodeURIComponent("_badmap")),Un}}catch{f&&f(xe)}}if(mt){x=Ft.join("&");break t}}x=void 0}return i=i.i.splice(0,l),c.G=i,x}function Ea(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;dt||g(),nt||(dt(),nt=!0),I.add(c,i),i.A=0}}function qi(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=cn(d(i.Da,i),Ia(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,va(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=cn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ht(10),$s(this),va(this))};function ji(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function va(i){i.g=new me(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=oe(i.na);ft(c,"RID","rpc"),ft(c,"SID",i.M),ft(c,"AID",i.K),ft(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&ft(c,"TO",i.ia),ft(c,"TYPE","xmlhttp"),es(i,c),i.u&&i.o&&Gt(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=lr(oe(c)),l.u=null,l.R=!0,Qr(l,i)}n.Va=function(){this.C!=null&&(this.C=null,$s(this),qi(this),Ht(19))};function js(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function Ta(i,c){var l=null;if(i.g==c){js(i),ji(i),i.g=null;var f=2}else if(hn(i.h,c))l=c.G,Us(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var S=i.D;f=fe(),Bt(f,new Wr(f,l)),qs(i)}else Ea(i);else if(S=c.m,S==3||S==0&&c.X>0||!(f==1&&Nu(i,c)||f==2&&qi(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),S){case 1:Fn(i,5);break;case 4:Fn(i,10);break;case 3:Fn(i,6);break;default:Fn(i,2)}}}function Ia(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Fn(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const S=!f;f=new Ve(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||On(f,"https"),lr(f),S?It(f.toString(),l):Lt(f.toString(),l)}else Ht(2);i.I=0,i.l&&i.l.pa(c),wa(i),pa(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function wa(i){if(i.I=0,i.ja=[],i.l){const c=Mn(i.h);(c.length!=0||i.i.length!=0)&&(O(i.ja,c),O(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function Aa(i,c,l){var f=l instanceof Ve?oe(l):new Ve(l);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.u);else{var S=a.location;f=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;const b=new Ve(null);f&&On(b,f),c&&(b.g=c),S&&Ln(b,S),l&&(b.h=l),f=b}return l=i.G,c=i.wa,l&&c&&ft(f,l,c),ft(f,"VER",i.ka),es(i,f),f}function Ra(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new it(new De({ab:l})):new it(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Sa(){}n=Sa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function zs(){}zs.prototype.g=function(i,c){return new ce(i,c)};function ce(i,c){Ot.call(this),this.g=new ga(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!p(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new fr(this)}T(ce,Ot),ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ce.prototype.close=function(){$i(this.g)},ce.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=jr(i),i=l);c.i.push(new Fs(c.Ya++,i)),c.I==3&&qs(c)},ce.prototype.N=function(){this.g.l=null,delete this.j,$i(this.g),delete this.g,ce.Z.N.call(this)};function ba(i){an.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}T(ba,an);function Ca(){Gr.call(this),this.status=1}T(Ca,Gr);function fr(i){this.g=i}T(fr,Sa),fr.prototype.ra=function(){Bt(this.g,"a")},fr.prototype.qa=function(i){Bt(this.g,new ba(i))},fr.prototype.pa=function(i){Bt(this.g,new Ca)},fr.prototype.oa=function(){Bt(this.g,"b")},zs.prototype.createWebChannel=zs.prototype.g,ce.prototype.send=ce.prototype.o,ce.prototype.open=ce.prototype.m,ce.prototype.close=ce.prototype.close,ol=function(){return new zs},il=function(){return fe()},sl=ze,co={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,ti=Vn,ks.COMPLETE="complete",rl=ks,Hr.EventType=Ce,Ce.OPEN="a",Ce.CLOSE="b",Ce.ERROR="c",Ce.MESSAGE="d",Ot.prototype.listen=Ot.prototype.J,ss=Hr,it.prototype.listenOnce=it.prototype.K,it.prototype.getLastError=it.prototype.Ha,it.prototype.getLastErrorCode=it.prototype.ya,it.prototype.getStatus=it.prototype.ca,it.prototype.getResponseJson=it.prototype.La,it.prototype.getResponseText=it.prototype.la,it.prototype.send=it.prototype.ea,it.prototype.setWithCredentials=it.prototype.Fa,nl=it}).apply(typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}te.UNAUTHENTICATED=new te(null),te.GOOGLE_CREDENTIALS=new te("google-credentials-uid"),te.FIRST_PARTY=new te("first-party-uid"),te.MOCK_USER=new te("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nr="12.10.0";function Fd(n){Nr=n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Kc("@firebase/firestore");function pr(){return jn.logLevel}function U(n,...t){if(jn.logLevel<=et.DEBUG){const e=t.map(Do);jn.debug(`Firestore (${Nr}): ${n}`,...e)}}function Xe(n,...t){if(jn.logLevel<=et.ERROR){const e=t.map(Do);jn.error(`Firestore (${Nr}): ${n}`,...e)}}function zn(n,...t){if(jn.logLevel<=et.WARN){const e=t.map(Do);jn.warn(`Firestore (${Nr}): ${n}`,...e)}}function Do(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,al(n,r,e)}function al(n,t,e){let r=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Xe(r),new Error(r)}function at(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||al(t,s,r)}function Q(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends kr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ud{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(te.UNAUTHENTICATED))}shutdown(){}}class Bd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class $d{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){at(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new En;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new En,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new En)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(at(typeof r.accessToken=="string",31837,{l:r}),new cl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return at(t===null||typeof t=="string",2055,{h:t}),new te(t)}}class qd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class jd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new qd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class za{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zd{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Td(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){at(this.o===void 0,3512);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new za(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(at(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new za(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Hd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function J(n,t){return n<t?-1:n>t?1:0}function lo(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Yi(s)===Yi(o)?J(s,o):Yi(s)?1:-1}return J(n.length,t.length)}const Gd=55296,Wd=57343;function Yi(n){const t=n.charCodeAt(0);return t>=Gd&&t<=Wd}function Sr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="__name__";class Le{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&z(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Le.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Le?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Le.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return J(t.length,e.length)}static compareSegments(t,e){const r=Le.isNumericId(t),s=Le.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Le.extractNumericId(t).compare(Le.extractNumericId(e)):lo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return yn.fromString(t.substring(4,t.length-2))}}class gt extends Le{construct(t,e,r){return new gt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new M(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new gt(e)}static emptyPath(){return new gt([])}}const Kd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Le{construct(t,e,r){return new Kt(t,e,r)}static isValidIdentifier(t){return Kd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ha}static keyField(){return new Kt([Ha])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new M(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new M(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new M(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Kt(e)}static emptyPath(){return new Kt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.path=t}static fromPath(t){return new q(gt.fromString(t))}static fromName(t){return new q(gt.fromString(t).popFirst(5))}static empty(){return new q(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return gt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new q(new gt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n,t,e){if(!e)throw new M(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Qd(n,t,e,r){if(t===!0&&r===!0)throw new M(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ga(n){if(!q.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Wa(n){if(q.isDocumentKey(n))throw new M(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ul(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ti(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z(12329,{type:typeof n})}function li(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new M(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ti(n);throw new M(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Yd(n,t){if(t<=0)throw new M(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Is(n,t){if(!ul(n))throw new M(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new M(C.INVALID_ARGUMENT,e);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=-62135596800,Qa=1e6;class Tt{static now(){return Tt.fromMillis(Date.now())}static fromDate(t){return Tt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Qa);return new Tt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new M(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<Ka)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new M(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qa}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Tt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Is(t,Tt._jsonSchema))return new Tt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Ka;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Tt._jsonSchemaVersion="firestore/timestamp/1.0",Tt._jsonSchema={type:xt("string",Tt._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new Tt(0,0))}static max(){return new K(new Tt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=-1;function Xd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new Tt(e+1,0):new Tt(e,r));return new Tn(s,q.empty(),t)}function Jd(n){return new Tn(n.readTime,n.key,ms)}class Tn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Tn(K.min(),q.empty(),ms)}static max(){return new Tn(K.max(),q.empty(),ms)}}function Zd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=q.comparator(n.documentKey,t.documentKey),e!==0?e:J(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ef{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==tf)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(s=>s?D.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new D((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new D((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function nf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Mr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ii.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=-1;function wi(n){return n==null}function ui(n){return n===0&&1/n==-1/0}function rf(n){return typeof n=="number"&&Number.isInteger(n)&&!ui(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="";function sf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ya(t)),t=of(n.get(e),t);return Ya(t)}function of(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case hl:e+="";break;default:e+=o}}return e}function Ya(n){return n+hl+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function dl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e){this.comparator=t,this.root=e||Wt.EMPTY}insert(t,e){return new Rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ks(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ks(this.root,t,this.comparator,!0)}}class Ks{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Wt.RED,this.left=s??Wt.EMPTY,this.right=o??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Wt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw z(27949);return t+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ja(this.data.getIterator())}getIteratorFrom(t){return new Ja(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ut(this.comparator);return e.data=t,e}}class Ja{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(t){this.fields=t,t.sort(Kt.comparator)}static empty(){return new ve([])}unionWith(t){let e=new Ut(Kt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ve(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Sr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new fl("Invalid base64 string: "+o):o}}(t);return new Qt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const af=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(n){if(at(!!n,39018),typeof n=="string"){let t=0;const e=af.exec(n);if(at(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Dt(n.seconds),nanos:Dt(n.nanos)}}function Dt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wn(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="server_timestamp",gl="__type__",pl="__previous_value__",_l="__local_write_time__";function Ai(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[gl])==null?void 0:r.stringValue)===ml}function Ri(n){const t=n.mapValue.fields[pl];return Ai(t)?Ri(t):t}function gs(n){const t=In(n.mapValue.fields[_l].timestampValue);return new Tt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(t,e,r,s,o,a,u,h,d,m,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=T}}const hi="(default)";class ps{constructor(t,e){this.projectId=t,this.database=e||hi}static empty(){return new ps("","")}get isDefaultDatabase(){return this.database===hi}isEqual(t){return t instanceof ps&&t.projectId===this.projectId&&t.database===this.database}}function lf(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new M(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ps(n.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl="__type__",uf="__max__",Qs={mapValue:{}},El="__vector__",di="value";function An(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Ai(n)?4:df(n)?9007199254740991:hf(n)?10:11:z(28295,{value:n})}function $e(n,t){if(n===t)return!0;const e=An(n);if(e!==An(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return gs(n).isEqual(gs(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=In(s.timestampValue),u=In(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return wn(s.bytesValue).isEqual(wn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Dt(s.geoPointValue.latitude)===Dt(o.geoPointValue.latitude)&&Dt(s.geoPointValue.longitude)===Dt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Dt(s.integerValue)===Dt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Dt(s.doubleValue),u=Dt(o.doubleValue);return a===u?ui(a)===ui(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Sr(n.arrayValue.values||[],t.arrayValue.values||[],$e);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Xa(a)!==Xa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!$e(a[h],u[h])))return!1;return!0}(n,t);default:return z(52216,{left:n})}}function _s(n,t){return(n.values||[]).find(e=>$e(e,t))!==void 0}function br(n,t){if(n===t)return 0;const e=An(n),r=An(t);if(e!==r)return J(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=Dt(o.integerValue||o.doubleValue),h=Dt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Za(n.timestampValue,t.timestampValue);case 4:return Za(gs(n),gs(t));case 5:return lo(n.stringValue,t.stringValue);case 6:return function(o,a){const u=wn(o),h=wn(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=J(u[d],h[d]);if(m!==0)return m}return J(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=J(Dt(o.latitude),Dt(a.latitude));return u!==0?u:J(Dt(o.longitude),Dt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return tc(n.arrayValue,t.arrayValue);case 10:return function(o,a){var A,P,O,F;const u=o.fields||{},h=a.fields||{},d=(A=u[di])==null?void 0:A.arrayValue,m=(P=h[di])==null?void 0:P.arrayValue,T=J(((O=d==null?void 0:d.values)==null?void 0:O.length)||0,((F=m==null?void 0:m.values)==null?void 0:F.length)||0);return T!==0?T:tc(d,m)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Qs.mapValue&&a===Qs.mapValue)return 0;if(o===Qs.mapValue)return 1;if(a===Qs.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const A=lo(h[T],m[T]);if(A!==0)return A;const P=br(u[h[T]],d[m[T]]);if(P!==0)return P}return J(h.length,m.length)}(n.mapValue,t.mapValue);default:throw z(23264,{he:e})}}function Za(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return J(n,t);const e=In(n),r=In(t),s=J(e.seconds,r.seconds);return s!==0?s:J(e.nanos,r.nanos)}function tc(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=br(e[s],r[s]);if(o)return o}return J(e.length,r.length)}function Cr(n){return uo(n)}function uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=In(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return wn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return q.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=uo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${uo(e.fields[a])}`;return s+"}"}(n.mapValue):z(61005,{value:n})}function ei(n){switch(An(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ri(n);return t?16+ei(t):16;case 5:return 2*n.stringValue.length;case 6:return wn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ei(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Gn(r.fields,(o,a)=>{s+=o.length+ei(a)}),s}(n.mapValue);default:throw z(13486,{value:n})}}function fi(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ho(n){return!!n&&"integerValue"in n}function xo(n){return!!n&&"arrayValue"in n}function ec(n){return!!n&&"nullValue"in n}function nc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ni(n){return!!n&&"mapValue"in n}function hf(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[yl])==null?void 0:r.stringValue)===El}function cs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=cs(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=cs(n.arrayValue.values[e]);return t}return{...n}}function df(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===uf}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ni(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=cs(e)}setAll(t){let e=Kt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=cs(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ni(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return $e(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ni(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Gn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new ue(cs(this.value))}}function vl(n){const t=[];return Gn(n.fields,(e,r)=>{const s=new Kt([e]);if(ni(r)){const o=vl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new ve(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ee(t,0,K.min(),K.min(),K.min(),ue.empty(),0)}static newFoundDocument(t,e,r,s){return new ee(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new ee(t,2,e,K.min(),K.min(),ue.empty(),0)}static newUnknownDocument(t,e){return new ee(t,3,e,K.min(),K.min(),ue.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ee&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.position=t,this.inclusive=e}}function rc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=q.comparator(q.fromName(a.referenceValue),e.key):r=br(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function sc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!$e(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t,e="asc"){this.field=t,this.dir=e}}function ff(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{}class Nt extends Tl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new gf(t,e,r):e==="array-contains"?new yf(t,r):e==="in"?new Ef(t,r):e==="not-in"?new vf(t,r):e==="array-contains-any"?new Tf(t,r):new Nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new pf(t,r):new _f(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(br(e,this.value)):e!==null&&An(this.value)===An(e)&&this.matchesComparison(br(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ie extends Tl{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Ie(t,e)}matches(t){return Il(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Il(n){return n.op==="and"}function wl(n){return mf(n)&&Il(n)}function mf(n){for(const t of n.filters)if(t instanceof Ie)return!1;return!0}function fo(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(wl(n))return n.filters.map(t=>fo(t)).join(",");{const t=n.filters.map(e=>fo(e)).join(",");return`${n.op}(${t})`}}function Al(n,t){return n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&$e(r.value,s.value)}(n,t):n instanceof Ie?function(r,s){return s instanceof Ie&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Al(a,s.filters[u]),!0):!1}(n,t):void z(19439)}function Rl(n){return n instanceof Nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Cr(e.value)}`}(n):n instanceof Ie?function(e){return e.op.toString()+" {"+e.getFilters().map(Rl).join(" ,")+"}"}(n):"Filter"}class gf extends Nt{constructor(t,e,r){super(t,e,r),this.key=q.fromName(r.referenceValue)}matches(t){const e=q.comparator(t.key,this.key);return this.matchesComparison(e)}}class pf extends Nt{constructor(t,e){super(t,"in",e),this.keys=Sl("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class _f extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=Sl("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Sl(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>q.fromName(r.referenceValue))}class yf extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return xo(e)&&_s(e.arrayValue,this.value)}}class Ef extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&_s(this.value.arrayValue,e)}}class vf extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(_s(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!_s(this.value.arrayValue,e)}}class Tf extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!xo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>_s(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function ic(n,t=null,e=[],r=[],s=null,o=null,a=null){return new If(n,t,e,r,s,o,a)}function Mo(n){const t=Q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>fo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),wi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Cr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Cr(r)).join(",")),t.Te=e}return t.Te}function Oo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!ff(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Al(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!sc(n.startAt,t.startAt)&&sc(n.endAt,t.endAt)}function mo(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function wf(n,t,e,r,s,o,a,u){return new Wn(n,t,e,r,s,o,a,u)}function bl(n){return new Wn(n)}function oc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Af(n){return q.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Lo(n){return n.collectionGroup!==null}function Tr(n){const t=Q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ut(Kt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ys(o,r))}),e.has(Kt.keyField().canonicalString())||t.Ie.push(new ys(Kt.keyField(),r))}return t.Ie}function Fe(n){const t=Q(n);return t.Ee||(t.Ee=Rf(t,Tr(n))),t.Ee}function Rf(n,t){if(n.limitType==="F")return ic(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ys(s.field,o)});const e=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return ic(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function go(n,t){const e=n.filters.concat([t]);return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Sf(n,t){const e=n.explicitOrderBy.concat([t]);return new Wn(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function mi(n,t,e){return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function bf(n,t){return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,t,n.endAt)}function Si(n,t){return Oo(Fe(n),Fe(t))&&n.limitType===t.limitType}function Cl(n){return`${Mo(Fe(n))}|lt:${n.limitType}`}function _r(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Rl(s)).join(", ")}]`),wi(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Cr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Cr(s)).join(",")),`Target(${r})`}(Fe(n))}; limitType=${n.limitType})`}function bi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):q.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Tr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=rc(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Tr(r),s)||r.endAt&&!function(a,u,h){const d=rc(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Tr(r),s))}(n,t)}function Cf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Pl(n){return(t,e)=>{let r=!1;for(const s of Tr(n)){const o=Pf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function Pf(n,t,e){const r=n.field.isKeyField()?q.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?br(h,d):z(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Gn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return dl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf=new Rt(q.comparator);function Je(){return Vf}const Vl=new Rt(q.comparator);function is(...n){let t=Vl;for(const e of n)t=t.insert(e.key,e);return t}function Dl(n){let t=Vl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function $n(){return ls()}function kl(){return ls()}function ls(){return new Kn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Df=new Rt(q.comparator),kf=new Ut(q.comparator);function Z(...n){let t=kf;for(const e of n)t=t.add(e);return t}const Nf=new Ut(J);function xf(){return Nf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ui(t)?"-0":t}}function Nl(n){return{integerValue:""+n}}function Mf(n,t){return rf(t)?Nl(t):Fo(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this._=void 0}}function Of(n,t,e){return n instanceof Es?function(s,o){const a={fields:{[gl]:{stringValue:ml},[_l]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ai(o)&&(o=Ri(o)),o&&(a.fields[pl]=o),{mapValue:a}}(e,t):n instanceof vs?Ml(n,t):n instanceof Ts?Ol(n,t):function(s,o){const a=xl(s,o),u=ac(a)+ac(s.Ae);return ho(a)&&ho(s.Ae)?Nl(u):Fo(s.serializer,u)}(n,t)}function Lf(n,t,e){return n instanceof vs?Ml(n,t):n instanceof Ts?Ol(n,t):e}function xl(n,t){return n instanceof gi?function(r){return ho(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Es extends Ci{}class vs extends Ci{constructor(t){super(),this.elements=t}}function Ml(n,t){const e=Ll(t);for(const r of n.elements)e.some(s=>$e(s,r))||e.push(r);return{arrayValue:{values:e}}}class Ts extends Ci{constructor(t){super(),this.elements=t}}function Ol(n,t){let e=Ll(t);for(const r of n.elements)e=e.filter(s=>!$e(s,r));return{arrayValue:{values:e}}}class gi extends Ci{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function ac(n){return Dt(n.integerValue||n.doubleValue)}function Ll(n){return xo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(t,e){this.field=t,this.transform=e}}function Uf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof vs&&s instanceof vs||r instanceof Ts&&s instanceof Ts?Sr(r.elements,s.elements,$e):r instanceof gi&&s instanceof gi?$e(r.Ae,s.Ae):r instanceof Es&&s instanceof Es}(n.transform,t.transform)}class Bf{constructor(t,e){this.version=t,this.transformResults=e}}class Qe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qe}static exists(t){return new Qe(void 0,t)}static updateTime(t){return new Qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ri(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Pi{}function Fl(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Bl(n.key,Qe.none()):new ws(n.key,n.data,Qe.none());{const e=n.data,r=ue.empty();let s=new Ut(Kt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Qn(n.key,r,new ve(s.toArray()),Qe.none())}}function $f(n,t,e){n instanceof ws?function(s,o,a){const u=s.value.clone(),h=lc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Qn?function(s,o,a){if(!ri(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=lc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ul(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function us(n,t,e,r){return n instanceof ws?function(o,a,u,h){if(!ri(o.precondition,a))return u;const d=o.value.clone(),m=uc(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Qn?function(o,a,u,h){if(!ri(o.precondition,a))return u;const d=uc(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ul(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return ri(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function qf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=xl(r.transform,s||null);o!=null&&(e===null&&(e=ue.empty()),e.set(r.field,o))}return e||null}function cc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Sr(r,s,(o,a)=>Uf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class ws extends Pi{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends Pi{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ul(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function lc(n,t,e){const r=new Map;at(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Lf(a,u,e[s]))}return r}function uc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Of(o,a,t))}return r}class Bl extends Pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jf extends Pi{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&$f(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=us(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=us(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=kl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Fl(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Sr(this.mutations,t.mutations,(e,r)=>cc(e,r))&&Sr(this.baseMutations,t.baseMutations,(e,r)=>cc(e,r))}}class Uo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){at(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Df}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Uo(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt,tt;function Wf(n){switch(n){case C.OK:return z(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return z(15467,{code:n})}}function $l(n){if(n===void 0)return Xe("GRPC error has no .code"),C.UNKNOWN;switch(n){case kt.OK:return C.OK;case kt.CANCELLED:return C.CANCELLED;case kt.UNKNOWN:return C.UNKNOWN;case kt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case kt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case kt.INTERNAL:return C.INTERNAL;case kt.UNAVAILABLE:return C.UNAVAILABLE;case kt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case kt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case kt.NOT_FOUND:return C.NOT_FOUND;case kt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case kt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case kt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case kt.ABORTED:return C.ABORTED;case kt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case kt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case kt.DATA_LOSS:return C.DATA_LOSS;default:return z(39323,{code:n})}}(tt=kt||(kt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new yn([4294967295,4294967295],0);function hc(n){const t=Kf().encode(n),e=new el;return e.update(t),new Uint8Array(e.digest())}function dc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new yn([e,r],0),new yn([s,o],0)]}class Bo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new os(`Invalid padding: ${e}`);if(r<0)throw new os(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new os(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new os(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=yn.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(yn.fromNumber(r)));return s.compare(Qf)===1&&(s=new yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=hc(t),[r,s]=dc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Bo(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=hc(t),[r,s]=dc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,As.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Vi(K.min(),s,new Rt(J),Je(),Z())}}class As{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new As(r,e,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class ql{constructor(t,e){this.targetId=t,this.Ce=e}}class jl{constructor(t,e,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class fc{constructor(){this.ve=0,this.Fe=mc(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Z(),e=Z(),r=Z();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:z(38017,{changeType:o})}}),new As(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=mc()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,at(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Yf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Je(),this.He=Ys(),this.Je=Ys(),this.Ze=new Rt(J)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:z(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(mo(o))if(r===0){const a=new q(o.path);this.et(e,a,ee.newNoDocument(a,K.min()))}else at(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const u=this.ut(t),h=u?this.ct(u,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=wn(r).toUint8Array()}catch(h){if(h instanceof fl)return zn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Bo(a,s,o)}catch(h){return zn(h instanceof os?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&mo(u.target)){const h=new q(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ee.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}});let r=Z();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new Vi(t,e,this.Ze,this.je,r);return this.je=Je(),this.He=Ys(),this.Je=Ys(),this.Ze=new Rt(J),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new fc,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new Ut(J),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new Ut(J),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new fc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ys(){return new Rt(q.comparator)}function mc(){return new Rt(q.comparator)}const Xf={asc:"ASCENDING",desc:"DESCENDING"},Jf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zf={and:"AND",or:"OR"};class tm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function po(n,t){return n.useProto3Json||wi(t)?t:{value:t}}function pi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zl(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function em(n,t){return pi(n,t.toTimestamp())}function Ue(n){return at(!!n,49232),K.fromTimestamp(function(e){const r=In(e);return new Tt(r.seconds,r.nanos)}(n))}function $o(n,t){return _o(n,t).canonicalString()}function _o(n,t){const e=function(s){return new gt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Hl(n){const t=gt.fromString(n);return at(Yl(t),10190,{key:t.toString()}),t}function yo(n,t){return $o(n.databaseId,t.path)}function Xi(n,t){const e=Hl(t);if(e.get(1)!==n.databaseId.projectId)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new M(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new q(Wl(e))}function Gl(n,t){return $o(n.databaseId,t)}function nm(n){const t=Hl(n);return t.length===4?gt.emptyPath():Wl(t)}function Eo(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Wl(n){return at(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function gc(n,t,e){return{name:yo(n,t),fields:e.value.mapValue.fields}}function rm(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:z(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(at(m===void 0||typeof m=="string",58123),Qt.fromBase64String(m||"")):(at(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Qt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?C.UNKNOWN:$l(d.code);return new M(m,d.message||"")}(a);e=new jl(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xi(n,r.document.name),o=Ue(r.document.updateTime),a=r.document.createTime?Ue(r.document.createTime):K.min(),u=new ue({mapValue:{fields:r.document.fields}}),h=ee.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new si(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Xi(n,r.document),o=r.readTime?Ue(r.readTime):K.min(),a=ee.newNoDocument(s,o),u=r.removedTargetIds||[];e=new si([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Xi(n,r.document),o=r.removedTargetIds||[];e=new si([],o,s,null)}else{if(!("filter"in t))return z(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Gf(s,o),u=r.targetId;e=new ql(u,a)}}return e}function sm(n,t){let e;if(t instanceof ws)e={update:gc(n,t.key,t.value)};else if(t instanceof Bl)e={delete:yo(n,t.key)};else if(t instanceof Qn)e={update:gc(n,t.key,t.data),updateMask:fm(t.fieldMask)};else{if(!(t instanceof jf))return z(16599,{dt:t.type});e={verify:yo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Es)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof vs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Ts)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof gi)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw z(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:em(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:z(27497)}(n,t.precondition)),e}function im(n,t){return n&&n.length>0?(at(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Ue(s.updateTime):Ue(o);return a.isEqual(K.min())&&(a=Ue(o)),new Bf(a,s.transformResults||[])}(e,t))):[]}function om(n,t){return{documents:[Gl(n,t.path)]}}function am(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Gl(n,s);const o=function(d){if(d.length!==0)return Ql(Ie.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:yr(A.field),direction:um(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=po(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function cm(n){let t=nm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){at(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const A=Kl(T);return A instanceof Ie&&wl(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(A=>function(O){return new ys(Er(O.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(T){let A;return A=typeof T=="object"?T.value:T,wi(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(T){const A=!!T.before,P=T.values||[];return new Pr(P,A)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const A=!T.before,P=T.values||[];return new Pr(P,A)}(e.endAt)),wf(t,s,a,o,u,"F",h,d)}function lm(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Kl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Er(e.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Er(e.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Er(e.unaryFilter.field);return Nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Er(e.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return z(61313);default:return z(60726)}}(n):n.fieldFilter!==void 0?function(e){return Nt.create(Er(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return z(58110);default:return z(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Ie.create(e.compositeFilter.filters.map(r=>Kl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z(1026)}}(e.compositeFilter.op))}(n):z(30097,{filter:n})}function um(n){return Xf[n]}function hm(n){return Jf[n]}function dm(n){return Zf[n]}function yr(n){return{fieldPath:n.canonicalString()}}function Er(n){return Kt.fromServerFormat(n.fieldPath)}function Ql(n){return n instanceof Nt?function(e){if(e.op==="=="){if(nc(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NAN"}};if(ec(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(nc(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NAN"}};if(ec(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(e.field),op:hm(e.op),value:e.value}}}(n):n instanceof Ie?function(e){const r=e.getFilters().map(s=>Ql(s));return r.length===1?r[0]:{compositeFilter:{op:dm(e.op),filters:r}}}(n):z(54877,{filter:n})}function fm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Yl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Xl(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t,e,r,s,o=K.min(),a=K.min(),u=Qt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new gn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(t){this.yt=t}}function gm(n){const t=cm({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?mi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(){this.Sn=new _m}addToCollectionParentIndex(t,e){return this.Sn.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(Tn.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(Tn.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class _m{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ut(gt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(gt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Jl=41943040;class ie{static withCacheSize(t){return new ie(t,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ie.DEFAULT_COLLECTION_PERCENTILE=10,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ie.DEFAULT=new ie(Jl,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ie.DISABLED=new ie(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new Vr(0)}static ar(){return new Vr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c="LruGarbageCollector",ym=1048576;function yc([n,t],[e,r]){const s=J(n,e);return s===0?J(t,r):s}class Em{constructor(t){this.Pr=t,this.buffer=new Ut(yc),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();yc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class vm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){U(_c,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Mr(e)?U(_c,"Ignoring IndexedDB error during garbage collection: ",e):await xr(e)}await this.Ar(3e5)})}}class Tm{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return D.resolve(Ii.ce);const r=new Em(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(pc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pc):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,u=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(d=Date.now(),pr()<=et.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function Im(n,t){return new Tm(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.changes=new Kn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ee.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&us(r.mutation,s,ve.empty(),Tt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const s=$n();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=is();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=$n();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Je();const a=ls(),u=function(){return ls()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Qn)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),us(m.mutation,d,m.mutation.getFieldMask(),Tt.now())):a.set(d.key,ve.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>u.set(d,new Am(m,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const r=ls();let s=new Rt((a,u)=>a-u),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||ve.empty();m=u.applyToLocalView(d,m),r.set(h,m);const T=(s.get(u.batchId)||Z()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,T=kl();m.forEach(A=>{if(!o.has(A)){const P=Fl(e.get(A),r.get(A));P!==null&&T.set(A,P),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return Af(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Lo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):D.resolve($n());let u=ms,h=o;return a.next(d=>D.forEach(d,(m,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(m)?D.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Z())).next(m=>({batchId:u,changes:Dl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new q(e)).next(r=>{let s=is();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=is();return this.indexManager.getCollectionParents(t,o).next(u=>D.forEach(u,h=>{const d=function(T,A){return new Wn(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ee.newInvalidDocument(m)))});let u=is();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&us(m.mutation,d,ve.empty(),Tt.now()),bi(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return D.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ue(s.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:gm(s.bundledQuery),readTime:Ue(s.readTime)}}(e)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(){this.overlays=new Rt(q.comparator),this.Lr=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=$n();return D.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.bt(t,e,o)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const s=$n(),o=e.length+1,a=new q(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return D.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=$n(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=$n(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return D.resolve(u)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Hf(e,r));let o=this.Lr.get(e);o===void 0&&(o=Z(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.kr=new Ut(jt.Kr),this.qr=new Ut(jt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new jt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new jt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new q(new gt([])),r=new jt(e,t),s=new jt(e,t+1),o=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new q(new gt([])),r=new jt(e,t),s=new jt(e,t+1);let o=Z();return this.qr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new jt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class jt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return q.comparator(t.key,e.key)||J(t.Hr,e.Hr)}static Ur(t,e){return J(t.Hr,e.Hr)||q.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Ut(jt.Kr)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new zf(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Jr=this.Jr.add(new jt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,e){return D.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?No:this.Yn-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new jt(e,0),s=new jt(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ut(J);return e.forEach(s=>{const o=new jt(s,0),a=new jt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;q.isDocumentKey(o)||(o=o.child(""));const a=new jt(new q(o),0);let u=new Ut(J);return this.Jr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),D.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){at(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return D.forEach(e.mutations,s=>{const o=new jt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Jr=r})}nr(t){}containsKey(t,e){const r=new jt(e,0),s=this.Jr.firstAfterOrEqual(r);return D.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t){this.ti=t,this.docs=function(){return new Rt(q.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():ee.newInvalidDocument(e))}getEntries(t,e){let r=Je();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ee.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Je();const a=e.path,u=new q(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Zd(Jd(m),r)<=0||(s.has(m.key)||bi(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(t,e,r,s){z(9500)}ni(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Dm(this)}getSize(t){return D.resolve(this.size)}}class Dm extends wm{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(t){this.persistence=t,this.ri=new Kn(e=>Mo(e),Oo),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new qo,this.targetCount=0,this.oi=Vr._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),D.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Vr(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.lr(e),D.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),D.waitFor(o).next(()=>s)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.si.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e){this._i={},this.overlays={},this.ai=new Ii(0),this.ui=!1,this.ui=!0,this.ci=new Cm,this.referenceDelegate=t(this),this.li=new km(this),this.indexManager=new pm,this.remoteDocumentCache=function(s){return new Vm(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new mm(e),this.Pi=new Sm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new bm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new Pm(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new Nm(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(o=>this.referenceDelegate.Ii(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return D.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Nm extends ef{constructor(t){super(),this.currentSequenceNumber=t}}class jo{constructor(t){this.persistence=t,this.Ri=new qo,this.Ai=null}static Vi(t){return new jo(t)}get di(){if(this.Ai)return this.Ai;throw z(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),D.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,r=>{const s=q.fromPath(r);return this.mi(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return D.or([()=>D.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class _i{constructor(t,e){this.persistence=t,this.fi=new Kn(r=>sf(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Im(this,e)}static Vi(t,e){return new _i(t,e)}Ti(){}Ii(t){return D.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return D.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(o=>o?D.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),D.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),D.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),D.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),D.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ei(t.data.value)),e}wr(t,e,r){return D.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=Z(),s=Z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new zo(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return yh()?8:nf(ph())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new xm;return this.ys(t,e,a).next(u=>{if(o.result=u,this.As)return this.ws(t,e,a,u.size)})}).next(()=>o.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(pr()<=et.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",_r(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(pr()<=et.DEBUG&&U("QueryEngine","Query:",_r(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(pr()<=et.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",_r(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Fe(e))):D.resolve())}gs(t,e){if(oc(e))return D.resolve(null);let r=Fe(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=mi(e,null,"F"),r=Fe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Z(...o);return this.fs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ss(e,d,a,h.readTime)?this.gs(t,mi(e,null,"F")):this.Ds(t,d,e,h)}))})))}ps(t,e,r,s){return oc(e)||s.isEqual(K.min())?D.resolve(null):this.fs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?D.resolve(null):(pr()<=et.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_r(e)),this.Ds(t,a,e,Xd(s,ms)).next(u=>u))})}bs(t,e){let r=new Ut(Pl(t));return e.forEach((s,o)=>{bi(t,o)&&(r=r.add(o))}),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return pr()<=et.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",_r(e)),this.fs.getDocumentsMatchingQuery(t,e,Tn.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho="LocalStore",Om=3e8;class Lm{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Rt(J),this.Fs=new Kn(o=>Mo(o),Oo),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Rm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Fm(n,t,e,r){return new Lm(n,t,e,r)}async function tu(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:u}))})})}function Um(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const T=d.batch,A=T.keys();let P=D.resolve();return A.forEach(O=>{P=P.next(()=>m.getEntry(h,O)).next(F=>{const L=d.docVersions.get(O);at(L!==null,48541),F.version.compareTo(L)<0&&(T.applyToRemoteDocument(F,d),F.isValidDocument()&&(F.setReadTime(d.commitVersion),m.addEntry(F)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function eu(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Bm(n,t){const e=Q(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const u=[];t.targetChanges.forEach((m,T)=>{const A=s.get(T);if(!A)return;u.push(e.li.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.li.addMatchingKeys(o,m.addedDocuments,T)));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?P=P.withResumeToken(Qt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),s=s.insert(T,P),function(F,L,Y){return F.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=Om?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(A,P,m)&&u.push(e.li.updateTargetData(o,P))});let h=Je(),d=Z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push($m(o,a,t.documentUpdates).next(m=>{h=m.Bs,d=m.Ls})),!r.isEqual(K.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next(T=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return D.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.vs=s,o))}function $m(n,t,e){let r=Z(),s=Z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Je();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(K.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):U(Ho,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:s}})}function qm(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=No),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function jm(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(o=>o?(s=o,D.resolve(s)):e.li.allocateTargetId(r).next(a=>(s=new gn(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function vo(n,t,e){const r=Q(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Mr(a))throw a;U(Ho,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function Ec(n,t,e){const r=Q(n);let s=K.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=Q(h),A=T.Fs.get(m);return A!==void 0?D.resolve(T.vs.get(A)):T.li.getTargetData(d,m)}(r,a,Fe(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Z())).next(u=>(zm(r,Cf(t),u),{documents:u,ks:o})))}function zm(n,t,e){let r=n.Ms.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ms.set(t,r)}class vc{constructor(){this.activeTargetIds=xf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Hm{constructor(){this.vo=new vc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new vc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc="ConnectivityMonitor";class Ic{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(Tc,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){U(Tc,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xs=null;function To(){return Xs===null?Xs=function(){return 268435456+Math.round(2147483648*Math.random())}():Xs++,"0x"+Xs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji="RestConnection",Wm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Km{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===hi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=To(),u=this.Qo(t,e.toUriEncodedString());U(Ji,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),m=Po(d);return this.zo(t,u,h,r,m).then(T=>(U(Ji,`Received RPC '${t}' ${a}: `,T),T),T=>{throw zn(Ji,`RPC '${t}' ${a} failed with error: `,T,"url: ",u,"request:",r),T})}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Qo(t,e){const r=Wm[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xt="WebChannelConnection",ns=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ir extends Km{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Ir.c_){const t=il();ns(t,sl.STAT_EVENT,e=>{e.stat===co.PROXY?U(Xt,"STAT_EVENT: detected buffering proxy"):e.stat===co.NOPROXY&&U(Xt,"STAT_EVENT: detected no buffering proxy")}),Ir.c_=!0}}zo(t,e,r,s,o){const a=To();return new Promise((u,h)=>{const d=new nl;d.setWithCredentials(!0),d.listenOnce(rl.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ti.NO_ERROR:const T=d.getResponseJson();U(Xt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),u(T);break;case ti.TIMEOUT:U(Xt,`RPC '${t}' ${a} timed out`),h(new M(C.DEADLINE_EXCEEDED,"Request time out"));break;case ti.HTTP_ERROR:const A=d.getStatus();if(U(Xt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const O=P==null?void 0:P.error;if(O&&O.status&&O.message){const F=function(Y){const G=Y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(G)>=0?G:C.UNKNOWN}(O.status);h(new M(F,O.message))}else h(new M(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new M(C.UNAVAILABLE,"Connection failed."));break;default:z(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{U(Xt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);U(Xt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}T_(t,e,r){const s=To(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const d=o.join("");U(Xt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);this.I_(m);let T=!1,A=!1;const P=new Qm({Ho:O=>{A?U(Xt,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(T||(U(Xt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),T=!0),U(Xt,`RPC '${t}' stream ${s} sending:`,O),m.send(O))},Jo:()=>m.close()});return ns(m,ss.EventType.OPEN,()=>{A||(U(Xt,`RPC '${t}' stream ${s} transport opened.`),P.i_())}),ns(m,ss.EventType.CLOSE,()=>{A||(A=!0,U(Xt,`RPC '${t}' stream ${s} transport closed`),P.o_(),this.E_(m))}),ns(m,ss.EventType.ERROR,O=>{A||(A=!0,zn(Xt,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),P.o_(new M(C.UNAVAILABLE,"The operation could not be completed")))}),ns(m,ss.EventType.MESSAGE,O=>{var F;if(!A){const L=O.data[0];at(!!L,16349);const Y=L,G=(Y==null?void 0:Y.error)||((F=Y[0])==null?void 0:F.error);if(G){U(Xt,`RPC '${t}' stream ${s} received error:`,G);const W=G.status;let ht=function(I){const g=kt[I];if(g!==void 0)return $l(g)}(W),dt=G.message;W==="NOT_FOUND"&&dt.includes("database")&&dt.includes("does not exist")&&dt.includes(this.databaseId.database)&&zn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),ht===void 0&&(ht=C.INTERNAL,dt="Unknown error status: "+W+" with message "+G.message),A=!0,P.o_(new M(ht,dt)),m.close()}else U(Xt,`RPC '${t}' stream ${s} received:`,L),P.__(L)}}),Ir.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ol()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(n){return new Ir(n)}function Zi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){return new tm(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ir.c_=!1;class nu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="PersistentStream";class ru{constructor(t,e,r,s,o,a,u,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new nu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Xe(e.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new M(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return U(wc,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(U(wc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xm extends ru{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=rm(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?Ue(a.readTime):K.min()}(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Eo(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=mo(h)?{documents:om(o,h)}:{query:am(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=zl(o,a.resumeToken);const d=po(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){u.readTime=pi(o,a.snapshotVersion.toTimestamp());const d=po(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=lm(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Eo(this.serializer),e.removeTarget=t,this.K_(e)}}class Jm extends ru{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return at(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,at(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){at(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=im(t.writeResults,t.commitTime),r=Ue(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Eo(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>sm(this.serializer,r))};this.K_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{}class tg extends Zm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,_o(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new M(C.UNKNOWN,o.toString())})}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.jo(t,_o(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new M(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function eg(n,t,e,r){return new tg(n,t,e,r)}class ng{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Xe(e),this.aa=!1):U("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="RemoteStore";class rg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{Yn(this)&&(U(Hn,"Restarting streams for network reachability change."),await async function(h){const d=Q(h);d.Ea.add(4),await Rs(d),d.Va.set("Unknown"),d.Ea.delete(4),await ki(d)}(this))})}),this.Va=new ng(r,s)}}async function ki(n){if(Yn(n))for(const t of n.Ra)await t(!0)}async function Rs(n){for(const t of n.Ra)await t(!1)}function su(n,t){const e=Q(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Qo(e)?Ko(e):Or(e).O_()&&Wo(e,t))}function Go(n,t){const e=Q(n),r=Or(e);e.Ia.delete(t),r.O_()&&iu(e,t),e.Ia.size===0&&(r.O_()?r.L_():Yn(e)&&e.Va.set("Unknown"))}function Wo(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Or(n).Z_(t)}function iu(n,t){n.da.$e(t),Or(n).X_(t)}function Ko(n){n.da=new Yf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Va.ua()}function Qo(n){return Yn(n)&&!Or(n).x_()&&n.Ia.size>0}function Yn(n){return Q(n).Ea.size===0}function ou(n){n.da=void 0}async function sg(n){n.Va.set("Online")}async function ig(n){n.Ia.forEach((t,e)=>{Wo(n,t)})}async function og(n,t){ou(n),Qo(n)?(n.Va.ha(t),Ko(n)):n.Va.set("Unknown")}async function ag(n,t,e){if(n.Va.set("Online"),t instanceof jl&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.da.removeTarget(u))}(n,t)}catch(r){U(Hn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await yi(n,r)}else if(t instanceof si?n.da.Xe(t):t instanceof ql?n.da.st(t):n.da.tt(t),!e.isEqual(K.min()))try{const r=await eu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.da.Tt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(Qt.EMPTY_BYTE_STRING,m.snapshotVersion)),iu(o,h);const T=new gn(m.target,h,d,m.sequenceNumber);Wo(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){U(Hn,"Failed to raise snapshot:",r),await yi(n,r)}}async function yi(n,t,e){if(!Mr(t))throw t;n.Ea.add(1),await Rs(n),n.Va.set("Offline"),e||(e=()=>eu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Hn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await ki(n)})}function au(n,t){return t().catch(e=>yi(n,e,t))}async function Ni(n){const t=Q(n),e=Rn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:No;for(;cg(t);)try{const s=await qm(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,lg(t,s)}catch(s){await yi(t,s)}cu(t)&&lu(t)}function cg(n){return Yn(n)&&n.Ta.length<10}function lg(n,t){n.Ta.push(t);const e=Rn(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function cu(n){return Yn(n)&&!Rn(n).x_()&&n.Ta.length>0}function lu(n){Rn(n).start()}async function ug(n){Rn(n).ra()}async function hg(n){const t=Rn(n);for(const e of n.Ta)t.ea(e.mutations)}async function dg(n,t,e){const r=n.Ta.shift(),s=Uo.from(r,t,e);await au(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Ni(n)}async function fg(n,t){t&&Rn(n).Y_&&await async function(r,s){if(function(a){return Wf(a)&&a!==C.ABORTED}(s.code)){const o=r.Ta.shift();Rn(r).B_(),await au(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Ni(r)}}(n,t),cu(n)&&lu(n)}async function Ac(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),U(Hn,"RemoteStore received new credentials");const r=Yn(e);e.Ea.add(3),await Rs(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await ki(e)}async function mg(n,t){const e=Q(n);t?(e.Ea.delete(2),await ki(e)):t||(e.Ea.add(2),await Rs(e),e.Va.set("Unknown"))}function Or(n){return n.ma||(n.ma=function(e,r,s){const o=Q(e);return o.sa(),new Xm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:sg.bind(null,n),Yo:ig.bind(null,n),t_:og.bind(null,n),J_:ag.bind(null,n)}),n.Ra.push(async t=>{t?(n.ma.B_(),Qo(n)?Ko(n):n.Va.set("Unknown")):(await n.ma.stop(),ou(n))})),n.ma}function Rn(n){return n.fa||(n.fa=function(e,r,s){const o=Q(e);return o.sa(),new Jm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:ug.bind(null,n),t_:fg.bind(null,n),ta:hg.bind(null,n),na:dg.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await Ni(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Hn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Yo(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xo(n,t){if(Xe("AsyncQueue",`${t}: ${n}`),Mr(n))return new M(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{static emptySet(t){return new wr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||q.comparator(e.key,r.key):(e,r)=>q.comparator(e.key,r.key),this.keyedMap=is(),this.sortedSet=new Rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new wr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.ga=new Rt(q.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):z(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class Dr{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Dr(t,e,wr.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Si(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(t=>t.Da())}}class pg{constructor(){this.queries=Sc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=Q(e),o=s.queries;s.queries=Sc(),o.forEach((a,u)=>{for(const h of u.ba)h.onError(r)})})(this,new M(C.ABORTED,"Firestore shutting down"))}}function Sc(){return new Kn(n=>Cl(n),Si)}async function _g(n,t){const e=Q(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new gg,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Xo(a,`Initialization of query '${_r(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Jo(e)}async function yg(n,t){const e=Q(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Eg(n,t){const e=Q(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ba)u.Fa(s)&&(r=!0);a.wa=s}}r&&Jo(e)}function vg(n,t,e){const r=Q(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function Jo(n){n.Ca.forEach(t=>{t.next()})}var Io,bc;(bc=Io||(Io={})).Ma="default",bc.Cache="cache";class Tg{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Dr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Dr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Io.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(t){this.key=t}}class hu{constructor(t){this.key=t}}class Ig{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Z(),this.mutatedKeys=Z(),this.eu=Pl(t),this.tu=new wr(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new Rc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const A=s.get(m),P=bi(this.query,T)?T:null,O=!!A&&this.mutatedKeys.has(A.key),F=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let L=!1;A&&P?A.data.isEqual(P.data)?O!==F&&(r.track({type:3,doc:P}),L=!0):this.su(A,P)||(r.track({type:2,doc:P}),L=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),L=!0):A&&!P&&(r.track({type:1,doc:A}),L=!0,(h||d)&&(u=!0)),L&&(P?(a=a.add(P),o=F?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,T)=>function(P,O){const F=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z(20277,{Vt:L})}};return F(P)-F(O)}(m.type,T.type)||this.eu(m.doc,T.doc)),this.ou(r),s=s??!1;const u=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new Dr(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Rc,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new hu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new uu(r))}),e}cu(t){this.Za=t.ks,this.Ya=Z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Dr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Zo="SyncEngine";class wg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ag{constructor(t){this.key=t,this.hu=!1}}class Rg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Kn(u=>Cl(u),Si),this.Iu=new Map,this.Eu=new Set,this.Ru=new Rt(q.comparator),this.Au=new Map,this.Vu=new qo,this.du={},this.mu=new Map,this.fu=Vr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Sg(n,t,e=!0){const r=_u(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await du(r,t,e,!0),s}async function bg(n,t){const e=_u(n);await du(e,t,!0,!1)}async function du(n,t,e,r){const s=await jm(n.localStore,Fe(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Cg(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&su(n.remoteStore,s),u}async function Cg(n,t,e,r,s){n.pu=(T,A,P)=>async function(F,L,Y,G){let W=L.view.ru(Y);W.Ss&&(W=await Ec(F.localStore,L.query,!1).then(({documents:I})=>L.view.ru(I,W)));const ht=G&&G.targetChanges.get(L.targetId),dt=G&&G.targetMismatches.get(L.targetId)!=null,nt=L.view.applyChanges(W,F.isPrimaryClient,ht,dt);return Pc(F,L.targetId,nt.au),nt.snapshot}(n,T,A,P);const o=await Ec(n.localStore,t,!0),a=new Ig(t,o.ks),u=a.ru(o.documents),h=As.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Pc(n,e,d.au);const m=new wg(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function Pg(n,t,e){const r=Q(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!Si(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Go(r.remoteStore,s.targetId),wo(r,s.targetId)}).catch(xr)):(wo(r,s.targetId),await vo(r.localStore,s.targetId,!0))}async function Vg(n,t){const e=Q(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Go(e.remoteStore,r.targetId))}async function Dg(n,t,e){const r=Fg(n);try{const s=await function(a,u){const h=Q(a),d=Tt.now(),m=u.reduce((P,O)=>P.add(O.key),Z());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let O=Je(),F=Z();return h.xs.getEntries(P,m).next(L=>{O=L,O.forEach((Y,G)=>{G.isValidDocument()||(F=F.add(Y))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,O)).next(L=>{T=L;const Y=[];for(const G of u){const W=qf(G,T.get(G.key).overlayedDocument);W!=null&&Y.push(new Qn(G.key,W,vl(W.value.mapValue),Qe.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,Y,u)}).next(L=>{A=L;const Y=L.applyToLocalDocumentSet(T,F);return h.documentOverlayCache.saveOverlays(P,L.batchId,Y)})}).then(()=>({batchId:A.batchId,changes:Dl(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.du[a.currentUser.toKey()];d||(d=new Rt(J)),d=d.insert(u,h),a.du[a.currentUser.toKey()]=d}(r,s.batchId,e),await Ss(r,s.changes),await Ni(r.remoteStore)}catch(s){const o=Xo(s,"Failed to persist write");e.reject(o)}}async function fu(n,t){const e=Q(n);try{const r=await Bm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(at(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?at(a.hu,14607):s.removedDocuments.size>0&&(at(a.hu,42227),a.hu=!1))}),await Ss(e,r,t)}catch(r){await xr(r)}}function Cc(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=Q(a);h.onlineState=u;let d=!1;h.queries.forEach((m,T)=>{for(const A of T.ba)A.va(u)&&(d=!0)}),d&&Jo(h)}(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function kg(n,t,e){const r=Q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Rt(q.comparator);a=a.insert(o,ee.newNoDocument(o,K.min()));const u=Z().add(o),h=new Vi(K.min(),new Map,new Rt(J),a,u);await fu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),ta(r)}else await vo(r.localStore,t,!1).then(()=>wo(r,t,e)).catch(xr)}async function Ng(n,t){const e=Q(n),r=t.batch.batchId;try{const s=await Um(e.localStore,t);gu(e,r,null),mu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Ss(e,s)}catch(s){await xr(s)}}async function xg(n,t,e){const r=Q(n);try{const s=await function(a,u){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(at(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);gu(r,t,e),mu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Ss(r,s)}catch(s){await xr(s)}}function mu(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function gu(n,t,e){const r=Q(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function wo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach(r=>{n.Vu.containsKey(r)||pu(n,r)})}function pu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(Go(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),ta(n))}function Pc(n,t,e){for(const r of e)r instanceof uu?(n.Vu.addReference(r.key,t),Mg(n,r)):r instanceof hu?(U(Zo,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||pu(n,r.key)):z(19791,{wu:r})}function Mg(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(U(Zo,"New document in limbo: "+e),n.Eu.add(r),ta(n))}function ta(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new q(gt.fromString(t)),r=n.fu.next();n.Au.set(r,new Ag(e)),n.Ru=n.Ru.insert(e,r),su(n.remoteStore,new gn(Fe(bl(e.path)),r,"TargetPurposeLimboResolution",Ii.ce))}}async function Ss(n,t,e){const r=Q(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=zo.Es(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(h,d){const m=Q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>D.forEach(d,A=>D.forEach(A.Ts,P=>m.persistence.referenceDelegate.addReference(T,A.targetId,P)).next(()=>D.forEach(A.Is,P=>m.persistence.referenceDelegate.removeReference(T,A.targetId,P)))))}catch(T){if(!Mr(T))throw T;U(Ho,"Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const P=m.vs.get(A),O=P.snapshotVersion,F=P.withLastLimboFreeSnapshotVersion(O);m.vs=m.vs.insert(A,F)}}}(r.localStore,o))}async function Og(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){U(Zo,"User change. New user:",t.toKey());const r=await tu(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new M(C.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Ss(e,r.Ns)}}function Lg(n,t){const e=Q(n),r=e.Au.get(t);if(r&&r.hu)return Z().add(r.key);{let s=Z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function _u(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=fu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=kg.bind(null,t),t.Pu.J_=Eg.bind(null,t.eventManager),t.Pu.yu=vg.bind(null,t.eventManager),t}function Fg(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ng.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=xg.bind(null,t),t}class Ei{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Di(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Fm(this.persistence,new Mm,t.initialUser,this.serializer)}Cu(t){return new Zl(jo.Vi,this.serializer)}Du(t){return new Hm}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ei.provider={build:()=>new Ei};class Ug extends Ei{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){at(this.persistence.referenceDelegate instanceof _i,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new vm(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?ie.withCacheSize(this.cacheSizeBytes):ie.DEFAULT;return new Zl(r=>_i.Vi(r,e),this.serializer)}}class Ao{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Og.bind(null,this.syncEngine),await mg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new pg}()}createDatastore(t){const e=Di(t.databaseInfo.databaseId),r=Ym(t.databaseInfo);return eg(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new rg(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Cc(this.syncEngine,e,0),function(){return Ic.v()?new Ic:new Gm}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const T=new Rg(s,o,a,u,h,d);return m&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=Q(s);U(Hn,"RemoteStore shutting down."),o.Ea.add(5),await Rs(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Ao.provider={build:()=>new Ao};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Xe("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn="FirestoreClient";class $g{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=te.UNAUTHENTICATED,this.clientId=ko.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{U(Sn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(Sn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Xo(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function to(n,t){n.asyncQueue.verifyOperationInProgress(),U(Sn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await tu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Vc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qg(n);U(Sn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Ac(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Ac(t.remoteStore,s)),n._onlineComponents=t}async function qg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(Sn,"Using user provided OfflineComponentProvider");try{await to(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;zn("Error using user provided cache. Falling back to memory cache: "+e),await to(n,new Ei)}}else U(Sn,"Using default OfflineComponentProvider"),await to(n,new Ug(void 0));return n._offlineComponents}async function yu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(Sn,"Using user provided OnlineComponentProvider"),await Vc(n,n._uninitializedComponentsProvider._online)):(U(Sn,"Using default OnlineComponentProvider"),await Vc(n,new Ao))),n._onlineComponents}function jg(n){return yu(n).then(t=>t.syncEngine)}async function zg(n){const t=await yu(n),e=t.eventManager;return e.onListen=Sg.bind(null,t.syncEngine),e.onUnlisten=Pg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=bg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Vg.bind(null,t.syncEngine),e}function Hg(n,t,e={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Bg({next:A=>{m.Nu(),a.enqueueAndForget(()=>yg(o,T)),A.fromCache&&h.source==="server"?d.reject(new M(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new Tg(u,m,{includeMetadataChanges:!0,Ka:!0});return _g(o,T)}(await zg(n),n.asyncQueue,t,e,r)),r.promise}function Gg(n,t){const e=new En;return n.asyncQueue.enqueueAndForget(async()=>Dg(await jg(n),t,e)),e.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="ComponentProvider",Dc=new Map;function Kg(n,t,e,r,s){return new cf(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Eu(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="firestore.googleapis.com",kc=!0;class Nc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new M(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vu,this.ssl=kc}else this.host=t.host,this.ssl=t.ssl??kc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Jl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ym)throw new M(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Qd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Eu(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new M(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xi{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new M(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new M(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ud;switch(r.type){case"firstParty":return new jd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Dc.get(e);r&&(U(Wg,"Removing Datastore"),Dc.delete(e),r.terminate())}(this),Promise.resolve()}}function Qg(n,t,e,r={}){var d;n=li(n,xi);const s=Po(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&(hh(`https://${u}`),gh("Firestore",!0)),o.host!==vu&&o.host!==u&&zn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!ai(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=te.MOCK_USER;else{m=dh(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new M(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new te(A)}n._authCredentials=new Bd(new cl(m,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ze(this.firestore,t,this._query)}}class zt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new zt(this.firestore,t,this._key)}toJSON(){return{type:zt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Is(e,zt._jsonSchema))return new zt(t,r||null,new q(gt.fromString(e.referencePath)))}}zt._jsonSchemaVersion="firestore/documentReference/1.0",zt._jsonSchema={type:xt("string",zt._jsonSchemaVersion),referencePath:xt("string")};class vn extends Ze{constructor(t,e,r){super(t,e,bl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new zt(this.firestore,null,new q(t))}withConverter(t){return new vn(this.firestore,t,this._path)}}function Tu(n,t,...e){if(n=qn(n),ll("collection","path",t),n instanceof xi){const r=gt.fromString(t,...e);return Wa(r),new vn(n,null,r)}{if(!(n instanceof zt||n instanceof vn))throw new M(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(t,...e));return Wa(r),new vn(n.firestore,null,r)}}function Yg(n,t,...e){if(n=qn(n),arguments.length===1&&(t=ko.newId()),ll("doc","path",t),n instanceof xi){const r=gt.fromString(t,...e);return Ga(r),new zt(n,null,new q(r))}{if(!(n instanceof zt||n instanceof vn))throw new M(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(t,...e));return Ga(r),new zt(n.firestore,n instanceof vn?n.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc="AsyncQueue";class Mc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new nu(this,"async_queue_retry"),this._c=()=>{const r=Zi();r&&U(xc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Zi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new En;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Mr(t))throw t;U(xc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Xe("INTERNAL UNHANDLED ERROR: ",Oc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Yo.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&z(47125,{Pc:Oc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function Oc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class ea extends xi{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Mc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Mc(t),this._firestoreClient=void 0,await t}}}function Xg(n,t){const e=typeof n=="object"?n:Jc(),r=typeof n=="string"?n:hi,s=vd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=lh("firestore");o&&Qg(s,...o)}return s}function Iu(n){if(n._terminated)throw new M(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Jg(n),n._firestoreClient}function Jg(n){var r,s,o,a;const t=n._freezeSettings(),e=Kg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new $g(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(Qt.fromBase64String(t))}catch(e){throw new M(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new he(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:he._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Is(t,he._jsonSchema))return he.fromBase64String(t.bytes)}}he._jsonSchemaVersion="firestore/bytes/1.0",he._jsonSchema={type:xt("string",he._jsonSchemaVersion),bytes:xt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new M(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new M(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new M(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(t){if(Is(t,Be._jsonSchema))return new Be(t.latitude,t.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:xt("string",Be._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Te._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Is(t,Te._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Te(t.vectorValues);throw new M(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Te._jsonSchemaVersion="firestore/vectorValue/1.0",Te._jsonSchema={type:xt("string",Te._jsonSchemaVersion),vectorValues:xt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zg=/^__.*__$/;class tp{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Qn(t,this.data,this.fieldMask,e,this.fieldTransforms):new ws(t,this.data,e,this.fieldTransforms)}}function Au(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:n})}}class ra{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new ra({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return vi(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Au(this.dataSource)&&Zg.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class ep{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Di(t)}createContext(t,e,r,s=!1){return new ra({dataSource:t,methodName:e,targetDoc:r,path:Kt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function sa(n){const t=n._freezeSettings(),e=Di(n._databaseId);return new ep(n._databaseId,!!t.ignoreUndefinedProperties,e)}function np(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);Cu("Data must be an object, but it was:",a,r);const u=Su(r,a);let h,d;if(o.merge)h=new ve(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const A=Mi(t,T,e);if(!a.contains(A))throw new M(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);ip(m,A)||m.push(A)}h=new ve(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new tp(new ue(u),h,d)}class ia extends na{_toFieldTransform(t){return new Ff(t.path,new Es)}isEqual(t){return t instanceof ia}}function Ru(n,t,e,r=!1){return oa(e,n.createContext(r?4:3,t))}function oa(n,t){if(bu(n=qn(n)))return Cu("Unsupported field value:",t,n),Su(n,t);if(n instanceof na)return function(r,s){if(!Au(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=oa(u,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=qn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Tt.fromDate(r);return{timestampValue:pi(s.serializer,o)}}if(r instanceof Tt){const o=new Tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pi(s.serializer,o)}}if(r instanceof Be)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof he)return{bytesValue:zl(s.serializer,r._byteString)};if(r instanceof zt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:$o(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Te)return function(a,u){const h=a instanceof Te?a.toArray():a;return{mapValue:{fields:{[yl]:{stringValue:El},[di]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw u.createError("VectorValues must only contain numeric values.");return Fo(u.serializer,m)})}}}}}}(r,s);if(Xl(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ti(r)}`)}(n,t)}function Su(n,t){const e={};return dl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gn(n,(r,s)=>{const o=oa(s,t.childContextForField(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function bu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Tt||n instanceof Be||n instanceof he||n instanceof zt||n instanceof na||n instanceof Te||Xl(n))}function Cu(n,t,e){if(!bu(e)||!ul(e)){const r=Ti(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Mi(n,t,e){if((t=qn(t))instanceof wu)return t._internalPath;if(typeof t=="string")return sp(n,t);throw vi("Field path arguments must be of type string or ",n,!1,void 0,e)}const rp=new RegExp("[~\\*/\\[\\]]");function sp(n,t,e){if(t.search(rp)>=0)throw vi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new wu(...t.split("."))._internalPath}catch{throw vi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function vi(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new M(C.INVALID_ARGUMENT,u+n+h)}function ip(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{convertValue(t,e="none"){switch(An(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(wn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Gn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[di].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>Dt(a.doubleValue));return new Te(e)}convertGeoPoint(t){return new Be(Dt(t.latitude),Dt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ri(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(gs(t));default:return null}}convertTimestamp(t){const e=In(t);return new Tt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=gt.fromString(t);at(Yl(r),9688,{name:t});const s=new ps(r.get(1),r.get(3)),o=new q(r.popFirst(5));return s.isEqual(e)||Xe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap extends op{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new zt(this.firestore,null,e)}}function cp(){return new ia("serverTimestamp")}const Lc="@firebase/firestore",Fc="4.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new zt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new lp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Mi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class lp extends aa{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function up(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ca{}class Oi extends ca{}function hp(n,t,...e){let r=[];t instanceof ca&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof ua).length,u=o.filter(h=>h instanceof la).length;if(a>1||a>0&&u>0)throw new M(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class la extends Oi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new la(t,e,r)}_apply(t){const e=this._parse(t);return Pu(t._query,e),new Ze(t.firestore,t.converter,go(t._query,e))}_parse(t){const e=sa(t.firestore);return function(o,a,u,h,d,m,T){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new M(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Bc(T,m);const O=[];for(const F of T)O.push(Uc(h,o,F));A={arrayValue:{values:O}}}else A=Uc(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Bc(T,m),A=Ru(u,a,T,m==="in"||m==="not-in");return Nt.create(d,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class ua extends ca{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new ua(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Ie.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Pu(a,h),a=go(a,h)}(t._query,e),new Ze(t.firestore,t.converter,go(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ha extends Oi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ha(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ys(o,a)}(t._query,this._field,this._direction);return new Ze(t.firestore,t.converter,Sf(t._query,e))}}function dp(n,t="asc"){const e=t,r=Mi("orderBy",n);return ha._create(r,e)}class da extends Oi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new da(t,e,r)}_apply(t){return new Ze(t.firestore,t.converter,mi(t._query,this._limit,this._limitType))}}function fp(n){return Yd("limit",n),da._create("limit",n,"F")}class fa extends Oi{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new fa(t,e,r)}_apply(t){const e=gp(t,this.type,this._docOrFields,this._inclusive);return new Ze(t.firestore,t.converter,bf(t._query,e))}}function mp(...n){return fa._create("startAfter",n,!1)}function gp(n,t,e,r){if(e[0]=qn(e[0]),e[0]instanceof aa)return function(o,a,u,h,d){if(!h)throw new M(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const m=[];for(const T of Tr(o))if(T.field.isKeyField())m.push(fi(a,h.key));else{const A=h.data.field(T.field);if(Ai(A))throw new M(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const P=T.field.canonicalString();throw new M(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}m.push(A)}return new Pr(m,d)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=sa(n.firestore);return function(a,u,h,d,m,T){const A=a.explicitOrderBy;if(m.length>A.length)throw new M(C.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let O=0;O<m.length;O++){const F=m[O];if(A[O].field.isKeyField()){if(typeof F!="string")throw new M(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof F}`);if(!Lo(a)&&F.indexOf("/")!==-1)throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${F}' contains a slash.`);const L=a.path.child(gt.fromString(F));if(!q.isDocumentKey(L))throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${L}' is not because it contains an odd number of segments.`);const Y=new q(L);P.push(fi(u,Y))}else{const L=Ru(h,d,F);P.push(L)}}return new Pr(P,T)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Uc(n,t,e){if(typeof(e=qn(e))=="string"){if(e==="")throw new M(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lo(t)&&e.indexOf("/")!==-1)throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(gt.fromString(e));if(!q.isDocumentKey(r))throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fi(n,new q(r))}if(e instanceof zt)return fi(n,e._key);throw new M(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ti(e)}.`)}function Bc(n,t){if(!Array.isArray(n)||n.length===0)throw new M(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Pu(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new M(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function pp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Js{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ar extends aa{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ii(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Mi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ar._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:xt("string",Ar._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class ii extends Ar{data(t={}){return super.data(t)}}class Rr{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ii(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new M(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new ii(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Js(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ii(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Js(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:_p(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new M(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Rr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ko.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function _p(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z(61501,{type:n})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr._jsonSchemaVersion="firestore/querySnapshot/1.0",Rr._jsonSchema={type:xt("string",Rr._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};function yp(n){n=li(n,Ze);const t=li(n.firestore,ea),e=Iu(t),r=new ap(t);return up(n._query),Hg(e,n._query).then(s=>new Rr(t,r,n,s))}function Ep(n,t){const e=li(n.firestore,ea),r=Yg(n),s=pp(n.converter,t),o=sa(n.firestore);return vp(e,[np(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function vp(n,t){const e=Iu(n);return Gg(e,t)}(function(t,e=!0){Fd(Ad),ci(new hs("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new ea(new $d(r.getProvider("auth-internal")),new zd(a,r.getProvider("app-check-internal")),lf(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),vr(Lc,Fc,t),vr(Lc,Fc,"esm2020")})();const Tp={apiKey:"AIzaSyAaqDVxolZFagNkLHIWMIe0CsEeM0oQh78",authDomain:"kylehe-notes.firebaseapp.com",projectId:"kylehe-notes",storageBucket:"kylehe-notes.firebasestorage.app",messagingSenderId:"751334076604",appId:"1:751334076604:web:5627979301ef4cec0320b9"},Ip=Rd().length?Jc():Xc(Tp),Vu=Xg(Ip),Du="notes";function wp(n){const t=n.data();return{id:n.id,createdAt:t.createdAtDisplay||"",text:t.text||"",textSizeLines:t.textSizeLines||1,stickers:t.stickers||[],deckRotation:t.deckRotation||0,deckOffsetX:t.deckOffsetX||0,deckOffsetY:t.deckOffsetY||0,backgroundUrl:t.backgroundUrl||""}}async function $c(n=8,t=null){const e=[Tu(Vu,Du),dp("createdAt","desc"),fp(n)];t&&e.push(mp(t));const r=await yp(hp(...e)),s=r.docs[r.docs.length-1]||null;return{notes:r.docs.map(wp),lastDoc:s,hasMore:r.docs.length===n}}async function Ap(n){return(await Ep(Tu(Vu,Du),{createdAt:cp(),createdAtDisplay:n.createdAt,text:n.text,textSizeLines:n.textSizeLines,stickers:n.stickers.map(e=>({src:e.src,x:e.x,y:e.y,width:e.width,height:e.height,rotation:e.rotation})),deckRotation:n.deckRotation,deckOffsetX:n.deckOffsetX,deckOffsetY:n.deckOffsetY,backgroundUrl:n.backgroundUrl})).id}var Rp=Ct('<div role="presentation"></div>'),Sp=Ct('<div role="presentation"></div>'),bp=Ct('<!> <!> <div class="sticker-rotate-line svelte-102gchk"></div> <div class="sticker-rotate-handle svelte-102gchk" role="presentation"></div>',1),Cp=Ct('<div role="presentation"><img alt="sticker" class="sticker-img svelte-102gchk" draggable="false" aria-hidden="true"> <!></div>'),Pp=Ct('<textarea class="note-text font-serif svelte-102gchk" rows="1" placeholder="leave a note"></textarea>'),Vp=Ct('publishing<span class="publishing-dots svelte-102gchk"></span>',1),Dp=Ct('<p class="publish-error font-serif svelte-102gchk">something went wrong – try again?</p>'),kp=Ct('<div class="fade-in svelte-102gchk"><section class="note-layout svelte-102gchk"><div role="presentation" class="svelte-102gchk"><!></div> <div class="controls svelte-102gchk"><!> <div class="actions svelte-102gchk"><button type="button" class="action-button action-button-clear svelte-102gchk">clear</button> <button type="button" class="action-button action-button-delete svelte-102gchk">delete</button> <button type="button" class="action-button action-button-publish svelte-102gchk"><!></button> <!></div></div></section> <hr class="separator svelte-102gchk"></div>'),Np=Ct('<p class="font-serif text-sm text-neutral-400 svelte-102gchk">loading notes...</p>'),xp=Ct('<p class="font-serif text-sm text-neutral-500 svelte-102gchk">no notes yet – make one!</p>'),Mp=Ct('<div class="deck-sticker svelte-102gchk"><img alt="sticker" class="deck-sticker-img svelte-102gchk" draggable="false"></div>'),Op=Ct("<p> </p>"),Lp=Ct('<article class="deck-card svelte-102gchk"><!></article>'),Fp=Ct('<div class="load-more-row svelte-102gchk"><button class="load-more font-serif svelte-102gchk"> </button></div>'),Up=Ct('<div class="deck-grid svelte-102gchk"></div> <!>',1),Bp=Ct('<img alt="" class="palette-drag-ghost svelte-102gchk" draggable="false">'),$p=Ct('<!> <main class="mt-8 space-y-10 svelte-102gchk"><section class="mt-4 svelte-102gchk"><div class="header-row svelte-102gchk"><div class="svelte-102gchk"><h2 class="font-serif text-2xl font-semibold text-left svelte-102gchk">Leave a note!</h2> <p class="font-serif text-base text-left mt-2 svelte-102gchk">Build your own polaroid card, leave a note, and publish it to my website :)</p></div> <button aria-label="Start a new polaroid"><img alt="Polaroid camera" class="header-camera svelte-102gchk"> <span class="header-camera-hint font-serif svelte-102gchk">(hint: click the camera)</span></button></div> <hr class="separator svelte-102gchk"></section> <div><!> <section class="deck svelte-102gchk"><!></section></div></main> <!>',1);function n_(n,t){So(t,!1);const e=yt(),r=yt(),s=[`${Jt}/images/stickers/banana.png`,`${Jt}/images/stickers/cactus.png`,`${Jt}/images/stickers/cactus2.png`,`${Jt}/images/stickers/cat_doodle.png`,`${Jt}/images/stickers/coquette.png`,`${Jt}/images/stickers/dog.png`,`${Jt}/images/stickers/drunk_dog.png`,`${Jt}/images/stickers/happy_dog.png`,`${Jt}/images/stickers/happy_heart.png`,`${Jt}/images/stickers/mushroom.png`,`${Jt}/images/stickers/musical_note.png`,`${Jt}/images/stickers/snowman.png`,`${Jt}/images/stickers/sunglasses.png`];function o(R){const V=[...R];for(let k=V.length-1;k>0;k--){const B=Math.floor(Math.random()*(k+1));[V[k],V[B]]=[V[B],V[k]]}return V}function a(){return o(s).slice(0,9)}let u=yt(a()),h=yt(null),d=null,m=1,T=yt(!0),A=yt(!1),P=yt(!1),O=null;const F=8,L=new Date().toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),Y=80;function G(R,V,k){return Math.min(k,Math.max(V,R))}function W(R,V,k){const B=k*Math.PI/180,$=Math.cos(B),j=Math.sin(B);return{x:R*$-V*j,y:R*j+V*$}}function ht(R,V,k){switch(R){case"br":return[-V,-k];case"bl":return[V,-k];case"tr":return[-V,k];case"tl":return[V,k];case"r":return[-V,0];case"l":return[V,0];case"b":return[0,-k];case"t":return[0,k];default:return[0,0]}}function dt(R){const V=R.width<0?R.x+R.width:R.x,k=R.height<0?R.y+R.height:R.y;return`left:${V}%;top:${k}%;width:${Math.abs(R.width)}%;height:${Math.abs(R.height)}%;transform:rotate(${R.rotation||0}deg)`}function nt(R){const V=R.width<0?-1:1,k=R.height<0?-1:1;return V===1&&k===1?"":`transform:scale(${V},${k})`}function I(){return`https://picsum.photos/id/${Math.floor(Math.random()*1084)}/600/600.jpg`}function g(){return{id:0,createdAt:L,text:"",textSizeLines:1,stickers:[],deckRotation:0,deckOffsetX:0,deckOffsetY:0,backgroundUrl:I()}}let _=yt(!1),w=yt(null),E=null,y=yt(g()),p=v(y).text,Mt=v(y).textSizeLines,ne=yt([]),St=yt(null),tn=yt(null),bt=yt(),we=yt(),en=!1,qe=null,Lr=0,Fr=0,bn=0,Xn=0,de=yt(!1),Ae=null,nn=null,Ur=0,bs=0,Cs=0,Br=0,Jn=0,$r=0,Cn,Zn=0,Re=yt(!1),je=null,Ot=0,Bt=0,rn=0,qr=0,tr=0,H=yt(null),Se=yt(0),sn,be=yt(!1);const jr={t:90,b:90,l:0,r:0,tl:45,br:45,tr:135,bl:135},on=new Map;function Li(R,V=16,k=16){const B=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">${R}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(B)}") ${V} ${k}, pointer`}function zr(R,V){const k=Math.round(((jr[R]||0)+(V||0))%360+360)%360,B=`r${k}`;if(!on.has(B)){const $="M8,16 L24,16 M8,16 L12,12 M8,16 L12,20 M24,16 L20,12 M24,16 L20,20",j=`<g transform="rotate(${k} 16 16)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="${$}" stroke="white" stroke-width="4"/><path d="${$}" stroke="#222" stroke-width="1.5"/></g>`;on.set(B,Li(j))}return on.get(B)}const Hr="M22.4789 9.45728L25.9935 12.9942L22.4789 16.5283V14.1032C18.126 14.1502 14.6071 17.6737 14.5675 22.0283H17.05L13.513 25.543L9.97889 22.0283H12.5674C12.6071 16.5691 17.0214 12.1503 22.4789 12.1031L22.4789 9.45728Z";function Ce(R){const V=Math.round(((R||0)%360+360)%360),k=`rot${V}`;if(!on.has(k)){const B=-V*Math.PI/180,$=Math.sin(B),j=Math.cos(B),rt=(j-$).toFixed(2),wt=($+j).toFixed(2),vt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><filter id="shadow" y="-40%" x="-40%" width="180%" height="180%" color-interpolation-filters="sRGB"><feDropShadow dx="${rt}" dy="${wt}" stdDeviation="1.2" flood-opacity=".5"/></filter></defs><g transform="rotate(${V} 16 16)" filter="url(#shadow)"><path d="${Hr}" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="${Hr}" fill="#222"/></g></svg>`;on.set(k,`url("data:image/svg+xml,${encodeURIComponent(vt)}") 16 16, pointer`)}return on.get(k)}function an(R){document.body.style.setProperty("--sticker-cursor",R),document.body.classList.contains("cursor-lock")||document.body.classList.add("cursor-lock")}function Gr(){document.body.classList.remove("cursor-lock"),document.body.style.removeProperty("--sticker-cursor")}function ze(R,V,k){if(!v(bt))return;const B=v(bt).getBoundingClientRect();if(V&&k){const $=V/B.width*100,j=k/B.height*100,rt={id:m++,src:R,x:50-$/2,y:50-j/2,width:$,height:j,rotation:0};N(y,{...v(y),stickers:[...v(y).stickers,rt]}),N(St,rt.id)}else{const $=new Image;$.onload=()=>{const j=v(bt).getBoundingClientRect(),rt=24,wt=$.naturalWidth/$.naturalHeight,vt=rt*wt*(j.height/j.width),lt={id:m++,src:R,x:50-vt/2,y:50-rt/2,width:vt,height:rt,rotation:0};N(y,{...v(y),stickers:[...v(y).stickers,lt]}),N(St,lt.id)},$.src=R}}function Ps(R){ln();const{src:V,clientX:k,clientY:B,imgWidth:$,imgHeight:j,offsetX:rt,offsetY:wt}=R.detail,vt=new Image;vt.src=V;const lt=vt.complete?vt.naturalWidth:100,st=vt.complete?vt.naturalHeight:100;N(H,{src:V,x:k,y:B,startX:k,startY:B,naturalWidth:lt,naturalHeight:st,imgWidth:$,imgHeight:j,offsetX:rt,offsetY:wt})}function fe(R){return v(y).stickers.findIndex(V=>V.id===R)}function er(R,V){const k=v(y).stickers.slice();k[R]={...k[R],...V},N(y,{...v(y),stickers:k})}function Pe(R){N(be,R.pointerType!=="mouse")}function Vs(R,V){if(R.stopPropagation(),Pe(R),!v(bt))return;const k=fe(V);k!==-1&&(N(St,V),N(de,!1),Ae=null,N(Re,!1),je=null,en=!0,qe=V,Lr=R.clientX,Fr=R.clientY,bn=v(y).stickers[k].x,Xn=v(y).stickers[k].y,v(be)||an("grabbing"))}function Ht(R){Pe(R),N(St,null)}function Wr(R){if(v(H)){N(H,{...v(H),x:R.clientX,y:R.clientY});return}if(v(bt)){if(v(Re)&&je!=null){const V=fe(je);if(V===-1)return;const k=R.clientX-rn,B=R.clientY-qr,$=Math.atan2(B,k)*180/Math.PI;let j=Bt+($-Ot);R.shiftKey&&(j=Math.round(j/15)*15),er(V,{rotation:j}),v(be)||an(Ce(j+tr));return}if(en&&qe!=null){const V=v(bt).getBoundingClientRect(),k=(R.clientX-Lr)/V.width*100,B=(R.clientY-Fr)/V.height*100,$=fe(qe);if($===-1)return;const j=v(y).stickers[$];er($,{x:G(bn+k,-.5*j.width,100-.5*j.width),y:G(Xn+B,-.5*j.height,100-.5*j.height)});return}if(v(de)&&Ae!=null&&nn&&Cn){const V=fe(Ae);if(V===-1)return;const k=Cn.width,B=Cn.height,$=Zn,j=W(R.clientX-Jn,R.clientY-$r,-$),rt=Cs/100*k,wt=Br/100*B,vt=Ur/100*k,lt=bs/100*B,st=Y/100*k,At=Y/100*B,ge=Math.sign(rt)||1,pe=Math.sign(wt)||1;let ae=rt,Pt=wt;const pt=nn;(pt==="br"||pt==="tr"||pt==="r")&&(ae=G(rt+j.x*ge,-st,st)),(pt==="bl"||pt==="tl"||pt==="l")&&(ae=G(rt-j.x*ge,-st,st)),(pt==="br"||pt==="bl"||pt==="b")&&(Pt=G(wt+j.y*pe,-At,At)),(pt==="tl"||pt==="tr"||pt==="t")&&(Pt=G(wt-j.y*pe,-At,At));const It=vt+rt/2,Lt=lt+wt/2,[ct,le]=ht(pt,Math.abs(rt)/2,Math.abs(wt)/2),De=W(ct,le,$),[_t,re]=ht(pt,Math.abs(ae)/2,Math.abs(Pt)/2),_e=(Math.sign(rt)||1)!==(Math.sign(ae)||1),We=(Math.sign(wt)||1)!==(Math.sign(Pt)||1),ur=pt!=="t"&&pt!=="b",Gt=pt!=="l"&&pt!=="r",it=W(ur&&_e?-_t:_t,Gt&&We?-re:re,$),hr=It+De.x-it.x,dr=Lt+De.y-it.y;er(V,{x:(hr-ae/2)/k*100,y:(dr-Pt/2)/B*100,width:ae/k*100,height:Pt/B*100})}}}function cn(R){var V;if(v(H)){if(!(Math.hypot(v(H).x-v(H).startX,v(H).y-v(H).startY)>5))ze(v(H).src,v(H).imgWidth,v(H).imgHeight);else{const B=(V=v(bt))==null?void 0:V.getBoundingClientRect();if(B&&v(H).x>=B.left&&v(H).x<=B.right&&v(H).y>=B.top&&v(H).y<=B.bottom){const $=v(H).imgWidth/B.width*100,j=v(H).imgHeight/B.height*100,rt=v(H).imgWidth>0?v(H).offsetX/v(H).imgWidth:.5,wt=v(H).imgHeight>0?v(H).offsetY/v(H).imgHeight:.5,vt=(v(H).x-B.left)/B.width*100-$*rt,lt=(v(H).y-B.top)/B.height*100-j*wt,st={id:m++,src:v(H).src,x:G(vt,-.5*$,100-.5*$),y:G(lt,-.5*j,100-.5*j),width:$,height:j,rotation:0};N(y,{...v(y),stickers:[...v(y).stickers,st]}),N(St,st.id)}}N(H,null)}!en&&!v(de)&&!v(Re)||ln()}function Pn(R,V,k){if(R.stopPropagation(),R.preventDefault(),Pe(R),!v(bt))return;const B=fe(V);if(B===-1)return;N(St,V),en=!1,qe=null;const $=v(y).stickers[B];Cn=v(bt).getBoundingClientRect(),Ur=$.x,bs=$.y,Cs=$.width,Br=$.height,Jn=R.clientX,$r=R.clientY,Zn=$.rotation||0,nn=k,N(de,!0),Ae=V,v(be)||an(zr(k,$.rotation||0))}function Ds(R,V,k=0){if(R.stopPropagation(),R.preventDefault(),Pe(R),!v(bt))return;const B=fe(V);if(B===-1)return;N(St,V),en=!1,N(de,!1);const $=v(y).stickers[B],j=v(bt).getBoundingClientRect();rn=j.left+($.x+$.width/2)/100*j.width,qr=j.top+($.y+$.height/2)/100*j.height;const rt=R.clientX-rn,wt=R.clientY-qr;Ot=Math.atan2(wt,rt)*180/Math.PI,Bt=$.rotation||0,tr=k,N(Re,!0),je=V,v(be)||an(Ce(($.rotation||0)+k))}function ln(){en=!1,qe=null,N(de,!1),Ae=null,nn=null,Cn=void 0,N(Re,!1),je=null,tr=0,Gr()}function He(R){(qe===R||Ae===R||je===R)&&ln(),N(y,{...v(y),stickers:v(y).stickers.filter(V=>V.id!==R)}),v(St)===R&&N(St,null)}function Fi(){v(St)!=null&&He(v(St))}function Ui(){v(y).stickers.length!==0&&(ln(),N(y,{...v(y),stickers:[]}),N(St,null),N(tn,null))}function Vn(R){v(St)!=null&&(R.key==="Backspace"||R.key==="Delete")&&(R.preventDefault(),He(v(St)))}const ks={1:2,2:1.5,3:1},nr=3;function Dn(R,V){const k=ks[V]||1;R.style.fontSize=`${4.4*k}cqi`}function un(R){const V=getComputedStyle(R),k=parseFloat(V.lineHeight||"0");return k?Math.max(1,Math.round(R.scrollHeight/k)):1}function Ns(R){for(const V of[1,2,3]){Dn(R,V),R.style.height="auto";const k=un(R);if(k<=V)return{targetLines:V,visualLines:k}}return Dn(R,nr),R.style.height="auto",{targetLines:nr,visualLines:un(R)}}function me(R){if(!R)return;const V=R.value;N(y,{...v(y),text:V});let k=Ns(R);k.visualLines>nr?(N(y,{...v(y),text:p,textSizeLines:Mt}),R.value=p,k=Ns(R)):(p=V,Mt=k.targetLines,N(y,{...v(y),textSizeLines:k.targetLines})),Dn(R,k.targetLines),R.style.height="auto",R.style.height=`${R.scrollHeight}px`}function xs(R){me(R.target)}function Ms(){ln(),N(y,g()),p=v(y).text,Mt=v(y).textSizeLines,N(St,null),N(tn,null),N(_,!1),requestAnimationFrame(()=>{N(_,!0)})}async function Kr(){if(!(v(A)||!v(P))){N(A,!0);try{const R=await $c(F,O);N(ne,[...v(ne),...R.notes]),O=R.lastDoc,N(P,R.hasMore)}catch(R){console.error("Failed to load more notes:",R)}finally{N(A,!1)}}}let kn=yt(!1);async function Qr(R,V=3){return new Promise(k=>{const B=new Image,$=setTimeout(()=>{B.onload=B.onerror=null,k(R)},8e3);B.onload=()=>{clearTimeout($),k(R)},B.onerror=()=>{if(clearTimeout($),V>0){const j=Math.floor(Math.random()*200);Qr(`https://picsum.photos/id/${j}/600/600.jpg`,V-1).then(k)}else k("https://picsum.photos/id/10/600/600.jpg")},B.src=R})}let Nn=yt(!1);async function Os(){if(!v(r)||v(w)||v(Nn))return;ln(),N(kn,!1),N(Nn,!0);const R={...v(y),id:"",createdAt:L,stickers:v(y).stickers.map(V=>({...V})),deckRotation:Math.random()*8-4,deckOffsetX:Math.random()*16-8,deckOffsetY:0};try{R.backgroundUrl=await Qr(R.backgroundUrl);const V=await Ap(R);R.id=V,E=R,N(w,"out")}catch(V){console.error("Failed to publish note:",V),N(kn,!0)}finally{N(Nn,!1)}}function Bi(R){R.target===R.currentTarget&&(v(w)==="out"?(E&&(N(ne,[E,...v(ne)]),E=null),N(y,g()),p=v(y).text,Mt=v(y).textSizeLines,N(St,null),N(_,!1),N(w,"in")):v(w)==="in"&&N(w,null))}const rr=["tl","tr","bl","br","l","r","t","b"],Ls=["tl","tr","bl","br"],sr={tl:0,tr:90,bl:270,br:180};function xn(){v(h)||(d=a(),N(h,"out"))}function Ge(){v(h)==="out"?(N(u,d||a()),d=null,N(h,"in")):v(h)==="in"&&N(h,null)}zu(({from:R,to:V})=>{R!=null&&R.url&&(V!=null&&V.url)&&R.url.pathname===V.url.pathname&&(N(_,!1),N(w,null),E=null)}),Uu(async()=>{if(!(typeof window>"u")){window.addEventListener("pointermove",Wr),window.addEventListener("pointerup",cn),window.addEventListener("keydown",Vn),N(be,window.matchMedia("(pointer: coarse)").matches),v(bt)&&(N(Se,v(bt).clientHeight),sn=new ResizeObserver(()=>{N(Se,v(bt).clientHeight)}),sn.observe(v(bt)));try{const R=await $c(F);N(ne,R.notes),O=R.lastDoc,N(P,R.hasMore)}catch(R){console.error("Failed to load notes:",R)}finally{N(T,!1)}}}),Bu(()=>{typeof window>"u"||(window.removeEventListener("pointermove",Wr),window.removeEventListener("pointerup",cn),window.removeEventListener("keydown",Vn),sn==null||sn.disconnect())}),Zs(()=>v(Se),()=>{N(e,v(Se)*.24)}),Zs(()=>v(y),()=>{N(r,v(y).text.trim().length>0||v(y).stickers.length>0)}),Zs(()=>(v(_),v(we)),()=>{v(_)&&v(we)&&typeof window<"u"&&me(v(we))}),qc(),Ro();var ir=$p(),Fs=mr(ir);ju(Fs,{meta:{title:"Kyle He - Notes",description:"notes"}});var or=Vt(Fs,2),ar=ut(or),Yr=ut(ar),hn=Vt(ut(Yr),2);let cr;var Us=ut(hn);mn(Us,"src",`${Jt??""}/images/polaroid_camera.png`),Gs(2),ot(hn),ot(Yr),Gs(2),ot(ar);var Mn=Vt(ar,2);let Xr;var Bs=ut(Mn);{var Ve=R=>{var V=kp(),k=ut(V),B=ut(k),$=ut(B);Da($,{get date(){return v(y).createdAt},get backgroundUrl(){return v(y).backgroundUrl},shadow:!0,get innerEl(){return v(bt)},set innerEl(It){N(bt,It)},$$slots:{canvas:(It,Lt)=>{var ct=Hi(),le=mr(ct);gr(le,1,()=>v(y).stickers,rs,(De,_t)=>{var re=Cp(),_e=ut(re),We=Vt(_e,2);{var ur=Gt=>{var it=bp(),hr=mr(it);gr(hr,1,()=>Ls,rs,(ke,Ne)=>{var se=Rp();Zt(Yt=>{Ee(se,1,`sticker-rotate-corner sticker-rotate-corner-${v(Ne)??""}`,"svelte-102gchk"),Me(se,`cursor: ${Yt??""}`)},[()=>Ce((v(_t).rotation||0)+sr[v(Ne)])],Oe),qt("pointerdown",se,Yt=>Ds(Yt,v(_t).id,sr[v(Ne)])),Et(ke,se)});var dr=Vt(hr,2);gr(dr,1,()=>rr,rs,(ke,Ne)=>{var se=Sp();Zt(Yt=>{Ee(se,1,`sticker-handle sticker-handle-${v(Ne)??""}`,"svelte-102gchk"),Me(se,`cursor: ${Yt??""}`)},[()=>zr(v(Ne),v(_t).rotation)],Oe),qt("pointerdown",se,Yt=>Pn(Yt,v(_t).id,v(Ne))),Et(ke,se)});var Zr=Vt(dr,4);Zt(ke=>Me(Zr,`cursor: ${ke??""}`),[()=>Ce((v(_t).rotation||0)+45)],Oe),qt("pointerdown",Zr,ke=>Ds(ke,v(_t).id,45)),Et(Gt,it)};ye(We,Gt=>{v(_t).id===v(St)&&Gt(ur)})}ot(re),Zt((Gt,it)=>{Ee(re,1,`sticker-wrapper ${(v(_t).id===v(St)?"selected":v(_t).id===v(tn)?"hovered":"")??""} ${(v(_t).id===v(St)&&(v(de)||v(Re))?"interacting":"")??""} ${(v(be)?"coarse":"")??""}`,"svelte-102gchk"),Me(re,Gt),mn(_e,"src",v(_t).src),Me(_e,it)},[()=>dt(v(_t)),()=>nt(v(_t))],Oe),qt("pointerdown",re,Gt=>Vs(Gt,v(_t).id)),qt("pointerenter",re,Gt=>{Gt.pointerType==="mouse"&&N(tn,v(_t).id)}),qt("pointerleave",re,Gt=>{Gt.pointerType==="mouse"&&v(tn)===v(_t).id&&N(tn,null)}),Et(De,re)}),Et(It,ct)},footer:(It,Lt)=>{var ct=Pp();Hu(ct),jc(ct,le=>N(we,le),()=>v(we)),Zt(()=>$u(ct,v(y).text)),qt("input",ct,xs),Et(It,ct)}},$$legacy:!0}),ot(B);var j=Vt(B,2),rt=ut(j);const wt=Oe(()=>v(H)&&Math.hypot(v(H).x-v(H).startX,v(H).y-v(H).startY)>5?v(H).src:null);Ju(rt,{get stickers(){return v(u)},get maxHeight(){return v(e)},get draggingSrc(){return v(wt)},get phase(){return v(h)},$$events:{dragstart:Ps,reload:xn,animationend:Ge}});var vt=Vt(rt,2),lt=ut(vt),st=Vt(lt,2),At=Vt(st,2),ge=ut(At);{var pe=It=>{var Lt=Vp();Gs(),Et(It,Lt)},ae=It=>{var Lt=xu("publish");Et(It,Lt)};ye(ge,It=>{v(Nn)?It(pe):It(ae,!1)})}ot(At);var Pt=Vt(At,2);{var pt=It=>{var Lt=Dp();Et(It,Lt)};ye(Pt,It=>{v(kn)&&It(pt)})}ot(vt),ot(j),ot(k),Gs(2),ot(V),Zt(()=>{lt.disabled=v(y).stickers.length===0,st.disabled=v(St)==null,At.disabled=!v(r)||v(Nn)}),qt("pointerdown",B,Ht),qt("click",lt,Ui),qt("click",st,Fi),qt("click",At,Os),Et(R,V)};ye(Bs,R=>{v(_)&&R(Ve)})}var oe=Vt(Bs,2),On=ut(oe);{var Ln=R=>{var V=Np();Et(R,V)},Jr=(R,V)=>{{var k=$=>{var j=xp();Et($,j)},B=$=>{var j=Up(),rt=mr(j);gr(rt,5,()=>v(ne),lt=>lt.id,(lt,st)=>{var At=Lp(),ge=ut(At);Da(ge,{get date(){return v(st).createdAt},get backgroundUrl(){return v(st).backgroundUrl},mini:!0,$$slots:{canvas:(pe,ae)=>{var Pt=Hi(),pt=mr(Pt);gr(pt,1,()=>v(st).stickers,rs,(It,Lt)=>{var ct=Mp(),le=ut(ct);ot(ct),Zt((De,_t)=>{Me(ct,De),mn(le,"src",v(Lt).src),Me(le,_t)},[()=>dt(v(Lt)),()=>nt(v(Lt))],Oe),Et(It,ct)}),Et(pe,Pt)},footer:(pe,ae)=>{var Pt=Hi(),pt=mr(Pt);{var It=Lt=>{var ct=Op(),le=ut(ct,!0);ot(ct),Zt(()=>{Ee(ct,1,`deck-text deck-text-${v(st).textSizeLines||3}l`,"svelte-102gchk"),no(le,v(st).text)}),Et(Lt,ct)};ye(pt,Lt=>{v(st).text.trim().length&&Lt(It)})}Et(pe,Pt)}}}),ot(At),Zt(()=>Me(At,`--dx:${v(st).deckOffsetX}px;--dy:${v(st).deckOffsetY}px;--rot:${v(st).deckRotation}deg;`)),Et(lt,At)}),ot(rt);var wt=Vt(rt,2);{var vt=lt=>{var st=Fp(),At=ut(st),ge=ut(At,!0);ot(At),ot(st),Zt(()=>{At.disabled=v(A),no(ge,v(A)?"loading...":"load more")}),qt("click",At,Kr),Et(lt,st)};ye(wt,lt=>{v(P)&&lt(vt)})}Et($,j)};ye(R,$=>{v(ne).length===0?$(k):$(B,!1)},V)}};ye(On,R=>{v(T)?R(Ln):R(Jr,!1)})}ot(oe),ot(Mn),ot(or);var ft=Vt(or,2);{var lr=R=>{var V=Bp();Zt(()=>{mn(V,"src",v(H).src),Me(V,`left: ${v(H).x-v(H).offsetX}px; top: ${v(H).y-v(H).offsetY}px; width: ${v(H).imgWidth??""}px; height: ${v(H).imgHeight??""}px;`)}),Et(R,V)};ye(ft,R=>{v(H)&&Math.hypot(v(H).x-v(H).startX,v(H).y-v(H).startY)>5&&R(lr)})}Zt((R,V)=>{cr=Ee(hn,1,"header-camera-group svelte-102gchk",null,cr,R),Xr=Ee(Mn,1,"publish-content svelte-102gchk",null,Xr,V)},[()=>({active:v(_)}),()=>({"publish-out":v(w)==="out","publish-in":v(w)==="in"})],Oe),qt("click",hn,Ms),qt("animationend",Mn,Bi),Et(n,ir),bo()}export{n_ as component};
