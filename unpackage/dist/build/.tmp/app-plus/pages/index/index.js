(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0a13":function(t,e,i){"use strict";var a=i("7d0e"),s=i.n(a);s.a},"4bf9":function(t,e,i){"use strict";i("971c");var a=n(i("b0ce")),s=n(i("76e5"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},"54b4":function(t,e,i){"use strict";i.r(e);var a=i("dd6f"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},"5d8b":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"head"},[i("view",{staticClass:"left"},[i("image",{attrs:{src:"../../static/home/ziyuan.png"}}),i("text",[t._v(t._s(t.city))])]),i("view",{staticClass:"input"},[i("image",{attrs:{src:"../../static/home/sousuo_06.png",mode:""}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{type:"text",placeholder:"请输入要搜索的店铺",eventid:"609606d0-0"},domProps:{value:t.search},on:{confirm:t.searchShop,input:function(e){e.target.composing||(t.search=e.target.value)}}})]),i("navigator",{staticClass:"img",attrs:{url:"/pages/fenlei/fenlei"}},[i("image",{attrs:{src:"../../static/home/fenlei_06.png",mode:""}})])],1),i("swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.bannerList,function(e,a){return i("swiper-item",{key:a,attrs:{mpcomid:"609606d0-0-"+a}},[i("image",{attrs:{src:t.imgURl+e.productImage,mode:""}})])})),i("swiper",{staticClass:"gonggao",attrs:{"indicator-dots":!1,autoplay:!0,interval:3e3,duration:1e3,vertical:"true"}},t._l(t.gonggaoList,function(e,a){return i("swiper-item",{key:a,attrs:{eventid:"609606d0-1-"+a,mpcomid:"609606d0-1-"+a},on:{click:function(i){t.gotoDetail(e.id)}}},[i("view",{staticClass:"msg"},[i("text",{staticClass:"title"},[t._v("最新公告 "+t._s(e.title))]),i("text",{staticClass:"neirong"},[t._v(t._s(e.content))]),i("image",{attrs:{src:"../../static/home/tongzhigengduo_03.png",mode:""}})])])})),i("view",{staticClass:"fenlei"},t._l(t.classify,function(e,a){return i("view",{key:a,staticClass:"item",attrs:{eventid:"609606d0-2-"+a},on:{click:function(i){t.gotoShopList(e.categoryId)}}},[i("image",{attrs:{src:t.imgURl+e.categoryIcon,mode:""}}),i("text",[t._v(t._s(e.categoryName))])])}))],1)},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"76e5":function(t,e,i){"use strict";i.r(e);var a=i("5d8b"),s=i("54b4");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("0a13");var o=i("2877"),r=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,"ab4a8ff4",null);e["default"]=r.exports},"7d0e":function(t,e,i){},dd6f:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("cb97"),s=i("d931"),n={data:function(){return{search:"",imgURl:"",bannerList:[],gonggaoList:[],classify:[],city:"西安"}},onLoad:function(){var e=t.getStorageSync("userId"),i=t.getStorageSync("token");e?(this.$store.commit("SET_USERID",e),this.$store.commit("SET_TOKEN",i)):t.reLaunch({url:"/pages/logn/logn"}),this.imgURl=a.imgURl,this.getProductSlidesList(),this.getNoticeList(),this.getProductCategory();var s=this;plus.geolocation.getCurrentPosition(function(t){console.log(JSON.stringify(t)),s.city=t.address.city})},methods:{getProductSlidesList:function(){var t=this;(0,s.getProductSlidesList)().then(function(e){0==e.data.code&&(t.bannerList=e.data.data)})},getNoticeList:function(){var t=this;(0,s.getNoticeList)(1,10).then(function(e){0==e.data.code&&(t.gonggaoList=e.data.data.list)})},getProductCategory:function(){var t=this;(0,s.getProductCategory)(1,1).then(function(e){t.classify=e.data.data.cateGories})},gotoDetail:function(e){t.navigateTo({url:"/pages/ggDetail/ggDetail?id="+e})},gotoShopList:function(e){t.navigateTo({url:"/pages/suiguo_shop/suiguo_shop?id="+e})},searchShop:function(){t.navigateTo({url:"/pages/suiguo_shop/suiguo_shop?search="+this.search})}}};e.default=n}).call(this,i("6e42")["default"])}},[["4bf9","common/runtime","common/vendor"]]]);