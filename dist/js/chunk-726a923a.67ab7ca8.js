(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-726a923a"],{2446:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n("25f0"),n("159b"),n("b64b"),e["a"]={methods:{showMessage:function(t,e){var n="Success!",o="#27ae60",i=60,s=(+new Date).toString(),r=document.getElementsByClassName("toast");"error"===t&&(n="Error!",o="#e74c3c");var a=document.createElement("div");a.id=s,a.classList.add("toast"),a.classList.add("shadow"),a.style.backgroundColor=o,a.style.top=i.toString()+"px",a.style.opacity=0;var c=document.createElement("h2");c.innerText=n;var u=document.createElement("ul");if(e&&e.length&&e.forEach((function(t){var e=document.createElement("li");e.innerText=t,u.appendChild(e)})),a.appendChild(c),a.appendChild(u),document.body.appendChild(a),r&&r.length){var d=15+a.offsetHeight;r.forEach((function(t){if(t.id!==s){var e=t.offsetTop+d;t.style.top=e.toString()+"px"}}))}a.style.opacity=1,setTimeout((function(){a.style.opacity=0,setTimeout((function(){a.remove()}),500)}),5e3)},handleResponseErrorPayload:function(t){var e=["An error occured"];t&&(t.response?"object"===o(t.response)&&t.response.data?t.response.data.errors?e=[t.response.data.errors]:t.response.data.message?e=[t.response.data.message]:"object"===o(t.response.data)&&(e=[],Object.keys(t.response.data).forEach((function(n){e.push(n+" "+t.response.data[n][0])}))):"string"===typeof t.response&&(e=[t.response]):t.messages?e=t.messages:"string"===typeof t&&(e=[t])),this.showMessage("error",e)}}}},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),i=n("825a"),s=n("d039"),r=n("ad6d"),a="toString",c=RegExp.prototype,u=c[a],d=s((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=a;(d||l)&&o(RegExp.prototype,a,(function(){var t=i(this),e=String(t.source),n=t.flags,o=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?r.call(t):n);return"/"+e+"/"+o}),{unsafe:!0})},"3cdc":function(t,e,n){"use strict";n("a15b");var o=n("103c");e["a"]={data:function(){return{model:{},isEditing:!1,listViewName:"",route:"",collection:[]}},methods:{retrieve:function(){var t=this;this.axios.get(this.endpoint).then((function(e){t.collection=e.data})).catch((function(e){return t.handleResponseError(e)}))},destroy:function(t){var e=this;confirm(o["a"].DELETE_CONFIRMATION_MESSAGE)&&this.axios.delete(this.endpoint+t).then((function(t){e.showMessage("success",["Done!"]),e.retrieve()})).catch((function(t){return e.handleResponseError(t)}))},details:function(t){var e=this;this.axios.get(this.endpoint+t).then((function(t){return e.handleDetailsResponse(t)})).catch((function(t){return e.handleResponseError(t)}))},submit:function(){var t=this,e=this.canSubmit();if(!e.allowed)return this.handleSubmitRequestError(e);var n=this.model.id?this.axios.put(this.endpoint+this.model.id,this.model):this.axios.post(this.endpoint,this.model);n.then((function(e){return t.handleSubmitResponse(e)})).catch((function(e){return t.handleResponseError(e)}))},canSubmit:function(){return{allowed:!0}},beforeRetrieve:function(){this.$route.params&&this.$route.params.id&&(this.details(this.$route.params.id),this.isEditing=!0)},handleSubmitResponse:function(t){this.showMessage("success",["Done!"]),this.$router.push({path:this.route})},handleDetailsResponse:function(t){this.model=t.data},handleSubmitRequestError:function(t){this.handleResponseErrorPayload(t.response)},handleResponseError:function(t){this.handleResponseErrorPayload(t)},navigateToAdd:function(){this.$router.push({path:[this.route,"add"].join("/")})},navigateTo:function(t){this.$router.push({path:[this.route,"edit",t].join("/")})},navigateToDetails:function(t){this.$router.push({path:[this.route,"details",t].join("/")})}}}},"8f4e":function(t,e,n){"use strict";n.r(e);n("b0c0");var o=n("7a23"),i={class:"inner-container"},s={class:"h1"},r=Object(o["f"])(" unit "),a={class:"grid"},c={class:"col-4"},u={class:"form-group"},d=Object(o["g"])("label",{for:""},"Name:",-1),l=Object(o["g"])("div",{class:"col-8"},null,-1),h={class:"col-4 lg-only"},p={class:"btn",type:"submit"};function f(t,e,n,f,m,b){var g=Object(o["w"])("fab");return Object(o["p"])(),Object(o["d"])("div",i,[Object(o["g"])("h1",s,[Object(o["g"])("strong",null,Object(o["y"])(t.isEditing?"Update":"Create"),1),r]),Object(o["g"])("form",{action:"javascript:;",onSubmit:e[2]||(e[2]=Object(o["F"])((function(e){return t.submit()}),["prevent"]))},[Object(o["g"])("div",a,[Object(o["g"])("div",c,[Object(o["g"])("div",u,[d,Object(o["E"])(Object(o["g"])("input",{type:"text",placeholder:"Name","onUpdate:modelValue":e[1]||(e[1]=function(t){return m.model.name=t})},null,512),[[o["B"],m.model.name]])])]),l,Object(o["g"])("div",h,[Object(o["g"])("button",p,Object(o["y"])(t.isEditing?"Update":"Create"),1)])]),Object(o["g"])(g,{icon:"✓",onClick:t.submit},null,8,["onClick"])],32)])}var m=n("3cdc"),b=n("2446"),g={name:"UnitForm",data:function(){return{endpoint:"units/",route:"/unit",model:{id:null,name:""}}},methods:{canSubmit:function(){return!this.model.name||this.model.name.length<2?{response:{messages:["Name: Ensure this field has at least 2 characters."]}}:{allowed:!0}}},mixins:[m["a"],b["a"]],mounted:function(){this.beforeRetrieve()}};g.render=f;e["default"]=g},a15b:function(t,e,n){"use strict";var o=n("23e7"),i=n("44ad"),s=n("fc6a"),r=n("a640"),a=[].join,c=i!=Object,u=r("join",",");o({target:"Array",proto:!0,forced:c||!u},{join:function(t){return a.call(s(this),void 0===t?",":t)}})},b0c0:function(t,e,n){var o=n("83ab"),i=n("9bf2").f,s=Function.prototype,r=s.toString,a=/^\s*function ([^ (]*)/,c="name";o&&!(c in s)&&i(s,c,{configurable:!0,get:function(){try{return r.call(this).match(a)[1]}catch(t){return""}}})},d28b:function(t,e,n){var o=n("746f");o("iterator")},e01a:function(t,e,n){"use strict";var o=n("23e7"),i=n("83ab"),s=n("da84"),r=n("5135"),a=n("861d"),c=n("9bf2").f,u=n("e893"),d=s.Symbol;if(i&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new d(t):void 0===t?d():d(t);return""===t&&(l[e]=!0),e};u(h,d);var p=h.prototype=d.prototype;p.constructor=h;var f=p.toString,m="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=f.call(t);if(r(l,t))return"";var n=m?e.slice(7,-1):e.replace(b,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:h})}}}]);
//# sourceMappingURL=chunk-726a923a.67ab7ca8.js.map