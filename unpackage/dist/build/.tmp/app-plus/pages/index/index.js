(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"18ff":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=s("3424"),a={data:function(){return{title:"Hello"}},onLoad:function(){console.log(222),(0,i.getUserInfo)().then(function(t){console.log(t)})},methods:{gotoDetail:function(){},gotoShopList:function(){t.navigateTo({url:"/pages/suiguo_shop/suiguo_shop"})}}};e.default=a}).call(this,s("6e42")["default"])},"6abe":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t._m(0),s("swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},[s("swiper-item",{attrs:{mpcomid:"609606d0-0"}},[s("image",{attrs:{src:"../../static/home/gengduo_31.png",mode:""}})]),s("swiper-item",{attrs:{mpcomid:"609606d0-1"}},[s("image",{attrs:{src:"../../static/home/ganhuo_26.png",mode:""}})]),s("swiper-item",{attrs:{mpcomid:"609606d0-2"}},[s("image",{attrs:{src:"../../static/home/liangyou_13.png",mode:""}})])],1),t._m(1),s("view",{staticClass:"fenlei"},t._l(8,function(e,i){return s("view",{key:i,staticClass:"item",attrs:{eventid:"609606d0-0-"+i},on:{click:function(e){t.gotoShopList()}}},[s("image",{attrs:{src:"../../static/home/shuoguo_14.png",mode:""}}),s("text",[t._v("水果")])])})),t._m(2),s("scroll-view",{staticClass:"scroll-view",attrs:{"scroll-x":""}},t._l(6,function(e,i){return s("view",{key:i,staticClass:"list-item",attrs:{eventid:"609606d0-1-"+i},on:{click:function(e){t.gotoDetail()}}},[s("image",{attrs:{src:"../../static/home/tongzhi_03.png",mode:""}}),s("view",{staticClass:"list_msg"},[s("text",[t._v("新鲜黄瓜")]),s("text",[t._v("新鲜蔬菜商品详情")]),s("text",[t._v("￥2.5元/斤")]),s("image",{staticClass:"cart",attrs:{src:"../../static/home/gouwuche_44.png",mode:""}})])])})),s("view",{staticClass:"liubai"}),s("view",{staticClass:"gonggao_2"},[t._m(3),s("swiper",{staticClass:"gonggao_2_swiper",attrs:{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3}},[s("swiper-item",{attrs:{mpcomid:"609606d0-3"}},[s("image",{attrs:{src:"../../static/home/shuichan_17.png",mode:""}})]),s("swiper-item",{attrs:{mpcomid:"609606d0-4"}},[s("image",{attrs:{src:"../../static/home/ganhuo_26.png",mode:""}})]),s("swiper-item",{attrs:{mpcomid:"609606d0-5"}},[s("image",{attrs:{src:"../../static/home/gonggaozhanshi_38.png",mode:""}})])],1)],1),t._m(4),s("view",{staticClass:"product_list"},t._l(6,function(e,i){return s("view",{key:i,staticClass:"list_item"},[s("image",{attrs:{src:"../../static/home/roushi_27.png",mode:""}}),s("text",[t._v("以纯")]),s("text",[t._v("精美连衣裙")]),t._m(5,!0)])})),t._m(6),s("view",{staticClass:"shop_list"},t._l(3,function(e,i){return s("view",{key:i,staticClass:"list_item"},[s("image",{attrs:{src:"../../static/home/dianpu_img.jpg",mode:""}}),t._m(7,!0)])}))],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"head"},[s("view",{staticClass:"left"},[s("image",{attrs:{src:"../../static/home/dizhi_03.png"}}),s("text",[t._v("西安")])]),s("view",{staticClass:"input"},[s("image",{attrs:{src:"../../static/home/sousuo_06.png",mode:""}}),s("input",{attrs:{type:"text",value:"",placeholder:"请输入要搜索的商品或店铺"}})]),s("view",{staticClass:"img"},[s("image",{attrs:{src:"../../static/home/fenlei_06.png",mode:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"gonggao"},[s("view",{staticClass:"img"},[s("image",{attrs:{src:"../../static/home/tongzhi_03.png",mode:""}})]),s("view",{staticClass:"msg"},[s("text",{staticClass:"title"},[t._v("最新公告 NEWS GONGGAO")]),s("text",{staticClass:"neirong"},[t._v("买房子的注意啦，不错的公告，这里的房子最便宜啦。呵呵哒")]),s("image",{attrs:{src:"../../static/home/tongzhigengduo_03.png",mode:""}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"product_title"},[s("text",[t._v("热卖商品")]),s("text",[t._v("更多 >")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"title"},[s("image",{attrs:{src:"../../static/home/gonggaozhanshi_38.png",mode:""}}),s("text",[t._v("近期公告展示")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"product_title"},[s("text",[t._v("新品推荐")]),s("text",[t._v("更多 >")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"price"},[s("text",[t._v("￥299元")]),s("image",{attrs:{src:"../../static/home/gouwuche_44.png",mode:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"product_title"},[s("text",[t._v("热门店铺")]),s("text",[t._v("更多 >")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"shop_msg"},[s("text",{staticClass:"title"},[t._v("水果超市")]),s("text",{staticClass:"jieshao"},[t._v("最新鲜的橙子今日特卖进店抢购啦最新鲜的橙子今日特卖进店抢购啦")]),s("view",{staticClass:"btn"},[s("text",[t._v("进店逛逛")]),s("text",[t._v("凤城七路")])])])}];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},"7d45":function(t,e,s){"use strict";s.r(e);var i=s("18ff"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a},9001:function(t,e,s){"use strict";s("8118");var i=n(s("b0ce")),a=n(s("9414"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},9414:function(t,e,s){"use strict";s.r(e);var i=s("6abe"),a=s("7d45");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("f9fe");var c=s("2877"),o=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"9ae376dc",null);e["default"]=o.exports},"97cc":function(t,e,s){},f9fe:function(t,e,s){"use strict";var i=s("97cc"),a=s.n(i);a.a}},[["9001","common/runtime","common/vendor"]]]);