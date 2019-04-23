import {postRequest,getRequest,postGetRequest}from'@/request/index.js'
// //获取客服服务信息
// export function getCustomerService(){
// 	return getRequest('/user/getCustomerService').then(res => res)
// }
// //获取用户信息
// export function getUserById(userId){
// 	return postGetRequest('/user/getUserById?userId='+userId).then(res => res)
// }
// //修改用户头像
// export function updUserPhoto(data){
// 	return postRequest(data,'/user/updUserPhoto').then(res => res)
// }
//轮播图
export function getProductSlidesList(data){
	return getRequest('/slides/getProductSlidesList').then(res => res)
}
//获取公告列表
export function getNoticeList(pageNo,pageSize){
	return getRequest('/notice/getNoticeList?pageNo='+pageNo+'&pageSize='+pageSize).then(res => res)
}
//获取分类列表
export function getProductCategory(level,type){
	return getRequest('/category/getProductCategory?level='+level+'&type='+type).then(res => res)
}