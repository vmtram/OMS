(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72fd"],{"13bc":function(t,a,n){},"2beb":function(t,a,n){"use strict";n.r(a);var e=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("el-row",{staticClass:"panel-group",attrs:{gutter:20}},[t._l(t.list,function(a){return[n("el-col",{key:a.url,staticClass:"card-panel-col",attrs:{xs:24,sm:12,lg:6}},[n("div",{staticClass:"card-panel"},[n("div",{staticClass:"card-panel-description"},[n("span",{staticClass:"card-panel-num"},[t._v(t._s(a.value))]),n("div",{staticClass:"card-panel-text"},[t._v(t._s(a.url)+"连接数")])])])])]})],2)},c=[],l=(n("ac6a"),n("cadf"),n("551c"),n("097d"),n("bc3a")),s=n.n(l),u=null,o={name:"Signal",data:function(){return{list:[{url:"signalcloud.cdnbye.com",value:0},{url:"signal.cdnbye.com",value:0},{url:"signalhub.cdnbye.com",value:0},{url:"opensignal.cdnbye.com",value:0}]}},mounted:function(){this.loopGetData()},beforeDestroy:function(){clearTimeout(u)},methods:{fetchData:function(){this.list.forEach(function(t){var a="https://".concat(t.url,"/count");s.a.get(a).then(function(a){"number"===typeof a.data&&(t.value=a.data)}).catch(function(a){t.value=0})})},loopGetData:function(){var t=this;this.fetchData(),u=setTimeout(function(){t.loopGetData()},15e3)}}},i=o,r=(n("b826"),n("2877")),d=Object(r["a"])(i,e,c,!1,null,null,null);d.options.__file="signal.vue";a["default"]=d.exports},b826:function(t,a,n){"use strict";var e=n("13bc"),c=n.n(e);c.a}}]);
//# sourceMappingURL=chunk-72fd.887d90a4.js.map