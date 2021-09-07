var e,t,n=Object.defineProperty,o=(e,t,o)=>(((e,t,o)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o),r=(e,t,n)=>(((e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)})(e,t,"read from private field"),n?n.call(e):t.get(e)),s=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)};function i(e,t){let n=e.length;if(n!==t.length)return!1;for(let o=0;o<n;o++)if(e[o]!==t[o])return!1;return!0}const l=e=>"function"==typeof e,a=e=>"object"==typeof e;class c{constructor(e,t,n){this.message=t,this.target=e,this.value=n}}const d={true:1,"":1,1:1};function u(e,t,n,o,r){let{type:s,reflect:i,event:d,value:u,attr:g=p(t)}=a(n)&&null!=n?n:{type:n},b=!(s==Function||null==s);Object.defineProperty(e,t,{configurable:!0,set(e){let n=this[t],{error:o,value:r}=m(s,b&&l(e)?e(n):e);if(o&&null!=r)throw new c(this,`The value defined for prop '${t}' must be of type '${s.name}'`,r);n!=r&&(this.update({[t]:r}),d&&h(this,d),this.updated.then((()=>{i&&(this._ignoreAttr=g,f(this,s,g,this[t]),this._ignoreAttr=null)})))},get(){return this._props[t]}}),null!=u&&(r[t]=u),o[g]={prop:t,type:s}}const h=(e,{type:t,base:n=CustomEvent,...o})=>e.dispatchEvent(new n(t,o)),p=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase(),f=(e,t,n,o)=>null==o||t==Boolean&&!o?e.removeAttribute(n):e.setAttribute(n,a(o)?JSON.stringify(o):t==Boolean?"":o),m=(e,t)=>null==e?{value:t}:e!=String&&""===t?{value:null}:{}.toString.call(t)==`[object ${e.name}]`?{value:t,error:e==Number&&Number.isNaN(t)}:{value:t,error:!0};let g,b;function v(){return y(((e={current:g.host})=>e))}function y(e,t,n){return g.use(e,t,n)}function w(){return g.update}const x={id:1,className:1,checked:1,value:1,selected:1},k={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},E={shadowDom:1,renderOnce:1,children:1,key:1},C={},S=[],$=document;class j extends Text{get nodeType(){return-1}}const D=Symbol(),A=Symbol();function L(e,t,...n){let o=t||C,{children:r}=o;r=null!=r?r:n.length?n:S;const s=!!e&&(e instanceof Node?1:e.prototype instanceof HTMLElement&&2);return{$$:D,type:e,props:o,children:r,key:o.key,shadow:o.shadowDom,once:o.renderOnce,raw:s,is:o.is}}function N(e,t,n=A,o,r){let s;if(t&&t[n]&&t[n].vnode==e||e.$$!=D)return t;if((e||!t)&&(r=r||"svg"==e.type,s=!("host"==e.type||(1==e.raw?t==e.type:2==e.raw?t instanceof e.type:t?t.localName==e.type:t)),s)){if(e.ref)return e.ref.cloneNode(!0);null!=e.type&&(e.ref=t=1==e.raw?e.type:2==e.raw?new e.type:r?$.createElementNS("http://www.w3.org/2000/svg",e.type):$.createElement(e.type,e.is?{is:e.is}:void 0))}let{vnode:i=C,cycle:l=0,fragment:a,handlers:c}=t[n]?t[n]:C,{children:d=S,props:u=C}=i;if(c=s?{}:c||{},e.once&&!s)return t;if(e.shadow&&!t.shadowRoot&&t.attachShadow({mode:"open"}),e.props!=u&&function(e,t,n,o,r){for(let s in t)s in n||O(e,s,t[s],null,r,o);for(let s in n)O(e,s,t[s],n[s],r,o)}(t,u,e.props,c,r),e.children!==d){let s=e.shadow?t.shadowRoot:t;a=function(e,t,n,o,r,s){e=null==e?null:Array.isArray(e)?e:[e];let i,l=t||function(e,t){const n=new j(""),o=new j("");return e[t?"prepend":"append"](n),e.append(o),{s:n,e:o}}(n,r),{s:a,e:c,k:d}=l,u=d&&new Set,h=a;function p(e){let{length:t}=e;for(let l=0;l<t;l++){let t=e[l],a=typeof t;if(null==t||"boolean"==a||"function"==a)continue;if(Array.isArray(t)){p(t);continue}if("object"==a&&t.$$!=D)continue;let f=t.$$&&t.key,m=d&&null!=f&&d.get(f);h!=c&&h===m?u.delete(h):h=h==c?c:h.nextSibling;let g=d?m:h,b=g;if(t.$$)b=N(t,g,o,r,s);else{let e=t+"";3!=b.nodeType?b=new Text(e):b.data!=e&&(b.data=e)}b!=h&&(d&&u.delete(b),!g||d?(n.insertBefore(b,h),d&&h!=c&&u.add(h)):g==c?n.insertBefore(b,c):(n.replaceChild(b,g),h=b)),null!=f&&(i=i||new Map,i.set(f,b))}}if(e&&p(e),h=h==c?c:h.nextSibling,t&&h!=c)for(;h!=c;){let e=h;h=h.nextSibling,e.remove()}return u&&u.forEach((e=>e.remove())),l.k=i,l}(e.children,a,s,n,!l&&o,(!r||"foreignObject"!=e.type)&&r)}return l++,t[n]={vnode:e,handlers:c,fragment:a,cycle:l},t}function O(e,t,n,o,r,s){if(n=null==n?null:n,o=null==o?null:o,(t="class"!=t||r?t:"className")in e&&x[t]&&(n=e[t]),o!==n&&!E[t]&&"_"!=t[0])if("o"==t[0]&&"n"==t[1]&&(l(o)||l(n)))!function(e,t,n,o){o.handleEvent||(o.handleEvent=t=>o[t.type].call(e,t));n?(o[t]||e.addEventListener(t,o),o[t]=n):o[t]&&(e.removeEventListener(t,o),delete o[t])}(e,t.slice(2),o,s);else if("ref"==t)o&&(o.current=e);else if("style"==t){let t=e.style;o=o||"";let r=a(n=n||""),s=a(o);if(r)for(let e in n){if(!s)break;e in o||_(t,e,null)}if(s)for(let e in o){let s=o[e];r&&n[e]===s||_(t,e,s)}else t.cssText=o}else!r&&!k[t]&&t in e||l(o)||l(n)?e[t]=null==o?"":o:null==o?e.removeAttribute(t):e.setAttribute(t,a(o)?JSON.stringify(o):o)}function _(e,t,n){let o="setProperty";null==n&&(o="removeProperty",n=null),~t.indexOf("-")?e[o](t,n):e[t]=n}const M=!!document.adoptedStyleSheets,I=null;function z(e,t=HTMLElement){let n={},o={},{props:r,styles:s}=e;return class extends t{constructor(){super(),this._setup(),this._render=()=>e({...this._props});for(let e in o)this[e]=o[e]}static get styles(){return[].concat(super.styles||[],s||[])}async _setup(){if(this._props)return;this._props={},this.mounted=new Promise((e=>this.mount=e)),this.unmounted=new Promise((e=>this.unmount=e)),this.symbolId=this.symbolId||Symbol();let e,t=function(e,t){let n={},o={use:function(e,t,o){let r=b++;return n[r]=[e(n[r]?n[r][0]:void 0),t,o],n[r][0]},host:t,update:e};function r(e,t){for(let o in n){let r=n[o];r[e]&&(r[0]=r[e](r[0],t))}}return{load:function(e){let t;b=0,g=o;try{t=e()}finally{g=null}return t},cleanEffects:function(e){return r(1,e),()=>{r(2,e),e&&(n={})}}}}((()=>this.update()),this),n=!0,o="hydrate"in this.dataset;this.update=r=>{if(e||(e=!0,this.updated=(this.updated||this.mounted).then((()=>{try{return N(t.load(this._render),this,this.symbolId,n&&o),e=!1,n&&(n=!1,function(e){let{styles:t}=e.constructor,{shadowRoot:n}=e;n&&t.length&&(t=[...new Set(t)],M?n.adoptedStyleSheets=[...t]:t.map((e=>n.appendChild(e.cloneNode(!0)))))}(this)),!I&&t.cleanEffects()}finally{e=!1}})).then((e=>{e&&e()}))),r)for(let e in r)this._props[e]=r[e];return this.updated},this.update(),await this.unmounted,t.cleanEffects(!0)()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),await this.mounted,!this.isConnected&&this.unmount()}attributeChangedCallback(e,t,o){if(n[e]){if(e===this._ignoreAttr||t===o)return;let{prop:r,type:s}=n[e];this[r]=((e,t)=>e==Boolean?!!d[t]:e==Number?Number(t):e==Array||e==Object?JSON.parse(t):t)(s,o)}else super.attributeChangedCallback(e,t,o)}static get observedAttributes(){let e=super.observedAttributes||[];for(let t in r)u(this.prototype,t,r[t],n,o);return Object.keys(n).concat(e)}}}let P=e=>(t,n)=>{let o=([e,n],o)=>{if(!o)return[e||t(n),n];l(e)&&e()};y((([e,t]=[])=>(!t&&t||(t&&i(t,n)?e=e||!0:(l(e)&&e(),e=null)),[e,n])),1==e&&o,2==e&&o)},T=P(1),B=P(2);function q(e){let t=v();if(e in t.current){if(!t[e]){let n=[null,n=>t.current[e]=n];t[e]=n}return t[e][0]=t.current[e],t[e]}}function R(e){let t=w();return y(((n=[])=>(n[1]||(n[0]=l(e)?e():e,n[1]=e=>{(e=l(e)?e(n[0]):e)!=n[0]&&(n[0]=e,t())}),n)))}function H(e){return y(((t={current:e})=>t))}function U(e,t){let[n]=y((([n,o,r=0]=[])=>((!o||o&&!i(o,t))&&(n=e(t)),[n,t,r])));return n}const W={};function J(e,...t){let n=e.reduce(((e,n,o)=>e+n+(t[o]||"")),"");return W[n]=W[n]||function(e){if(M){let t=new CSSStyleSheet;return t.replaceSync(e),t}{let t=$.createElement("style");return t.textContent=e,t}}(n)}var Z=function(e,t,n,o){var r;t[0]=0;for(var s=1;s<t.length;s++){var i=t[s++],l=t[s]?(t[0]|=i?1:2,n[t[s++]]):t[++s];3===i?o[0]=l:4===i?o[1]=Object.assign(o[1]||{},l):5===i?(o[1]=o[1]||{})[t[++s]]=l:6===i?o[1][t[++s]]+=l+"":i?(r=e.apply(l,Z(e,l,n,["",null])),o.push(r),l[0]?t[0]|=2:(t[s-2]=0,t[s]=r)):o.push(l)}return o},F=new Map;const V=function(e){var t=F.get(this);return t||(t=new Map,F.set(this,t)),(t=Z(this,t.get(e)||(t.set(e,t=function(e){for(var t,n,o=1,r="",s="",i=[0],l=function(e){1===o&&(e||(r=r.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?i.push(0,e,r):3===o&&(e||r)?(i.push(3,e,r),o=2):2===o&&"..."===r&&e?i.push(4,e,0):2===o&&r&&!e?i.push(5,0,!0,r):o>=5&&((r||!e&&5===o)&&(i.push(o,0,r,n),o=6),e&&(i.push(o,e,0,n),o=6)),r=""},a=0;a<e.length;a++){a&&(1===o&&l(),l(a));for(var c=0;c<e[a].length;c++)t=e[a][c],1===o?"<"===t?(l(),i=[i],o=3):r+=t:4===o?"--"===r&&">"===t?(o=1,r=""):r=t+r[0]:s?t===s?s="":r+=t:'"'===t||"'"===t?s=t:">"===t?(l(),o=1):o&&("="===t?(o=5,n=r,r=""):"/"===t&&(o<5||">"===e[a][c+1])?(l(),3===o&&(i=i[0]),o=i,(i=i[0]).push(2,0,o),o=0):" "===t||"\t"===t||"\n"===t||"\r"===t?(l(),o=2):r+=t),3===o&&"!--"===r&&(o=4,i=i[0])}return l(),i}(e)),t),arguments,[])).length>1?t:t[0]}.bind(L);function X(e){const[t,n]=R([]);return B((()=>{const{current:t}=e;if(!t)return;const o="slotchange",r=()=>n(t.assignedNodes().filter((e=>!(e instanceof j))));return r(),t.addEventListener(o,r),()=>t.removeEventListener(o,r)}),[]),t}const G=/,\s*([^,]+)\s+(?:(\d+)(?:x(\d+)){0,1}(px|em|rem))/,K={},Q={};function Y(e){const[t,n]=function(e){if(K[e])return K[e];const t=[];let n;for(;n=e.match(G);){const[o,r,s,i,l]=n;e=e.replace(o,""),t.push({value:r,width:Number(s),height:Number(i||""),type:l})}return[e.replace(/\s*,(.*)/,"").trim(),t.sort(((e,t)=>e.height>t.height?-1:1)).sort(((e,t)=>e.width>t.width?-1:e.width==t.height?0:1))]}(e),[o,r]=R(s);function s(){const e=n.find((e=>ee(e).matches));return e?e.value:t}return B((()=>{const e=()=>r(s);return e(),n.forEach((t=>ee(t).addListener(e))),()=>n.forEach((t=>ee(t).removeListener(e)))}),[e]),o}const ee=({width:e,height:t,type:n})=>{const o=(e?`(min-width: ${e}${n})`:"")+(t?`and (min-height: ${t}${n})`:"");return Q[o]=Q[o]||window.matchMedia(o)};const te=L("host");function ne(e){return e&&"object"==typeof e?e="host"==e.type?e:L("host",null,e):te}function oe(e,t){const n=v();n.id=n.id||Symbol(),U((()=>N(ne(e()),n.current,n.id)),t),B((()=>()=>N(ne(),n.current,n.id)),[])}function re(e){const t=v();return U((()=>{let{current:n}=t;for(;n=n.parentNode||n.host;)if(n.matches&&n.matches(e))return{current:n};return{}}),[e])}function se(e,t,n){B((()=>{if(!e.current)return;const o=new MutationObserver(t);return o.observe(e.current,n),()=>o.disconnect()}),[e])}function ie(e,t,n){!function(e,t,n,o){const r=H();r.current=n,T((()=>{const{current:n}=e;if(!n)return;let s=e=>r.current(e);return n.addEventListener(t,s,o),()=>n.removeEventListener(n,s)}),[t,!!n])}(re("form"),e,t,n)}let le,ae,ce;const de=[[/!\[([^\]]+)\]\(([^)]+)\)/g,(e,t)=>le(ce.image,{src:t,title:e})],[/\[([^\]]+)\]\(([^)]+)\)/g,(e,t)=>le("a",{href:t},he(e))],[/\*\*([^*]+)\*\*/g,e=>le(ce.bold,null,he(e))],[/_([^_]+)_/g,e=>le(ce.italic,null,he(e))],[/(?:~([^~]+)~|`([^`]+)`)/g,(e,t)=>le(ce.inlineCode,null,he(e||t))]],ue=e=>`<${e}>`;function he(e){return de.reduce(((e,[t,n])=>e.replace(t,((e,...t)=>ue(ae.push(n(...t))-1)))),e).split(/(<\d+>)/).map((e=>{const t=e.match(/^<(\d+)>/);if(t){const[,e]=t;return ae[e]}return e})).filter((e=>e))}const pe={link:"a",title:"h*",text:"p",inlineCode:"code",code:"pre",nestedCode:"code",quote:"blockquote",table:"table",tableRow:"tr",tableCol:"td",bold:"strong",italic:"i",image:"img",list:["ol","ul"],listItem:"li",tab:"    "};var fe,me,ge=(fe=L,me={code:"doc-code",table:"doc-table",quote:"doc-quote"},(e,...t)=>function(e,t,n,o){le=t,ae=n,ce=o;const r=function(e){const t=[],n=e.split(/\n/).map((e=>{const n=e.match(/^(\s*)(.*)/),[,o,r]=n,s=o.split("").reduce(((e,t)=>e+t.charCodeAt(0)),0);return t.includes(s)||t.push(s),[s,r]}));return t.sort(((e,t)=>e>t?1:-1)),n.map((([e,n])=>[t.indexOf(e),n]))}(e),{length:s}=r,i=[];let l,a;for(let c=0;c<s;c++){const[e,n]=r[c],o=n.match(/^(~~~|```|---)(.*)/);if(o){const[,e,t]=o;let n=[];for(;++c&&r[c]&&r[c][1]!==e;)n.push(ce.tab.repeat(r[c][0]>-1?r[c][0]:0)+r[c][1]);i.push(le(ce.code,{type:t,"data-type":t,meta:"---"===e},le(ce.nestedCode,null,n.join("\n"))));continue}const s=n.match(/^(\d+\.|-|\+)\s*(.+)/);if(s){const[,e,t]=s;l||(l=[ce.list[/\d+\./.test(e)?0:1],[]]),l[1].push(le(ce.listItem,null,he(t)));continue}const d=n.match(/^\|(.+)/);if(d){const[,e]=d;a||(a=[]);const t=e.split(/\|/);/^-+$/.test(t[0].trim())||a.push(le(ce.tableRow,null,t.slice(0,t.length-1).map((e=>le(ce.tableCol,null,he(e.trim()))))));continue}l&&(i.push(le(l[0],null,l[1])),l=null),a&&(i.push(le(ce.table,null,a)),a=null);const u=n.match(/^([\#]+)\s*(.+)/);if(u){const[,e,n]=u;i.push(t(ce.title.replace("*",e.length+""),null,he(n)));continue}const h=n.match(/^>\s*(.+)/);if(h){const[,e]=h;i.push(le(ce.quote,null,he(e)))}else n&&i.push(le(ce.text,null,he(n)))}return i}(e.reduce(((e,n,o)=>e+(n+(t[o]?ue(o):""))),""),fe,t,{...pe,...me}));function be(e){history.pushState({},"history",e),window.dispatchEvent(new PopStateEvent("popstate"))}function ve(e){return window.addEventListener("popstate",e),()=>window.removeEventListener("popstate",e)}const ye=()=>location.pathname+location.hash+location.search,we="(?:(?:/){0,1}#(?:/){0,1})";const xe=e=>e.replace(/([.+^()\-:])/g,"\\$1"),ke=e=>e.split(/(\?.*)/);function Ee(e){const[t]=ke(e),[n,o]=function(e){const t=[],n=e.replace(/#(\/){0,1}/,"/#").split(/\//g).map((e=>{if(!e)return"";const[,n="",o,r,s]=e.match(/(#){0,1}([\{\[]){0,1}(\.\.\.){0,1}(\w*)([\}\]]){0,1}/);if("{"==o||"["==o){t.push(s);const e="["==o?"*":"+",i=(n?we:"(?:/)")+("["==o?"{0,1}":"{1}");return r?`${i}(.${e})`:`${i}([^/#]${e})`}return(n?we:"/")+xe(n?e.slice(1):e)})).join(""),o=!n.indexOf(we);return[RegExp((o?"":"^")+(n||"(?:/){0,1}")+(!o&&"/"!=e&&e.endsWith("/")?"/":"")+"$"),t]}(t);return e=>{const[t]=ke(e),r=t.match(n);if(r){const[,...e]=r,t={};return e.reduce(((e,t,n)=>(e[o[n]]=t,e)),t)}}}const Ce={},Se=e=>Ce[e]=Ce[e]||Ee(e),$e=(e,t)=>{const[n,o]=ke(t),r=o?function(e,t={}){return e.replace(/(?:\?|&){1}([^=&]+)(?:=([^\?&]+)){0,1}/g,((e,n,o)=>(t[n]=o,""))),t}(o):{};for(const s in e){const o=Se(s)(n);if(o)return[e[s](o,r),t,o,r]}},je={};class De extends Event{constructor(n,o,r=!1){super(o,{bubbles:!0,composed:r}),s(this,e,new Ae),s(this,t,new Ae),this.host=n}cast(t){r(this,e).emit(this.castDown=t)}connect(e){e&&(this.observe=e),this.host.dispatchEvent(this);const n=e=>{e instanceof this.constructor&&e.type==this.type&&(e.stopPropagation(),e._sync(this))};this.host.addEventListener(this.type,n),r(this,t).add((()=>{delete this.observe,this.host.removeEventListener(this.type,n)}))}disconnect(){r(this,t).emit()}_sync(n){const o=t=>{this.castUp=t,this.observe&&this.observe(t),!("castDown"in this)&&r(this,e).emit(t)};r(this,t).add(r(n,e).add(o)),"castDown"in n?o(n.castDown):"castUp"in n&&o(n.castUp)}}e=new WeakMap,t=new WeakMap;class Ae extends Set{constructor(){super(...arguments),o(this,"add",(e=>super.add(e)&&(()=>this.delete(e)))),o(this,"emit",(e=>this.forEach((t=>t(e)))))}}function Le(e){const t=v(),[n,o]=R();return T((()=>{const n=new De(t.current,e,!0);return t.channel=n,n.connect(o),()=>n.disconnect()}),[e]),[n,e=>t.channel.cast(e)]}const Ne=Symbol();function Oe(){const{current:e}=v(),t=()=>function(e){const{symbolId:t}=e,n=[];return e.childNodes.forEach((e=>{e[t]||e[t]&&!e[Ne]||(e[Ne]=!0,n.push(e))})),n}(e),[n,o]=R(t);return[n,()=>o(t)]}const _e=e=>()=>{const{current:t}=e;t&&function(e){const t=document.createElement("textarea");t.style="width:0;height:0;opcity:0",t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),t.remove()}("value"in t?t.value:t.textContent)};function Me(){return L("host",{shadowDom:!0})}Me.props={slot:{type:String,reflect:!0,value:"router-case"},path:{type:String,reflect:!0,path:"/"},for:{type:String,reflect:!0},load:null};var Ie=z(Me),ze=new Map;function Pe({transition:e,path:t}){const[n,o]=R(),[r,s]=R({}),[i,l]=Le("InheritPath"),a=(i||"")+(t||""),c=function(e){const[t,n]=R(je);return B((()=>{if(!e)return;n(je);const t=()=>{n((t=>{const n=ye();return t.path!=n?{path:n,result:$e(e,n)}:t}))};return t(),ve(t)}),[e]),t.result}(U((()=>{const e={};for(const t in n)e[a+t]=n[t];return e}),[a,n]));return B((()=>{l(a)}),[a]),B((()=>{if(!c)return;let[t,n,o]=c;const{load:r,for:i}=t;if(i&&!ze.has(i)&&ze.set(i,Promise.resolve({forId:i})),r&&!ze.has(r)){let e;e="string"==typeof r?import(new URL(r,location).href):Promise.resolve(r(o)),ze.set(r,e.then((e=>"object"==typeof e?e:{default:e})))}let l=ze.get(r||i);return setTimeout((()=>l&&s({loading:!0})),40),l.then((async({default:t,forId:r,...i})=>{n==ye()?(e&&await e(o),l=null,n==ye()&&s({view:"function"==typeof t?t(o):t,forId:r,data:i})):l=null})),()=>l=null}),[c]),oe((()=>L("section",{slot:"view",key:ye()},r.view)),[r.view]),L("host",{shadowDom:!0,data:r.data},L("slot",{name:"router-case",onslotchange:e=>o([...e.target.assignedElements()].reduce(((e,t)=>({...e,[t.path]:()=>t})),{}))}),L("slot",{name:r.forId||"view"}),r.loading&&L("slot",{name:"loading"}))}Pe.props={path:String,transition:Function,data:{type:Object,event:{type:"Data"}}};var Te=z(Pe);function Be({path:e}){const[,t]=Le("InheritPath");return B((()=>t(e)),[e]),L("host",{onclick:t=>{let{target:n}=t;do{if(n.hasAttribute&&n.hasAttribute("href")&&!n.hasAttribute("ignore")){t.preventDefault();const o=n.getAttribute("href");!/^(http(s){0,1}:){0,1}\/\//.test(o)&&be((e||"")+o);break}}while(n=n.parentNode)}})}Be.props={path:String};var qe=z(Be);function Re({href:e}){const[t]=Le("InheritPath"),n=(t||"")+(e||"");return L("host",{onclick:e=>{e.stopPropagation(),e.preventDefault(),n&&be(n)}})}Re.props={href:String};var He=z(Re,HTMLAnchorElement);function Ue({load:e}){return L("host",null)}customElements.define("a-router-redirect",qe),customElements.define("a-router-switch",Te),customElements.define("a-router-case",Ie),customElements.define("a-router-link",He,{extends:"a"}),Ue.props={href:String,label:String,load:null,path:String};var We=z(Ue);function Je(){const e=H();return L("host",{shadowDom:!0,sources:X(e).filter((e=>e instanceof We))},L("slot",{ref:e}))}Je.props={label:String,sources:{type:Array,event:{type:"ChangeSources",bubbles:!0},value:()=>[]}};var Ze=z(Je),Fe=J`/* src/aside/aside.css */
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
`;function Ve(){return L("host",{shadowDom:!0},L("div",{class:"aside"},L("div",{class:"aside-content"},L("header",{class:"aside-header"},L("slot",{name:"brand"})),L("div",{class:"aside-menu"},L("slot",{name:"aside-menu"})))))}Ve.styles=Fe,Ve.props={view:{type:String,reflect:!0}};var Xe=z(Ve),Ge=J`/* src/article/article.css */
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
`;function Ke(){return L("host",{shadowDom:!0},L("style",null,Ge),L("div",{class:"header"},L("slot",{name:"header"})),L("div",{class:"content"},L("slot",null)),L("div",{class:"pagination"},L("slot",{name:"pagination"})))}Ke.styles=Ge;var Qe=z(Ke),Ye=J`/* src/hero/hero.css */
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
`;function et(){return L("host",{shadowDom:!0},L("slot",{name:"title"}))}et.styles=Ye;var tt=z(et);function nt(){return L("host",null)}nt.props={active:{type:Boolean,reflect:!0,event:{type:"MenuItemChange",bubbles:!0,composed:!0}}};var ot=z(nt,HTMLAnchorElement),rt=J`/* src/menu/menu.css */
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
`;function st(){const e=w(),t=H(),n=H(),[o,r]=Oe();se(t,r,{childList:!0});const s=o.filter((e=>e instanceof ot)),i=s.find((e=>e.active)),[l,a]=function(e,t,n){const[o,r]=R([0,0]);return B((()=>{var o;if(!n)return;const s=[...e.current.children],i=t.indexOf(n),l=s.slice(0,i).reduce(((e,t)=>e+t.clientHeight),0);r([l,(null==(o=s[i])?void 0:o.clientHeight)||0])}),[n]),n?o:[0,0]}(n,s,i);return L("host",{shadowDom:!0,ref:t,onMenuItemChange:e},L("slot",null),L("div",{class:"items"},L("div",{class:"items-line",style:`--y:${l}px;--h:${a}px;`},L("div",null)),L("div",{class:"items-slots",ref:n},s.map(((e,t)=>(e.slot=t,L("div",{class:"items-item"},L("slot",{name:t}))))))))}st.styles=rt;var it=z(st),lt=J`/* src/pagination/pagination.css */
:host {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
`,at=J`/* src/pagination/pagination-item.css */
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
`;function ct({href:e,direction:t}){return L("host",{shadowDom:!0},L(He,{href:e,"data-direction":t},L("svg",{style:">"==t?"margin-left: 1rem":"margin-right: 1rem",width:"7.656",height:"13.314",viewBox:"0 0 7.656 13.314"},L("path",{d:">"==t?"M.707,13.435a1,1,0,0,1,0-1.415l4.95-4.95L.707,2.121A1,1,0,0,1,2.121.707L7.778,6.364a1,1,0,0,1,0,1.414L2.121,13.435a1,1,0,0,1-1.414,0Z":"M7.778,13.435a1,1,0,0,0,0-1.415l-4.95-4.95,4.95-4.95A1,1,0,0,0,6.364.707L.707,6.364a1,1,0,0,0,0,1.414l5.656,5.657a1,1,0,0,0,1.414,0Z",transform:"translate(-0.414 -0.414)",fill:"currentColor"})),L("slot",null)))}ct.styles=at,ct.props={href:{type:String,reflect:!0},direction:{type:String,reflect:!0}};var dt=z(ct);function ut(){return L("host",{shadowDom:!0},L("slot",null))}ut.styles=lt,ut.props={next:Object,prev:Object};var ht=z(ut),pt=J`/* src/menu-phone/menu-phone.css */
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
`,ft=J`/* src/button/button.css */
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
`;function mt(){return L("host",{shadowDom:!0},L("button",null,L("slot",null)))}mt.styles=ft,mt.props={dark:{type:Boolean,reflect:!0}};var gt=z(mt);function bt(){const[e,t]=q("show");return L("host",{shadowDom:!0},L("div",{class:"content-scroll"},L("div",{class:"content-space"},L("div",{class:"content"},L("div",{class:"content-brand"},L("slot",{name:"brand"})),L("slot",{name:"aside-menu"})))),L("div",{class:"button-container"},L(gt,{dark:!0,onclick:()=>t(!e)},L("div",{class:"burger"},L("div",null),L("div",null),L("div",null)))))}bt.styles=pt,bt.props={show:{type:Boolean,reflect:!0}};var vt=z(bt),yt=J`/* src/container/container.css */
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
`,wt={},xt=(e,t)=>t.path||encodeURI(`/${e}/${t.label}`.toLowerCase());function kt(){var e,t;const n=H(),o=H(),r=X(n),s=w(),i=r.filter((e=>e instanceof Ze)),l=function(){const[e,t]=R(ye);return B((()=>ve((()=>t(ye)))),[]),t=>Se(t)(e)}(),a=null==(t=null==(e=o.current)?void 0:e.data)?void 0:t.meta,[c,d]=((e,t)=>{const n=e.map((({label:e,sources:t})=>t.filter((e=>!e.href)).map((t=>({href:xt(e,t),label:t.label}))))).flat();for(let o=0;o<n.length;o++)if(t(n[o].href))return[n[o-1],n[o+1]];return[]})(i,l),u=Y("phone, tablet 834px , desktop 1080px");return B((()=>{a&&a.title&&(document.title=a.title)}),[a]),L("host",{shadowDom:!0,onChangeSources:s},L("slot",{ref:n}),L(qe,{class:`content content-${u}`},L(Xe,{view:u},"desktop"==u&&L("slot",{name:"brand",slot:"brand"}),i&&i.map((({label:e,sources:t})=>L("div",{slot:"aside-menu"},L(it,null,L("strong",null,e),t.map((t=>{const n=xt(e,t);return L(ot,{href:t.href||n,active:!!l(n),target:t.href?"_blank":null,ignore:t.href?"":null},L("strong",null,t.label))}))))))),L(Qe,null,L(tt,{slot:"header"},(null==a?void 0:a.title)&&L("h1",{slot:"title"},null==a?void 0:a.title)),L(Te,{ref:o,onData:s},i.map((({label:e,sources:t})=>t.map((t=>{return t.load&&L(Ie,{path:xt(e,t),key:t,load:"string"==typeof t.load&&t.load.endsWith(".md")?(n=t.load,wt[n]=wt[n]||(()=>fetch(n).then((e=>e.text())).then((e=>{var t;const[n,...o]=ge.call(null,[e]);if(n){if(null==(t=n.props)?void 0:t.meta){const[e]=n.children[0].children,t=`{${e.replace(/\s*([^:]+):\s*(.*)/g,'"$1":"$2",').replace(/,$/,"")}}`;return{meta:JSON.parse(t),default:o}}return{deafult:[n,...o]}}}))),wt[n]):t.load});var n}))))),L(ht,{slot:"pagination"},L(dt,{href:null==c?void 0:c.href,direction:"<"},null==c?void 0:c.label),L(dt,{href:null==d?void 0:d.href,direction:">"},null==d?void 0:d.label))),L("aside",{class:"aside"}),"phone"==u&&L(vt,null,L("slot",{name:"brand",slot:"brand"}),i&&i.map((({label:e,sources:t})=>L("div",{slot:"aside-menu"},L(it,null,L("strong",null,e),t.map((t=>{const n=xt(e,t);return L(ot,{href:t.href||n,active:!!l(n),target:t.href?"_blank":null,ignore:t.href?"":null},L("strong",null,t.label))})))))))))}kt.styles=yt,kt.props={path:String};var Et=z(kt),Ct=J`/* src/code/code.css */
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
`,St=J`/* src/preview/preview.css */
:host {
  background: var(--doc-preview--bg, #f1f9f9);
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
}
`;function $t(){return L("host",{shadowDom:!0},L("div",null,L("slot",null)))}$t.styles=St;var jt=z($t);function Dt({type:e}){const t=v(),n=_e(t),o=(e||"").match(/(.*)\s+(.*)/);let[,r,s]=o||[];return L("host",{shadowDom:!0},"preview"==s&&"html"==r&&L(jt,null,V([t.current.textContent])),"inject"==s&&"html"==r&&L("div",{class:"inject"},V([t.current.textContent])),"inject"!=s&&L("div",{class:"code"},L("pre",{class:"pre"},L("slot",null)),L("div",{class:"button-align"},L(gt,{type:"circle",class:"button-copy",onclick:n},L("svg",{width:"13",height:"13",viewBox:"0 0 13 13"},L("rect",{rx:"1",ry:"1",width:"10",height:"2",fill:"currentColor"}),L("rect",{rx:"1",ry:"1",width:"2",height:"10",fill:"currentColor"}),L("rect",{width:"8",height:"8",rx:"1",ry:"1",x:"4",y:"4",fill:"transparent","stroke-width":"2",stroke:"currentColor"}))))))}Dt.styles=Ct,Dt.props={type:String};var At=z(Dt),Lt=J`/* src/table/table.css */
:host {
  display: block;
  overflow-x: auto;
}
table {
  font-size: 0.9em;
  width: 100%;
  border-collapse: collapse;
}
`;function Nt(){return L("host",{shadowDom:!0},L("table",null,L("slot",null)))}Nt.styles=Lt;var Ot=z(Nt),_t=J`/* src/quote/quote.css */
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
`;function Mt(){return L("host",{shadowDom:!0},L("div",{class:"quote"},L("svg",{viewBox:"0 0 120 180","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",width:"1rem"},L("path",{d:"M120 120c0 33.114-26.885 59.999-60 59.999-33.115 0-60-26.885-60-60C0 65.942 30.107 25.608 73.016 8.717a4.957 4.957 0 015.321 8.157C68.18 26.654 61.48 39.99 60.217 54.865a4.97 4.97 0 004.613 5.324C95.69 62.654 120 88.51 120 119.999V120z",fill:"currentColor"})),L("svg",{viewBox:"0 0 120 180","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"2",width:"1rem"},L("path",{d:"M120 120c0 33.114-26.885 59.999-60 59.999-33.115 0-60-26.885-60-60C0 65.942 30.107 25.608 73.016 8.717a4.957 4.957 0 015.321 8.157C68.18 26.654 61.48 39.99 60.217 54.865a4.97 4.97 0 004.613 5.324C95.69 62.654 120 88.51 120 119.999V120z",fill:"currentColor"}))),L("div",{class:"content"},L("slot",null)))}Mt.styles=_t;var It=z(Mt);customElements.define("doc-container",Et),customElements.define("doc-aside",Xe),customElements.define("doc-article",Qe),customElements.define("doc-hero",tt),customElements.define("doc-source",We),customElements.define("doc-group",Ze),customElements.define("doc-menu",it),customElements.define("doc-pagination",ht),customElements.define("doc-pagination-item",dt),customElements.define("doc-button",gt),customElements.define("doc-menu-phone",vt),customElements.define("doc-table",Ot),customElements.define("doc-quote",It),customElements.define("doc-preview",jt),customElements.define("doc-menu-item",ot,{extends:"a"}),customElements.define("doc-code",At);export{z as a,X as b,J as c,Y as d,re as e,q as f,se as g,L as h,T as i,oe as j,ie as k,H as u};
