(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ggList/ggList"],{"2d34":function(t,e,n){},7229:function(t,e,n){"use strict";n.r(e);var i=n("ead2"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"7b79":function(t,e,n){"use strict";var i=n("2d34"),a=n.n(i);a.a},b2d6:function(t,e,n){"use strict";n.r(e);var i=n("c2cb"),a=n("7229");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("7b79");var c=n("2877"),r=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"6f18c550",null);e["default"]=r.exports},c2cb:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},t._l(t.ggList,function(e,i){return n("view",{key:i,staticClass:"list",attrs:{eventid:"dccc0c9c-0-"+i},on:{click:function(n){t.gotoDetail(e.id)}}},[n("image",{attrs:{src:t.imgURl+e.imageId,mode:""}}),n("view",{staticClass:"msg"},[n("text",[t._v(t._s(e.title))]),n("text",[t._v(t._s(e.content))])])])}))},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},ead2:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("2f62");var i=n("cb97"),a=n("d931");function o(t){return u(t)||r(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var s={data:function(){return{pageNo:1,ggList:[],imgURl:""}},onLoad:function(){this.imgURl=i.imgURl,this.getNoticeList(this.pageNo,10)},onReachBottom:function(){this.pageNo++,this.getNoticeList(this.pageNo,10)},methods:{getNoticeList:function(e,n){var i=this;(0,a.getNoticeList)(e,n).then(function(e){0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),i.ggList=[].concat(o(i.ggList),o(e.data.data.list))})},gotoDetail:function(e){t.navigateTo({url:"/pages/ggDetail/ggDetail?id="+e})}}};e.default=s}).call(this,n("6e42")["default"])},f061:function(t,e,n){"use strict";n("971c");var i=o(n("b0ce")),a=o(n("b2d6"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["f061","common/runtime","common/vendor"]]]);