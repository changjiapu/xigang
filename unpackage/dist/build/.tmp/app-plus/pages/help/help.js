(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/help/help"],{2687:function(t,e,n){"use strict";n("971c");var a=c(n("b0ce")),i=c(n("cc1d"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))},"4c83":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("d737"),i={data:function(){return{pageNo:1,helpList:[]}},onLoad:function(){this.getSysHelpList(this.pageNo,10)},methods:{getSysHelpList:function(t,e){var n=this;(0,a.getSysHelpList)(t,e).then(function(t){0==t.data.code&&(n.helpList=t.data.data.list)})},callUp:function(){t.makePhoneCall({phoneNumber:"029-2678386"})},gotoDeatail:function(e,n){t.navigateTo({url:"/pages/helpDetail/helpDetail?helpTitle="+e+"&helpInstructions="+n})}}};e.default=i}).call(this,n("6e42")["default"])},"6d8f":function(t,e,n){},a040:function(t,e,n){"use strict";var a=n("6d8f"),i=n.n(a);i.a},bc63:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("text",{staticClass:"title"},[t._v("常见问题")]),t._l(t.helpList,function(e,a){return n("text",{key:a,attrs:{eventid:"0666f152-0-"+a},on:{click:function(n){t.gotoDeatail(e.helpTitle,e.helpInstructions)}}},[t._v(t._s(e.helpTitle))])}),n("view",{staticClass:"btn",attrs:{eventid:"0666f152-1"},on:{click:function(e){t.callUp()}}},[n("image",{attrs:{src:"../../static/home/dianhua_07.png",mode:""}}),n("text",[t._v("客服热线：029-2678386")])])],2)},i=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},cc1d:function(t,e,n){"use strict";n.r(e);var a=n("bc63"),i=n("cc8e");for(var c in i)"default"!==c&&function(t){n.d(e,t,function(){return i[t]})}(c);n("a040");var l=n("2877"),u=Object(l["a"])(i["default"],a["a"],a["b"],!1,null,"7f2e38a3",null);e["default"]=u.exports},cc8e:function(t,e,n){"use strict";n.r(e);var a=n("4c83"),i=n.n(a);for(var c in a)"default"!==c&&function(t){n.d(e,t,function(){return a[t]})}(c);e["default"]=i.a}},[["2687","common/runtime","common/vendor"]]]);