(function(e){function t(t){for(var n,a,l=t[0],b=t[1],u=t[2],O=0,j=[];O<l.length;O++)a=l[O],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&j.push(r[a][0]),r[a]=0;for(n in b)Object.prototype.hasOwnProperty.call(b,n)&&(e[n]=b[n]);i&&i(t);while(j.length)j.shift()();return o.push.apply(o,u||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,l=1;l<c.length;l++){var b=c[l];0!==r[b]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/austin-portfolio/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],b=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var i=b;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},2403:function(e,t,c){"use strict";c("e080")},"2e18":function(e,t,c){},"4bc6":function(e,t,c){"use strict";c("2e18")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function r(e,t){var c=Object(n["x"])("router-view");return Object(n["q"])(),Object(n["e"])(c,null,{default:Object(n["D"])((function(e){var t=e.Component;return[Object(n["g"])(n["b"],{name:"moveUp",mode:"out-in"},{default:Object(n["D"])((function(){return[(Object(n["q"])(),Object(n["e"])(Object(n["y"])(t)))]})),_:2},1024)]})),_:1})}c("6950");const o={};o.render=r;var a=o,l=c("6c02"),b=(c("b0c0"),Object(n["E"])("data-v-7511b468"));Object(n["t"])("data-v-7511b468");var u={class:"home"},i={class:"container"},O={class:"profile"},j={class:"profile__rows"},s=Object(n["g"])("h2",null,"姓名",-1),f={class:"profile__rows"},p=Object(n["g"])("h3",null,"工作經歷",-1),v={class:"profile__rows"},d=Object(n["g"])("h2",null,"學歷",-1),g={class:"work"},w={class:"rows"},h={class:"work-wrap__header"},m={class:"work-wrap__rows"},y=Object(n["g"])("h3",null,"專案",-1),_={class:"work-wrap__rows"},k=Object(n["g"])("h3",null,"客戶",-1),q={class:"work-wrap__rows"},A=Object(n["g"])("h3",null,"工具",-1),x={class:"work-list"};Object(n["r"])();var D=b((function(e,t,c,r,o,a){var l=Object(n["x"])("Nav");return Object(n["q"])(),Object(n["e"])("div",u,[Object(n["g"])("header",null,[Object(n["g"])(l)]),Object(n["g"])("div",i,[Object(n["g"])("div",O,[Object(n["g"])("div",j,[s,Object(n["g"])("h4",null,Object(n["A"])(r.profileData.name),1),Object(n["g"])("img",{src:r.profileData.avatar,alt:r.profileData.name},null,8,["src","alt"])]),Object(n["g"])("div",f,[p,Object(n["g"])("div",null,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(r.profileData.experience,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{key:t},[Object(n["g"])("span",null,Object(n["A"])(e.year),1),Object(n["g"])("span",null,Object(n["A"])(e.compnay),1),Object(n["g"])("span",null,Object(n["A"])(e.positon),1)])})),128))])]),Object(n["g"])("div",v,[d,Object(n["g"])("div",null,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(r.profileData.education,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{key:t},[Object(n["g"])("span",null,Object(n["A"])(e.year),1),Object(n["g"])("span",null,Object(n["A"])(e.school),1),Object(n["g"])("span",null,Object(n["A"])(e.department),1)])})),128))])])]),Object(n["g"])("div",g,[Object(n["g"])("div",w,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(r.workData,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{class:"work-type",key:t},[Object(n["g"])("h2",null,Object(n["A"])(e.type),1),(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.list,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{class:"work-wrap",key:t},[Object(n["g"])("div",h,[Object(n["g"])("div",m,[y,Object(n["g"])("div",null,Object(n["A"])(e.title),1)]),Object(n["g"])("div",_,[k,Object(n["g"])("div",null,Object(n["A"])(e.client),1)]),Object(n["g"])("div",q,[A,Object(n["g"])("div",null,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.tool,(function(e,t){return Object(n["q"])(),Object(n["e"])("span",{key:t},Object(n["A"])(e),1)})),128))])])]),Object(n["g"])("div",x,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["w"])(e.workList,(function(e,t){return Object(n["q"])(),Object(n["e"])("div",{class:"work-list__item",key:t},[Object(n["g"])("img",{src:e.srcSmall,alt:e.information,loading:"lazy",width:"200",height:"200"},null,8,["src","alt"])])})),128))])])})),128))])})),128))])])])])})),P=c("bc3a"),N=c.n(P),S=Object(n["E"])("data-v-6658e460");Object(n["t"])("data-v-6658e460");var M={class:"nav"},E=Object(n["f"])("首頁"),I=Object(n["f"])("關於"),J=Object(n["f"])("作品");Object(n["r"])();var T=S((function(e,t,c,r,o,a){var l=Object(n["x"])("router-link");return Object(n["q"])(),Object(n["e"])("div",M,[Object(n["g"])(l,{to:"/"},{default:S((function(){return[E]})),_:1}),Object(n["g"])(l,{to:"/about"},{default:S((function(){return[I]})),_:1}),Object(n["g"])(l,{to:"/work"},{default:S((function(){return[J]})),_:1})])})),W={};c("2403");W.render=T,W.__scopeId="data-v-6658e460";var z=W,C={components:{Nav:z},setup:function(){var e=Object(n["v"])([]),t=Object(n["v"])([]);return Object(n["o"])((function(){N.a.get("./data/portfolio.json").then((function(c){e.value=c.data.profile,t.value=c.data.work}))})),{profileData:e,workData:t}}};c("4bc6");C.render=D,C.__scopeId="data-v-7511b468";var H=C,L={class:"container"},U=Object(n["g"])("h1",null,"關於我",-1);function B(e,t,c,r,o,a){var l=Object(n["x"])("Nav");return Object(n["q"])(),Object(n["e"])("div",L,[U,Object(n["g"])(l)])}var F={components:{Nav:z},setup:function(){return Object(n["o"])((function(){console.log("About")})),{}}};F.render=B;var G=F,K={class:"container"},Q=Object(n["g"])("h1",null,"作品",-1);function R(e,t,c,r,o,a){var l=Object(n["x"])("Nav");return Object(n["q"])(),Object(n["e"])("div",K,[Q,Object(n["g"])(l)])}var V={components:{Nav:z},setup:function(){return Object(n["o"])((function(){console.log("Work")})),{}}};V.render=R;var X=V,Y=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:G},{path:"/work",name:"Work",component:X}],Z=Object(l["a"])({history:Object(l["b"])("/austin-portfolio/"),routes:Y}),$=Z;Object(n["d"])(a).use($).mount("#root")},6950:function(e,t,c){"use strict";c("fd09")},e080:function(e,t,c){},fd09:function(e,t,c){}});
//# sourceMappingURL=app.6d92a8ad.js.map