(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"23be":function(e,t,o){"use strict";o("971c");var a=s(o("b0ce")),n=s(o("f6a7"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,a.default)(n.default))},"39c9":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o("d737"),n={data:function(){return{code:"",authCode:"",codeTime:"获取验证码",codeFlag:!0,title:"Hello",yueduxieyi:!1,iphone:"",password:"",password2:""}},onLoad:function(){},methods:{getCode:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;if(!t.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.codeFlag){var o=this;this.CountdownFun(60),(0,a.sendSmsCode)(this.iphone).then(function(t){0==t.data.code?o.code=t.data.data:e.showToast({title:t.data.data,icon:"none",duration:1500})})}},CountdownFun:function(e){var t=this,o=setInterval(function(){e--,t.codeTime=e,0==e&&(clearInterval(o),t.codeFlag=!0,t.codeTime="获取验证码")},1e3)},addUserBySystem:function(){var t=this,o=/^[1][3,4,5,7,8][0-9]{9}$/;if(!o.test(this.iphone))return console.log(this.iphone),void e.showModal({title:"",content:"请输入正确的手机号码",showCancel:!1});if(this.password)if(this.password.length<6)e.showModal({title:"",content:"密码不能小于6位",showCancel:!1});else if(this.password==this.password2)if(this.authCode)if(this.authCode==this.code){var n={authCode:this.authCode,phone:this.iphone,password:this.password,userType:0};(0,a.addUserBySystem)(n).then(function(o){0==o.data.code?(e.showToast({title:"注册成功",duration:2e3}),e.setStorageSync("token",o.data.data.token),e.setStorageSync("userId",o.data.data.userId),t.$store.commit("SET_TOKEN",o.data.data.token),t.$store.commit("SET_USERID",o.data.data.token),e.reLaunch({url:"/pages/index/index"})):e.showToast({title:o.data.msg,icon:"none",duration:2e3})})}else e.showModal({title:"",content:"验证码不正确",showCancel:!1});else e.showModal({title:"",content:"请输入验证码",showCancel:!1});else e.showModal({title:"",content:"两次输入的密码不一致",showCancel:!1});else e.showModal({title:"",content:"请输入密码",showCancel:!1})},tongyixieyi:function(){this.yueduxieyi=!this.yueduxieyi}}};t.default=n}).call(this,o("6e42")["default"])},a2e7:function(e,t,o){"use strict";var a=o("e15d"),n=o.n(a);n.a},d91d:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"item"},[o("text",[e._v("手机号")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.iphone,expression:"iphone"}],attrs:{type:"number",value:"",placeholder:"请输入手机号",maxlength:"11",eventid:"0570b592-0"},domProps:{value:e.iphone},on:{input:function(t){t.target.composing||(e.iphone=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("设置密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",value:"",placeholder:"请输入6-20位密码",maxlength:"20",eventid:"0570b592-1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("确认密码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"password",value:"",placeholder:"请确认密码",eventid:"0570b592-2"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}})]),o("view",{staticClass:"item"},[o("text",[e._v("验证码")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.authCode,expression:"authCode"}],attrs:{type:"number",value:"",placeholder:"请输入验证码",eventid:"0570b592-3"},domProps:{value:e.authCode},on:{input:function(t){t.target.composing||(e.authCode=t.target.value)}}}),o("view",{staticClass:"code",attrs:{eventid:"0570b592-4"},on:{click:e.getCode}},[e._v(e._s(e.codeTime))])]),o("view",{staticClass:"btn",attrs:{eventid:"0570b592-5"},on:{click:function(t){e.addUserBySystem()}}},[e._v("提交并注册")])])},n=[];o.d(t,"a",function(){return a}),o.d(t,"b",function(){return n})},e15d:function(e,t,o){},eb89:function(e,t,o){"use strict";o.r(t);var a=o("39c9"),n=o.n(a);for(var s in a)"default"!==s&&function(e){o.d(t,e,function(){return a[e]})}(s);t["default"]=n.a},f6a7:function(e,t,o){"use strict";o.r(t);var a=o("d91d"),n=o("eb89");for(var s in n)"default"!==s&&function(e){o.d(t,e,function(){return n[e]})}(s);o("a2e7");var i=o("2877"),d=Object(i["a"])(n["default"],a["a"],a["b"],!1,null,"a63456f8",null);t["default"]=d.exports}},[["23be","common/runtime","common/vendor"]]]);