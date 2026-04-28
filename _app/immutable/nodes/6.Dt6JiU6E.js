var qu=Object.defineProperty;var $u=(n,t,e)=>t in n?qu(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var he=(n,t,e)=>$u(n,typeof t!="symbol"?t+"":t,e);import{t as Pt,a as _t,f as Ji,c as ju}from"../chunks/C6zT8n4T.js";import{i as xo}from"../chunks/B2eK8yfC.js";import{j as lo,k as zu,O as Hu,L as Gu,p as ko,X as si,Z as k,J as gt,ax as ka,Y as Wl,c as lt,g as v,s as Dt,r as ot,t as te,m as Fe,a as No,aK as Ku,aL as Ql,ah as Wu,f as gr,n as Ys}from"../chunks/QZo_flVt.js";import{s as co}from"../chunks/A7XwNNtU.js";import{i as Ie}from"../chunks/CwLF0HRe.js";import{e as _r,i as as}from"../chunks/CKMoo3YY.js";import{s as yn,a as Qu}from"../chunks/DSMYfwqr.js";import{t as Yu,s as Na,a as Ae}from"../chunks/CCGA2w1I.js";import{e as zt}from"../chunks/BaprkmMV.js";import{b as Yl}from"../chunks/B5elikI5.js";import{M as Xu}from"../chunks/C1B7qaQg.js";import{p as Qe}from"../chunks/ChjhM4qK.js";import{b as Zt,c as Ju}from"../chunks/InEpq9v2.js";function Zu(n){lo&&zu(n)!==null&&Hu(n)}function Le(n,t,e,r){var s=n.__style;if(lo||s!==t){var o=Yu(t);(!lo||o!==n.getAttribute("style"))&&(o==null?n.removeAttribute("style"):n.style.cssText=o),n.__style=t}return r}function th(n,t){var o;var e=(o=n.$$events)==null?void 0:o[t.type],r=Gu(e)?e.slice():e==null?[]:[e];for(var s of r)s.call(this,t)}var eh=Pt('<div class="polaroid-bg-cover absolute inset-0 z-0 h-full w-full bg-[#f2f0ec]" aria-hidden="true"></div>'),nh=Pt('<img class="polaroid-bg absolute inset-0 z-0 h-full w-full object-cover svelte-mj16yj" alt="" aria-hidden="true">'),rh=Pt(`<div><div><!> <!> <div class="polaroid-canvas pointer-events-none absolute inset-0 z-[1] svelte-mj16yj"><!></div></div> <span class="polaroid-date absolute bottom-[24.19%] right-[12.43%] z-[4] text-[4.4cqi] tracking-[0.08em] text-[#F6F4C5] [font-family:'HelveticaCondensed',system-ui,sans-serif] svelte-mj16yj"> </span> <div class="polaroid-footer absolute bottom-[1%] left-[7.31%] right-[7.31%] top-[78.72%] z-[6] flex flex-col justify-center gap-0"><!></div> <img alt="" class="polaroid-overlay pointer-events-none absolute inset-0 z-[3] h-full w-full object-contain" aria-hidden="true"></div>`);function Ma(n,t){ko(t,!1);let e=Qe(t,"date",8,""),r=Qe(t,"backgroundUrl",8,""),s=Qe(t,"innerEl",12,void 0),o=Qe(t,"mini",8,!1),a=Qe(t,"shadow",8,!1),u=gt(""),h=gt(!0),d=0,m=gt(0);function T(){return`https://picsum.photos/seed/${Math.floor(Math.random()*1e7)}/600/600.jpg`}function A(y){if(!y){k(h,!1),k(u,"");return}d+=1;const g=d;k(h,!0),k(u,"");const Tt=new Image;Tt.onload=()=>{g===d&&(k(u,y),k(h,!1))},Tt.onerror=()=>{g===d&&(v(m)<5?(k(m,v(m)+1),A(T())):k(h,!1))},Tt.src=y}si(()=>(ka(r()),ka(o())),()=>{r()!==void 0&&(k(m,0),o()?(k(u,r()),k(h,!1)):A(r()))}),Wl(),xo();var C=rh();let O;var L=lt(C);let M;var Q=lt(L);{var G=y=>{var g=eh();_t(y,g)};Ie(Q,y=>{!o()&&v(h)&&y(G)})}var tt=Dt(Q,2);{var Et=y=>{var g=nh();te(()=>yn(g,"src",v(u))),_t(y,g)};Ie(tt,y=>{v(u)&&y(Et)})}var yt=Dt(tt,2),et=lt(yt);Na(et,t,"canvas",{}),ot(yt),ot(L),Yl(L,y=>s(y),()=>s());var w=Dt(L,2),p=lt(w,!0);ot(w);var _=Dt(w,2),I=lt(_);Na(I,t,"footer",{}),ot(_);var E=Dt(_,2);yn(E,"src",`${Zt??""}/images/polaroid.png`),ot(C),te((y,g)=>{O=Ae(C,1,"polaroid-frame relative w-full aspect-[657/794] border-0 bg-transparent p-0 shadow-none [container-type:inline-size] svelte-mj16yj",null,O,y),M=Ae(L,1,"polaroid-inner absolute bottom-[21.28%] left-[7.31%] right-[7.31%] top-[6.05%] z-0 overflow-hidden rounded-[0.6cqi] border-0 bg-[#e8e4db] [touch-action:none] svelte-mj16yj",null,M,g),co(p,e())},[()=>({mini:o(),shadow:a()}),()=>({loading:!o()&&v(h)})],Fe),_t(n,C),No()}var sh={success:{pattern:[{duration:30,intensity:.5},{delay:60,duration:40,intensity:1}]},warning:{pattern:[{duration:40,intensity:.8},{delay:100,duration:40,intensity:.6}]},error:{pattern:[{duration:40,intensity:.9},{delay:40,duration:40,intensity:.9},{delay:40,duration:40,intensity:.9}]},light:{pattern:[{duration:15,intensity:.4}]},medium:{pattern:[{duration:25,intensity:.7}]},heavy:{pattern:[{duration:35,intensity:1}]},soft:{pattern:[{duration:40,intensity:.5}]},rigid:{pattern:[{duration:10,intensity:1}]},selection:{pattern:[{duration:8,intensity:.3}]},nudge:{pattern:[{duration:80,intensity:.8},{delay:80,duration:50,intensity:.3}]},buzz:{pattern:[{duration:1e3,intensity:1}]}},ih=16,oh=184,Oa=1e3,Xs=20;function ah(n){if(typeof n=="number")return{vibrations:[{duration:n}]};if(typeof n=="string"){let t=sh[n];return t?{vibrations:t.pattern.map(e=>({...e}))}:(console.warn(`[web-haptics] Unknown preset: "${n}"`),null)}if(Array.isArray(n)){if(n.length===0)return{vibrations:[]};if(typeof n[0]=="number"){let t=n,e=[];for(let r=0;r<t.length;r+=2){let s=r>0?t[r-1]:0;e.push({...s>0&&{delay:s},duration:t[r]})}return{vibrations:e}}return{vibrations:n.map(t=>({...t}))}}return{vibrations:n.pattern.map(t=>({...t}))}}function lh(n,t){if(t>=1)return[n];if(t<=0)return[];let e=Math.max(1,Math.round(Xs*t)),r=Xs-e,s=[],o=n;for(;o>=Xs;)s.push(e),s.push(r),o-=Xs;if(o>0){let a=Math.max(1,Math.round(o*t));s.push(a);let u=o-a;u>0&&s.push(u)}return s}function ch(n,t){let e=[];for(let r=0;r<n.length;r++){let s=n[r],o=Math.max(0,Math.min(1,s.intensity??t)),a=s.delay??0;a>0&&(e.length>0&&e.length%2===0?e[e.length-1]+=a:(e.length===0&&e.push(0),e.push(a)));let u=lh(s.duration,o);if(u.length===0){e.length>0&&e.length%2===0?e[e.length-1]+=s.duration:s.duration>0&&(e.push(0),e.push(s.duration));continue}for(let h of u)e.push(h)}return e}var uh=0,Ye,La=(Ye=class{constructor(t){he(this,"hapticLabel",null);he(this,"domInitialized",!1);he(this,"instanceId");he(this,"debug");he(this,"showSwitch");he(this,"rafId",null);he(this,"patternResolve",null);he(this,"audioCtx",null);he(this,"audioFilter",null);he(this,"audioGain",null);he(this,"audioBuffer",null);this.instanceId=++uh,this.debug=(t==null?void 0:t.debug)??!1,this.showSwitch=(t==null?void 0:t.showSwitch)??!1}async trigger(t=[{duration:25,intensity:.7}],e){var a;let r=ah(t);if(!r)return;let{vibrations:s}=r;if(s.length===0)return;let o=Math.max(0,Math.min(1,(e==null?void 0:e.intensity)??.5));for(let u of s)if(u.duration>Oa&&(u.duration=Oa),!Number.isFinite(u.duration)||u.duration<0||u.delay!==void 0&&(!Number.isFinite(u.delay)||u.delay<0)){console.warn("[web-haptics] Invalid vibration values. Durations and delays must be finite non-negative numbers.");return}if(Ye.isSupported&&navigator.vibrate(ch(s,o)),!Ye.isSupported||this.debug){if(this.ensureDOM(),!this.hapticLabel)return;this.debug&&await this.ensureAudio(),this.stopPattern();let u=(((a=s[0])==null?void 0:a.delay)??0)===0;if(u&&(this.hapticLabel.click(),this.debug&&this.audioCtx)){let h=Math.max(0,Math.min(1,s[0].intensity??o));this.playClick(h)}await this.runPattern(s,o,u)}}cancel(){this.stopPattern(),Ye.isSupported&&navigator.vibrate(0)}destroy(){this.stopPattern(),this.hapticLabel&&(this.hapticLabel.remove(),this.hapticLabel=null,this.domInitialized=!1),this.audioCtx&&(this.audioCtx.close(),this.audioCtx=null,this.audioFilter=null,this.audioGain=null,this.audioBuffer=null)}setDebug(t){this.debug=t,!t&&this.audioCtx&&(this.audioCtx.close(),this.audioCtx=null,this.audioFilter=null,this.audioGain=null,this.audioBuffer=null)}setShowSwitch(t){if(this.showSwitch=t,this.hapticLabel){let e=this.hapticLabel.querySelector("input");this.hapticLabel.style.display=t?"":"none",e&&(e.style.display=t?"":"none")}}stopPattern(){var t;this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),(t=this.patternResolve)==null||t.call(this),this.patternResolve=null}runPattern(t,e,r){return new Promise(s=>{this.patternResolve=s;let o=[],a=0;for(let T of t){let A=Math.max(0,Math.min(1,T.intensity??e)),C=T.delay??0;C>0&&(a+=C,o.push({end:a,isOn:!1,intensity:0})),a+=T.duration,o.push({end:a,isOn:!0,intensity:A})}let u=a,h=0,d=-1,m=T=>{var O,L;h===0&&(h=T);let A=T-h;if(A>=u){this.rafId=null,this.patternResolve=null,s();return}let C=o[0];for(let M of o)if(A<M.end){C=M;break}if(C.isOn){let M=ih+(1-C.intensity)*oh;d===-1?(d=T,r||((O=this.hapticLabel)==null||O.click(),this.debug&&this.audioCtx&&this.playClick(C.intensity),r=!0)):T-d>=M&&((L=this.hapticLabel)==null||L.click(),this.debug&&this.audioCtx&&this.playClick(C.intensity),d=T)}this.rafId=requestAnimationFrame(m)};this.rafId=requestAnimationFrame(m)})}playClick(t){if(!this.audioCtx||!this.audioFilter||!this.audioGain||!this.audioBuffer)return;let e=this.audioBuffer.getChannelData(0);for(let a=0;a<e.length;a++)e[a]=(Math.random()*2-1)*Math.exp(-a/25);this.audioGain.gain.value=.5*t;let r=2e3+t*2e3,s=1+(Math.random()-.5)*.3;this.audioFilter.frequency.value=r*s;let o=this.audioCtx.createBufferSource();o.buffer=this.audioBuffer,o.connect(this.audioFilter),o.onended=()=>o.disconnect(),o.start()}async ensureAudio(){var t;if(!this.audioCtx&&typeof AudioContext<"u"){this.audioCtx=new AudioContext,this.audioFilter=this.audioCtx.createBiquadFilter(),this.audioFilter.type="bandpass",this.audioFilter.frequency.value=4e3,this.audioFilter.Q.value=8,this.audioGain=this.audioCtx.createGain(),this.audioFilter.connect(this.audioGain),this.audioGain.connect(this.audioCtx.destination);let e=.004;this.audioBuffer=this.audioCtx.createBuffer(1,this.audioCtx.sampleRate*e,this.audioCtx.sampleRate);let r=this.audioBuffer.getChannelData(0);for(let s=0;s<r.length;s++)r[s]=(Math.random()*2-1)*Math.exp(-s/25)}((t=this.audioCtx)==null?void 0:t.state)==="suspended"&&await this.audioCtx.resume()}ensureDOM(){if(this.domInitialized||typeof document>"u")return;let t=`web-haptics-${this.instanceId}`,e=document.createElement("label");e.setAttribute("for",t),e.textContent="Haptic feedback",e.style.position="fixed",e.style.bottom="10px",e.style.left="10px",e.style.padding="5px 10px",e.style.backgroundColor="rgba(0, 0, 0, 0.7)",e.style.color="white",e.style.fontFamily="sans-serif",e.style.fontSize="14px",e.style.borderRadius="4px",e.style.zIndex="9999",e.style.userSelect="none",this.hapticLabel=e;let r=document.createElement("input");r.type="checkbox",r.setAttribute("switch",""),r.id=t,r.style.all="initial",r.style.appearance="auto",this.showSwitch||(e.style.display="none",r.style.display="none"),e.appendChild(r),document.body.appendChild(e),this.domInitialized=!0}},he(Ye,"isSupported",typeof navigator<"u"&&typeof navigator.vibrate=="function"),Ye);function Xl(n){let t=new La(n),e=(u,h)=>t.trigger(u,h),r=()=>t.cancel(),s=()=>t.destroy(),o=u=>t.setDebug(u),a=La.isSupported;return{trigger:e,cancel:r,destroy:s,setDebug:o,isSupported:a}}var hh=Pt('<button type="button" class="palette-button flex w-full items-center justify-center border-0 bg-transparent p-0 [touch-action:none] enabled:cursor-pointer svelte-102r2hn"><img alt="sticker option" loading="lazy" draggable="false"></button>'),dh=Pt(`<aside class="palette flex flex-col gap-3"><p class="palette-title mb-[0.4rem] flex w-full items-center justify-between gap-[0.35rem] text-[1.8rem] text-black [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui]"><span class="palette-title-text flex-1 text-left">add stickers!</span> <button type="button" title="Reload"><span class="reload-tilt inline-block [transform-origin:50%_50%] transition-transform duration-150 ease-in-out svelte-102r2hn"><span class="reload-spin inline-block [transform-origin:50%_50%] svelte-102r2hn"><img alt="Reload" class="reload-icon block h-5 w-5"></span></span></button></p> <div></div></aside>`);function fh(n,t){ko(t,!1);let e=Qe(t,"stickers",24,()=>[]),r=Qe(t,"draggingSrc",8,null),s=Qe(t,"maxHeight",8,0),o=Qe(t,"phase",8,null);const a=Ku(),{trigger:u,destroy:h,isSupported:d}=Xl();let m=gt(!1);function T(et,w){et.preventDefault();const _=et.currentTarget.querySelector("img").getBoundingClientRect();a("dragstart",{src:w,clientX:et.clientX,clientY:et.clientY,imgWidth:_.width,imgHeight:_.height,offsetX:et.clientX-_.left,offsetY:et.clientY-_.top}),d&&typeof window<"u"&&u("selection").catch(()=>{})}function A(){k(m,!1),requestAnimationFrame(()=>{k(m,!0)})}Ql(()=>{h()}),xo();var C=dh(),O=lt(C),L=Dt(lt(O),2);let M;var Q=lt(L),G=lt(Q),tt=lt(G);yn(tt,"src",`${Zt??""}/images/reload.png`),ot(G),ot(Q),ot(L),ot(O);var Et=Dt(O,2);let yt;_r(Et,5,e,as,(et,w)=>{var p=hh(),_=lt(p);let I;ot(p),te(E=>{yn(_,"src",v(w)),I=Ae(_,1,"palette-image block h-auto w-full max-w-full transition-[filter,transform] duration-[130ms] svelte-102r2hn",null,I,E),Le(_,s()?`max-height: ${s()}px; height: auto;`:"")},[()=>({dragging:r()===v(w)})],Fe),zt("pointerdown",p,E=>T(E,v(w))),_t(et,p)}),ot(Et),ot(C),te((et,w)=>{M=Ae(L,1,"reload-button inline-flex items-center justify-center rounded border-0 bg-transparent p-[0.2rem] [-webkit-tap-highlight-color:transparent] enabled:cursor-pointer svelte-102r2hn",null,M,et),yt=Ae(Et,1,"palette-grid grid grid-cols-[repeat(auto-fit,minmax(56px,1fr))] items-center gap-2 svelte-102r2hn",null,yt,w)},[()=>({spinning:v(m)}),()=>({"palette-out":o()==="out","palette-in":o()==="in"})],Fe),zt("click",L,()=>{A(),a("reload"),d&&typeof window<"u"&&u("light").catch(()=>{})}),zt("animationend",L,()=>k(m,!1)),zt("animationend",Et,function(et){th.call(this,t,et)}),_t(n,C),No()}const mh=()=>{};var Fa={};/**
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
 */const Jl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},ph=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},Zl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,m=o>>2,T=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,C=d&63;h||(C=64,a||(A=64)),r.push(e[m],e[T],e[A],e[C])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Jl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):ph(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const T=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||T==null)throw new gh;const A=o<<2|u>>4;if(r.push(A),d!==64){const C=u<<4&240|d>>2;if(r.push(C),T!==64){const O=d<<6&192|T;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class gh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _h=function(n){const t=Jl(n);return Zl.encodeByteArray(t,!0)},hi=function(n){return _h(n).replace(/\./g,"")},yh=function(n){try{return Zl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function vh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Eh=()=>vh().__FIREBASE_DEFAULTS__,Th=()=>{if(typeof process>"u"||typeof Fa>"u")return;const n=Fa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},wh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&yh(n[1]);return t&&JSON.parse(t)},Mo=()=>{try{return mh()||Eh()||Th()||wh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ih=n=>{var t,e;return(e=(t=Mo())==null?void 0:t.emulatorHosts)==null?void 0:e[n]},Ah=n=>{const t=Ih(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},tc=()=>{var n;return(n=Mo())==null?void 0:n.config};/**
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
 */class bh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
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
 */function Oo(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Sh(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...n};return[hi(JSON.stringify(e)),hi(JSON.stringify(a)),""].join(".")}const hs={};function Ch(){const n={prod:[],emulator:[]};for(const t of Object.keys(hs))hs[t]?n.emulator.push(t):n.prod.push(t);return n}function Ph(n){let t=document.getElementById(n),e=!1;return t||(t=document.createElement("div"),t.setAttribute("id",n),e=!0),{created:e,element:t}}let Ua=!1;function Vh(n,t){if(typeof window>"u"||typeof document>"u"||!Oo(window.location.host)||hs[n]===t||hs[n]||Ua)return;hs[n]=t;function e(A){return`__firebase__banner__${A}`}const r="__firebase__banner",o=Ch().prod.length>0;function a(){const A=document.getElementById(r);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,C){A.setAttribute("width","24"),A.setAttribute("id",C),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Ua=!0,a()},A}function m(A,C){A.setAttribute("id",C),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function T(){const A=Ph(r),C=e("text"),O=document.getElementById(C)||document.createElement("span"),L=e("learnmore"),M=document.getElementById(L)||document.createElement("a"),Q=e("preprendIcon"),G=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const tt=A.element;u(tt),m(M,L);const Et=d();h(G,Q),tt.append(G,O,M,Et),document.body.appendChild(tt)}o?(O.innerText="Preview backend disconnected.",G.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function Dh(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xh(){var t;const n=(t=Mo())==null?void 0:t.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function kh(){return!xh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Nh(){try{return typeof indexedDB=="object"}catch{return!1}}function Mh(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)==null?void 0:o.message)||"")}}catch(e){t(e)}})}/**
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
 */const Oh="FirebaseError";class Nr extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Oh,Object.setPrototypeOf(this,Nr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ec.prototype.create)}}class ec{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Lh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Nr(s,u,r)}}function Lh(n,t){return n.replace(Fh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Fh=/\{\$([^}]+)}/g;function di(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(Ba(o)&&Ba(a)){if(!di(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ba(n){return n!==null&&typeof n=="object"}/**
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
 */function Gn(n){return n&&n._delegate?n._delegate:n}class ps{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const zn="[DEFAULT]";/**
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
 */class Uh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new bh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){const e=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(e)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:e})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(qh(t))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zn){return this.instances.has(t)}getOptions(t=zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){const r=this.normalizeInstanceIdentifier(e),s=this.onInitCallbacks.get(r)??new Set;s.add(t),this.onInitCallbacks.set(r,s);const o=this.instances.get(r);return o&&t(o,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zn){return this.component?this.component.multipleInstances?t:zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bh(n){return n===zn?void 0:n}function qh(n){return n.instantiationMode==="EAGER"}/**
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
 */class $h{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Uh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var rt;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(rt||(rt={}));const jh={debug:rt.DEBUG,verbose:rt.VERBOSE,info:rt.INFO,warn:rt.WARN,error:rt.ERROR,silent:rt.SILENT},zh=rt.INFO,Hh={[rt.DEBUG]:"log",[rt.VERBOSE]:"log",[rt.INFO]:"info",[rt.WARN]:"warn",[rt.ERROR]:"error"},Gh=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Hh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class nc{constructor(t){this.name=t,this._logLevel=zh,this._logHandler=Gh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in rt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?jh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,rt.DEBUG,...t),this._logHandler(this,rt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,rt.VERBOSE,...t),this._logHandler(this,rt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,rt.INFO,...t),this._logHandler(this,rt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,rt.WARN,...t),this._logHandler(this,rt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,rt.ERROR,...t),this._logHandler(this,rt.ERROR,...t)}}const Kh=(n,t)=>t.some(e=>n instanceof e);let qa,$a;function Wh(){return qa||(qa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Qh(){return $a||($a=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rc=new WeakMap,uo=new WeakMap,sc=new WeakMap,Zi=new WeakMap,Lo=new WeakMap;function Yh(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(En(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&rc.set(e,n)}).catch(()=>{}),Lo.set(t,n),t}function Xh(n){if(uo.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});uo.set(n,t)}let ho={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return uo.get(n);if(t==="objectStoreNames")return n.objectStoreNames||sc.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return En(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Jh(n){ho=n(ho)}function Zh(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(to(this),t,...e);return sc.set(r,t.sort?t.sort():[t]),En(r)}:Qh().includes(n)?function(...t){return n.apply(to(this),t),En(rc.get(this))}:function(...t){return En(n.apply(to(this),t))}}function td(n){return typeof n=="function"?Zh(n):(n instanceof IDBTransaction&&Xh(n),Kh(n,Wh())?new Proxy(n,ho):n)}function En(n){if(n instanceof IDBRequest)return Yh(n);if(Zi.has(n))return Zi.get(n);const t=td(n);return t!==n&&(Zi.set(n,t),Lo.set(t,n)),t}const to=n=>Lo.get(n);function ed(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=En(a);return r&&a.addEventListener("upgradeneeded",h=>{r(En(a.result),h.oldVersion,h.newVersion,En(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const nd=["get","getKey","getAll","getAllKeys","count"],rd=["put","add","delete","clear"],eo=new Map;function ja(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(eo.get(t))return eo.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=rd.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||nd.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return eo.set(t,o),o}Jh(n=>({...n,get:(t,e,r)=>ja(t,e)||n.get(t,e,r),has:(t,e)=>!!ja(t,e)||n.has(t,e)}));/**
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
 */class sd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(id(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function id(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const fo="@firebase/app",za="0.14.9";/**
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
 */const Je=new nc("@firebase/app"),od="@firebase/app-compat",ad="@firebase/analytics-compat",ld="@firebase/analytics",cd="@firebase/app-check-compat",ud="@firebase/app-check",hd="@firebase/auth",dd="@firebase/auth-compat",fd="@firebase/database",md="@firebase/data-connect",pd="@firebase/database-compat",gd="@firebase/functions",_d="@firebase/functions-compat",yd="@firebase/installations",vd="@firebase/installations-compat",Ed="@firebase/messaging",Td="@firebase/messaging-compat",wd="@firebase/performance",Id="@firebase/performance-compat",Ad="@firebase/remote-config",bd="@firebase/remote-config-compat",Rd="@firebase/storage",Sd="@firebase/storage-compat",Cd="@firebase/firestore",Pd="@firebase/ai",Vd="@firebase/firestore-compat",Dd="firebase",xd="12.10.0";/**
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
 */const mo="[DEFAULT]",kd={[fo]:"fire-core",[od]:"fire-core-compat",[ld]:"fire-analytics",[ad]:"fire-analytics-compat",[ud]:"fire-app-check",[cd]:"fire-app-check-compat",[hd]:"fire-auth",[dd]:"fire-auth-compat",[fd]:"fire-rtdb",[md]:"fire-data-connect",[pd]:"fire-rtdb-compat",[gd]:"fire-fn",[_d]:"fire-fn-compat",[yd]:"fire-iid",[vd]:"fire-iid-compat",[Ed]:"fire-fcm",[Td]:"fire-fcm-compat",[wd]:"fire-perf",[Id]:"fire-perf-compat",[Ad]:"fire-rc",[bd]:"fire-rc-compat",[Rd]:"fire-gcs",[Sd]:"fire-gcs-compat",[Cd]:"fire-fst",[Vd]:"fire-fst-compat",[Pd]:"fire-vertex","fire-js":"fire-js",[Dd]:"fire-js-all"};/**
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
 */const gs=new Map,Nd=new Map,po=new Map;function Ha(n,t){try{n.container.addComponent(t)}catch(e){Je.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function fi(n){const t=n.name;if(po.has(t))return Je.debug(`There were multiple attempts to register component ${t}.`),!1;po.set(t,n);for(const e of gs.values())Ha(e,n);for(const e of Nd.values())Ha(e,n);return!0}function Md(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Od(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Tn=new ec("app","Firebase",Ld);/**
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
 */class Fd{constructor(t,e,r){this._isDeleted=!1,this._options={...t},this._config={...e},this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ps("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ud=xd;function ic(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r={name:mo,automaticDataCollectionEnabled:!0,...t},s=r.name;if(typeof s!="string"||!s)throw Tn.create("bad-app-name",{appName:String(s)});if(e||(e=tc()),!e)throw Tn.create("no-options");const o=gs.get(s);if(o){if(di(e,o.options)&&di(r,o.config))return o;throw Tn.create("duplicate-app",{appName:s})}const a=new $h(s);for(const h of po.values())a.addComponent(h);const u=new Fd(e,r,a);return gs.set(s,u),u}function oc(n=mo){const t=gs.get(n);if(!t&&n===mo&&tc())return ic();if(!t)throw Tn.create("no-app",{appName:n});return t}function Bd(){return Array.from(gs.values())}function wr(n,t,e){let r=kd[n]??n;e&&(r+=`-${e}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const a=[`Unable to register library "${r}" with version "${t}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Je.warn(a.join(" "));return}fi(new ps(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
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
 */const qd="firebase-heartbeat-database",$d=1,_s="firebase-heartbeat-store";let no=null;function ac(){return no||(no=ed(qd,$d,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(_s)}catch(e){console.warn(e)}}}}).catch(n=>{throw Tn.create("idb-open",{originalErrorMessage:n.message})})),no}async function jd(n){try{const e=(await ac()).transaction(_s),r=await e.objectStore(_s).get(lc(n));return await e.done,r}catch(t){if(t instanceof Nr)Je.warn(t.message);else{const e=Tn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Je.warn(e.message)}}}async function Ga(n,t){try{const r=(await ac()).transaction(_s,"readwrite");await r.objectStore(_s).put(t,lc(n)),await r.done}catch(e){if(e instanceof Nr)Je.warn(e.message);else{const r=Tn.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});Je.warn(r.message)}}}function lc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const zd=1024,Hd=30;class Gd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Wd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ka();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats.length>Hd){const a=Qd(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Je.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ka(),{heartbeatsToSend:r,unsentEntries:s}=Kd(this._heartbeatsCache.heartbeats),o=hi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return Je.warn(e),""}}}function Ka(){return new Date().toISOString().substring(0,10)}function Kd(n,t=zd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),Wa(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),Wa(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Wd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Nh()?Mh().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await jd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ga(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ga(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function Wa(n){return hi(JSON.stringify({version:2,heartbeats:n})).length}function Qd(n){if(n.length===0)return-1;let t=0,e=n[0].date;for(let r=1;r<n.length;r++)n[r].date<e&&(e=n[r].date,t=r);return t}/**
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
 */function Yd(n){fi(new ps("platform-logger",t=>new sd(t),"PRIVATE")),fi(new ps("heartbeat",t=>new Gd(t),"PRIVATE")),wr(fo,za,n),wr(fo,za,"esm2020"),wr("fire-js","")}Yd("");var Xd="firebase",Jd="12.10.0";/**
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
 */wr(Xd,Jd,"app");var Qa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wn,cc;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(w,p){function _(){}_.prototype=p.prototype,w.F=p.prototype,w.prototype=new _,w.prototype.constructor=w,w.D=function(I,E,y){for(var g=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)g[Tt-2]=arguments[Tt];return p.prototype[E].apply(I,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,e),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,p,_){_||(_=0);const I=Array(16);if(typeof p=="string")for(var E=0;E<16;++E)I[E]=p.charCodeAt(_++)|p.charCodeAt(_++)<<8|p.charCodeAt(_++)<<16|p.charCodeAt(_++)<<24;else for(E=0;E<16;++E)I[E]=p[_++]|p[_++]<<8|p[_++]<<16|p[_++]<<24;p=w.g[0],_=w.g[1],E=w.g[2];let y=w.g[3],g;g=p+(y^_&(E^y))+I[0]+3614090360&4294967295,p=_+(g<<7&4294967295|g>>>25),g=y+(E^p&(_^E))+I[1]+3905402710&4294967295,y=p+(g<<12&4294967295|g>>>20),g=E+(_^y&(p^_))+I[2]+606105819&4294967295,E=y+(g<<17&4294967295|g>>>15),g=_+(p^E&(y^p))+I[3]+3250441966&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(y^_&(E^y))+I[4]+4118548399&4294967295,p=_+(g<<7&4294967295|g>>>25),g=y+(E^p&(_^E))+I[5]+1200080426&4294967295,y=p+(g<<12&4294967295|g>>>20),g=E+(_^y&(p^_))+I[6]+2821735955&4294967295,E=y+(g<<17&4294967295|g>>>15),g=_+(p^E&(y^p))+I[7]+4249261313&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(y^_&(E^y))+I[8]+1770035416&4294967295,p=_+(g<<7&4294967295|g>>>25),g=y+(E^p&(_^E))+I[9]+2336552879&4294967295,y=p+(g<<12&4294967295|g>>>20),g=E+(_^y&(p^_))+I[10]+4294925233&4294967295,E=y+(g<<17&4294967295|g>>>15),g=_+(p^E&(y^p))+I[11]+2304563134&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(y^_&(E^y))+I[12]+1804603682&4294967295,p=_+(g<<7&4294967295|g>>>25),g=y+(E^p&(_^E))+I[13]+4254626195&4294967295,y=p+(g<<12&4294967295|g>>>20),g=E+(_^y&(p^_))+I[14]+2792965006&4294967295,E=y+(g<<17&4294967295|g>>>15),g=_+(p^E&(y^p))+I[15]+1236535329&4294967295,_=E+(g<<22&4294967295|g>>>10),g=p+(E^y&(_^E))+I[1]+4129170786&4294967295,p=_+(g<<5&4294967295|g>>>27),g=y+(_^E&(p^_))+I[6]+3225465664&4294967295,y=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(y^p))+I[11]+643717713&4294967295,E=y+(g<<14&4294967295|g>>>18),g=_+(y^p&(E^y))+I[0]+3921069994&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^y&(_^E))+I[5]+3593408605&4294967295,p=_+(g<<5&4294967295|g>>>27),g=y+(_^E&(p^_))+I[10]+38016083&4294967295,y=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(y^p))+I[15]+3634488961&4294967295,E=y+(g<<14&4294967295|g>>>18),g=_+(y^p&(E^y))+I[4]+3889429448&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^y&(_^E))+I[9]+568446438&4294967295,p=_+(g<<5&4294967295|g>>>27),g=y+(_^E&(p^_))+I[14]+3275163606&4294967295,y=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(y^p))+I[3]+4107603335&4294967295,E=y+(g<<14&4294967295|g>>>18),g=_+(y^p&(E^y))+I[8]+1163531501&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(E^y&(_^E))+I[13]+2850285829&4294967295,p=_+(g<<5&4294967295|g>>>27),g=y+(_^E&(p^_))+I[2]+4243563512&4294967295,y=p+(g<<9&4294967295|g>>>23),g=E+(p^_&(y^p))+I[7]+1735328473&4294967295,E=y+(g<<14&4294967295|g>>>18),g=_+(y^p&(E^y))+I[12]+2368359562&4294967295,_=E+(g<<20&4294967295|g>>>12),g=p+(_^E^y)+I[5]+4294588738&4294967295,p=_+(g<<4&4294967295|g>>>28),g=y+(p^_^E)+I[8]+2272392833&4294967295,y=p+(g<<11&4294967295|g>>>21),g=E+(y^p^_)+I[11]+1839030562&4294967295,E=y+(g<<16&4294967295|g>>>16),g=_+(E^y^p)+I[14]+4259657740&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^y)+I[1]+2763975236&4294967295,p=_+(g<<4&4294967295|g>>>28),g=y+(p^_^E)+I[4]+1272893353&4294967295,y=p+(g<<11&4294967295|g>>>21),g=E+(y^p^_)+I[7]+4139469664&4294967295,E=y+(g<<16&4294967295|g>>>16),g=_+(E^y^p)+I[10]+3200236656&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^y)+I[13]+681279174&4294967295,p=_+(g<<4&4294967295|g>>>28),g=y+(p^_^E)+I[0]+3936430074&4294967295,y=p+(g<<11&4294967295|g>>>21),g=E+(y^p^_)+I[3]+3572445317&4294967295,E=y+(g<<16&4294967295|g>>>16),g=_+(E^y^p)+I[6]+76029189&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(_^E^y)+I[9]+3654602809&4294967295,p=_+(g<<4&4294967295|g>>>28),g=y+(p^_^E)+I[12]+3873151461&4294967295,y=p+(g<<11&4294967295|g>>>21),g=E+(y^p^_)+I[15]+530742520&4294967295,E=y+(g<<16&4294967295|g>>>16),g=_+(E^y^p)+I[2]+3299628645&4294967295,_=E+(g<<23&4294967295|g>>>9),g=p+(E^(_|~y))+I[0]+4096336452&4294967295,p=_+(g<<6&4294967295|g>>>26),g=y+(_^(p|~E))+I[7]+1126891415&4294967295,y=p+(g<<10&4294967295|g>>>22),g=E+(p^(y|~_))+I[14]+2878612391&4294967295,E=y+(g<<15&4294967295|g>>>17),g=_+(y^(E|~p))+I[5]+4237533241&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~y))+I[12]+1700485571&4294967295,p=_+(g<<6&4294967295|g>>>26),g=y+(_^(p|~E))+I[3]+2399980690&4294967295,y=p+(g<<10&4294967295|g>>>22),g=E+(p^(y|~_))+I[10]+4293915773&4294967295,E=y+(g<<15&4294967295|g>>>17),g=_+(y^(E|~p))+I[1]+2240044497&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~y))+I[8]+1873313359&4294967295,p=_+(g<<6&4294967295|g>>>26),g=y+(_^(p|~E))+I[15]+4264355552&4294967295,y=p+(g<<10&4294967295|g>>>22),g=E+(p^(y|~_))+I[6]+2734768916&4294967295,E=y+(g<<15&4294967295|g>>>17),g=_+(y^(E|~p))+I[13]+1309151649&4294967295,_=E+(g<<21&4294967295|g>>>11),g=p+(E^(_|~y))+I[4]+4149444226&4294967295,p=_+(g<<6&4294967295|g>>>26),g=y+(_^(p|~E))+I[11]+3174756917&4294967295,y=p+(g<<10&4294967295|g>>>22),g=E+(p^(y|~_))+I[2]+718787259&4294967295,E=y+(g<<15&4294967295|g>>>17),g=_+(y^(E|~p))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+p&4294967295,w.g[1]=w.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,w.g[2]=w.g[2]+E&4294967295,w.g[3]=w.g[3]+y&4294967295}r.prototype.v=function(w,p){p===void 0&&(p=w.length);const _=p-this.blockSize,I=this.C;let E=this.h,y=0;for(;y<p;){if(E==0)for(;y<=_;)s(this,w,y),y+=this.blockSize;if(typeof w=="string"){for(;y<p;)if(I[E++]=w.charCodeAt(y++),E==this.blockSize){s(this,I),E=0;break}}else for(;y<p;)if(I[E++]=w[y++],E==this.blockSize){s(this,I),E=0;break}}this.h=E,this.o+=p},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var p=1;p<w.length-8;++p)w[p]=0;p=this.o*8;for(var _=w.length-8;_<w.length;++_)w[_]=p&255,p/=256;for(this.v(w),w=Array(16),p=0,_=0;_<4;++_)for(let I=0;I<32;I+=8)w[p++]=this.g[_]>>>I&255;return w};function o(w,p){var _=u;return Object.prototype.hasOwnProperty.call(_,w)?_[w]:_[w]=p(w)}function a(w,p){this.h=p;const _=[];let I=!0;for(let E=w.length-1;E>=0;E--){const y=w[E]|0;I&&y==p||(_[E]=y,I=!1)}this.g=_}var u={};function h(w){return-128<=w&&w<128?o(w,function(p){return new a([p|0],p<0?-1:0)}):new a([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return T;if(w<0)return M(d(-w));const p=[];let _=1;for(let I=0;w>=_;I++)p[I]=w/_|0,_*=4294967296;return new a(p,0)}function m(w,p){if(w.length==0)throw Error("number format error: empty string");if(p=p||10,p<2||36<p)throw Error("radix out of range: "+p);if(w.charAt(0)=="-")return M(m(w.substring(1),p));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(p,8));let I=T;for(let y=0;y<w.length;y+=8){var E=Math.min(8,w.length-y);const g=parseInt(w.substring(y,y+E),p);E<8?(E=d(Math.pow(p,E)),I=I.j(E).add(d(g))):(I=I.j(_),I=I.add(d(g)))}return I}var T=h(0),A=h(1),C=h(16777216);n=a.prototype,n.m=function(){if(L(this))return-M(this).m();let w=0,p=1;for(let _=0;_<this.g.length;_++){const I=this.i(_);w+=(I>=0?I:4294967296+I)*p,p*=4294967296}return w},n.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(O(this))return"0";if(L(this))return"-"+M(this).toString(w);const p=d(Math.pow(w,6));var _=this;let I="";for(;;){const E=Et(_,p).g;_=Q(_,E.j(p));let y=((_.g.length>0?_.g[0]:_.h)>>>0).toString(w);if(_=E,O(_))return y+I;for(;y.length<6;)y="0"+y;I=y+I}},n.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function O(w){if(w.h!=0)return!1;for(let p=0;p<w.g.length;p++)if(w.g[p]!=0)return!1;return!0}function L(w){return w.h==-1}n.l=function(w){return w=Q(this,w),L(w)?-1:O(w)?0:1};function M(w){const p=w.g.length,_=[];for(let I=0;I<p;I++)_[I]=~w.g[I];return new a(_,~w.h).add(A)}n.abs=function(){return L(this)?M(this):this},n.add=function(w){const p=Math.max(this.g.length,w.g.length),_=[];let I=0;for(let E=0;E<=p;E++){let y=I+(this.i(E)&65535)+(w.i(E)&65535),g=(y>>>16)+(this.i(E)>>>16)+(w.i(E)>>>16);I=g>>>16,y&=65535,g&=65535,_[E]=g<<16|y}return new a(_,_[_.length-1]&-2147483648?-1:0)};function Q(w,p){return w.add(M(p))}n.j=function(w){if(O(this)||O(w))return T;if(L(this))return L(w)?M(this).j(M(w)):M(M(this).j(w));if(L(w))return M(this.j(M(w)));if(this.l(C)<0&&w.l(C)<0)return d(this.m()*w.m());const p=this.g.length+w.g.length,_=[];for(var I=0;I<2*p;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(let E=0;E<w.g.length;E++){const y=this.i(I)>>>16,g=this.i(I)&65535,Tt=w.i(E)>>>16,re=w.i(E)&65535;_[2*I+2*E]+=g*re,G(_,2*I+2*E),_[2*I+2*E+1]+=y*re,G(_,2*I+2*E+1),_[2*I+2*E+1]+=g*Tt,G(_,2*I+2*E+1),_[2*I+2*E+2]+=y*Tt,G(_,2*I+2*E+2)}for(w=0;w<p;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=p;w<2*p;w++)_[w]=0;return new a(_,0)};function G(w,p){for(;(w[p]&65535)!=w[p];)w[p+1]+=w[p]>>>16,w[p]&=65535,p++}function tt(w,p){this.g=w,this.h=p}function Et(w,p){if(O(p))throw Error("division by zero");if(O(w))return new tt(T,T);if(L(w))return p=Et(M(w),p),new tt(M(p.g),M(p.h));if(L(p))return p=Et(w,M(p)),new tt(M(p.g),p.h);if(w.g.length>30){if(L(w)||L(p))throw Error("slowDivide_ only works with positive integers.");for(var _=A,I=p;I.l(w)<=0;)_=yt(_),I=yt(I);var E=et(_,1),y=et(I,1);for(I=et(I,2),_=et(_,2);!O(I);){var g=y.add(I);g.l(w)<=0&&(E=E.add(_),y=g),I=et(I,1),_=et(_,1)}return p=Q(w,E.j(p)),new tt(E,p)}for(E=T;w.l(p)>=0;){for(_=Math.max(1,Math.floor(w.m()/p.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=I<=48?1:Math.pow(2,I-48),y=d(_),g=y.j(p);L(g)||g.l(w)>0;)_-=I,y=d(_),g=y.j(p);O(y)&&(y=A),E=E.add(y),w=Q(w,g)}return new tt(E,w)}n.B=function(w){return Et(this,w).h},n.and=function(w){const p=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)&w.i(I);return new a(_,this.h&w.h)},n.or=function(w){const p=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)|w.i(I);return new a(_,this.h|w.h)},n.xor=function(w){const p=Math.max(this.g.length,w.g.length),_=[];for(let I=0;I<p;I++)_[I]=this.i(I)^w.i(I);return new a(_,this.h^w.h)};function yt(w){const p=w.g.length+1,_=[];for(let I=0;I<p;I++)_[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(_,w.h)}function et(w,p){const _=p>>5;p%=32;const I=w.g.length-_,E=[];for(let y=0;y<I;y++)E[y]=p>0?w.i(y+_)>>>p|w.i(y+_+1)<<32-p:w.i(y+_);return new a(E,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,cc=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=m,wn=a}).apply(typeof Qa<"u"?Qa:typeof self<"u"?self:typeof window<"u"?window:{});var Js=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uc,ls,hc,ii,go,dc,fc,mc;(function(){var n,t=Object.defineProperty;function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof Js=="object"&&Js];for(var l=0;l<i.length;++l){var c=i[l];if(c&&c.Math==Math)return c}throw Error("Cannot find global object")}var r=e(this);function s(i,l){if(l)t:{var c=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var b=i[f];if(!(b in c))break t;c=c[b]}i=i[i.length-1],f=c[i],l=l(f),l!=f&&l!=null&&t(c,i,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(l){var c=[],f;for(f in l)Object.prototype.hasOwnProperty.call(l,f)&&c.push([f,l[f]]);return c}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(i){var l=typeof i;return l=="object"&&i!=null||l=="function"}function h(i,l,c){return i.call.apply(i.bind,arguments)}function d(i,l,c){return d=h,d.apply(null,arguments)}function m(i,l){var c=Array.prototype.slice.call(arguments,1);return function(){var f=c.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function T(i,l){function c(){}c.prototype=l.prototype,i.Z=l.prototype,i.prototype=new c,i.prototype.constructor=i,i.Ob=function(f,b,S){for(var N=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)N[Y-2]=arguments[Y];return l.prototype[b].apply(f,N)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function C(i){const l=i.length;if(l>0){const c=Array(l);for(let f=0;f<l;f++)c[f]=i[f];return c}return[]}function O(i,l){for(let f=1;f<arguments.length;f++){const b=arguments[f];var c=typeof b;if(c=c!="object"?c:b?Array.isArray(b)?"array":c:"null",c=="array"||c=="object"&&typeof b.length=="number"){c=i.length||0;const S=b.length||0;i.length=c+S;for(let N=0;N<S;N++)i[c+N]=b[N]}else i.push(b)}}class L{constructor(l,c){this.i=l,this.j=c,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function M(i){a.setTimeout(()=>{throw i},0)}function Q(){var i=w;let l=null;return i.g&&(l=i.g,i.g=i.g.next,i.g||(i.h=null),l.next=null),l}class G{constructor(){this.h=this.g=null}add(l,c){const f=tt.get();f.set(l,c),this.h?this.h.next=f:this.g=f,this.h=f}}var tt=new L(()=>new Et,i=>i.reset());class Et{constructor(){this.next=this.g=this.h=null}set(l,c){this.h=l,this.g=c,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,et=!1,w=new G,p=()=>{const i=Promise.resolve(void 0);yt=()=>{i.then(_)}};function _(){for(var i;i=Q();){try{i.h.call(i.g)}catch(c){M(c)}var l=tt;l.j(i),l.h<100&&(l.h++,i.next=l.g,l.g=i)}et=!1}function I(){this.u=this.u,this.C=this.C}I.prototype.u=!1,I.prototype.dispose=function(){this.u||(this.u=!0,this.N())},I.prototype[Symbol.dispose]=function(){this.dispose()},I.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(i,l){this.type=i,this.g=this.target=l,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,l=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const c=()=>{};a.addEventListener("test",c,l),a.removeEventListener("test",c,l)}catch{}return i}();function g(i){return/^[\s\xa0]*$/.test(i)}function Tt(i,l){E.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,l)}T(Tt,E),Tt.prototype.init=function(i,l){const c=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=l,l=i.relatedTarget,l||(c=="mouseover"?l=i.fromElement:c=="mouseout"&&(l=i.toElement)),this.relatedTarget=l,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Tt.Z.h.call(this)},Tt.prototype.h=function(){Tt.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var re="closure_listenable_"+(Math.random()*1e6|0),At=0;function nn(i,l,c,f,b){this.listener=i,this.proxy=null,this.src=l,this.type=c,this.capture=!!f,this.ha=b,this.key=++At,this.da=this.fa=!1}function bt(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Ce(i,l,c){for(const f in i)l.call(c,i[f],f,i)}function rn(i,l){for(const c in i)l.call(void 0,i[c],c,i)}function ze(i){const l={};for(const c in i)l[c]=i[c];return l}const Ur="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Br(i,l){let c,f;for(let b=1;b<arguments.length;b++){f=arguments[b];for(c in f)i[c]=f[c];for(let S=0;S<Ur.length;S++)c=Ur[S],Object.prototype.hasOwnProperty.call(f,c)&&(i[c]=f[c])}}function Dn(i){this.src=i,this.g={},this.h=0}Dn.prototype.add=function(i,l,c,f,b){const S=i.toString();i=this.g[S],i||(i=this.g[S]=[],this.h++);const N=ge(i,l,f,b);return N>-1?(l=i[N],c||(l.fa=!1)):(l=new nn(l,this.src,S,!!f,b),l.fa=c,i.push(l)),l};function er(i,l){const c=l.type;if(c in i.g){var f=i.g[c],b=Array.prototype.indexOf.call(f,l,void 0),S;(S=b>=0)&&Array.prototype.splice.call(f,b,1),S&&(bt(l),i.g[c].length==0&&(delete i.g[c],i.h--))}}function ge(i,l,c,f){for(let b=0;b<i.length;++b){const S=i[b];if(!S.da&&S.listener==l&&S.capture==!!c&&S.ha==f)return b}return-1}var Pe="closure_lm_"+(Math.random()*1e6|0),sn={};function qr(i,l,c,f,b){if(Array.isArray(l)){for(let S=0;S<l.length;S++)qr(i,l[S],c,f,b);return null}return c=sr(c),i&&i[re]?i.J(l,c,u(f)?!!f.capture:!1,b):Ds(i,l,c,!1,f,b)}function Ds(i,l,c,f,b,S){if(!l)throw Error("Invalid event type");const N=u(b)?!!b.capture:!!b;let Y=rr(i);if(Y||(i[Pe]=Y=new Dn(i)),c=Y.add(l,c,f,N,S),c.proxy)return c;if(f=xs(),c.proxy=f,f.src=i,f.listener=c,i.addEventListener)y||(b=N),b===void 0&&(b=!1),i.addEventListener(l.toString(),f,b);else if(i.attachEvent)i.attachEvent(jr(l.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return c}function xs(){function i(c){return l.call(i.src,i.listener,c)}const l=He;return i}function $r(i,l,c,f,b){if(Array.isArray(l))for(var S=0;S<l.length;S++)$r(i,l[S],c,f,b);else f=u(f)?!!f.capture:!!f,c=sr(c),i&&i[re]?(i=i.i,S=String(l).toString(),S in i.g&&(l=i.g[S],c=ge(l,c,f,b),c>-1&&(bt(l[c]),Array.prototype.splice.call(l,c,1),l.length==0&&(delete i.g[S],i.h--)))):i&&(i=rr(i))&&(l=i.g[l.toString()],i=-1,l&&(i=ge(l,c,f,b)),(c=i>-1?l[i]:null)&&nr(c))}function nr(i){if(typeof i!="number"&&i&&!i.da){var l=i.src;if(l&&l[re])er(l.i,i);else{var c=i.type,f=i.proxy;l.removeEventListener?l.removeEventListener(c,f,i.capture):l.detachEvent?l.detachEvent(jr(c),f):l.addListener&&l.removeListener&&l.removeListener(f),(c=rr(l))?(er(c,i),c.h==0&&(c.src=null,l[Pe]=null)):bt(i)}}}function jr(i){return i in sn?sn[i]:sn[i]="on"+i}function He(i,l){if(i.da)i=!0;else{l=new Tt(l,this);const c=i.listener,f=i.ha||i.src;i.fa&&nr(i),i=c.call(f,l)}return i}function rr(i){return i=i[Pe],i instanceof Dn?i:null}var xn="__closure_events_fn_"+(Math.random()*1e9>>>0);function sr(i){return typeof i=="function"?i:(i[xn]||(i[xn]=function(l){return i.handleEvent(l)}),i[xn])}function kt(){I.call(this),this.i=new Dn(this),this.M=this,this.G=null}T(kt,I),kt.prototype[re]=!0,kt.prototype.removeEventListener=function(i,l,c,f){$r(this,i,l,c,f)};function Ut(i,l){var c,f=i.G;if(f)for(c=[];f;f=f.G)c.push(f);if(i=i.M,f=l.type||l,typeof l=="string")l=new E(l,i);else if(l instanceof E)l.target=l.target||i;else{var b=l;l=new E(f,i),Br(l,b)}b=!0;let S,N;if(c)for(N=c.length-1;N>=0;N--)S=l.g=c[N],b=_e(S,f,!0,l)&&b;if(S=l.g=i,b=_e(S,f,!0,l)&&b,b=_e(S,f,!1,l)&&b,c)for(N=0;N<c.length;N++)S=l.g=c[N],b=_e(S,f,!1,l)&&b}kt.prototype.N=function(){if(kt.Z.N.call(this),this.i){var i=this.i;for(const l in i.g){const c=i.g[l];for(let f=0;f<c.length;f++)bt(c[f]);delete i.g[l],i.h--}}this.G=null},kt.prototype.J=function(i,l,c,f){return this.i.add(String(i),l,!1,c,f)},kt.prototype.K=function(i,l,c,f){return this.i.add(String(i),l,!0,c,f)};function _e(i,l,c,f){if(l=i.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let S=0;S<l.length;++S){const N=l[S];if(N&&!N.da&&N.capture==c){const Y=N.listener,Bt=N.ha||N.src;N.fa&&er(i.i,N),b=Y.call(Bt,f)!==!1&&b}}return b&&!f.defaultPrevented}function on(i,l){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(i,l||0)}function zr(i){i.g=on(()=>{i.g=null,i.i&&(i.i=!1,zr(i))},i.l);const l=i.h;i.h=null,i.m.apply(null,l)}class ks extends I{constructor(l,c){super(),this.m=l,this.l=c,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(i){I.call(this),this.h=i,this.g={}}T(Ge,I);var ir=[];function or(i){Ce(i.g,function(l,c){this.g.hasOwnProperty(c)&&nr(l)},i),i.g={}}Ge.prototype.N=function(){Ge.Z.N.call(this),or(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var z=a.JSON.stringify,ar=a.JSON.parse,kn=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function ye(){}function Ns(){}var Nn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ve(){E.call(this,"d")}T(Ve,E);function Hr(){E.call(this,"c")}T(Hr,E);var Ke={},Ms=null;function Nt(){return Ms=Ms||new kt}Ke.Ia="serverreachability";function Os(i){E.call(this,Ke.Ia,i)}T(Os,E);function an(i){const l=Nt();Ut(l,new Os(l))}Ke.STAT_EVENT="statevent";function Gr(i,l){E.call(this,Ke.STAT_EVENT,i),this.stat=l}T(Gr,E);function Mt(i){const l=Nt();Ut(l,new Gr(l,i))}Ke.Ja="timingevent";function Mn(i,l){E.call(this,Ke.Ja,i),this.size=l}T(Mn,E);function On(i,l){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},l)}function Ln(){this.g=!0}Ln.prototype.ua=function(){this.g=!1};function $i(i,l,c,f,b,S){i.info(function(){if(i.g)if(S){var N="",Y=S.split("&");for(let mt=0;mt<Y.length;mt++){var Bt=Y[mt].split("=");if(Bt.length>1){const jt=Bt[0];Bt=Bt[1];const Oe=jt.split("_");N=Oe.length>=2&&Oe[1]=="type"?N+(jt+"="+Bt+"&"):N+(jt+"=redacted&")}}}else N=null;else N=S;return"XMLHTTP REQ ("+f+") [attempt "+b+"]: "+l+`
`+c+`
`+N})}function ln(i,l,c,f,b,S,N){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+b+"]: "+l+`
`+c+`
`+S+" "+N})}function De(i,l,c,f){i.info(function(){return"XMLHTTP TEXT ("+l+"): "+ji(i,c)+(f?" "+f:"")})}function lr(i,l){i.info(function(){return"TIMEOUT: "+l})}Ln.prototype.info=function(){};function ji(i,l){if(!i.g)return l;if(!l)return null;try{const S=JSON.parse(l);if(S){for(i=0;i<S.length;i++)if(Array.isArray(S[i])){var c=S[i];if(!(c.length<2)){var f=c[1];if(Array.isArray(f)&&!(f.length<1)){var b=f[0];if(b!="noop"&&b!="stop"&&b!="close")for(let N=1;N<f.length;N++)f[N]=""}}}}return z(S)}catch{return l}}var cr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Kr={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Wr;function Qr(){}T(Qr,ye),Qr.prototype.g=function(){return new XMLHttpRequest},Wr=new Qr;function cn(i){return encodeURIComponent(String(i))}function un(i){var l=1;i=i.split(":");const c=[];for(;l>0&&i.length;)c.push(i.shift()),l--;return i.length&&c.push(i.join(":")),c}function ve(i,l,c,f){this.j=i,this.i=l,this.l=c,this.S=f||1,this.V=new Ge(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ls}function Ls(){this.i=null,this.g="",this.h=!1}var Fs={},ur={};function Yr(i,l,c){i.M=1,i.A=Bn(ce(l)),i.u=c,i.R=!0,hr(i,null)}function hr(i,l){i.F=Date.now(),Fn(i),i.B=ce(i.A);var c=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),j(c.i,"t",f),i.C=0,c=i.j.L,i.h=new Ls,i.g=Pa(i.j,c?l:null,!i.u),i.P>0&&(i.O=new ks(d(i.Y,i,i.g),i.P)),l=i.V,c=i.g,f=i.ba;var b="readystatechange";Array.isArray(b)||(b&&(ir[0]=b.toString()),b=ir);for(let S=0;S<b.length;S++){const N=qr(c,b[S],f||l.handleEvent,!1,l.h||l);if(!N)break;l.g[N.key]=N}l=i.J?ze(i.J):{},i.u?(i.v||(i.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,l)):(i.v="GET",i.g.ea(i.B,i.v,null,l)),an(),$i(i.i,i.v,i.B,i.l,i.S,i.u)}ve.prototype.ba=function(i){i=i.target;const l=this.O;l&&Ct(i)==3?l.j():this.Y(i)},ve.prototype.Y=function(i){try{if(i==this.g)t:{const Y=Ct(this.g),Bt=this.g.ya(),mt=this.g.ca();if(!(Y<3)&&(Y!=3||this.g&&(this.h.h||this.g.la()||Ne(this.g)))){this.K||Y!=4||Bt==7||(Bt==8||mt<=0?an(3):an(2)),Zr(this);var l=this.g.ca();this.X=l;var c=Xr(this);if(this.o=l==200,ln(this.i,this.v,this.B,this.l,this.S,Y,l),this.o){if(this.U&&!this.L){e:{if(this.g){var f,b=this.g;if((f=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!g(f)){var S=f;break e}}S=null}if(i=S)De(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,We(this,i);else{this.o=!1,this.m=3,Mt(12),Ee(this),Un(this);break t}}if(this.R){i=!0;let jt;for(;!this.K&&this.C<c.length;)if(jt=Us(this,c),jt==ur){Y==4&&(this.m=4,Mt(14),i=!1),De(this.i,this.l,null,"[Incomplete Response]");break}else if(jt==Fs){this.m=4,Mt(15),De(this.i,this.l,c,"[Invalid Chunk]"),i=!1;break}else De(this.i,this.l,jt,null),We(this,jt);if(Jr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Y!=4||c.length!=0||this.h.h||(this.m=1,Mt(16),i=!1),this.o=this.o&&i,!i)De(this.i,this.l,c,"[Invalid Chunked Response]"),Ee(this),Un(this);else if(c.length>0&&!this.W){this.W=!0;var N=this.j;N.g==this&&N.aa&&!N.P&&(N.j.info("Great, no buffering proxy detected. Bytes received: "+c.length),Yi(N),N.P=!0,Mt(11))}}else De(this.i,this.l,c,null),We(this,c);Y==4&&Ee(this),this.o&&!this.K&&(Y==4?ba(this.j,this):(this.o=!1,Fn(this)))}else mr(this.g),l==400&&c.indexOf("Unknown SID")>0?(this.m=3,Mt(12)):(this.m=0,Mt(13)),Ee(this),Un(this)}}}catch{}finally{}};function Xr(i){if(!Jr(i))return i.g.la();const l=Ne(i.g);if(l==="")return"";let c="";const f=l.length,b=Ct(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Ee(i),Un(i),"";i.h.i=new a.TextDecoder}for(let S=0;S<f;S++)i.h.h=!0,c+=i.h.i.decode(l[S],{stream:!(b&&S==f-1)});return l.length=0,i.h.g+=c,i.C=0,i.h.g}function Jr(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function Us(i,l){var c=i.C,f=l.indexOf(`
`,c);return f==-1?ur:(c=Number(l.substring(c,f)),isNaN(c)?Fs:(f+=1,f+c>l.length?ur:(l=l.slice(f,f+c),i.C=f+c,l)))}ve.prototype.cancel=function(){this.K=!0,Ee(this)};function Fn(i){i.T=Date.now()+i.H,Bs(i,i.H)}function Bs(i,l){if(i.D!=null)throw Error("WatchDog timer not null");i.D=On(d(i.aa,i),l)}function Zr(i){i.D&&(a.clearTimeout(i.D),i.D=null)}ve.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(lr(this.i,this.B),this.M!=2&&(an(),Mt(17)),Ee(this),this.m=2,Un(this)):Bs(this,this.T-i)};function Un(i){i.j.I==0||i.K||ba(i.j,i)}function Ee(i){Zr(i);var l=i.O;l&&typeof l.dispose=="function"&&l.dispose(),i.O=null,or(i.V),i.g&&(l=i.g,i.g=null,l.abort(),l.dispose())}function We(i,l){try{var c=i.j;if(c.I!=0&&(c.g==i||dr(c.h,i))){if(!i.L&&dr(c.h,i)&&c.I==3){try{var f=c.Ba.g.parse(l)}catch{f=null}if(Array.isArray(f)&&f.length==3){var b=f;if(b[0]==0){t:if(!c.v){if(c.g)if(c.g.F+3e3<i.F)Ks(c),ae(c);else break t;Qi(c),Mt(18)}}else c.xa=b[1],0<c.xa-c.K&&b[2]<37500&&c.F&&c.A==0&&!c.C&&(c.C=On(d(c.Va,c),6e3));js(c.h)<=1&&c.ta&&(c.ta=void 0)}else $n(c,11)}else if((i.L||c.g==i)&&Ks(c),!g(l))for(b=c.Ba.g.parse(l),l=0;l<b.length;l++){let mt=b[l];const jt=mt[0];if(!(jt<=c.K))if(c.K=jt,mt=mt[1],c.I==2)if(mt[0]=="c"){c.M=mt[1],c.ba=mt[2];const Oe=mt[3];Oe!=null&&(c.ka=Oe,c.j.info("VER="+c.ka));const jn=mt[4];jn!=null&&(c.za=jn,c.j.info("SVER="+c.za));const gn=mt[5];gn!=null&&typeof gn=="number"&&gn>0&&(f=1.5*gn,c.O=f,c.j.info("backChannelRequestTimeoutMs_="+f)),f=c;const _n=i.g;if(_n){const Qs=_n.g?_n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qs){var S=f.h;S.g||Qs.indexOf("spdy")==-1&&Qs.indexOf("quic")==-1&&Qs.indexOf("h2")==-1||(S.j=S.l,S.g=new Set,S.h&&(ts(S,S.h),S.h=null))}if(f.G){const Xi=_n.g?_n.g.getResponseHeader("X-HTTP-Session-Id"):null;Xi&&(f.wa=Xi,at(f.J,f.G,Xi))}}c.I=3,c.l&&c.l.ra(),c.aa&&(c.T=Date.now()-i.F,c.j.info("Handshake RTT: "+c.T+"ms")),f=c;var N=i;if(f.na=Ca(f,f.L?f.ba:null,f.W),N.L){zs(f.h,N);var Y=N,Bt=f.O;Bt&&(Y.H=Bt),Y.D&&(Zr(Y),Fn(Y)),f.g=N}else Ia(f);c.i.length>0&&fe(c)}else mt[0]!="stop"&&mt[0]!="close"||$n(c,7);else c.I==3&&(mt[0]=="stop"||mt[0]=="close"?mt[0]=="stop"?$n(c,7):oe(c):mt[0]!="noop"&&c.l&&c.l.qa(mt),c.A=0)}}an(4)}catch{}}var zi=class{constructor(i,l){this.g=i,this.map=l}};function qs(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $s(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function js(i){return i.h?1:i.g?i.g.size:0}function dr(i,l){return i.h?i.h==l:i.g?i.g.has(l):!1}function ts(i,l){i.g?i.g.add(l):i.h=l}function zs(i,l){i.h&&i.h==l?i.h=null:i.g&&i.g.has(l)&&i.g.delete(l)}qs.prototype.cancel=function(){if(this.i=es(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function es(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let l=i.i;for(const c of i.g.values())l=l.concat(c.G);return l}return C(i.i)}var ns=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rs(i,l){if(i){i=i.split("&");for(let c=0;c<i.length;c++){const f=i[c].indexOf("=");let b,S=null;f>=0?(b=i[c].substring(0,f),S=i[c].substring(f+1)):b=i[c],l(b,S?decodeURIComponent(S.replace(/\+/g," ")):"")}}}function de(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;i instanceof de?(this.l=i.l,xe(this,i.j),this.o=i.o,this.g=i.g,hn(this,i.u),this.h=i.h,ss(this,st(i.i)),this.m=i.m):i&&(l=String(i).match(ns))?(this.l=!1,xe(this,l[1]||"",!0),this.o=dn(l[2]||""),this.g=dn(l[3]||"",!0),hn(this,l[4]),this.h=dn(l[5]||"",!0),ss(this,l[6]||"",!0),this.m=dn(l[7]||"")):(this.l=!1,this.i=new R(null,this.l))}de.prototype.toString=function(){const i=[];var l=this.j;l&&i.push(qn(l,Gs,!0),":");var c=this.g;return(c||l=="file")&&(i.push("//"),(l=this.o)&&i.push(qn(l,Gs,!0),"@"),i.push(cn(c).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.u,c!=null&&i.push(":",String(c))),(c=this.h)&&(this.g&&c.charAt(0)!="/"&&i.push("/"),i.push(qn(c,c.charAt(0)=="/"?Gi:Hi,!0))),(c=this.i.toString())&&i.push("?",c),(c=this.m)&&i.push("#",qn(c,Wi)),i.join("")},de.prototype.resolve=function(i){const l=ce(this);let c=!!i.j;c?xe(l,i.j):c=!!i.o,c?l.o=i.o:c=!!i.g,c?l.g=i.g:c=i.u!=null;var f=i.h;if(c)hn(l,i.u);else if(c=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var b=l.h.lastIndexOf("/");b!=-1&&(f=l.h.slice(0,b+1)+f)}if(b=f,b==".."||b==".")f="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){f=b.lastIndexOf("/",0)==0,b=b.split("/");const S=[];for(let N=0;N<b.length;){const Y=b[N++];Y=="."?f&&N==b.length&&S.push(""):Y==".."?((S.length>1||S.length==1&&S[0]!="")&&S.pop(),f&&N==b.length&&S.push("")):(S.push(Y),f=!0)}f=S.join("/")}else f=b}return c?l.h=f:c=i.i.toString()!=="",c?ss(l,st(i.i)):c=!!i.m,c&&(l.m=i.m),l};function ce(i){return new de(i)}function xe(i,l,c){i.j=c?dn(l,!0):l,i.j&&(i.j=i.j.replace(/:$/,""))}function hn(i,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);i.u=l}else i.u=null}function ss(i,l,c){l instanceof R?(i.i=l,Vt(i.i,i.l)):(c||(l=qn(l,Ki)),i.i=new R(l,i.l))}function at(i,l,c){i.i.set(l,c)}function Bn(i){return at(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function dn(i,l){return i?l?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function qn(i,l,c){return typeof i=="string"?(i=encodeURI(i).replace(l,Hs),c&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Hs(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Gs=/[#\/\?@]/g,Hi=/[#\?:]/g,Gi=/[#\?]/g,Ki=/[#\?@]/g,Wi=/#/g;function R(i,l){this.h=this.g=null,this.i=i||null,this.j=!!l}function V(i){i.g||(i.g=new Map,i.h=0,i.i&&rs(i.i,function(l,c){i.add(decodeURIComponent(l.replace(/\+/g," ")),c)}))}n=R.prototype,n.add=function(i,l){V(this),this.i=null,i=dt(this,i);let c=this.g.get(i);return c||this.g.set(i,c=[]),c.push(l),this.h+=1,this};function x(i,l){V(i),l=dt(i,l),i.g.has(l)&&(i.i=null,i.h-=i.g.get(l).length,i.g.delete(l))}function q(i,l){return V(i),l=dt(i,l),i.g.has(l)}n.forEach=function(i,l){V(this),this.g.forEach(function(c,f){c.forEach(function(b){i.call(l,b,f,this)},this)},this)};function B(i,l){V(i);let c=[];if(typeof l=="string")q(i,l)&&(c=c.concat(i.g.get(dt(i,l))));else for(i=Array.from(i.g.values()),l=0;l<i.length;l++)c=c.concat(i[l]);return c}n.set=function(i,l){return V(this),this.i=null,i=dt(this,i),q(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[l]),this.h+=1,this},n.get=function(i,l){return i?(i=B(this,i),i.length>0?String(i[0]):l):l};function j(i,l,c){x(i,l),c.length>0&&(i.i=null,i.g.set(dt(i,l),C(c)),i.h+=c.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],l=Array.from(this.g.keys());for(let f=0;f<l.length;f++){var c=l[f];const b=cn(c);c=B(this,c);for(let S=0;S<c.length;S++){let N=b;c[S]!==""&&(N+="="+cn(c[S])),i.push(N)}}return this.i=i.join("&")};function st(i){const l=new R;return l.i=i.i,i.g&&(l.g=new Map(i.g),l.h=i.h),l}function dt(i,l){return l=String(l),i.j&&(l=l.toLowerCase()),l}function Vt(i,l){l&&!i.j&&(V(i),i.i=null,i.g.forEach(function(c,f){const b=f.toLowerCase();f!=b&&(x(this,f),j(this,b,c))},i)),i.j=l}function Rt(i,l){const c=new Ln;if(a.Image){const f=new Image;f.onload=m(ht,c,"TestLoadImage: loaded",!0,l,f),f.onerror=m(ht,c,"TestLoadImage: error",!1,l,f),f.onabort=m(ht,c,"TestLoadImage: abort",!1,l,f),f.ontimeout=m(ht,c,"TestLoadImage: timeout",!1,l,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else l(!1)}function ut(i,l){const c=new Ln,f=new AbortController,b=setTimeout(()=>{f.abort(),ht(c,"TestPingServer: timeout",!1,l)},1e4);fetch(i,{signal:f.signal}).then(S=>{clearTimeout(b),S.ok?ht(c,"TestPingServer: ok",!0,l):ht(c,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),ht(c,"TestPingServer: error",!1,l)})}function ht(i,l,c,f,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),f(c)}catch{}}function Te(){this.g=new kn}function ke(i){this.i=i.Sb||null,this.h=i.ab||!1}T(ke,ye),ke.prototype.g=function(){return new $t(this.i,this.h)};function $t(i,l){kt.call(this),this.H=i,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}T($t,kt),n=$t.prototype,n.open=function(i,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=l,this.readyState=1,ft(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(l.body=i),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,it(this)),this.readyState=0},n.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,ft(this)),this.g&&(this.readyState=3,ft(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ie(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ie(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}n.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var l=i.value?i.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!i.done}))&&(this.response=this.responseText+=l)}i.done?it(this):ft(this),this.readyState==3&&ie(this)}},n.Oa=function(i){this.g&&(this.response=this.responseText=i,it(this))},n.Na=function(i){this.g&&(this.response=i,it(this))},n.ga=function(){this.g&&it(this)};function it(i){i.readyState=4,i.l=null,i.j=null,i.B=null,ft(i)}n.setRequestHeader=function(i,l){this.A.append(i,l)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],l=this.h.entries();for(var c=l.next();!c.done;)c=c.value,i.push(c[0]+": "+c[1]),c=l.next();return i.join(`\r
`)};function ft(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty($t.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function Yt(i){let l="";return Ce(i,function(c,f){l+=f,l+=":",l+=c,l+=`\r
`}),l}function St(i,l,c){t:{for(f in c){var f=!1;break t}f=!0}f||(c=Yt(c),typeof i=="string"?c!=null&&cn(c):at(i,l,c))}function X(i){kt.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}T(X,kt);var we=/^https?$/i,wt=["POST","PUT"];n=X.prototype,n.Fa=function(i){this.H=i},n.ea=function(i,l,c,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);l=l?l.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Wr.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(l,String(i),!0),this.B=!1}catch(S){Xt(this,S);return}if(i=c||"",c=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var b in f)c.set(b,f[b]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const S of f.keys())c.set(S,f.get(S));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(c.keys()).find(S=>S.toLowerCase()=="content-type"),b=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(wt,l,void 0)>=0)||f||b||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[S,N]of c)this.g.setRequestHeader(S,N);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(S){Xt(this,S)}};function Xt(i,l){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=l,i.o=5,fn(i),mn(i)}function fn(i){i.A||(i.A=!0,Ut(i,"complete"),Ut(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,Ut(this,"complete"),Ut(this,"abort"),mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mn(this,!0)),X.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?fr(this):this.Xa())},n.Xa=function(){fr(this)};function fr(i){if(i.h&&typeof o<"u"){if(i.v&&Ct(i)==4)setTimeout(i.Ca.bind(i),0);else if(Ut(i,"readystatechange"),Ct(i)==4){i.h=!1;try{const S=i.ca();t:switch(S){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var c;if(!(c=l)){var f;if(f=S===0){let N=String(i.D).match(ns)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),f=!we.test(N?N.toLowerCase():"")}c=f}if(c)Ut(i,"complete"),Ut(i,"success");else{i.o=6;try{var b=Ct(i)>2?i.g.statusText:""}catch{b=""}i.l=b+" ["+i.ca()+"]",fn(i)}}finally{mn(i)}}}}function mn(i,l){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const c=i.g;i.g=null,l||Ut(i,"ready");try{c.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ct(i){return i.g?i.g.readyState:0}n.ca=function(){try{return Ct(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(i){if(this.g){var l=this.g.responseText;return i&&l.indexOf(i)==0&&(l=l.substring(i.length)),ar(l)}};function Ne(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function mr(i){const l={};i=(i.g&&Ct(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(g(i[f]))continue;var c=un(i[f]);const b=c[0];if(c=c[1],typeof c!="string")continue;c=c.trim();const S=l[b]||[];l[b]=S,S.push(c)}rn(l,function(f){return f.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Me(i,l,c){return c&&c.internalChannelParams&&c.internalChannelParams[i]||l}function pn(i){this.za=0,this.i=[],this.j=new Ln,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Me("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Me("baseRetryDelayMs",5e3,i),this.Za=Me("retryDelaySeedMs",1e4,i),this.Ta=Me("forwardChannelMaxRetries",2,i),this.va=Me("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new qs(i&&i.concurrentRequestLimit),this.Ba=new Te,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=pn.prototype,n.ka=8,n.I=1,n.connect=function(i,l,c,f){Mt(0),this.W=i,this.H=l||{},c&&f!==void 0&&(this.H.OSID=c,this.H.OAID=f),this.F=this.X,this.J=Ca(this,null,this.W),fe(this)};function oe(i){if(se(i),i.I==3){var l=i.V++,c=ce(i.J);if(at(c,"SID",i.M),at(c,"RID",l),at(c,"TYPE","terminate"),is(i,c),l=new ve(i,i.j,l),l.M=2,l.A=Bn(ce(c)),c=!1,a.navigator&&a.navigator.sendBeacon)try{c=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!c&&a.Image&&(new Image().src=l.A,c=!0),c||(l.g=Pa(l.j,null),l.g.ea(l.A)),l.F=Date.now(),Fn(l)}Sa(i)}function ae(i){i.g&&(Yi(i),i.g.cancel(),i.g=null)}function se(i){ae(i),i.v&&(a.clearTimeout(i.v),i.v=null),Ks(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function fe(i){if(!$s(i.h)&&!i.m){i.m=!0;var l=i.Ea;yt||p(),et||(yt(),et=!0),w.add(l,i),i.D=0}}function Bu(i,l){return js(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=l.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=On(d(i.Ea,i,l),Ra(i,i.D)),i.D++,!0)}n.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const b=new ve(this,this.j,i);let S=this.o;if(this.U&&(S?(S=ze(S),Br(S,this.U)):S=this.U),this.u!==null||this.R||(b.J=S,S=null),this.S)t:{for(var l=0,c=0;c<this.i.length;c++){e:{var f=this.i[c];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(l+=f,l>4096){l=c;break t}if(l===4096||c===this.i.length-1){l=c+1;break t}}l=1e3}else l=1e3;l=wa(this,b,l),c=ce(this.J),at(c,"RID",i),at(c,"CVER",22),this.G&&at(c,"X-HTTP-Session-Id",this.G),is(this,c),S&&(this.R?l="headers="+cn(Yt(S))+"&"+l:this.u&&St(c,this.u,S)),ts(this.h,b),this.Ra&&at(c,"TYPE","init"),this.S?(at(c,"$req",l),at(c,"SID","null"),b.U=!0,Yr(b,c,null)):Yr(b,c,l),this.I=2}}else this.I==3&&(i?Ta(this,i):this.i.length==0||$s(this.h)||Ta(this))};function Ta(i,l){var c;l?c=l.l:c=i.V++;const f=ce(i.J);at(f,"SID",i.M),at(f,"RID",c),at(f,"AID",i.K),is(i,f),i.u&&i.o&&St(f,i.u,i.o),c=new ve(i,i.j,c,i.D+1),i.u===null&&(c.J=i.o),l&&(i.i=l.G.concat(i.i)),l=wa(i,c,1e3),c.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),ts(i.h,c),Yr(c,f,l)}function is(i,l){i.H&&Ce(i.H,function(c,f){at(l,f,c)}),i.l&&Ce({},function(c,f){at(l,f,c)})}function wa(i,l,c){c=Math.min(i.i.length,c);const f=i.l?d(i.l.Ka,i.l,i):null;t:{var b=i.i;let Y=-1;for(;;){const Bt=["count="+c];Y==-1?c>0?(Y=b[0].g,Bt.push("ofs="+Y)):Y=0:Bt.push("ofs="+Y);let mt=!0;for(let jt=0;jt<c;jt++){var S=b[jt].g;const Oe=b[jt].map;if(S-=Y,S<0)Y=Math.max(0,b[jt].g-100),mt=!1;else try{S="req"+S+"_"||"";try{var N=Oe instanceof Map?Oe:Object.entries(Oe);for(const[jn,gn]of N){let _n=gn;u(gn)&&(_n=z(gn)),Bt.push(S+jn+"="+encodeURIComponent(_n))}}catch(jn){throw Bt.push(S+"type="+encodeURIComponent("_badmap")),jn}}catch{f&&f(Oe)}}if(mt){N=Bt.join("&");break t}}N=void 0}return i=i.i.splice(0,c),l.G=i,N}function Ia(i){if(!i.g&&!i.v){i.Y=1;var l=i.Da;yt||p(),et||(yt(),et=!0),w.add(l,i),i.A=0}}function Qi(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=On(d(i.Da,i),Ra(i,i.A)),i.A++,!0)}n.Da=function(){if(this.v=null,Aa(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=On(d(this.Wa,this),i)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Mt(10),ae(this),Aa(this))};function Yi(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function Aa(i){i.g=new ve(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var l=ce(i.na);at(l,"RID","rpc"),at(l,"SID",i.M),at(l,"AID",i.K),at(l,"CI",i.F?"0":"1"),!i.F&&i.ia&&at(l,"TO",i.ia),at(l,"TYPE","xmlhttp"),is(i,l),i.u&&i.o&&St(l,i.u,i.o),i.O&&(i.g.H=i.O);var c=i.g;i=i.ba,c.M=1,c.A=Bn(ce(l)),c.u=null,c.R=!0,hr(c,i)}n.Va=function(){this.C!=null&&(this.C=null,ae(this),Qi(this),Mt(19))};function Ks(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function ba(i,l){var c=null;if(i.g==l){Ks(i),Yi(i),i.g=null;var f=2}else if(dr(i.h,l))c=l.G,zs(i.h,l),f=1;else return;if(i.I!=0){if(l.o)if(f==1){c=l.u?l.u.length:0,l=Date.now()-l.F;var b=i.D;f=Nt(),Ut(f,new Mn(f,c)),fe(i)}else Ia(i);else if(b=l.m,b==3||b==0&&l.X>0||!(f==1&&Bu(i,l)||f==2&&Qi(i)))switch(c&&c.length>0&&(l=i.h,l.i=l.i.concat(c)),b){case 1:$n(i,5);break;case 4:$n(i,10);break;case 3:$n(i,6);break;default:$n(i,2)}}}function Ra(i,l){let c=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(c*=2),c*l}function $n(i,l){if(i.j.info("Error code "+l),l==2){var c=d(i.bb,i),f=i.Ua;const b=!f;f=new de(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||xe(f,"https"),Bn(f),b?Rt(f.toString(),c):ut(f.toString(),c)}else Mt(2);i.I=0,i.l&&i.l.pa(l),Sa(i),se(i)}n.bb=function(i){i?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Sa(i){if(i.I=0,i.ja=[],i.l){const l=es(i.h);(l.length!=0||i.i.length!=0)&&(O(i.ja,l),O(i.ja,i.i),i.h.i.length=0,C(i.i),i.i.length=0),i.l.oa()}}function Ca(i,l,c){var f=c instanceof de?ce(c):new de(c);if(f.g!="")l&&(f.g=l+"."+f.g),hn(f,f.u);else{var b=a.location;f=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const S=new de(null);f&&xe(S,f),l&&(S.g=l),b&&hn(S,b),c&&(S.h=c),f=S}return c=i.G,l=i.wa,c&&l&&at(f,c,l),at(f,"VER",i.ka),is(i,f),f}function Pa(i,l,c){if(l&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=i.Aa&&!i.ma?new X(new ke({ab:c})):new X(i.ma),l.Fa(i.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Va(){}n=Va.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ws(){}Ws.prototype.g=function(i,l){return new ue(i,l)};function ue(i,l){kt.call(this),this.g=new pn(l),this.l=i,this.h=l&&l.messageUrlParams||null,i=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(i?i["X-WebChannel-Content-Type"]=l.messageContentType:i={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(i?i["X-WebChannel-Client-Profile"]=l.sa:i={"X-WebChannel-Client-Profile":l.sa}),this.g.U=i,(i=l&&l.Qb)&&!g(i)&&(this.g.u=i),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!g(l)&&(this.g.G=l,i=this.h,i!==null&&l in i&&(i=this.h,l in i&&delete i[l])),this.j=new pr(this)}T(ue,kt),ue.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ue.prototype.close=function(){oe(this.g)},ue.prototype.o=function(i){var l=this.g;if(typeof i=="string"){var c={};c.__data__=i,i=c}else this.v&&(c={},c.__data__=z(i),i=c);l.i.push(new zi(l.Ya++,i)),l.I==3&&fe(l)},ue.prototype.N=function(){this.g.l=null,delete this.j,oe(this.g),delete this.g,ue.Z.N.call(this)};function Da(i){Ve.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var l=i.__sm__;if(l){t:{for(const c in l){i=c;break t}i=void 0}(this.i=i)&&(i=this.i,l=l!==null&&i in l?l[i]:void 0),this.data=l}else this.data=i}T(Da,Ve);function xa(){Hr.call(this),this.status=1}T(xa,Hr);function pr(i){this.g=i}T(pr,Va),pr.prototype.ra=function(){Ut(this.g,"a")},pr.prototype.qa=function(i){Ut(this.g,new Da(i))},pr.prototype.pa=function(i){Ut(this.g,new xa)},pr.prototype.oa=function(){Ut(this.g,"b")},Ws.prototype.createWebChannel=Ws.prototype.g,ue.prototype.send=ue.prototype.o,ue.prototype.open=ue.prototype.m,ue.prototype.close=ue.prototype.close,mc=function(){return new Ws},fc=function(){return Nt()},dc=Ke,go={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},cr.NO_ERROR=0,cr.TIMEOUT=8,cr.HTTP_ERROR=6,ii=cr,Kr.COMPLETE="complete",hc=Kr,Ns.EventType=Nn,Nn.OPEN="a",Nn.CLOSE="b",Nn.ERROR="c",Nn.MESSAGE="d",kt.prototype.listen=kt.prototype.J,ls=Ns,X.prototype.listenOnce=X.prototype.K,X.prototype.getLastError=X.prototype.Ha,X.prototype.getLastErrorCode=X.prototype.ya,X.prototype.getStatus=X.prototype.ca,X.prototype.getResponseJson=X.prototype.La,X.prototype.getResponseText=X.prototype.la,X.prototype.send=X.prototype.ea,X.prototype.setWithCredentials=X.prototype.Fa,uc=X}).apply(typeof Js<"u"?Js:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class ee{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}ee.UNAUTHENTICATED=new ee(null),ee.GOOGLE_CREDENTIALS=new ee("google-credentials-uid"),ee.FIRST_PARTY=new ee("first-party-uid"),ee.MOCK_USER=new ee("mock-user");/**
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
 */let Mr="12.10.0";function Zd(n){Mr=n}/**
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
 */const Kn=new nc("@firebase/firestore");function yr(){return Kn.logLevel}function U(n,...t){if(Kn.logLevel<=rt.DEBUG){const e=t.map(Fo);Kn.debug(`Firestore (${Mr}): ${n}`,...e)}}function Ze(n,...t){if(Kn.logLevel<=rt.ERROR){const e=t.map(Fo);Kn.error(`Firestore (${Mr}): ${n}`,...e)}}function Wn(n,...t){if(Kn.logLevel<=rt.WARN){const e=t.map(Fo);Kn.warn(`Firestore (${Mr}): ${n}`,...e)}}function Fo(n){if(typeof n=="string")return n;try{return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
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
 */function H(n,t,e){let r="Unexpected state";typeof t=="string"?r=t:e=t,pc(n,r,e)}function pc(n,t,e){let r=`FIRESTORE (${Mr}) INTERNAL ASSERTION FAILED: ${t} (ID: ${n.toString(16)})`;if(e!==void 0)try{r+=" CONTEXT: "+JSON.stringify(e)}catch{r+=" CONTEXT: "+e}throw Ze(r),new Error(r)}function ct(n,t,e,r){let s="Unexpected state";typeof e=="string"?s=e:r=e,n||pc(t,s,r)}function W(n,t){return n}/**
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
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Nr{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class In{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
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
 */class gc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class tf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(ee.UNAUTHENTICATED))}shutdown(){}}class ef{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class nf{constructor(t){this.t=t,this.currentUser=ee.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ct(this.o===void 0,42304);let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new In;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new In,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new In)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ct(typeof r.accessToken=="string",31837,{l:r}),new gc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ct(t===null||typeof t=="string",2055,{h:t}),new ee(t)}}class rf{constructor(t,e,r){this.P=t,this.T=e,this.I=r,this.type="FirstParty",this.user=ee.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class sf{constructor(t,e,r){this.P=t,this.T=e,this.I=r}getToken(){return Promise.resolve(new rf(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable(()=>e(ee.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ya{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class of{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Od(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){ct(this.o===void 0,3512);const r=o=>{o.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,U("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ya(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ct(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new Ya(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function af(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
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
 */class Uo{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=af(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%62))}return r}}function J(n,t){return n<t?-1:n>t?1:0}function _o(n,t){const e=Math.min(n.length,t.length);for(let r=0;r<e;r++){const s=n.charAt(r),o=t.charAt(r);if(s!==o)return ro(s)===ro(o)?J(s,o):ro(s)?1:-1}return J(n.length,t.length)}const lf=55296,cf=57343;function ro(n){const t=n.charCodeAt(0);return t>=lf&&t<=cf}function Cr(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
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
 */const Xa="__name__";class Ue{constructor(t,e,r){e===void 0?e=0:e>t.length&&H(637,{offset:e,range:t.length}),r===void 0?r=t.length-e:r>t.length-e&&H(1746,{length:r,range:t.length-e}),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Ue.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ue?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=Ue.compareSegments(t.get(s),e.get(s));if(o!==0)return o}return J(t.length,e.length)}static compareSegments(t,e){const r=Ue.isNumericId(t),s=Ue.isNumericId(e);return r&&!s?-1:!r&&s?1:r&&s?Ue.extractNumericId(t).compare(Ue.extractNumericId(e)):_o(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return wn.fromString(t.substring(4,t.length-2))}}class pt extends Ue{construct(t,e,r){return new pt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new F(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new pt(e)}static emptyPath(){return new pt([])}}const uf=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wt extends Ue{construct(t,e,r){return new Wt(t,e,r)}static isValidIdentifier(t){return uf.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xa}static keyField(){return new Wt([Xa])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new F(P.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new F(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new F(P.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wt(e)}static emptyPath(){return new Wt([])}}/**
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
 */class ${constructor(t){this.path=t}static fromPath(t){return new $(pt.fromString(t))}static fromName(t){return new $(pt.fromString(t).popFirst(5))}static empty(){return new $(pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&pt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return pt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $(new pt(t.slice()))}}/**
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
 */function _c(n,t,e){if(!e)throw new F(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function hf(n,t,e,r){if(t===!0&&r===!0)throw new F(P.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Ja(n){if(!$.isDocumentKey(n))throw new F(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Za(n){if($.isDocumentKey(n))throw new F(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function yc(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Ri(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":H(12329,{type:typeof n})}function mi(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new F(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Ri(n);throw new F(P.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}function df(n,t){if(t<=0)throw new F(P.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${t}.`)}/**
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
 */function Ft(n,t){const e={typeString:n};return t&&(e.value=t),e}function Rs(n,t){if(!yc(n))throw new F(P.INVALID_ARGUMENT,"JSON must be an object");let e;for(const r in t)if(t[r]){const s=t[r].typeString,o="value"in t[r]?{value:t[r].value}:void 0;if(!(r in n)){e=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){e=`JSON field '${r}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){e=`Expected '${r}' field to equal '${o.value}'`;break}}if(e)throw new F(P.INVALID_ARGUMENT,e);return!0}/**
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
 */const tl=-62135596800,el=1e6;class vt{static now(){return vt.fromMillis(Date.now())}static fromDate(t){return vt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor((t-1e3*e)*el);return new vt(e,r)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new F(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new F(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<tl)throw new F(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new F(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/el}_compareTo(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:vt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Rs(t,vt._jsonSchema))return new vt(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-tl;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}vt._jsonSchemaVersion="firestore/timestamp/1.0",vt._jsonSchema={type:Ft("string",vt._jsonSchemaVersion),seconds:Ft("number"),nanoseconds:Ft("number")};/**
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
 */const ys=-1;function ff(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=K.fromTimestamp(r===1e9?new vt(e+1,0):new vt(e,r));return new bn(s,$.empty(),t)}function mf(n){return new bn(n.readTime,n.key,ys)}class bn{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new bn(K.min(),$.empty(),ys)}static max(){return new bn(K.max(),$.empty(),ys)}}function pf(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=$.comparator(n.documentKey,t.documentKey),e!==0?e:J(n.largestBatchId,t.largestBatchId))}/**
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
 */const gf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _f{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
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
 */async function Or(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==gf)throw n;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&H(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new D((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof D?e:D.resolve(e)}catch(e){return D.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):D.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):D.reject(e)}static resolve(t){return new D((e,r)=>{e(t)})}static reject(t){return new D((e,r)=>{r(t)})}static waitFor(t){return new D((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=D.resolve(!1);for(const r of t)e=e.next(s=>s?D.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new D((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(m=>{a[d]=m,++u,u===o&&r(a)},m=>s(m))}})}static doWhile(t,e){return new D((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function yf(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Lr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Si{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>e.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Si.ce=-1;/**
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
 */const Bo=-1;function Ci(n){return n==null}function pi(n){return n===0&&1/n==-1/0}function vf(n){return typeof n=="number"&&Number.isInteger(n)&&!pi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const vc="";function Ef(n){let t="";for(let e=0;e<n.length;e++)t.length>0&&(t=nl(t)),t=Tf(n.get(e),t);return nl(t)}function Tf(n,t){let e=t;const r=n.length;for(let s=0;s<r;s++){const o=n.charAt(s);switch(o){case"\0":e+="";break;case vc:e+="";break;default:e+=o}}return e}function nl(n){return n+vc+""}/**
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
 */function rl(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Yn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Ec(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
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
 */class It{constructor(t,e){this.comparator=t,this.root=e||Kt.EMPTY}insert(t,e){return new It(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(t){return new It(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Zs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Zs(this.root,t,this.comparator,!1)}getReverseIterator(){return new Zs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Zs(this.root,t,this.comparator,!0)}}class Zs{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Kt{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??Kt.RED,this.left=s??Kt.EMPTY,this.right=o??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new Kt(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw H(43730,{key:this.key,value:this.value});if(this.right.isRed())throw H(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw H(27949);return t+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw H(57766)}get value(){throw H(16141)}get color(){throw H(16727)}get left(){throw H(29726)}get right(){throw H(36894)}copy(t,e,r,s,o){return this}insert(t,e,r){return new Kt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qt{constructor(t){this.comparator=t,this.data=new It(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new sl(this.data.getIterator())}getIteratorFrom(t){return new sl(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof qt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new qt(this.comparator);return e.data=t,e}}class sl{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class be{constructor(t){this.fields=t,t.sort(Wt.comparator)}static empty(){return new be([])}unionWith(t){let e=new qt(Wt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new be(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Cr(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class Tc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Tc("Invalid base64 string: "+o):o}}(t);return new Qt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new Qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return J(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qt.EMPTY_BYTE_STRING=new Qt("");const wf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(n){if(ct(!!n,39018),typeof n=="string"){let t=0;const e=wf.exec(n);if(ct(!!e,46558,{timestamp:n}),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:xt(n.seconds),nanos:xt(n.nanos)}}function xt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sn(n){return typeof n=="string"?Qt.fromBase64String(n):Qt.fromUint8Array(n)}/**
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
 */const wc="server_timestamp",Ic="__type__",Ac="__previous_value__",bc="__local_write_time__";function Pi(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Ic])==null?void 0:r.stringValue)===wc}function Vi(n){const t=n.mapValue.fields[Ac];return Pi(t)?Vi(t):t}function vs(n){const t=Rn(n.mapValue.fields[bc].timestampValue);return new vt(t.seconds,t.nanos)}/**
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
 */class If{constructor(t,e,r,s,o,a,u,h,d,m,T){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=m,this.apiKey=T}}const gi="(default)";class Es{constructor(t,e){this.projectId=t,this.database=e||gi}static empty(){return new Es("","")}get isDefaultDatabase(){return this.database===gi}isEqual(t){return t instanceof Es&&t.projectId===this.projectId&&t.database===this.database}}function Af(n,t){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new F(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Es(n.options.projectId,t)}/**
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
 */const Rc="__type__",bf="__max__",ti={mapValue:{}},Sc="__vector__",_i="value";function Cn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Pi(n)?4:Sf(n)?9007199254740991:Rf(n)?10:11:H(28295,{value:n})}function je(n,t){if(n===t)return!0;const e=Cn(n);if(e!==Cn(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vs(n).isEqual(vs(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=Rn(s.timestampValue),u=Rn(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return Sn(s.bytesValue).isEqual(Sn(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return xt(s.geoPointValue.latitude)===xt(o.geoPointValue.latitude)&&xt(s.geoPointValue.longitude)===xt(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return xt(s.integerValue)===xt(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=xt(s.doubleValue),u=xt(o.doubleValue);return a===u?pi(a)===pi(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return Cr(n.arrayValue.values||[],t.arrayValue.values||[],je);case 10:case 11:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(rl(a)!==rl(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!je(a[h],u[h])))return!1;return!0}(n,t);default:return H(52216,{left:n})}}function Ts(n,t){return(n.values||[]).find(e=>je(e,t))!==void 0}function Pr(n,t){if(n===t)return 0;const e=Cn(n),r=Cn(t);if(e!==r)return J(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return J(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=xt(o.integerValue||o.doubleValue),h=xt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return il(n.timestampValue,t.timestampValue);case 4:return il(vs(n),vs(t));case 5:return _o(n.stringValue,t.stringValue);case 6:return function(o,a){const u=Sn(o),h=Sn(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const m=J(u[d],h[d]);if(m!==0)return m}return J(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=J(xt(o.latitude),xt(a.latitude));return u!==0?u:J(xt(o.longitude),xt(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return ol(n.arrayValue,t.arrayValue);case 10:return function(o,a){var A,C,O,L;const u=o.fields||{},h=a.fields||{},d=(A=u[_i])==null?void 0:A.arrayValue,m=(C=h[_i])==null?void 0:C.arrayValue,T=J(((O=d==null?void 0:d.values)==null?void 0:O.length)||0,((L=m==null?void 0:m.values)==null?void 0:L.length)||0);return T!==0?T:ol(d,m)}(n.mapValue,t.mapValue);case 11:return function(o,a){if(o===ti.mapValue&&a===ti.mapValue)return 0;if(o===ti.mapValue)return 1;if(a===ti.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},m=Object.keys(d);h.sort(),m.sort();for(let T=0;T<h.length&&T<m.length;++T){const A=_o(h[T],m[T]);if(A!==0)return A;const C=Pr(u[h[T]],d[m[T]]);if(C!==0)return C}return J(h.length,m.length)}(n.mapValue,t.mapValue);default:throw H(23264,{he:e})}}function il(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return J(n,t);const e=Rn(n),r=Rn(t),s=J(e.seconds,r.seconds);return s!==0?s:J(e.nanos,r.nanos)}function ol(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const o=Pr(e[s],r[s]);if(o)return o}return J(e.length,r.length)}function Vr(n){return yo(n)}function yo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Rn(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Sn(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return $.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=yo(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${yo(e.fields[a])}`;return s+"}"}(n.mapValue):H(61005,{value:n})}function oi(n){switch(Cn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Vi(n);return t?16+oi(t):16;case 5:return 2*n.stringValue.length;case 6:return Sn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,o)=>s+oi(o),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Yn(r.fields,(o,a)=>{s+=o.length+oi(a)}),s}(n.mapValue);default:throw H(13486,{value:n})}}function yi(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function vo(n){return!!n&&"integerValue"in n}function qo(n){return!!n&&"arrayValue"in n}function al(n){return!!n&&"nullValue"in n}function ll(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ai(n){return!!n&&"mapValue"in n}function Rf(n){var e,r;return((r=(((e=n==null?void 0:n.mapValue)==null?void 0:e.fields)||{})[Rc])==null?void 0:r.stringValue)===Sc}function ds(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const t={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ds(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ds(n.arrayValue.values[e]);return t}return{...n}}function Sf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===bf}/**
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
 */class me{constructor(t){this.value=t}static empty(){return new me({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ai(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ds(e)}setAll(t){let e=Wt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=ds(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());ai(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return je(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];ai(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Yn(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new me(ds(this.value))}}function Cc(n){const t=[];return Yn(n.fields,(e,r)=>{const s=new Wt([e]);if(ai(r)){const o=Cc(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new be(t)}/**
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
 */class ne{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new ne(t,0,K.min(),K.min(),K.min(),me.empty(),0)}static newFoundDocument(t,e,r,s){return new ne(t,1,e,K.min(),r,s,0)}static newNoDocument(t,e){return new ne(t,2,e,K.min(),K.min(),me.empty(),0)}static newUnknownDocument(t,e){return new ne(t,3,e,K.min(),K.min(),me.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=me.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=me.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof ne&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new ne(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Dr{constructor(t,e){this.position=t,this.inclusive=e}}function cl(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=$.comparator($.fromName(a.referenceValue),e.key):r=Pr(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function ul(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!je(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class ws{constructor(t,e="asc"){this.field=t,this.dir=e}}function Cf(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class Pc{}class Lt extends Pc{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Vf(t,e,r):e==="array-contains"?new kf(t,r):e==="in"?new Nf(t,r):e==="not-in"?new Mf(t,r):e==="array-contains-any"?new Of(t,r):new Lt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Df(t,r):new xf(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Pr(e,this.value)):e!==null&&Cn(this.value)===Cn(e)&&this.matchesComparison(Pr(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return H(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Se extends Pc{constructor(t,e){super(),this.filters=t,this.op=e,this.Pe=null}static create(t,e){return new Se(t,e)}matches(t){return Vc(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Vc(n){return n.op==="and"}function Dc(n){return Pf(n)&&Vc(n)}function Pf(n){for(const t of n.filters)if(t instanceof Se)return!1;return!0}function Eo(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Vr(n.value);if(Dc(n))return n.filters.map(t=>Eo(t)).join(",");{const t=n.filters.map(e=>Eo(e)).join(",");return`${n.op}(${t})`}}function xc(n,t){return n instanceof Lt?function(r,s){return s instanceof Lt&&r.op===s.op&&r.field.isEqual(s.field)&&je(r.value,s.value)}(n,t):n instanceof Se?function(r,s){return s instanceof Se&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&xc(a,s.filters[u]),!0):!1}(n,t):void H(19439)}function kc(n){return n instanceof Lt?function(e){return`${e.field.canonicalString()} ${e.op} ${Vr(e.value)}`}(n):n instanceof Se?function(e){return e.op.toString()+" {"+e.getFilters().map(kc).join(" ,")+"}"}(n):"Filter"}class Vf extends Lt{constructor(t,e,r){super(t,e,r),this.key=$.fromName(r.referenceValue)}matches(t){const e=$.comparator(t.key,this.key);return this.matchesComparison(e)}}class Df extends Lt{constructor(t,e){super(t,"in",e),this.keys=Nc("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class xf extends Lt{constructor(t,e){super(t,"not-in",e),this.keys=Nc("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Nc(n,t){var e;return(((e=t.arrayValue)==null?void 0:e.values)||[]).map(r=>$.fromName(r.referenceValue))}class kf extends Lt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return qo(e)&&Ts(e.arrayValue,this.value)}}class Nf extends Lt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ts(this.value.arrayValue,e)}}class Mf extends Lt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ts(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!Ts(this.value.arrayValue,e)}}class Of extends Lt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!qo(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ts(this.value.arrayValue,r))}}/**
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
 */class Lf{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function hl(n,t=null,e=[],r=[],s=null,o=null,a=null){return new Lf(n,t,e,r,s,o,a)}function $o(n){const t=W(n);if(t.Te===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Eo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),Ci(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>Vr(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>Vr(r)).join(",")),t.Te=e}return t.Te}function jo(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Cf(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!xc(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!ul(n.startAt,t.startAt)&&ul(n.endAt,t.endAt)}function To(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Xn{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Ff(n,t,e,r,s,o,a,u){return new Xn(n,t,e,r,s,o,a,u)}function Mc(n){return new Xn(n)}function dl(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Uf(n){return $.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function zo(n){return n.collectionGroup!==null}function Ir(n){const t=W(n);if(t.Ie===null){t.Ie=[];const e=new Set;for(const o of t.explicitOrderBy)t.Ie.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new qt(Wt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.Ie.push(new ws(o,r))}),e.has(Wt.keyField().canonicalString())||t.Ie.push(new ws(Wt.keyField(),r))}return t.Ie}function Be(n){const t=W(n);return t.Ee||(t.Ee=Bf(t,Ir(n))),t.Ee}function Bf(n,t){if(n.limitType==="F")return hl(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new ws(s.field,o)});const e=n.endAt?new Dr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Dr(n.startAt.position,n.startAt.inclusive):null;return hl(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function wo(n,t){const e=n.filters.concat([t]);return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function qf(n,t){const e=n.explicitOrderBy.concat([t]);return new Xn(n.path,n.collectionGroup,e,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function vi(n,t,e){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function $f(n,t){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,t,n.endAt)}function Di(n,t){return jo(Be(n),Be(t))&&n.limitType===t.limitType}function Oc(n){return`${$o(Be(n))}|lt:${n.limitType}`}function vr(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>kc(s)).join(", ")}]`),Ci(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>Vr(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>Vr(s)).join(",")),`Target(${r})`}(Be(n))}; limitType=${n.limitType})`}function xi(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):$.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Ir(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=cl(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Ir(r),s)||r.endAt&&!function(a,u,h){const d=cl(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Ir(r),s))}(n,t)}function jf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lc(n){return(t,e)=>{let r=!1;for(const s of Ir(n)){const o=zf(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function zf(n,t,e){const r=n.field.isKeyField()?$.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?Pr(h,d):H(42886)}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H(19790,{direction:n.dir})}}/**
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
 */class Jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Yn(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return Ec(this.inner)}size(){return this.innerSize}}/**
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
 */const Hf=new It($.comparator);function tn(){return Hf}const Fc=new It($.comparator);function cs(...n){let t=Fc;for(const e of n)t=t.insert(e.key,e);return t}function Uc(n){let t=Fc;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Hn(){return fs()}function Bc(){return fs()}function fs(){return new Jn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Gf=new It($.comparator),Kf=new qt($.comparator);function Z(...n){let t=Kf;for(const e of n)t=t.add(e);return t}const Wf=new qt(J);function Qf(){return Wf}/**
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
 */function Ho(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pi(t)?"-0":t}}function qc(n){return{integerValue:""+n}}function Yf(n,t){return vf(t)?qc(t):Ho(n,t)}/**
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
 */class ki{constructor(){this._=void 0}}function Xf(n,t,e){return n instanceof Is?function(s,o){const a={fields:{[Ic]:{stringValue:wc},[bc]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Pi(o)&&(o=Vi(o)),o&&(a.fields[Ac]=o),{mapValue:a}}(e,t):n instanceof As?jc(n,t):n instanceof bs?zc(n,t):function(s,o){const a=$c(s,o),u=fl(a)+fl(s.Ae);return vo(a)&&vo(s.Ae)?qc(u):Ho(s.serializer,u)}(n,t)}function Jf(n,t,e){return n instanceof As?jc(n,t):n instanceof bs?zc(n,t):e}function $c(n,t){return n instanceof Ei?function(r){return vo(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Is extends ki{}class As extends ki{constructor(t){super(),this.elements=t}}function jc(n,t){const e=Hc(t);for(const r of n.elements)e.some(s=>je(s,r))||e.push(r);return{arrayValue:{values:e}}}class bs extends ki{constructor(t){super(),this.elements=t}}function zc(n,t){let e=Hc(t);for(const r of n.elements)e=e.filter(s=>!je(s,r));return{arrayValue:{values:e}}}class Ei extends ki{constructor(t,e){super(),this.serializer=t,this.Ae=e}}function fl(n){return xt(n.integerValue||n.doubleValue)}function Hc(n){return qo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Zf{constructor(t,e){this.field=t,this.transform=e}}function tm(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof As&&s instanceof As||r instanceof bs&&s instanceof bs?Cr(r.elements,s.elements,je):r instanceof Ei&&s instanceof Ei?je(r.Ae,s.Ae):r instanceof Is&&s instanceof Is}(n.transform,t.transform)}class em{constructor(t,e){this.version=t,this.transformResults=e}}class Xe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xe}static exists(t){return new Xe(void 0,t)}static updateTime(t){return new Xe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function li(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Ni{}function Gc(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Wc(n.key,Xe.none()):new Ss(n.key,n.data,Xe.none());{const e=n.data,r=me.empty();let s=new qt(Wt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new Zn(n.key,r,new be(s.toArray()),Xe.none())}}function nm(n,t,e){n instanceof Ss?function(s,o,a){const u=s.value.clone(),h=pl(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof Zn?function(s,o,a){if(!li(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=pl(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Kc(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function ms(n,t,e,r){return n instanceof Ss?function(o,a,u,h){if(!li(o.precondition,a))return u;const d=o.value.clone(),m=gl(o.fieldTransforms,h,a);return d.setAll(m),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof Zn?function(o,a,u,h){if(!li(o.precondition,a))return u;const d=gl(o.fieldTransforms,h,a),m=a.data;return m.setAll(Kc(o)),m.setAll(d),a.convertToFoundDocument(a.version,m).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(T=>T.field))}(n,t,e,r):function(o,a,u){return li(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function rm(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=$c(r.transform,s||null);o!=null&&(e===null&&(e=me.empty()),e.set(r.field,o))}return e||null}function ml(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Cr(r,s,(o,a)=>tm(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Ss extends Ni{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zn extends Ni{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Kc(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function pl(n,t,e){const r=new Map;ct(n.length===e.length,32656,{Ve:e.length,de:n.length});for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Jf(a,u,e[s]))}return r}function gl(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Xf(o,a,t))}return r}class Wc extends Ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sm extends Ni{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class im{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&nm(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ms(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ms(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Bc();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Gc(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&Cr(this.mutations,t.mutations,(e,r)=>ml(e,r))&&Cr(this.baseMutations,t.baseMutations,(e,r)=>ml(e,r))}}class Go{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){ct(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let s=function(){return Gf}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Go(t,e,r,s)}}/**
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
 */class om{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class am{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var Ot,nt;function lm(n){switch(n){case P.OK:return H(64938);case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0;default:return H(15467,{code:n})}}function Qc(n){if(n===void 0)return Ze("GRPC error has no .code"),P.UNKNOWN;switch(n){case Ot.OK:return P.OK;case Ot.CANCELLED:return P.CANCELLED;case Ot.UNKNOWN:return P.UNKNOWN;case Ot.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case Ot.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case Ot.INTERNAL:return P.INTERNAL;case Ot.UNAVAILABLE:return P.UNAVAILABLE;case Ot.UNAUTHENTICATED:return P.UNAUTHENTICATED;case Ot.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case Ot.NOT_FOUND:return P.NOT_FOUND;case Ot.ALREADY_EXISTS:return P.ALREADY_EXISTS;case Ot.PERMISSION_DENIED:return P.PERMISSION_DENIED;case Ot.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case Ot.ABORTED:return P.ABORTED;case Ot.OUT_OF_RANGE:return P.OUT_OF_RANGE;case Ot.UNIMPLEMENTED:return P.UNIMPLEMENTED;case Ot.DATA_LOSS:return P.DATA_LOSS;default:return H(39323,{code:n})}}(nt=Ot||(Ot={}))[nt.OK=0]="OK",nt[nt.CANCELLED=1]="CANCELLED",nt[nt.UNKNOWN=2]="UNKNOWN",nt[nt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",nt[nt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",nt[nt.NOT_FOUND=5]="NOT_FOUND",nt[nt.ALREADY_EXISTS=6]="ALREADY_EXISTS",nt[nt.PERMISSION_DENIED=7]="PERMISSION_DENIED",nt[nt.UNAUTHENTICATED=16]="UNAUTHENTICATED",nt[nt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",nt[nt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",nt[nt.ABORTED=10]="ABORTED",nt[nt.OUT_OF_RANGE=11]="OUT_OF_RANGE",nt[nt.UNIMPLEMENTED=12]="UNIMPLEMENTED",nt[nt.INTERNAL=13]="INTERNAL",nt[nt.UNAVAILABLE=14]="UNAVAILABLE",nt[nt.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function cm(){return new TextEncoder}/**
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
 */const um=new wn([4294967295,4294967295],0);function _l(n){const t=cm().encode(n),e=new cc;return e.update(t),new Uint8Array(e.digest())}function yl(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new wn([e,r],0),new wn([s,o],0)]}class Ko{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new us(`Invalid padding: ${e}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new us(`Invalid padding when bitmap length is 0: ${e}`);this.ge=8*t.length-e,this.pe=wn.fromNumber(this.ge)}ye(t,e,r){let s=t.add(e.multiply(wn.fromNumber(r)));return s.compare(um)===1&&(s=new wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const e=_l(t),[r,s]=yl(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);if(!this.we(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Ko(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.ge===0)return;const e=_l(t),[r,s]=yl(e);for(let o=0;o<this.hashCount;o++){const a=this.ye(r,s,o);this.be(a)}}be(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Mi{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Cs.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Mi(K.min(),s,new It(J),tn(),Z())}}class Cs{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Cs(r,e,Z(),Z(),Z())}}/**
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
 */class ci{constructor(t,e,r,s){this.Se=t,this.removedTargetIds=e,this.key=r,this.De=s}}class Yc{constructor(t,e){this.targetId=t,this.Ce=e}}class Xc{constructor(t,e,r=Qt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class vl{constructor(){this.ve=0,this.Fe=El(),this.Me=Qt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Z(),e=Z(),r=Z();return this.Fe.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:H(38017,{changeType:o})}}),new Cs(this.Me,this.xe,t,e,r)}Ke(){this.Oe=!1,this.Fe=El()}qe(t,e){this.Oe=!0,this.Fe=this.Fe.insert(t,e)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,ct(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class hm{constructor(t){this.Ge=t,this.ze=new Map,this.je=tn(),this.He=ei(),this.Je=ei(),this.Ze=new It(J)}Xe(t){for(const e of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(e,t.De):this.et(e,t.key,t.De);for(const e of t.removedTargetIds)this.et(e,t.key,t.De)}tt(t){this.forEachTarget(t,e=>{const r=this.nt(e);switch(t.state){case 0:this.rt(e)&&r.Le(t.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(t.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(e);break;case 3:this.rt(e)&&(r.Qe(),r.Le(t.resumeToken));break;case 4:this.rt(e)&&(this.it(e),r.Le(t.resumeToken));break;default:H(56790,{state:t.state})}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ze.forEach((r,s)=>{this.rt(s)&&e(s)})}st(t){const e=t.targetId,r=t.Ce.count,s=this.ot(e);if(s){const o=s.target;if(To(o))if(r===0){const a=new $(o.path);this.et(e,a,ne.newNoDocument(a,K.min()))}else ct(r===1,20013,{expectedCount:r});else{const a=this._t(e);if(a!==r){const u=this.ut(t),h=u?this.ct(u,t,a):1;if(h!==0){this.it(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(e,d)}}}}}ut(t){const e=t.Ce.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=Sn(r).toUint8Array()}catch(h){if(h instanceof Tc)return Wn("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Ko(a,s,o)}catch(h){return Wn(h instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(t,e,r){return e.Ce.count===r-this.Pt(t,e.targetId)?0:2}Pt(t,e){const r=this.Ge.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.et(e,o,null),s++)}),s}Tt(t){const e=new Map;this.ze.forEach((o,a)=>{const u=this.ot(a);if(u){if(o.current&&To(u.target)){const h=new $(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ne.newNoDocument(h,t))}o.Be&&(e.set(a,o.ke()),o.Ke())}});let r=Z();this.Je.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.je.forEach((o,a)=>a.setReadTime(t));const s=new Mi(t,e,this.Ze,this.je,r);return this.je=tn(),this.He=ei(),this.Je=ei(),this.Ze=new It(J),s}Ye(t,e){if(!this.rt(t))return;const r=this.Et(t,e.key)?2:0;this.nt(t).qe(e.key,r),this.je=this.je.insert(e.key,e),this.He=this.He.insert(e.key,this.It(e.key).add(t)),this.Je=this.Je.insert(e.key,this.Rt(e.key).add(t))}et(t,e,r){if(!this.rt(t))return;const s=this.nt(t);this.Et(t,e)?s.qe(e,1):s.Ue(e),this.Je=this.Je.insert(e,this.Rt(e).delete(t)),this.Je=this.Je.insert(e,this.Rt(e).add(t)),r&&(this.je=this.je.insert(e,r))}removeTarget(t){this.ze.delete(t)}_t(t){const e=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let e=this.ze.get(t);return e||(e=new vl,this.ze.set(t,e)),e}Rt(t){let e=this.Je.get(t);return e||(e=new qt(J),this.Je=this.Je.insert(t,e)),e}It(t){let e=this.He.get(t);return e||(e=new qt(J),this.He=this.He.insert(t,e)),e}rt(t){const e=this.ot(t)!==null;return e||U("WatchChangeAggregator","Detected inactive target",t),e}ot(t){const e=this.ze.get(t);return e&&e.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new vl),this.Ge.getRemoteKeysForTarget(t).forEach(e=>{this.et(t,e,null)})}Et(t,e){return this.Ge.getRemoteKeysForTarget(t).has(e)}}function ei(){return new It($.comparator)}function El(){return new It($.comparator)}const dm={asc:"ASCENDING",desc:"DESCENDING"},fm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},mm={and:"AND",or:"OR"};class pm{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Io(n,t){return n.useProto3Json||Ci(t)?t:{value:t}}function Ti(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Jc(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function gm(n,t){return Ti(n,t.toTimestamp())}function qe(n){return ct(!!n,49232),K.fromTimestamp(function(e){const r=Rn(e);return new vt(r.seconds,r.nanos)}(n))}function Wo(n,t){return Ao(n,t).canonicalString()}function Ao(n,t){const e=function(s){return new pt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Zc(n){const t=pt.fromString(n);return ct(su(t),10190,{key:t.toString()}),t}function bo(n,t){return Wo(n.databaseId,t.path)}function so(n,t){const e=Zc(t);if(e.get(1)!==n.databaseId.projectId)throw new F(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new F(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new $(eu(e))}function tu(n,t){return Wo(n.databaseId,t)}function _m(n){const t=Zc(n);return t.length===4?pt.emptyPath():eu(t)}function Ro(n){return new pt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function eu(n){return ct(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Tl(n,t,e){return{name:bo(n,t),fields:e.value.mapValue.fields}}function ym(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H(39313,{state:d})}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,m){return d.useProto3Json?(ct(m===void 0||typeof m=="string",58123),Qt.fromBase64String(m||"")):(ct(m===void 0||m instanceof Buffer||m instanceof Uint8Array,16193),Qt.fromUint8Array(m||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const m=d.code===void 0?P.UNKNOWN:Qc(d.code);return new F(m,d.message||"")}(a);e=new Xc(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=so(n,r.document.name),o=qe(r.document.updateTime),a=r.document.createTime?qe(r.document.createTime):K.min(),u=new me({mapValue:{fields:r.document.fields}}),h=ne.newFoundDocument(s,o,a,u),d=r.targetIds||[],m=r.removedTargetIds||[];e=new ci(d,m,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=so(n,r.document),o=r.readTime?qe(r.readTime):K.min(),a=ne.newNoDocument(s,o),u=r.removedTargetIds||[];e=new ci([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=so(n,r.document),o=r.removedTargetIds||[];e=new ci([],o,s,null)}else{if(!("filter"in t))return H(11601,{Vt:t});{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new am(s,o),u=r.targetId;e=new Yc(u,a)}}return e}function vm(n,t){let e;if(t instanceof Ss)e={update:Tl(n,t.key,t.value)};else if(t instanceof Wc)e={delete:bo(n,t.key)};else if(t instanceof Zn)e={update:Tl(n,t.key,t.data),updateMask:Cm(t.fieldMask)};else{if(!(t instanceof sm))return H(16599,{dt:t.type});e={verify:bo(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Is)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof As)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof bs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Ei)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw H(20930,{transform:a.transform})}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:gm(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:H(27497)}(n,t.precondition)),e}function Em(n,t){return n&&n.length>0?(ct(t!==void 0,14353),n.map(e=>function(s,o){let a=s.updateTime?qe(s.updateTime):qe(o);return a.isEqual(K.min())&&(a=qe(o)),new em(a,s.transformResults||[])}(e,t))):[]}function Tm(n,t){return{documents:[tu(n,t.path)]}}function wm(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=tu(n,s);const o=function(d){if(d.length!==0)return ru(Se.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(m=>function(A){return{field:Er(A.field),direction:bm(A.dir)}}(m))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Io(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{ft:e,parent:s}}function Im(n){let t=_m(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){ct(r===1,65062);const m=e.from[0];m.allDescendants?s=m.collectionId:t=t.child(m.collectionId)}let o=[];e.where&&(o=function(T){const A=nu(T);return A instanceof Se&&Dc(A)?A.getFilters():[A]}(e.where));let a=[];e.orderBy&&(a=function(T){return T.map(A=>function(O){return new ws(Tr(O.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(O.direction))}(A))}(e.orderBy));let u=null;e.limit&&(u=function(T){let A;return A=typeof T=="object"?T.value:T,Ci(A)?null:A}(e.limit));let h=null;e.startAt&&(h=function(T){const A=!!T.before,C=T.values||[];return new Dr(C,A)}(e.startAt));let d=null;return e.endAt&&(d=function(T){const A=!T.before,C=T.values||[];return new Dr(C,A)}(e.endAt)),Ff(t,s,a,o,u,"F",h,d)}function Am(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H(28987,{purpose:s})}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Tr(e.unaryFilter.field);return Lt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Tr(e.unaryFilter.field);return Lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Tr(e.unaryFilter.field);return Lt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Tr(e.unaryFilter.field);return Lt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return H(61313);default:return H(60726)}}(n):n.fieldFilter!==void 0?function(e){return Lt.create(Tr(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return H(58110);default:return H(50506)}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Se.create(e.compositeFilter.filters.map(r=>nu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H(1026)}}(e.compositeFilter.op))}(n):H(30097,{filter:n})}function bm(n){return dm[n]}function Rm(n){return fm[n]}function Sm(n){return mm[n]}function Er(n){return{fieldPath:n.canonicalString()}}function Tr(n){return Wt.fromServerFormat(n.fieldPath)}function ru(n){return n instanceof Lt?function(e){if(e.op==="=="){if(ll(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NAN"}};if(al(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(ll(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NOT_NAN"}};if(al(e.value))return{unaryFilter:{field:Er(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Er(e.field),op:Rm(e.op),value:e.value}}}(n):n instanceof Se?function(e){const r=e.getFilters().map(s=>ru(s));return r.length===1?r[0]:{compositeFilter:{op:Sm(e.op),filters:r}}}(n):H(54877,{filter:n})}function Cm(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function su(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function iu(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}/**
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
 */class vn{constructor(t,e,r,s,o=K.min(),a=K.min(),u=Qt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new vn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new vn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Pm{constructor(t){this.yt=t}}function Vm(n){const t=Im({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?vi(t,t.limit,"L"):t}/**
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
 */class Dm{constructor(){this.Sn=new xm}addToCollectionParentIndex(t,e){return this.Sn.add(e),D.resolve()}getCollectionParents(t,e){return D.resolve(this.Sn.getEntries(e))}addFieldIndex(t,e){return D.resolve()}deleteFieldIndex(t,e){return D.resolve()}deleteAllFieldIndexes(t){return D.resolve()}createTargetIndexes(t,e){return D.resolve()}getDocumentsMatchingTarget(t,e){return D.resolve(null)}getIndexType(t,e){return D.resolve(0)}getFieldIndexes(t,e){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,e){return D.resolve(bn.min())}getMinOffsetFromCollectionGroup(t,e){return D.resolve(bn.min())}updateCollectionGroup(t,e,r){return D.resolve()}updateIndexEntries(t,e){return D.resolve()}}class xm{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new qt(pt.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new qt(pt.comparator)).toArray()}}/**
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
 */const wl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ou=41943040;class le{static withCacheSize(t){return new le(t,le.DEFAULT_COLLECTION_PERCENTILE,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=r}}/**
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
 */le.DEFAULT_COLLECTION_PERCENTILE=10,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,le.DEFAULT=new le(ou,le.DEFAULT_COLLECTION_PERCENTILE,le.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),le.DISABLED=new le(-1,0,0);/**
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
 */class xr{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new xr(0)}static ar(){return new xr(-1)}}/**
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
 */const Il="LruGarbageCollector",km=1048576;function Al([n,t],[e,r]){const s=J(n,e);return s===0?J(t,r):s}class Nm{constructor(t){this.Pr=t,this.buffer=new qt(Al),this.Tr=0}Ir(){return++this.Tr}Er(t){const e=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(e);else{const r=this.buffer.last();Al(e,r)<0&&(this.buffer=this.buffer.delete(r).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Mm{constructor(t,e,r){this.garbageCollector=t,this.asyncQueue=e,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){U(Il,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Lr(e)?U(Il,"Ignoring IndexedDB error during garbage collection: ",e):await Or(e)}await this.Ar(3e5)})}}class Om{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.dr(t).next(r=>Math.floor(e/100*r))}nthSequenceNumber(t,e){if(e===0)return D.resolve(Si.ce);const r=new Nm(e);return this.Vr.forEachTarget(t,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.mr(t,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(t,e,r){return this.Vr.removeTargets(t,e,r)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(wl)):this.getCacheSize(t).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wl):this.gr(t,e))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,e){let r,s,o,a,u,h,d;const m=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,a=Date.now(),this.nthSequenceNumber(t,s))).next(T=>(r=T,u=Date.now(),this.removeTargets(t,r,e))).next(T=>(o=T,h=Date.now(),this.removeOrphanedDocuments(t,r))).next(T=>(d=Date.now(),yr()<=rt.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-m}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${T} documents in `+(d-h)+`ms
Total Duration: ${d-m}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:T})))}}function Lm(n,t){return new Om(n,t)}/**
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
 */class Fm{constructor(){this.changes=new Jn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,ne.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?D.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class Um{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class Bm{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&ms(r.mutation,s,be.empty(),vt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const s=Hn();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=cs();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Hn();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=tn();const a=fs(),u=function(){return fs()}();return e.forEach((h,d)=>{const m=r.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof Zn)?o=o.insert(d.key,d):m!==void 0?(a.set(d.key,m.mutation.getFieldMask()),ms(m.mutation,d,m.mutation.getFieldMask(),vt.now())):a.set(d.key,be.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,m)=>a.set(d,m)),e.forEach((d,m)=>u.set(d,new Um(m,a.get(d)??null))),u))}recalculateAndSaveOverlays(t,e){const r=fs();let s=new It((a,u)=>a-u),o=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let m=r.get(h)||be.empty();m=u.applyToLocalView(d,m),r.set(h,m);const T=(s.get(u.batchId)||Z()).add(h);s=s.insert(u.batchId,T)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,m=h.value,T=Bc();m.forEach(A=>{if(!o.has(A)){const C=Gc(e.get(A),r.get(A));C!==null&&T.set(A,C),o=o.add(A)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,T))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return Uf(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):zo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):D.resolve(Hn());let u=ys,h=o;return a.next(d=>D.forEach(d,(m,T)=>(u<T.largestBatchId&&(u=T.largestBatchId),o.get(m)?D.resolve():this.remoteDocumentCache.getEntry(t,m).next(A=>{h=h.insert(m,A)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,Z())).next(m=>({batchId:u,changes:Uc(m)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new $(e)).next(r=>{let s=cs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=cs();return this.indexManager.getCollectionParents(t,o).next(u=>D.forEach(u,h=>{const d=function(T,A){return new Xn(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(m=>{m.forEach((T,A)=>{a=a.insert(T,A)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const m=d.getKey();a.get(m)===null&&(a=a.insert(m,ne.newInvalidDocument(m)))});let u=cs();return a.forEach((h,d)=>{const m=o.get(h);m!==void 0&&ms(m.mutation,d,be.empty(),vt.now()),xi(e,d)&&(u=u.insert(h,d))}),u})}}/**
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
 */class qm{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,e){return D.resolve(this.Nr.get(e))}saveBundleMetadata(t,e){return this.Nr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:qe(s.createTime)}}(e)),D.resolve()}getNamedQuery(t,e){return D.resolve(this.Br.get(e))}saveNamedQuery(t,e){return this.Br.set(e.name,function(s){return{name:s.name,query:Vm(s.bundledQuery),readTime:qe(s.readTime)}}(e)),D.resolve()}}/**
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
 */class $m{constructor(){this.overlays=new It($.comparator),this.Lr=new Map}getOverlay(t,e){return D.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Hn();return D.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.bt(t,e,o)}),D.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.Lr.delete(r)),D.resolve()}getOverlaysForCollection(t,e,r){const s=Hn(),o=e.length+1,a=new $(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return D.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new It((d,m)=>d-m);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let m=o.get(d.largestBatchId);m===null&&(m=Hn(),o=o.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const u=Hn(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,m)=>u.set(d,m)),!(u.size()>=s)););return D.resolve(u)}bt(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new om(e,r));let o=this.Lr.get(e);o===void 0&&(o=Z(),this.Lr.set(e,o)),this.Lr.set(e,o.add(r.key))}}/**
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
 */class jm{constructor(){this.sessionToken=Qt.EMPTY_BYTE_STRING}getSessionToken(t){return D.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,D.resolve()}}/**
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
 */class Qo{constructor(){this.kr=new qt(Ht.Kr),this.qr=new qt(Ht.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,e){const r=new Ht(t,e);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Wr(new Ht(t,e))}Qr(t,e){t.forEach(r=>this.removeReference(r,e))}Gr(t){const e=new $(new pt([])),r=new Ht(e,t),s=new Ht(e,t+1),o=[];return this.qr.forEachInRange([r,s],a=>{this.Wr(a),o.push(a.key)}),o}zr(){this.kr.forEach(t=>this.Wr(t))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const e=new $(new pt([])),r=new Ht(e,t),s=new Ht(e,t+1);let o=Z();return this.qr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new Ht(t,0),r=this.kr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Ht{constructor(t,e){this.key=t,this.Hr=e}static Kr(t,e){return $.comparator(t.key,e.key)||J(t.Hr,e.Hr)}static Ur(t,e){return J(t.Hr,e.Hr)||$.comparator(t.key,e.key)}}/**
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
 */class zm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Yn=1,this.Jr=new qt(Ht.Kr)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new im(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.Jr=this.Jr.add(new Ht(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return D.resolve(a)}lookupMutationBatch(t,e){return D.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.Xr(r),o=s<0?0:s;return D.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?Bo:this.Yn-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Ht(e,0),s=new Ht(e,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([r,s],a=>{const u=this.Zr(a.Hr);o.push(u)}),D.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new qt(J);return e.forEach(s=>{const o=new Ht(s,0),a=new Ht(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],u=>{r=r.add(u.Hr)})}),D.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;$.isDocumentKey(o)||(o=o.child(""));const a=new Ht(new $(o),0);let u=new qt(J);return this.Jr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)},a),D.resolve(this.Yr(u))}Yr(t){const e=[];return t.forEach(r=>{const s=this.Zr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){ct(this.ei(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return D.forEach(e.mutations,s=>{const o=new Ht(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.Jr=r})}nr(t){}containsKey(t,e){const r=new Ht(e,0),s=this.Jr.firstAfterOrEqual(r);return D.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}ei(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class Hm{constructor(t){this.ti=t,this.docs=function(){return new It($.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.ti(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return D.resolve(r?r.document.mutableCopy():ne.newInvalidDocument(e))}getEntries(t,e){let r=tn();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():ne.newInvalidDocument(s))}),D.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=tn();const a=e.path,u=new $(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:m}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||pf(mf(m),r)<=0||(s.has(m.key)||xi(e,m))&&(o=o.insert(m.key,m.mutableCopy()))}return D.resolve(o)}getAllFromCollectionGroup(t,e,r,s){H(9500)}ni(t,e){return D.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new Gm(this)}getSize(t){return D.resolve(this.size)}}class Gm extends Fm{constructor(t){super(),this.Mr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.Mr.addEntry(t,s)):this.Mr.removeEntry(r)}),D.waitFor(e)}getFromCache(t,e){return this.Mr.getEntry(t,e)}getAllFromCache(t,e){return this.Mr.getEntries(t,e)}}/**
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
 */class Km{constructor(t){this.persistence=t,this.ri=new Jn(e=>$o(e),jo),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.ii=0,this.si=new Qo,this.targetCount=0,this.oi=xr._r()}forEachTarget(t,e){return this.ri.forEach((r,s)=>e(s)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.ii&&(this.ii=e),D.resolve()}lr(t){this.ri.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.oi=new xr(e),this.highestTargetId=e),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,e){return this.lr(e),this.targetCount+=1,D.resolve()}updateTargetData(t,e){return this.lr(e),D.resolve()}removeTargetData(t,e){return this.ri.delete(e.target),this.si.Gr(e.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.ri.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),D.waitFor(o).next(()=>s)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,e){const r=this.ri.get(e)||null;return D.resolve(r)}addMatchingKeys(t,e,r){return this.si.$r(e,r),D.resolve()}removeMatchingKeys(t,e,r){this.si.Qr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),D.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.si.Gr(e),D.resolve()}getMatchingKeysForTargetId(t,e){const r=this.si.jr(e);return D.resolve(r)}containsKey(t,e){return D.resolve(this.si.containsKey(e))}}/**
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
 */class au{constructor(t,e){this._i={},this.overlays={},this.ai=new Si(0),this.ui=!1,this.ui=!0,this.ci=new jm,this.referenceDelegate=t(this),this.li=new Km(this),this.indexManager=new Dm,this.remoteDocumentCache=function(s){return new Hm(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new Pm(e),this.Pi=new qm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new $m,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this._i[t.toKey()];return r||(r=new zm(e,this.referenceDelegate),this._i[t.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,e,r){U("MemoryPersistence","Starting transaction:",t);const s=new Wm(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(o=>this.referenceDelegate.Ii(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Ei(t,e){return D.or(Object.values(this._i).map(r=>()=>r.containsKey(t,e)))}}class Wm extends _f{constructor(t){super(),this.currentSequenceNumber=t}}class Yo{constructor(t){this.persistence=t,this.Ri=new Qo,this.Ai=null}static Vi(t){return new Yo(t)}get di(){if(this.Ai)return this.Ai;throw H(60996)}addReference(t,e,r){return this.Ri.addReference(r,e),this.di.delete(r.toString()),D.resolve()}removeReference(t,e,r){return this.Ri.removeReference(r,e),this.di.add(r.toString()),D.resolve()}markPotentiallyOrphaned(t,e){return this.di.add(e.toString()),D.resolve()}removeTarget(t,e){this.Ri.Gr(e.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.di.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ti(){this.Ai=new Set}Ii(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.di,r=>{const s=$.fromPath(r);return this.mi(t,s).next(o=>{o||e.removeEntry(s,K.min())})}).next(()=>(this.Ai=null,e.apply(t)))}updateLimboDocument(t,e){return this.mi(t,e).next(r=>{r?this.di.delete(e.toString()):this.di.add(e.toString())})}hi(t){return 0}mi(t,e){return D.or([()=>D.resolve(this.Ri.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class wi{constructor(t,e){this.persistence=t,this.fi=new Jn(r=>Ef(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Lm(this,e)}static Vi(t,e){return new wi(t,e)}Ti(){}Ii(t){return D.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}dr(t){const e=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next(r=>e.next(s=>r+s))}pr(t){let e=0;return this.mr(t,r=>{e++}).next(()=>e)}mr(t,e){return D.forEach(this.fi,(r,s)=>this.wr(t,r,s).next(o=>o?D.resolve():e(s)))}removeTargets(t,e,r){return this.persistence.getTargetCache().removeTargets(t,e,r)}removeOrphanedDocuments(t,e){let r=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(t,a=>this.wr(t,a,e).next(u=>{u||(r++,o.removeEntry(a,K.min()))})).next(()=>o.apply(t)).next(()=>r)}markPotentiallyOrphaned(t,e){return this.fi.set(e,t.currentSequenceNumber),D.resolve()}removeTarget(t,e){const r=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),D.resolve()}removeReference(t,e,r){return this.fi.set(r,t.currentSequenceNumber),D.resolve()}updateLimboDocument(t,e){return this.fi.set(e,t.currentSequenceNumber),D.resolve()}hi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=oi(t.data.value)),e}wr(t,e,r){return D.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.fi.get(e);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class Xo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.Ts=r,this.Is=s}static Es(t,e){let r=Z(),s=Z();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Xo(t,e.fromCache,r,s)}}/**
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
 */class Qm{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class Ym{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return kh()?8:yf(Dh())>0?6:4}()}initialize(t,e){this.fs=t,this.indexManager=e,this.Rs=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.gs(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.ps(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new Qm;return this.ys(t,e,a).next(u=>{if(o.result=u,this.As)return this.ws(t,e,a,u.size)})}).next(()=>o.result)}ws(t,e,r,s){return r.documentReadCount<this.Vs?(yr()<=rt.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",vr(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(yr()<=rt.DEBUG&&U("QueryEngine","Query:",vr(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(yr()<=rt.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",vr(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Be(e))):D.resolve())}gs(t,e){if(dl(e))return D.resolve(null);let r=Be(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=vi(e,null,"F"),r=Be(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=Z(...o);return this.fs.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.bs(e,u);return this.Ss(e,d,a,h.readTime)?this.gs(t,vi(e,null,"F")):this.Ds(t,d,e,h)}))})))}ps(t,e,r,s){return dl(e)||s.isEqual(K.min())?D.resolve(null):this.fs.getDocuments(t,r).next(o=>{const a=this.bs(e,o);return this.Ss(e,a,r,s)?D.resolve(null):(yr()<=rt.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vr(e)),this.Ds(t,a,e,ff(s,ys)).next(u=>u))})}bs(t,e){let r=new qt(Lc(t));return e.forEach((s,o)=>{xi(t,o)&&(r=r.add(o))}),r}Ss(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(t,e,r){return yr()<=rt.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",vr(e)),this.fs.getDocumentsMatchingQuery(t,e,bn.min(),r)}Ds(t,e,r,s){return this.fs.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
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
 */const Jo="LocalStore",Xm=3e8;class Jm{constructor(t,e,r,s){this.persistence=t,this.Cs=e,this.serializer=s,this.vs=new It(J),this.Fs=new Jn(o=>$o(o),jo),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(r)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Bm(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.vs))}}function Zm(n,t,e,r){return new Jm(n,t,e,r)}async function lu(n,t){const e=W(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e.Os(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=Z();for(const d of s){a.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of o){u.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return e.localDocuments.getDocuments(r,h).next(d=>({Ns:d,removedBatchIds:a,addedBatchIds:u}))})})}function tp(n,t){const e=W(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.xs.newChangeBuffer({trackRemovals:!0});return function(u,h,d,m){const T=d.batch,A=T.keys();let C=D.resolve();return A.forEach(O=>{C=C.next(()=>m.getEntry(h,O)).next(L=>{const M=d.docVersions.get(O);ct(M!==null,48541),L.version.compareTo(M)<0&&(T.applyToRemoteDocument(L,d),L.isValidDocument()&&(L.setReadTime(d.commitVersion),m.addEntry(L)))})}),C.next(()=>u.mutationQueue.removeMutationBatch(h,T))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function cu(n){const t=W(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.li.getLastRemoteSnapshotVersion(e))}function ep(n,t){const e=W(n),r=t.snapshotVersion;let s=e.vs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.xs.newChangeBuffer({trackRemovals:!0});s=e.vs;const u=[];t.targetChanges.forEach((m,T)=>{const A=s.get(T);if(!A)return;u.push(e.li.removeMatchingKeys(o,m.removedDocuments,T).next(()=>e.li.addMatchingKeys(o,m.addedDocuments,T)));let C=A.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(T)!==null?C=C.withResumeToken(Qt.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):m.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(m.resumeToken,r)),s=s.insert(T,C),function(L,M,Q){return L.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=Xm?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0}(A,C,m)&&u.push(e.li.updateTargetData(o,C))});let h=tn(),d=Z();if(t.documentUpdates.forEach(m=>{t.resolvedLimboDocuments.has(m)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,m))}),u.push(np(o,a,t.documentUpdates).next(m=>{h=m.Bs,d=m.Ls})),!r.isEqual(K.min())){const m=e.li.getLastRemoteSnapshotVersion(o).next(T=>e.li.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(m)}return D.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.vs=s,o))}function np(n,t,e){let r=Z(),s=Z();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=tn();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(K.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):U(Jo,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{Bs:a,Ls:s}})}function rp(n,t){const e=W(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=Bo),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function sp(n,t){const e=W(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.li.getTargetData(r,t).next(o=>o?(s=o,D.resolve(s)):e.li.allocateTargetId(r).next(a=>(s=new vn(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.vs=e.vs.insert(r.targetId,r),e.Fs.set(t,r.targetId)),r})}async function So(n,t,e){const r=W(n),s=r.vs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!Lr(a))throw a;U(Jo,`Failed to update sequence numbers for target ${t}: ${a}`)}r.vs=r.vs.remove(t),r.Fs.delete(s.target)}function bl(n,t,e){const r=W(n);let s=K.min(),o=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,m){const T=W(h),A=T.Fs.get(m);return A!==void 0?D.resolve(T.vs.get(A)):T.li.getTargetData(d,m)}(r,a,Be(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,t,e?s:K.min(),e?o:Z())).next(u=>(ip(r,jf(t),u),{documents:u,ks:o})))}function ip(n,t,e){let r=n.Ms.get(t)||K.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.Ms.set(t,r)}class Rl{constructor(){this.activeTargetIds=Qf()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class op{constructor(){this.vo=new Rl,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,e,r){this.Fo[t]=e}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new Rl,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class ap{Mo(t){}shutdown(){}}/**
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
 */const Sl="ConnectivityMonitor";class Cl{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(Sl,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){U(Sl,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ni=null;function Co(){return ni===null?ni=function(){return 268435456+Math.round(2147483648*Math.random())}():ni++,"0x"+ni.toString(16)}/**
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
 */const io="RestConnection",lp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class cp{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=e+"://"+t.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===gi?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(t,e,r,s,o){const a=Co(),u=this.Qo(t,e.toUriEncodedString());U(io,`Sending RPC '${t}' ${a}:`,u,r);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),m=Oo(d);return this.zo(t,u,h,r,m).then(T=>(U(io,`Received RPC '${t}' ${a}: `,T),T),T=>{throw Wn(io,`RPC '${t}' ${a} failed with error: `,T,"url: ",u,"request:",r),T})}jo(t,e,r,s,o,a){return this.Wo(t,e,r,s,o)}Go(t,e,r){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((s,o)=>t[o]=s),r&&r.headers.forEach((s,o)=>t[o]=s)}Qo(t,e){const r=lp[t];let s=`${this.qo}/v1/${e}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
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
 */class up{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
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
 */const Jt="WebChannelConnection",os=(n,t,e)=>{n.listen(t,r=>{try{e(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Ar extends cp{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!Ar.c_){const t=fc();os(t,dc.STAT_EVENT,e=>{e.stat===go.PROXY?U(Jt,"STAT_EVENT: detected buffering proxy"):e.stat===go.NOPROXY&&U(Jt,"STAT_EVENT: detected no buffering proxy")}),Ar.c_=!0}}zo(t,e,r,s,o){const a=Co();return new Promise((u,h)=>{const d=new uc;d.setWithCredentials(!0),d.listenOnce(hc.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case ii.NO_ERROR:const T=d.getResponseJson();U(Jt,`XHR for RPC '${t}' ${a} received:`,JSON.stringify(T)),u(T);break;case ii.TIMEOUT:U(Jt,`RPC '${t}' ${a} timed out`),h(new F(P.DEADLINE_EXCEEDED,"Request time out"));break;case ii.HTTP_ERROR:const A=d.getStatus();if(U(Jt,`RPC '${t}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let C=d.getResponseJson();Array.isArray(C)&&(C=C[0]);const O=C==null?void 0:C.error;if(O&&O.status&&O.message){const L=function(Q){const G=Q.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(G)>=0?G:P.UNKNOWN}(O.status);h(new F(L,O.message))}else h(new F(P.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new F(P.UNAVAILABLE,"Connection failed."));break;default:H(9055,{l_:t,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{U(Jt,`RPC '${t}' ${a} completed.`)}});const m=JSON.stringify(s);U(Jt,`RPC '${t}' ${a} sending request:`,s),d.send(e,"POST",m,r,15)})}T_(t,e,r){const s=Co(),o=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const d=o.join("");U(Jt,`Creating RPC '${t}' stream ${s}: ${d}`,u);const m=a.createWebChannel(d,u);this.I_(m);let T=!1,A=!1;const C=new up({Ho:O=>{A?U(Jt,`Not sending because RPC '${t}' stream ${s} is closed:`,O):(T||(U(Jt,`Opening RPC '${t}' stream ${s} transport.`),m.open(),T=!0),U(Jt,`RPC '${t}' stream ${s} sending:`,O),m.send(O))},Jo:()=>m.close()});return os(m,ls.EventType.OPEN,()=>{A||(U(Jt,`RPC '${t}' stream ${s} transport opened.`),C.i_())}),os(m,ls.EventType.CLOSE,()=>{A||(A=!0,U(Jt,`RPC '${t}' stream ${s} transport closed`),C.o_(),this.E_(m))}),os(m,ls.EventType.ERROR,O=>{A||(A=!0,Wn(Jt,`RPC '${t}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),C.o_(new F(P.UNAVAILABLE,"The operation could not be completed")))}),os(m,ls.EventType.MESSAGE,O=>{var L;if(!A){const M=O.data[0];ct(!!M,16349);const Q=M,G=(Q==null?void 0:Q.error)||((L=Q[0])==null?void 0:L.error);if(G){U(Jt,`RPC '${t}' stream ${s} received error:`,G);const tt=G.status;let Et=function(w){const p=Ot[w];if(p!==void 0)return Qc(p)}(tt),yt=G.message;tt==="NOT_FOUND"&&yt.includes("database")&&yt.includes("does not exist")&&yt.includes(this.databaseId.database)&&Wn(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Et===void 0&&(Et=P.INTERNAL,yt="Unknown error status: "+tt+" with message "+G.message),A=!0,C.o_(new F(Et,yt)),m.close()}else U(Jt,`RPC '${t}' stream ${s} received:`,M),C.__(M)}}),Ar.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(t=>t.close()),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter(e=>e===t)}Go(t,e,r){super.Go(t,e,r),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return mc()}}/**
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
 */function hp(n){return new Ar(n)}function oo(){return typeof document<"u"?document:null}/**
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
 */function Oi(n){return new pm(n,!0)}/**
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
 */Ar.c_=!1;class uu{constructor(t,e,r=1e3,s=1.5,o=6e4){this.Ci=t,this.timerId=e,this.R_=r,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const e=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,e-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),t())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const Pl="PersistentStream";class hu{constructor(t,e,r,s,o,a,u,h){this.Ci=t,this.b_=r,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uu(t,e)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,()=>this.k_()))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():e&&e.code===P.RESOURCE_EXHAUSTED?(Ze(e.toString()),Ze("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):e&&e.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(e)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),e=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===e&&this.G_(r,s)},r=>{t(()=>{const s=new F(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(t,e){const r=this.Q_(this.D_);this.stream=this.j_(t,e),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.H_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(t){return U(Pl,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return e=>{this.Ci.enqueueAndForget(()=>this.D_===t?e():(U(Pl,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dp extends hu{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}j_(t,e){return this.connection.T_("Listen",t,e)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const e=ym(this.serializer,t),r=function(o){if(!("targetChange"in o))return K.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?qe(a.readTime):K.min()}(t);return this.listener.J_(e,r)}Z_(t){const e={};e.database=Ro(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=To(h)?{documents:Tm(o,h)}:{query:wm(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Jc(o,a.resumeToken);const d=Io(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){u.readTime=Ti(o,a.snapshotVersion.toTimestamp());const d=Io(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Am(this.serializer,t);r&&(e.labels=r),this.K_(e)}X_(t){const e={};e.database=Ro(this.serializer),e.removeTarget=t,this.K_(e)}}class fp extends hu{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,e){return this.connection.T_("Write",t,e)}H_(t){return ct(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,ct(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){ct(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const e=Em(t.writeResults,t.commitTime),r=qe(t.commitTime);return this.listener.na(r,e)}ra(){const t={};t.database=Ro(this.serializer),this.K_(t)}ea(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>vm(this.serializer,r))};this.K_(e)}}/**
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
 */class mp{}class pp extends mp{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new F(P.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Wo(t,Ao(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(P.UNKNOWN,o.toString())})}jo(t,e,r,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.jo(t,Ao(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new F(P.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gp(n,t,e,r){return new pp(n,t,e,r)}class _p{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ze(e),this.aa=!1):U("OnlineStateTracker",e)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Qn="RemoteStore";class yp{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo(a=>{r.enqueueAndForget(async()=>{tr(this)&&(U(Qn,"Restarting streams for network reachability change."),await async function(h){const d=W(h);d.Ea.add(4),await Ps(d),d.Va.set("Unknown"),d.Ea.delete(4),await Li(d)}(this))})}),this.Va=new _p(r,s)}}async function Li(n){if(tr(n))for(const t of n.Ra)await t(!0)}async function Ps(n){for(const t of n.Ra)await t(!1)}function du(n,t){const e=W(n);e.Ia.has(t.targetId)||(e.Ia.set(t.targetId,t),na(e)?ea(e):Fr(e).O_()&&ta(e,t))}function Zo(n,t){const e=W(n),r=Fr(e);e.Ia.delete(t),r.O_()&&fu(e,t),e.Ia.size===0&&(r.O_()?r.L_():tr(e)&&e.Va.set("Unknown"))}function ta(n,t){if(n.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(K.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fr(n).Z_(t)}function fu(n,t){n.da.$e(t),Fr(n).X_(t)}function ea(n){n.da=new hm({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),At:t=>n.Ia.get(t)||null,ht:()=>n.datastore.serializer.databaseId}),Fr(n).start(),n.Va.ua()}function na(n){return tr(n)&&!Fr(n).x_()&&n.Ia.size>0}function tr(n){return W(n).Ea.size===0}function mu(n){n.da=void 0}async function vp(n){n.Va.set("Online")}async function Ep(n){n.Ia.forEach((t,e)=>{ta(n,t)})}async function Tp(n,t){mu(n),na(n)?(n.Va.ha(t),ea(n)):n.Va.set("Unknown")}async function wp(n,t,e){if(n.Va.set("Online"),t instanceof Xc&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.da.removeTarget(u))}(n,t)}catch(r){U(Qn,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Ii(n,r)}else if(t instanceof ci?n.da.Xe(t):t instanceof Yc?n.da.st(t):n.da.tt(t),!e.isEqual(K.min()))try{const r=await cu(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.da.Tt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const m=o.Ia.get(d);m&&o.Ia.set(d,m.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const m=o.Ia.get(h);if(!m)return;o.Ia.set(h,m.withResumeToken(Qt.EMPTY_BYTE_STRING,m.snapshotVersion)),fu(o,h);const T=new vn(m.target,h,d,m.sequenceNumber);ta(o,T)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){U(Qn,"Failed to raise snapshot:",r),await Ii(n,r)}}async function Ii(n,t,e){if(!Lr(t))throw t;n.Ea.add(1),await Ps(n),n.Va.set("Offline"),e||(e=()=>cu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{U(Qn,"Retrying IndexedDB access"),await e(),n.Ea.delete(1),await Li(n)})}function pu(n,t){return t().catch(e=>Ii(n,e,t))}async function Fi(n){const t=W(n),e=Pn(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Bo;for(;Ip(t);)try{const s=await rp(t.localStore,r);if(s===null){t.Ta.length===0&&e.L_();break}r=s.batchId,Ap(t,s)}catch(s){await Ii(t,s)}gu(t)&&_u(t)}function Ip(n){return tr(n)&&n.Ta.length<10}function Ap(n,t){n.Ta.push(t);const e=Pn(n);e.O_()&&e.Y_&&e.ea(t.mutations)}function gu(n){return tr(n)&&!Pn(n).x_()&&n.Ta.length>0}function _u(n){Pn(n).start()}async function bp(n){Pn(n).ra()}async function Rp(n){const t=Pn(n);for(const e of n.Ta)t.ea(e.mutations)}async function Sp(n,t,e){const r=n.Ta.shift(),s=Go.from(r,t,e);await pu(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Fi(n)}async function Cp(n,t){t&&Pn(n).Y_&&await async function(r,s){if(function(a){return lm(a)&&a!==P.ABORTED}(s.code)){const o=r.Ta.shift();Pn(r).B_(),await pu(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Fi(r)}}(n,t),gu(n)&&_u(n)}async function Vl(n,t){const e=W(n);e.asyncQueue.verifyOperationInProgress(),U(Qn,"RemoteStore received new credentials");const r=tr(e);e.Ea.add(3),await Ps(e),r&&e.Va.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ea.delete(3),await Li(e)}async function Pp(n,t){const e=W(n);t?(e.Ea.delete(2),await Li(e)):t||(e.Ea.add(2),await Ps(e),e.Va.set("Unknown"))}function Fr(n){return n.ma||(n.ma=function(e,r,s){const o=W(e);return o.sa(),new dp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:vp.bind(null,n),Yo:Ep.bind(null,n),t_:Tp.bind(null,n),J_:wp.bind(null,n)}),n.Ra.push(async t=>{t?(n.ma.B_(),na(n)?ea(n):n.Va.set("Unknown")):(await n.ma.stop(),mu(n))})),n.ma}function Pn(n){return n.fa||(n.fa=function(e,r,s){const o=W(e);return o.sa(),new fp(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bp.bind(null,n),t_:Cp.bind(null,n),ta:Rp.bind(null,n),na:Sp.bind(null,n)}),n.Ra.push(async t=>{t?(n.fa.B_(),await Fi(n)):(await n.fa.stop(),n.Ta.length>0&&(U(Qn,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class ra{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new ra(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(P.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sa(n,t){if(Ze("AsyncQueue",`${t}: ${n}`),Lr(n))return new F(P.UNAVAILABLE,`${t}: ${n}`);throw n}/**
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
 */class br{static emptySet(t){return new br(t.comparator)}constructor(t){this.comparator=t?(e,r)=>t(e,r)||$.comparator(e.key,r.key):(e,r)=>$.comparator(e.key,r.key),this.keyedMap=cs(),this.sortedSet=new It(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof br)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new br;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
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
 */class Dl{constructor(){this.ga=new It($.comparator)}track(t){const e=t.doc.key,r=this.ga.get(e);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(e,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(e):t.type===1&&r.type===2?this.ga=this.ga.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(e,{type:2,doc:t.doc}):H(63341,{Vt:t,pa:r}):this.ga=this.ga.insert(e,t)}ya(){const t=[];return this.ga.inorderTraversal((e,r)=>{t.push(r)}),t}}class kr{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new kr(t,e,br.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Di(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class Vp{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some(t=>t.Da())}}class Dp{constructor(){this.queries=xl(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(e,r){const s=W(e),o=s.queries;s.queries=xl(),o.forEach((a,u)=>{for(const h of u.ba)h.onError(r)})})(this,new F(P.ABORTED,"Firestore shutting down"))}}function xl(){return new Jn(n=>Oc(n),Di)}async function xp(n,t){const e=W(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.Sa()&&t.Da()&&(r=2):(o=new Vp,r=t.Da()?0:1);try{switch(r){case 0:o.wa=await e.onListen(s,!0);break;case 1:o.wa=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=sa(a,`Initialization of query '${vr(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.ba.push(t),t.va(e.onlineState),o.wa&&t.Fa(o.wa)&&ia(e)}async function kp(n,t){const e=W(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.ba.indexOf(t);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=t.Da()?0:1:!o.Sa()&&t.Da()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Np(n,t){const e=W(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.ba)u.Fa(s)&&(r=!0);a.wa=s}}r&&ia(e)}function Mp(n,t,e){const r=W(n),s=r.queries.get(t);if(s)for(const o of s.ba)o.onError(e);r.queries.delete(t)}function ia(n){n.Ca.forEach(t=>{t.next()})}var Po,kl;(kl=Po||(Po={})).Ma="default",kl.Cache="cache";class Op{constructor(t,e,r){this.query=t,this.xa=e,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new kr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),e=!0):this.La(t,this.onlineState)&&(this.ka(t),e=!0),this.Na=t,e}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let e=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),e=!0),e}La(t,e){if(!t.fromCache||!this.Da())return!0;const r=e!=="Offline";return(!this.options.Ka||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const e=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}ka(t){t=kr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Po.Cache}}/**
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
 */class yu{constructor(t){this.key=t}}class vu{constructor(t){this.key=t}}class Lp{constructor(t,e){this.query=t,this.Za=e,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Z(),this.mutatedKeys=Z(),this.eu=Lc(t),this.tu=new br(this.eu)}get nu(){return this.Za}ru(t,e){const r=e?e.iu:new Dl,s=e?e.tu:this.tu;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((m,T)=>{const A=s.get(m),C=xi(this.query,T)?T:null,O=!!A&&this.mutatedKeys.has(A.key),L=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let M=!1;A&&C?A.data.isEqual(C.data)?O!==L&&(r.track({type:3,doc:C}),M=!0):this.su(A,C)||(r.track({type:2,doc:C}),M=!0,(h&&this.eu(C,h)>0||d&&this.eu(C,d)<0)&&(u=!0)):!A&&C?(r.track({type:0,doc:C}),M=!0):A&&!C&&(r.track({type:1,doc:A}),M=!0,(h||d)&&(u=!0)),M&&(C?(a=a.add(C),o=L?o.add(m):o.delete(m)):(a=a.delete(m),o=o.delete(m)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const m=this.query.limitType==="F"?a.last():a.first();a=a.delete(m.key),o=o.delete(m.key),r.track({type:1,doc:m})}return{tu:a,iu:r,Ss:u,mutatedKeys:o}}su(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const a=t.iu.ya();a.sort((m,T)=>function(C,O){const L=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H(20277,{Vt:M})}};return L(C)-L(O)}(m.type,T.type)||this.eu(m.doc,T.doc)),this.ou(r),s=s??!1;const u=e&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new kr(this.query,t.tu,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Dl,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach(e=>this.Za=this.Za.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Za=this.Za.delete(e)),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=Z(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const e=[];return t.forEach(r=>{this.Ya.has(r)||e.push(new vu(r))}),this.Ya.forEach(r=>{t.has(r)||e.push(new yu(r))}),e}cu(t){this.Za=t.ks,this.Ya=Z();const e=this.ru(t.documents);return this.applyChanges(e,!0)}lu(){return kr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const oa="SyncEngine";class Fp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Up{constructor(t){this.key=t,this.hu=!1}}class Bp{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Jn(u=>Oc(u),Di),this.Iu=new Map,this.Eu=new Set,this.Ru=new It($.comparator),this.Au=new Map,this.Vu=new Qo,this.du={},this.mu=new Map,this.fu=xr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function qp(n,t,e=!0){const r=bu(n);let s;const o=r.Tu.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await Eu(r,t,e,!0),s}async function $p(n,t){const e=bu(n);await Eu(e,t,!0,!1)}async function Eu(n,t,e,r){const s=await sp(n.localStore,Be(t)),o=s.targetId,a=n.sharedClientState.addLocalQueryTarget(o,e);let u;return r&&(u=await jp(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&du(n.remoteStore,s),u}async function jp(n,t,e,r,s){n.pu=(T,A,C)=>async function(L,M,Q,G){let tt=M.view.ru(Q);tt.Ss&&(tt=await bl(L.localStore,M.query,!1).then(({documents:w})=>M.view.ru(w,tt)));const Et=G&&G.targetChanges.get(M.targetId),yt=G&&G.targetMismatches.get(M.targetId)!=null,et=M.view.applyChanges(tt,L.isPrimaryClient,Et,yt);return Ml(L,M.targetId,et.au),et.snapshot}(n,T,A,C);const o=await bl(n.localStore,t,!0),a=new Lp(t,o.ks),u=a.ru(o.documents),h=Cs.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);Ml(n,e,d.au);const m=new Fp(t,e,a);return n.Tu.set(t,m),n.Iu.has(e)?n.Iu.get(e).push(t):n.Iu.set(e,[t]),d.snapshot}async function zp(n,t,e){const r=W(n),s=r.Tu.get(t),o=r.Iu.get(s.targetId);if(o.length>1)return r.Iu.set(s.targetId,o.filter(a=>!Di(a,t))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await So(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&Zo(r.remoteStore,s.targetId),Vo(r,s.targetId)}).catch(Or)):(Vo(r,s.targetId),await So(r.localStore,s.targetId,!0))}async function Hp(n,t){const e=W(n),r=e.Tu.get(t),s=e.Iu.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),Zo(e.remoteStore,r.targetId))}async function Gp(n,t,e){const r=Zp(n);try{const s=await function(a,u){const h=W(a),d=vt.now(),m=u.reduce((C,O)=>C.add(O.key),Z());let T,A;return h.persistence.runTransaction("Locally write mutations","readwrite",C=>{let O=tn(),L=Z();return h.xs.getEntries(C,m).next(M=>{O=M,O.forEach((Q,G)=>{G.isValidDocument()||(L=L.add(Q))})}).next(()=>h.localDocuments.getOverlayedDocuments(C,O)).next(M=>{T=M;const Q=[];for(const G of u){const tt=rm(G,T.get(G.key).overlayedDocument);tt!=null&&Q.push(new Zn(G.key,tt,Cc(tt.value.mapValue),Xe.exists(!0)))}return h.mutationQueue.addMutationBatch(C,d,Q,u)}).next(M=>{A=M;const Q=M.applyToLocalDocumentSet(T,L);return h.documentOverlayCache.saveOverlays(C,M.batchId,Q)})}).then(()=>({batchId:A.batchId,changes:Uc(T)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.du[a.currentUser.toKey()];d||(d=new It(J)),d=d.insert(u,h),a.du[a.currentUser.toKey()]=d}(r,s.batchId,e),await Vs(r,s.changes),await Fi(r.remoteStore)}catch(s){const o=sa(s,"Failed to persist write");e.reject(o)}}async function Tu(n,t){const e=W(n);try{const r=await ep(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Au.get(o);a&&(ct(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?ct(a.hu,14607):s.removedDocuments.size>0&&(ct(a.hu,42227),a.hu=!1))}),await Vs(e,r,t)}catch(r){await Or(r)}}function Nl(n,t,e){const r=W(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Tu.forEach((o,a)=>{const u=a.view.va(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=W(a);h.onlineState=u;let d=!1;h.queries.forEach((m,T)=>{for(const A of T.ba)A.va(u)&&(d=!0)}),d&&ia(h)}(r.eventManager,t),s.length&&r.Pu.J_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Kp(n,t,e){const r=W(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Au.get(t),o=s&&s.key;if(o){let a=new It($.comparator);a=a.insert(o,ne.newNoDocument(o,K.min()));const u=Z().add(o),h=new Mi(K.min(),new Map,new It(J),a,u);await Tu(r,h),r.Ru=r.Ru.remove(o),r.Au.delete(t),aa(r)}else await So(r.localStore,t,!1).then(()=>Vo(r,t,e)).catch(Or)}async function Wp(n,t){const e=W(n),r=t.batch.batchId;try{const s=await tp(e.localStore,t);Iu(e,r,null),wu(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Vs(e,s)}catch(s){await Or(s)}}async function Qp(n,t,e){const r=W(n);try{const s=await function(a,u){const h=W(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return h.mutationQueue.lookupMutationBatch(d,u).next(T=>(ct(T!==null,37113),m=T.keys(),h.mutationQueue.removeMutationBatch(d,T))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,m,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>h.localDocuments.getDocuments(d,m))})}(r.localStore,t);Iu(r,t,e),wu(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Vs(r,s)}catch(s){await Or(s)}}function wu(n,t){(n.mu.get(t)||[]).forEach(e=>{e.resolve()}),n.mu.delete(t)}function Iu(n,t,e){const r=W(n);let s=r.du[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.du[r.currentUser.toKey()]=s}}function Vo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Iu.get(t))n.Tu.delete(r),e&&n.Pu.yu(r,e);n.Iu.delete(t),n.isPrimaryClient&&n.Vu.Gr(t).forEach(r=>{n.Vu.containsKey(r)||Au(n,r)})}function Au(n,t){n.Eu.delete(t.path.canonicalString());const e=n.Ru.get(t);e!==null&&(Zo(n.remoteStore,e),n.Ru=n.Ru.remove(t),n.Au.delete(e),aa(n))}function Ml(n,t,e){for(const r of e)r instanceof yu?(n.Vu.addReference(r.key,t),Yp(n,r)):r instanceof vu?(U(oa,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,t),n.Vu.containsKey(r.key)||Au(n,r.key)):H(19791,{wu:r})}function Yp(n,t){const e=t.key,r=e.path.canonicalString();n.Ru.get(e)||n.Eu.has(r)||(U(oa,"New document in limbo: "+e),n.Eu.add(r),aa(n))}function aa(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const t=n.Eu.values().next().value;n.Eu.delete(t);const e=new $(pt.fromString(t)),r=n.fu.next();n.Au.set(r,new Up(e)),n.Ru=n.Ru.insert(e,r),du(n.remoteStore,new vn(Be(Mc(e.path)),r,"TargetPurposeLimboResolution",Si.ce))}}async function Vs(n,t,e){const r=W(n),s=[],o=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((u,h)=>{a.push(r.pu(h,t,e).then(d=>{var m;if((d||e)&&r.isPrimaryClient){const T=d?!d.fromCache:(m=e==null?void 0:e.targetChanges.get(h.targetId))==null?void 0:m.current;r.sharedClientState.updateQueryState(h.targetId,T?"current":"not-current")}if(d){s.push(d);const T=Xo.Es(h.targetId,d);o.push(T)}}))}),await Promise.all(a),r.Pu.J_(s),await async function(h,d){const m=W(h);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>D.forEach(d,A=>D.forEach(A.Ts,C=>m.persistence.referenceDelegate.addReference(T,A.targetId,C)).next(()=>D.forEach(A.Is,C=>m.persistence.referenceDelegate.removeReference(T,A.targetId,C)))))}catch(T){if(!Lr(T))throw T;U(Jo,"Failed to update sequence numbers: "+T)}for(const T of d){const A=T.targetId;if(!T.fromCache){const C=m.vs.get(A),O=C.snapshotVersion,L=C.withLastLimboFreeSnapshotVersion(O);m.vs=m.vs.insert(A,L)}}}(r.localStore,o))}async function Xp(n,t){const e=W(n);if(!e.currentUser.isEqual(t)){U(oa,"User change. New user:",t.toKey());const r=await lu(e.localStore,t);e.currentUser=t,function(o,a){o.mu.forEach(u=>{u.forEach(h=>{h.reject(new F(P.CANCELLED,a))})}),o.mu.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Vs(e,r.Ns)}}function Jp(n,t){const e=W(n),r=e.Au.get(t);if(r&&r.hu)return Z().add(r.key);{let s=Z();const o=e.Iu.get(t);if(!o)return s;for(const a of o){const u=e.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function bu(n){const t=W(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Tu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Jp.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kp.bind(null,t),t.Pu.J_=Np.bind(null,t.eventManager),t.Pu.yu=Mp.bind(null,t.eventManager),t}function Zp(n){const t=W(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Wp.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Qp.bind(null,t),t}class Ai{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Oi(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,e){return null}Mu(t,e){return null}vu(t){return Zm(this.persistence,new Ym,t.initialUser,this.serializer)}Cu(t){return new au(Yo.Vi,this.serializer)}Du(t){return new op}async terminate(){var t,e;(t=this.gcScheduler)==null||t.stop(),(e=this.indexBackfillerScheduler)==null||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ai.provider={build:()=>new Ai};class tg extends Ai{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,e){ct(this.persistence.referenceDelegate instanceof wi,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mm(r,t.asyncQueue,e)}Cu(t){const e=this.cacheSizeBytes!==void 0?le.withCacheSize(this.cacheSizeBytes):le.DEFAULT;return new au(r=>wi.Vi(r,e),this.serializer)}}class Do{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Xp.bind(null,this.syncEngine),await Pp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Dp}()}createDatastore(t){const e=Oi(t.databaseInfo.databaseId),r=hp(t.databaseInfo);return gp(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new yp(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>Nl(this.syncEngine,e,0),function(){return Cl.v()?new Cl:new ap}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,m){const T=new Bp(s,o,a,u,h,d);return m&&(T.gu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const o=W(s);U(Qn,"RemoteStore shutting down."),o.Ea.add(5),await Ps(o),o.Aa.shutdown(),o.Va.set("Unknown")}(this.remoteStore),(t=this.datastore)==null||t.terminate(),(e=this.eventManager)==null||e.terminate()}}Do.provider={build:()=>new Do};/**
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
 */class eg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):Ze("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
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
 */const Vn="FirestoreClient";class ng{constructor(t,e,r,s,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this._databaseInfo=s,this.user=ee.UNAUTHENTICATED,this.clientId=Uo.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(r,async a=>{U(Vn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(U(Vn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=sa(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ao(n,t){n.asyncQueue.verifyOperationInProgress(),U(Vn,"Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await lu(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Ol(n,t){n.asyncQueue.verifyOperationInProgress();const e=await rg(n);U(Vn,"Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Vl(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Vl(t.remoteStore,s)),n._onlineComponents=t}async function rg(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){U(Vn,"Using user provided OfflineComponentProvider");try{await ao(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===P.FAILED_PRECONDITION||s.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;Wn("Error using user provided cache. Falling back to memory cache: "+e),await ao(n,new Ai)}}else U(Vn,"Using default OfflineComponentProvider"),await ao(n,new tg(void 0));return n._offlineComponents}async function Ru(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(U(Vn,"Using user provided OnlineComponentProvider"),await Ol(n,n._uninitializedComponentsProvider._online)):(U(Vn,"Using default OnlineComponentProvider"),await Ol(n,new Do))),n._onlineComponents}function sg(n){return Ru(n).then(t=>t.syncEngine)}async function ig(n){const t=await Ru(n),e=t.eventManager;return e.onListen=qp.bind(null,t.syncEngine),e.onUnlisten=zp.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=$p.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=Hp.bind(null,t.syncEngine),e}function og(n,t,e={}){const r=new In;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const m=new eg({next:A=>{m.Nu(),a.enqueueAndForget(()=>kp(o,T)),A.fromCache&&h.source==="server"?d.reject(new F(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(A)},error:A=>d.reject(A)}),T=new Op(u,m,{includeMetadataChanges:!0,Ka:!0});return xp(o,T)}(await ig(n),n.asyncQueue,t,e,r)),r.promise}function ag(n,t){const e=new In;return n.asyncQueue.enqueueAndForget(async()=>Gp(await sg(n),t,e)),e.promise}/**
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
 */function Su(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
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
 */const lg="ComponentProvider",Ll=new Map;function cg(n,t,e,r,s){return new If(n,t,e,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,Su(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
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
 */const Cu="firestore.googleapis.com",Fl=!0;class Ul{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new F(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cu,this.ssl=Fl}else this.host=t.host,this.ssl=t.ssl??Fl;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=ou;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<km)throw new F(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}hf("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Su(t.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new F(P.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ui{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ul({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new F(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ul(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tf;switch(r.type){case"firstParty":return new sf(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Ll.get(e);r&&(U(lg,"Removing Datastore"),Ll.delete(e),r.terminate())}(this),Promise.resolve()}}function ug(n,t,e,r={}){var d;n=mi(n,Ui);const s=Oo(t),o=n._getSettings(),a={...o,emulatorOptions:n._getEmulatorOptions()},u=`${t}:${e}`;s&&(Rh(`https://${u}`),Vh("Firestore",!0)),o.host!==Cu&&o.host!==u&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:r};if(!di(h,a)&&(n._setSettings(h),r.mockUserToken)){let m,T;if(typeof r.mockUserToken=="string")m=r.mockUserToken,T=ee.MOCK_USER;else{m=Sh(r.mockUserToken,(d=n._app)==null?void 0:d.options.projectId);const A=r.mockUserToken.sub||r.mockUserToken.user_id;if(!A)throw new F(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new ee(A)}n._authCredentials=new ef(new gc(m,T))}}/**
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
 */class en{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new en(this.firestore,t,this._query)}}class Gt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Gt(this.firestore,t,this._key)}toJSON(){return{type:Gt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,r){if(Rs(e,Gt._jsonSchema))return new Gt(t,r||null,new $(pt.fromString(e.referencePath)))}}Gt._jsonSchemaVersion="firestore/documentReference/1.0",Gt._jsonSchema={type:Ft("string",Gt._jsonSchemaVersion),referencePath:Ft("string")};class An extends en{constructor(t,e,r){super(t,e,Mc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Gt(this.firestore,null,new $(t))}withConverter(t){return new An(this.firestore,t,this._path)}}function Pu(n,t,...e){if(n=Gn(n),_c("collection","path",t),n instanceof Ui){const r=pt.fromString(t,...e);return Za(r),new An(n,null,r)}{if(!(n instanceof Gt||n instanceof An))throw new F(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return Za(r),new An(n.firestore,null,r)}}function hg(n,t,...e){if(n=Gn(n),arguments.length===1&&(t=Uo.newId()),_c("doc","path",t),n instanceof Ui){const r=pt.fromString(t,...e);return Ja(r),new Gt(n,null,new $(r))}{if(!(n instanceof Gt||n instanceof An))throw new F(P.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(pt.fromString(t,...e));return Ja(r),new Gt(n.firestore,n instanceof An?n.converter:null,new $(r))}}/**
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
 */const Bl="AsyncQueue";class ql{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uu(this,"async_queue_retry"),this._c=()=>{const r=oo();r&&U(Bl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const e=oo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const e=oo();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise(()=>{});const e=new In;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Yu.push(t),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!Lr(t))throw t;U(Bl,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(t){const e=this.ac.then(()=>(this.rc=!0,t().catch(r=>{throw this.nc=r,this.rc=!1,Ze("INTERNAL UNHANDLED ERROR: ",$l(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=e,e}enqueueAfterDelay(t,e,r){this.uc(),this.oc.indexOf(t)>-1&&(e=0);const s=ra.createAndSchedule(this,t,e,r,o=>this.hc(o));return this.tc.push(s),s}uc(){this.nc&&H(47125,{Pc:$l(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const e of this.tc)if(e.timerId===t)return!0;return!1}Ec(t){return this.Tc().then(()=>{this.tc.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.tc)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Tc()})}Rc(t){this.oc.push(t)}hc(t){const e=this.tc.indexOf(t);this.tc.splice(e,1)}}function $l(n){let t=n.message||"";return n.stack&&(t=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),t}class la extends Ui{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new ql,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ql(t),this._firestoreClient=void 0,await t}}}function dg(n,t){const e=typeof n=="object"?n:oc(),r=typeof n=="string"?n:gi,s=Md(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=Ah("firestore");o&&ug(s,...o)}return s}function Vu(n){if(n._terminated)throw new F(P.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||fg(n),n._firestoreClient}function fg(n){var r,s,o,a;const t=n._freezeSettings(),e=cg(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,(s=n._app)==null?void 0:s.options.apiKey,t);n._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((a=t.localCache)!=null&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),n._firestoreClient=new ng(n._authCredentials,n._appCheckCredentials,n._queue,e,n._componentsProvider&&function(h){const d=h==null?void 0:h._online.build();return{_offline:h==null?void 0:h._offline.build(d),_online:d}}(n._componentsProvider))}/**
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
 */class pe{constructor(t){this._byteString=t}static fromBase64String(t){try{return new pe(Qt.fromBase64String(t))}catch(e){throw new F(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new pe(Qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:pe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Rs(t,pe._jsonSchema))return pe.fromBase64String(t.bytes)}}pe._jsonSchemaVersion="firestore/bytes/1.0",pe._jsonSchema={type:Ft("string",pe._jsonSchemaVersion),bytes:Ft("string")};/**
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
 */class Du{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new F(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class ca{constructor(t){this._methodName=t}}/**
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
 */class $e{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new F(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new F(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return J(this._lat,t._lat)||J(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:$e._jsonSchemaVersion}}static fromJSON(t){if(Rs(t,$e._jsonSchema))return new $e(t.latitude,t.longitude)}}$e._jsonSchemaVersion="firestore/geoPoint/1.0",$e._jsonSchema={type:Ft("string",$e._jsonSchemaVersion),latitude:Ft("number"),longitude:Ft("number")};/**
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
 */class Re{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let o=0;o<r.length;++o)if(r[o]!==s[o])return!1;return!0}(this._values,t._values)}toJSON(){return{type:Re._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Rs(t,Re._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(e=>typeof e=="number"))return new Re(t.vectorValues);throw new F(P.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Re._jsonSchemaVersion="firestore/vectorValue/1.0",Re._jsonSchema={type:Ft("string",Re._jsonSchemaVersion),vectorValues:Ft("object")};/**
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
 */const mg=/^__.*__$/;class pg{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Zn(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ss(t,this.data,e,this.fieldTransforms)}}function xu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H(40011,{dataSource:n})}}class ua{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new ua({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePathSegment(t),r}childContextForFieldPath(t){var s;const e=(s=this.path)==null?void 0:s.child(t),r=this.contextWith({path:e,arrayElement:!1});return r.validatePath(),r}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return bi(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(xu(this.dataSource)&&mg.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class gg{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Oi(t)}createContext(t,e,r,s=!1){return new ua({dataSource:t,methodName:e,targetDoc:r,path:Wt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ha(n){const t=n._freezeSettings(),e=Oi(n._databaseId);return new gg(n._databaseId,!!t.ignoreUndefinedProperties,e)}function _g(n,t,e,r,s,o={}){const a=n.createContext(o.merge||o.mergeFields?2:0,t,e,s);Ou("Data must be an object, but it was:",a,r);const u=Nu(r,a);let h,d;if(o.merge)h=new be(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const m=[];for(const T of o.mergeFields){const A=Bi(t,T,e);if(!a.contains(A))throw new F(P.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);Eg(m,A)||m.push(A)}h=new be(m),d=a.fieldTransforms.filter(T=>h.covers(T.field))}else h=null,d=a.fieldTransforms;return new pg(new me(u),h,d)}class da extends ca{_toFieldTransform(t){return new Zf(t.path,new Is)}isEqual(t){return t instanceof da}}function ku(n,t,e,r=!1){return fa(e,n.createContext(r?4:3,t))}function fa(n,t){if(Mu(n=Gn(n)))return Ou("Unsupported field value:",t,n),Nu(n,t);if(n instanceof ca)return function(r,s){if(!xu(s.dataSource))throw s.createError(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=fa(u,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=Gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Yf(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=vt.fromDate(r);return{timestampValue:Ti(s.serializer,o)}}if(r instanceof vt){const o=new vt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ti(s.serializer,o)}}if(r instanceof $e)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pe)return{bytesValue:Jc(s.serializer,r._byteString)};if(r instanceof Gt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Wo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Re)return function(a,u){const h=a instanceof Re?a.toArray():a;return{mapValue:{fields:{[Rc]:{stringValue:Sc},[_i]:{arrayValue:{values:h.map(m=>{if(typeof m!="number")throw u.createError("VectorValues must only contain numeric values.");return Ho(u.serializer,m)})}}}}}}(r,s);if(iu(r))return r._toProto(s.serializer);throw s.createError(`Unsupported field value: ${Ri(r)}`)}(n,t)}function Nu(n,t){const e={};return Ec(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Yn(n,(r,s)=>{const o=fa(s,t.childContextForField(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Mu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof vt||n instanceof $e||n instanceof pe||n instanceof Gt||n instanceof ca||n instanceof Re||iu(n))}function Ou(n,t,e){if(!Mu(e)||!yc(e)){const r=Ri(e);throw r==="an object"?t.createError(n+" a custom object"):t.createError(n+" "+r)}}function Bi(n,t,e){if((t=Gn(t))instanceof Du)return t._internalPath;if(typeof t=="string")return vg(n,t);throw bi("Field path arguments must be of type string or ",n,!1,void 0,e)}const yg=new RegExp("[~\\*/\\[\\]]");function vg(n,t,e){if(t.search(yg)>=0)throw bi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Du(...t.split("."))._internalPath}catch{throw bi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function bi(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new F(P.INVALID_ARGUMENT,u+n+h)}function Eg(n,t){return n.some(e=>e.isEqual(t))}/**
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
 */class Tg{convertValue(t,e="none"){switch(Cn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return xt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Sn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw H(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Yn(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertVectorValue(t){var r,s,o;const e=(o=(s=(r=t.fields)==null?void 0:r[_i].arrayValue)==null?void 0:s.values)==null?void 0:o.map(a=>xt(a.doubleValue));return new Re(e)}convertGeoPoint(t){return new $e(xt(t.latitude),xt(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vs(t));default:return null}}convertTimestamp(t){const e=Rn(t);return new vt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=pt.fromString(t);ct(su(r),9688,{name:t});const s=new Es(r.get(1),r.get(3)),o=new $(r.popFirst(5));return s.isEqual(e)||Ze(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */class wg extends Tg{constructor(t){super(),this.firestore=t}convertBytes(t){return new pe(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Gt(this.firestore,null,e)}}function Ig(){return new da("serverTimestamp")}const jl="@firebase/firestore",zl="4.12.0";/**
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
 */class ma{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Ag(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const e=this._document.data.field(Bi("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Ag extends ma{data(){return super.data()}}/**
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
 */function bg(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new F(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pa{}class qi extends pa{}function Rg(n,t,...e){let r=[];t instanceof pa&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof _a).length,u=o.filter(h=>h instanceof ga).length;if(a>1||a>0&&u>0)throw new F(P.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ga extends qi{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ga(t,e,r)}_apply(t){const e=this._parse(t);return Lu(t._query,e),new en(t.firestore,t.converter,wo(t._query,e))}_parse(t){const e=ha(t.firestore);return function(o,a,u,h,d,m,T){let A;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new F(P.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Gl(T,m);const O=[];for(const L of T)O.push(Hl(h,o,L));A={arrayValue:{values:O}}}else A=Hl(h,o,T)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Gl(T,m),A=ku(u,a,T,m==="in"||m==="not-in");return Lt.create(d,m,A)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class _a extends pa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new _a(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Se.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Lu(a,h),a=wo(a,h)}(t._query,e),new en(t.firestore,t.converter,wo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class ya extends qi{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ya(t,e)}_apply(t){const e=function(s,o,a){if(s.startAt!==null)throw new F(P.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(P.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ws(o,a)}(t._query,this._field,this._direction);return new en(t.firestore,t.converter,qf(t._query,e))}}function Sg(n,t="asc"){const e=t,r=Bi("orderBy",n);return ya._create(r,e)}class va extends qi{constructor(t,e,r){super(),this.type=t,this._limit=e,this._limitType=r}static _create(t,e,r){return new va(t,e,r)}_apply(t){return new en(t.firestore,t.converter,vi(t._query,this._limit,this._limitType))}}function Cg(n){return df("limit",n),va._create("limit",n,"F")}class Ea extends qi{constructor(t,e,r){super(),this.type=t,this._docOrFields=e,this._inclusive=r}static _create(t,e,r){return new Ea(t,e,r)}_apply(t){const e=Vg(t,this.type,this._docOrFields,this._inclusive);return new en(t.firestore,t.converter,$f(t._query,e))}}function Pg(...n){return Ea._create("startAfter",n,!1)}function Vg(n,t,e,r){if(e[0]=Gn(e[0]),e[0]instanceof ma)return function(o,a,u,h,d){if(!h)throw new F(P.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const m=[];for(const T of Ir(o))if(T.field.isKeyField())m.push(yi(a,h.key));else{const A=h.data.field(T.field);if(Pi(A))throw new F(P.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const C=T.field.canonicalString();throw new F(P.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${C}' (used as the orderBy) does not exist.`)}m.push(A)}return new Dr(m,d)}(n._query,n.firestore._databaseId,t,e[0]._document,r);{const s=ha(n.firestore);return function(a,u,h,d,m,T){const A=a.explicitOrderBy;if(m.length>A.length)throw new F(P.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const C=[];for(let O=0;O<m.length;O++){const L=m[O];if(A[O].field.isKeyField()){if(typeof L!="string")throw new F(P.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof L}`);if(!zo(a)&&L.indexOf("/")!==-1)throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${L}' contains a slash.`);const M=a.path.child(pt.fromString(L));if(!$.isDocumentKey(M))throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${M}' is not because it contains an odd number of segments.`);const Q=new $(M);C.push(yi(u,Q))}else{const M=ku(h,d,L);C.push(M)}}return new Dr(C,T)}(n._query,n.firestore._databaseId,s,t,e,r)}}function Hl(n,t,e){if(typeof(e=Gn(e))=="string"){if(e==="")throw new F(P.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zo(t)&&e.indexOf("/")!==-1)throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(pt.fromString(e));if(!$.isDocumentKey(r))throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return yi(n,new $(r))}if(e instanceof Gt)return yi(n,e._key);throw new F(P.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ri(e)}.`)}function Gl(n,t){if(!Array.isArray(n)||n.length===0)throw new F(P.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Lu(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new F(P.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new F(P.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Dg(n,t,e){let r;return r=n?n.toFirestore(t):t,r}class ri{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Rr extends ma{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(Bi("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=Rr._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}Rr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Rr._jsonSchema={type:Ft("string",Rr._jsonSchemaVersion),bundleSource:Ft("string","DocumentSnapshot"),bundleName:Ft("string"),bundle:Ft("string")};class ui extends Rr{data(t={}){return super.data(t)}}class Sr{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new ri(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new ui(this._firestore,this._userDataWriter,r.key,r,new ri(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new F(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new ui(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ri(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new ui(s._firestore,s._userDataWriter,u.doc.key,u.doc,new ri(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),m=a.indexOf(u.doc.key)),{type:xg(u.type),doc:h,oldIndex:d,newIndex:m}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(P.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Sr._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Uo.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],r=[],s=[];return this.docs.forEach(o=>{o._document!==null&&(e.push(o._document),r.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))}),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function xg(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H(61501,{type:n})}}/**
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
 */Sr._jsonSchemaVersion="firestore/querySnapshot/1.0",Sr._jsonSchema={type:Ft("string",Sr._jsonSchemaVersion),bundleSource:Ft("string","QuerySnapshot"),bundleName:Ft("string"),bundle:Ft("string")};function kg(n){n=mi(n,en);const t=mi(n.firestore,la),e=Vu(t),r=new wg(t);return bg(n._query),og(e,n._query).then(s=>new Sr(t,r,n,s))}function Ng(n,t){const e=mi(n.firestore,la),r=hg(n),s=Dg(n.converter,t),o=ha(n.firestore);return Mg(e,[_g(o,"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Xe.exists(!1))]).then(()=>r)}function Mg(n,t){const e=Vu(n);return ag(e,t)}(function(t,e=!0){Zd(Ud),fi(new ps("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new la(new nf(r.getProvider("auth-internal")),new of(a,r.getProvider("app-check-internal")),Af(a,s),a);return o={useFetchStreams:e,...o},u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),wr(jl,zl,t),wr(jl,zl,"esm2020")})();const Og={apiKey:"AIzaSyAaqDVxolZFagNkLHIWMIe0CsEeM0oQh78",authDomain:"kylehe-notes.firebaseapp.com",projectId:"kylehe-notes",storageBucket:"kylehe-notes.firebasestorage.app",messagingSenderId:"751334076604",appId:"1:751334076604:web:5627979301ef4cec0320b9"},Lg=Bd().length?oc():ic(Og),Fu=dg(Lg),Uu="notes";function Fg(){return{deckRotation:Math.random()*8-4,deckOffsetX:Math.random()*16-8,deckOffsetY:0}}function Ug(n){const t=n.data();return{id:n.id,createdAt:t.createdAtDisplay||"",text:t.text||"",textSizeLines:t.textSizeLines||1,stickers:t.stickers||[],backgroundUrl:t.backgroundUrl||"",...Fg()}}async function Kl(n=8,t=null){const e=[Pu(Fu,Uu),Sg("createdAt","desc"),Cg(n)];t&&e.push(Pg(t));const r=await kg(Rg(...e)),s=r.docs[r.docs.length-1]||null;return{notes:r.docs.map(Ug),lastDoc:s,hasMore:r.docs.length===n}}async function Bg(n){return(await Ng(Pu(Fu,Uu),{createdAt:Ig(),createdAtDisplay:n.createdAt,text:n.text,textSizeLines:n.textSizeLines,stickers:n.stickers.map(e=>({src:e.src,x:e.x,y:e.y,width:e.width,height:e.height,rotation:e.rotation})),backgroundUrl:n.backgroundUrl})).id}var qg=Pt('<div role="presentation"></div>'),$g=Pt('<div role="presentation"></div>'),jg=Pt('<!> <!> <div class="sticker-rotate-line svelte-qe7c2m"></div> <div class="sticker-rotate-handle svelte-qe7c2m" role="presentation"></div>',1),zg=Pt('<div role="presentation"><img alt="sticker" class="sticker-img svelte-qe7c2m" draggable="false" aria-hidden="true"> <!></div>'),Hg=Pt(`<textarea class="note-text m-0 box-border w-full resize-none overflow-hidden border-0 bg-transparent p-0 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] text-[4.4cqi] leading-[1.1] [word-break:break-word] outline-none placeholder:text-[#7e776d] svelte-qe7c2m" rows="1" placeholder="leave a note"></textarea>`),Gg=Pt('publishing<span class="publishing-dots svelte-qe7c2m"></span>',1),Kg=Pt('<p class="publish-error col-span-2 m-0 text-center font-serif text-[0.8rem] text-red-600 svelte-qe7c2m">something went wrong – try again?</p>'),Wg=Pt(`<div class="fade-in mt-6 svelte-qe7c2m"><section class="note-layout grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,0.8fr)] svelte-qe7c2m"><div role="presentation" class="svelte-qe7c2m"><!></div> <div class="controls flex self-stretch flex-col items-stretch justify-between gap-4 pb-1 svelte-qe7c2m"><!> <div class="actions grid grid-cols-2 items-stretch gap-[0.9rem] svelte-qe7c2m"><button type="button" class="action-button action-button-clear rounded-xl border-[3px] border-current bg-white px-[0.9rem] pb-[0.5rem] pt-[0.7rem] text-[1.6rem] lowercase leading-none text-blue-600 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] transition-[transform,background-color,opacity] duration-[120ms] enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:bg-blue-50 enabled:active:translate-y-px enabled:active:bg-blue-200 disabled:cursor-default disabled:opacity-50 svelte-qe7c2m">clear</button> <button type="button" class="action-button action-button-delete rounded-xl border-[3px] border-current bg-white px-[0.9rem] pb-[0.5rem] pt-[0.7rem] text-[1.6rem] lowercase leading-none text-red-600 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] transition-[transform,background-color,opacity] duration-[120ms] enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:bg-red-50 enabled:active:translate-y-px enabled:active:bg-red-200 disabled:cursor-default disabled:opacity-50 svelte-qe7c2m">delete</button> <button type="button" class="action-button action-button-publish col-span-2 justify-self-stretch rounded-xl border-[3px] border-current bg-white px-[0.9rem] pb-[0.5rem] pt-[0.7rem] text-[1.6rem] lowercase leading-none text-green-600 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] transition-[transform,background-color,opacity] duration-[120ms] enabled:cursor-pointer enabled:hover:-translate-y-px enabled:hover:bg-green-50 enabled:active:translate-y-px enabled:active:bg-green-200 disabled:cursor-default disabled:opacity-50 svelte-qe7c2m"><!></button> <!></div></div></section> <hr class="separator my-6 border-0 border-t border-dashed border-[#d5d0c4] svelte-qe7c2m"></div>`),Qg=Pt('<p class="font-serif text-sm text-neutral-400 svelte-qe7c2m">loading notes...</p>'),Yg=Pt('<p class="font-serif text-sm text-neutral-500 svelte-qe7c2m">no notes yet – make one!</p>'),Xg=Pt('<div class="deck-sticker absolute select-none [transform-origin:center] svelte-qe7c2m"><img alt="sticker" class="deck-sticker-img h-full w-full object-contain svelte-qe7c2m" draggable="false"></div>'),Jg=Pt("<p> </p>"),Zg=Pt('<div class="deck-card svelte-qe7c2m"><div class="deck-card-inner svelte-qe7c2m"><!></div></div>'),t_=Pt('<div class="load-more-row mt-6 text-center svelte-qe7c2m"><button class="load-more px-2 py-1 font-serif text-[0.95rem] text-blue-600 transition-colors duration-[120ms] enabled:cursor-pointer enabled:hover:text-black enabled:active:font-bold disabled:cursor-default disabled:opacity-60 svelte-qe7c2m"> </button></div>'),e_=Pt('<div class="deck-grid svelte-qe7c2m"></div> <!>',1),n_=Pt('<img alt="" class="palette-drag-ghost pointer-events-none fixed z-[9999] [filter:drop-shadow(0_6px_6px_rgba(0,0,0,0.5))] svelte-qe7c2m" draggable="false">'),r_=Pt('<!> <main class="mt-8 space-y-10 svelte-qe7c2m"><section class="mt-4 svelte-qe7c2m"><div class="flex items-start justify-between gap-6 svelte-qe7c2m"><div class="svelte-qe7c2m"><h2 class="font-serif text-2xl font-semibold text-left svelte-qe7c2m">Leave a note!</h2> <p class="font-serif text-base text-left mt-2 svelte-qe7c2m">Build your own polaroid card, leave a note, and publish it to my website :)</p></div> <button aria-label="Start a new polaroid"><img alt="Polaroid camera" class="header-camera h-auto w-[120px] [filter:drop-shadow(0_4px_4px_rgba(0,0,0,0.15))] transition-[filter,transform] duration-150 ease-in-out svelte-qe7c2m"> <span class="header-camera-hint mt-[0.6rem] whitespace-nowrap font-serif text-[0.7rem] text-[#9e9a92] transition-colors duration-150 svelte-qe7c2m">(hint: click the camera)</span></button></div> <hr class="separator my-6 border-0 border-t border-dashed border-[#d5d0c4] svelte-qe7c2m"></section> <div><!> <section class="deck svelte-qe7c2m"><!></section></div></main> <!>',1);function v_(n,t){ko(t,!1);const e=gt(),r=gt(),s=[`${Zt}/images/stickers/banana.png`,`${Zt}/images/stickers/cactus.png`,`${Zt}/images/stickers/cactus2.png`,`${Zt}/images/stickers/cat_doodle.png`,`${Zt}/images/stickers/coquette.png`,`${Zt}/images/stickers/dog.png`,`${Zt}/images/stickers/drunk_dog.png`,`${Zt}/images/stickers/happy_dog.png`,`${Zt}/images/stickers/happy_heart.png`,`${Zt}/images/stickers/mushroom.png`,`${Zt}/images/stickers/musical_note.png`,`${Zt}/images/stickers/snowman.png`,`${Zt}/images/stickers/sunglasses.png`];function o(R){const V=[...R];for(let x=V.length-1;x>0;x--){const q=Math.floor(Math.random()*(x+1));[V[x],V[q]]=[V[q],V[x]]}return V}function a(){return o(s).slice(0,9)}let u=gt(a()),h=gt(null),d=null,m=1,T=gt(!0),A=gt(!1),C=gt(!1),O=null;const L=8,M=new Date().toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),Q=80;function G(R,V,x){return Math.min(x,Math.max(V,R))}function tt(R,V,x){const q=x*Math.PI/180,B=Math.cos(q),j=Math.sin(q);return{x:R*B-V*j,y:R*j+V*B}}function Et(R,V,x){switch(R){case"br":return[-V,-x];case"bl":return[V,-x];case"tr":return[-V,x];case"tl":return[V,x];case"r":return[-V,0];case"l":return[V,0];case"b":return[0,-x];case"t":return[0,x];default:return[0,0]}}function yt(R){const V=R.width<0?R.x+R.width:R.x,x=R.height<0?R.y+R.height:R.y;return`left:${V}%;top:${x}%;width:${Math.abs(R.width)}%;height:${Math.abs(R.height)}%;transform:rotate(${R.rotation||0}deg)`}function et(R){const V=R.width<0?-1:1,x=R.height<0?-1:1;return V===1&&x===1?"":`transform:scale(${V},${x})`}function w(){return`https://picsum.photos/seed/${Math.floor(Math.random()*1e7)}/600/600.jpg`}function p(){return{id:0,createdAt:M,text:"",textSizeLines:1,stickers:[],deckRotation:0,deckOffsetX:0,deckOffsetY:0,backgroundUrl:w()}}let _=gt(!1),I=gt(null),E=null,y=gt(p()),g=v(y).text,Tt=v(y).textSizeLines,re=gt([]),At=gt(null),nn=gt(null),bt=gt(),Ce=gt(),rn=!1,ze=null,Ur=0,Br=0,Dn=0,er=0,ge=gt(!1),Pe=null,sn=null,qr=0,Ds=0,xs=0,$r=0,nr=0,jr=0,He,rr=0,xn=0,sr=0,kt=0,Ut=0,_e=gt(!1),on=null,zr=0,ks=0,Ge=0,ir=0,or=0,z=gt(null),ar=gt(0),kn,ye=gt(!1);const Ns={t:90,b:90,l:0,r:0,tl:45,br:45,tr:135,bl:135},Nn=18,Ve=new Map,{trigger:Hr,destroy:Ke,isSupported:Ms}=Xl();function Nt(R="selection",V=void 0){!Ms||typeof window>"u"||Hr(R,V).catch(()=>{})}function Os(R,V=16,x=16){const q=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32">${R}</svg>`;return`url("data:image/svg+xml,${encodeURIComponent(q)}") ${V} ${x}, pointer`}function an(R,V){const x=Math.round(((Ns[R]||0)+(V||0))%360+360)%360,q=`r${x}`;if(!Ve.has(q)){const B="M8,16 L24,16 M8,16 L12,12 M8,16 L12,20 M24,16 L20,12 M24,16 L20,20",j=`<g transform="rotate(${x} 16 16)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="${B}" stroke="white" stroke-width="4"/><path d="${B}" stroke="#222" stroke-width="1.5"/></g>`;Ve.set(q,Os(j))}return Ve.get(q)}const Gr="M22.4789 9.45728L25.9935 12.9942L22.4789 16.5283V14.1032C18.126 14.1502 14.6071 17.6737 14.5675 22.0283H17.05L13.513 25.543L9.97889 22.0283H12.5674C12.6071 16.5691 17.0214 12.1503 22.4789 12.1031L22.4789 9.45728Z";function Mt(R){const V=Math.round(((R||0)%360+360)%360),x=`rot${V}`;if(!Ve.has(x)){const q=-V*Math.PI/180,B=Math.sin(q),j=Math.cos(q),st=(j-B).toFixed(2),dt=(B+j).toFixed(2),Vt=`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><defs><filter id="shadow" y="-40%" x="-40%" width="180%" height="180%" color-interpolation-filters="sRGB"><feDropShadow dx="${st}" dy="${dt}" stdDeviation="1.2" flood-opacity=".5"/></filter></defs><g transform="rotate(${V} 16 16)" filter="url(#shadow)"><path d="${Gr}" fill="white" stroke="white" stroke-width="2" stroke-linejoin="round"/><path d="${Gr}" fill="#222"/></g></svg>`;Ve.set(x,`url("data:image/svg+xml,${encodeURIComponent(Vt)}") 16 16, pointer`)}return Ve.get(x)}function Mn(R){document.body.style.setProperty("--sticker-cursor",R),document.body.classList.contains("cursor-lock")||document.body.classList.add("cursor-lock")}function On(){document.body.classList.remove("cursor-lock"),document.body.style.removeProperty("--sticker-cursor")}function Ln(R,V,x){if(!v(bt))return;const q=v(bt).getBoundingClientRect();if(V&&x){const B=V/q.width*100,j=x/q.height*100,st={id:m++,src:R,x:50-B/2,y:50-j/2,width:B,height:j,rotation:0};k(y,{...v(y),stickers:[...v(y).stickers,st]}),k(At,st.id)}else{const B=new Image;B.onload=()=>{const j=v(bt).getBoundingClientRect(),st=24,dt=B.naturalWidth/B.naturalHeight,Vt=st*dt*(j.height/j.width),Rt={id:m++,src:R,x:50-Vt/2,y:50-st/2,width:Vt,height:st,rotation:0};k(y,{...v(y),stickers:[...v(y).stickers,Rt]}),k(At,Rt.id)},B.src=R}}function $i(R){un();const{src:V,clientX:x,clientY:q,imgWidth:B,imgHeight:j,offsetX:st,offsetY:dt}=R.detail,Vt=new Image;Vt.src=V;const Rt=Vt.complete?Vt.naturalWidth:100,ut=Vt.complete?Vt.naturalHeight:100;k(z,{src:V,x,y:q,startX:x,startY:q,naturalWidth:Rt,naturalHeight:ut,imgWidth:B,imgHeight:j,offsetX:st,offsetY:dt})}function ln(R){return v(y).stickers.findIndex(V=>V.id===R)}function De(R,V){const x=v(y).stickers.slice();x[R]={...x[R],...V},k(y,{...v(y),stickers:x})}function lr(R){k(ye,R.pointerType!=="mouse")}function ji(R,V){if(R.stopPropagation(),lr(R),!v(bt))return;const x=ln(V);x!==-1&&(k(At,V),k(ge,!1),Pe=null,k(_e,!1),on=null,rn=!0,ze=V,Ur=R.clientX,Br=R.clientY,Dn=v(y).stickers[x].x,er=v(y).stickers[x].y,v(ye)||Mn("grabbing"),Nt("selection"))}function cr(R){lr(R),k(At,null)}function Kr(R){if(v(z)){k(z,{...v(z),x:R.clientX,y:R.clientY});return}if(v(bt)){if(v(_e)&&on!=null){const V=ln(on);if(V===-1)return;const x=R.clientX-Ge,q=R.clientY-ir,B=Math.atan2(q,x)*180/Math.PI;let j=ks+(B-zr);R.shiftKey&&(j=Math.round(j/15)*15),De(V,{rotation:j}),v(ye)||Mn(Mt(j+or));return}if(rn&&ze!=null){const V=v(bt).getBoundingClientRect(),x=(R.clientX-Ur)/V.width*100,q=(R.clientY-Br)/V.height*100,B=ln(ze);if(B===-1)return;const j=v(y).stickers[B];De(B,{x:G(Dn+x,-.5*j.width,100-.5*j.width),y:G(er+q,-.5*j.height,100-.5*j.height)});return}if(v(ge)&&Pe!=null&&sn&&He){const V=ln(Pe);if(V===-1)return;const x=He.width,q=He.height,B=rr,j=tt(R.clientX-nr,R.clientY-jr,-B),st=xs/100*x,dt=$r/100*q,Vt=qr/100*x,Rt=Ds/100*q,ut=Q/100*x,ht=Q/100*q,Te=Math.sign(st)||1,ke=Math.sign(dt)||1;let $t=st,ie=dt;const it=sn;(it==="br"||it==="tr"||it==="r")&&($t=G(st+j.x*Te,-ut,ut)),(it==="bl"||it==="tl"||it==="l")&&($t=G(st-j.x*Te,-ut,ut)),(it==="br"||it==="bl"||it==="b")&&(ie=G(dt+j.y*ke,-ht,ht)),(it==="tl"||it==="tr"||it==="t")&&(ie=G(dt-j.y*ke,-ht,ht));const ft=Vt+st/2,Yt=Rt+dt/2,[St,X]=Et(it,Math.abs(st)/2,Math.abs(dt)/2),we=tt(St,X,B),[wt,Xt]=Et(it,Math.abs($t)/2,Math.abs(ie)/2),fn=(Math.sign(st)||1)!==(Math.sign($t)||1),fr=(Math.sign(dt)||1)!==(Math.sign(ie)||1),mn=it!=="t"&&it!=="b",Ct=it!=="l"&&it!=="r",Ne=tt(mn&&fn?-wt:wt,Ct&&fr?-Xt:Xt,B),mr=ft+we.x-Ne.x,Me=Yt+we.y-Ne.y;if(De(V,{x:(mr-$t/2)/x*100,y:(Me-ie/2)/q*100,width:$t/x*100,height:ie/q*100}),v(ye)){const pn=Math.abs($t),oe=Math.abs(ie),ae=Math.abs(pn-xn)+Math.abs(oe-sr);kt+=ae,xn=pn,sr=oe;const se=Math.floor(kt/Nn);se>Ut&&(Nt("selection"),Ut=se)}}}}function Wr(R){var V;if(v(z)){if(!(Math.hypot(v(z).x-v(z).startX,v(z).y-v(z).startY)>5))Ln(v(z).src,v(z).imgWidth,v(z).imgHeight),Nt("light");else{const q=(V=v(bt))==null?void 0:V.getBoundingClientRect();if(q&&v(z).x>=q.left&&v(z).x<=q.right&&v(z).y>=q.top&&v(z).y<=q.bottom){const B=v(z).imgWidth/q.width*100,j=v(z).imgHeight/q.height*100,st=v(z).imgWidth>0?v(z).offsetX/v(z).imgWidth:.5,dt=v(z).imgHeight>0?v(z).offsetY/v(z).imgHeight:.5,Vt=(v(z).x-q.left)/q.width*100-B*st,Rt=(v(z).y-q.top)/q.height*100-j*dt,ut={id:m++,src:v(z).src,x:G(Vt,-.5*B,100-.5*B),y:G(Rt,-.5*j,100-.5*j),width:B,height:j,rotation:0};k(y,{...v(y),stickers:[...v(y).stickers,ut]}),k(At,ut.id),Nt("light")}}k(z,null)}!rn&&!v(ge)&&!v(_e)||un()}function Qr(R,V,x){if(R.stopPropagation(),R.preventDefault(),lr(R),!v(bt))return;const q=ln(V);if(q===-1)return;k(At,V),rn=!1,ze=null;const B=v(y).stickers[q];He=v(bt).getBoundingClientRect(),qr=B.x,Ds=B.y,xs=B.width,$r=B.height,nr=R.clientX,jr=R.clientY,rr=B.rotation||0,sn=x,k(ge,!0),Pe=V,xn=Math.abs(B.width/100*He.width),sr=Math.abs(B.height/100*He.height),kt=0,Ut=0,v(ye)||Mn(an(x,B.rotation||0)),Nt("selection")}function cn(R,V,x=0){if(R.stopPropagation(),R.preventDefault(),lr(R),!v(bt))return;const q=ln(V);if(q===-1)return;k(At,V),rn=!1,k(ge,!1);const B=v(y).stickers[q],j=v(bt).getBoundingClientRect();Ge=j.left+(B.x+B.width/2)/100*j.width,ir=j.top+(B.y+B.height/2)/100*j.height;const st=R.clientX-Ge,dt=R.clientY-ir;zr=Math.atan2(dt,st)*180/Math.PI,ks=B.rotation||0,or=x,k(_e,!0),on=V,v(ye)||Mn(Mt((B.rotation||0)+x)),Nt("selection")}function un(){rn=!1,ze=null,k(ge,!1),Pe=null,sn=null,He=void 0,k(_e,!1),on=null,or=0,On()}function ve(R){(ze===R||Pe===R||on===R)&&un(),k(y,{...v(y),stickers:v(y).stickers.filter(V=>V.id!==R)}),v(At)===R&&k(At,null)}function Ls(){v(At)!=null&&(ve(v(At)),Nt("warning"))}function Fs(){v(y).stickers.length!==0&&(un(),k(y,{...v(y),stickers:[]}),k(At,null),k(nn,null),Nt("warning"))}function ur(R){v(At)!=null&&(R.key==="Backspace"||R.key==="Delete")&&(R.preventDefault(),ve(v(At)))}const Yr={1:2,2:1.5,3:1},hr=3;function Xr(R,V){const x=Yr[V]||1;R.style.fontSize=`${4.4*x}cqi`}function Jr(R){const V=getComputedStyle(R),x=parseFloat(V.lineHeight||"0");return x?Math.max(1,Math.round(R.scrollHeight/x)):1}function Us(R){for(const V of[1,2,3]){Xr(R,V),R.style.height="auto";const x=Jr(R);if(x<=V)return{targetLines:V,visualLines:x}}return Xr(R,hr),R.style.height="auto",{targetLines:hr,visualLines:Jr(R)}}function Fn(R){if(!R)return;const V=R.value;k(y,{...v(y),text:V});let x=Us(R);x.visualLines>hr?(k(y,{...v(y),text:g,textSizeLines:Tt}),R.value=g,x=Us(R)):(g=V,Tt=x.targetLines,k(y,{...v(y),textSizeLines:x.targetLines})),Xr(R,x.targetLines),R.style.height="auto",R.style.height=`${R.scrollHeight}px`}function Bs(R){Fn(R.target)}function Zr(){un(),k(y,p()),g=v(y).text,Tt=v(y).textSizeLines,k(At,null),k(nn,null),k(_,!1),requestAnimationFrame(()=>{k(_,!0)}),Nt("medium")}async function Un(){if(!(v(A)||!v(C))){Nt("selection"),k(A,!0);try{const R=await Kl(L,O);k(re,[...v(re),...R.notes]),O=R.lastDoc,k(C,R.hasMore)}catch(R){console.error("Failed to load more notes:",R),Nt("error")}finally{k(A,!1)}}}let Ee=gt(!1),We=gt(!1);async function zi(){if(!v(r)||v(I)||v(We))return;un(),k(Ee,!1),k(We,!0),Nt("medium");const R={...v(y),id:"",createdAt:M,stickers:v(y).stickers.map(V=>({...V})),deckRotation:Math.random()*8-4,deckOffsetX:Math.random()*16-8,deckOffsetY:0};try{const V=await Bg(R);R.id=V,E=R,k(I,"out"),Nt("success")}catch(V){console.error("Failed to publish note:",V),k(Ee,!0),Nt("error")}finally{k(We,!1)}}function qs(R){R.target===R.currentTarget&&(v(I)==="out"?(E&&(k(re,[E,...v(re)]),E=null),k(y,p()),g=v(y).text,Tt=v(y).textSizeLines,k(At,null),k(_,!1),k(I,"in")):v(I)==="in"&&k(I,null))}const $s=["tl","tr","bl","br","l","r","t","b"],js=["tl","tr","bl","br"],dr={tl:0,tr:90,bl:270,br:180};function ts(){v(h)||(d=a(),k(h,"out"),Nt("light"))}function zs(){v(h)==="out"?(k(u,d||a()),d=null,k(h,"in")):v(h)==="in"&&k(h,null)}Ju(({from:R,to:V})=>{R!=null&&R.url&&(V!=null&&V.url)&&R.url.pathname===V.url.pathname&&(k(_,!1),k(I,null),E=null)}),Wu(async()=>{if(!(typeof window>"u")){window.addEventListener("pointermove",Kr),window.addEventListener("pointerup",Wr),window.addEventListener("keydown",ur),k(ye,window.matchMedia("(pointer: coarse)").matches),v(bt)&&(k(ar,v(bt).clientHeight),kn=new ResizeObserver(()=>{k(ar,v(bt).clientHeight)}),kn.observe(v(bt)));try{const R=await Kl(L);k(re,R.notes),O=R.lastDoc,k(C,R.hasMore)}catch(R){console.error("Failed to load notes:",R)}finally{k(T,!1)}}}),Ql(()=>{typeof window>"u"||(window.removeEventListener("pointermove",Kr),window.removeEventListener("pointerup",Wr),window.removeEventListener("keydown",ur),kn==null||kn.disconnect(),Ke())}),si(()=>v(ar),()=>{k(e,v(ar)*.24)}),si(()=>v(y),()=>{k(r,v(y).text.trim().length>0||v(y).stickers.length>0)}),si(()=>(v(_),v(Ce)),()=>{v(_)&&v(Ce)&&typeof window<"u"&&Fn(v(Ce))}),Wl(),xo();var es=r_(),ns=gr(es);Xu(ns,{meta:{title:"Kyle He - Notes",description:"notes"}});var rs=Dt(ns,2),de=lt(rs),ce=lt(de),xe=Dt(lt(ce),2);let hn;var ss=lt(xe);yn(ss,"src",`${Zt??""}/images/polaroid_camera.png`),Ys(2),ot(xe),ot(ce),Ys(2),ot(de);var at=Dt(de,2);let Bn;var dn=lt(at);{var qn=R=>{var V=Wg(),x=lt(V),q=lt(x),B=lt(q);Ma(B,{get date(){return v(y).createdAt},get backgroundUrl(){return v(y).backgroundUrl},shadow:!0,get innerEl(){return v(bt)},set innerEl(ft){k(bt,ft)},$$slots:{canvas:(ft,Yt)=>{var St=Ji(),X=gr(St);_r(X,1,()=>v(y).stickers,as,(we,wt)=>{var Xt=zg(),fn=lt(Xt),fr=Dt(fn,2);{var mn=Ct=>{var Ne=jg(),mr=gr(Ne);_r(mr,1,()=>js,as,(oe,ae)=>{var se=qg();te(fe=>{Ae(se,1,`sticker-rotate-corner sticker-rotate-corner-${v(ae)??""}`,"svelte-qe7c2m"),Le(se,`cursor: ${fe??""}`)},[()=>Mt((v(wt).rotation||0)+dr[v(ae)])],Fe),zt("pointerdown",se,fe=>cn(fe,v(wt).id,dr[v(ae)])),_t(oe,se)});var Me=Dt(mr,2);_r(Me,1,()=>$s,as,(oe,ae)=>{var se=$g();te(fe=>{Ae(se,1,`sticker-handle sticker-handle-${v(ae)??""}`,"svelte-qe7c2m"),Le(se,`cursor: ${fe??""}`)},[()=>an(v(ae),v(wt).rotation)],Fe),zt("pointerdown",se,fe=>Qr(fe,v(wt).id,v(ae))),_t(oe,se)});var pn=Dt(Me,4);te(oe=>Le(pn,`cursor: ${oe??""}`),[()=>Mt((v(wt).rotation||0)+45)],Fe),zt("pointerdown",pn,oe=>cn(oe,v(wt).id,45)),_t(Ct,Ne)};Ie(fr,Ct=>{v(wt).id===v(At)&&Ct(mn)})}ot(Xt),te((Ct,Ne)=>{Ae(Xt,1,`sticker-wrapper ${(v(wt).id===v(At)?"selected":v(wt).id===v(nn)?"hovered":"")??""} ${(v(wt).id===v(At)&&(v(ge)||v(_e))?"interacting":"")??""} ${(v(ye)?"coarse":"")??""}`,"svelte-qe7c2m"),Le(Xt,Ct),yn(fn,"src",v(wt).src),Le(fn,Ne)},[()=>yt(v(wt)),()=>et(v(wt))],Fe),zt("pointerdown",Xt,Ct=>ji(Ct,v(wt).id)),zt("pointerenter",Xt,Ct=>{Ct.pointerType==="mouse"&&k(nn,v(wt).id)}),zt("pointerleave",Xt,Ct=>{Ct.pointerType==="mouse"&&v(nn)===v(wt).id&&k(nn,null)}),_t(we,Xt)}),_t(ft,St)},footer:(ft,Yt)=>{var St=Hg();Zu(St),Yl(St,X=>k(Ce,X),()=>v(Ce)),te(()=>Qu(St,v(y).text)),zt("input",St,Bs),_t(ft,St)}},$$legacy:!0}),ot(q);var j=Dt(q,2),st=lt(j);const dt=Fe(()=>v(z)&&Math.hypot(v(z).x-v(z).startX,v(z).y-v(z).startY)>5?v(z).src:null);fh(st,{get stickers(){return v(u)},get maxHeight(){return v(e)},get draggingSrc(){return v(dt)},get phase(){return v(h)},$$events:{dragstart:$i,reload:ts,animationend:zs}});var Vt=Dt(st,2),Rt=lt(Vt),ut=Dt(Rt,2),ht=Dt(ut,2),Te=lt(ht);{var ke=ft=>{var Yt=Gg();Ys(),_t(ft,Yt)},$t=ft=>{var Yt=ju("publish");_t(ft,Yt)};Ie(Te,ft=>{v(We)?ft(ke):ft($t,!1)})}ot(ht);var ie=Dt(ht,2);{var it=ft=>{var Yt=Kg();_t(ft,Yt)};Ie(ie,ft=>{v(Ee)&&ft(it)})}ot(Vt),ot(j),ot(x),Ys(2),ot(V),te(()=>{Rt.disabled=v(y).stickers.length===0,ut.disabled=v(At)==null,ht.disabled=!v(r)||v(We)}),zt("pointerdown",q,cr),zt("click",Rt,Fs),zt("click",ut,Ls),zt("click",ht,zi),_t(R,V)};Ie(dn,R=>{v(_)&&R(qn)})}var Hs=Dt(dn,2),Gs=lt(Hs);{var Hi=R=>{var V=Qg();_t(R,V)},Gi=(R,V)=>{{var x=B=>{var j=Yg();_t(B,j)},q=B=>{var j=e_(),st=gr(j);_r(st,5,()=>v(re),Rt=>Rt.id,(Rt,ut)=>{var ht=Zg(),Te=lt(ht),ke=lt(Te);Ma(ke,{get date(){return v(ut).createdAt},get backgroundUrl(){return v(ut).backgroundUrl},mini:!0,$$slots:{canvas:($t,ie)=>{var it=Ji(),ft=gr(it);_r(ft,1,()=>v(ut).stickers,as,(Yt,St)=>{var X=Xg(),we=lt(X);ot(X),te((wt,Xt)=>{Le(X,wt),yn(we,"src",v(St).src),Le(we,Xt)},[()=>yt(v(St)),()=>et(v(St))],Fe),_t(Yt,X)}),_t($t,it)},footer:($t,ie)=>{var it=Ji(),ft=gr(it);{var Yt=St=>{var X=Jg(),we=lt(X,!0);ot(X),te(()=>{Ae(X,1,`deck-text m-0 overflow-hidden p-0 [font-family:'KyleHandwriting','Comic_Sans_MS','Comic_Sans',ui-serif,system-ui] leading-[1.1] [word-break:break-word] whitespace-pre-wrap [display:-webkit-box] [line-clamp:3] [-webkit-line-clamp:3] [-webkit-box-orient:vertical] deck-text-${v(ut).textSizeLines||3}l`,"svelte-qe7c2m"),co(we,v(ut).text)}),_t(St,X)};Ie(ft,St=>{v(ut).text.trim().length&&St(Yt)})}_t($t,it)}}}),ot(Te),ot(ht),te(()=>Le(ht,`--dx:${v(ut).deckOffsetX}px;--dy:${v(ut).deckOffsetY}px;--rot:${v(ut).deckRotation}deg;`)),_t(Rt,ht)}),ot(st);var dt=Dt(st,2);{var Vt=Rt=>{var ut=t_(),ht=lt(ut),Te=lt(ht,!0);ot(ht),ot(ut),te(()=>{ht.disabled=v(A),co(Te,v(A)?"loading...":"load more")}),zt("click",ht,Un),_t(Rt,ut)};Ie(dt,Rt=>{v(C)&&Rt(Vt)})}_t(B,j)};Ie(R,B=>{v(re).length===0?B(x):B(q,!1)},V)}};Ie(Gs,R=>{v(T)?R(Hi):R(Gi,!1)})}ot(Hs),ot(at),ot(rs);var Ki=Dt(rs,2);{var Wi=R=>{var V=n_();te(()=>{yn(V,"src",v(z).src),Le(V,`left: ${v(z).x-v(z).offsetX}px; top: ${v(z).y-v(z).offsetY}px; width: ${v(z).imgWidth??""}px; height: ${v(z).imgHeight??""}px;`)}),_t(R,V)};Ie(Ki,R=>{v(z)&&Math.hypot(v(z).x-v(z).startX,v(z).y-v(z).startY)>5&&R(Wi)})}te((R,V)=>{hn=Ae(xe,1,"header-camera-group flex shrink-0 cursor-pointer flex-col items-center border-0 bg-transparent px-2 py-1 outline-none [-webkit-tap-highlight-color:transparent] svelte-qe7c2m",null,hn,R),Bn=Ae(at,1,"publish-content relative svelte-qe7c2m",null,Bn,V)},[()=>({active:v(_)}),()=>({"publish-out":v(I)==="out","publish-in":v(I)==="in"})],Fe),zt("click",xe,Zr),zt("animationend",at,qs),_t(n,es),No()}export{v_ as component};
