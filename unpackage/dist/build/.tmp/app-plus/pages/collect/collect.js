(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/collect/collect"],{"566f":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("2f62"),r=i("cb97"),o=i("d931");function a(t){return l(t)||s(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(t){return Object.getOwnPropertyDescriptor(i,t).enumerable}))),n.forEach(function(e){d(t,e,i[e])})}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={data:function(){return{imgURl:"",editor:!1,isShow:!0,pages:1,productList:[]}},computed:u({},(0,n.mapState)(["userId"])),onLoad:function(){this.imgURl=r.imgURl,this.queryCollectionList(this.userId,this.pages,10)},onReachBottom:function(){this.pages++,this.queryCollectionList(this.userId,this.pages,10)},methods:{queryCollectionList:function(e,i,n){var r=this;(0,o.queryCollectionList)(e,i,n).then(function(e){if(0==e.data.code){0==e.data.data.list.length&&t.showToast({title:"没有更多数据了",icon:"none",duration:1e3});var i=!0,n=!1,o=void 0;try{for(var c,s=e.data.data.list[Symbol.iterator]();!(i=(c=s.next()).done);i=!0){var l=c.value;Object.assign(l,{ick:!1})}}catch(u){n=!0,o=u}finally{try{i||null==s.return||s.return()}finally{if(n)throw o}}r.productList=[].concat(a(r.productList),a(e.data.data.list))}})},isIck:function(t){this.productList[t].ick=!this.productList[t].ick},editorChange:function(){this.editor=!this.editor},Delete:function(){var e=this,i=[],n=!0,r=!1,a=void 0;try{for(var c,s=this.productList[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){var l=c.value;l.ick&&i.push(l.collectId)}}catch(d){r=!0,a=d}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}var u=i.join(",");console.log(u),(0,o.delCollection)(this.userId,u).then(function(i){0==i.data.code&&(t.showToast({title:"删除成功",icon:"none",duration:1e3}),e.pages=1,e.productList=[],e.queryCollectionList(e.userId,e.pages,10))})},gotoDetail:function(e){t.navigateTo({url:"/pages/product_detaill/product_detaill?id="+e})},sellAll:function(){if(this.isShow=!this.isShow,this.isShow){var t=!0,e=!1,i=void 0;try{for(var n,r=this.productList[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var o=n.value;o.ick=!1}}catch(f){e=!0,i=f}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}}else{var a=!0,c=!1,s=void 0;try{for(var l,u=this.productList[Symbol.iterator]();!(a=(l=u.next()).done);a=!0){var d=l.value;d.ick=!0}}catch(f){c=!0,s=f}finally{try{a||null==u.return||u.return()}finally{if(c)throw s}}}}}};e.default=f}).call(this,i("6e42")["default"])},"665e":function(t,e,i){"use strict";i.r(e);var n=i("566f"),r=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=r.a},"73f8":function(t,e,i){"use strict";i.r(e);var n=i("a9d0"),r=i("665e");for(var o in r)"default"!==o&&function(t){i.d(e,t,function(){return r[t]})}(o);i("7c05");var a=i("2877"),c=Object(a["a"])(r["default"],n["a"],n["b"],!1,null,"58e455f9",null);e["default"]=c.exports},7785:function(t,e,i){"use strict";i("971c");var n=o(i("b0ce")),r=o(i("73f8"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(r.default))},"7c05":function(t,e,i){"use strict";var n=i("f065"),r=i.n(n);r.a},a9d0:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"head"},[i("text",[t._v("共"+t._s(t.productList.length)+"个商品")]),i("text",{attrs:{eventid:"6a0e2708-0"},on:{click:function(e){t.editorChange()}}},[t._v(t._s(t.editor?"完成":"管理"))])]),t._l(t.productList,function(e,n){return 0!=t.productList.length?i("view",{key:n,staticClass:"collect_item"},[t.editor?i("view",{staticClass:"left"},[e.ick?i("image",{attrs:{src:"../../static/home/morendizhi_07.png",mode:"",eventid:"6a0e2708-2-"+n},on:{click:function(e){t.isIck(n)}}}):i("image",{attrs:{src:"../../static/home/sheweimoren_18.png",mode:"",eventid:"6a0e2708-1-"+n},on:{click:function(e){t.isIck(n)}}})]):t._e(),i("view",{staticClass:"center"},[i("image",{attrs:{src:t.imgURl+e.product.imgList[0],mode:""}})]),i("view",{staticClass:"right"},[i("text",{staticClass:"title"},[t._v(t._s(e.product.productName))]),i("text",{staticClass:"title2"},[t._v(t._s(e.product.descript))]),i("view",{staticClass:"price"},[i("text",[t._v("￥"+t._s(e.product.price)+"元/斤")]),t.editor?i("text",{staticClass:"GG",attrs:{eventid:"6a0e2708-3-"+n},on:{click:function(i){t.gotoDetail(e.productId)}}},[t._v("进店逛逛")]):t._e()])])]):t._e()}),0==t.productList.length?i("empty-data",{attrs:{mpcomid:"6a0e2708-0"}}):t._e(),t.editor?i("view",{staticClass:"btn"},[t.isShow?i("image",{attrs:{src:"../../static/home/sheweimoren_18.png",mode:"",eventid:"6a0e2708-5"},on:{click:function(e){t.sellAll()}}}):i("image",{attrs:{src:"../../static/home/morendizhi_07.png",mode:"",eventid:"6a0e2708-4"},on:{click:function(e){t.sellAll()}}}),i("text",{attrs:{eventid:"6a0e2708-6"},on:{click:function(e){t.sellAll()}}},[t._v("全选")]),i("text",{attrs:{eventid:"6a0e2708-7"},on:{click:function(e){t.Delete()}}},[t._v("删除")])]):t._e()],2)},r=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return r})},f065:function(t,e,i){}},[["7785","common/runtime","common/vendor"]]]);