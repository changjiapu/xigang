import {postRequest,getRequest,postGetRequest,deleteRequest,deleteGetRequest}from'@/request/index.js'
//轮播图
export function getProductSlidesList(data){
	return getRequest('/slides/getProductSlidesList').then(res => res)
}
//获取公告列表
export function getNoticeList(pageNo,pageSize){
	return getRequest('/notice/getNoticeList?pageNo='+pageNo+'&pageSize='+pageSize).then(res => res)
}
//获取公告详情
export function getNoticeById(id){
	return getRequest('/notice/getNoticeById?id='+id).then(res => res)
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
export function getProductByShopId(pageNo,pageSize,shopId,categoryId,publishStatus,sortWay){
	return getRequest('/product/getProductByShopId?pageNo='+pageNo+'&pageSize='+pageSize+'&shopId='+shopId+'&categoryId='+categoryId+'&publishStatus='+publishStatus+'&sortWay='+sortWay).then(res => res)
}
//根据id获取商品详情
export function getProductById(productId,userId){
	return getRequest('/product/getProductById?productId='+productId+'&userId='+userId).then(res => res)
}
//商品添加取消收藏
export function AddCollection(data){
	return postRequest(data,'/collect/addCollection').then(res => res)
}
//获取收藏列表
export function queryCollectionList(userId,pageNo,pageSize){
	return getRequest('/collect/queryCollectionList?userId='+userId+'&pageNo='+pageNo+'&pageSize='+pageSize).then(res => res)
}
//删除收藏 
export function delCollection(userId,collectId){
	return postGetRequest('/collect/delCollection?userId='+userId+'&collectId='+collectId).then(res => res)
}
//商品添加购物车
export function addShopCart(data){
	return postRequest(data,'/cart/addShopCart').then(res => res)
}
//添加足迹
export function addVisitRecord(data){
	return postRequest(data,'/visitRecord/addVisitRecord').then(res => res)
}
//获取足列表
export function getVisitRecordList(pageNo,pageSize,userId){
	return getRequest('/visitRecord/getVisitRecordList?pageNo='+pageNo+'&pageSize='+pageSize+'&userId='+userId).then(res => res)
}
//删除足迹
export function delVisitRecord(prodIds){
	return deleteGetRequest('/visitRecord/delVisitRecord?prodIds='+prodIds).then(res => res)
}
//获取用户购物车信息
export function getShopCartList(userId,pageNo,pageSize){
	return getRequest('/cart/getShopCartList?userId='+userId+'&pageNo='+pageNo+'&pageSize='+pageSize).then(res => res)
}
//删除购物车
export function delShopCart(userId,cartId){
	return getRequest('/cart/delShopCart?userId='+userId+'&cartId='+cartId).then(res => res)
}
//创建订单
export function addOrder(data){
	return postRequest(data,'/order/addOrder').then(res => res)
}
//结算页面确认订单
export function confirmOrderByShopCart(data){
	return postRequest(data,'/order/confirmOrderByShopCart').then(res => res)
}
//获取订单列表
export function queryOrderList(userId,state,pageNo,pageSize){
	return postGetRequest('/order/queryOrderList?userId='+userId+'&state='+state+'&pageNo='+pageNo+'&pageSize='+pageSize).then(res => res)
}
//取消订单
export function cancelOrder(detailId){
	return postGetRequest('/order/cancelOrder?detailId='+detailId).then(res => res)
}
//确认订单
export function ConfirmOrder(detailId,orderStatus){
	return postGetRequest('/order/confirmOrder?detailId='+detailId+'&orderStatus='+orderStatus).then(res => res)
}
//查看订单详情
export function getOrderDetailById(detailId){
	return postGetRequest('/order/getOrderDetailById?detailId='+detailId).then(res => res)
}
//根据关键字搜索所有店铺
export function getAllShopByContent(pageNo,pageSize,content){
	return getRequest('/search/getAllShopByContent?pageNo='+pageNo+'&pageSize='+pageSize+'&content='+content).then(res => res)
}
//根据关键字搜索所有商品
export function getAllProductByContent(pageNo,pageSize,content){
	return getRequest('/search/getAllProductByContent?pageNo='+pageNo+'&pageSize='+pageSize+'&content='+content).then(res => res)
}
//获取评论列表
export function getCommentList(productId,pageNo,pageSize){
	return getRequest('/comment/getCommentList?productId='+productId+'&pageNo='+pageNo+'&pageSize='+pageSize).then(res => res)
}
//添加商品评论
export function addComment(data){
	return postRequest(data,'/comment/addComment').then(res => res)
}
//查询所有分类及分类下的商品
export function getProductByCategoryId(){
	return getRequest('/product/getProductByCategoryId').then(res => res)
}
//添加售后信息
export function addSaleService(data){
	return postRequest(data,'/saleService/addSaleService').then(res => res)
}