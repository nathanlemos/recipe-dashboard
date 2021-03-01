(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66a4bda5"],{"16ac":function(t,e,n){"use strict";n.r(e);n("b0c0");var o=n("7a23"),i={class:"inner-container"},r={class:"h1"},a=Object(o["f"])(" ingredient "),s={class:"grid"},c={class:"col-12"},u={class:"form-group"},l=Object(o["g"])("label",{for:""},"Name:",-1),d={class:"col-12"},h={class:"form-group"},p=Object(o["g"])("label",{for:""},"Article number:",-1),f={class:"col-4"},b={class:"form-group"},m=Object(o["g"])("label",{for:""},"Referencial quantity:",-1),g={class:"col-4"},v={class:"form-group"},y=Object(o["g"])("label",{for:""},"Unit:",-1),j={class:"col-4"},O={class:"form-group"},E=Object(o["g"])("label",{for:""},"Price per referencial quantity:",-1),S={class:"col-12 lg-only"},R={class:"btn",type:"submit"};function w(t,e,n,w,x,_){var q=Object(o["w"])("fab");return Object(o["p"])(),Object(o["d"])("div",i,[Object(o["g"])("h1",r,[Object(o["g"])("strong",null,Object(o["y"])(t.isEditing?"Update":"Create"),1),a]),Object(o["g"])("form",{action:"javascript:;",onSubmit:e[6]||(e[6]=Object(o["F"])((function(e){return t.submit()}),["prevent"]))},[Object(o["g"])("div",s,[Object(o["g"])("div",c,[Object(o["g"])("div",u,[l,Object(o["E"])(Object(o["g"])("input",{type:"text",placeholder:"Name","onUpdate:modelValue":e[1]||(e[1]=function(t){return x.model.name=t})},null,512),[[o["B"],x.model.name]])])]),Object(o["g"])("div",d,[Object(o["g"])("div",h,[p,Object(o["E"])(Object(o["g"])("input",{type:"text",placeholder:"Article number","onUpdate:modelValue":e[2]||(e[2]=function(t){return x.model.article_number=t})},null,512),[[o["B"],x.model.article_number]])])]),Object(o["g"])("div",f,[Object(o["g"])("div",b,[m,Object(o["E"])(Object(o["g"])("input",{type:"text",placeholder:"Base quantity","onUpdate:modelValue":e[3]||(e[3]=function(t){return x.model.avg_quantity=t})},null,512),[[o["B"],x.model.avg_quantity]])])]),Object(o["g"])("div",g,[Object(o["g"])("div",v,[y,Object(o["E"])(Object(o["g"])("select",{"onUpdate:modelValue":e[4]||(e[4]=function(t){return x.model.unit_id=t})},[(Object(o["p"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(x.unitOptions,(function(t){return Object(o["p"])(),Object(o["d"])("option",{key:t.value,value:t.value},Object(o["y"])(t.label),9,["value"])})),128))],512),[[o["A"],x.model.unit_id]])])]),Object(o["g"])("div",j,[Object(o["g"])("div",O,[E,Object(o["E"])(Object(o["g"])("input",{type:"text",placeholder:"Price per referencial quantity","onUpdate:modelValue":e[5]||(e[5]=function(t){return x.model.cost=t})},null,512),[[o["B"],x.model.cost]])])]),Object(o["g"])("div",S,[Object(o["g"])("button",R,Object(o["y"])(t.isEditing?"Update":"Create"),1)])]),Object(o["g"])(q,{icon:"✓",onClick:t.submit},null,8,["onClick"])],32)])}n("d81d");var x=n("3cdc"),_=n("2446"),q={name:"IngredientForm",data:function(){return{endpoint:"ingredients/",route:"/ingredient",unitOptions:[],model:{id:null,name:"",article_number:"",avg_quantity:0,cost:0,unit_id:null}}},methods:{fetchUnits:function(){var t=this,e=this;this.axios.get("units/").then((function(t){var n=t.data.map((function(t){return{value:t.id,label:t.name}}));e.unitOptions=n,e.beforeRetrieve()})).catch((function(e){return t.handleResponseError(e)}))},canSubmit:function(){var t=[];return(!this.model.name||this.model.name.length<3)&&t.push("Name: Ensure this field has at least 3 characters."),(!this.model.article_number||this.model.article_number.length<3)&&t.push("Article Number: Ensure this field has at least 3 characters."),this.model.avg_quantity&&!isNaN(this.model.avg_quantity)||t.push("Base quantity: Ensure this value is greater than or equal to 1."),this.model.unit_id&&!isNaN(this.model.unit_id)||t.push("Unit: Inform the unit of the ingredient."),this.model.cost&&!isNaN(this.model.cost)||t.push("Price per referencial quantity: Ensure this value is greater than or equal to 0.01."),t.length?{response:{messages:t}}:{allowed:!0}}},mixins:[x["a"],_["a"]],mounted:function(){this.fetchUnits()}};q.render=w;e["default"]=q},2446:function(t,e,n){"use strict";n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function o(t){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n("25f0"),n("159b"),n("b64b"),e["a"]={methods:{showMessage:function(t,e){var n="Success!",o="#27ae60",i=60,r=(+new Date).toString(),a=document.getElementsByClassName("toast");"error"===t&&(n="Error!",o="#e74c3c");var s=document.createElement("div");s.id=r,s.classList.add("toast"),s.classList.add("shadow"),s.style.backgroundColor=o,s.style.top=i.toString()+"px",s.style.opacity=0;var c=document.createElement("h2");c.innerText=n;var u=document.createElement("ul");if(e&&e.length&&e.forEach((function(t){var e=document.createElement("li");e.innerText=t,u.appendChild(e)})),s.appendChild(c),s.appendChild(u),document.body.appendChild(s),a&&a.length){var l=15+s.offsetHeight;a.forEach((function(t){if(t.id!==r){var e=t.offsetTop+l;t.style.top=e.toString()+"px"}}))}s.style.opacity=1,setTimeout((function(){s.style.opacity=0,setTimeout((function(){s.remove()}),500)}),5e3)},handleResponseErrorPayload:function(t){var e=["An error occured"];t&&(t.response?"object"===o(t.response)&&t.response.data?t.response.data.errors?e=[t.response.data.errors]:t.response.data.message?e=[t.response.data.message]:"object"===o(t.response.data)&&(e=[],Object.keys(t.response.data).forEach((function(n){e.push(n+" "+t.response.data[n][0])}))):"string"===typeof t.response&&(e=[t.response]):t.messages?e=t.messages:"string"===typeof t&&(e=[t])),this.showMessage("error",e)}}}},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),i=n("825a"),r=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=r((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=s;(l||d)&&o(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,o=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+o}),{unsafe:!0})},"3cdc":function(t,e,n){"use strict";n("a15b");var o=n("103c");e["a"]={data:function(){return{model:{},isEditing:!1,listViewName:"",route:"",collection:[]}},methods:{retrieve:function(){var t=this;this.axios.get(this.endpoint).then((function(e){t.collection=e.data})).catch((function(e){return t.handleResponseError(e)}))},destroy:function(t){var e=this;confirm(o["a"].DELETE_CONFIRMATION_MESSAGE)&&this.axios.delete(this.endpoint+t).then((function(t){e.showMessage("success",["Done!"]),e.retrieve()})).catch((function(t){return e.handleResponseError(t)}))},details:function(t){var e=this;this.axios.get(this.endpoint+t).then((function(t){return e.handleDetailsResponse(t)})).catch((function(t){return e.handleResponseError(t)}))},submit:function(){var t=this,e=this.canSubmit();if(!e.allowed)return this.handleSubmitRequestError(e);var n=this.model.id?this.axios.put(this.endpoint+this.model.id,this.model):this.axios.post(this.endpoint,this.model);n.then((function(e){return t.handleSubmitResponse(e)})).catch((function(e){return t.handleResponseError(e)}))},canSubmit:function(){return{allowed:!0}},beforeRetrieve:function(){this.$route.params&&this.$route.params.id&&(this.details(this.$route.params.id),this.isEditing=!0)},handleSubmitResponse:function(t){this.showMessage("success",["Done!"]),this.$router.push({path:this.route})},handleDetailsResponse:function(t){this.model=t.data},handleSubmitRequestError:function(t){this.handleResponseErrorPayload(t.response)},handleResponseError:function(t){this.handleResponseErrorPayload(t)},navigateToAdd:function(){this.$router.push({path:[this.route,"add"].join("/")})},navigateTo:function(t){this.$router.push({path:[this.route,"edit",t].join("/")})},navigateToDetails:function(t){this.$router.push({path:[this.route,"details",t].join("/")})}}}},a15b:function(t,e,n){"use strict";var o=n("23e7"),i=n("44ad"),r=n("fc6a"),a=n("a640"),s=[].join,c=i!=Object,u=a("join",",");o({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(r(this),void 0===t?",":t)}})},b0c0:function(t,e,n){var o=n("83ab"),i=n("9bf2").f,r=Function.prototype,a=r.toString,s=/^\s*function ([^ (]*)/,c="name";o&&!(c in r)&&i(r,c,{configurable:!0,get:function(){try{return a.call(this).match(s)[1]}catch(t){return""}}})},d28b:function(t,e,n){var o=n("746f");o("iterator")},d81d:function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").map,r=n("1dde"),a=r("map");o({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e01a:function(t,e,n){"use strict";var o=n("23e7"),i=n("83ab"),r=n("da84"),a=n("5135"),s=n("861d"),c=n("9bf2").f,u=n("e893"),l=r.Symbol;if(i&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(h,l);var p=h.prototype=l.prototype;p.constructor=h;var f=p.toString,b="Symbol(test)"==String(l("test")),m=/^Symbol\((.*)\)[^)]+$/;c(p,"description",{configurable:!0,get:function(){var t=s(this)?this.valueOf():this,e=f.call(t);if(a(d,t))return"";var n=b?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),o({global:!0,forced:!0},{Symbol:h})}}}]);
//# sourceMappingURL=chunk-66a4bda5.ca147d83.js.map