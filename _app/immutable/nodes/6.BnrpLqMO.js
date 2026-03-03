import{t as Vt,a as Et,f as ji,c as ku}from"../chunks/C6zT8n4T.js";import{i as Fc}from"../chunks/UjCUcHSm.js";import{j as eo,k as Nu,O as xu,L as Mu,c as ut,s as kt,r as it,t as Zt,m as Me,p as Uc,aK as Ou,g as v,J as At,Z as L,a as Bc,ah as Lu,aL as Fu,X as Hi,Y as Uu,f as mr,n as Gs}from"../chunks/QZo_flVt.js";import{s as no}from"../chunks/A7XwNNtU.js";import{i as Ne}from"../chunks/CwLF0HRe.js";import{e as gr,i as ns}from"../chunks/CKMoo3YY.js";import{s as mn,a as Bu}from"../chunks/DSMYfwqr.js";import{t as qu,s as Sa,a as Le}from"../chunks/CCGA2w1I.js";import{e as $t}from"../chunks/BaprkmMV.js";import{b as qc}from"../chunks/B5elikI5.js";import{M as $u}from"../chunks/Dvd-mCUn.js";import{p as Ke}from"../chunks/ChjhM4qK.js";import{b as Jt,c as zu}from"../chunks/C-9X3wcY.js";function ju(n){eo&&Nu(n)!==null&&xu(n)}function xe(n,t,e,r){var s=n.__style;if(eo||s!==t){var o=qu(t);(!eo||o!==n.getAttribute("style"))&&(o==null?n.removeAttribute("style"):n.style.cssText=o),n.__style=t}return r}function Hu(n,t){var o;var e=(o=n.$$events)==null?void 0:o[t.type],r=Mu(e)?e.slice():e==null?[]:[e];for(var s of r)s.call(this,t)}var Gu=Vt('<img class="polaroid-bg svelte-u6xp0v" alt="" aria-hidden="true">'),Wu=Vt('<div><div class="polaroid-inner svelte-u6xp0v"><!> <!></div> <span class="polaroid-date svelte-u6xp0v"> </span> <div class="polaroid-footer svelte-u6xp0v"><!></div> <img alt="" class="polaroid-overlay svelte-u6xp0v" aria-hidden="true"></div>');function ba(n,t){let e=Ke(t,"date",8,""),r=Ke(t,"backgroundUrl",8,""),s=Ke(t,"innerEl",12,void 0),o=Ke(t,"mini",8,!1),a=Ke(t,"shadow",8,!1);var u=Wu();let h;var d=ut(u),m=ut(d);{var T=z=>{var W=Gu();Zt(()=>mn(W,"src",r())),Et(z,W)};Ne(m,z=>{r()&&z(T)})}var A=kt(m,2);Sa(A,t,"canvas",{}),it(d),qc(d,z=>s(z),()=>s());var P=kt(d,2),M=ut(P,!0);it(P);var F=kt(P,2),O=ut(F);Sa(O,t,"footer",{}),it(F);var Y=kt(F,2);mn(Y,"src",`${Jt??""}/images/polaroid.png`),it(u),Zt(z=>{h=Le(u,1,"polaroid-frame svelte-u6xp0v",null,h,z),no(M,e())},[()=>({mini:o(),shadow:a()})],Me),Et(n,u)}var Ku=Vt('<button type="button" class="palette-button svelte-1t30eac"><img alt="sticker option" loading="lazy" draggable="false"></button>'),Qu=Vt('<aside class="palette svelte-1t30eac"><p class="palette-title svelte-1t30eac"><span class="palette-title-text svelte-1t30eac">add stickers!</span> <button type="button" title="Reload"><span class="reload-tilt svelte-1t30eac"><span class="reload-spin svelte-1t30eac"><img alt="Reload" class="reload-icon svelte-1t30eac"></span></span></button></p> <div></div></aside>');function Yu(n,t){Uc(t,!1);let e=Ke(t,"stickers",24,()=>[]),r=Ke(t,"draggingSrc",8,null),s=Ke(t,"maxHeight",8,0),o=Ke(t,"phase",8,null);const a=Ou();let u=At(!1);function h(W,pt){W.preventDefault();const ct=W.currentTarget.querySelector("img").getBoundingClientRect();a("dragstart",{src:pt,clientX:W.clientX,clientY:W.clientY,imgWidth:ct.width,imgHeight:ct.height,offsetX:W.clientX-ct.left,offsetY:W.clientY-ct.top})}function d(){L(u,!1),requestAnimationFrame(()=>{L(u,!0)})}Fc();var m=Qu(),T=ut(m),A=kt(ut(T),2);let P;var M=ut(A),F=ut(M),O=ut(F);mn(O,"src",`${Jt??""}/images/reload.png`),it(F),it(M),it(A),it(T);var Y=kt(T,2);let z;gr(Y,5,e,ns,(W,pt)=>{var _t=Ku(),ct=ut(_t);let I;it(_t),Zt(g=>{mn(ct,"src",v(pt)),I=Le(ct,1,"palette-image svelte-1t30eac",null,I,g),xe(ct,s()?`max-height: ${s()}px; height: auto;`:"")},[()=>({dragging:r()===v(pt)})],Me),$t("pointerdown",_t,g=>h(g,v(pt))),Et(W,_t)}),it(Y),it(m),Zt((W,pt)=>{P=Le(A,1,"reload-button svelte-1t30eac",null,P,W),z=Le(Y,1,"palette-grid svelte-1t30eac",null,z,pt)},[()=>({spinning:v(u)}),()=>({"palette-out":o()==="out","palette-in":o()==="in"})],Me),$t("click",A,()=>{d(),a("reload")}),$t("animationend",A,()=>L(u,!1)),$t("animationend",Y,function(W){Hu.call(this,t,W)}),Et(n,m),Bc()}const Xu=()=>{};var Ca={};/**
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
 */const $c=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ju=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),r.push(e[m],e[T],e[A],e[P])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray($c(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ju(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new Zu;const A=o<<2|u>>4;if(r.push(A),d!==64){const P=u<<4&240|d>>2;if(r.push(P),T!==64){const M=d<<6&192|T;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Zu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const th=function(n){const t=$c(n);return zc.encodeByteArray(t,!0)},ii=function(n){return th(n).replace(/\./g,"")},eh=function(n){try{return zc.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function nh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rh=()=>nh().__FIREBASE_DEFAULTS__,sh=()=>{if(typeof process>"u"||typeof Ca>"u")return;const n=Ca.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ih=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&eh(n[1]);return t&&JSON.parse(t)},Ro=()=>{try{return Xu()||rh()||sh()||ih()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oh=n=>{var t,e;return(e=(t=Ro())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},ah=n=>{const t=oh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},jc=()=>{var n;return(n=Ro())==null?void 0:n.config};/**
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
 */class ch{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function So(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function lh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function uh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[ii(JSON.stringify(e)),ii(JSON.stringify(a)),""].join(".")}const os={};function hh(){const n={prod:[],emulator:[]};for(const t of Object.keys(os))os[t]?n.emulator.push(t):n.prod.push(t);return n}function dh(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Pa=!1;function fh(n,t){if(typeof window>"u"||typeof document>"u"||!So(window.location.host)||os[n]===t||os[n]||Pa)return;os[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=hh().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Pa=!0,a()},A}function m(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=dh(r),P=e("text"),M=document.getElementById(P)||document.createElement("span"),F=e("learnmore"),O=document.getElementById(F)||document.createElement("a"),Y=e("preprendIcon"),z=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const W=A.element;u(W),m(O,F);const pt=d();h(z,Y),W.append(z,M,O,pt),document.body.appendChild(W)}o?(M.innerText="Preview backend disconnected.",z.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(z.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function mh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gh(){var t;const n=(t=Ro())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ph(){return!gh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _h(){try{return typeof indexedDB=="object"}catch{return!1}}function yh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Eh="FirebaseError";class kr extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Eh,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hc.prototype.create)}}class Hc{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?vh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new kr(s,u,r)}}function vh(n,t){return n.replace(Th,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Th=/\{\$([^}]+)}/g;function oi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Va(o)&&Va(a)){if(!oi(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Va(n){return n!==null&&typeof n=="object"}/**
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
 */function $n(n){return n&&n._delegate?n._delegate:n}class us{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Ih{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new ch;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ah(t))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Bn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bn){return this.instances.has(t)}getOptions(t=Bn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:wh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Bn){return this.component?this.component.multipleInstances?t:Bn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function wh(n){return n===Bn?void 0:n}function Ah(n){return n.instantiationMode==="EAGER"}/**
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
 */class Rh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ih(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var et;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(et||(et={}));const Sh={debug:et.DEBUG,verbose:et.VERBOSE,info:et.INFO,warn:et.WARN,error:et.ERROR,silent:et.SILENT},bh=et.INFO,Ch={[et.DEBUG]:"log",[et.VERBOSE]:"log",[et.INFO]:"info",[et.WARN]:"warn",[et.ERROR]:"error"},Ph=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Ch[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Gc{constructor(t){this.name=t,this._logLevel=bh,this._logHandler=Ph,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in et))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Sh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,et.DEBUG,...t),this._logHandler(this,et.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,et.VERBOSE,...t),this._logHandler(this,et.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,et.INFO,...t),this._logHandler(this,et.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,et.WARN,...t),this._logHandler(this,et.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,et.ERROR,...t),this._logHandler(this,et.ERROR,...t)}}const Vh=(n,t)=>t.some(e=>n instanceof e);let Da,ka;function Dh(){return Da||(Da=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kh(){return ka||(ka=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wc=new WeakMap,ro=new WeakMap,Kc=new WeakMap,Gi=new WeakMap,bo=new WeakMap;function Nh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(pn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Wc.set(e,n)}).catch(()=>{}),bo.set(t,n),t}function xh(n){if(ro.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});ro.set(n,t)}let so={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return ro.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Kc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return pn(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Mh(n){so=n(so)}function Oh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Wi(this),t,...e);return Kc.set(r,t.sort?t.sort():[t]),pn(r)}:kh().includes(n)?function(...t){return n.apply(Wi(this),t),pn(Wc.get(this))}:function(...t){return pn(n.apply(Wi(this),t))}}function Lh(n){return typeof n=="function"?Oh(n):(n instanceof IDBTransaction&&xh(n),Vh(n,Dh())?new Proxy(n,so):n)}function pn(n){if(n instanceof IDBRequest)return Nh(n);if(Gi.has(n))return Gi.get(n);const t=Lh(n);return t!==n&&(Gi.set(n,t),bo.set(t,n)),t}const Wi=n=>bo.get(n);function Fh(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=pn(a);return r&&a.addEventListener("upgradeneeded",h=>{r(pn(a.result),h.oldVersion,h.newVersion,pn(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Uh=["get","getKey","getAll","getAllKeys","count"],Bh=["put","add","delete","clear"],Ki=new Map;function Na(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Ki.get(t))return Ki.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=Bh.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Uh.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return Ki.set(t,o),o}Mh(n=>({...n,get:(t,e,r)=>Na(t,e)||n.get(t,e,r),has:(t,e)=>!!Na(t,e)||n.has(t,e)}));/**
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
 */class qh{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if($h(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function $h(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const io="@firebase/app",xa="0.14.9";/**
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
 */const Ye=new Gc("@firebase/app"),zh="@firebase/app-compat",jh="@firebase/analytics-compat",Hh="@firebase/analytics",Gh="@firebase/app-check-compat",Wh="@firebase/app-check",Kh="@firebase/auth",Qh="@firebase/auth-compat",Yh="@firebase/database",Xh="@firebase/data-connect",Jh="@firebase/database-compat",Zh="@firebase/functions",td="@firebase/functions-compat",ed="@firebase/installations",nd="@firebase/installations-compat",rd="@firebase/messaging",sd="@firebase/messaging-compat",id="@firebase/performance",od="@firebase/performance-compat",ad="@firebase/remote-config",cd="@firebase/remote-config-compat",ld="@firebase/storage",ud="@firebase/storage-compat",hd="@firebase/firestore",dd="@firebase/ai",fd="@firebase/firestore-compat",md="firebase",gd="12.10.0";/**
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
 */const oo="[DEFAULT]",pd={[io]:"fire-core",[zh]:"fire-core-compat",[Hh]:"fire-analytics",[jh]:"fire-analytics-compat",[Wh]:"fire-app-check",[Gh]:"fire-app-check-compat",[Kh]:"fire-auth",[Qh]:"fire-auth-compat",[Yh]:"fire-rtdb",[Xh]:"fire-data-connect",[Jh]:"fire-rtdb-compat",[Zh]:"fire-fn",[td]:"fire-fn-compat",[ed]:"fire-iid",[nd]:"fire-iid-compat",[rd]:"fire-fcm",[sd]:"fire-fcm-compat",[id]:"fire-perf",[od]:"fire-perf-compat",[ad]:"fire-rc",[cd]:"fire-rc-compat",[ld]:"fire-gcs",[ud]:"fire-gcs-compat",[hd]:"fire-fst",[fd]:"fire-fst-compat",[dd]:"fire-vertex","fire-js":"fire-js",[md]:"fire-js-all"};/**
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
 */const hs=new Map,_d=new Map,ao=new Map;function Ma(n,t){try{n.container.addComponent(t)}catch(e){Ye.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function ai(n){const t=n.name;if(ao.has(t))return Ye.debug(`There were multiple attempts to register component ${t}.`),!1;ao.set(t,n);for(const e of hs.values())Ma(e,n);for(const e of _d.values())Ma(e,n);return!0}function yd(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ed(n){return n==null?!1:n.settings!==void 0}/**
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
 */const vd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_n=new Hc("app","Firebase",vd);/**
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
 */class Td{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new us("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw _n.create("app-deleted",{appName:this._name})}}/**
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
 */const Id=gd;function Qc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:oo,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw _n.create("bad-app-name",{appName:String(s)});if(e||(e=jc()),!e)throw _n.create("no-options");const o=hs.get(s);if(o){if(oi(e,o.options)&&oi(r,o.config))return o;throw _n.create("duplicate-app",{appName:s})}const a=new Rh(s);for(const h of ao.values())a.addComponent(h);const u=new Td(e,r,a);return hs.set(s,u),u}function Yc(n=oo){const t=hs.get(n);if(!t&&n===oo&&jc())return Qc();if(!t)throw _n.create("no-app",{appName:n});return t}function wd(){return Array.from(hs.values())}function vr(n,t,e){let r=pd[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Ye.warn(a.join(" "));return}ai(new us(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const Ad="firebase-heartbeat-database",Rd=1,ds="firebase-heartbeat-store";let Qi=null;function Xc(){return Qi||(Qi=Fh(Ad,Rd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(ds)}catch(e){console.warn(e)}}}}).catch(n=>{throw _n.create("idb-open",{originalErrorMessage:n.message})})),Qi}async function Sd(n){try{const e=(await Xc()).transaction(ds),r=await e.objectStore(ds).get(Jc(n));return await e.done,r}catch(t){if(t instanceof kr)Ye.warn(t.message);else{const e=_n.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Ye.warn(e.message)}}}async function Oa(n,t){try{const r=(await Xc()).transaction(ds,"readwrite");await r.objectStore(ds).put(t,Jc(n)),await r.done}catch(e){if(e instanceof kr)Ye.warn(e.message);else{const r=_n.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Ye.warn(r.message)}}}function Jc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bd=1024,Cd=30;class Pd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Dd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=La();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Cd){const a=kd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ye.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=La(),{heartbeatsToSend:r,unsentEntries:s}=Vd(this._heartbeatsCache.heartbeats),o=ii(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Ye.warn(e),""}}}function La(){return new Date().toISOString().substring(0,10)}function Vd(n,t=bd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Fa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Fa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Dd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _h()?yh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Sd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Oa(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Fa(n){return ii(JSON.stringify({version:2,heartbeats:n})).length}function kd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Nd(n){ai(new us("platform-logger",t=>new qh(t),"PRIVATE")),ai(new us("heartbeat",t=>new Pd(t),"PRIVATE")),vr(io,xa,n),vr(io,xa,"esm2020"),vr("fire-js","")}Nd("");var xd="firebase",Md="12.10.0";/**
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
 */vr(xd,Md,"app");var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yn,Zc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(I,g){function _(){}_.prototype=g.prototype,I.F=g.prototype,I.prototype=new _,I.prototype.constructor=I,I.D=function(w,E,y){for(var p=Array(arguments.length-2),Mt=2;Mt<arguments.length;Mt++)p[Mt-2]=arguments[Mt];return g.prototype[E].apply(w,p)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,g,_){_||(_=0);const w=Array(16);if(typeof g=="string")for(var E=0;E<16;++E)w[E]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(E=0;E<16;++E)w[E]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=I.g[0],_=I.g[1],E=I.g[2];let y=I.g[3],p;p=g+(y^_&(E^y))+w[0]+3614090360&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[1]+3905402710&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[2]+606105819&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[3]+3250441966&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(y^_&(E^y))+w[4]+4118548399&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[5]+1200080426&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[6]+2821735955&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[7]+4249261313&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(y^_&(E^y))+w[8]+1770035416&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[9]+2336552879&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[10]+4294925233&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[11]+2304563134&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(y^_&(E^y))+w[12]+1804603682&4294967295,g=_+(p<<7&4294967295|p>>>25),p=y+(E^g&(_^E))+w[13]+4254626195&4294967295,y=g+(p<<12&4294967295|p>>>20),p=E+(_^y&(g^_))+w[14]+2792965006&4294967295,E=y+(p<<17&4294967295|p>>>15),p=_+(g^E&(y^g))+w[15]+1236535329&4294967295,_=E+(p<<22&4294967295|p>>>10),p=g+(E^y&(_^E))+w[1]+4129170786&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[6]+3225465664&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[11]+643717713&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[0]+3921069994&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^y&(_^E))+w[5]+3593408605&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[10]+38016083&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[15]+3634488961&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[4]+3889429448&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^y&(_^E))+w[9]+568446438&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[14]+3275163606&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[3]+4107603335&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[8]+1163531501&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(E^y&(_^E))+w[13]+2850285829&4294967295,g=_+(p<<5&4294967295|p>>>27),p=y+(_^E&(g^_))+w[2]+4243563512&4294967295,y=g+(p<<9&4294967295|p>>>23),p=E+(g^_&(y^g))+w[7]+1735328473&4294967295,E=y+(p<<14&4294967295|p>>>18),p=_+(y^g&(E^y))+w[12]+2368359562&4294967295,_=E+(p<<20&4294967295|p>>>12),p=g+(_^E^y)+w[5]+4294588738&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[8]+2272392833&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[11]+1839030562&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[14]+4259657740&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^y)+w[1]+2763975236&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[4]+1272893353&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[7]+4139469664&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[10]+3200236656&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^y)+w[13]+681279174&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[0]+3936430074&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[3]+3572445317&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[6]+76029189&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(_^E^y)+w[9]+3654602809&4294967295,g=_+(p<<4&4294967295|p>>>28),p=y+(g^_^E)+w[12]+3873151461&4294967295,y=g+(p<<11&4294967295|p>>>21),p=E+(y^g^_)+w[15]+530742520&4294967295,E=y+(p<<16&4294967295|p>>>16),p=_+(E^y^g)+w[2]+3299628645&4294967295,_=E+(p<<23&4294967295|p>>>9),p=g+(E^(_|~y))+w[0]+4096336452&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[7]+1126891415&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[14]+2878612391&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[5]+4237533241&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~y))+w[12]+1700485571&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[3]+2399980690&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[10]+4293915773&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[1]+2240044497&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~y))+w[8]+1873313359&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[15]+4264355552&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[6]+2734768916&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[13]+1309151649&4294967295,_=E+(p<<21&4294967295|p>>>11),p=g+(E^(_|~y))+w[4]+4149444226&4294967295,g=_+(p<<6&4294967295|p>>>26),p=y+(_^(g|~E))+w[11]+3174756917&4294967295,y=g+(p<<10&4294967295|p>>>22),p=E+(g^(y|~_))+w[2]+718787259&4294967295,E=y+(p<<15&4294967295|p>>>17),p=_+(y^(E|~g))+w[9]+3951481745&4294967295,I.g[0]=I.g[0]+g&4294967295,I.g[1]=I.g[1]+(E+(p<<21&4294967295|p>>>11))&4294967295,I.g[2]=I.g[2]+E&4294967295,I.g[3]=I.g[3]+y&4294967295}r.prototype.v=function(I,g){g===void 0&&(g=I.length);const _=g-this.blockSize,w=this.C;let E=this.h,y=0;for(;y<g;){if(E==0)for(;y<=_;)s(this,I,y),y+=this.blockSize;if(typeof I=="string"){for(;y<g;)if(w[E++]=I.charCodeAt(y++),E==this.blockSize){s(this,w),E=0;break}}else for(;y<g;)if(w[E++]=I[y++],E==this.blockSize){s(this,w),E=0;break}}this.h=E,this.o+=g},r.prototype.A=function(){var I=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);I[0]=128;for(var g=1;g<I.length-8;++g)I[g]=0;g=this.o*8;for(var _=I.length-8;_<I.length;++_)I[_]=g&255,g/=256;for(this.v(I),I=Array(16),g=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)I[g++]=this.g[_]>>>w&255;return I};function o(I,g){var _=u;return Object.prototype.hasOwnProperty.call(_,I)?_[I]:_[I]=g(I)}function a(I,g){this.h=g;const _=[];let w=!0;for(let E=I.length-1;E>=0;E--){const y=I[E]|0;w&&y==g||(_[E]=y,w=!1)}this.g=_}var u={};function h(I){return-128<=I&&I<128?o(I,function(g){return new a([g|0],g<0?-1:0)}):new a([I|0],I<0?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return T;if(I<0)return O(d(-I));const g=[];let _=1;for(let w=0;I>=_;w++)g[w]=I/_|0,_*=4294967296;return new a(g,0)}function m(I,g){if(I.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(I.charAt(0)=="-")return O(m(I.substring(1),g));if(I.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let w=T;for(let y=0;y<I.length;y+=8){var E=Math.min(8,I.length-y);const p=parseInt(I.substring(y,y+E),g);E<8?(E=d(Math.pow(g,E)),w=w.j(E).add(d(p))):(w=w.j(_),w=w.add(d(p)))}return w}var T=h(0),A=h(1),P=h(16777216);n=a.prototype,n.m=function(){if(F(this))return-O(this).m();let I=0,g=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);I+=(w>=0?w:4294967296+w)*g,g*=4294967296}return I},n.toString=function(I){if(I=I||10,I<2||36<I)throw Error("radix out of range: "+I);if(M(this))return"0";if(F(this))return"-"+O(this).toString(I);const g=d(Math.pow(I,6));var _=this;let w="";for(;;){const E=pt(_,g).g;_=Y(_,E.j(g));let y=((_.g.length>0?_.g[0]:_.h)>>>0).toString(I);if(_=E,M(_))return y+w;for(;y.length<6;)y="0"+y;w=y+w}},n.i=function(I){return I<0?0:I<this.g.length?this.g[I]:this.h};function M(I){if(I.h!=0)return!1;for(let g=0;g<I.g.length;g++)if(I.g[g]!=0)return!1;return!0}function F(I){return I.h==-1}n.l=function(I){return I=Y(this,I),F(I)?-1:M(I)?0:1};function O(I){const g=I.g.length,_=[];for(let w=0;w<g;w++)_[w]=~I.g[w];return new a(_,~I.h).add(A)}n.abs=function(){return F(this)?O(this):this},n.add=function(I){const g=Math.max(this.g.length,I.g.length),_=[];let w=0;for(let E=0;E<=g;E++){let y=w+(this.i(E)&65535)+(I.i(E)&65535),p=(y>>>16)+(this.i(E)>>>16)+(I.i(E)>>>16);w=p>>>16,y&=65535,p&=65535,_[E]=p<<16|y}return new a(_,_[_.length-1]&-2147483648?-1:0)};function Y(I,g){return I.add(O(g))}n.j=function(I){if(M(this)||M(I))return T;if(F(this))return F(I)?O(this).j(O(I)):O(O(this).j(I));if(F(I))return O(this.j(O(I)));if(this.l(P)<0&&I.l(P)<0)return d(this.m()*I.m());const g=this.g.length+I.g.length,_=[];for(var w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let E=0;E<I.g.length;E++){const y=this.i(w)>>>16,p=this.i(w)&65535,Mt=I.i(E)>>>16,ne=I.i(E)&65535;_[2*w+2*E]+=p*ne,z(_,2*w+2*E),_[2*w+2*E+1]+=y*ne,z(_,2*w+2*E+1),_[2*w+2*E+1]+=p*Mt,z(_,2*w+2*E+1),_[2*w+2*E+2]+=y*Mt,z(_,2*w+2*E+2)}for(I=0;I<g;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=g;I<2*g;I++)_[I]=0;return new a(_,0)};function z(I,g){for(;(I[g]&65535)!=I[g];)I[g+1]+=I[g]>>>16,I[g]&=65535,g++}function W(I,g){this.g=I,this.h=g}function pt(I,g){if(M(g))throw Error("division by zero");if(M(I))return new W(T,T);if(F(I))return g=pt(O(I),g),new W(O(g.g),O(g.h));if(F(g))return g=pt(I,O(g)),new W(O(g.g),g.h);if(I.g.length>30){if(F(I)||F(g))throw Error("slowDivide_ only works with positive integers.");for(var _=A,w=g;w.l(I)<=0;)_=_t(_),w=_t(w);var E=ct(_,1),y=ct(w,1);for(w=ct(w,2),_=ct(_,2);!M(w);){var p=y.add(w);p.l(I)<=0&&(E=E.add(_),y=p),w=ct(w,1),_=ct(_,1)}return g=Y(I,E.j(g)),new W(E,g)}for(E=T;I.l(g)>=0;){for(_=Math.max(1,Math.floor(I.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),y=d(_),p=y.j(g);F(p)||p.l(I)>0;)_-=w,y=d(_),p=y.j(g);M(y)&&(y=A),E=E.add(y),I=Y(I,p)}return new W(E,I)}n.B=function(I){return pt(this,I).h},n.and=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)&I.i(w);return new a(_,this.h&I.h)},n.or=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)|I.i(w);return new a(_,this.h|I.h)},n.xor=function(I){const g=Math.max(this.g.length,I.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)^I.i(w);return new a(_,this.h^I.h)};function _t(I){const g=I.g.length+1,_=[];for(let w=0;w<g;w++)_[w]=I.i(w)<<1|I.i(w-1)>>>31;return new a(_,I.h)}function ct(I,g){const _=g>>5;g%=32;const w=I.g.length-_,E=[];for(let y=0;y<w;y++)E[y]=g>0?I.i(y+_)>>>g|I.i(y+_+1)<<32-g:I.i(y+_);return new a(E,I.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Zc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,yn=a}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});var Ws=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tl,rs,el,Zs,co,nl,rl,sl;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ws=="object"&&Ws];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var S=i[f];if(!(S in l))break t;l=l[S]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function m(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function T(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,S,b){for(var N=Array(arguments.length-2),X=2;X<arguments.length;X++)N[X-2]=arguments[X];return c.prototype[S].apply(f,N)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function M(i,c){for(let f=1;f<arguments.length;f++){const S=arguments[f];var l=typeof S;if(l=l!="object"?l:S?Array.isArray(S)?"array":l:"null",l=="array"||l=="object"&&typeof S.length=="number"){l=i.length||0;const b=S.length||0;i.length=l+b;for(let N=0;N<b;N++)i[l+N]=S[N]}else i.push(S)}}class F{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function O(i){a.setTimeout(()=>{throw i},0)}function Y(){var i=I;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class z{constructor(){this.h=this.g=null}add(c,l){const f=W.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var W=new F(()=>new pt,i=>i.reset());class pt{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let _t,ct=!1,I=new z,g=()=>{const i=Promise.resolve(void 0);_t=()=>{i.then(_)}};function _(){for(var i;i=Y();){try{i.h.call(i.g)}catch(l){O(l)}var c=W;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}ct=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i}();function p(i){return/^[\s\xa0]*$/.test(i)}function Mt(i,c){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}T(Mt,E),Mt.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Mt.Z.h.call(this)},Mt.prototype.h=function(){Mt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var ne="closure_listenable_"+(Math.random()*1e6|0),St=0;function tn(i,c,l,f,S){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=S,this.key=++St,this.da=this.fa=!1}function bt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Te(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function en(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function $e(i){const c={};for(const l in i)c[l]=i[l];return c}const Lr="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Fr(i,c){let l,f;for(let S=1;S<arguments.length;S++){f=arguments[S];for(l in f)i[l]=f[l];for(let b=0;b<Lr.length;b++)l=Lr[b],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function bn(i){this.src=i,this.g={},this.h=0}bn.prototype.add=function(i,c,l,f,S){const b=i.toString();i=this.g[b],i||(i=this.g[b]=[],this.h++);const N=de(i,c,f,S);return N>-1?(c=i[N],l||(c.fa=!1)):(c=new tn(c,this.src,b,!!f,S),c.fa=l,i.push(c)),c};function Xn(i,c){const l=c.type;if(l in i.g){var f=i.g[l],S=Array.prototype.indexOf.call(f,c,void 0),b;(b=S>=0)&&Array.prototype.splice.call(f,S,1),b&&(bt(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function de(i,c,l,f){for(let S=0;S<i.length;++S){const b=i[S];if(!b.da&&b.listener==c&&b.capture==!!l&&b.ha==f)return S}return-1}var Ie="closure_lm_"+(Math.random()*1e6|0),nn={};function Ur(i,c,l,f,S){if(Array.isArray(c)){for(let b=0;b<c.length;b++)Ur(i,c[b],l,f,S);return null}return l=ze(l),i&&i[ne]?i.J(c,l,u(f)?!!f.capture:!1,S):Ss(i,c,l,!1,f,S)}function Ss(i,c,l,f,S,b){if(!c)throw Error("Invalid event type");const N=u(S)?!!S.capture:!!S;let X=Zn(i);if(X||(i[Ie]=X=new bn(i)),l=X.add(c,l,f,N,b),l.proxy)return l;if(f=bs(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)y||(S=N),S===void 0&&(S=!1),i.addEventListener(c.toString(),f,S);else if(i.attachEvent)i.attachEvent(qr(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function bs(){function i(l){return c.call(i.src,i.listener,l)}const c=Cn;return i}function Br(i,c,l,f,S){if(Array.isArray(c))for(var b=0;b<c.length;b++)Br(i,c[b],l,f,S);else f=u(f)?!!f.capture:!!f,l=ze(l),i&&i[ne]?(i=i.i,b=String(c).toString(),b in i.g&&(c=i.g[b],l=de(c,l,f,S),l>-1&&(bt(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[b],i.h--)))):i&&(i=Zn(i))&&(c=i.g[c.toString()],i=-1,c&&(i=de(c,l,f,S)),(l=i>-1?c[i]:null)&&Jn(l))}function Jn(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[ne])Xn(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(qr(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Zn(c))?(Xn(l,i),l.h==0&&(l.src=null,c[Ie]=null)):bt(i)}}}function qr(i){return i in nn?nn[i]:nn[i]="on"+i}function Cn(i,c){if(i.da)i=!0;else{c=new Mt(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Jn(i),i=l.call(f,c)}return i}function Zn(i){return i=i[Ie],i instanceof bn?i:null}var we="__closure_events_fn_"+(Math.random()*1e9>>>0);function ze(i){return typeof i=="function"?i:(i[we]||(i[we]=function(c){return i.handleEvent(c)}),i[we])}function Ot(){w.call(this),this.i=new bn(this),this.M=this,this.G=null}T(Ot,w),Ot.prototype[ne]=!0,Ot.prototype.removeEventListener=function(i,c,l,f){Br(this,i,c,l,f)};function Bt(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new E(c,i);else if(c instanceof E)c.target=c.target||i;else{var S=c;c=new E(f,i),Fr(c,S)}S=!0;let b,N;if(l)for(N=l.length-1;N>=0;N--)b=c.g=l[N],S=rn(b,f,!0,c)&&S;if(b=c.g=i,S=rn(b,f,!0,c)&&S,S=rn(b,f,!1,c)&&S,l)for(N=0;N<l.length;N++)b=c.g=l[N],S=rn(b,f,!1,c)&&S}Ot.prototype.N=function(){if(Ot.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)bt(l[f]);delete i.g[c],i.h--}}this.G=null},Ot.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},Ot.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function rn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let S=!0;for(let b=0;b<c.length;++b){const N=c[b];if(N&&!N.da&&N.capture==l){const X=N.listener,Ft=N.ha||N.src;N.fa&&Xn(i.i,N),S=X.call(Ft,f)!==!1&&S}}return S&&!f.defaultPrevented}function $r(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function tr(i){i.g=$r(()=>{i.g=null,i.i&&(i.i=!1,tr(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class G extends w{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:tr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ae(i){w.call(this),this.h=i,this.g={}}T(Ae,w);var sn=[];function Re(i){Te(i.g,function(c,l){this.g.hasOwnProperty(l)&&Jn(c)},i),i.g={}}Ae.prototype.N=function(){Ae.Z.N.call(this),Re(this)},Ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var zr=a.JSON.stringify,on=a.JSON.parse,Oi=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function jr(){}function Hr(){}var Se={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function an(){E.call(this,"d")}T(an,E);function Gr(){E.call(this,"c")}T(Gr,E);var je={},Cs=null;function fe(){return Cs=Cs||new Ot}je.Ia="serverreachability";function er(i){E.call(this,je.Ia,i)}T(er,E);function be(i){const c=fe();Bt(c,new er(c))}je.STAT_EVENT="statevent";function Ps(i,c){E.call(this,je.STAT_EVENT,i),this.stat=c}T(Ps,E);function Ht(i){const c=fe();Bt(c,new Ps(c,i))}je.Ja="timingevent";function Wr(i,c){E.call(this,je.Ja,i),this.size=c}T(Wr,E);function cn(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Pn(){this.g=!0}Pn.prototype.ua=function(){this.g=!1};function Vs(i,c,l,f,S,b){i.info(function(){if(i.g)if(b){var N="",X=b.split("&");for(let dt=0;dt<X.length;dt++){var Ft=X[dt].split("=");if(Ft.length>1){const qt=Ft[0];Ft=Ft[1];const ke=qt.split("_");N=ke.length>=2&&ke[1]=="type"?N+(qt+"="+Ft+"&"):N+(qt+"=redacted&")}}}else N=null;else N=b;return"XMLHTTP REQ ("+f+") [attempt "+S+"]: "+c+`
`+l+`
`+N})}function ln(i,c,l,f,S,b,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+S+"]: "+c+`
`+l+`
`+b+" "+N})}function He(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Fi(i,l)+(f?" "+f:"")})}function Li(i,c){i.info(function(){return"TIMEOUT: "+c})}Pn.prototype.info=function(){};function Fi(i,c){if(!i.g)return c;if(!c)return null;try{const b=JSON.parse(c);if(b){for(i=0;i<b.length;i++)if(Array.isArray(b[i])){var l=b[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var S=f[0];if(S!="noop"&&S!="stop"&&S!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return zr(b)}catch{return c}}var Vn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ds={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},nr;function Dn(){}T(Dn,jr),Dn.prototype.g=function(){return new XMLHttpRequest},nr=new Dn;function un(i){return encodeURIComponent(String(i))}function ks(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function me(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new Ae(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ns}function Ns(){this.i=null,this.g="",this.h=!1}var xs={},Kr={};function kn(i,c,l){i.M=1,i.A=lr(oe(c)),i.u=l,i.R=!0,Ms(i,null)}function Ms(i,c){i.F=Date.now(),rr(i),i.B=oe(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),pe(l.i,"t",f),i.C=0,l=i.j.L,i.h=new Ns,i.g=Ia(i.j,l?c:null,!i.u),i.P>0&&(i.O=new G(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var S="readystatechange";Array.isArray(S)||(S&&(sn[0]=S.toString()),S=sn);for(let b=0;b<S.length;b++){const N=Ur(l,S[b],f||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=i.J?$e(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),be(),Vs(i.i,i.v,i.B,i.l,i.S,i.u)}me.prototype.ba=function(i){i=i.target;const c=this.O;c&&Yt(i)==3?c.j():this.Y(i)},me.prototype.Y=function(i){try{if(i==this.g)t:{const X=Yt(this.g),Ft=this.g.ya(),dt=this.g.ca();if(!(X<3)&&(X!=3||this.g&&(this.h.h||this.g.la()||ha(this.g)))){this.K||X!=4||Ft==7||(Ft==8||dt<=0?be(3):be(2)),sr(this);var c=this.g.ca();this.X=c;var l=Nn(this);if(this.o=c==200,ln(this.i,this.v,this.B,this.l,this.S,X,c),this.o){if(this.U&&!this.L){e:{if(this.g){var f,S=this.g;if((f=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(f)){var b=f;break e}}b=null}if(i=b)He(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ir(this,i);else{this.o=!1,this.m=3,Ht(12),Ge(this),xn(this);break t}}if(this.R){i=!0;let qt;for(;!this.K&&this.C<l.length;)if(qt=Ui(this,l),qt==Kr){X==4&&(this.m=4,Ht(14),i=!1),He(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==xs){this.m=4,Ht(15),He(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else He(this.i,this.l,qt,null),ir(this,qt);if(Os(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),X!=4||l.length!=0||this.h.h||(this.m=1,Ht(16),i=!1),this.o=this.o&&i,!i)He(this.i,this.l,l,"[Invalid Chunked Response]"),Ge(this),xn(this);else if(l.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),$i(N),N.P=!0,Ht(11))}}else He(this.i,this.l,l,null),ir(this,l);X==4&&Ge(this),this.o&&!this.K&&(X==4?ya(this.j,this):(this.o=!1,rr(this)))}else Vu(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,Ht(12)):(this.m=0,Ht(13)),Ge(this),xn(this)}}}catch{}finally{}};function Nn(i){if(!Os(i))return i.g.la();const c=ha(i.g);if(c==="")return"";let l="";const f=c.length,S=Yt(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ge(i),xn(i),"";i.h.i=new a.TextDecoder}for(let b=0;b<f;b++)i.h.h=!0,l+=i.h.i.decode(c[b],{stream:!(S&&b==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function Os(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Ui(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Kr:(l=Number(c.substring(l,f)),isNaN(l)?xs:(f+=1,f+l>c.length?Kr:(c=c.slice(f,f+l),i.C=f+l,c)))}me.prototype.cancel=function(){this.K=!0,Ge(this)};function rr(i){i.T=Date.now()+i.H,Ls(i,i.H)}function Ls(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=cn(d(i.aa,i),c)}function sr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}me.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Li(this.i,this.B),this.M!=2&&(be(),Ht(17)),Ge(this),this.m=2,xn(this)):Ls(this,this.T-i)};function xn(i){i.j.I==0||i.K||ya(i.j,i)}function Ge(i){sr(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Re(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function ir(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||hn(l.h,i))){if(!i.L&&hn(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var S=f;if(S[0]==0){t:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)zs(l),qs(l);else break t;qi(l),Ht(18)}}else l.xa=S[1],0<l.xa-l.K&&S[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=cn(d(l.Va,l),6e3));Qr(l.h)<=1&&l.ta&&(l.ta=void 0)}else Fn(l,11)}else if((i.L||l.g==i)&&zs(l),!p(c))for(S=l.Ba.g.parse(c),c=0;c<S.length;c++){let dt=S[c];const qt=dt[0];if(!(qt<=l.K))if(l.K=qt,dt=dt[1],l.I==2)if(dt[0]=="c"){l.M=dt[1],l.ba=dt[2];const ke=dt[3];ke!=null&&(l.ka=ke,l.j.info("VER="+l.ka));const Un=dt[4];Un!=null&&(l.za=Un,l.j.info("SVER="+l.za));const dn=dt[5];dn!=null&&typeof dn=="number"&&dn>0&&(f=1.5*dn,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const fn=i.g;if(fn){const Hs=fn.g?fn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Hs){var b=f.h;b.g||Hs.indexOf("spdy")==-1&&Hs.indexOf("quic")==-1&&Hs.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(cr(b,b.h),b.h=null))}if(f.G){const zi=fn.g?fn.g.getResponseHeader("X-HTTP-Session-Id"):null;zi&&(f.wa=zi,ht(f.J,f.G,zi))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var N=i;if(f.na=Ta(f,f.L?f.ba:null,f.W),N.L){Us(f.h,N);var X=N,Ft=f.O;Ft&&(X.H=Ft),X.D&&(sr(X),rr(X)),f.g=N}else pa(f);l.i.length>0&&$s(l)}else dt[0]!="stop"&&dt[0]!="close"||Fn(l,7);else l.I==3&&(dt[0]=="stop"||dt[0]=="close"?dt[0]=="stop"?Fn(l,7):Bi(l):dt[0]!="noop"&&l.l&&l.l.qa(dt),l.A=0)}}be(4)}catch{}}var Fs=class{constructor(i,c){this.g=i,this.map=c}};function or(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function ar(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Qr(i){return i.h?1:i.g?i.g.size:0}function hn(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function cr(i,c){i.g?i.g.add(c):i.h=c}function Us(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}or.prototype.cancel=function(){if(this.i=Mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Mn(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return P(i.i)}var Yr=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bs(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let S,b=null;f>=0?(S=i[l].substring(0,f),b=i[l].substring(f+1)):S=i[l],c(S,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function Ce(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof Ce?(this.l=i.l,On(this,i.j),this.o=i.o,this.g=i.g,Ln(this,i.u),this.h=i.h,Xr(this,ae(i.i)),this.m=i.m):i&&(c=String(i).match(Yr))?(this.l=!1,On(this,c[1]||"",!0),this.o=R(c[2]||""),this.g=R(c[3]||"",!0),Ln(this,c[4]),this.h=R(c[5]||"",!0),Xr(this,c[6]||"",!0),this.m=R(c[7]||"")):(this.l=!1,this.i=new yt(null,this.l))}Ce.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(D(c,B,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(D(c,B,!0),"@"),i.push(un(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(D(l,l.charAt(0)=="/"?j:q,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",D(l,It)),i.join("")},Ce.prototype.resolve=function(i){const c=oe(this);let l=!!i.j;l?On(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)Ln(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var S=c.h.lastIndexOf("/");S!=-1&&(f=c.h.slice(0,S+1)+f)}if(S=f,S==".."||S==".")f="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){f=S.lastIndexOf("/",0)==0,S=S.split("/");const b=[];for(let N=0;N<S.length;){const X=S[N++];X=="."?f&&N==S.length&&b.push(""):X==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),f&&N==S.length&&b.push("")):(b.push(X),f=!0)}f=b.join("/")}else f=S}return l?c.h=f:l=i.i.toString()!=="",l?Xr(c,ae(i.i)):l=!!i.m,l&&(c.m=i.m),c};function oe(i){return new Ce(i)}function On(i,c,l){i.j=l?R(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Ln(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function Xr(i,c,l){c instanceof yt?(i.i=c,mt(i.i,i.l)):(l||(c=D(c,nt)),i.i=new yt(c,i.l))}function ht(i,c,l){i.i.set(c,l)}function lr(i){return ht(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function R(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function D(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,k),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function k(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var B=/[#\/\?@]/g,q=/[#\?:]/g,j=/[#\?]/g,nt=/[#\?@]/g,It=/#/g;function yt(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function lt(i){i.g||(i.g=new Map,i.h=0,i.i&&Bs(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=yt.prototype,n.add=function(i,c){lt(this),this.i=null,i=Ct(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function rt(i,c){lt(i),c=Ct(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function wt(i,c){return lt(i),c=Ct(i,c),i.g.has(c)}n.forEach=function(i,c){lt(this),this.g.forEach(function(l,f){l.forEach(function(S){i.call(c,S,f,this)},this)},this)};function ge(i,c){lt(i);let l=[];if(typeof c=="string")wt(i,c)&&(l=l.concat(i.g.get(Ct(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}n.set=function(i,c){return lt(this),this.i=null,i=Ct(this,i),wt(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=ge(this,i),i.length>0?String(i[0]):c):c};function pe(i,c,l){rt(i,c),l.length>0&&(i.i=null,i.g.set(Ct(i,c),P(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const S=un(l);l=ge(this,l);for(let b=0;b<l.length;b++){let N=S;l[b]!==""&&(N+="="+un(l[b])),i.push(N)}}return this.i=i.join("&")};function ae(i){const c=new yt;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Ct(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function mt(i,c){c&&!i.j&&(lt(i),i.i=null,i.g.forEach(function(l,f){const S=f.toLowerCase();f!=S&&(rt(this,f),pe(this,S,l))},i)),i.j=c}function Tt(i,c){const l=new Pn;if(a.Image){const f=new Image;f.onload=m(at,l,"TestLoadImage: loaded",!0,c,f),f.onerror=m(at,l,"TestLoadImage: error",!1,c,f),f.onabort=m(at,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=m(at,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function Lt(i,c){const l=new Pn,f=new AbortController,S=setTimeout(()=>{f.abort(),at(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(b=>{clearTimeout(S),b.ok?at(l,"TestPingServer: ok",!0,c):at(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(S),at(l,"TestPingServer: error",!1,c)})}function at(i,c,l,f,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),f(l)}catch{}}function le(){this.g=new Oi}function Pe(i){this.i=i.Sb||null,this.h=i.ab||!1}T(Pe,jr),Pe.prototype.g=function(){return new gt(this.i,this.h)};function gt(i,c){Ot.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T(gt,Ot),n=gt.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,We(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,_e(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,We(this)),this.g&&(this.readyState=3,We(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;re(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function re(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?_e(this):We(this),this.readyState==3&&re(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,_e(this))},n.Na=function(i){this.g&&(this.response=i,_e(this))},n.ga=function(){this.g&&_e(this)};function _e(i){i.readyState=4,i.l=null,i.j=null,i.B=null,We(i)}n.setRequestHeader=function(i,c){this.A.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function We(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(gt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ur(i){let c="";return Te(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function Gt(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=ur(l),typeof i=="string"?l!=null&&un(l):ht(i,c,l))}function st(i){Ot.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(st,Ot);var hr=/^https?$/i,dr=["POST","PUT"];n=st.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():nr.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(b){Jr(this,b);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var S in f)l.set(S,f[S]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const b of f.keys())l.set(b,f.get(b));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(b=>b.toLowerCase()=="content-type"),S=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(dr,c,void 0)>=0)||f||S||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,N]of l)this.g.setRequestHeader(b,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(b){Jr(this,b)}};function Jr(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,Ve(i),se(i)}function Ve(i){i.A||(i.A=!0,Bt(i,"complete"),Bt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Bt(this,"complete"),Bt(this,"abort"),se(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),se(this,!0)),st.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?De(this):this.Xa())},n.Xa=function(){De(this)};function De(i){if(i.h&&typeof o<"u"){if(i.v&&Yt(i)==4)setTimeout(i.Ca.bind(i),0);else if(Bt(i,"readystatechange"),Yt(i)==4){i.h=!1;try{const b=i.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=b===0){let N=String(i.D).match(Yr)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!hr.test(N?N.toLowerCase():"")}l=f}if(l)Bt(i,"complete"),Bt(i,"success");else{i.o=6;try{var S=Yt(i)>2?i.g.statusText:""}catch{S=""}i.l=S+" ["+i.ca()+"]",Ve(i)}}finally{se(i)}}}}function se(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||Bt(i,"ready");try{l.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Yt(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Yt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),on(c)}};function ha(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function Vu(i){const c={};i=(i.g&&Yt(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(p(i[f]))continue;var l=ks(i[f]);const S=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const b=c[S]||[];c[S]=b,b.push(l)}en(c,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Zr(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function da(i){this.za=0,this.i=[],this.j=new Pn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Zr("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Zr("baseRetryDelayMs",5e3,i),this.Za=Zr("retryDelaySeedMs",1e4,i),this.Ta=Zr("forwardChannelMaxRetries",2,i),this.va=Zr("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new or(i&&i.concurrentRequestLimit),this.Ba=new le,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=da.prototype,n.ka=8,n.I=1,n.connect=function(i,c,l,f){Ht(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=Ta(this,null,this.W),$s(this)};function Bi(i){if(fa(i),i.I==3){var c=i.V++,l=oe(i.J);if(ht(l,"SID",i.M),ht(l,"RID",c),ht(l,"TYPE","terminate"),ts(i,l),c=new me(i,i.j,c),c.M=2,c.A=lr(oe(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=Ia(c.j,null),c.g.ea(c.A)),c.F=Date.now(),rr(c)}va(i)}function qs(i){i.g&&($i(i),i.g.cancel(),i.g=null)}function fa(i){qs(i),i.v&&(a.clearTimeout(i.v),i.v=null),zs(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function $s(i){if(!ar(i.h)&&!i.m){i.m=!0;var c=i.Ea;_t||g(),ct||(_t(),ct=!0),I.add(c,i),i.D=0}}function Du(i,c){return Qr(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=cn(d(i.Ea,i,c),Ea(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const S=new me(this,this.j,i);let b=this.o;if(this.U&&(b?(b=$e(b),Fr(b,this.U)):b=this.U),this.u!==null||this.R||(S.J=b,b=null),this.S)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=ga(this,S,c),l=oe(this.J),ht(l,"RID",i),ht(l,"CVER",22),this.G&&ht(l,"X-HTTP-Session-Id",this.G),ts(this,l),b&&(this.R?c="headers="+un(ur(b))+"&"+c:this.u&&Gt(l,this.u,b)),cr(this.h,S),this.Ra&&ht(l,"TYPE","init"),this.S?(ht(l,"$req",c),ht(l,"SID","null"),S.U=!0,kn(S,l,null)):kn(S,l,c),this.I=2}}else this.I==3&&(i?ma(this,i):this.i.length==0||ar(this.h)||ma(this))};function ma(i,c){var l;c?l=c.l:l=i.V++;const f=oe(i.J);ht(f,"SID",i.M),ht(f,"RID",l),ht(f,"AID",i.K),ts(i,f),i.u&&i.o&&Gt(f,i.u,i.o),l=new me(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=ga(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),cr(i.h,l),kn(l,f,c)}function ts(i,c){i.H&&Te(i.H,function(l,f){ht(c,f,l)}),i.l&&Te({},function(l,f){ht(c,f,l)})}function ga(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var S=i.i;let X=-1;for(;;){const Ft=["count="+l];X==-1?l>0?(X=S[0].g,Ft.push("ofs="+X)):X=0:Ft.push("ofs="+X);let dt=!0;for(let qt=0;qt<l;qt++){var b=S[qt].g;const ke=S[qt].map;if(b-=X,b<0)X=Math.max(0,S[qt].g-100),dt=!1;else try{b="req"+b+"_"||"";try{var N=ke instanceof Map?ke:Object.entries(ke);for(const[Un,dn]of N){let fn=dn;u(dn)&&(fn=zr(dn)),Ft.push(b+Un+"="+encodeURIComponent(fn))}}catch(Un){throw Ft.push(b+"type="+encodeURIComponent("_badmap")),Un}}catch{f&&f(ke)}}if(dt){N=Ft.join("&");break t}}N=void 0}return i=i.i.splice(0,l),c.G=i,N}function pa(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;_t||g(),ct||(_t(),ct=!0),I.add(c,i),i.A=0}}function qi(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=cn(d(i.Da,i),Ea(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,_a(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=cn(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Ht(10),qs(this),_a(this))};function $i(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function _a(i){i.g=new me(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=oe(i.na);ht(c,"RID","rpc"),ht(c,"SID",i.M),ht(c,"AID",i.K),ht(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&ht(c,"TO",i.ia),ht(c,"TYPE","xmlhttp"),ts(i,c),i.u&&i.o&&Gt(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=lr(oe(c)),l.u=null,l.R=!0,Ms(l,i)}n.Va=function(){this.C!=null&&(this.C=null,qs(this),qi(this),Ht(19))};function zs(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ya(i,c){var l=null;if(i.g==c){zs(i),$i(i),i.g=null;var f=2}else if(hn(i.h,c))l=c.G,Us(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var S=i.D;f=fe(),Bt(f,new Wr(f,l)),$s(i)}else pa(i);else if(S=c.m,S==3||S==0&&c.X>0||!(f==1&&Du(i,c)||f==2&&qi(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),S){case 1:Fn(i,5);break;case 4:Fn(i,10);break;case 3:Fn(i,6);break;default:Fn(i,2)}}}function Ea(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Fn(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const S=!f;f=new Ce(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||On(f,"https"),lr(f),S?Tt(f.toString(),l):Lt(f.toString(),l)}else Ht(2);i.I=0,i.l&&i.l.pa(c),va(i),fa(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Ht(2)):(this.j.info("Failed to ping google.com"),Ht(1))};function va(i){if(i.I=0,i.ja=[],i.l){const c=Mn(i.h);(c.length!=0||i.i.length!=0)&&(M(i.ja,c),M(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function Ta(i,c,l){var f=l instanceof Ce?oe(l):new Ce(l);if(f.g!="")c&&(f.g=c+"."+f.g),Ln(f,f.u);else{var S=a.location;f=S.protocol,c=c?c+"."+S.hostname:S.hostname,S=+S.port;const b=new Ce(null);f&&On(b,f),c&&(b.g=c),S&&Ln(b,S),l&&(b.h=l),f=b}return l=i.G,c=i.wa,l&&c&&ht(f,l,c),ht(f,"VER",i.ka),ts(i,f),f}function Ia(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new st(new Pe({ab:l})):new st(i.ma),c.Fa(i.L),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wa(){}n=wa.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function js(){}js.prototype.g=function(i,c){return new ce(i,c)};function ce(i,c){Ot.call(this),this.g=new da(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!p(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!p(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new fr(this)}T(ce,Ot),ce.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ce.prototype.close=function(){Bi(this.g)},ce.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=zr(i),i=l);c.i.push(new Fs(c.Ya++,i)),c.I==3&&$s(c)},ce.prototype.N=function(){this.g.l=null,delete this.j,Bi(this.g),delete this.g,ce.Z.N.call(this)};function Aa(i){an.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}T(Aa,an);function Ra(){Gr.call(this),this.status=1}T(Ra,Gr);function fr(i){this.g=i}T(fr,wa),fr.prototype.ra=function(){Bt(this.g,"a")},fr.prototype.qa=function(i){Bt(this.g,new Aa(i))},fr.prototype.pa=function(i){Bt(this.g,new Ra)},fr.prototype.oa=function(){Bt(this.g,"b")},js.prototype.createWebChannel=js.prototype.g,ce.prototype.send=ce.prototype.o,ce.prototype.open=ce.prototype.m,ce.prototype.close=ce.prototype.close,sl=function(){return new js},rl=function(){return fe()},nl=je,co={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,Zs=Vn,Ds.COMPLETE="complete",el=Ds,Hr.EventType=Se,Se.OPEN="a",Se.CLOSE="b",Se.ERROR="c",Se.MESSAGE="d",Ot.prototype.listen=Ot.prototype.J,rs=Hr,st.prototype.listenOnce=st.prototype.K,st.prototype.getLastError=st.prototype.Ha,st.prototype.getLastErrorCode=st.prototype.ya,st.prototype.getStatus=st.prototype.ca,st.prototype.getResponseJson=st.prototype.La,st.prototype.getResponseText=st.prototype.la,st.prototype.send=st.prototype.ea,st.prototype.setWithCredentials=st.prototype.Fa,tl=st}).apply(typeof Ws<"u"?Ws:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let Nr="12.10.0";function Od(n){Nr=n}/**
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
 */const zn=new Gc("@firebase/firestore");function pr(){return zn.logLevel}function U(n,...t){if(zn.logLevel<=et.DEBUG){const e=t.map(Co);zn.debug(`Firestore (${Nr}): ${n}`,...e)}}function Xe(n,...t){if(zn.logLevel<=et.ERROR){const e=t.map(Co);zn.error(`Firestore (${Nr}): ${n}`,...e)}}function jn(n,...t){if(zn.logLevel<=et.WARN){const e=t.map(Co);zn.warn(`Firestore (${Nr}): ${n}`,...e)}}function Co(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function H(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,il(n,r,e)}function il(n,t,e){let r=`FIRESTORE (${Nr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Xe(r),new Error(r)}function ot(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||il(t,s,r)}function Q(n,t){return n}/**
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
 */const C={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends kr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ol{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ld{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(te.UNAUTHENTICATED))}shutdown(){}}class Fd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Ud{constructor(t){this.t=t,this.currentUser=te.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ot(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new En;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new En,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new En)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ot(typeof r.accessToken=="string",31837,{l:r}),new ol(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ot(t===null||typeof t=="string",2055,{h:t}),new te(t)}}class Bd{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=te.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class qd{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new Bd(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(te.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ba{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $d{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ed(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ot(this.o===void 0,3512);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ba(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ot(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ba(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function zd(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Po{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=zd(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function J(n,t){return n<t?-1:n>t?1:0}function lo(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return Yi(s)===Yi(o)?J(s,o):Yi(s)?1:-1}return J(n.length,t.length)}const jd=55296,Hd=57343;function Yi(n){const t=n.charCodeAt(0);return t>=jd&&t<=Hd}function Sr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const qa="__name__";class Oe{constructor(t,e,r){e===void 0?e=0:e>t.length&&H(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&H(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Oe.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Oe?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Oe.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return J(t.length,e.length)}static compareSegments(t,e){const r=Oe.isNumericId(t),s=Oe.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Oe.extractNumericId(t).compare(Oe.extractNumericId(e)):lo(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return yn.fromString(t.substring(4,t.length-2))}}class ft extends Oe{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new x(C.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const Gd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Oe{construct(t,e,r){return new Kt(t,e,r)}static isValidIdentifier(t){return Gd.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===qa}static keyField(){return new Kt([qa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new x(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new x(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Kt(e)}static emptyPath(){return new Kt([])}}/**
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
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(ft.fromString(t))}static fromName(t){return new $(ft.fromString(t).popFirst(5))}static empty(){return new $(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new ft(t.slice()))}}/**
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
 */function al(n,t,e){if(!e)throw new x(C.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wd(n,t,e,r){if(t===!0&&r===!0)throw new x(C.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function $a(n){if(!$.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function za(n){if($.isDocumentKey(n))throw new x(C.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function cl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function vi(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function ci(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new x(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vi(n);throw new x(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function Kd(n,t){if(t<=0)throw new x(C.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function xt(n,t){const e={typeString:n};return t&&(e.value=t),e}function Ts(n,t){if(!cl(n))throw new x(C.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new x(C.INVALID_ARGUMENT,e);return!0}/**
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
 */const ja=-62135596800,Ha=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*Ha);return new vt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<ja)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Ha}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Ts(t,vt._jsonSchema))return new vt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-ja;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:xt("string",vt._jsonSchemaVersion),seconds:xt("number"),nanoseconds:xt("number")};/**
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
 */class K{static fromTimestamp(t){return new K(t)}static min(){return new K(new vt(0,0))}static max(){return new K(new vt(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fs=-1;function Qd(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new Tn(s,$.empty(),t)}function Yd(n){return new Tn(n.readTime,n.key,fs)}class Tn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new Tn(K.min(),$.empty(),fs)}static max(){return new Tn(K.max(),$.empty(),fs)}}function Xd(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=$.comparator(n.documentKey,t.documentKey),e!==0?e:J(n.largestBatchId,t.largestBatchId))}/**
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
 */const Jd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function xr(n){if(n.code!==C.FAILED_PRECONDITION||n.message!==Jd)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new V((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function tf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Mr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Ti{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Ti.ce=-1;/**
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
 */const Vo=-1;function Ii(n){return n==null}function li(n){return n===0&&1/n==-1/0}function ef(n){return typeof n=="number"&&Number.isInteger(n)&&!li(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const ll="";function nf(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=Ga(t)),t=rf(n.get(e),t);return Ga(t)}function rf(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case ll:e+="";break;default:e+=o}}return e}function Ga(n){return n+ll+""}/**
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
 */function Wa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Gn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function ul(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class Rt{constructor(t,e){this.comparator=t,this.root=e||Wt.EMPTY}insert(t,e){return new Rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Wt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ks(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ks(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ks(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ks(this.root,t,this.comparator,!0)}}class Ks{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Wt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Wt.RED,this.left=s??Wt.EMPTY,this.right=o??Wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Wt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw H(27949);return t+(this.isRed()?0:1)}}Wt.EMPTY=null,Wt.RED=!0,Wt.BLACK=!1;Wt.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ut{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ka(this.data.getIterator())}getIteratorFrom(t){return new Ka(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Ut)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Ut(this.comparator);return e.data=t,e}}class Ka{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ye{constructor(t){this.fields=t,t.sort(Kt.comparator)}static empty(){return new ye([])}unionWith(t){let e=new Ut(Kt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ye(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Sr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class hl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new hl("Invalid base64 string: "+o):o}}(t);return new Qt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const sf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function In(n){if(ot(!!n,39018),typeof n=="string"){let t=0;const e=sf.exec(n);if(ot(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pt(n.seconds),nanos:Pt(n.nanos)}}function Pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function wn(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
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
 */const dl="server_timestamp",fl="__type__",ml="__previous_value__",gl="__local_write_time__";function wi(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[fl])==null?void 0:r.stringValue)===dl}function Ai(n){const t=n.mapValue.fields[ml];return wi(t)?Ai(t):t}function ms(n){const t=In(n.mapValue.fields[gl].timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class of{constructor(t,e,r,s,o,a,u,h,d,m,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=T}}const ui="(default)";class gs{constructor(t,e){this.projectId=t,this.database=e||ui}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database===ui}isEqual(t){return t instanceof gs&&t.projectId===this.projectId&&t.database===this.database}}function af(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new x(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(n.options.projectId,t)}/**
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
 */const pl="__type__",cf="__max__",Qs={mapValue:{}},_l="__vector__",hi="value";function An(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wi(n)?4:uf(n)?9007199254740991:lf(n)?10:11:H(28295,{value:n})}function qe(n,t){if(n===t)return!0;const e=An(n);if(e!==An(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return ms(n).isEqual(ms(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=In(s.timestampValue),u=In(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return wn(s.bytesValue).isEqual(wn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return Pt(s.geoPointValue.latitude)===Pt(o.geoPointValue.latitude)&&Pt(s.geoPointValue.longitude)===Pt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return Pt(s.integerValue)===Pt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=Pt(s.doubleValue),u=Pt(o.doubleValue);return a===u?li(a)===li(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Sr(n.arrayValue.values||[],t.arrayValue.values||[],qe);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Wa(a)!==Wa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!qe(a[h],u[h])))return!1;return!0}(n,t);default:return H(52216,{left:n})}}function ps(n,t){return(n.values||[]).find(e=>qe(e,t))!==void 0}function br(n,t){if(n===t)return 0;const e=An(n),r=An(t);if(e!==r)return J(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=Pt(o.integerValue||o.doubleValue),h=Pt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Qa(n.timestampValue,t.timestampValue);case 4:return Qa(ms(n),ms(t));case 5:return lo(n.stringValue,t.stringValue);case 6:return function(o,a){const u=wn(o),h=wn(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=J(u[d],h[d]);if(m!==0)return m}return J(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=J(Pt(o.latitude),Pt(a.latitude));return u!==0?u:J(Pt(o.longitude),Pt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return Ya(n.arrayValue,t.arrayValue);case 10:return function(o,a){var A,P,M,F;const u=o.fields||{},h=a.fields||{},d=(A=u[hi])==null?void 0:A.arrayValue,m=(P=h[hi])==null?void 0:P.arrayValue,T=J(((M=d==null?void 0:d.values)==null?void 0:M.length)||0,((F=m==null?void 0:m.values)==null?void 0:F.length)||0);return T!==0?T:Ya(d,m)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===Qs.mapValue&&a===Qs.mapValue)return 0;if(o===Qs.mapValue)return 1;if(a===Qs.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const A=lo(h[T],m[T]);if(A!==0)return A;const P=br(u[h[T]],d[m[T]]);if(P!==0)return P}return J(h.length,m.length)}(n.mapValue,t.mapValue);default:throw H(23264,{he:e})}}function Qa(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return J(n,t);const e=In(n),r=In(t),s=J(e.seconds,r.seconds);return s!==0?s:J(e.nanos,r.nanos)}function Ya(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=br(e[s],r[s]);if(o)return o}return J(e.length,r.length)}function Cr(n){return uo(n)}function uo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=In(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return wn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return $.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=uo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${uo(e.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function ti(n){switch(An(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ai(n);return t?16+ti(t):16;case 5:return 2*n.stringValue.length;case 6:return wn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+ti(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Gn(r.fields,(o,a)=>{s+=o.length+ti(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function di(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ho(n){return!!n&&"integerValue"in n}function Do(n){return!!n&&"arrayValue"in n}function Xa(n){return!!n&&"nullValue"in n}function Ja(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ei(n){return!!n&&"mapValue"in n}function lf(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[pl])==null?void 0:r.stringValue)===_l}function as(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Gn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=as(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=as(n.arrayValue.values[e]);return t}return{...n}}function uf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===cf}/**
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
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ei(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=as(e)}setAll(t){let e=Kt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=as(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ei(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return qe(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ei(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Gn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new ue(as(this.value))}}function yl(n){const t=[];return Gn(n.fields,(e,r)=>{const s=new Kt([e]);if(ei(r)){const o=yl(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new ye(t)}/**
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
 */class Pr{constructor(t,e){this.position=t,this.inclusive=e}}function Za(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),e.key):r=br(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function tc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!qe(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class _s{constructor(t,e="asc"){this.field=t,this.dir=e}}function hf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class El{}class Nt extends El{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new ff(t,e,r):e==="array-contains"?new pf(t,r):e==="in"?new _f(t,r):e==="not-in"?new yf(t,r):e==="array-contains-any"?new Ef(t,r):new Nt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new mf(t,r):new gf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(br(e,this.value)):e!==null&&An(this.value)===An(e)&&this.matchesComparison(br(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends El{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new ve(t,e)}matches(t){return vl(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function vl(n){return n.op==="and"}function Tl(n){return df(n)&&vl(n)}function df(n){for(const t of n.filters)if(t instanceof ve)return!1;return!0}function fo(n){if(n instanceof Nt)return n.field.canonicalString()+n.op.toString()+Cr(n.value);if(Tl(n))return n.filters.map(t=>fo(t)).join(",");{const t=n.filters.map(e=>fo(e)).join(",");return`${n.op}(${t})`}}function Il(n,t){return n instanceof Nt?function(r,s){return s instanceof Nt&&r.op===s.op&&r.field.isEqual(s.field)&&qe(r.value,s.value)}(n,t):n instanceof ve?function(r,s){return s instanceof ve&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&Il(a,s.filters[u]),!0):!1}(n,t):void H(19439)}function wl(n){return n instanceof Nt?function(e){return`${e.field.canonicalString()} ${e.op} ${Cr(e.value)}`}(n):n instanceof ve?function(e){return e.op.toString()+" {"+e.getFilters().map(wl).join(" ,")+"}"}(n):"Filter"}class ff extends Nt{constructor(t,e,r){super(t,e,r),this.key=$.fromName(r.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class mf extends Nt{constructor(t,e){super(t,"in",e),this.keys=Al("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class gf extends Nt{constructor(t,e){super(t,"not-in",e),this.keys=Al("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Al(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>$.fromName(r.referenceValue))}class pf extends Nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return Do(e)&&ps(e.arrayValue,this.value)}}class _f extends Nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&ps(this.value.arrayValue,e)}}class yf extends Nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!ps(this.value.arrayValue,e)}}class Ef extends Nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!Do(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>ps(this.value.arrayValue,r))}}/**
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
 */class vf{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function ec(n,t=null,e=[],r=[],s=null,o=null,a=null){return new vf(n,t,e,r,s,o,a)}function ko(n){const t=Q(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>fo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ii(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Cr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Cr(r)).join(",")),t.Te=e}return t.Te}function No(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!hf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!Il(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!tc(n.startAt,t.startAt)&&tc(n.endAt,t.endAt)}function mo(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Wn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Tf(n,t,e,r,s,o,a,u){return new Wn(n,t,e,r,s,o,a,u)}function Rl(n){return new Wn(n)}function nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function If(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function xo(n){return n.collectionGroup!==null}function Tr(n){const t=Q(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new Ut(Kt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new _s(o,r))}),e.has(Kt.keyField().canonicalString())||t.Ie.push(new _s(Kt.keyField(),r))}return t.Ie}function Fe(n){const t=Q(n);return t.Ee||(t.Ee=wf(t,Tr(n))),t.Ee}function wf(n,t){if(n.limitType==="F")return ec(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new _s(s.field,o)});const e=n.endAt?new Pr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Pr(n.startAt.position,n.startAt.inclusive):null;return ec(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function go(n,t){const e=n.filters.concat([t]);return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Af(n,t){const e=n.explicitOrderBy.concat([t]);return new Wn(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function fi(n,t,e){return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function Rf(n,t){return new Wn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,t,n.endAt)}function Ri(n,t){return No(Fe(n),Fe(t))&&n.limitType===t.limitType}function Sl(n){return`${ko(Fe(n))}|lt:${n.limitType}`}function _r(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>wl(s)).join(", ")}]`),Ii(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Cr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Cr(s)).join(",")),`Target(${r})`}(Fe(n))}; limitType=${n.limitType})`}function Si(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Tr(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Za(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Tr(r),s)||r.endAt&&!function(a,u,h){const d=Za(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Tr(r),s))}(n,t)}function Sf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function bl(n){return(t,e)=>{let r=!1;for(const s of Tr(n)){const o=bf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function bf(n,t,e){const r=n.field.isKeyField()?$.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?br(h,d):H(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class Kn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Gn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return ul(this.inner)}size(){return this.innerSize}}/**
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
 */const Cf=new Rt($.comparator);function Je(){return Cf}const Cl=new Rt($.comparator);function ss(...n){let t=Cl;for(const e of n)t=t.insert(e.key,e);return t}function Pl(n){let t=Cl;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function qn(){return cs()}function Vl(){return cs()}function cs(){return new Kn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Pf=new Rt($.comparator),Vf=new Ut($.comparator);function Z(...n){let t=Vf;for(const e of n)t=t.add(e);return t}const Df=new Ut(J);function kf(){return Df}/**
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
 */function Mo(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:li(t)?"-0":t}}function Dl(n){return{integerValue:""+n}}function Nf(n,t){return ef(t)?Dl(t):Mo(n,t)}/**
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
 */class bi{constructor(){this._=void 0}}function xf(n,t,e){return n instanceof ys?function(s,o){const a={fields:{[fl]:{stringValue:dl},[gl]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&wi(o)&&(o=Ai(o)),o&&(a.fields[ml]=o),{mapValue:a}}(e,t):n instanceof Es?Nl(n,t):n instanceof vs?xl(n,t):function(s,o){const a=kl(s,o),u=rc(a)+rc(s.Ae);return ho(a)&&ho(s.Ae)?Dl(u):Mo(s.serializer,u)}(n,t)}function Mf(n,t,e){return n instanceof Es?Nl(n,t):n instanceof vs?xl(n,t):e}function kl(n,t){return n instanceof mi?function(r){return ho(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class ys extends bi{}class Es extends bi{constructor(t){super(),this.elements=t}}function Nl(n,t){const e=Ml(t);for(const r of n.elements)e.some(s=>qe(s,r))||e.push(r);return{arrayValue:{values:e}}}class vs extends bi{constructor(t){super(),this.elements=t}}function xl(n,t){let e=Ml(t);for(const r of n.elements)e=e.filter(s=>!qe(s,r));return{arrayValue:{values:e}}}class mi extends bi{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function rc(n){return Pt(n.integerValue||n.doubleValue)}function Ml(n){return Do(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Of{constructor(t,e){this.field=t,this.transform=e}}function Lf(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Es&&s instanceof Es||r instanceof vs&&s instanceof vs?Sr(r.elements,s.elements,qe):r instanceof mi&&s instanceof mi?qe(r.Ae,s.Ae):r instanceof ys&&s instanceof ys}(n.transform,t.transform)}class Ff{constructor(t,e){this.version=t,this.transformResults=e}}class Qe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Qe}static exists(t){return new Qe(void 0,t)}static updateTime(t){return new Qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ni(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ci{}function Ol(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Fl(n.key,Qe.none()):new Is(n.key,n.data,Qe.none());{const e=n.data,r=ue.empty();let s=new Ut(Kt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Qn(n.key,r,new ye(s.toArray()),Qe.none())}}function Uf(n,t,e){n instanceof Is?function(s,o,a){const u=s.value.clone(),h=ic(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Qn?function(s,o,a){if(!ni(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=ic(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Ll(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ls(n,t,e,r){return n instanceof Is?function(o,a,u,h){if(!ni(o.precondition,a))return u;const d=o.value.clone(),m=oc(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Qn?function(o,a,u,h){if(!ni(o.precondition,a))return u;const d=oc(o.fieldTransforms,h,a),m=a.data;return m.setAll(Ll(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return ni(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Bf(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=kl(r.transform,s||null);o!=null&&(e===null&&(e=ue.empty()),e.set(r.field,o))}return e||null}function sc(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Sr(r,s,(o,a)=>Lf(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Is extends Ci{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Qn extends Ci{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Ll(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function ic(n,t,e){const r=new Map;ot(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Mf(a,u,e[s]))}return r}function oc(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,xf(o,a,t))}return r}class Fl extends Ci{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qf extends Ci{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class $f{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Uf(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ls(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ls(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Vl();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Ol(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Sr(this.mutations,t.mutations,(e,r)=>sc(e,r))&&Sr(this.baseMutations,t.baseMutations,(e,r)=>sc(e,r))}}class Oo{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){ot(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Pf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Oo(t,e,r,s)}}/**
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
 */class zf{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class jf{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Dt,tt;function Hf(n){switch(n){case C.OK:return H(64938);case C.CANCELLED:case C.UNKNOWN:case C.DEADLINE_EXCEEDED:case C.RESOURCE_EXHAUSTED:case C.INTERNAL:case C.UNAVAILABLE:case C.UNAUTHENTICATED:return!1;case C.INVALID_ARGUMENT:case C.NOT_FOUND:case C.ALREADY_EXISTS:case C.PERMISSION_DENIED:case C.FAILED_PRECONDITION:case C.ABORTED:case C.OUT_OF_RANGE:case C.UNIMPLEMENTED:case C.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Ul(n){if(n===void 0)return Xe("GRPC error has no .code"),C.UNKNOWN;switch(n){case Dt.OK:return C.OK;case Dt.CANCELLED:return C.CANCELLED;case Dt.UNKNOWN:return C.UNKNOWN;case Dt.DEADLINE_EXCEEDED:return C.DEADLINE_EXCEEDED;case Dt.RESOURCE_EXHAUSTED:return C.RESOURCE_EXHAUSTED;case Dt.INTERNAL:return C.INTERNAL;case Dt.UNAVAILABLE:return C.UNAVAILABLE;case Dt.UNAUTHENTICATED:return C.UNAUTHENTICATED;case Dt.INVALID_ARGUMENT:return C.INVALID_ARGUMENT;case Dt.NOT_FOUND:return C.NOT_FOUND;case Dt.ALREADY_EXISTS:return C.ALREADY_EXISTS;case Dt.PERMISSION_DENIED:return C.PERMISSION_DENIED;case Dt.FAILED_PRECONDITION:return C.FAILED_PRECONDITION;case Dt.ABORTED:return C.ABORTED;case Dt.OUT_OF_RANGE:return C.OUT_OF_RANGE;case Dt.UNIMPLEMENTED:return C.UNIMPLEMENTED;case Dt.DATA_LOSS:return C.DATA_LOSS;default:return H(39323,{code:n})}}(tt=Dt||(Dt={}))[tt.OK=0]="OK",tt[tt.CANCELLED=1]="CANCELLED",tt[tt.UNKNOWN=2]="UNKNOWN",tt[tt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tt[tt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tt[tt.NOT_FOUND=5]="NOT_FOUND",tt[tt.ALREADY_EXISTS=6]="ALREADY_EXISTS",tt[tt.PERMISSION_DENIED=7]="PERMISSION_DENIED",tt[tt.UNAUTHENTICATED=16]="UNAUTHENTICATED",tt[tt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tt[tt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tt[tt.ABORTED=10]="ABORTED",tt[tt.OUT_OF_RANGE=11]="OUT_OF_RANGE",tt[tt.UNIMPLEMENTED=12]="UNIMPLEMENTED",tt[tt.INTERNAL=13]="INTERNAL",tt[tt.UNAVAILABLE=14]="UNAVAILABLE",tt[tt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Gf(){return new TextEncoder}/**
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
 */const Wf=new yn([4294967295,4294967295],0);function ac(n){const t=Gf().encode(n),e=new Zc;return e.update(t),new Uint8Array(e.digest())}function cc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new yn([e,r],0),new yn([s,o],0)]}class Lo{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new is(`Invalid padding: ${e}`);if(r<0)throw new is(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new is(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new is(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=yn.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(yn.fromNumber(r)));return s.compare(Wf)===1&&(s=new yn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=ac(t),[r,s]=cc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Lo(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=ac(t),[r,s]=cc(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class is extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Pi{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,ws.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Pi(K.min(),s,new Rt(J),Je(),Z())}}class ws{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new ws(r,e,Z(),Z(),Z())}}/**
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
 */class ri{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Bl{constructor(t,e){this.targetId=t,this.Ce=e}}class ql{constructor(t,e,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class lc{constructor(){this.ve=0,this.Fe=uc(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Z(),e=Z(),r=Z();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:o})}}),new ws(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=uc()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,ot(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class Kf{constructor(t){this.Ge=t,this.ze=new Map,this.je=Je(),this.He=Ys(),this.Je=Ys(),this.Ze=new Rt(J)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:H(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(mo(o))if(r===0){const a=new $(o.path);this.et(e,a,ee.newNoDocument(a,K.min()))}else ot(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const u=this.ut(t),h=u?this.ct(u,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=wn(r).toUint8Array()}catch(h){if(h instanceof hl)return jn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Lo(a,s,o)}catch(h){return jn(h instanceof is?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&mo(u.target)){const h=new $(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ee.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}});let r=Z();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new Pi(t,e,this.Ze,this.je,r);return this.je=Je(),this.He=Ys(),this.Je=Ys(),this.Ze=new Rt(J),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new lc,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new Ut(J),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new Ut(J),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new lc),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function Ys(){return new Rt($.comparator)}function uc(){return new Rt($.comparator)}const Qf={asc:"ASCENDING",desc:"DESCENDING"},Yf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Xf={and:"AND",or:"OR"};class Jf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function po(n,t){return n.useProto3Json||Ii(t)?t:{value:t}}function gi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function $l(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Zf(n,t){return gi(n,t.toTimestamp())}function Ue(n){return ot(!!n,49232),K.fromTimestamp(function(e){const r=In(e);return new vt(r.seconds,r.nanos)}(n))}function Fo(n,t){return _o(n,t).canonicalString()}function _o(n,t){const e=function(s){return new ft(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function zl(n){const t=ft.fromString(n);return ot(Kl(t),10190,{key:t.toString()}),t}function yo(n,t){return Fo(n.databaseId,t.path)}function Xi(n,t){const e=zl(t);if(e.get(1)!==n.databaseId.projectId)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new x(C.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new $(Hl(e))}function jl(n,t){return Fo(n.databaseId,t)}function tm(n){const t=zl(n);return t.length===4?ft.emptyPath():Hl(t)}function Eo(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Hl(n){return ot(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function hc(n,t,e){return{name:yo(n,t),fields:e.value.mapValue.fields}}function em(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(ot(m===void 0||typeof m=="string",58123),Qt.fromBase64String(m||"")):(ot(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Qt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?C.UNKNOWN:Ul(d.code);return new x(m,d.message||"")}(a);e=new ql(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Xi(n,r.document.name),o=Ue(r.document.updateTime),a=r.document.createTime?Ue(r.document.createTime):K.min(),u=new ue({mapValue:{fields:r.document.fields}}),h=ee.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new ri(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Xi(n,r.document),o=r.readTime?Ue(r.readTime):K.min(),a=ee.newNoDocument(s,o),u=r.removedTargetIds||[];e=new ri([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Xi(n,r.document),o=r.removedTargetIds||[];e=new ri([],o,s,null)}else{if(!("filter"in t))return H(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new jf(s,o),u=r.targetId;e=new Bl(u,a)}}return e}function nm(n,t){let e;if(t instanceof Is)e={update:hc(n,t.key,t.value)};else if(t instanceof Fl)e={delete:yo(n,t.key)};else if(t instanceof Qn)e={update:hc(n,t.key,t.data),updateMask:hm(t.fieldMask)};else{if(!(t instanceof qf))return H(16599,{dt:t.type});e={verify:yo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof ys)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Es)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof vs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof mi)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw H(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Zf(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:H(27497)}(n,t.precondition)),e}function rm(n,t){return n&&n.length>0?(ot(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?Ue(s.updateTime):Ue(o);return a.isEqual(K.min())&&(a=Ue(o)),new Ff(a,s.transformResults||[])}(e,t))):[]}function sm(n,t){return{documents:[jl(n,t.path)]}}function im(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=jl(n,s);const o=function(d){if(d.length!==0)return Wl(ve.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:yr(A.field),direction:cm(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=po(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function om(n){let t=tm(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){ot(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const A=Gl(T);return A instanceof ve&&Tl(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(A=>function(M){return new _s(Er(M.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(M.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(T){let A;return A=typeof T=="object"?T.value:T,Ii(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(T){const A=!!T.before,P=T.values||[];return new Pr(P,A)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const A=!T.before,P=T.values||[];return new Pr(P,A)}(e.endAt)),Tf(t,s,a,o,u,"F",h,d)}function am(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Gl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Er(e.unaryFilter.field);return Nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Er(e.unaryFilter.field);return Nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Er(e.unaryFilter.field);return Nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Er(e.unaryFilter.field);return Nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(e){return Nt.create(Er(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ve.create(e.compositeFilter.filters.map(r=>Gl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(e.compositeFilter.op))}(n):H(30097,{filter:n})}function cm(n){return Qf[n]}function lm(n){return Yf[n]}function um(n){return Xf[n]}function yr(n){return{fieldPath:n.canonicalString()}}function Er(n){return Kt.fromServerFormat(n.fieldPath)}function Wl(n){return n instanceof Nt?function(e){if(e.op==="=="){if(Ja(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NAN"}};if(Xa(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ja(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NAN"}};if(Xa(e.value))return{unaryFilter:{field:yr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yr(e.field),op:lm(e.op),value:e.value}}}(n):n instanceof ve?function(e){const r=e.getFilters().map(s=>Wl(s));return r.length===1?r[0]:{compositeFilter:{op:um(e.op),filters:r}}}(n):H(54877,{filter:n})}function hm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Kl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function Ql(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class dm{constructor(t){this.yt=t}}function fm(n){const t=om({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?fi(t,t.limit,"L"):t}/**
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
 */class mm{constructor(){this.Sn=new gm}addToCollectionParentIndex(t,e){return this.Sn.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(Tn.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(Tn.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class gm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new Ut(ft.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Ut(ft.comparator)).toArray()}}/**
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
 */const dc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yl=41943040;class ie{static withCacheSize(t){return new ie(t,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ie.DEFAULT_COLLECTION_PERCENTILE=10,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ie.DEFAULT=new ie(Yl,ie.DEFAULT_COLLECTION_PERCENTILE,ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ie.DISABLED=new ie(-1,0,0);/**
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
 */const fc="LruGarbageCollector",pm=1048576;function mc([n,t],[e,r]){const s=J(n,e);return s===0?J(t,r):s}class _m{constructor(t){this.Pr=t,this.buffer=new Ut(mc),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();mc(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class ym{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){U(fc,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Mr(e)?U(fc,"Ignoring IndexedDB error during garbage collection: ",e):await xr(e)}await this.Ar(3e5)})}}class Em{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return V.resolve(Ti.ce);const r=new _m(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(dc)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),dc):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,u=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(d=Date.now(),pr()<=et.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function vm(n,t){return new Em(n,t)}/**
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
 */class Tm{constructor(){this.changes=new Kn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ee.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Im{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class wm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&ls(r.mutation,s,ye.empty(),vt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const s=qn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=ss();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=qn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Je();const a=cs(),u=function(){return cs()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Qn)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),ls(m.mutation,d,m.mutation.getFieldMask(),vt.now())):a.set(d.key,ye.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>u.set(d,new Im(m,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const r=cs();let s=new Rt((a,u)=>a-u),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||ye.empty();m=u.applyToLocalView(d,m),r.set(h,m);const T=(s.get(u.batchId)||Z()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,T=Vl();m.forEach(A=>{if(!o.has(A)){const P=Ol(e.get(A),r.get(A));P!==null&&T.set(A,P),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return If(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):V.resolve(qn());let u=fs,h=o;return a.next(d=>V.forEach(d,(m,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(m)?V.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Z())).next(m=>({batchId:u,changes:Pl(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(r=>{let s=ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=ss();return this.indexManager.getCollectionParents(t,o).next(u=>V.forEach(u,h=>{const d=function(T,A){return new Wn(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ee.newInvalidDocument(m)))});let u=ss();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&ls(m.mutation,d,ye.empty(),vt.now()),Si(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class Am{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return V.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Ue(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:fm(s.bundledQuery),readTime:Ue(s.readTime)}}(e)),V.resolve()}}/**
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
 */class Rm{constructor(){this.overlays=new Rt($.comparator),this.Lr=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=qn();return V.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.bt(t,e,o)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=qn(),o=e.length+1,a=new $(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new Rt((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=qn(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=qn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return V.resolve(u)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zf(e,r));let o=this.Lr.get(e);o===void 0&&(o=Z(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class Sm{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
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
 */class Uo{constructor(){this.kr=new Ut(zt.Kr),this.qr=new Ut(zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new zt(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new zt(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new $(new ft([])),r=new zt(e,t),s=new zt(e,t+1),o=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new $(new ft([])),r=new zt(e,t),s=new zt(e,t+1);let o=Z();return this.qr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new zt(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class zt{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return $.comparator(t.key,e.key)||J(t.Hr,e.Hr)}static Ur(t,e){return J(t.Hr,e.Hr)||$.comparator(t.key,e.key)}}/**
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
 */class bm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new Ut(zt.Kr)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new $f(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Jr=this.Jr.add(new zt(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return V.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Vo:this.Yn-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new zt(e,0),s=new zt(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),V.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Ut(J);return e.forEach(s=>{const o=new zt(s,0),a=new zt(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),V.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new zt(new $(o),0);let u=new Ut(J);return this.Jr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),V.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){ot(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return V.forEach(e.mutations,s=>{const o=new zt(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Jr=r})}nr(t){}containsKey(t,e){const r=new zt(e,0),s=this.Jr.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Cm{constructor(t){this.ti=t,this.docs=function(){return new Rt($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():ee.newInvalidDocument(e))}getEntries(t,e){let r=Je();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ee.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Je();const a=e.path,u=new $(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Xd(Yd(m),r)<=0||(s.has(m.key)||Si(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return V.resolve(o)}getAllFromCollectionGroup(t,e,r,s){H(9500)}ni(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Pm(this)}getSize(t){return V.resolve(this.size)}}class Pm extends Tm{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Vm{constructor(t){this.persistence=t,this.ri=new Kn(e=>ko(e),No),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new Uo,this.targetCount=0,this.oi=Vr._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),V.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new Vr(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.lr(e),V.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),V.waitFor(o).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.si.containsKey(e))}}/**
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
 */class Xl{constructor(t,e){this._i={},this.overlays={},this.ai=new Ti(0),this.ui=!1,this.ui=!0,this.ci=new Sm,this.referenceDelegate=t(this),this.li=new Vm(this),this.indexManager=new mm,this.remoteDocumentCache=function(s){return new Cm(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new dm(e),this.Pi=new Am(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Rm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new bm(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new Dm(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(o=>this.referenceDelegate.Ii(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return V.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Dm extends Zd{constructor(t){super(),this.currentSequenceNumber=t}}class Bo{constructor(t){this.persistence=t,this.Ri=new Uo,this.Ai=null}static Vi(t){return new Bo(t)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),V.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.di,r=>{const s=$.fromPath(r);return this.mi(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return V.or([()=>V.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class pi{constructor(t,e){this.persistence=t,this.fi=new Kn(r=>nf(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=vm(this,e)}static Vi(t,e){return new pi(t,e)}Ti(){}Ii(t){return V.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return V.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(o=>o?V.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),V.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),V.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),V.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ti(t.data.value)),e}wr(t,e,r){return V.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class qo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=Z(),s=Z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new qo(t,e.fromCache,r,s)}}/**
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
 */class km{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Nm{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return ph()?8:tf(mh())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new km;return this.ys(t,e,a).next(u=>{if(o.result=u,this.As)return this.ws(t,e,a,u.size)})}).next(()=>o.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(pr()<=et.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",_r(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),V.resolve()):(pr()<=et.DEBUG&&U("QueryEngine","Query:",_r(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(pr()<=et.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",_r(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Fe(e))):V.resolve())}gs(t,e){if(nc(e))return V.resolve(null);let r=Fe(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=fi(e,null,"F"),r=Fe(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Z(...o);return this.fs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ss(e,d,a,h.readTime)?this.gs(t,fi(e,null,"F")):this.Ds(t,d,e,h)}))})))}ps(t,e,r,s){return nc(e)||s.isEqual(K.min())?V.resolve(null):this.fs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?V.resolve(null):(pr()<=et.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_r(e)),this.Ds(t,a,e,Qd(s,fs)).next(u=>u))})}bs(t,e){let r=new Ut(bl(t));return e.forEach((s,o)=>{Si(t,o)&&(r=r.add(o))}),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return pr()<=et.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",_r(e)),this.fs.getDocumentsMatchingQuery(t,e,Tn.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const $o="LocalStore",xm=3e8;class Mm{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new Rt(J),this.Fs=new Kn(o=>ko(o),No),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new wm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Om(n,t,e,r){return new Mm(n,t,e,r)}async function Jl(n,t){const e=Q(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:u}))})})}function Lm(n,t){const e=Q(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const T=d.batch,A=T.keys();let P=V.resolve();return A.forEach(M=>{P=P.next(()=>m.getEntry(h,M)).next(F=>{const O=d.docVersions.get(M);ot(O!==null,48541),F.version.compareTo(O)<0&&(T.applyToRemoteDocument(F,d),F.isValidDocument()&&(F.setReadTime(d.commitVersion),m.addEntry(F)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function Zl(n){const t=Q(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function Fm(n,t){const e=Q(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const u=[];t.targetChanges.forEach((m,T)=>{const A=s.get(T);if(!A)return;u.push(e.li.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.li.addMatchingKeys(o,m.addedDocuments,T)));let P=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?P=P.withResumeToken(Qt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(m.resumeToken,r)),s=s.insert(T,P),function(F,O,Y){return F.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-F.snapshotVersion.toMicroseconds()>=xm?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0}(A,P,m)&&u.push(e.li.updateTargetData(o,P))});let h=Je(),d=Z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(Um(o,a,t.documentUpdates).next(m=>{h=m.Bs,d=m.Ls})),!r.isEqual(K.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next(T=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return V.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.vs=s,o))}function Um(n,t,e){let r=Z(),s=Z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Je();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(K.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):U($o,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:s}})}function Bm(n,t){const e=Q(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Vo),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function qm(n,t){const e=Q(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(o=>o?(s=o,V.resolve(s)):e.li.allocateTargetId(r).next(a=>(s=new gn(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function vo(n,t,e){const r=Q(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Mr(a))throw a;U($o,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function gc(n,t,e){const r=Q(n);let s=K.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=Q(h),A=T.Fs.get(m);return A!==void 0?V.resolve(T.vs.get(A)):T.li.getTargetData(d,m)}(r,a,Fe(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Z())).next(u=>($m(r,Sf(t),u),{documents:u,ks:o})))}function $m(n,t,e){let r=n.Ms.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ms.set(t,r)}class pc{constructor(){this.activeTargetIds=kf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class zm{constructor(){this.vo=new pc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new pc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class jm{Mo(t){}shutdown(){}}/**
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
 */const _c="ConnectivityMonitor";class yc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(_c,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){U(_c,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const Ji="RestConnection",Hm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Gm{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===ui?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=To(),u=this.Qo(t,e.toUriEncodedString());U(Ji,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),m=So(d);return this.zo(t,u,h,r,m).then(T=>(U(Ji,`Received RPC '${t}' ${a}: `,T),T),T=>{throw jn(Ji,`RPC '${t}' ${a} failed with error: `,T,"url: ",u,"request:",r),T})}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Nr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Qo(t,e){const r=Hm[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class Wm{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const Xt="WebChannelConnection",es=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ir extends Gm{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Ir.c_){const t=rl();es(t,nl.STAT_EVENT,e=>{e.stat===co.PROXY?U(Xt,"STAT_EVENT: detected buffering proxy"):e.stat===co.NOPROXY&&U(Xt,"STAT_EVENT: detected no buffering proxy")}),Ir.c_=!0}}zo(t,e,r,s,o){const a=To();return new Promise((u,h)=>{const d=new tl;d.setWithCredentials(!0),d.listenOnce(el.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Zs.NO_ERROR:const T=d.getResponseJson();U(Xt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),u(T);break;case Zs.TIMEOUT:U(Xt,`RPC '${t}' ${a} timed out`),h(new x(C.DEADLINE_EXCEEDED,"Request time out"));break;case Zs.HTTP_ERROR:const A=d.getStatus();if(U(Xt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const M=P==null?void 0:P.error;if(M&&M.status&&M.message){const F=function(Y){const z=Y.toLowerCase().replace(/_/g,"-");return Object.values(C).indexOf(z)>=0?z:C.UNKNOWN}(M.status);h(new x(F,M.message))}else h(new x(C.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new x(C.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{U(Xt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);U(Xt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}T_(t,e,r){const s=To(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const d=o.join("");U(Xt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);this.I_(m);let T=!1,A=!1;const P=new Wm({Ho:M=>{A?U(Xt,`Not sending because RPC '${t}' stream ${s} is closed:`,M):(T||(U(Xt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),T=!0),U(Xt,`RPC '${t}' stream ${s} sending:`,M),m.send(M))},Jo:()=>m.close()});return es(m,rs.EventType.OPEN,()=>{A||(U(Xt,`RPC '${t}' stream ${s} transport opened.`),P.i_())}),es(m,rs.EventType.CLOSE,()=>{A||(A=!0,U(Xt,`RPC '${t}' stream ${s} transport closed`),P.o_(),this.E_(m))}),es(m,rs.EventType.ERROR,M=>{A||(A=!0,jn(Xt,`RPC '${t}' stream ${s} transport errored. Name:`,M.name,"Message:",M.message),P.o_(new x(C.UNAVAILABLE,"The operation could not be completed")))}),es(m,rs.EventType.MESSAGE,M=>{var F;if(!A){const O=M.data[0];ot(!!O,16349);const Y=O,z=(Y==null?void 0:Y.error)||((F=Y[0])==null?void 0:F.error);if(z){U(Xt,`RPC '${t}' stream ${s} received error:`,z);const W=z.status;let pt=function(I){const g=Dt[I];if(g!==void 0)return Ul(g)}(W),_t=z.message;W==="NOT_FOUND"&&_t.includes("database")&&_t.includes("does not exist")&&_t.includes(this.databaseId.database)&&jn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),pt===void 0&&(pt=C.INTERNAL,_t="Unknown error status: "+W+" with message "+z.message),A=!0,P.o_(new x(pt,_t)),m.close()}else U(Xt,`RPC '${t}' stream ${s} received:`,O),P.__(O)}}),Ir.u_(),setTimeout(()=>{P.s_()},0),P}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return sl()}}/**
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
 */function Km(n){return new Ir(n)}function Zi(){return typeof document<"u"?document:null}/**
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
 */function Vi(n){return new Jf(n,!0)}/**
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
 */Ir.c_=!1;class tu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Ec="PersistentStream";class eu{constructor(t,e,r,s,o,a,u,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new tu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===C.RESOURCE_EXHAUSTED?(Xe(e.toString()),Xe("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===C.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new x(C.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return U(Ec,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(U(Ec,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Qm extends eu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=em(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?Ue(a.readTime):K.min()}(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Eo(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=mo(h)?{documents:sm(o,h)}:{query:im(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=$l(o,a.resumeToken);const d=po(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){u.readTime=gi(o,a.snapshotVersion.toTimestamp());const d=po(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=am(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Eo(this.serializer),e.removeTarget=t,this.K_(e)}}class Ym extends eu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return ot(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ot(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ot(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=rm(t.writeResults,t.commitTime),r=Ue(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Eo(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>nm(this.serializer,r))};this.K_(e)}}/**
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
 */class Xm{}class Jm extends Xm{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,_o(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new x(C.UNKNOWN,o.toString())})}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.jo(t,_o(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===C.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(C.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function Zm(n,t,e,r){return new Jm(n,t,e,r)}class tg{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
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
 */const Hn="RemoteStore";class eg{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{Yn(this)&&(U(Hn,"Restarting streams for network reachability change."),await async function(h){const d=Q(h);d.Ea.add(4),await As(d),d.Va.set("Unknown"),d.Ea.delete(4),await Di(d)}(this))})}),this.Va=new tg(r,s)}}async function Di(n){if(Yn(n))for(const t of n.Ra)await t(!0)}async function As(n){for(const t of n.Ra)await t(!1)}function nu(n,t){const e=Q(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),Go(e)?Ho(e):Or(e).O_()&&jo(e,t))}function zo(n,t){const e=Q(n),r=Or(e);e.Ia.delete(t),r.O_()&&ru(e,t),e.Ia.size===0&&(r.O_()?r.L_():Yn(e)&&e.Va.set("Unknown"))}function jo(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Or(n).Z_(t)}function ru(n,t){n.da.$e(t),Or(n).X_(t)}function Ho(n){n.da=new Kf({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Or(n).start(),n.Va.ua()}function Go(n){return Yn(n)&&!Or(n).x_()&&n.Ia.size>0}function Yn(n){return Q(n).Ea.size===0}function su(n){n.da=void 0}async function ng(n){n.Va.set("Online")}async function rg(n){n.Ia.forEach((t,e)=>{jo(n,t)})}async function sg(n,t){su(n),Go(n)?(n.Va.ha(t),Ho(n)):n.Va.set("Unknown")}async function ig(n,t,e){if(n.Va.set("Online"),t instanceof ql&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.da.removeTarget(u))}(n,t)}catch(r){U(Hn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await _i(n,r)}else if(t instanceof ri?n.da.Xe(t):t instanceof Bl?n.da.st(t):n.da.tt(t),!e.isEqual(K.min()))try{const r=await Zl(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.da.Tt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(Qt.EMPTY_BYTE_STRING,m.snapshotVersion)),ru(o,h);const T=new gn(m.target,h,d,m.sequenceNumber);jo(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){U(Hn,"Failed to raise snapshot:",r),await _i(n,r)}}async function _i(n,t,e){if(!Mr(t))throw t;n.Ea.add(1),await As(n),n.Va.set("Offline"),e||(e=()=>Zl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Hn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Di(n)})}function iu(n,t){return t().catch(e=>_i(n,e,t))}async function ki(n){const t=Q(n),e=Rn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Vo;for(;og(t);)try{const s=await Bm(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,ag(t,s)}catch(s){await _i(t,s)}ou(t)&&au(t)}function og(n){return Yn(n)&&n.Ta.length<10}function ag(n,t){n.Ta.push(t);const e=Rn(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function ou(n){return Yn(n)&&!Rn(n).x_()&&n.Ta.length>0}function au(n){Rn(n).start()}async function cg(n){Rn(n).ra()}async function lg(n){const t=Rn(n);for(const e of n.Ta)t.ea(e.mutations)}async function ug(n,t,e){const r=n.Ta.shift(),s=Oo.from(r,t,e);await iu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ki(n)}async function hg(n,t){t&&Rn(n).Y_&&await async function(r,s){if(function(a){return Hf(a)&&a!==C.ABORTED}(s.code)){const o=r.Ta.shift();Rn(r).B_(),await iu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await ki(r)}}(n,t),ou(n)&&au(n)}async function vc(n,t){const e=Q(n);e.asyncQueue.verifyOperationInProgress(),U(Hn,"RemoteStore received new credentials");const r=Yn(e);e.Ea.add(3),await As(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Di(e)}async function dg(n,t){const e=Q(n);t?(e.Ea.delete(2),await Di(e)):t||(e.Ea.add(2),await As(e),e.Va.set("Unknown"))}function Or(n){return n.ma||(n.ma=function(e,r,s){const o=Q(e);return o.sa(),new Qm(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:ng.bind(null,n),Yo:rg.bind(null,n),t_:sg.bind(null,n),J_:ig.bind(null,n)}),n.Ra.push(async t=>{t?(n.ma.B_(),Go(n)?Ho(n):n.Va.set("Unknown")):(await n.ma.stop(),su(n))})),n.ma}function Rn(n){return n.fa||(n.fa=function(e,r,s){const o=Q(e);return o.sa(),new Ym(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:cg.bind(null,n),t_:hg.bind(null,n),ta:lg.bind(null,n),na:ug.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await ki(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Hn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class Wo{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Wo(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ko(n,t){if(Xe("AsyncQueue",`${t}: ${n}`),Mr(n))return new x(C.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class wr{static emptySet(t){return new wr(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||$.comparator(e.key,r.key):(e,r)=>$.comparator(e.key,r.key),this.keyedMap=ss(),this.sortedSet=new Rt(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof wr)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Tc{constructor(){this.ga=new Rt($.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):H(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class Dr{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Dr(t,e,wr.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ri(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fg{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(t=>t.Da())}}class mg{constructor(){this.queries=Ic(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=Q(e),o=s.queries;s.queries=Ic(),o.forEach((a,u)=>{for(const h of u.ba)h.onError(r)})})(this,new x(C.ABORTED,"Firestore shutting down"))}}function Ic(){return new Kn(n=>Sl(n),Ri)}async function gg(n,t){const e=Q(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new fg,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Ko(a,`Initialization of query '${_r(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&Qo(e)}async function pg(n,t){const e=Q(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function _g(n,t){const e=Q(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ba)u.Fa(s)&&(r=!0);a.wa=s}}r&&Qo(e)}function yg(n,t,e){const r=Q(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function Qo(n){n.Ca.forEach(t=>{t.next()})}var Io,wc;(wc=Io||(Io={})).Ma="default",wc.Cache="cache";class Eg{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Dr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=Dr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Io.Cache}}/**
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
 */class cu{constructor(t){this.key=t}}class lu{constructor(t){this.key=t}}class vg{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Z(),this.mutatedKeys=Z(),this.eu=bl(t),this.tu=new wr(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new Tc,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const A=s.get(m),P=Si(this.query,T)?T:null,M=!!A&&this.mutatedKeys.has(A.key),F=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let O=!1;A&&P?A.data.isEqual(P.data)?M!==F&&(r.track({type:3,doc:P}),O=!0):this.su(A,P)||(r.track({type:2,doc:P}),O=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(u=!0)):!A&&P?(r.track({type:0,doc:P}),O=!0):A&&!P&&(r.track({type:1,doc:A}),O=!0,(h||d)&&(u=!0)),O&&(P?(a=a.add(P),o=F?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,T)=>function(P,M){const F=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:O})}};return F(P)-F(M)}(m.type,T.type)||this.eu(m.doc,T.doc)),this.ou(r),s=s??!1;const u=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new Dr(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Tc,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new lu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new cu(r))}),e}cu(t){this.Za=t.ks,this.Ya=Z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return Dr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Yo="SyncEngine";class Tg{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ig{constructor(t){this.key=t,this.hu=!1}}class wg{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Kn(u=>Sl(u),Ri),this.Iu=new Map,this.Eu=new Set,this.Ru=new Rt($.comparator),this.Au=new Map,this.Vu=new Uo,this.du={},this.mu=new Map,this.fu=Vr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Ag(n,t,e=!0){const r=gu(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await uu(r,t,e,!0),s}async function Rg(n,t){const e=gu(n);await uu(e,t,!0,!1)}async function uu(n,t,e,r){const s=await qm(n.localStore,Fe(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await Sg(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&nu(n.remoteStore,s),u}async function Sg(n,t,e,r,s){n.pu=(T,A,P)=>async function(F,O,Y,z){let W=O.view.ru(Y);W.Ss&&(W=await gc(F.localStore,O.query,!1).then(({documents:I})=>O.view.ru(I,W)));const pt=z&&z.targetChanges.get(O.targetId),_t=z&&z.targetMismatches.get(O.targetId)!=null,ct=O.view.applyChanges(W,F.isPrimaryClient,pt,_t);return Rc(F,O.targetId,ct.au),ct.snapshot}(n,T,A,P);const o=await gc(n.localStore,t,!0),a=new vg(t,o.ks),u=a.ru(o.documents),h=ws.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Rc(n,e,d.au);const m=new Tg(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function bg(n,t,e){const r=Q(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!Ri(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await vo(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&zo(r.remoteStore,s.targetId),wo(r,s.targetId)}).catch(xr)):(wo(r,s.targetId),await vo(r.localStore,s.targetId,!0))}async function Cg(n,t){const e=Q(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),zo(e.remoteStore,r.targetId))}async function Pg(n,t,e){const r=Og(n);try{const s=await function(a,u){const h=Q(a),d=vt.now(),m=u.reduce((P,M)=>P.add(M.key),Z());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",P=>{let M=Je(),F=Z();return h.xs.getEntries(P,m).next(O=>{M=O,M.forEach((Y,z)=>{z.isValidDocument()||(F=F.add(Y))})}).next(()=>h.localDocuments.getOverlayedDocuments(P,M)).next(O=>{T=O;const Y=[];for(const z of u){const W=Bf(z,T.get(z.key).overlayedDocument);W!=null&&Y.push(new Qn(z.key,W,yl(W.value.mapValue),Qe.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,Y,u)}).next(O=>{A=O;const Y=O.applyToLocalDocumentSet(T,F);return h.documentOverlayCache.saveOverlays(P,O.batchId,Y)})}).then(()=>({batchId:A.batchId,changes:Pl(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.du[a.currentUser.toKey()];d||(d=new Rt(J)),d=d.insert(u,h),a.du[a.currentUser.toKey()]=d}(r,s.batchId,e),await Rs(r,s.changes),await ki(r.remoteStore)}catch(s){const o=Ko(s,"Failed to persist write");e.reject(o)}}async function hu(n,t){const e=Q(n);try{const r=await Fm(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(ot(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ot(a.hu,14607):s.removedDocuments.size>0&&(ot(a.hu,42227),a.hu=!1))}),await Rs(e,r,t)}catch(r){await xr(r)}}function Ac(n,t,e){const r=Q(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=Q(a);h.onlineState=u;let d=!1;h.queries.forEach((m,T)=>{for(const A of T.ba)A.va(u)&&(d=!0)}),d&&Qo(h)}(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vg(n,t,e){const r=Q(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new Rt($.comparator);a=a.insert(o,ee.newNoDocument(o,K.min()));const u=Z().add(o),h=new Pi(K.min(),new Map,new Rt(J),a,u);await hu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),Xo(r)}else await vo(r.localStore,t,!1).then(()=>wo(r,t,e)).catch(xr)}async function Dg(n,t){const e=Q(n),r=t.batch.batchId;try{const s=await Lm(e.localStore,t);fu(e,r,null),du(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Rs(e,s)}catch(s){await xr(s)}}async function kg(n,t,e){const r=Q(n);try{const s=await function(a,u){const h=Q(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(ot(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);fu(r,t,e),du(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Rs(r,s)}catch(s){await xr(s)}}function du(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function fu(n,t,e){const r=Q(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function wo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach(r=>{n.Vu.containsKey(r)||mu(n,r)})}function mu(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(zo(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),Xo(n))}function Rc(n,t,e){for(const r of e)r instanceof cu?(n.Vu.addReference(r.key,t),Ng(n,r)):r instanceof lu?(U(Yo,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||mu(n,r.key)):H(19791,{wu:r})}function Ng(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(U(Yo,"New document in limbo: "+e),n.Eu.add(r),Xo(n))}function Xo(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new $(ft.fromString(t)),r=n.fu.next();n.Au.set(r,new Ig(e)),n.Ru=n.Ru.insert(e,r),nu(n.remoteStore,new gn(Fe(Rl(e.path)),r,"TargetPurposeLimboResolution",Ti.ce))}}async function Rs(n,t,e){const r=Q(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=qo.Es(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(h,d){const m=Q(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>V.forEach(d,A=>V.forEach(A.Ts,P=>m.persistence.referenceDelegate.addReference(T,A.targetId,P)).next(()=>V.forEach(A.Is,P=>m.persistence.referenceDelegate.removeReference(T,A.targetId,P)))))}catch(T){if(!Mr(T))throw T;U($o,"Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const P=m.vs.get(A),M=P.snapshotVersion,F=P.withLastLimboFreeSnapshotVersion(M);m.vs=m.vs.insert(A,F)}}}(r.localStore,o))}async function xg(n,t){const e=Q(n);if(!e.currentUser.isEqual(t)){U(Yo,"User change. New user:",t.toKey());const r=await Jl(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new x(C.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Rs(e,r.Ns)}}function Mg(n,t){const e=Q(n),r=e.Au.get(t);if(r&&r.hu)return Z().add(r.key);{let s=Z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function gu(n){const t=Q(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=hu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vg.bind(null,t),t.Pu.J_=_g.bind(null,t.eventManager),t.Pu.yu=yg.bind(null,t.eventManager),t}function Og(n){const t=Q(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Dg.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=kg.bind(null,t),t}class yi{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Vi(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Om(this.persistence,new Nm,t.initialUser,this.serializer)}Cu(t){return new Xl(Bo.Vi,this.serializer)}Du(t){return new zm}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yi.provider={build:()=>new yi};class Lg extends yi{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){ot(this.persistence.referenceDelegate instanceof pi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ym(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?ie.withCacheSize(this.cacheSizeBytes):ie.DEFAULT;return new Xl(r=>pi.Vi(r,e),this.serializer)}}class Ao{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ac(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xg.bind(null,this.syncEngine),await dg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new mg}()}createDatastore(t){const e=Vi(t.databaseInfo.databaseId),r=Km(t.databaseInfo);return Zm(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new eg(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Ac(this.syncEngine,e,0),function(){return yc.v()?new yc:new jm}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const T=new wg(s,o,a,u,h,d);return m&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=Q(s);U(Hn,"RemoteStore shutting down."),o.Ea.add(5),await As(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Ao.provider={build:()=>new Ao};/**
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
 */class Fg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Xe("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Sn="FirestoreClient";class Ug{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=te.UNAUTHENTICATED,this.clientId=Po.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{U(Sn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(Sn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Ko(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function to(n,t){n.asyncQueue.verifyOperationInProgress(),U(Sn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Jl(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Sc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await Bg(n);U(Sn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>vc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>vc(t.remoteStore,s)),n._onlineComponents=t}async function Bg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(Sn,"Using user provided OfflineComponentProvider");try{await to(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===C.FAILED_PRECONDITION||s.code===C.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;jn("Error using user provided cache. Falling back to memory cache: "+e),await to(n,new yi)}}else U(Sn,"Using default OfflineComponentProvider"),await to(n,new Lg(void 0));return n._offlineComponents}async function pu(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(Sn,"Using user provided OnlineComponentProvider"),await Sc(n,n._uninitializedComponentsProvider._online)):(U(Sn,"Using default OnlineComponentProvider"),await Sc(n,new Ao))),n._onlineComponents}function qg(n){return pu(n).then(t=>t.syncEngine)}async function $g(n){const t=await pu(n),e=t.eventManager;return e.onListen=Ag.bind(null,t.syncEngine),e.onUnlisten=bg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=Rg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Cg.bind(null,t.syncEngine),e}function zg(n,t,e={}){const r=new En;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new Fg({next:A=>{m.Nu(),a.enqueueAndForget(()=>pg(o,T)),A.fromCache&&h.source==="server"?d.reject(new x(C.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new Eg(u,m,{includeMetadataChanges:!0,Ka:!0});return gg(o,T)}(await $g(n),n.asyncQueue,t,e,r)),r.promise}function jg(n,t){const e=new En;return n.asyncQueue.enqueueAndForget(async()=>Pg(await qg(n),t,e)),e.promise}/**
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
 */function _u(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const Hg="ComponentProvider",bc=new Map;function Gg(n,t,e,r,s){return new of(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,_u(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const yu="firestore.googleapis.com",Cc=!0;class Pc{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new x(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=yu,this.ssl=Cc}else this.host=t.host,this.ssl=t.ssl??Cc;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Yl;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<pm)throw new x(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_u(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new x(C.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ni{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new x(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new x(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pc(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Ld;switch(r.type){case"firstParty":return new qd(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=bc.get(e);r&&(U(Hg,"Removing Datastore"),bc.delete(e),r.terminate())}(this),Promise.resolve()}}function Wg(n,t,e,r={}){var d;n=ci(n,Ni);const s=So(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&(lh(`https://${u}`),fh("Firestore",!0)),o.host!==yu&&o.host!==u&&jn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!oi(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=te.MOCK_USER;else{m=uh(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new x(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new te(A)}n._authCredentials=new Fd(new ol(m,T))}}/**
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
 */class Ze{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Ze(this.firestore,t,this._query)}}class jt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new jt(this.firestore,t,this._key)}toJSON(){return{type:jt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Ts(e,jt._jsonSchema))return new jt(t,r||null,new $(ft.fromString(e.referencePath)))}}jt._jsonSchemaVersion="firestore/documentReference/1.0",jt._jsonSchema={type:xt("string",jt._jsonSchemaVersion),referencePath:xt("string")};class vn extends Ze{constructor(t,e,r){super(t,e,Rl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new jt(this.firestore,null,new $(t))}withConverter(t){return new vn(this.firestore,t,this._path)}}function Eu(n,t,...e){if(n=$n(n),al("collection","path",t),n instanceof Ni){const r=ft.fromString(t,...e);return za(r),new vn(n,null,r)}{if(!(n instanceof jt||n instanceof vn))throw new x(C.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return za(r),new vn(n.firestore,null,r)}}function Kg(n,t,...e){if(n=$n(n),arguments.length===1&&(t=Po.newId()),al("doc","path",t),n instanceof Ni){const r=ft.fromString(t,...e);return $a(r),new jt(n,null,new $(r))}{if(!(n instanceof jt||n instanceof vn))throw new x(C.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return $a(r),new jt(n.firestore,n instanceof vn?n.converter:null,new $(r))}}/**
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
 */const Vc="AsyncQueue";class Dc{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tu(this,"async_queue_retry"),this._c=()=>{const r=Zi();r&&U(Vc,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=Zi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=Zi();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new En;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Mr(t))throw t;U(Vc,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Xe("INTERNAL UNHANDLED ERROR: ",kc(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=Wo.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:kc(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function kc(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class Jo extends Ni{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Dc,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Dc(t),this._firestoreClient=void 0,await t}}}function Qg(n,t){const e=typeof n=="object"?n:Yc(),r=typeof n=="string"?n:ui,s=yd(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=ah("firestore");o&&Wg(s,...o)}return s}function vu(n){if(n._terminated)throw new x(C.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Yg(n),n._firestoreClient}function Yg(n){var r,s,o,a;const t=n._freezeSettings(),e=Gg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new Ug(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class he{constructor(t){this._byteString=t}static fromBase64String(t){try{return new he(Qt.fromBase64String(t))}catch(e){throw new x(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new he(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:he._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Ts(t,he._jsonSchema))return he.fromBase64String(t.bytes)}}he._jsonSchemaVersion="firestore/bytes/1.0",he._jsonSchema={type:xt("string",he._jsonSchemaVersion),bytes:xt("string")};/**
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
 */class Tu{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class Zo{constructor(t){this._methodName=t}}/**
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
 */class Be{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Be._jsonSchemaVersion}}static fromJSON(t){if(Ts(t,Be._jsonSchema))return new Be(t.latitude,t.longitude)}}Be._jsonSchemaVersion="firestore/geoPoint/1.0",Be._jsonSchema={type:xt("string",Be._jsonSchemaVersion),latitude:xt("number"),longitude:xt("number")};/**
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
 */class Ee{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Ee._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Ts(t,Ee._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Ee(t.vectorValues);throw new x(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Ee._jsonSchemaVersion="firestore/vectorValue/1.0",Ee._jsonSchema={type:xt("string",Ee._jsonSchemaVersion),vectorValues:xt("object")};/**
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
 */const Xg=/^__.*__$/;class Jg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Qn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Is(t,this.data,e,this.fieldTransforms)}}function Iu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{dataSource:n})}}class ta{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new ta({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Ei(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Iu(this.dataSource)&&Xg.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class Zg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Vi(t)}createContext(t,e,r,s=!1){return new ta({dataSource:t,methodName:e,targetDoc:r,path:Kt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ea(n){const t=n._freezeSettings(),e=Vi(n._databaseId);return new Zg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function tp(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);Su("Data must be an object, but it was:",a,r);const u=Au(r,a);let h,d;if(o.merge)h=new ye(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const A=xi(t,T,e);if(!a.contains(A))throw new x(C.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);rp(m,A)||m.push(A)}h=new ye(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new Jg(new ue(u),h,d)}class na extends Zo{_toFieldTransform(t){return new Of(t.path,new ys)}isEqual(t){return t instanceof na}}function wu(n,t,e,r=!1){return ra(e,n.createContext(r?4:3,t))}function ra(n,t){if(Ru(n=$n(n)))return Su("Unsupported field value:",t,n),Au(n,t);if(n instanceof Zo)return function(r,s){if(!Iu(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=ra(u,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=$n(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Nf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=vt.fromDate(r);return{timestampValue:gi(s.serializer,o)}}if(r instanceof vt){const o=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gi(s.serializer,o)}}if(r instanceof Be)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof he)return{bytesValue:$l(s.serializer,r._byteString)};if(r instanceof jt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Fo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ee)return function(a,u){const h=a instanceof Ee?a.toArray():a;return{mapValue:{fields:{[pl]:{stringValue:_l},[hi]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw u.createError("VectorValues must only contain numeric values.");return Mo(u.serializer,m)})}}}}}}(r,s);if(Ql(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${vi(r)}`)}(n,t)}function Au(n,t){const e={};return ul(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Gn(n,(r,s)=>{const o=ra(s,t.childContextForField(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ru(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof Be||n instanceof he||n instanceof jt||n instanceof Zo||n instanceof Ee||Ql(n))}function Su(n,t,e){if(!Ru(e)||!cl(e)){const r=vi(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function xi(n,t,e){if((t=$n(t))instanceof Tu)return t._internalPath;if(typeof t=="string")return np(n,t);throw Ei("Field path arguments must be of type string or ",n,!1,void 0,e)}const ep=new RegExp("[~\\*/\\[\\]]");function np(n,t,e){if(t.search(ep)>=0)throw Ei(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Tu(...t.split("."))._internalPath}catch{throw Ei(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Ei(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new x(C.INVALID_ARGUMENT,u+n+h)}function rp(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class sp{convertValue(t,e="none"){switch(An(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Pt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(wn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw H(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Gn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[hi].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>Pt(a.doubleValue));return new Ee(e)}convertGeoPoint(t){return new Be(Pt(t.latitude),Pt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Ai(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(ms(t));default:return null}}convertTimestamp(t){const e=In(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);ot(Kl(r),9688,{name:t});const s=new gs(r.get(1),r.get(3)),o=new $(r.popFirst(5));return s.isEqual(e)||Xe(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class ip extends sp{constructor(t){super(),this.firestore=t}convertBytes(t){return new he(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new jt(this.firestore,null,e)}}function op(){return new na("serverTimestamp")}const Nc="@firebase/firestore",xc="4.12.0";/**
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
 */class sa{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new ap(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(xi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class ap extends sa{data(){return super.data()}}/**
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
 */function cp(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new x(C.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ia{}class Mi extends ia{}function lp(n,t,...e){let r=[];t instanceof ia&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof aa).length,u=o.filter(h=>h instanceof oa).length;if(a>1||a>0&&u>0)throw new x(C.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class oa extends Mi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new oa(t,e,r)}_apply(t){const e=this._parse(t);return bu(t._query,e),new Ze(t.firestore,t.converter,go(t._query,e))}_parse(t){const e=ea(t.firestore);return function(o,a,u,h,d,m,T){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new x(C.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Oc(T,m);const M=[];for(const F of T)M.push(Mc(h,o,F));A={arrayValue:{values:M}}}else A=Mc(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Oc(T,m),A=wu(u,a,T,m==="in"||m==="not-in");return Nt.create(d,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class aa extends ia{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new aa(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ve.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)bu(a,h),a=go(a,h)}(t._query,e),new Ze(t.firestore,t.converter,go(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ca extends Mi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ca(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(C.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new _s(o,a)}(t._query,this._field,this._direction);return new Ze(t.firestore,t.converter,Af(t._query,e))}}function up(n,t="asc"){const e=t,r=xi("orderBy",n);return ca._create(r,e)}class la extends Mi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new la(t,e,r)}_apply(t){return new Ze(t.firestore,t.converter,fi(t._query,this._limit,this._limitType))}}function hp(n){return Kd("limit",n),la._create("limit",n,"F")}class ua extends Mi{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new ua(t,e,r)}_apply(t){const e=fp(t,this.type,this._docOrFields,this._inclusive);return new Ze(t.firestore,t.converter,Rf(t._query,e))}}function dp(...n){return ua._create("startAfter",n,!1)}function fp(n,t,e,r){if(e[0]=$n(e[0]),e[0]instanceof sa)return function(o,a,u,h,d){if(!h)throw new x(C.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const m=[];for(const T of Tr(o))if(T.field.isKeyField())m.push(di(a,h.key));else{const A=h.data.field(T.field);if(wi(A))throw new x(C.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const P=T.field.canonicalString();throw new x(C.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}m.push(A)}return new Pr(m,d)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=ea(n.firestore);return function(a,u,h,d,m,T){const A=a.explicitOrderBy;if(m.length>A.length)throw new x(C.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let M=0;M<m.length;M++){const F=m[M];if(A[M].field.isKeyField()){if(typeof F!="string")throw new x(C.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof F}`);if(!xo(a)&&F.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${F}' contains a slash.`);const O=a.path.child(ft.fromString(F));if(!$.isDocumentKey(O))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${O}' is not because it contains an odd number of segments.`);const Y=new $(O);P.push(di(u,Y))}else{const O=wu(h,d,F);P.push(O)}}return new Pr(P,T)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Mc(n,t,e){if(typeof(e=$n(e))=="string"){if(e==="")throw new x(C.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xo(t)&&e.indexOf("/")!==-1)throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ft.fromString(e));if(!$.isDocumentKey(r))throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return di(n,new $(r))}if(e instanceof jt)return di(n,e._key);throw new x(C.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vi(e)}.`)}function Oc(n,t){if(!Array.isArray(n)||n.length===0)throw new x(C.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function bu(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(C.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function mp(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class Js{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ar extends sa{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new si(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(xi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Ar._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:xt("string",Ar._jsonSchemaVersion),bundleSource:xt("string","DocumentSnapshot"),bundleName:xt("string"),bundle:xt("string")};class si extends Ar{data(t={}){return super.data(t)}}class Rr{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Js(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new si(this._firestore,this._userDataWriter,r.key,r,new Js(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new si(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Js(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new si(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Js(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:gp(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new x(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Rr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Po.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function gp(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */Rr._jsonSchemaVersion="firestore/querySnapshot/1.0",Rr._jsonSchema={type:xt("string",Rr._jsonSchemaVersion),bundleSource:xt("string","QuerySnapshot"),bundleName:xt("string"),bundle:xt("string")};function pp(n){n=ci(n,Ze);const t=ci(n.firestore,Jo),e=vu(t),r=new ip(t);return cp(n._query),zg(e,n._query).then(s=>new Rr(t,r,n,s))}function _p(n,t){const e=ci(n.firestore,Jo),r=Kg(n),s=mp(n.converter,t),o=ea(n.firestore);return yp(e,[tp(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Qe.exists(!1))]).then(()=>r)}function yp(n,t){const e=vu(n);return jg(e,t)}(function(t,e=!0){Od(Id),ai(new us("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Jo(new Ud(r.getProvider("auth-internal")),new $d(a,r.getProvider("app-check-internal")),af(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),vr(Nc,xc,t),vr(Nc,xc,"esm2020")})();const Ep={apiKey:"AIzaSyAaqDVxolZFagNkLHIWMIe0CsEeM0oQh78",authDomain:"kylehe-notes.firebaseapp.com",projectId:"kylehe-notes",storageBucket:"kylehe-notes.firebasestorage.app",messagingSenderId:"751334076604",appId:"1:751334076604:web:5627979301ef4cec0320b9"},vp=wd().length?Yc():Qc(Ep),Cu=Qg(vp),Pu="notes";function Tp(n){const t=n.data();return{id:n.id,createdAt:t.createdAtDisplay||"",text:t.text||"",textSizeLines:t.textSizeLines||1,stickers:t.stickers||[],deckRotation:t.deckRotation||0,deckOffsetX:t.deckOffsetX||0,deckOffsetY:t.deckOffsetY||0,backgroundUrl:t.backgroundUrl||""}}async function Lc(n=8,t=null){const e=[Eu(Cu,Pu),up("createdAt","desc"),hp(n)];t&&e.push(dp(t));const r=await pp(lp(...e)),s=r.docs[r.docs.length-1]||null;return{notes:r.docs.map(Tp),lastDoc:s,hasMore:r.docs.length===n}}async function Ip(n){return(await _p(Eu(Cu,Pu),{createdAt:op(),createdAtDisplay:n.createdAt,text:n.text,textSizeLines:n.textSizeLines,stickers:n.stickers.map(e=>({src:e.src,x:e.x,y:e.y,width:e.width,height:e.height,rotation:e.rotation})),deckRotation:n.deckRotation,deckOffsetX:n.deckOffsetX,deckOffsetY:n.deckOffsetY,backgroundUrl:n.backgroundUrl})).id}var wp=Vt('<div role="presentation"></div>'),Ap=Vt('<div role="presentation"></div>'),Rp=Vt('<!> <!> <div class="sticker-rotate-line svelte-qzecc2"></div> <div class="sticker-rotate-handle svelte-qzecc2" role="presentation"></div>',1),Sp=Vt('<div role="presentation"><img alt="sticker" class="sticker-img svelte-qzecc2" draggable="false" aria-hidden="true"> <!></div>'),bp=Vt('<textarea class="note-text font-serif svelte-qzecc2" rows="1" placeholder="leave a note"></textarea>'),Cp=Vt('publishing<span class="publishing-dots svelte-qzecc2"></span>',1),Pp=Vt('<p class="publish-error font-serif svelte-qzecc2">something went wrong – try again?</p>'),Vp=Vt('<div class="fade-in svelte-qzecc2"><section class="note-layout svelte-qzecc2"><div role="presentation" class="svelte-qzecc2"><!></div> <div class="controls svelte-qzecc2"><!> <div class="actions svelte-qzecc2"><button type="button" class="action-button action-button-clear svelte-qzecc2">clear</button> <button type="button" class="action-button action-button-delete svelte-qzecc2">delete</button> <button type="button" class="action-button action-button-publish svelte-qzecc2"><!></button> <!></div></div></section> <hr class="separator svelte-qzecc2"></div>'),Dp=Vt('<p class="font-serif text-sm text-neutral-400 svelte-qzecc2">loading notes...</p>'),kp=Vt('<p class="font-serif text-sm text-neutral-500 svelte-qzecc2">no notes yet – make one!</p>'),Np=Vt('<div class="deck-sticker svelte-qzecc2"><img alt="sticker" class="deck-sticker-img svelte-qzecc2" draggable="false"></div>'),xp=Vt("<p> </p>"),Mp=Vt('<article class="deck-card svelte-qzecc2"><!></article>'),Op=Vt('<div class="load-more-row svelte-qzecc2"><button class="load-more font-serif svelte-qzecc2"> </button></div>'),Lp=Vt('<div class="deck-grid svelte-qzecc2"></div> <!>',1),Fp=Vt('<img alt="" class="palette-drag-ghost svelte-qzecc2" draggable="false">'),Up=Vt('<!> <main class="mt-8 space-y-10 svelte-qzecc2"><section class="mt-4 svelte-qzecc2"><div class="header-row svelte-qzecc2"><div class="svelte-qzecc2"><h2 class="font-serif text-2xl font-semibold text-left svelte-qzecc2">Leave a note!</h2> <p class="font-serif text-base text-left mt-2 svelte-qzecc2">Build your own polaroid card, leave a note, and publish it to my website :)</p></div> <button aria-label="Start a new polaroid"><img alt="Polaroid camera" class="header-camera svelte-qzecc2"> <span class="header-camera-hint font-serif svelte-qzecc2">(hint: click the camera)</span></button></div> <hr class="separator svelte-qzecc2"></section> <div><!> <section class="deck svelte-qzecc2"><!></section></div></main> <!>',1);function t_(n,t){Uc(t,!1);const e=At(),r=At(),s=[`${Jt}/images/stickers/banana.png`,`${Jt}/images/stickers/cactus.png`,`${Jt}/images/stickers/cactus2.png`,`${Jt}/images/stickers/cat_doodle.png`,`${Jt}/images/stickers/coquette.png`,`${Jt}/images/stickers/dog.png`,`${Jt}/images/stickers/drunk_dog.png`,`${Jt}/images/stickers/happy_dog.png`,`${Jt}/images/stickers/happy_heart.png`,`${Jt}/images/stickers/mushroom.png`,`${Jt}/images/stickers/musical_note.png`,`${Jt}/images/stickers/snowman.png`,`${Jt}/images/stickers/sunglasses.png`];function o(R){const D=[...R];for(let k=D.length-1;k>0;k--){const B=Math.floor(Math.random()*(k+1));[D[k],D[B]]=[D[B],D[k]]}return D}function a(){return o(s).slice(0,9)}let u=At(a()),h=At(null),d=null,m=1,T=At(!0),A=At(!1),P=At(!1),M=null;const F=8,O=new Date().toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),Y=80;function z(R,D,k){return Math.min(k,Math.max(D,R))}function W(R,D,k){const B=k*Math.PI/180,q=Math.cos(B),j=Math.sin(B);return{x:R*q-D*j,y:R*j+D*q}}function pt(R,D,k){switch(R){case"br":return[-D,-k];case"bl":return[D,-k];case"tr":return[-D,k];case"tl":return[D,k];case"r":return[-D,0];case"l":return[D,0];case"b":return[0,-k];case"t":return[0,k];default:return[0,0]}}function _t(R){const D=R.width<0?R.x+R.width:R.x,k=R.height<0?R.y+R.height:R.y;return`left:${D}%;top:${k}%;width:${Math.abs(R.width)}%;height:${Math.abs(R.height)}%;transform:rotate(${R.rotation||0}deg)`}function ct(R){const D=R.width<0?-1:1,k=R.height<0?-1:1;return D===1&&k===1?"":`transform:scale(${D},${k})`}function I(){return`https://picsum.photos/id/${Math.floor(Math.random()*1084)}/600/600`}function g(){return{id:0,createdAt:O,text:"",textSizeLines:1,stickers:[],deckRotation:0,deckOffsetX:0,deckOffsetY:0,backgroundUrl:I()}}let _=At(!1),w=At(null),E=null,y=At(g()),p=v(y).text,Mt=v(y).textSizeLines,ne=At([]),St=At(null),tn=At(null),bt=At(),Te=At(),en=!1,$e=null,Lr=0,Fr=0,bn=0,Xn=0,de=At(!1),Ie=null,nn=null,Ur=0,Ss=0,bs=0,Br=0,Jn=0,qr=0,Cn,Zn=0,we=At(!1),ze=null,Ot=0,Bt=0,rn=0,$r=0,tr=0,G=At(null),Ae=At(0),sn,Re=At(!1);const zr={t:90,b:90,l:0,r:0,tl:45,br:45,tr:135,bl:135},on=new Map;function Oi(R,D=16,k=16){const B=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">${R}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(B)}") ${D} ${k}, pointer`}function jr(R,D){const k=Math.round(((zr[R]||0)+(D||0))%360+360)%360,B=`r${k}`;if(!on.has(B)){const q="M8,16 L24,16 M8,16 L12,12 M8,16 L12,20 M24,16 L20,12 M24,16 L20,20",j=`<g transform="rotate(${k} 16 16)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="${q}" stroke="white" stroke-width="4"/><path d="${q}" stroke="#222" stroke-width="1.5"/></g>`;on.set(B,Oi(j))}return on.get(B)}const Hr="M22.4789 9.45728L25.9935 12.9942L22.4789 16.5283V14.1032C18.126 14.1502 14.6071 17.6737 14.5675 22.0283H17.05L13.513 25.543L9.97889 22.0283H12.5674C12.6071 16.5691 17.0214 12.1503 22.4789 12.1031L22.4789 9.45728Z";function Se(R){const D=Math.round(((R||0)%360+360)%360),k=`rot${D}`;if(!on.has(k)){const B=-D*Math.PI/180,q=Math.sin(B),j=Math.cos(B),nt=(j-q).toFixed(2),It=(q+j).toFixed(2),yt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><filter id="shadow" y="-40%" x="-40%" width="180%" height="180%" color-interpolation-filters="sRGB"><feDropShadow dx="${nt}" dy="${It}" stdDeviation="1.2" flood-opacity=".5"/></filter></defs><g transform="rotate(${D} 16 16)" filter="url(#shadow)"><path d="${Hr}" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="${Hr}" fill="#222"/></g></svg>`;on.set(k,`url("data:image/svg+xml,${encodeURIComponent(yt)}") 16 16, pointer`)}return on.get(k)}function an(R){document.body.style.setProperty("--sticker-cursor",R),document.body.classList.contains("cursor-lock")||document.body.classList.add("cursor-lock")}function Gr(){document.body.classList.remove("cursor-lock"),document.body.style.removeProperty("--sticker-cursor")}function je(R,D,k){if(!v(bt))return;const B=v(bt).getBoundingClientRect();if(D&&k){const q=D/B.width*100,j=k/B.height*100,nt={id:m++,src:R,x:50-q/2,y:50-j/2,width:q,height:j,rotation:0};L(y,{...v(y),stickers:[...v(y).stickers,nt]}),L(St,nt.id)}else{const q=new Image;q.onload=()=>{const j=v(bt).getBoundingClientRect(),nt=24,It=q.naturalWidth/q.naturalHeight,yt=nt*It*(j.height/j.width),lt={id:m++,src:R,x:50-yt/2,y:50-nt/2,width:yt,height:nt,rotation:0};L(y,{...v(y),stickers:[...v(y).stickers,lt]}),L(St,lt.id)},q.src=R}}function Cs(R){ln();const{src:D,clientX:k,clientY:B,imgWidth:q,imgHeight:j,offsetX:nt,offsetY:It}=R.detail,yt=new Image;yt.src=D;const lt=yt.complete?yt.naturalWidth:100,rt=yt.complete?yt.naturalHeight:100;L(G,{src:D,x:k,y:B,startX:k,startY:B,naturalWidth:lt,naturalHeight:rt,imgWidth:q,imgHeight:j,offsetX:nt,offsetY:It})}function fe(R){return v(y).stickers.findIndex(D=>D.id===R)}function er(R,D){const k=v(y).stickers.slice();k[R]={...k[R],...D},L(y,{...v(y),stickers:k})}function be(R){L(Re,R.pointerType!=="mouse")}function Ps(R,D){if(R.stopPropagation(),be(R),!v(bt))return;const k=fe(D);k!==-1&&(L(St,D),L(de,!1),Ie=null,L(we,!1),ze=null,en=!0,$e=D,Lr=R.clientX,Fr=R.clientY,bn=v(y).stickers[k].x,Xn=v(y).stickers[k].y,v(Re)||an("grabbing"))}function Ht(R){be(R),L(St,null)}function Wr(R){if(v(G)){L(G,{...v(G),x:R.clientX,y:R.clientY});return}if(v(bt)){if(v(we)&&ze!=null){const D=fe(ze);if(D===-1)return;const k=R.clientX-rn,B=R.clientY-$r,q=Math.atan2(B,k)*180/Math.PI;let j=Bt+(q-Ot);R.shiftKey&&(j=Math.round(j/15)*15),er(D,{rotation:j}),v(Re)||an(Se(j+tr));return}if(en&&$e!=null){const D=v(bt).getBoundingClientRect(),k=(R.clientX-Lr)/D.width*100,B=(R.clientY-Fr)/D.height*100,q=fe($e);if(q===-1)return;const j=v(y).stickers[q];er(q,{x:z(bn+k,-.5*j.width,100-.5*j.width),y:z(Xn+B,-.5*j.height,100-.5*j.height)});return}if(v(de)&&Ie!=null&&nn&&Cn){const D=fe(Ie);if(D===-1)return;const k=Cn.width,B=Cn.height,q=Zn,j=W(R.clientX-Jn,R.clientY-qr,-q),nt=bs/100*k,It=Br/100*B,yt=Ur/100*k,lt=Ss/100*B,rt=Y/100*k,wt=Y/100*B,ge=Math.sign(nt)||1,pe=Math.sign(It)||1;let ae=nt,Ct=It;const mt=nn;(mt==="br"||mt==="tr"||mt==="r")&&(ae=z(nt+j.x*ge,-rt,rt)),(mt==="bl"||mt==="tl"||mt==="l")&&(ae=z(nt-j.x*ge,-rt,rt)),(mt==="br"||mt==="bl"||mt==="b")&&(Ct=z(It+j.y*pe,-wt,wt)),(mt==="tl"||mt==="tr"||mt==="t")&&(Ct=z(It-j.y*pe,-wt,wt));const Tt=yt+nt/2,Lt=lt+It/2,[at,le]=pt(mt,Math.abs(nt)/2,Math.abs(It)/2),Pe=W(at,le,q),[gt,re]=pt(mt,Math.abs(ae)/2,Math.abs(Ct)/2),_e=(Math.sign(nt)||1)!==(Math.sign(ae)||1),We=(Math.sign(It)||1)!==(Math.sign(Ct)||1),ur=mt!=="t"&&mt!=="b",Gt=mt!=="l"&&mt!=="r",st=W(ur&&_e?-gt:gt,Gt&&We?-re:re,q),hr=Tt+Pe.x-st.x,dr=Lt+Pe.y-st.y;er(D,{x:(hr-ae/2)/k*100,y:(dr-Ct/2)/B*100,width:ae/k*100,height:Ct/B*100})}}}function cn(R){var D;if(v(G)){if(!(Math.hypot(v(G).x-v(G).startX,v(G).y-v(G).startY)>5))je(v(G).src,v(G).imgWidth,v(G).imgHeight);else{const B=(D=v(bt))==null?void 0:D.getBoundingClientRect();if(B&&v(G).x>=B.left&&v(G).x<=B.right&&v(G).y>=B.top&&v(G).y<=B.bottom){const q=v(G).imgWidth/B.width*100,j=v(G).imgHeight/B.height*100,nt=v(G).imgWidth>0?v(G).offsetX/v(G).imgWidth:.5,It=v(G).imgHeight>0?v(G).offsetY/v(G).imgHeight:.5,yt=(v(G).x-B.left)/B.width*100-q*nt,lt=(v(G).y-B.top)/B.height*100-j*It,rt={id:m++,src:v(G).src,x:z(yt,-.5*q,100-.5*q),y:z(lt,-.5*j,100-.5*j),width:q,height:j,rotation:0};L(y,{...v(y),stickers:[...v(y).stickers,rt]}),L(St,rt.id)}}L(G,null)}!en&&!v(de)&&!v(we)||ln()}function Pn(R,D,k){if(R.stopPropagation(),R.preventDefault(),be(R),!v(bt))return;const B=fe(D);if(B===-1)return;L(St,D),en=!1,$e=null;const q=v(y).stickers[B];Cn=v(bt).getBoundingClientRect(),Ur=q.x,Ss=q.y,bs=q.width,Br=q.height,Jn=R.clientX,qr=R.clientY,Zn=q.rotation||0,nn=k,L(de,!0),Ie=D,v(Re)||an(jr(k,q.rotation||0))}function Vs(R,D,k=0){if(R.stopPropagation(),R.preventDefault(),be(R),!v(bt))return;const B=fe(D);if(B===-1)return;L(St,D),en=!1,L(de,!1);const q=v(y).stickers[B],j=v(bt).getBoundingClientRect();rn=j.left+(q.x+q.width/2)/100*j.width,$r=j.top+(q.y+q.height/2)/100*j.height;const nt=R.clientX-rn,It=R.clientY-$r;Ot=Math.atan2(It,nt)*180/Math.PI,Bt=q.rotation||0,tr=k,L(we,!0),ze=D,v(Re)||an(Se((q.rotation||0)+k))}function ln(){en=!1,$e=null,L(de,!1),Ie=null,nn=null,Cn=void 0,L(we,!1),ze=null,tr=0,Gr()}function He(R){($e===R||Ie===R||ze===R)&&ln(),L(y,{...v(y),stickers:v(y).stickers.filter(D=>D.id!==R)}),v(St)===R&&L(St,null)}function Li(){v(St)!=null&&He(v(St))}function Fi(){v(y).stickers.length!==0&&(ln(),L(y,{...v(y),stickers:[]}),L(St,null),L(tn,null))}function Vn(R){v(St)!=null&&(R.key==="Backspace"||R.key==="Delete")&&(R.preventDefault(),He(v(St)))}const Ds={1:2,2:1.5,3:1},nr=3;function Dn(R,D){const k=Ds[D]||1;R.style.fontSize=`${4.4*k}cqi`}function un(R){const D=getComputedStyle(R),k=parseFloat(D.lineHeight||"0");return k?Math.max(1,Math.round(R.scrollHeight/k)):1}function ks(R){for(const D of[1,2,3]){Dn(R,D),R.style.height="auto";const k=un(R);if(k<=D)return{targetLines:D,visualLines:k}}return Dn(R,nr),R.style.height="auto",{targetLines:nr,visualLines:un(R)}}function me(R){if(!R)return;const D=R.value;L(y,{...v(y),text:D});let k=ks(R);k.visualLines>nr?(L(y,{...v(y),text:p,textSizeLines:Mt}),R.value=p,k=ks(R)):(p=D,Mt=k.targetLines,L(y,{...v(y),textSizeLines:k.targetLines})),Dn(R,k.targetLines),R.style.height="auto",R.style.height=`${R.scrollHeight}px`}function Ns(R){me(R.target)}function xs(){ln(),L(y,g()),p=v(y).text,Mt=v(y).textSizeLines,L(St,null),L(tn,null),L(_,!1),requestAnimationFrame(()=>{L(_,!0)})}async function Kr(){if(!(v(A)||!v(P))){L(A,!0);try{const R=await Lc(F,M);L(ne,[...v(ne),...R.notes]),M=R.lastDoc,L(P,R.hasMore)}catch(R){console.error("Failed to load more notes:",R)}finally{L(A,!1)}}}let kn=At(!1);async function Ms(R){try{return(await fetch(R,{redirect:"follow"})).url||R}catch{return R}}let Nn=At(!1);async function Os(){if(!v(r)||v(w)||v(Nn))return;ln(),L(kn,!1),L(Nn,!0);const R={...v(y),id:"",createdAt:O,stickers:v(y).stickers.map(D=>({...D})),deckRotation:Math.random()*8-4,deckOffsetX:Math.random()*16-8,deckOffsetY:0};try{R.backgroundUrl=await Ms(R.backgroundUrl);const D=await Ip(R);R.id=D,E=R,L(w,"out")}catch(D){console.error("Failed to publish note:",D),L(kn,!0)}finally{L(Nn,!1)}}function Ui(R){R.target===R.currentTarget&&(v(w)==="out"?(E&&(L(ne,[E,...v(ne)]),E=null),L(y,g()),p=v(y).text,Mt=v(y).textSizeLines,L(St,null),L(_,!1),L(w,"in")):v(w)==="in"&&L(w,null))}const rr=["tl","tr","bl","br","l","r","t","b"],Ls=["tl","tr","bl","br"],sr={tl:0,tr:90,bl:270,br:180};function xn(){v(h)||(d=a(),L(h,"out"))}function Ge(){v(h)==="out"?(L(u,d||a()),d=null,L(h,"in")):v(h)==="in"&&L(h,null)}zu(({from:R,to:D})=>{R!=null&&R.url&&(D!=null&&D.url)&&R.url.pathname===D.url.pathname&&(L(_,!1),L(w,null),E=null)}),Lu(async()=>{if(!(typeof window>"u")){window.addEventListener("pointermove",Wr),window.addEventListener("pointerup",cn),window.addEventListener("keydown",Vn),L(Re,window.matchMedia("(pointer: coarse)").matches),v(bt)&&(L(Ae,v(bt).clientHeight),sn=new ResizeObserver(()=>{L(Ae,v(bt).clientHeight)}),sn.observe(v(bt)));try{const R=await Lc(F);L(ne,R.notes),M=R.lastDoc,L(P,R.hasMore)}catch(R){console.error("Failed to load notes:",R)}finally{L(T,!1)}}}),Fu(()=>{typeof window>"u"||(window.removeEventListener("pointermove",Wr),window.removeEventListener("pointerup",cn),window.removeEventListener("keydown",Vn),sn==null||sn.disconnect())}),Hi(()=>v(Ae),()=>{L(e,v(Ae)*.24)}),Hi(()=>v(y),()=>{L(r,v(y).text.trim().length>0||v(y).stickers.length>0)}),Hi(()=>(v(_),v(Te)),()=>{v(_)&&v(Te)&&typeof window<"u"&&me(v(Te))}),Uu(),Fc();var ir=Up(),Fs=mr(ir);$u(Fs,{meta:{title:"Kyle He - Notes",description:"notes"}});var or=kt(Fs,2),ar=ut(or),Qr=ut(ar),hn=kt(ut(Qr),2);let cr;var Us=ut(hn);mn(Us,"src",`${Jt??""}/images/polaroid_camera.png`),Gs(2),it(hn),it(Qr),Gs(2),it(ar);var Mn=kt(ar,2);let Yr;var Bs=ut(Mn);{var Ce=R=>{var D=Vp(),k=ut(D),B=ut(k),q=ut(B);ba(q,{get date(){return v(y).createdAt},get backgroundUrl(){return v(y).backgroundUrl},shadow:!0,get innerEl(){return v(bt)},set innerEl(Tt){L(bt,Tt)},$$slots:{canvas:(Tt,Lt)=>{var at=ji(),le=mr(at);gr(le,1,()=>v(y).stickers,ns,(Pe,gt)=>{var re=Sp(),_e=ut(re),We=kt(_e,2);{var ur=Gt=>{var st=Rp(),hr=mr(st);gr(hr,1,()=>Ls,ns,(Ve,De)=>{var se=wp();Zt(Yt=>{Le(se,1,`sticker-rotate-corner sticker-rotate-corner-${v(De)??""}`,"svelte-qzecc2"),xe(se,`cursor: ${Yt??""}`)},[()=>Se((v(gt).rotation||0)+sr[v(De)])],Me),$t("pointerdown",se,Yt=>Vs(Yt,v(gt).id,sr[v(De)])),Et(Ve,se)});var dr=kt(hr,2);gr(dr,1,()=>rr,ns,(Ve,De)=>{var se=Ap();Zt(Yt=>{Le(se,1,`sticker-handle sticker-handle-${v(De)??""}`,"svelte-qzecc2"),xe(se,`cursor: ${Yt??""}`)},[()=>jr(v(De),v(gt).rotation)],Me),$t("pointerdown",se,Yt=>Pn(Yt,v(gt).id,v(De))),Et(Ve,se)});var Jr=kt(dr,4);Zt(Ve=>xe(Jr,`cursor: ${Ve??""}`),[()=>Se((v(gt).rotation||0)+45)],Me),$t("pointerdown",Jr,Ve=>Vs(Ve,v(gt).id,45)),Et(Gt,st)};Ne(We,Gt=>{v(gt).id===v(St)&&Gt(ur)})}it(re),Zt((Gt,st)=>{Le(re,1,`sticker-wrapper ${(v(gt).id===v(St)?"selected":v(gt).id===v(tn)?"hovered":"")??""} ${(v(gt).id===v(St)&&(v(de)||v(we))?"interacting":"")??""} ${(v(Re)?"coarse":"")??""}`,"svelte-qzecc2"),xe(re,Gt),mn(_e,"src",v(gt).src),xe(_e,st)},[()=>_t(v(gt)),()=>ct(v(gt))],Me),$t("pointerdown",re,Gt=>Ps(Gt,v(gt).id)),$t("pointerenter",re,Gt=>{Gt.pointerType==="mouse"&&L(tn,v(gt).id)}),$t("pointerleave",re,Gt=>{Gt.pointerType==="mouse"&&v(tn)===v(gt).id&&L(tn,null)}),Et(Pe,re)}),Et(Tt,at)},footer:(Tt,Lt)=>{var at=bp();ju(at),qc(at,le=>L(Te,le),()=>v(Te)),Zt(()=>Bu(at,v(y).text)),$t("input",at,Ns),Et(Tt,at)}},$$legacy:!0}),it(B);var j=kt(B,2),nt=ut(j);const It=Me(()=>v(G)&&Math.hypot(v(G).x-v(G).startX,v(G).y-v(G).startY)>5?v(G).src:null);Yu(nt,{get stickers(){return v(u)},get maxHeight(){return v(e)},get draggingSrc(){return v(It)},get phase(){return v(h)},$$events:{dragstart:Cs,reload:xn,animationend:Ge}});var yt=kt(nt,2),lt=ut(yt),rt=kt(lt,2),wt=kt(rt,2),ge=ut(wt);{var pe=Tt=>{var Lt=Cp();Gs(),Et(Tt,Lt)},ae=Tt=>{var Lt=ku("publish");Et(Tt,Lt)};Ne(ge,Tt=>{v(Nn)?Tt(pe):Tt(ae,!1)})}it(wt);var Ct=kt(wt,2);{var mt=Tt=>{var Lt=Pp();Et(Tt,Lt)};Ne(Ct,Tt=>{v(kn)&&Tt(mt)})}it(yt),it(j),it(k),Gs(2),it(D),Zt(()=>{lt.disabled=v(y).stickers.length===0,rt.disabled=v(St)==null,wt.disabled=!v(r)||v(Nn)}),$t("pointerdown",B,Ht),$t("click",lt,Fi),$t("click",rt,Li),$t("click",wt,Os),Et(R,D)};Ne(Bs,R=>{v(_)&&R(Ce)})}var oe=kt(Bs,2),On=ut(oe);{var Ln=R=>{var D=Dp();Et(R,D)},Xr=(R,D)=>{{var k=q=>{var j=kp();Et(q,j)},B=q=>{var j=Lp(),nt=mr(j);gr(nt,5,()=>v(ne),lt=>lt.id,(lt,rt)=>{var wt=Mp(),ge=ut(wt);ba(ge,{get date(){return v(rt).createdAt},get backgroundUrl(){return v(rt).backgroundUrl},mini:!0,$$slots:{canvas:(pe,ae)=>{var Ct=ji(),mt=mr(Ct);gr(mt,1,()=>v(rt).stickers,ns,(Tt,Lt)=>{var at=Np(),le=ut(at);it(at),Zt((Pe,gt)=>{xe(at,Pe),mn(le,"src",v(Lt).src),xe(le,gt)},[()=>_t(v(Lt)),()=>ct(v(Lt))],Me),Et(Tt,at)}),Et(pe,Ct)},footer:(pe,ae)=>{var Ct=ji(),mt=mr(Ct);{var Tt=Lt=>{var at=xp(),le=ut(at,!0);it(at),Zt(()=>{Le(at,1,`deck-text deck-text-${v(rt).textSizeLines||3}l`,"svelte-qzecc2"),no(le,v(rt).text)}),Et(Lt,at)};Ne(mt,Lt=>{v(rt).text.trim().length&&Lt(Tt)})}Et(pe,Ct)}}}),it(wt),Zt(()=>xe(wt,`--dx:${v(rt).deckOffsetX}px;--dy:${v(rt).deckOffsetY}px;--rot:${v(rt).deckRotation}deg;`)),Et(lt,wt)}),it(nt);var It=kt(nt,2);{var yt=lt=>{var rt=Op(),wt=ut(rt),ge=ut(wt,!0);it(wt),it(rt),Zt(()=>{wt.disabled=v(A),no(ge,v(A)?"loading...":"load more")}),$t("click",wt,Kr),Et(lt,rt)};Ne(It,lt=>{v(P)&&lt(yt)})}Et(q,j)};Ne(R,q=>{v(ne).length===0?q(k):q(B,!1)},D)}};Ne(On,R=>{v(T)?R(Ln):R(Xr,!1)})}it(oe),it(Mn),it(or);var ht=kt(or,2);{var lr=R=>{var D=Fp();Zt(()=>{mn(D,"src",v(G).src),xe(D,`left: ${v(G).x-v(G).offsetX}px; top: ${v(G).y-v(G).offsetY}px; width: ${v(G).imgWidth??""}px; height: ${v(G).imgHeight??""}px;`)}),Et(R,D)};Ne(ht,R=>{v(G)&&Math.hypot(v(G).x-v(G).startX,v(G).y-v(G).startY)>5&&R(lr)})}Zt((R,D)=>{cr=Le(hn,1,"header-camera-group svelte-qzecc2",null,cr,R),Yr=Le(Mn,1,"publish-content svelte-qzecc2",null,Yr,D)},[()=>({active:v(_)}),()=>({"publish-out":v(w)==="out","publish-in":v(w)==="in"})],Me),$t("click",hn,xs),$t("animationend",Mn,Ui),Et(n,ir),Bc()}export{t_ as component};
