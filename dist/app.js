!function(){"use strict";function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),o.forEach(function(n){e(t,n,r[n])})}return t}function n(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function r(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function i(e,t){return e(t={exports:{}},t.exports),t.exports}var a=i(function(e){!function(t){var n=function(){},r=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(e){return setTimeout(e,16)};function o(){this.reads=[],this.writes=[],this.raf=r.bind(t)}function i(e){e.scheduled||(e.scheduled=!0,e.raf(function(e){var t,r=e.writes,o=e.reads;try{n("flushing reads",o.length),a(o),n("flushing writes",r.length),a(r)}catch(e){t=e}e.scheduled=!1,(o.length||r.length)&&i(e);if(t){if(n("task errored",t.message),!e.catch)throw t;e.catch(t)}}.bind(null,e)))}function a(e){for(var t;t=e.shift();)t()}function s(e,t){var n=e.indexOf(t);return!!~n&&!!e.splice(n,1)}o.prototype={constructor:o,measure:function(e,t){var n=t?e.bind(t):e;return this.reads.push(n),i(this),n},mutate:function(e,t){var n=t?e.bind(t):e;return this.writes.push(n),i(this),n},clear:function(e){return s(this.reads,e)||s(this.writes,e)},extend:function(e){if("object"!=typeof e)throw new Error("expected object");var t=Object.create(this);return function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])}(t,e),t.fastdom=this,t.initialize&&t.initialize(),t},catch:null};var c=t.fastdom=t.fastdom||new o;e.exports=c}("undefined"!=typeof window?window:o)}),s=i(function(e){!function(){var t={initialize:function(){this._tasks=new Map},mutate:function(e,t){return n(this,"mutate",e,t)},measure:function(e,t){return n(this,"measure",e,t)},clear:function(e){var t=this._tasks,n=t.get(e);this.fastdom.clear(n),t.delete(e)}};function n(e,t,n,r){var o,i=e._tasks,a=e.fastdom,s=new Promise(function(e,c){o=a[t](function(){i.delete(s);try{e(r?n.call(r):n())}catch(e){c(e)}},r)});return i.set(s,o),s}"f"=="undefined"[0]?(void 0)(function(){return t}):"o"=="object"[0]?e.exports=t:window.fastdomPromised=t}()});function c(e){if(3!==e.nodeType){if(void 0!==e.attributes)for(let t of Array.from(e.attributes)){let n=t.name;if("#"===n[0])return e.removeAttribute(n),n.slice(1)}return 0}{let t=e.nodeValue;return"#"===t[0]?(e.nodeValue="",t.slice(1)):0}}const u=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1);u.roll=function(e){for(;--e;)this.nextNode();return this.currentNode};class l{constructor(e,t){this.idx=e,this.ref=t}}function f(e){const t={},n=u;return n.currentNode=e,this._refPaths.map(e=>t[e.ref]=n.roll(e.idx)),t}function d(e){e._refPaths=function(e){const t=u;t.currentNode=e;let n,r=[],o=0;do{(n=c(e))?(r.push(new l(o+1,n)),o=1):o++}while(e=t.nextNode());return r}(e),e.collect=f}const m=document.createElement("template");function h(e,...t){const n=String.raw(e,...t).replace(/>\n+/g,">").replace(/\s+</g,"<").replace(/>\s+/g,">").replace(/\n\s+/g,"\x3c!-- --\x3e");m.innerHTML=n;const r=m.content.firstChild;return d(r),r}const p=(e,t)=>{const n=`__${t}`;let r=e.target;for(;null!==r;){const t=r[n];if(t)return void t(e);r=r.parentNode}},b={};function g(){const{possible:e,n:t}=g;let n,r=t.toString(26).split(""),o="";for(;n=r.shift();)o+=e[parseInt(n,26)];return g.n++,o}g.possible="abcdefghijklmnopqrstuvwxyz",g.n=0;let y=document.createElement("style");function v(e){for(let t in e){const n=`${t}-${g()}`,r=y.insertRule(`.${n} {}`,y.cssRules.length),o=y.cssRules[r].style,i=e[t];for(let e in i)if(":"===e[0]||" "===e[0]){const t=y.insertRule(`.${n}${e} {}`,y.cssRules.length),r=y.cssRules[t].style;Object.assign(r,i[e]),delete i[e]}Object.assign(o,i),e[t]=n}return e}y.id="stage0",document.head.appendChild(y),y=y.sheet;var w="#177EE6",x="#273142",j="#fff",k="#58697F",O="0.875rem";function S(){var e=n(['\n  <button class="','">Buy Button</button>\n']);return S=function(){return e},e}function A(){var e=n(['<img src="spinner.svg" class=',' alt="Loading" />']);return A=function(){return e},e}var N,z=v({base:{display:"inline","margin-right":"0.25rem"}}),P=h(A(),z.base),C=v({base:{background:"none","box-sizing":"border-box","line-height":"1.15","-webkit-text-size-adjust":"100%",margin:0,"font-family":"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif","font-size":"15px",appearance:"none","border-radius":"0.25rem",border:"1px solid transparent","font-weight":500,outline:"none",color:k,"::before, ::after":{"box-sizing":"inherit","-webkit-font-smoothing":"antialiased"},":hover, :focus":{outline:"none"},":hover":{cursor:"pointer"},block:{width:"100%"},marginTop:{"margin-top":"1.5rem"}},primary:{"background-color":w,"border-color":j,color:j,height:"2.8rem",display:"inline-flex","align-items":"center","justify-content":"center",large:{height:"3.25rem"}},text:{color:x,"font-weight":500,"font-size":"".concat(O," !important"),"text-decoration":"underline",padding:0,":hover":{color:w}}}),T=h(S(),C.base);function E(){var e=n(['\n  <span class="shopkit-button"></span>\n']);return E=function(){return e},e}b[N="click"]||(document.addEventListener(N,e=>p(e,N)),b[N]=!0);var R=h(E());function _(e,t){return document.createTextNode("Cart Button")}R.appendChild(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=T,n=e.type,r=e.block,o=e.marginTop,i=e.large,a=e.loading;return r&&t.classList.add(C.base.block),o&&t.classList.add(C.base.marginTop),i&&t.classList.add(C.primary.large),n&&t.classList.add(C[n]),a?P:t}({type:"primary"}));var L=a.extend(s);function B(e){var n,o,i,a;L.measure(function(){n=e.querySelector("script[data-moltin-client-id]")}).then(function(){if(n){var e=n.dataset;e.moltinClientId,o=e.moltinStripePublishableKey,e.moltinCurrency,o||console.error("You must provide your Stripe Publishable Key to enable the Moltin Btn")}else console.error("You must provide a Moltin Client ID to enable the Moltin Btn")}),L.measure(function(){i=r(e.getElementsByClassName("moltin-buy-button"))}).then(function(){for(var e=i.length,n=function(){var n=i[e];L.mutate(function(){return n.appendChild((e=t({},n.dataset),r=R.cloneNode(!0),R.collect(r),r.__click=function(){return console.debug(e)},r));var e,r})};e--;)n()}),L.measure(function(){a=r(e.getElementsByClassName("moltin-cart-button"))}).then(function(){for(var e=a.length,n=function(){var n=a[e];L.mutate(function(){return n.appendChild(_(t({},n.dataset)))})};e--;)n()})}document.onreadystatechange=function(){"complete"===document.readyState&&B(document)}}();