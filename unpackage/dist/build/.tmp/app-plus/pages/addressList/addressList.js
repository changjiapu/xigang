(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/addressList/addressList"],{2621:function(t,e,s){"use strict";s.r(e);var a=s("97d6"),n=s.n(a);for(var d in a)"default"!==d&&function(t){s.d(e,t,function(){return a[t]})}(d);e["default"]=n.a},7552:function(t,e,s){"use strict";var a=s("76ed"),n=s.n(a);n.a},"76ed":function(t,e,s){},9122:function(t,e,s){"use strict";s.r(e);var a=s("e9f2"),n=s("2621");for(var d in n)"default"!==d&&function(t){s.d(e,t,function(){return n[t]})}(d);s("7552");var r=s("2877"),i=Object(r["a"])(n["default"],a["a"],a["b"],!1,null,"02662df2",null);e["default"]=i.exports},"97d6":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("d737"),n=s("2f62");function d(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},a=Object.keys(s);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),a.forEach(function(e){r(t,e,s[e])})}return t}function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var i={data:function(){return{moren:!1,addressList:[]}},onLoad:function(){},onShow:function(){this.getUserAddressListByUserId(this.userId)},computed:d({},(0,n.mapState)(["userId"])),methods:{isDefault:function(e){var s=this,n={addressId:e.addressId,userId:this.userId,isDefault:e.isDefault?0:1};(0,a.updAddDefaultById)(n).then(function(e){0==e.data.code&&(t.showToast({title:e.data.data,duration:2e3}),s.getUserAddressListByUserId(s.userId))})},gotoBack:function(e){var s={addressId:e.addressId,userId:this.userId,isDefault:e.isDefault?0:1};(0,a.updAddDefaultById)(s).then(function(e){0==e.data.code&&t.navigateBack({data:1})})},edit:function(e){var s={addressId:e.addressId,userName:e.userName,userPhone:e.userPhone,addressLine1:e.addressLine1,location_a:e.province,location_b:e.city,location_c:e.area};t.navigateTo({url:"/pages/address/address?params="+JSON.stringify(s)})},Delete:function(e){var s=this,n={addressId:e,userId:this.userId};(0,a.delAddById)(n).then(function(e){0==e.data.code&&(t.showToast({title:e.data.data,duration:2e3}),s.getUserAddressListByUserId(s.userId))})},getUserAddressListByUserId:function(t){var e=this;(0,a.getUserAddressListByUserId)(t).then(function(t){0==t.data.code&&(e.addressList=t.data.data)})}}};e.default=i}).call(this,s("6e42")["default"])},d297:function(t,e,s){"use strict";s("971c");var a=d(s("b0ce")),n=d(s("9122"));function d(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},e9f2:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._l(t.addressList,function(e,a){return s("view",{key:a,staticClass:"address_list"},[s("view",{staticClass:"head",attrs:{eventid:"4796ad98-0-"+a},on:{click:function(s){t.gotoBack(e)}}},[s("image",{attrs:{src:"../../static/home/dizhi3.png",mode:""}}),s("view",{staticClass:"info"},[s("text",[t._v("收货人: "+t._s(e.userName)+"                   "+t._s(e.userPhone))]),s("text",[t._v("收货地址: "+t._s(e.province)+"-"+t._s(e.city)+"-"+t._s(e.area)+t._s(e.addressLine1))])])]),s("view",{staticClass:"footer"},[e.isDefault?s("image",{staticClass:"img_1",attrs:{src:"../../static/home/morendizhi_07.png",mode:""}}):s("image",{staticClass:"img_1",attrs:{src:"../../static/home/sheweimoren_18.png",mode:""}}),s("text",{attrs:{eventid:"4796ad98-1-"+a},on:{click:function(s){t.isDefault(e)}}},[t._v(t._s(e.isDefault?"默认地址":"设为默认"))]),s("image",{staticClass:"img_2",attrs:{src:"../../static/home/bianji_09.png",mode:""}}),s("text",{attrs:{eventid:"4796ad98-2-"+a},on:{click:function(s){t.edit(e)}}},[t._v("编辑")]),s("image",{staticClass:"img_3",attrs:{src:"../../static/home/shanchu_07.png",mode:""}}),s("text",{attrs:{eventid:"4796ad98-3-"+a},on:{click:function(s){t.Delete(e.addressId)}}},[t._v("删除")])])])}),s("navigator",{staticClass:"btn",attrs:{url:"/pages/address/address"}},[t._v("添加地址")])],2)},n=[];s.d(e,"a",function(){return a}),s.d(e,"b",function(){return n})}},[["d297","common/runtime","common/vendor"]]]);