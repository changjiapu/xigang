(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/suiguo_list/suiguo_list"],{"0f02":function(t,a,e){"use strict";e.r(a);var i=e("4292"),o=e("4a5f");for(var n in o)"default"!==n&&function(t){e.d(a,t,function(){return o[t]})}(n);e("f7b2");var s=e("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"5cdf9fd8",null);a["default"]=c.exports},4292:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("view",{staticClass:"content"},[e("view",{staticClass:"head"},[e("view",{staticClass:"left",attrs:{eventid:"6714820c-0"},on:{click:function(a){t.gotoBack()}}},[e("image",{attrs:{src:"../../static/home/xiangzuofanhui_03.png",mode:""}})]),e("view",{staticClass:"input"},[e("image",{attrs:{src:"../../static/home/sousuo_06.png",mode:""}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"请输入要搜索的商品",eventid:"6714820c-1"},domProps:{value:t.search},on:{confirm:function(a){t.searchProduct()},input:function(a){a.target.composing||(t.search=a.target.value)}}})])]),e("view",{staticClass:"title"},[e("text",[t._v("全部商品")]),e("view",{staticClass:"price",attrs:{eventid:"6714820c-2"},on:{click:function(a){t.isShangChange()}}},[e("text",[t._v("价格排序")]),t.isShang?e("image",{attrs:{src:"../../static/home/shangjiantou.png",mode:""}}):e("image",{attrs:{src:"../../static/home/xiajiantou.png",mode:""}})])]),e("view",{staticClass:"scroll-view"},t._l(t.productList,function(a,i){return e("view",{key:i,staticClass:"list-item",attrs:{eventid:"6714820c-3-"+i},on:{click:function(e){t.gotoDetail(a.productId)}}},[e("image",{attrs:{src:t.imgURl+a.imgList[0],mode:""}}),e("view",{staticClass:"list_msg"},[e("text",[t._v(t._s(a.productName))]),e("text",[t._v(t._s(a.descript))]),e("text",[t._v("￥"+t._s(a.price)+"元/斤")]),e("image",{staticClass:"cart",attrs:{src:"../../static/home/gouwuche_44.png",mode:""}})])])}))])},o=[];e.d(a,"a",function(){return i}),e.d(a,"b",function(){return o})},"4a5f":function(t,a,e){"use strict";e.r(a);var i=e("996c"),o=e.n(i);for(var n in i)"default"!==n&&function(t){e.d(a,t,function(){return i[t]})}(n);a["default"]=o.a},"550a":function(t,a,e){"use strict";e("971c");var i=n(e("b0ce")),o=n(e("0f02"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(o.default))},"996c":function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=e("cb97"),o=e("d931");function n(t){return r(t)||c(t)||s()}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var a=0,e=new Array(t.length);a<t.length;a++)e[a]=t[a];return e}}var u={data:function(){return{search:"",isShang:!0,pageNo:1,productList:[],imgURl:"",sortWay:0,productId:""}},onLoad:function(t){this.productId=t.id,this.imgURl=i.imgURl,this.getProductByShopId(this.pageNo,10,this.productId,1,this.sortWay)},onReachBottom:function(){""==this.search&&(this.pageNo++,this.getProductByShopId(this.pageNo,10,this.productId,1,this.sortWay))},methods:{getProductByShopId:function(a,e,i,s,c){var r=this;(0,o.getProductByShopId)(a,e,i,s,c).then(function(a){0==a.data.code&&(0==a.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),r.productList=[].concat(n(r.productList),n(a.data.data.list)))})},isShangChange:function(){this.isShang=!this.isShang,0==this.sortWay?this.sortWay=1:this.sortWay=0,this.getProductByShopId(this.pageNo,10,this.productId,1,this.sortWay)},gotoBack:function(){t.navigateBack({delta:1})},gotoDetail:function(a){t.navigateTo({url:"/pages/product_detaill/product_detaill?id="+a})},searchProduct:function(){var a=this;(0,o.getAllProductByContent)(1,20,this.search).then(function(e){0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3}),a.productList=n(e.data.data.list)})}}};a.default=u}).call(this,e("6e42")["default"])},a909:function(t,a,e){},f7b2:function(t,a,e){"use strict";var i=e("a909"),o=e.n(i);o.a}},[["550a","common/runtime","common/vendor"]]]);