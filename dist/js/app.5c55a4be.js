(function(e){function t(t){for(var c,r,i=t[0],u=t[1],s=t[2],d=0,l=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(e[c]=u[c]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(c=!1)}c&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var c={},r={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0242d1e6":"fa5986a5","chunk-089e6b26":"7f1f67e7","chunk-0d2a4f76":"2bfac7a9","chunk-18e160a1":"c2c60a92","chunk-2d0e456b":"3aac9ac6","chunk-66a4bda5":"e5936022","chunk-6d51682e":"2f160f46","chunk-7184946f":"495020ae","chunk-726a923a":"04efe7df","chunk-81bdc3aa":"3667adbd","chunk-c82405e4":"399db589"}[e]+".js"}function u(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0d2a4f76":1,"chunk-18e160a1":1,"chunk-81bdc3aa":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-0242d1e6":"31d6cfe0","chunk-089e6b26":"31d6cfe0","chunk-0d2a4f76":"812bb152","chunk-18e160a1":"8ff6a000","chunk-2d0e456b":"31d6cfe0","chunk-66a4bda5":"31d6cfe0","chunk-6d51682e":"31d6cfe0","chunk-7184946f":"31d6cfe0","chunk-726a923a":"31d6cfe0","chunk-81bdc3aa":"0fcc0fa9","chunk-c82405e4":"31d6cfe0"}[e]+".css",a=u.p+c,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],d=s.getAttribute("data-href");if(d===c||d===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var c=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[e],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",l.name="ChunkLoadError",l.type=c,l.request=r,n[1](l)}a[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=c,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)u.d(n,c,function(t){return e[t]}.bind(null,c));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"103c":function(e,t,n){"use strict";t["a"]={JWT_TOKEN:"app-jwt-token",USER_CREDENTIALS:"app-user",DELETE_CONFIRMATION_MESSAGE:"Are you sure you want to delete this item?"}},2011:function(e,t,n){},"3a57":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["g"])("div",{class:"loader-inner"},[Object(c["g"])("div",{class:"lds-dual-ring"})],-1);function a(e,t,n,a,o,i){var u=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",{class:e.getLoaderState()?"loader active":"loader"},[r],2),Object(c["g"])(u)],64)}var o=n("5530"),i=n("5502"),u=n("ac10"),s={name:"app",methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["c"])(["getLoaderState"])),Object(i["b"])(["setUser"])),{},{retrieveToken:function(){this.setUser(this.recoveryUser()),this.setToken(this.recoveryToken())}}),mixins:[u["a"]],mounted:function(){this.retrieveToken()}};n("73de");s.render=a;var d=s,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),p=n("103c"),f=Object(i["a"])({state:{user:null,loaderState:!1},mutations:{applySetUser:function(e,t){e.user=t},applySetLoaderState:function(e,t){e.loaderState=t}},actions:{setUser:function(e,t){var n=e.commit;t?localStorage.setItem(p["a"].USER_CREDENTIALS,JSON.stringify(t)):localStorage.removeItem(p["a"].USER_CREDENTIALS),n("applySetUser",t)},setLoaderState:function(e,t){var n=e.commit;n("applySetLoaderState",t)}},getters:{getUser:function(e){return e.user},getLoaderState:function(e){return e.loaderState}}}),h=[{path:"/",name:"Home",component:function(){return n.e("chunk-2d0e456b").then(n.bind(null,"9097"))},children:[{path:"",redirect:{name:"signin"}},{path:"/signin",name:"signin",component:function(){return n.e("chunk-6d51682e").then(n.bind(null,"4a33"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-089e6b26").then(n.bind(null,"34c3"))}}],beforeEnter:function(e,t,n){n(f.getters.getUser?{path:"/dashboard"}:null)}},{path:"/dashboard",name:"Dashboard",component:function(){return n.e("chunk-0d2a4f76").then(n.bind(null,"8265"))},children:[{path:"/unit",name:"unitList",component:function(){return n.e("chunk-c82405e4").then(n.bind(null,"a135"))}},{path:"/unit/add",name:"unitFormNew",component:function(){return n.e("chunk-726a923a").then(n.bind(null,"8f4e"))}},{path:"/unit/edit/:id",name:"unitFormEdit",component:function(){return n.e("chunk-726a923a").then(n.bind(null,"8f4e"))}},{path:"/ingredient",name:"ingredientList",component:function(){return n.e("chunk-7184946f").then(n.bind(null,"65b4"))}},{path:"/ingredient/add",name:"ingredientFormNew",component:function(){return n.e("chunk-66a4bda5").then(n.bind(null,"16ac"))}},{path:"/ingredient/edit/:id",name:"ingredientFormEdit",component:function(){return n.e("chunk-66a4bda5").then(n.bind(null,"16ac"))}},{path:"/recipe",name:"recipeList",alias:"",component:function(){return n.e("chunk-0242d1e6").then(n.bind(null,"7bc2"))}},{path:"/recipe/add",name:"recipeFormNew",component:function(){return n.e("chunk-81bdc3aa").then(n.bind(null,"378c"))}},{path:"/recipe/details/:id",name:"recipeDetails",component:function(){return n.e("chunk-18e160a1").then(n.bind(null,"7c0c"))}},{path:"/recipe/edit/:id",name:"recipeFormEdit",component:function(){return n.e("chunk-81bdc3aa").then(n.bind(null,"378c"))}}],beforeEnter:function(e,t,n){n(f.getters.getUser?null:{path:"/signin"})}}],b=Object(l["a"])({history:Object(l["b"])("/"),routes:h}),m=b,v=n("bc3a"),g=n.n(v),k={baseURL:"https://nate-recipes.herokuapp.com/api/",timeout:3e4},O=g.a.create(k);O.interceptors.request.use((function(e){return f._actions.setLoaderState[0](!0),e}),(function(e){return Promise.reject(e)})),O.interceptors.response.use((function(e){return f._actions.setLoaderState[0](!1),e}),(function(e){return f._actions.setLoaderState[0](!1),Promise.reject(e)}));var y=O,j=Object(c["G"])("data-v-36455fb5"),S=j((function(e,t,n,r,a,o){return Object(c["p"])(),Object(c["d"])("div",{class:"fab shadow no-select sm-only",onClick:t[1]||(t[1]=function(){return e.click&&e.click.apply(e,arguments)})},Object(c["y"])(n.icon),1)})),T={props:["icon"],click:function(){this.$emit("click")}};n("a1d4");T.render=S,T.__scopeId="data-v-36455fb5";var E=T,w=Object(c["G"])("data-v-08255117");Object(c["s"])("data-v-08255117");var _={class:"card-content"},L={class:"title"},N={class:"subtitle"},C={class:"card-actions"};Object(c["q"])();var I=w((function(e,t,n,r,a,o){return Object(c["p"])(),Object(c["d"])("div",{class:"card shadow-hover no-select",onClick:t[4]||(t[4]=Object(c["F"])((function(){return e.click&&e.click.apply(e,arguments)}),["prevent"]))},[Object(c["g"])("div",_,[Object(c["g"])("span",L,Object(c["y"])(n.title),1),Object(c["g"])("span",N,Object(c["y"])(n.subtitle||" "),1)]),Object(c["g"])("div",C,[n.showDetails?(Object(c["p"])(),Object(c["d"])("div",{key:0,class:"card-action",onClick:t[1]||(t[1]=function(t){return e.$emit("navigateToDetails")})}," Details ")):Object(c["e"])("",!0),Object(c["g"])("div",{class:"card-action",onClick:t[2]||(t[2]=function(t){return e.$emit("navigateTo")})}," Edit "),Object(c["g"])("div",{class:"card-action",onClick:t[3]||(t[3]=function(t){return e.$emit("delete")})}," Delete ")])])})),U={props:{title:{required:!0,type:String},subtitle:{type:String},showDetails:{type:Boolean}}};n("71a1");U.render=I,U.__scopeId="data-v-08255117";var x=U,A=Object(c["G"])("data-v-4944c604");Object(c["s"])("data-v-4944c604");var D={class:"card-content"},P=Object(c["g"])("div",{class:"card-icon"}," + ",-1),F={class:"card-text"};Object(c["q"])();var J=A((function(e,t,n,r,a,o){return Object(c["p"])(),Object(c["d"])("div",{class:"card shadow no-select",onClick:t[1]||(t[1]=Object(c["F"])((function(){return e.click&&e.click.apply(e,arguments)}),["prevent"]))},[Object(c["g"])("div",D,[P,Object(c["g"])("div",F,Object(c["y"])(n.title),1)])])})),R={props:{title:{required:!0,type:String},subtitle:{type:String}}};n("8c83");R.render=J,R.__scopeId="data-v-4944c604";var q=R,K=(n("841c"),n("ac1f"),Object(c["G"])("data-v-76dfc0be"));Object(c["s"])("data-v-76dfc0be");var B={class:"search-box"};Object(c["q"])();var M=K((function(e,t,n,r,a,o){return Object(c["p"])(),Object(c["d"])("div",B,[Object(c["E"])(Object(c["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.search=e}),placeholder:n.placeholder||"Search by name",type:"text",onKeyup:t[2]||(t[2]=function(){return o.keyup&&o.keyup.apply(o,arguments)}),onKeydown:t[3]||(t[3]=function(){return o.keydown&&o.keydown.apply(o,arguments)})},null,40,["placeholder"]),[[c["B"],a.search]])])})),G={props:["placeholder"],data:function(){return{search:"",isTypingTimer:null}},methods:{keyup:function(){clearTimeout(this.isTypingTimer),this.isTypingTimer=setTimeout(this.emitSearch,500)},keydown:function(){clearTimeout(this.isTypingTimer)},emitSearch:function(){this.$emit("search",this.search)}}};n("d6ab");G.render=M,G.__scopeId="data-v-76dfc0be";var $=G,W=Object(c["c"])(d).use(f).use(m);W.config.globalProperties.axios=y,W.component("Fab",E),W.component("Card",x),W.component("CardNew",q),W.component("SearchBox",$),W.mount("#app")},"71a1":function(e,t,n){"use strict";n("3a57")},"73de":function(e,t,n){"use strict";n("8c7f")},"8c7f":function(e,t,n){},"8c83":function(e,t,n){"use strict";n("c9bf")},"94db":function(e,t,n){},a1d4:function(e,t,n){"use strict";n("2011")},ac10:function(e,t,n){"use strict";var c=n("103c");t["a"]={methods:{setToken:function(e){e?(this.axios.defaults.headers.common.Authorization="bearer "+e,localStorage.setItem(c["a"].JWT_TOKEN,JSON.stringify(e))):(delete this.axios.defaults.headers.common.Authorization,localStorage.removeItem(c["a"].JWT_TOKEN))},recoveryUser:function(){return JSON.parse(localStorage.getItem(c["a"].USER_CREDENTIALS))},recoveryToken:function(){return JSON.parse(localStorage.getItem(c["a"].JWT_TOKEN))}}}},c9bf:function(e,t,n){},d6ab:function(e,t,n){"use strict";n("94db")}});
//# sourceMappingURL=app.5c55a4be.js.map