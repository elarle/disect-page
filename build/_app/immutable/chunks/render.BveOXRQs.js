import{d as V,b as R,e as A,i as C,g as M,j as k,k as E,l as Y,H as j,m as q,o as b,p as g,q as D,a as B,t as v,u as P,v as $,w as z,x as W,y as F,z as G,A as J,B as K,C as Q,h as T,D as U,E as X}from"./runtime.DsQ-mFxd.js";import{b as Z}from"./disclose-version.C8KCGsre.js";const x=new Set,O=new Set;function m(e){var N;var r=this,s=r.ownerDocument,_=e.type,o=((N=e.composedPath)==null?void 0:N.call(e))||[],t=o[0]||e.target,d=0,h=e.__root;if(h){var u=o.indexOf(h);if(u!==-1&&(r===document||r===window)){e.__root=r;return}var l=o.indexOf(r);if(l===-1)return;u<=l&&(d=u)}if(t=o[d]||e.target,t!==r){V(e,"currentTarget",{configurable:!0,get(){return t||s}});var w=M,i=k;R(null),A(null);try{for(var a,n=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var c=t["__"+_];if(c!==void 0&&!t.disabled)if(C(c)){var[I,...L]=c;I.apply(t,[e,...L])}else c.call(t,e)}catch(y){a?n.push(y):a=y}if(e.cancelBubble||f===r||f===null)break;t=f}if(a){for(let y of n)queueMicrotask(()=>{throw y});throw a}}finally{e.__root=r,delete e.currentTarget,R(w),A(i)}}}const ee=["touchstart","touchmove"];function re(e){return ee.includes(e)}function se(e,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function te(e,r){return H(e,r)}function ie(e,r){E(),r.intro=r.intro??!1;const s=r.target,_=T,o=v;try{for(var t=Y(s);t&&(t.nodeType!==8||t.data!==j);)t=q(t);if(!t)throw b;g(!0),D(t),B();const d=H(e,{...r,anchor:t});if(v===null||v.nodeType!==8||v.data!==P)throw $(),b;return g(!1),d}catch(d){if(d===b)return r.recover===!1&&z(),E(),W(s),g(!1),te(e,r);throw d}finally{g(_),D(o)}}const p=new Map;function H(e,{target:r,anchor:s,props:_={},events:o,context:t,intro:d=!0}){E();var h=new Set,u=i=>{for(var a=0;a<i.length;a++){var n=i[a];if(!h.has(n)){h.add(n);var f=re(n);r.addEventListener(n,m,{passive:f});var c=p.get(n);c===void 0?(document.addEventListener(n,m,{passive:f}),p.set(n,1)):p.set(n,c+1)}}};u(F(x)),O.add(u);var l=void 0,w=G(()=>{var i=s??r.appendChild(J());return K(()=>{if(t){Q({});var a=X;a.c=t}o&&(_.$$events=o),T&&Z(i,null),l=e(i,_)||{},T&&(k.nodes_end=v),t&&U()}),()=>{var f;for(var a of h){r.removeEventListener(a,m);var n=p.get(a);--n===0?(document.removeEventListener(a,m),p.delete(a)):p.set(a,n)}O.delete(u),S.delete(l),i!==s&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(l,w),l}let S=new WeakMap;function oe(e){const r=S.get(e);r&&r()}export{ie as h,te as m,se as s,oe as u};