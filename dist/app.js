!function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var n=e(function(e){!function(t){var n=function(){},o=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)};function i(){this.reads=[],this.writes=[],this.raf=o.bind(t)}function r(t){t.scheduled||(t.scheduled=!0,t.raf(function(t){var e,o=t.writes,i=t.reads;try{n("flushing reads",i.length),a(i),n("flushing writes",o.length),a(o)}catch(t){e=t}t.scheduled=!1,(i.length||o.length)&&r(t);if(e){if(n("task errored",e.message),!t.catch)throw e;t.catch(e)}}.bind(null,t)))}function a(t){for(var e;e=t.shift();)e()}function s(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}i.prototype={constructor:i,measure:function(t,e){var n=e?t.bind(e):t;return this.reads.push(n),r(this),n},mutate:function(t,e){var n=e?t.bind(e):t;return this.writes.push(n),r(this),n},clear:function(t){return s(this.reads,t)||s(this.writes,t)},extend:function(t){if("object"!=typeof t)throw new Error("expected object");var e=Object.create(this);return function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}(e,t),e.fastdom=this,e.initialize&&e.initialize(),e},catch:null};var c=t.fastdom=t.fastdom||new i;e.exports=c}("undefined"!=typeof window?window:t)}),o=["interactive","complete"],i=function(t,e){return new Promise(function(n){t&&"function"!=typeof t&&(e=t,t=null),e=e||window.document;var i=function(){return n(void(t&&setTimeout(t)))};-1!==o.indexOf(e.readyState)?i():e.addEventListener("DOMContentLoaded",i)})};i.resume=function(t){return function(e){return i(t).then(function(){return e})}};const r=(t,e)=>{const n=`__${e}`;let o=t.target;for(;null!==o;){const e=o[n];if(e)return void e(t);o=o.parentNode}},a={};function s(t){a[t]||(document.addEventListener(t,e=>r(e,t)),a[t]=!0)}var c=e(function(t){!function(){var e={initialize:function(){this._tasks=new Map},mutate:function(t,e){return n(this,"mutate",t,e)},measure:function(t,e){return n(this,"measure",t,e)},clear:function(t){var e=this._tasks,n=e.get(t);this.fastdom.clear(n),e.delete(t)}};function n(t,e,n,o){var i,r=t._tasks,a=t.fastdom,s=new Promise(function(t,c){i=a[e](function(){r.delete(s);try{t(o?n.call(o):n())}catch(t){c(t)}},o)});return r.set(s,i),s}"f"=="undefined"[0]?(void 0)(function(){return e}):"o"=="object"[0]?t.exports=e:window.fastdomPromised=e}()});const l=(t,e,n="s")=>`${t} ${e}${1!==t?n:""}`;function d(t,e){for(let n=0,o=t.length;n<o&&!e(t[n],n,t);n++);return t}const u=new Map,p={set:(t,e)=>{u.set(t,e)},get:t=>u.has(t)?u.get(t):JSON.stringify({}),delete:t=>u.delete(t)};function f(t){const{client_id:e,client_secret:n,storage:o,...i}=t;this.client_id=e,this.client_secret=n||void 0,this.storage=o||p,this.fetch=t.fetch?t.fetch:fetch,this.options={host:t.host?t.host:"api.moltin.com",version:t.version?t.version:"v2",...i}}let h,m,g;function b(t,e){h.debounce&&void 0!==m&&m.abort(),AbortController&&(m=new AbortController,g=m.signal);const{body:n,method:o,headers:i}=e;return fetch(t,{signal:g,method:o,headers:i,body:n})}function y(t){if(3!==t.nodeType){if(void 0!==t.attributes)for(let e of Array.from(t.attributes)){let n=e.name;if("#"===n[0])return t.removeAttribute(n),n.slice(1)}return 0}{let e=t.nodeValue;return"#"===e[0]?(t.nodeValue="",e.slice(1)):0}}f.prototype.authenticate=async function(){const{client_id:t,client_secret:e,storage:n,options:{host:o}}=this;if(!t)throw new Error("You must provide a client_id");const i=`https://${o}/oauth/access_token`,r={grant_type:e?"client_credentials":"implicit",client_id:t,...e&&{client_secret:e}},a=await this.fetch(i,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded","X-MOLTIN-SDK-LANGUAGE":"JS-REQUEST"},body:Object.keys(r).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(r[t])}`).join("&")}),{access_token:s,expires:c}=await a.json();if(!s)throw new Error("Unable to obtain an access token");if(n){const e={client_id:t,access_token:s,expires:c};await n.set("moltinCredentials",JSON.stringify(e))}return s},f.prototype.request=async function(t,e,n,o){const{client_id:i,storage:r,options:{application:a,currency:s,customer_token:c,host:l,version:d,headers:u}}=this,p=`https://${l}/${d}/${f=e,f.replace(/^\/+/,"")}`;var f;const h={...u,...o};let m,g;r&&(m=await JSON.parse(r.get("moltinCredentials")));const b={"Content-Type":"application/json","X-MOLTIN-SDK-LANGUAGE":"JS-REQUEST",Authorization:`Bearer ${g=!m||!m.access_token||m.client_id!==i||Math.floor(Date.now()/1e3)>=m.expires?await this.authenticate():m.access_token}`,...a&&{"X-MOLTIN-APPLICATION":a},...s&&{"X-MOLTIN-CURRENCY":s},...c&&{"X-MOLTIN-CUSTOMER-TOKEN":c},...h},y=h["Content-Type"]?n:{body:JSON.stringify({data:n})},w=await this.fetch(p,{method:t,headers:b,...n&&y});if(204===w.status)return w.text();const x=await w.json();if(!w.ok)throw{statusCode:w.status,...x};return x},f.prototype.get=function(t,e){return this.request("GET",t,void 0,e)},f.prototype.put=function(t,e,n){return this.request("PUT",t,e,n)},f.prototype.post=function(t,e,n){return this.request("POST",t,e,n)},f.prototype.delete=function(t,e,n){return this.request("DELETE",t,e,n)};const w=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1);w.roll=function(t){for(;--t;)this.nextNode();return this.currentNode};class x{constructor(t,e){this.idx=t,this.ref=e}}function v(t){const e={},n=w;return n.currentNode=t,this._refPaths.map(t=>e[t.ref]=n.roll(t.idx)),e}function C(t){t._refPaths=function(t){const e=w;e.currentNode=t;let n,o=[],i=0;do{(n=y(t))?(o.push(new x(i+1,n)),i=1):i++}while(t=e.nextNode());return o}(t),t.collect=v}const k=document.createElement("template");function T(t,...e){const n=String.raw(t,...e).replace(/>\n+/g,">").replace(/\s+</g,"<").replace(/>\s+/g,">").replace(/\n\s+/g,"\x3c!-- --\x3e");k.innerHTML=n;const o=k.content.firstChild;return C(o),o}var _=function(t){var e={},n={},o=function(t,i){if("@dispatch"!==t&&o("@dispatch",[t,i,e[t]]),e[t]){var r,a={};e[t].forEach(function(t){var e=t(n,i);e&&"function"!=typeof e.then&&(r=Object.assign({},n,e),Object.assign(a,e),n=r)}),r&&o("@changed",a)}},i={dispatch:o,get:function(){return n},on:function(t,n){return(e[t]||(e[t]=[])).push(n),function(){e[t]=e[t].filter(function(t){return t!==n})}}};return t.forEach(function(t){t&&t(i)}),o("@init"),i},E=function(t,e){t=t||[];var n=(e=e||{}).key||"storeon";return function(e){e.on("@init",function(){try{var t=localStorage.getItem(n);if(null!==t)return JSON.parse(t)}catch(t){}}),e.on("@dispatch",function(e,o){if("@init"!==o[0]){var i={};0===t.length?i=e:t.forEach(function(t){i[t]=e[t]});try{var r=JSON.stringify(i);localStorage.setItem(n,r)}catch(t){}}})}};const N=(O=O||Object.create(null),{on:function(t,e){(O[t]||(O[t]=[])).push(e)},off:function(t,e){O[t]&&O[t].splice(O[t].indexOf(e)>>>0,1)},emit:function(t,e){(O[t]||[]).slice().map(function(t){t(e)}),(O["*"]||[]).slice().map(function(n){n(t,e)})}});var O;const M=_([t=>{t.on("@init",()=>({cart:{id:"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx".replace(/[x]/g,()=>(16*Math.random()|0).toString(16)),meta:null,items:[],loading:!0}})),t.on("@changed",({cart:t})=>{t.loading=!1,t.isEmpty=0===t.items.length,t.count=t.items.reduce((t,{quantity:e})=>t+e,0),t.subTotal=t.meta?t.meta.display_price.without_tax.formatted:0,t.items=t.items.filter(({type:t})=>"cart_item"===t||"custom_item"===t),t.promotionItems=t.items.filter(({type:t})=>"promotion_item"===t),t.taxItems=t.items.filter(({type:t})=>"tax_item"===t),t.averageApiRequest=(()=>{const e=function(t){if(!performance)return null;const e=performance.getEntriesByType("resource"),n=[];for(const o in e){const i=e[o];i.name.includes(t)&&n.push(Math.ceil(i.duration))}return n.length?n.reduce((t,e)=>t+e,0)/n.length:null}("https://api.moltin.com");return e||t.averageApiRequest})()}),t.on("setId",({cart:t},e)=>t.id=e),t.on("setCart",({cart:t},{data:e,meta:n})=>({cart:{...t,items:e,meta:n}})),t.on("getCart",async e=>{const n=await h.get(`carts/${e.cart.id}/items`);t.dispatch("setCart",n)}),t.on("deleteCart",async e=>{await h.delete(`carts/${e.cart.id}`),t.dispatch("setCart",{data:[],meta:null,error:null})}),t.on("addItem",async(e,{quantity:n=1,type:o="cart_item",...i})=>{const r=await h.post(`carts/${e.cart.id}/items`,{type:o,quantity:n,...i});t.dispatch("setCart",r)}),t.on("updateItem",async(e,n)=>{const{id:o,quantity:i}=n,{id:r}=e.cart;try{h.debounce=!0;const e=await h.put(`carts/${r}/items/${o}`,{type:"cart_item",itemId:o,quantity:i});h.debounce=!1,t.dispatch("setCart",e)}catch(t){console.log(t)}}),t.on("removeItem",async(e,n)=>{const{id:o}=e.cart,i=await h.delete(`carts/${o}/items/${n}`);t.dispatch("setCart",i)}),t.on("addPromotion",async(e,n)=>{const{id:o}=e.cart;try{const e=await h.post(`carts/${o}/items`,{type:"promotion_item",promotionCode:n});t.dispatch("setCart",e)}catch({statusCode:t}){console.log("Code expired or invalid")}finally{return{state:{cart:{error:"error"}}}}})},t=>{t.on("@init",()=>({modal:{route:"cart",open:!1}})),t.on("@changed",({modal:t})=>{t.checkingOut=["shipping","billing"].includes(t.route)}),t.on("changeRoute",({modal:t},e)=>({modal:{route:e,open:!0}})),t.on("goToCart",()=>t.dispatch("changeRoute","cart")),t.on("goToShipping",()=>t.dispatch("changeRoute","shipping")),t.on("goToBilling",()=>t.dispatch("changeRoute","billing")),t.on("goToOrders",()=>t.dispatch("changeRoute","orders")),t.on("goToLogin",()=>t.dispatch("changeRoute","login")),t.on("goToConfirmation",()=>t.dispatch("changeRoute","confirmation")),t.on("toggle",({modal:t})=>t.open=!t.open),t.on("openCart",({modal:t})=>({modal:{open:!0,route:"cart"}})),t.on("closeModal",e=>{const{checkingOut:n}=e.modal,{completed:o}=e.checkout;!o&&n||t.dispatch("close")}),t.on("close",({modal:t})=>({modal:{open:!1}})),t.on("continueShopping",({modal:t})=>({modal:{open:!1,route:"cart"}}))},t=>{t.on("@init",()=>({checkout:{route:"shipping",dirty:!1,completed:!1}}))},function(t){t.on("@changed",function(t){d(Object.keys(t),t=>N.emit(t))})},E(["cart"],{key:"mcart"})]);function $(){const{possible:t,n:e}=$;let n,o=e.toString(26).split(""),i="";for(;n=o.shift();)i+=t[parseInt(n,26)];return $.n++,i}$.possible="abcdefghijklmnopqrstuvwxyz",$.n=0;let S=document.createElement("style");function I(t){for(let e in t){const n=`${e}-${$()}`,o=S.insertRule(`.${n} {}`,S.cssRules.length),i=S.cssRules[o].style,r=t[e];for(let t in r)if(":"===t[0]||" "===t[0]){const e=S.insertRule(`.${n}${t} {}`,S.cssRules.length),o=S.cssRules[e].style;Object.assign(o,r[t]),delete r[t]}Object.assign(i,r),t[e]=n}return t}S.id="stage0",document.head.appendChild(S),S=S.sheet;var R,P=e(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});const n=()=>"undefined"==typeof window?null:window,o=t=>void 0!==t.size;e.default=async(t,e=n())=>{if(!e)throw new Error("DOM window required");if(o(t)&&"image/svg+xml"!==t.type)return t;const i=await(t=>new Promise(e=>{if(o(t)){const n=new FileReader;n.onload=()=>{e(n.result)},n.readAsText(t)}else e(t.toString("utf-8"))}))(t);if(!i)throw new Error("Image corrupt");const r=e.document.createElement("div");return r.innerHTML=i,0===r.firstElementChild.getElementsByTagName("script").length?t:null}}),j=(R=P)&&R.__esModule&&Object.prototype.hasOwnProperty.call(R,"default")?R.default:R;const q=(t,e)=>t.classList.add(e),A=(t,e)=>t.classList.remove(e),L=async t=>await fetch(t).then(t=>t.text()).then(t=>j(t)),z="#177EE6",U="#273142",B="#fff",F="#58697F",H="0.875rem",D=I({base:{display:"inline","margin-right":"0.25rem"}}),J=I({base:{background:"none","box-sizing":"border-box","line-height":"1.15","-webkit-text-size-adjust":"100%",margin:0,"font-family":"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif","font-size":"15px",appearance:"none","border-radius":"0.25rem",border:"1px solid transparent","font-weight":500,outline:"none",padding:"0 1rem",opacity:1,color:F,"::before, ::after":{"box-sizing":"inherit","-webkit-font-smoothing":"antialiased"},":hover, :focus":{outline:"none"},":hover":{cursor:"pointer"}},primary:{"background-color":z,"border-color":B,color:B,height:"2.8rem",display:"inline-flex","align-items":"center","justify-content":"center"},text:{color:U,"font-weight":500,"font-size":`${H} !important`,"text-decoration":"underline",padding:0,":hover":{color:z}},noPadding:{padding:0},disabled:{opacity:.5,":hover":{cursor:"not-allowed"}},block:{width:"100%"},marginTop:{"margin-top":"1.5rem"},large:{height:"3.25rem"}}),X=T`<button class=${J.base}>#text</button>`;function G(t={}){const{text:e,type:n,block:o,large:i,loading:r,disabled:a,marginTop:s,noPadding:c,className:l}=t,d=X.cloneNode(!0),u=X.collect(d).text;if(d.update=t=>u.nodeValue=t,d.update(e),l&&q(d,l),n&&q(d,J[n]),o&&q(d,J.block),i&&q(d,J.large),a&&q(d,J.disabled),s&&q(d,J.marginTop),c&&q(d,J.noPadding),r){const t=document.createElement("span");return L("assets/spinner.svg").then(e=>{t.innerHTML=e,q(t.firstChild,D.base)}),t.cloneNode(!0),t}return d}const K=T`<span class=shopkit-buy-button></span>`;function Y(t){const{moltinText:e,moltinType:n,moltinProductId:o}=t,i=K.cloneNode(!0);return"custom"===n||o?(i.appendChild(G({text:e||"Add to Cart",type:"primary"})),i.__click=()=>(function(t){"custom"!==t.moltinType?M.dispatch("addItem",{id:t.moltinProductId}):M.dispatch("addItem",{type:"custom_item",name:t.moltinProductName,sku:t.moltinProductSku,price:{amount:parseInt(t.moltinProductPrice,10)}}),t.moltinOpenCart&&M.dispatch("goToCart")})(t),i):(console.warn("No product ID provided to Moltin Btn."),null)}const V=T`<span class=shopkit-cart-button></span>`;function Q(t){const{moltinText:e,moltinShowTotal:n}=t;let{count:o,subTotal:i}=M.get().cart;const r=V.cloneNode(!0);const a=()=>`${e||"Cart"}${(i||o?` (${n?i:l(o,"item")})`:null)||""}`,s=G({text:a(),type:"primary"});return r.appendChild(s),r.update=()=>{({count:o,subTotal:i}=M.get().cart),s.update(a())},N.on("cart",()=>r.update()),r.__click=()=>M.dispatch("openCart"),r}const W=n.extend(c);function initialize(t){let e,n,o,i,r,a,c;W.measure(()=>{e=t.querySelector("script[data-moltin-client-id]")}).then(()=>{e?(({moltinClientId:o,moltinStripePublishableKey:i,moltinCurrency:r}=e.dataset),i?function(t){(h=t).debounce=!1}(n=new f({fetch:b,client_id:o,application:"moltin-btn",...r&&{moltinCurrency:r}})):console.error("You must provide your Stripe Publishable Key to enable the Moltin Btn")):console.error("You must provide a Moltin Client ID to enable the Moltin Btn")}),W.measure(()=>{a=[...t.getElementsByClassName("moltin-buy-button")]}).then(()=>{d(a,t=>{W.mutate(()=>t.appendChild(Y({...t.dataset})))})}),W.measure(()=>{c=[...t.getElementsByClassName("moltin-cart-button")]}).then(()=>{d(c,t=>{W.mutate(()=>t.appendChild(Q({loading:!0,...t.dataset})))})}),s("click")}i().then(()=>initialize(document)),tt.notEqual=function(t,e,n){tt(t!=e,n)},tt.notOk=function(t,e){tt(!t,e)},tt.equal=function(t,e,n){tt(t==e,n)},tt.ok=tt;var Z=tt;function tt(t,e){if(!t)throw new Error(e||"AssertionError")}var et={},nt="undefined"!=typeof window,ot=nt&&window.requestIdleCallback,it=function t(e,n){n=n||et;var o;Z.equal(typeof e,"function","on-idle: cb should be type function");Z.equal(typeof n,"object","on-idle: opts should be type object");if(ot)return o=window.requestIdleCallback(function(o){if(o.timeRemaining()<=1&&!o.didTimeout)return t(e,n);e(o)},n),window.cancelIdleCallback.bind(window,o);if(nt)return o=setTimeout(e,0),clearTimeout.bind(window,o)};const rt=I({base:{display:"flex","align-items":"center","justify-content":"space-between"}}),at=I({button:{"background-color":"transparent",padding:"0.25rem"}}),st=I({base:{fill:"currentColor",width:"12px",height:"12px"}}),ct=T`<div class=${rt.base}></div>`;I({base:{"text-align":"center","margin-bottom":"1.5rem"}});const lt=T`<div class=${I({base:{"align-items":"center",display:"flex"}}).base}></div>`,dt=T`<a class=${I({base:{cursor:"pointer",display:"inline-flex","align-items":"center","font-family":"inherit","font-size":"100%","text-decoration":"none",margin:"0 auto",transition:"opacity 0.1s ease-in"}}).base}></a>`,ut=T`<span class=${I({base:{"margin-right":"0.5rem",color:F,"font-size":H}}).base}>Powered by</span>`,pt=I({base:{height:"2rem"}});const ft=T`<div></div>`;function ht(){const t=ft,e=function(){const t=lt,e=dt;e.target="_blank",e.href="https://www.moltin.com/commerce-solutions/embeddable-cart",L("assets/logo.svg").then(t=>{e.innerHTML+=t,q(e.lastChild,pt.base)});const n=ut;return e.appendChild(n),t.appendChild(e),t}();return t.appendChild(e),t}const mt=T`<div>Cart</div>`;const gt=T`<div>Checkout</div>`;const bt=I({base:{transition:"all 0.3s ease","background-color":"#fff",position:"fixed",top:0,bottom:0,right:0,"overflow-y":scroll,height:"100%","box-shadow":"0 25px 50px -12px rgba(0, 0, 0, 0.25)","z-index":1000000001,padding:"1.5rem",width:"100%","border-width":0,"max-width":"500px",display:"flex","flex-direction":"column","justify-content":"space-between","box-sizing":"border-box","line-height":1.15,"-webkit-text-size-adjust":"100%",margin:0,"font-family":"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif","font-size":"15px","*, *::before, *::after":{"box-sizing":"inherit","-webkit-font-smoothing":"antialiased"}},hidden:{opacity:0,visibility:"hidden",transform:"translateX(525px)","will-change":"transform, opacity"},visible:{opacity:1,visibility:"visible",transform:"translateX(0)"}}),yt=T`<div class="shopkit-modal ${bt.base} ${bt.hidden}"></div>`;function wt(t){switch(console.log(t),t){case"login":return null;case"orders":return document.createTextNode("Orderlist");case"shipping":case"billing":return gt;case"cart":default:return mt}}function xt(t={}){let{route:e}=M.get().modal;const n=yt,o=function({route:t}={}){const{dirty:e,completed:n}=M.get().checkout,o=ct.cloneNode(!0),i=document.createElement("span");"shipping"===t||"billing"===t&&!n?L("assets/modal-back.svg").then(t=>{i.innerHTML=t,q(i.firstChild,st.base)}):L("assets/modal-close.svg").then(t=>{i.innerHTML=t,q(i.firstChild,st.base)});const r=G({className:at.button});return r.appendChild(i),r.__click=()=>M.dispatch("closeModal"),o.append(r),o}({route:e}),i=ht();return n.update=({openModal:t,route:e})=>{(t=>t?q(n,bt.visible):A(n,bt.visible))(t),n.appendChild(o),n.appendChild(wt(e)),n.appendChild(i)},n}const vt=I({base:{transition:"all 0.3s ease","background-color":"#333",position:"fixed",top:0,right:0,bottom:0,left:0,"z-index":1e9},hidden:{opacity:0,visibility:"hidden","overflow-x":0,"will-change":"opacity"},visible:{opacity:.3,visibility:"visible","overflow-x":100}}),Ct=T`<div class="shopkit-modal-overlay ${vt.base} ${vt.hidden}"></div>`;function initializeCart(){M.dispatch("getCart");let{open:t,route:e}=M.get().modal;const n=document.createElement("div");q(n,"moltin-shopkit");const o=xt({openModal:t}),i=function(t={}){const{openModal:e}=t,n=Ct;function o(t){t?q(n,vt.visible):A(n,vt.visible)}return o(e),n.update=({openModal:t})=>{o(t)},n.__click=()=>M.dispatch("closeModal"),n}({openModal:t});N.on("modal",()=>{({open:t,route:e}=M.get().modal),o.update({openModal:t,route:e}),i.update({openModal:t})}),n.appendChild(o),n.appendChild(i),document.body.appendChild(n)}window.onload=()=>{it(()=>{initializeCart()})}}();
