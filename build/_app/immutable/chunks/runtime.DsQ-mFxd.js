var Tn=Array.isArray,mn=Array.from,xn=Object.defineProperty,lt=Object.getOwnPropertyDescriptor,Ht=Object.getOwnPropertyDescriptors,An=Object.prototype,gn=Array.prototype,Ut=Object.getPrototypeOf;const Rn=()=>{};function Sn(t){return t()}function Bt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,ft=4,L=8,X=16,y=32,G=64,D=128,U=256,p=512,g=1024,M=2048,P=4096,j=8192,Vt=16384,_t=32768,Dn=65536,Kt=1<<18,ct=1<<19,ot=Symbol("$state");function vt(t){return t===this.v}function $t(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function pt(t){return!$t(t,this.v)}function Gt(t){throw new Error("effect_in_teardown")}function Zt(){throw new Error("effect_in_unowned_derived")}function Wt(t){throw new Error("effect_orphan")}function zt(){throw new Error("effect_update_depth_exceeded")}function kn(){throw new Error("hydration_failed")}function On(t){throw new Error("props_invalid_value")}function In(){throw new Error("state_descriptors_fixed")}function Nn(){throw new Error("state_prototype_fixed")}function Jt(){throw new Error("state_unsafe_local_read")}function Qt(){throw new Error("state_unsafe_mutation")}function tt(t){return{f:0,v:t,reactions:null,equals:vt,version:0}}function Pn(t){return Xt(tt(t))}function Cn(t,n=!1){var e;const r=tt(t);return n||(r.equals=pt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function Xt(t){return a!==null&&a.f&m&&(E===null?vn([t]):E.push(t)),t}function Fn(t,n){return a!==null&&et()&&a.f&(m|X)&&(E===null||!E.includes(t))&&Qt(),tn(t,n)}function tn(t,n){return t.equals(n)||(t.v=n,t.version=bt(),ht(t,g),et()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(w(u,g),W(u)):A===null?pn([t]):A.push(t))),n}function ht(t,n){var r=t.reactions;if(r!==null)for(var e=et(),s=r.length,l=0;l<s;l++){var o=r[l],i=o.f;i&g||!e&&o===u||(w(o,n),i&(p|D)&&(i&m?ht(o,M):W(o)))}}const bn=1,qn=2,Ln=4,Mn=8,jn=16,Yn=1,Hn=2,nn="[",rn="[!",en="]",dt={},Un=Symbol();function Et(t){console.warn("hydration_mismatch")}let S=!1;function Bn(t){S=t}let d;function B(t){if(t===null)throw Et(),dt;return d=t}function Vn(){return B(k(d))}function Kn(t){if(S){if(k(d)!==null)throw Et(),dt;d=t}}function $n(t=1){if(S){for(var n=t,r=d;n--;)r=k(r);d=r}}function Gn(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===en){if(t===0)return n;t-=1}else(r===nn||r===rn)&&(t+=1)}var e=k(n);n.remove(),n=e}}var ut,yt,wt;function Zn(){if(ut===void 0){ut=window;var t=Element.prototype,n=Node.prototype;yt=lt(n,"firstChild").get,wt=lt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__e=void 0,Text.prototype.__t=void 0}}function Tt(t=""){return document.createTextNode(t)}function z(t){return yt.call(t)}function k(t){return wt.call(t)}function Wn(t){if(!S)return z(t);var n=z(d);return n===null&&(n=d.appendChild(Tt())),B(n),n}function zn(t,n){if(!S){var r=z(t);return r instanceof Comment&&r.data===""?k(r):r}return d}function Jn(t,n=1,r=!1){let e=S?d:t;for(;n--;)e=k(e);if(!S)return e;var s=e.nodeType;if(r&&s!==3){var l=Tt();return e==null||e.before(l),B(l),l}return B(e),e}function Qn(t){t.textContent=""}function sn(t){var n=m|g;u===null?n|=D:u.f|=ct;const r={children:null,ctx:f,deps:null,equals:vt,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(a!==null&&a.f&m){var e=a;(e.children??(e.children=[])).push(r)}return r}function Xn(t){const n=sn(t);return n.equals=pt,n}function mt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?nt(e):F(e)}}}function xt(t){var n,r=u;$(t.parent);try{mt(t),n=qt(t)}finally{$(r)}return n}function At(t){var n=xt(t),r=(O||t.f&D)&&t.deps!==null?M:p;w(t,r),t.equals(n)||(t.v=n,t.version=bt())}function nt(t){mt(t),q(t,0),w(t,j),t.v=t.children=t.deps=t.ctx=t.reactions=null}function gt(t){u===null&&a===null&&Wt(),a!==null&&a.f&D&&Zt(),rt&&Gt()}function ln(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function C(t,n,r,e=!0){var s=(t&G)!==0,l=u,o={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|g,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var i=I;try{at(!0),Z(o),o.f|=Vt}catch(c){throw F(o),c}finally{at(i)}}else n!==null&&W(o);var T=r&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&ct)===0;if(!T&&!s&&e&&(l!==null&&ln(o,l),a!==null&&a.f&m)){var x=a;(x.children??(x.children=[])).push(o)}return o}function tr(t){const n=C(L,null,!1);return w(n,p),n.teardown=t,n}function nr(t){gt();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:a})}else{var e=Rt(t);return e}}function rr(t){return gt(),on(t)}function er(t){const n=C(G,t,!0);return()=>{F(n)}}function Rt(t){return C(ft,t,!1)}function on(t){return C(L,t,!0)}function sr(t){return un(t)}function un(t,n=0){return C(L|X|n,t,!0)}function lr(t,n=!0){return C(L|y,t,!0,n)}function St(t){var n=t.teardown;if(n!==null){const r=rt,e=a;it(!0),K(null);try{n.call(null)}finally{it(r),K(e)}}}function Dt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)nt(n[r])}}function kt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function an(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Kt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:k(e);e.remove(),e=l}r=!0}Dt(t),kt(t,n&&!r),q(t,0),w(t,j);var o=t.transitions;if(o!==null)for(const T of o)T.stop();St(t);var i=t.parent;i!==null&&i.first!==null&&Ot(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ot(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function or(t,n){var r=[];It(t,r,!0),fn(r,()=>{F(t),n&&n()})}function fn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function It(t,n,r){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const o of t.transitions)(o.is_global||r)&&n.push(o);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&_t)!==0||(e.f&y)!==0;It(e,n,l?r:!1),e=s}}}function ur(t){Nt(t,!0)}function Nt(t,n){if(t.f&P){t.f^=P,Y(t)&&Z(t);for(var r=t.first;r!==null;){var e=r.next,s=(r.f&_t)!==0||(r.f&y)!==0;Nt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}let V=!1,J=[];function Pt(){V=!1;const t=J.slice();J=[],Bt(t)}function ar(t){V||(V=!0,queueMicrotask(Pt)),J.push(t)}function _n(){V&&Pt()}const Ct=0,cn=1;let H=Ct,b=!1,I=!1,rt=!1;function at(t){I=t}function it(t){rt=t}let R=[],N=0;let a=null;function K(t){a=t}let u=null;function $(t){u=t}let E=null;function vn(t){E=t}let _=null,h=0,A=null;function pn(t){A=t}let Ft=0,O=!1,f=null;function bt(){return++Ft}function et(){return f!==null&&f.l===null}function Y(t){var o,i;var n=t.f;if(n&g)return!0;if(n&M){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((o=r[s]).reactions??(o.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(Y(l)&&At(l),e&&u!==null&&!O&&!((i=l==null?void 0:l.reactions)!=null&&i.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||w(t,p)}return!1}function hn(t,n,r){throw t}function qt(t){var st;var n=_,r=h,e=A,s=a,l=O,o=E,i=f,T=t.f;_=null,h=0,A=null,a=T&(y|G)?null:t,O=!I&&(T&D)!==0,E=null,f=t.ctx;try{var x=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(q(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!O)for(v=h;v<c.length;v++)((st=c[v]).reactions??(st.reactions=[])).push(t)}else c!==null&&h<c.length&&(q(t,h),c.length=h);return x}finally{_=n,h=r,A=e,a=s,O=l,E=o,f=i}}function dn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,M),n.f&(D|U)||(n.f^=U),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)dn(t,r[e])}function Z(t){var n=t.f;if(!(n&j)){w(t,p);var r=u;u=t;try{Dt(t),n&X?an(t):kt(t),St(t);var e=qt(t);t.teardown=typeof e=="function"?e:null,t.version=Ft}catch(s){hn(s)}finally{u=r}}}function Lt(){N>1e3&&(N=0,zt()),N++}function Mt(t){var n=t.length;if(n!==0){Lt();var r=I;I=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var l=[];jt(s,l),En(l)}}finally{I=r}}}function En(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(j|P))&&Y(e)&&(Z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ot(e):e.fn=null))}}function yn(){if(b=!1,N>1001)return;const t=R;R=[],Mt(t),b||(N=0)}function W(t){H===Ct&&(b||(b=!0,queueMicrotask(yn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|y)){if(!(r&p))return;n.f^=p}}R.push(n)}function jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&y)!==0,o=l&&(s&p)!==0;if(!o&&!(s&P))if(s&L){l?r.f^=p:Y(r)&&Z(r);var i=r.first;if(i!==null){r=i;continue}}else s&ft&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var x=v.next;if(x!==null){r=x;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),jt(i,n)}function Yt(t){var n=H,r=R;try{Lt();const s=[];H=cn,R=s,b=!1,Mt(r);var e=t==null?void 0:t();return _n(),(R.length>0||s.length>0)&&Yt(),N=0,e}finally{H=n,R=r}}async function ir(){await Promise.resolve(),Yt()}function fr(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&j){var e=xt(t);return nt(t),e}if(a!==null){E!==null&&E.includes(t)&&Jt();var s=a.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),A!==null&&u!==null&&u.f&p&&!(u.f&y)&&A.includes(t)&&(w(u,g),W(u))}else if(r&&t.deps===null){var l=t,o=l.parent;o!==null&&!((i=o.deriveds)!=null&&i.includes(l))&&(o.deriveds??(o.deriveds=[])).push(l)}return r&&(l=t,Y(l)&&At(l)),t.v}function _r(t){const n=a;try{return a=null,t()}finally{a=n}}const wn=~(g|M|p);function w(t,n){t.f=t.f&wn|n}function cr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:tt(!1)})}function vr(t){const n=f;if(n!==null){const o=n.e;if(o!==null){var r=u,e=a;n.e=null;try{for(var s=0;s<o.length;s++){var l=o[s];$(l.effect),K(l.reaction),Rt(l.fn)}}finally{$(r),K(e)}}f=n.p,n.m=!0}return{}}function pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ot in t)Q(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ot in r&&Q(r)}}}function Q(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{Q(t[e],n)}catch{}const r=Ut(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ht(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{lt as $,Tt as A,lr as B,cr as C,vr as D,f as E,Hn as F,rr as G,nn as H,nr as I,_r as J,Bt as K,fr as L,Sn as M,pr as N,sn as O,Rn as P,tr as Q,Cn as R,Fn as S,Yn as T,sr as U,ot as V,An as W,gn as X,tt as Y,In as Z,Un as _,Vn as a,Nn as a0,Ut as a1,un as a2,rn as a3,Gn as a4,ur as a5,or as a6,_t as a7,Rt as a8,on as a9,ar as aa,On as ab,Dn as ac,Ln as ad,pt as ae,y as af,G as ag,bn as ah,qn as ai,Mn as aj,Xn as ak,j as al,jn as am,Yt as an,ir as ao,Pn as ap,$t as aq,K as b,Wn as c,xn as d,$ as e,zn as f,a as g,S as h,Tn as i,u as j,Zn as k,z as l,k as m,$n as n,dt as o,Bn as p,B as q,Kn as r,Jn as s,d as t,en as u,Et as v,kn as w,Qn as x,mn as y,er as z};
