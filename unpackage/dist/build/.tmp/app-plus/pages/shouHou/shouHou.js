(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouHou/shouHou"],{"30fe":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[t._m(0),n("view",{staticClass:"cantainer"},[n("text",{staticClass:"title"},[t._v("提交凭证")]),n("textarea",{staticClass:"input",attrs:{value:"",placeholder:"请描述你的详细问题"}}),n("text",{staticClass:"title"},[t._v("上传凭证")]),n("image",{attrs:{src:"../../static/home/xiangji_03.jpg",mode:"",eventid:"57e9625a-0"},on:{click:function(e){t.paizhao()}}}),0!=t.img_list?n("view",{staticClass:"img_list"},t._l(t.img_list,function(e,a){return n("image",{key:a,attrs:{src:e,mode:"",eventid:"57e9625a-1-"+a},on:{click:function(e){t.paizhao()}}})})):t._e(),n("text",{staticClass:"title2"},[t._v("为了我们更好的帮你解决问题,请上传相关照片")])]),t._m(1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"head"},[n("image",{attrs:{src:"../../static/home/dianpupaihangmangguo_05.png",mode:""}}),n("view",{staticClass:"msg"},[n("text",{staticClass:"title"},[t._v("西红柿")]),n("text",[t._v("订单号 27389988888888")]),n("view",[n("text",[t._v("2018-06-30")]),n("text",[t._v("12.5x1")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"btn"},[n("text",[t._v("提交")])])}];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return i})},"3cd0":function(t,e,n){"use strict";var a=n("b96b"),i=n.n(a);i.a},"6b74":function(t,e,n){"use strict";n.r(e);var a=n("30fe"),i=n("9484");for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);n("3cd0");var s=n("2877"),c=Object(s["a"])(i["default"],a["a"],a["b"],!1,null,"44d3b234",null);e["default"]=c.exports},9484:function(t,e,n){"use strict";n.r(e);var a=n("9fd3"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);e["default"]=i.a},"9fd3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;n("d737");function a(t){return s(t)||r(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function r(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var c={data:function(){return{img_list:[]}},onLoad:function(){},methods:{paizhao:function(){var e=this;t.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){e.img_list=[].concat(a(e.img_list),a(t.tempFilePaths))}})}}};e.default=c}).call(this,n("6e42")["default"])},b96b:function(t,e,n){},e56c:function(t,e,n){"use strict";n("971c");var a=r(n("b0ce")),i=r(n("6b74"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["e56c","common/runtime","common/vendor"]]]);