"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8905],{8905:(q,O,m)=>{m.r(O),m.d(O,{startInputShims:()=>X});var y=m(5861),p=m(4435),h=m(544),K=m(6884);m(7643);const A=new WeakMap,I=(t,e,s,n=0,r=!1)=>{A.has(t)!==s&&(s?k(t,e,n,r):H(t,e))},k=(t,e,s,n=!1)=>{const r=e.parentNode,o=e.cloneNode(!1);o.classList.add("cloned-input"),o.tabIndex=-1,n&&(o.disabled=!0),r.appendChild(o),A.set(t,o);const c="rtl"===t.ownerDocument.dir?9999:-9999;t.style.pointerEvents="none",e.style.transform=`translate3d(${c}px,${s}px,0) scale(0)`},H=(t,e)=>{const s=A.get(t);s&&(A.delete(t),s.remove()),t.style.pointerEvents="",e.style.transform=""},P="input, textarea, [no-blur], [contenteditable]",N="$ionPaddingTimer",T=(t,e,s)=>{const n=t[N];n&&clearTimeout(n),e>0?t.style.setProperty("--keyboard-offset",`${e}px`):t[N]=setTimeout(()=>{t.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},U=(t,e,s)=>{t.addEventListener("focusout",()=>{e&&T(e,0,s)},{once:!0})};let b=0;const w="data-ionic-skip-scroll-assist",V=(t,e,s,n,r,o,a,c=!1)=>{const i=o&&(void 0===a||a.mode===K.a.None),S=function(){var u=(0,y.Z)(function*(){e.hasAttribute(w)?e.removeAttribute(w):J(t,e,s,n,r,i,c)});return function(){return u.apply(this,arguments)}}();return t.addEventListener("focusin",S,!0),()=>{t.removeEventListener("focusin",S,!0)}},C=t=>{document.activeElement!==t&&(t.setAttribute(w,"true"),t.focus())},J=function(){var t=(0,y.Z)(function*(e,s,n,r,o,a,c=!1){if(!n&&!r)return;const i=((t,e,s)=>{var n;return((t,e,s,n)=>{const r=t.top,o=t.bottom,a=e.top,i=a+15,u=Math.min(e.bottom,n-s)-50-o,v=i-r,l=Math.round(u<0?-u:v>0?-v:0),_=Math.min(l,r-a),M=Math.abs(_)/.3;return{scrollAmount:_,scrollDuration:Math.min(400,Math.max(150,M)),scrollPadding:s,inputSafeY:4-(r-i)}})((null!==(n=t.closest("ion-item,[ion-item]"))&&void 0!==n?n:t).getBoundingClientRect(),e.getBoundingClientRect(),s,t.ownerDocument.defaultView.innerHeight)})(e,n||r,o);if(n&&Math.abs(i.scrollAmount)<4)return C(s),void(a&&null!==n&&(T(n,b),U(s,n,()=>b=0)));if(I(e,s,!0,i.inputSafeY,c),C(s),(0,h.r)(()=>e.click()),a&&n&&(b=i.scrollPadding,T(n,b)),typeof window<"u"){let S;const u=function(){var l=(0,y.Z)(function*(){void 0!==S&&clearTimeout(S),window.removeEventListener("ionKeyboardDidShow",v),window.removeEventListener("ionKeyboardDidShow",u),n&&(yield(0,p.c)(n,0,i.scrollAmount,i.scrollDuration)),I(e,s,!1,i.inputSafeY),C(s),a&&U(s,n,()=>b=0)});return function(){return l.apply(this,arguments)}}(),v=()=>{window.removeEventListener("ionKeyboardDidShow",v),window.addEventListener("ionKeyboardDidShow",u)};if(n){const l=yield(0,p.g)(n);if(i.scrollAmount>l.scrollHeight-l.clientHeight-l.scrollTop)return"password"===s.type?(i.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",v)):window.addEventListener("ionKeyboardDidShow",u),void(S=setTimeout(u,1e3))}u()}});return function(s,n,r,o,a,c){return t.apply(this,arguments)}}(),X=function(){var t=(0,y.Z)(function*(e,s){const n=document,r="ios"===s,o="android"===s,a=e.getNumber("keyboardHeight",290),c=e.getBoolean("scrollAssist",!0),i=e.getBoolean("hideCaretOnScroll",r),S=e.getBoolean("inputBlurring",r),u=e.getBoolean("scrollPadding",!0),v=Array.from(n.querySelectorAll("ion-input, ion-textarea")),l=new WeakMap,_=new WeakMap,j=yield K.K.getResizeMode(),M=function(){var f=(0,y.Z)(function*(d){yield new Promise(D=>(0,h.c)(d,D));const x=d.shadowRoot||d,g=x.querySelector("input")||x.querySelector("textarea"),L=(0,p.f)(d),W=L?null:d.closest("ion-footer");if(g){if(L&&i&&!l.has(d)){const D=((t,e,s)=>{if(!s||!e)return()=>{};const n=c=>{(t=>t===t.getRootNode().activeElement)(e)&&I(t,e,c)},r=()=>I(t,e,!1),o=()=>n(!0),a=()=>n(!1);return(0,h.a)(s,"ionScrollStart",o),(0,h.a)(s,"ionScrollEnd",a),e.addEventListener("blur",r),()=>{(0,h.b)(s,"ionScrollStart",o),(0,h.b)(s,"ionScrollEnd",a),e.removeEventListener("blur",r)}})(d,g,L);l.set(d,D)}if("date"!==g.type&&"datetime-local"!==g.type&&(L||W)&&c&&!_.has(d)){const D=V(d,g,L,W,a,u,j,o);_.set(d,D)}}});return function(x){return f.apply(this,arguments)}}();S&&(()=>{let t=!0,e=!1;const s=document;(0,h.a)(s,"ionScrollStart",()=>{e=!0}),s.addEventListener("focusin",()=>{t=!0},!0),s.addEventListener("touchend",a=>{if(e)return void(e=!1);const c=s.activeElement;if(!c||c.matches(P))return;const i=a.target;i!==c&&(i.matches(P)||i.closest(P)||(t=!1,setTimeout(()=>{t||c.blur()},50)))},!1)})();for(const f of v)M(f);n.addEventListener("ionInputDidLoad",f=>{M(f.detail)}),n.addEventListener("ionInputDidUnload",f=>{(f=>{if(i){const d=l.get(f);d&&d(),l.delete(f)}if(c){const d=_.get(f);d&&d(),_.delete(f)}})(f.detail)})});return function(s,n){return t.apply(this,arguments)}}()}}]);