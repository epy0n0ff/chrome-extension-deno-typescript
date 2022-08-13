var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function createCommonjsModule(b,h,A){return A={path:h,exports:{},require:function(x,c){return commonjsRequire(x,c??A.path)}},b(A,A.exports),A.exports}function commonjsRequire(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var browserPolyfill=createCommonjsModule(function(b,h){(function(A,x){x(b)})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:commonjsGlobal,function(A){if(typeof globalThis!="object"||typeof chrome!="object"||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){const x="The message port closed before a response was received.",c="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",T=u=>{const k={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(k).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class P extends WeakMap{constructor(r,n=void 0){super(n),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}const _=e=>e&&typeof e=="object"&&typeof e.then=="function",S=(e,r)=>(...n)=>{u.runtime.lastError?e.reject(new Error(u.runtime.lastError.message)):r.singleCallbackArg||n.length<=1&&r.singleCallbackArg!==!1?e.resolve(n[0]):e.resolve(n)},p=e=>e==1?"argument":"arguments",O=(e,r)=>function(g,...m){if(m.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${p(r.minArgs)} for ${e}(), got ${m.length}`);if(m.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${p(r.maxArgs)} for ${e}(), got ${m.length}`);return new Promise((a,i)=>{if(r.fallbackToNoCallback)try{g[e](...m,S({resolve:a,reject:i},r))}catch(s){console.warn(`${e} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `,s),g[e](...m),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(g[e](...m),a()):g[e](...m,S({resolve:a,reject:i},r))})},M=(e,r,n)=>new Proxy(r,{apply(g,m,a){return n.call(m,e,...a)}});let w=Function.call.bind(Object.prototype.hasOwnProperty);const y=(e,r={},n={})=>{let g=Object.create(null),m={has(i,s){return s in e||s in g},get(i,s,o){if(s in g)return g[s];if(!(s in e))return;let t=e[s];if(typeof t=="function")if(typeof r[s]=="function")t=M(e,e[s],r[s]);else if(w(n,s)){let d=O(s,n[s]);t=M(e,e[s],d)}else t=t.bind(e);else if(typeof t=="object"&&t!==null&&(w(r,s)||w(n,s)))t=y(t,r[s],n[s]);else if(w(n,"*"))t=y(t,r[s],n["*"]);else return Object.defineProperty(g,s,{configurable:!0,enumerable:!0,get(){return e[s]},set(d){e[s]=d}}),t;return g[s]=t,t},set(i,s,o,t){return s in g?g[s]=o:e[s]=o,!0},defineProperty(i,s,o){return Reflect.defineProperty(g,s,o)},deleteProperty(i,s){return Reflect.deleteProperty(g,s)}},a=Object.create(e);return new Proxy(a,m)},v=e=>({addListener(r,n,...g){r.addListener(e.get(n),...g)},hasListener(r,n){return r.hasListener(e.get(n))},removeListener(r,n){r.removeListener(e.get(n))}}),$=new P(e=>typeof e!="function"?e:function(n){const g=y(n,{},{getContent:{minArgs:0,maxArgs:0}});e(g)});let R=!1;const N=new P(e=>typeof e!="function"?e:function(n,g,m){let a=!1,i,s=new Promise(f=>{i=function(l){R||(console.warn(c,new Error().stack),R=!0),a=!0,f(l)}}),o;try{o=e(n,g,i)}catch(f){o=Promise.reject(f)}const t=o!==!0&&_(o);if(o!==!0&&!t&&!a)return!1;const d=f=>{f.then(l=>{m(l)},l=>{let C;l&&(l instanceof Error||typeof l.message=="string")?C=l.message:C="An unexpected error occurred",m({__mozWebExtensionPolyfillReject__:!0,message:C})}).catch(l=>{console.error("Failed to send onMessage rejected reply",l)})};return d(t?o:s),!0}),F=({reject:e,resolve:r},n)=>{u.runtime.lastError?u.runtime.lastError.message===x?r():e(new Error(u.runtime.lastError.message)):n&&n.__mozWebExtensionPolyfillReject__?e(new Error(n.message)):r(n)},j=(e,r,n,...g)=>{if(g.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${p(r.minArgs)} for ${e}(), got ${g.length}`);if(g.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${p(r.maxArgs)} for ${e}(), got ${g.length}`);return new Promise((m,a)=>{const i=F.bind(null,{resolve:m,reject:a});g.push(i),n.sendMessage(...g)})},L={devtools:{network:{onRequestFinished:v($)}},runtime:{onMessage:v(N),onMessageExternal:v(N),sendMessage:j.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:j.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},E={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return k.privacy={network:{"*":E},services:{"*":E},websites:{"*":E}},y(u,L,k)};A.exports=T(chrome)}else A.exports=globalThis.browser})});document.addEventListener("click",b=>{const h={domain:"httpbin.org"};browserPolyfill.cookies.getAll(h).then(x=>{x.forEach((c,T,u)=>{alert("name:"+c.name+", value:"+c.value)})})});
