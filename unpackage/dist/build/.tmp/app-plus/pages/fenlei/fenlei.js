(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/fenlei/fenlei"],{"098c":function(t,e,i){"use strict";i.r(e);var a=i("2fd9"),n=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=n.a},"2fd9":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("cb97"),n=i("d931"),s={data:function(){return{tabs:0,fenleiList:[],productList:[],imgURl:""}},onLoad:function(){this.imgURl=a.imgURl,this.getProductByCategoryId()},methods:{getProductByCategoryId:function(){var t=this;(0,n.getProductByCategoryId)().then(function(e){0==e.data.code&&(t.fenleiList=e.data.data,t.productList=t.fenleiList[0].productList)})},currentTabs:function(t){this.tabs=t,this.productList=this.fenleiList[t].productList},gotoShopList:function(e){t.navigateTo({url:"/pages/product_detaill/product_detaill?id="+e})},gotoDetaill:function(){t.navigateTo({url:"/pages/suiguo_list/suiguo_list?"})}}};e.default=s}).call(this,i("6e42")["default"])},4506:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"seach"},[i("view",{staticClass:"input"},[i("image",{attrs:{src:"../../static/home/sousuo_06.png",mode:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"请输入要搜索的店铺",eventid:"ba799f5c-0"},domProps:{value:t.search},on:{confirm:t.searchShop,focus:t.gotoDetaill,input:function(e){e.target.composing||(t.search=e.target.value)}}})])]),i("view",{staticClass:"liubai"}),i("view",{staticClass:"container"},[i("view",{staticClass:"left"},t._l(t.fenleiList,function(e,a){return i("text",{key:a,class:{active:t.tabs==a},attrs:{eventid:"ba799f5c-1-"+a},on:{click:function(e){t.currentTabs(a)}}},[t._v(t._s(e.categoryName))])})),i("view",{staticClass:"fenlei"},t._l(t.productList,function(e,a){return i("view",{key:a,staticClass:"item",attrs:{eventid:"ba799f5c-2-"+a},on:{click:function(i){t.gotoShopList(e.productId)}}},[i("image",{attrs:{src:t.imgURl+e.imgList[0],mode:""}}),i("text",[t._v(t._s(e.productName))])])}))])])},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},5448:function(t,e,i){},"74f0":function(t,e,i){"use strict";i("971c");var a=s(i("b0ce")),n=s(i("e484"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},"8df5":function(t,e,i){"use strict";var a=i("5448"),n=i.n(a);n.a},e484:function(t,e,i){"use strict";i.r(e);var a=i("4506"),n=i("098c");for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);i("8df5");var o=i("2877"),c=Object(o["a"])(n["default"],a["a"],a["b"],!1,null,"78b253d0",null);e["default"]=c.exports}},[["74f0","common/runtime","common/vendor"]]]);