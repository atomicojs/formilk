var e,t,n=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,a=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&a(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&a(e,n,t[n]);return e},d=(e,t)=>{var n={};for(var o in e)i.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n},u=(e,t,n)=>(a(e,"symbol"!=typeof t?t+"":t,n),n),h=(e,t,n)=>(((e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)})(e,t,"read from private field"),n?n.call(e):t.get(e)),p=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};function f(e,t){let n=e.length;if(n!==t.length)return!1;for(let o=0;o<n;o++)if(e[o]!==t[o])return!1;return!0}const m=e=>"function"==typeof e,g=e=>"object"==typeof e;class b{constructor(e,t,n){this.message=t,this.target=e,this.value=n}}const v={true:1,"":1,1:1};function y(e,t,n,o,r){let{type:s,reflect:i,event:l,value:a,attr:c=x(t)}=g(n)&&null!=n?n:{type:n},d=!(s==Function||null==s);Object.defineProperty(e,t,{configurable:!0,set(e){let n=this[t],{error:o,value:r}=E(s,d&&m(e)?e(n):e);if(o&&null!=r)throw new b(this,`The value defined for prop '${t}' must be of type '${s.name}'`,r);n!=r&&(this.update({[t]:r}),l&&w(this,l),this.updated.then((()=>{i&&(this._ignoreAttr=c,k(this,s,c,this[t]),this._ignoreAttr=null)})))},get(){return this._props[t]}}),null!=a&&(r[t]=a),o[c]={prop:t,type:s}}const w=(e,t)=>{var n=t,{type:o,base:r=CustomEvent}=n,s=d(n,["type","base"]);return e.dispatchEvent(new r(o,s))},x=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),k=(e,t,n,o)=>null==o||t==Boolean&&!o?e.removeAttribute(n):e.setAttribute(n,g(o)?JSON.stringify(o):t==Boolean?"":o),E=(e,t)=>null==e?{value:t}:e!=String&&""===t?{value:null}:{}.toString.call(t)==`[object ${e.name}]`?{value:t,error:e==Number&&Number.isNaN(t)}:{value:t,error:!0};let C,S;function $(){return j(((e={current:C.host})=>e))}function j(e,t,n){return C.use(e,t,n)}function O(){return C.update}const D={id:1,className:1,checked:1,value:1,selected:1},A={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},L={shadowDom:1,renderOnce:1,children:1,key:1},N={},_=[],I=document;class M extends Text{get nodeType(){return-1}}const P=Symbol(),z=Symbol();function T(e,t,...n){let o=t||N,{children:r}=o;r=null!=r?r:n.length?n:_;const s=!!e&&(e instanceof Node?1:e.prototype instanceof HTMLElement&&2);return{$$:P,type:e,props:o,children:r,key:o.key,shadow:o.shadowDom,once:o.renderOnce,raw:s,is:o.is}}function B(e,t,n=z,o,r){let s;if(t&&t[n]&&t[n].vnode==e||e.$$!=P)return t;if((e||!t)&&(r=r||"svg"==e.type,s=!("host"==e.type||(1==e.raw?t==e.type:2==e.raw?t instanceof e.type:t?t.localName==e.type:t)),s)){if(e.ref)return e.ref.cloneNode(!0);null!=e.type&&(e.ref=t=1==e.raw?e.type:2==e.raw?new e.type:r?I.createElementNS("http://www.w3.org/2000/svg",e.type):I.createElement(e.type,e.is?{is:e.is}:void 0))}let{vnode:i=N,cycle:l=0,fragment:a,handlers:c}=t[n]?t[n]:N,{children:d=_,props:u=N}=i;if(c=s?{}:c||{},e.once&&!s)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open"}),e.props!=u&&function(e,t,n,o,r){for(let s in t)s in n||q(e,s,t[s],null,r,o);for(let s in n)q(e,s,t[s],n[s],r,o)}(t,u,e.props,c,r),e.children!==d){let s=e.shadow?t.shadowRoot:t;a=function(e,t,n,o,r,s){e=null==e?null:Array.isArray(e)?e:[e];let i,l=t||function(e,t){const n=new M(""),o=new M("");return e[t?"prepend":"append"](n),e.append(o),{s:n,e:o}}(n,r),{s:a,e:c,k:d}=l,u=d&&new Set,h=a;function p(e){let{length:t}=e;for(let l=0;l<t;l++){let t=e[l],a=typeof t;if(null==t||"boolean"==a||"function"==a)continue;if(Array.isArray(t)){p(t);continue}if("object"==a&&t.$$!=P)continue;let f=t.$$&&t.key,m=d&&null!=f&&d.get(f);h!=c&&h===m?u.delete(h):h=h==c?c:h.nextSibling;let g=d?m:h,b=g;if(t.$$)b=B(t,g,o,r,s);else{let e=t+"";3!=b.nodeType?b=new Text(e):b.data!=e&&(b.data=e)}b!=h&&(d&&u.delete(b),!g||d?(n.insertBefore(b,h),d&&h!=c&&u.add(h)):g==c?n.insertBefore(b,c):(n.replaceChild(b,g),h=b)),null!=f&&(i=i||new Map,i.set(f,b))}}if(e&&p(e),h=h==c?c:h.nextSibling,t&&h!=c)for(;h!=c;){let e=h;h=h.nextSibling,e.remove()}return u&&u.forEach((e=>e.remove())),l.k=i,l}(e.children,a,s,n,!l&&o,(!r||"foreignObject"!=e.type)&&r)}return l++,t[n]={vnode:e,handlers:c,fragment:a,cycle:l},t}function q(e,t,n,o,r,s){if(n=null==n?null:n,o=null==o?null:o,(t="class"!=t||r?t:"className")in e&&D[t]&&(n=e[t]),o!==n&&!L[t]&&"_"!=t[0])if("o"==t[0]&&"n"==t[1]&&(m(o)||m(n)))!function(e,t,n,o){o.handleEvent||(o.handleEvent=t=>o[t.type].call(e,t));n?(o[t]||e.addEventListener(t,o),o[t]=n):o[t]&&(e.removeEventListener(t,o),delete o[t])}(e,t.slice(2),o,s);else if("ref"==t)o&&(o.current=e);else if("style"==t){let t=e.style;o=o||"";let r=g(n=n||""),s=g(o);if(r)for(let e in n){if(!s)break;e in o||R(t,e,null)}if(s)for(let e in o){let s=o[e];r&&n[e]===s||R(t,e,s)}else t.cssText=o}else!r&&!A[t]&&t in e||m(o)||m(n)?e[t]=null==o?"":o:null==o?e.removeAttribute(t):e.setAttribute(t,g(o)?JSON.stringify(o):o)}function R(e,t,n){let o="setProperty";null==n&&(o="removeProperty",n=null),~t.indexOf("-")?e[o](t,n):e[t]=n}const H=!!document.adoptedStyleSheets,U=null;function W(e,t=HTMLElement){let n={},o={},{props:r,styles:s}=e;return class extends t{constructor(){super(),this._setup(),this._render=()=>e(c({},this._props));for(let e in o)this[e]=o[e]}static get styles(){return[].concat(super.styles||[],s||[])}async _setup(){if(this._props)return;this._props={},this.mounted=new Promise((e=>this.mount=e)),this.unmounted=new Promise((e=>this.unmount=e)),this.symbolId=this.symbolId||Symbol();let e,t=function(e,t){let n={},o={use:function(e,t,o){let r=S++;return n[r]=[e(n[r]?n[r][0]:void 0),t,o],n[r][0]},host:t,update:e};function r(e,t){for(let o in n){let r=n[o];r[e]&&(r[0]=r[e](r[0],t))}}return{load:function(e){let t;S=0,C=o;try{t=e()}finally{C=null}return t},cleanEffects:function(e){return r(1,e),()=>{r(2,e),e&&(n={})}}}}((()=>this.update()),this),n=!0,o="hydrate"in this.dataset;this.update=r=>{if(e||(e=!0,this.updated=(this.updated||this.mounted).then((()=>{try{return B(t.load(this._render),this,this.symbolId,n&&o),e=!1,n&&(n=!1,function(e){let{styles:t}=e.constructor,{shadowRoot:n}=e;n&&t.length&&(t=[...new Set(t)],H?n.adoptedStyleSheets=[...t]:t.map((e=>n.appendChild(e.cloneNode(!0)))))}(this)),!U&&t.cleanEffects()}finally{e=!1}})).then((e=>{e&&e()}))),r)for(let e in r)this._props[e]=r[e];return this.updated},this.update(),await this.unmounted,t.cleanEffects(!0)()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),await this.mounted,!this.isConnected&&this.unmount()}attributeChangedCallback(e,t,o){if(n[e]){if(e===this._ignoreAttr||t===o)return;let{prop:r,type:s}=n[e];this[r]=((e,t)=>e==Boolean?!!v[t]:e==Number?Number(t):e==Array||e==Object?JSON.parse(t):t)(s,o)}else super.attributeChangedCallback(e,t,o)}static get observedAttributes(){let e=super.observedAttributes||[];for(let t in r)y(this.prototype,t,r[t],n,o);return Object.keys(n).concat(e)}}}let J=e=>(t,n)=>{let o=([e,n],o)=>{if(!o)return[e||t(n),n];m(e)&&e()};j((([e,t]=[])=>(!t&&t||(t&&f(t,n)?e=e||!0:(m(e)&&e(),e=null)),[e,n])),1==e&&o,2==e&&o)},Z=J(1),F=J(2);function V(e){let t=$();if(e in t.current){if(!t[e]){let n=[null,n=>t.current[e]=n];t[e]=n}return t[e][0]=t.current[e],t[e]}}function X(e){let t=O();return j(((n=[])=>(n[1]||(n[0]=m(e)?e():e,n[1]=e=>{(e=m(e)?e(n[0]):e)!=n[0]&&(n[0]=e,t())}),n)))}function G(e){return j(((t={current:e})=>t))}function K(e,t){let[n]=j((([n,o,r=0]=[])=>((!o||o&&!f(o,t))&&(n=e(t)),[n,t,r])));return n}const Q={};function Y(e,...t){let n=e.reduce(((e,n,o)=>e+n+(t[o]||"")),"");return Q[n]=Q[n]||function(e){if(H){let t=new CSSStyleSheet;return t.replaceSync(e),t}{let t=I.createElement("style");return t.textContent=e,t}}(n)}var ee=function(e,t,n,o){var r;t[0]=0;for(var s=1;s<t.length;s++){var i=t[s++],l=t[s]?(t[0]|=i?1:2,n[t[s++]]):t[++s];3===i?o[0]=l:4===i?o[1]=Object.assign(o[1]||{},l):5===i?(o[1]=o[1]||{})[t[++s]]=l:6===i?o[1][t[++s]]+=l+"":i?(r=e.apply(l,ee(e,l,n,["",null])),o.push(r),l[0]?t[0]|=2:(t[s-2]=0,t[s]=r)):o.push(l)}return o},te=new Map;const ne=function(e){var t=te.get(this);return t||(t=new Map,te.set(this,t)),(t=ee(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,o=1,r="",s="",i=[0],l=function(e){1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===o&&(e||r)?(i.push(3,e,r),o=2):2===o&&"..."===r&&e?i.push(4,e,0):2===o&&r&&!e?i.push(5,0,!0,r):o>=5&&((r||!e&&5===o)&&(i.push(o,0,r,n),o=6),e&&(i.push(o,e,0,n),o=6)),r=""},a=0;a<e.length;a++){a&&(1===o&&l(),l(a));for(var c=0;c<e[a].length;c++)t=e[a][c],1===o?"<"===t?(l(),i=[i],o=3):r+=t:4===o?"--"===r&&">"===t?(o=1,r=""):r=t+r[0]:s?t===s?s="":r+=t:'"'===t||"'"===t?s=t:">"===t?(l(),o=1):o&&("="===t?(o=5,n=r,r=""):"/"===t&&(o<5||">"===e[a][c+1])?(l(),3===o&&(i=i[0]),o=i,(i=i[0]).push(2,0,o),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),o=2):r+=t),3===o&&"!--"===r&&(o=4,i=i[0])}return l(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind(T);function oe(e){const[t,n]=X([]);return F((()=>{const{current:t}=e;if(!t)return;const o="slotchange",r=()=>n(t.assignedNodes().filter((e=>!(e instanceof M))));return r(),t.addEventListener(o,r),()=>t.removeEventListener(o,r)}),[]),t}const re=/,\s*([^,]+)\s+(?:(\d+)(?:x(\d+)){0,1}(px|em|rem))/,se={},ie={};function le(e){const[t,n]=function(e){if(se[e])return se[e];const t=[];let n;for(;n=e.match(re);){const[o,r,s,i,l]=n;e=e.replace(o,""),t.push({value:r,width:Number(s),height:Number(i||""),type:l})}return[e.replace(/\s*,(.*)/,"").trim(),t.sort(((e,t)=>e.height>t.height?-1:1)).sort(((e,t)=>e.width>t.width?-1:e.width==t.height?0:1))]}(e),[o,r]=X(s);function s(){const e=n.find((e=>ae(e).matches));return e?e.value:t}return F((()=>{const e=()=>r(s);return e(),n.forEach((t=>ae(t).addListener(e))),()=>n.forEach((t=>ae(t).removeListener(e)))}),[e]),o}const ae=({width:e,height:t,type:n})=>{const o=(e?`(min-width: ${e}${n})`:"")+(t?`and (min-height: ${t}${n})`:"");return ie[o]=ie[o]||window.matchMedia(o)};const ce=T("host");function de(e){return e&&"object"==typeof e?e="host"==e.type?e:T("host",null,e):ce}function ue(e,t){const n=$();n.id=n.id||Symbol(),K((()=>B(de(e()),n.current,n.id)),t),F((()=>()=>B(de(),n.current,n.id)),[])}function he(e){const t=$();return K((()=>{let{current:n}=t;for(;n=n.parentNode||n.host;)if(n.matches&&n.matches(e))return{current:n};return{}}),[e])}function pe(e,t,n){F((()=>{if(!e.current)return;const o=new MutationObserver(t);return o.observe(e.current,n),()=>o.disconnect()}),[e])}function fe(e,t,n){!function(e,t,n,o){const r=G();r.current=n,Z((()=>{const{current:n}=e;if(!n)return;let s=e=>r.current(e);return n.addEventListener(t,s,o),()=>n.removeEventListener(n,s)}),[t,!!n])}(he("form"),e,t,n)}let me,ge,be;const ve=[[/!\[([^\]]+)\]\(([^)]+)\)/g,(e,t)=>me(be.image,{src:t,title:e})],[/\[([^\]]+)\]\(([^)]+)\)/g,(e,t)=>me("a",{href:t},we(e))],[/\*\*([^*]+)\*\*/g,e=>me(be.bold,null,we(e))],[/_([^_]+)_/g,e=>me(be.italic,null,we(e))],[/(?:~([^~]+)~|`([^`]+)`)/g,(e,t)=>me(be.inlineCode,null,we(e||t))]],ye=e=>`<${e}>`;function we(e){return ve.reduce(((e,[t,n])=>e.replace(t,((e,...t)=>ye(ge.push(n(...t))-1)))),e).split(/(<\d+>)/).map((e=>{const t=e.match(/^<(\d+)>/);if(t){const[,e]=t;return ge[e]}return e})).filter((e=>e))}const xe={link:"a",title:"h*",text:"p",inlineCode:"code",code:"pre",nestedCode:"code",quote:"blockquote",table:"table",tableRow:"tr",tableCol:"td",bold:"strong",italic:"i",image:"img",list:["ol","ul"],listItem:"li",tab:"    "};var ke,Ee,Ce=(ke=T,Ee={code:"doc-code",table:"doc-table",quote:"doc-quote"},(e,...t)=>function(e,t,n,o){me=t,ge=n,be=o;const r=function(e){const t=[],n=e.split(/\n/).map((e=>{const n=e.match(/^(\s*)(.*)/),[,o,r]=n,s=o.split("").reduce(((e,t)=>e+t.charCodeAt(0)),0);return t.includes(s)||t.push(s),[s,r]}));return t.sort(((e,t)=>e>t?1:-1)),n.map((([e,n])=>[t.indexOf(e),n]))}(e),{length:s}=r,i=[];let l,a;for(let c=0;c<s;c++){const[e,n]=r[c],o=n.match(/^(~~~|```|---)(.*)/);if(o){const[,e,t]=o;let n=[];for(;++c&&r[c]&&r[c][1]!==e;)n.push(be.tab.repeat(r[c][0]>-1?r[c][0]:0)+r[c][1]);i.push(me(be.code,{type:t,"data-type":t,meta:"---"===e},me(be.nestedCode,null,n.join("\n"))));continue}const s=n.match(/^(\d+\.|-|\+)\s*(.+)/);if(s){const[,e,t]=s;l||(l=[be.list[/\d+\./.test(e)?0:1],[]]),l[1].push(me(be.listItem,null,we(t)));continue}const d=n.match(/^\|(.+)/);if(d){const[,e]=d;a||(a=[]);const t=e.split(/\|/);/^-+$/.test(t[0].trim())||a.push(me(be.tableRow,null,t.slice(0,t.length-1).map((e=>me(be.tableCol,null,we(e.trim()))))));continue}l&&(i.push(me(l[0],null,l[1])),l=null),a&&(i.push(me(be.table,null,a)),a=null);const u=n.match(/^([\#]+)\s*(.+)/);if(u){const[,e,n]=u;i.push(t(be.title.replace("*",e.length+""),null,we(n)));continue}const h=n.match(/^>\s*(.+)/);if(h){const[,e]=h;i.push(me(be.quote,null,we(e)))}else n&&i.push(me(be.text,null,we(n)))}return i}(e.reduce(((e,n,o)=>e+(n+(t[o]?ye(o):""))),""),ke,t,c(c({},xe),Ee)));function Se(e){history.pushState({},"history",e),window.dispatchEvent(new PopStateEvent("popstate"))}function $e(e){return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}const je=()=>location.pathname+location.hash+location.search,Oe="(?:(?:/){0,1}#(?:/){0,1})";const De=e=>e.replace(/([.+^()\-:])/g,"\\$1"),Ae=e=>e.split(/(\?.*)/);function Le(e){const[t]=Ae(e),[n,o]=function(e){const t=[],n=e.replace(/#(\/){0,1}/,"/#").split(/\//g).map((e=>{if(!e)return"";const[,n="",o,r,s]=e.match(/(#){0,1}([\{\[]){0,1}(\.\.\.){0,1}(\w*)([\}\]]){0,1}/);if("{"==o||"["==o){t.push(s);const e="["==o?"*":"+",i=(n?Oe:"(?:/)")+("["==o?"{0,1}":"{1}");return r?`${i}(.${e})`:`${i}([^/#]${e})`}return(n?Oe:"/")+De(n?e.slice(1):e)})).join(""),o=!n.indexOf(Oe);return[RegExp((o?"":"^")+(n||"(?:/){0,1}")+(!o&&"/"!=e&&e.endsWith("/")?"/":"")+"$"),t]}(t);return e=>{const[t]=Ae(e),r=t.match(n);if(r){const[,...e]=r,t={};return e.reduce(((e,t,n)=>(e[o[n]]=t,e)),t)}}}const Ne={},_e=e=>Ne[e]=Ne[e]||Le(e),Ie=(e,t)=>{const[n,o]=Ae(t),r=o?function(e,t={}){return e.replace(/(?:\?|&){1}([^=&]+)(?:=([^\?&]+)){0,1}/g,((e,n,o)=>(t[n]=o,""))),t}(o):{};for(const s in e){const o=_e(s)(n);if(o)return[e[s](o,r),t,o,r]}},Me={};class Pe extends Event{constructor(n,o,r=!1){super(o,{bubbles:!0,composed:r}),p(this,e,new ze),p(this,t,new ze),this.host=n}cast(t){h(this,e).emit(this.castDown=t)}connect(e){e&&(this.observe=e),this.host.dispatchEvent(this);const n=e=>{e instanceof this.constructor&&e.type==this.type&&(e.stopPropagation(),e._sync(this))};this.host.addEventListener(this.type,n),h(this,t).add((()=>{delete this.observe,this.host.removeEventListener(this.type,n)}))}disconnect(){h(this,t).emit()}_sync(n){const o=t=>{this.castUp=t,this.observe&&this.observe(t),!("castDown"in this)&&h(this,e).emit(t)};h(this,t).add(h(n,e).add(o)),"castDown"in n?o(n.castDown):"castUp"in n&&o(n.castUp)}}e=new WeakMap,t=new WeakMap;class ze extends Set{constructor(){super(...arguments),u(this,"add",(e=>super.add(e)&&(()=>this.delete(e)))),u(this,"emit",(e=>this.forEach((t=>t(e)))))}}function Te(e){const t=$(),[n,o]=X();return Z((()=>{const n=new Pe(t.current,e,!0);return t.channel=n,n.connect(o),()=>n.disconnect()}),[e]),[n,e=>t.channel.cast(e)]}const Be=Symbol();function qe(){const{current:e}=$(),t=()=>function(e){const{symbolId:t}=e,n=[];return e.childNodes.forEach((e=>{e[t]||e[t]&&!e[Be]||(e[Be]=!0,n.push(e))})),n}(e),[n,o]=X(t);return[n,()=>o(t)]}const Re=e=>()=>{const{current:t}=e;t&&function(e){const t=document.createElement("textarea");t.style="width:0;height:0;opcity:0",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}("value"in t?t.value:t.textContent)};function He(){return T("host",{shadowDom:!0})}He.props={slot:{type:String,reflect:!0,value:"router-case"},path:{type:String,reflect:!0,path:"/"},for:{type:String,reflect:!0},load:null};var Ue=W(He),We=new Map;function Je({transition:e,path:t}){const[n,s]=X(),[i,l]=X({}),[a,u]=Te("InheritPath"),h=(a||"")+(t||""),p=function(e){const[t,n]=X(Me);return F((()=>{if(!e)return;n(Me);const t=()=>{n((t=>{const n=je();return t.path!=n?{path:n,result:Ie(e,n)}:t}))};return t(),$e(t)}),[e]),t.result}(K((()=>{const e={};for(const t in n)e[h+t]=n[t];return e}),[h,n]));return F((()=>{u(h)}),[h]),F((()=>{if(!p)return;let[t,n,o]=p;const{load:r,for:s}=t;if(s&&!We.has(s)&&We.set(s,Promise.resolve({forId:s})),r&&!We.has(r)){let e;e="string"==typeof r?import(new URL(r,location).href):Promise.resolve(r(o)),We.set(r,e.then((e=>"object"==typeof e?e:{default:e})))}let i=We.get(r||s);return setTimeout((()=>i&&l({loading:!0})),40),i.then((async t=>{var r=t,{default:s,forId:a}=r,c=d(r,["default","forId"]);n==je()?(e&&await e(o),i=null,n==je()&&l({view:"function"==typeof s?s(o):s,forId:a,data:c})):i=null})),()=>i=null}),[p]),ue((()=>T("section",{slot:"view",key:je()},i.view)),[i.view]),T("host",{shadowDom:!0,data:i.data},T("slot",{name:"router-case",onslotchange:e=>s([...e.target.assignedElements()].reduce(((e,t)=>{return n=c({},e),s={[t.path]:()=>t},o(n,r(s));var n,s}),{}))}),T("slot",{name:i.forId||"view"}),i.loading&&T("slot",{name:"loading"}))}Je.props={path:String,transition:Function,data:{type:Object,event:{type:"Data"}}};var Ze=W(Je);function Fe({path:e}){const[,t]=Te("InheritPath");return F((()=>t(e)),[e]),T("host",{onclick:t=>{let{target:n}=t;do{if(n.hasAttribute&&n.hasAttribute("href")&&!n.hasAttribute("ignore")){t.preventDefault();const o=n.getAttribute("href");!/^(http(s){0,1}:){0,1}\/\//.test(o)&&Se((e||"")+o);break}}while(n=n.parentNode)}})}Fe.props={path:String};var Ve=W(Fe);function Xe({href:e}){const[t]=Te("InheritPath"),n=(t||"")+(e||"");return T("host",{onclick:e=>{e.stopPropagation(),e.preventDefault(),n&&Se(n)}})}Xe.props={href:String};var Ge=W(Xe,HTMLAnchorElement);function Ke({load:e}){return T("host",null)}customElements.define("a-router-redirect",Ve),customElements.define("a-router-switch",Ze),customElements.define("a-router-case",Ue),customElements.define("a-router-link",Ge,{extends:"a"}),Ke.props={href:String,label:String,load:null,path:String};var Qe=W(Ke);function Ye(){const e=G();return T("host",{shadowDom:!0,sources:oe(e).filter((e=>e instanceof Qe))},T("slot",{ref:e}))}Ye.props={label:String,sources:{type:Array,event:{type:"ChangeSources",bubbles:!0},value:()=>[]}};var et=W(Ye),tt=Y`/* src/aside/aside.css */
:host {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.aside {
  position: sticky;
  top: 0;
  padding: 3rem 20%;
  box-sizing: border-box;
  max-height: 100vh;
  overflow-y: auto;
}
.aside-content {
  max-width: 13rem;
  position: sticky;
  top: 3rem;
}
.aside-menu {
  display: grid;
  gap: 1rem;
  padding: 1rem 0px;
}
.aside-header {
  padding-bottom: 2rem;
}
`;function nt(){return T("host",{shadowDom:!0},T("div",{class:"aside"},T("div",{class:"aside-content"},T("header",{class:"aside-header"},T("slot",{name:"brand"})),T("div",{class:"aside-menu"},T("slot",{name:"aside-menu"})))))}nt.styles=tt,nt.props={view:{type:String,reflect:!0}};var ot=W(nt),rt=Y`/* src/article/article.css */
:host {
  display: flex;
  flex-flow: column;
  background-color: var(--doc-article--bgcolor, #fff);
  box-shadow: 0px 0px 88px rgb(0 0 0 / 5%);
  min-height: 100vh;
}
.content {
  font-size: 1rem;
  line-height: 2em;
  flex: 0%;
  padding: var(--doc-article--space, 2rem);
  box-sizing: border-box;
}
`;function st(){return T("host",{shadowDom:!0},T("style",null,rt),T("div",{class:"header"},T("slot",{name:"header"})),T("div",{class:"content"},T("slot",null)),T("div",{class:"pagination"},T("slot",{name:"pagination"})))}st.styles=rt;var it=W(st),lt=Y`/* src/hero/hero.css */
:host {
  min-height: 16rem;
  display: flex;
  align-items: flex-end;
  background: var( --doc-hero--bg, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20'%3E%3Ccircle cx='1' cy='1' r='1' fill='rgba(0,0,0,.25)'/%3E%3C/svg%3E") repeat 0 0 / auto fixed );
  padding: var(--doc-article--space, 2rem);
  box-sizing: border-box;
}
::slotted([slot="title"]) {
  font-size: 3.125rem;
  margin: 0px;
  line-height: 1em;
}
`;function at(){return T("host",{shadowDom:!0},T("slot",{name:"title"}))}at.styles=lt;var ct=W(at);function dt(){return T("host",null)}dt.props={active:{type:Boolean,reflect:!0,event:{type:"MenuItemChange",bubbles:!0,composed:!0}}};var ut=W(dt,HTMLAnchorElement),ht=Y`/* src/menu/menu.css */
.items {
  display: grid;
  grid-template-columns: 0.065rem auto;
  grid-gap: 1rem;
}
.items-line {
  background: var(--doc-menu--on-line-color, rgba(0, 0, 0, 0.25));
  border-radius: 100px;
}
.items-line div {
  width: 300%;
  left: 50%;
  height: var(--h);
  position: relative;
  transform: translate(-50%, var(--y));
  background: var(--doc-menu--off-line-color, currentColor);
  transition: 0.3s ease all;
  border-radius: 1rem;
}
::slotted(a) {
  text-decoration: none;
  color: unset;
  display: block;
  padding: 0.5rem 0rem;
  cursor: pointer;
  white-space: nowrap;
}
::slotted(:not(a)) {
  opacity: 0.75;
}
`;function pt(){const e=O(),t=G(),n=G(),[o,r]=qe();pe(t,r,{childList:!0});const s=o.filter((e=>e instanceof ut)),i=s.find((e=>e.active)),[l,a]=function(e,t,n){const[o,r]=X([0,0]);return F((()=>{var o;if(!n)return;const s=[...e.current.children],i=t.indexOf(n),l=s.slice(0,i).reduce(((e,t)=>e+t.clientHeight),0);r([l,(null==(o=s[i])?void 0:o.clientHeight)||0])}),[n]),n?o:[0,0]}(n,s,i);return T("host",{shadowDom:!0,ref:t,onMenuItemChange:e},T("slot",null),T("div",{class:"items"},T("div",{class:"items-line",style:`--y:${l}px;--h:${a}px;`},T("div",null)),T("div",{class:"items-slots",ref:n},s.map(((e,t)=>(e.slot=t,T("div",{class:"items-item"},T("slot",{name:t}))))))))}pt.styles=ht;var ft=W(pt),mt=Y`/* src/pagination/pagination.css */
:host {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`,gt=Y`/* src/pagination/pagination-item.css */
a {
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
  text-decoration: none;
  color: unset;
}
:host([direction="<"]) {
  background-color: var(--doc-pagination-item--bgcolor, #f1f9f9);
}
:host([direction=">"]) a {
  flex-flow: row-reverse;
}
:host(:not([href])) svg {
  display: none;
}
`;function bt({href:e,direction:t}){return T("host",{shadowDom:!0},T(Ge,{href:e,"data-direction":t},T("svg",{style:">"==t?"margin-left: 1rem":"margin-right: 1rem",width:"7.656",height:"13.314",viewBox:"0 0 7.656 13.314"},T("path",{d:">"==t?"M.707,13.435a1,1,0,0,1,0-1.415l4.95-4.95L.707,2.121A1,1,0,0,1,2.121.707L7.778,6.364a1,1,0,0,1,0,1.414L2.121,13.435a1,1,0,0,1-1.414,0Z":"M7.778,13.435a1,1,0,0,0,0-1.415l-4.95-4.95,4.95-4.95A1,1,0,0,0,6.364.707L.707,6.364a1,1,0,0,0,0,1.414l5.656,5.657a1,1,0,0,0,1.414,0Z",transform:"translate(-0.414 -0.414)",fill:"currentColor"})),T("slot",null)))}bt.styles=gt,bt.props={href:{type:String,reflect:!0},direction:{type:String,reflect:!0}};var vt=W(bt);function yt(){return T("host",{shadowDom:!0},T("slot",null))}yt.styles=mt,yt.props={next:Object,prev:Object};var wt=W(yt),xt=Y`/* src/menu-phone/menu-phone.css */
:host {
  display: block;
  position: fixed;
  bottom: 0;
  right: 0;
}
.content-scroll {
  width: 100%;
  height: 100%;
  position: fixed;
  box-sizing: border-box;
  bottom: 0;
  right: 0;
  overflow-y: auto;
  display: grid;
  align-items: flex-end;
  transform-origin: 100% 100%;
  transform: translateX(120%);
  transition: 0.3s ease all;
  opacity: 0.5;
  visibility: hidden;
}
.content-space {
  padding: 0.5rem;
}
.content {
  padding: 4rem 2rem;
  background: white;
  box-shadow: 5rem 0px 20rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem 0.5rem 1.375rem 0.5rem;
}
.content-brand {
  padding-bottom: 2rem;
}
.button-container {
  position: relative;
  margin: 0px 1rem 1rem 0px;
}
.burger {
  width: 80%;
  height: 30%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  transition: 0.3s ease all;
  grid-gap: 4px;
}
.burger div {
  width: 100%;
  height: 1px;
  background: white;
  transition: 0.3s ease all;
}
:host([show]) .content-scroll {
  visibility: visible;
  transform: translateX(0px);
  opacity: 1;
}
:host([show]) .burger {
  height: 2px;
  transform: rotate(45deg);
}
:host([show]) .burger div:nth-child(3) {
  transform: scale(0, 1);
}
:host([show]) .burger div:nth-child(2) {
  transform: rotate(90deg);
}
`,kt=Y`/* src/button/button.css */
button {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100rem;
  background-color: var(--doc-button--bgcolor, #fff);
  border: 1px solid var(--doc-button--border-color, #ececec);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
:host([dark]) button {
  color: var(--doc-button--border, #ececec);
  border: none;
  background: var(--doc-button--bgcolor-dark, #000);
}
@media (max-width: 300px) {
  button {
    background: red;
  }
}
`;function Et(){return T("host",{shadowDom:!0},T("button",null,T("slot",null)))}Et.styles=kt,Et.props={dark:{type:Boolean,reflect:!0}};var Ct=W(Et);function St(){const[e,t]=V("show");return T("host",{shadowDom:!0},T("div",{class:"content-scroll"},T("div",{class:"content-space"},T("div",{class:"content"},T("div",{class:"content-brand"},T("slot",{name:"brand"})),T("slot",{name:"aside-menu"})))),T("div",{class:"button-container"},T(Ct,{dark:!0,onclick:()=>t(!e)},T("div",{class:"burger"},T("div",null),T("div",null),T("div",null)))))}St.styles=xt,St.props={show:{type:Boolean,reflect:!0}};var $t=W(St),jt=Y`/* src/container/container.css */
:host {
  width: 100%;
  height: 100%;
  background-color: var(--doc--bgcolor, #f1f9f9);
  display: block;
  overflow: hidden auto;
  font-family: unset;
  color: var(--doc--color, #232323);
}
.content {
  width: 100%;
  min-height: 100%;
  display: grid;
  grid-template-columns: 1fr 45rem 1fr;
}
.content-phone {
  grid-template-columns: 0px 100%;
}
.content-tablet {
  grid-template-columns: 1fr 45rem;
}
section[slot=view] code {
  background: var(--doc-code--bgcolor, #263946);
  color: var(--doc-code--color, #76ffdf);
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  white-space: nowrap;
}
doc-code {
  margin: 0px calc(var(--doc-article--space, 2rem) * -1);
}
doc-table td {
  padding: 0.5rem 2rem 0.5rem 0px;
  vertical-align: top;
}
doc-table tr:first-child td {
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid currentColor;
}
section[slot=view] a {
  padding: 0.1rem 0.5rem;
  border-radius: 1rem;
  text-decoration: none;
  border: 1px solid currentColor;
  color: unset;
  font-size: 0.9em;
  margin-right: 0.1rem;
}
section[slot=view] a:hover {
  background: var(--doc--bgcolor, #f1f9f9);
}
section[slot=view] img {
  max-width: 100%;
}
`,Ot={},Dt=(e,t)=>t.path||encodeURI(`/${e}/${t.label}`.toLowerCase());function At(){var e,t;const n=G(),o=G(),r=oe(n),s=O(),i=r.filter((e=>e instanceof et)),l=function(){const[e,t]=X(je);return F((()=>$e((()=>t(je)))),[]),t=>_e(t)(e)}(),a=null==(t=null==(e=o.current)?void 0:e.data)?void 0:t.meta,[c,d]=((e,t)=>{const n=e.map((({label:e,sources:t})=>t.filter((e=>!e.href)).map((t=>({href:Dt(e,t),label:t.label}))))).flat();for(let o=0;o<n.length;o++)if(t(n[o].href))return[n[o-1],n[o+1]];return[]})(i,l),u=le("phone, tablet 834px , desktop 1080px");return F((()=>{a&&a.title&&(document.title=a.title)}),[a]),T("host",{shadowDom:!0,onChangeSources:s},T("slot",{ref:n}),T(Ve,{class:`content content-${u}`},T(ot,{view:u},"desktop"==u&&T("slot",{name:"brand",slot:"brand"}),i&&i.map((({label:e,sources:t})=>T("div",{slot:"aside-menu"},T(ft,null,T("strong",null,e),t.map((t=>{const n=Dt(e,t);return T(ut,{href:t.href||n,active:!!l(n),target:t.href?"_blank":null,ignore:t.href?"":null},T("strong",null,t.label))}))))))),T(it,null,T(ct,{slot:"header"},(null==a?void 0:a.title)&&T("h1",{slot:"title"},null==a?void 0:a.title)),T(Ze,{ref:o,onData:s},i.map((({label:e,sources:t})=>t.map((t=>{return t.load&&T(Ue,{path:Dt(e,t),key:t,load:"string"==typeof t.load&&t.load.endsWith(".md")?(n=t.load,Ot[n]=Ot[n]||(()=>fetch(n).then((e=>e.text())).then((e=>{var t;const[n,...o]=Ce.call(null,[e]);if(n){if(null==(t=n.props)?void 0:t.meta){const[e]=n.children[0].children,t=`{${e.replace(/\s*([^:]+):\s*(.*)/g,'"$1":"$2",').replace(/,$/,"")}}`;return{meta:JSON.parse(t),default:o}}return{deafult:[n,...o]}}}))),Ot[n]):t.load});var n}))))),T(wt,{slot:"pagination"},T(vt,{href:null==c?void 0:c.href,direction:"<"},null==c?void 0:c.label),T(vt,{href:null==d?void 0:d.href,direction:">"},null==d?void 0:d.label))),T("aside",{class:"aside"}),"phone"==u&&T($t,null,T("slot",{name:"brand",slot:"brand"}),i&&i.map((({label:e,sources:t})=>T("div",{slot:"aside-menu"},T(ft,null,T("strong",null,e),t.map((t=>{const n=Dt(e,t);return T(ut,{href:t.href||n,active:!!l(n),target:t.href?"_blank":null,ignore:t.href?"":null},T("strong",null,t.label))})))))))))}At.styles=jt,At.props={path:String};var Lt=W(At),Nt=Y`/* src/code/code.css */
:host {
  display: block;
  margin: 0.9em;
}
.code {
  position: relative;
}
.pre,
.inject {
  padding: 2rem;
}
.pre {
  width: 100%;
  display: block;
  overflow-x: auto;
  box-sizing: border-box;
  background-color: var(--doc-code--bgcolor, #263946);
  color: var(--doc-code--color, #76ffdf);
  font-size: 0.9em;
  line-height: 1.4em;
  margin: 0px;
}
.button-align {
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translate(50%, -50%);
}
.button-copy {
  display: block;
  transition: 0.2s ease all;
}
.button-copy:active {
  transform: scale(0.8);
}
::slotted(code) {
  padding: 0px !important;
  white-space: unset !important;
}
@media (max-width: 480px) {
  .button-copy {
    display: none;
  }
}
`,_t=Y`/* src/preview/preview.css */
:host {
  background: var(--doc-preview--bg, #f1f9f9);
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
`;function It(){return T("host",{shadowDom:!0},T("div",null,T("slot",null)))}It.styles=_t;var Mt=W(It);function Pt({type:e}){const t=$(),n=Re(t),o=(e||"").match(/(.*)\s+(.*)/);let[,r,s]=o||[];return T("host",{shadowDom:!0},"preview"==s&&"html"==r&&T(Mt,null,ne([t.current.textContent])),"inject"==s&&"html"==r&&T("div",{class:"inject"},ne([t.current.textContent])),"inject"!=s&&T("div",{class:"code"},T("pre",{class:"pre"},T("slot",null)),T("div",{class:"button-align"},T(Ct,{type:"circle",class:"button-copy",onclick:n},T("svg",{width:"13",height:"13",viewBox:"0 0 13 13"},T("rect",{rx:"1",ry:"1",width:"10",height:"2",fill:"currentColor"}),T("rect",{rx:"1",ry:"1",width:"2",height:"10",fill:"currentColor"}),T("rect",{width:"8",height:"8",rx:"1",ry:"1",x:"4",y:"4",fill:"transparent","stroke-width":"2",stroke:"currentColor"}))))))}Pt.styles=Nt,Pt.props={type:String};var zt=W(Pt),Tt=Y`/* src/table/table.css */
:host {
  display: block;
  overflow-x: auto;
}
table {
  font-size: 0.9em;
  width: 100%;
  border-collapse: collapse;
}
`;function Bt(){return T("host",{shadowDom:!0},T("table",null,T("slot",null)))}Bt.styles=Tt;var qt=W(Bt),Rt=Y`/* src/quote/quote.css */
:host {
  display: flex;
  flex-flow: row wrap;
}
.quote {
  padding-right: 1rem;
  padding-top: 0.2em;
}
.quote svg:first-child {
  margin-right: 0.2rem;
}
.content {
  flex: 0%;
}
`;function Ht(){return T("host",{shadowDom:!0},T("div",{class:"quote"},T("svg",{viewBox:"0 0 120 180","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",width:"1rem"},T("path",{d:"M120 120c0 33.114-26.885 59.999-60 59.999-33.115 0-60-26.885-60-60C0 65.942 30.107 25.608 73.016 8.717a4.957 4.957 0 015.321 8.157C68.18 26.654 61.48 39.99 60.217 54.865a4.97 4.97 0 004.613 5.324C95.69 62.654 120 88.51 120 119.999V120z",fill:"currentColor"})),T("svg",{viewBox:"0 0 120 180","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",width:"1rem"},T("path",{d:"M120 120c0 33.114-26.885 59.999-60 59.999-33.115 0-60-26.885-60-60C0 65.942 30.107 25.608 73.016 8.717a4.957 4.957 0 015.321 8.157C68.18 26.654 61.48 39.99 60.217 54.865a4.97 4.97 0 004.613 5.324C95.69 62.654 120 88.51 120 119.999V120z",fill:"currentColor"}))),T("div",{class:"content"},T("slot",null)))}Ht.styles=Rt;var Ut=W(Ht);customElements.define("doc-container",Lt),customElements.define("doc-aside",ot),customElements.define("doc-article",it),customElements.define("doc-hero",ct),customElements.define("doc-source",Qe),customElements.define("doc-group",et),customElements.define("doc-menu",ft),customElements.define("doc-pagination",wt),customElements.define("doc-pagination-item",vt),customElements.define("doc-button",Ct),customElements.define("doc-menu-phone",$t),customElements.define("doc-table",qt),customElements.define("doc-quote",Ut),customElements.define("doc-preview",Mt),customElements.define("doc-menu-item",ut,{extends:"a"}),customElements.define("doc-code",zt);export{W as a,oe as b,Y as c,le as d,he as e,V as f,pe as g,Z as h,ue as i,fe as j,G as u};
