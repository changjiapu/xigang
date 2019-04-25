import {postRequest,getRequest,postGetRequest}from'@/request/index.js'
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
//根据分类id获取店铺列表
export function getShopByCategoryId(categoryId){
	return getRequest('/category/getShopByCategoryId?categoryId='+categoryId).then(res => res)
}
//根据分类id获取店铺商品
export function getProductByShopId(pageNo,pageSize,shopId,publishStatus,sortWay){
	return getRequest('/product/getProductByShopId?pageNo='+pageNo+'&pageSize='+pageSize+'&shopId='+shopId+'&publishStatus='+publishStatus+'&sortWay='+sortWay).then(res => res)
}
//根据id获取商品详情
export function getProductById(productId){
	return getRequest('/product/getProductById?productId='+productId).then(res => res)
}
//商品添加取消收藏
export function AddCollection(data){
	return postRequest(data,'/collect/addCollection').then(res => res)
}
//商品添加购物车
export function addShopCart(data){
	return postRequest(data,'/cart/addShopCart').then(res => res)
}
//创建订单
export function addOrder(data){
	return postRequest(data,'/order/addOrder').then(res => res)
}