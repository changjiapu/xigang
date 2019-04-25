import {postRequest,getRequest,postGetRequest,deleteRequest}from'@/request/index.js'

//系统用户注册
export function addUserBySystem(data){
	return postRequest(data,'/user/addUserBySystem').then(res => res)
}
//用户登录
export function login(data){
	return postRequest(data,'/user/login').then(res => res)
}
//忘记密码 修改
export function retrievePassword(data){
	return postRequest(data,'/user/retrievePassword').then(res => res)
}
//获取客服服务信息
export function getCustomerService(){
	return getRequest('/user/getCustomerService').then(res => res)
}
//获取用户信息
export function getUserById(userId){
	return postGetRequest('/user/getUserById?userId='+userId).then(res => res)
}
//修改用户头像
export function updUserPhoto(data){
	return postRequest(data,'/user/updUserPhoto').then(res => res)
}
//修改用户名
export function updUserName(data){
	return postRequest(data,'/user/updUserName').then(res => res)
}
//修改用户昵称
export function updUserNikeName(data){
	return postRequest(data,'/user/updUserNikeName').then(res => res)
}
//修改用户电话号码
export function updUserPhone(data){
 return postRequest(data,'/user/updUserPhone').then(res => res)
}
//修改用户个性签名
export function updUserSpecName(data){
 return postRequest(data,'/user/updUserSpecName').then(res => res)
}
//修改用户性别
export function updUserSex(data){
 return postRequest(data,'/user/updUserSex').then(res => res)
}
//修改用户密码
export function updUserPassword(data){
 return postRequest(data,'/user/updUserPassword').then(res => res)
}
//添加地址
export function addUserAddress(data){
	return postRequest(data,'/address/addUserAddress').then(res => res)
}
//修改用户地址
export function updAddById(data){
	return postRequest(data,'/address/updAddById').then(res => res)
}
//删除地址
export function delAddById(data){
	return deleteRequest(data,'/address/delAddById').then(res => res)
}
//获取用户地址集合
export function getUserAddressListByUserId(userId){
	return getRequest('/address/getUserAddressListByUserId?userId='+userId).then(res => res)
}
//设置或取消默认地址
export function updAddDefaultById(data){
	return postRequest(data,'/address/updAddDefaultById').then(res => res)
}