(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouHou/shouHou"],{"0f0f":function(t,e,n){"use strict";var i=n("6093"),a=n.n(i);a.a},"4d90":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"head"},[n("image",{attrs:{src:t.imgURl+t.orderDetail.img,mode:""}}),n("view",{staticClass:"msg"},[n("text",{staticClass:"title"},[t._v(t._s(t.orderDetail.productName))]),n("text",[t._v("订单号:"+t._s(t.orderDetail.orderSn))]),n("view",[n("text",[t._v(t._s(t.orderDetail.updatedTime))]),n("text",[t._v(t._s(t.orderDetail.productPrice)+"x"+t._s(t.orderDetail.productCount))])])])]),n("view",{staticClass:"cantainer"},[n("text",{staticClass:"title"},[t._v("提交凭证")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descContent,expression:"descContent"}],staticClass:"input",attrs:{placeholder:"请描述你的详细问题",eventid:"57e9625a-0"},domProps:{value:t.descContent},on:{input:function(e){e.target.composing||(t.descContent=e.target.value)}}}),n("text",{staticClass:"title"},[t._v("上传凭证")]),n("image",{attrs:{src:"../../static/home/xiangji_03.jpg",mode:"",eventid:"57e9625a-1"},on:{click:function(e){t.paizhao()}}}),0!=t.img_list?n("view",{staticClass:"img_list"},t._l(t.img_list,function(e,i){return n("image",{key:i,attrs:{src:e,mode:"",eventid:"57e9625a-2-"+i},on:{click:function(e){t.paizhao()}}})})):t._e(),n("text",{staticClass:"title2"},[t._v("为了我们更好的帮你解决问题,请上传相关照片")])]),n("view",{staticClass:"btn",attrs:{eventid:"57e9625a-3"},on:{click:function(e){t.addSaleService()}}},[n("text",[t._v("提交")])])])},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},6093:function(t,e,n){},"6b74":function(t,e,n){"use strict";n.r(e);var i=n("4d90"),a=n("9484");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("0f0f");var o=n("2877"),s=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,"009bd1de",null);e["default"]=s.exports},9484:function(t,e,n){"use strict";n.r(e);var i=n("9fd3"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},"9fd3":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("2f62"),a=n("cb97"),r=n("d931");function o(t){return u(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function u(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){d(t,e,n[e])})}return t}function d(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var f={data:function(){return{img_list:[],img_list2:[],orderDetail:{},imgURl:"",descContent:""}},onLoad:function(t){this.imgURl=a.imgURl,this.orderDetail=JSON.parse(t.params)},computed:l({},(0,i.mapState)(["userId"])),methods:{paizhao:function(){var e=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(n){e.img_list=[].concat(o(e.img_list),o(n.tempFilePaths)),t.uploadFile({url:a.baseURL+"/file/upload",filePath:n.tempFilePaths[0],name:"file",formData:{user:"test",file:n.tempFilePaths[0]},success:function(t){var n=JSON.parse(t.data);e.img_list2.push(n.data)}})}})},addSaleService:function(){var e={userId:this.userId,orderId:this.orderDetail.orderId,descContent:this.descContent,productImage:this.img_list2.join(",")};(0,r.addSaleService)(e).then(function(e){0==e.data.code&&(t.showToast({title:"申请售后成功",icon:"none",duration:1500}),setTimeout(function(e){t.switchTab({url:"/pages/order/order"})},2e3))})}}};e.default=f}).call(this,n("6e42")["default"])},e56c:function(t,e,n){"use strict";n("971c");var i=r(n("b0ce")),a=r(n("6b74"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))}},[["e56c","common/runtime","common/vendor"]]]);