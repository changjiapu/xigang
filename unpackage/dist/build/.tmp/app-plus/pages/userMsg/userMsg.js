(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/userMsg/userMsg"],{"0be7":function(e,t,a){},"1d53":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a("cb97"),i=a("2f62"),n=a("d737");function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),s.forEach(function(t){o(e,t,a[t])})}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={data:function(){return{imglist2:"",imglist:"",userinfo:{name:"",userPhone:"",userSex:"",nickName:"",spec_name:""},imgurl:"",range:["男","女"]}},onLoad:function(){this.imgurl=s.imgURl,this.getUserById()},methods:{save:function(){if(this.userinfo.userPhone){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.userinfo.userPhone))return void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1})}var a={userId:this.userId,userName:this.userinfo.name,specName:this.userinfo.spec_name,userPhoto:this.imglist,userSex:this.userinfo.userSex,nickName:this.userinfo.nickName,userPhone:this.userinfo.userPhone};(0,n.updateUserInfo)(a).then(function(t){0==t.data.code&&(e.showToast({title:"保存成功",mask:!1,duration:1500}),setTimeout(function(t){e.navigateBack({data:1})},1500))})},getUserById:function(){var e=this;(0,n.getUserById)(this.userId).then(function(t){t.data.data.userPhoto&&(e.imglist=t.data.data.userPhoto),t.data.data.userName&&(e.userinfo.name=t.data.data.userName),t.data.data.userPhone&&(e.userinfo.userPhone=t.data.data.userPhone),t.data.data.specName&&(e.userinfo.spec_name=t.data.data.specName),t.data.data.userSex&&(e.userinfo.userSex=t.data.data.userSex),t.data.data.nickName&&(e.userinfo.nickName=t.data.data.nickName)})},bindPickerChange:function(e){this.userinfo.userSex=e.detail.value},paizhao:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){console.log(a),t.imglist2=a.tempFilePaths[0],e.uploadFile({url:s.baseURL+"/file/upload",filePath:a.tempFilePaths[0],name:"file",formData:{user:"test",file:a.tempFilePaths[0]},success:function(e){var a=JSON.parse(e.data);t.imglist=a.data}})}})}},computed:r({},(0,i.mapState)(["userId"]))};t.default=u}).call(this,a("6e42")["default"])},3885:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",{staticClass:"content"},[a("view",{staticClass:"item3"},[a("text",{staticClass:"title3"},[e._v("头像:")]),a("view",{staticClass:"right",attrs:{eventid:"71d77020-0"},on:{click:e.paizhao}},[e.imglist2?a("image",{staticClass:"tx",attrs:{src:e.imglist2,mode:""}}):a("image",{staticClass:"tx",attrs:{src:e.imgurl+e.imglist,mode:""}}),a("image",{staticClass:"bq",attrs:{src:"../../static/home/gengduo_41.png",mode:""}})])]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("用户名:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.name,expression:"userinfo.name"}],attrs:{type:"text",placeholder:"请输入用户名",eventid:"71d77020-1"},domProps:{value:e.userinfo.name},on:{input:function(t){t.target.composing||(e.userinfo.name=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("昵称:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.nickName,expression:"userinfo.nickName"}],attrs:{type:"text",value:"",placeholder:"请输入用户昵称",eventid:"71d77020-2"},domProps:{value:e.userinfo.nickName},on:{input:function(t){t.target.composing||(e.userinfo.nickName=t.target.value)}}})]),a("view",{staticClass:"item"},[a("text",{staticClass:"title3"},[e._v("电话:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.userPhone,expression:"userinfo.userPhone"}],attrs:{type:"text",value:"",placeholder:"请输入电话号码",disabled:"true",eventid:"71d77020-3"},domProps:{value:e.userinfo.userPhone},on:{input:function(t){t.target.composing||(e.userinfo.userPhone=t.target.value)}}})]),a("picker",{attrs:{mode:"selector",range:e.range,eventid:"71d77020-4"},on:{change:e.bindPickerChange}},[a("view",{staticClass:"item3"},[a("text",{staticClass:"title3"},[e._v("性别:")]),a("text",{staticClass:"sex"},[e._v(e._s(0==e.userinfo.userSex?"男":"女"))]),a("view",{staticClass:"right"},[a("image",{staticClass:"bq",attrs:{src:"../../static/home/gengduo_41.png",mode:""}})])])]),a("view",{staticClass:"item2"},[a("text",{staticClass:"title3"},[e._v("个性签名")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.userinfo.spec_name,expression:"userinfo.spec_name"}],staticClass:"text",attrs:{type:"text",placeholder:"请输入个性签名",eventid:"71d77020-5"},domProps:{value:e.userinfo.spec_name},on:{input:function(t){t.target.composing||(e.userinfo.spec_name=t.target.value)}}})]),a("view",{staticClass:"btn",attrs:{eventid:"71d77020-6"},on:{click:e.save}},[e._v("保存")])],1)},i=[];a.d(t,"a",function(){return s}),a.d(t,"b",function(){return i})},"707e":function(e,t,a){"use strict";a.r(t);var s=a("1d53"),i=a.n(s);for(var n in s)"default"!==n&&function(e){a.d(t,e,function(){return s[e]})}(n);t["default"]=i.a},8197:function(e,t,a){"use strict";a.r(t);var s=a("3885"),i=a("707e");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("8383");var r=a("2877"),o=Object(r["a"])(i["default"],s["a"],s["b"],!1,null,"ee7e0d6e",null);t["default"]=o.exports},8383:function(e,t,a){"use strict";var s=a("0be7"),i=a.n(s);i.a},aba1:function(e,t,a){"use strict";a("971c");var s=n(a("b0ce")),i=n(a("8197"));function n(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))}},[["aba1","common/runtime","common/vendor"]]]);