(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/callCenter/callCenter"],{"2f2c":function(e,t,n){"use strict";var a=n("51c2"),c=n.n(a);c.a},"3cb5":function(e,t,n){"use strict";n("971c");var a=r(n("b0ce")),c=r(n("52a9"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(c.default))},"51c2":function(e,t,n){},"52a9":function(e,t,n){"use strict";n.r(t);var a=n("ca3c"),c=n("9a45");for(var r in c)"default"!==r&&function(e){n.d(t,e,function(){return c[e]})}(r);n("2f2c");var i=n("2877"),u=Object(i["a"])(c["default"],a["a"],a["b"],!1,null,"786951bc",null);t["default"]=u.exports},"9a45":function(e,t,n){"use strict";n.r(t);var a=n("e96f"),c=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=c.a},ca3c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("image",{staticClass:"img_1",attrs:{src:"../../static/home/kefu_03.png",mode:""}}),n("view",{staticClass:"btn",attrs:{eventid:"12ea4312-0"},on:{click:function(t){e.callUp()}}},[n("image",{attrs:{src:"../../static/home/dianhua_07.png",mode:""}}),n("text",[e._v("客服热线："+e._s(e.servicePhone))])])])},c=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return c})},e96f:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("d737"),c={data:function(){return{servicePhone:""}},onLoad:function(){this.getCustomerService()},methods:{getCustomerService:function(){var e=this;(0,a.getCustomerService)().then(function(t){0==t.data.code&&(e.servicePhone=t.data.data[0].servicePhone)})},callUp:function(){e.makePhoneCall({phoneNumber:this.servicePhone})}}};t.default=c}).call(this,n("6e42")["default"])}},[["3cb5","common/runtime","common/vendor"]]]);