<template>
	<view class="content">
		<view class="title1">
			<text>购物车共有{{ productList.length }}个商品</text>
			<text @click="editorChange()" style="color:#c30">{{ editor ? '完成' : '编辑' }}</text>
		</view>
		<view class="list" v-if="productList.length">
			<view class="list-item" v-for="(item, index) in productList" :key="index">
				<view class="clear">
					<image src="../../static/home/clear.png" v-if="editor" @click="clear(item.cartId)"></image>
					<view v-if="!editor" @click="isIck(index)">
						<image v-if="item.ick" src="../../static/home/xuanzhong_07.png" mode=""></image>
						<image v-else src="../../static/home/weixuanzhong_03.png" mode=""></image>
					</view>
				</view>
				<view class="img"><image :src="imgURL + item.product.imgList[0]" style="width:100%;height:100%"></image></view>
				<view class="msg-detail">
					<view class="product-name">{{ item.product.productName }}</view>
					<view class="guige">{{ item.productSpec.productSpecs }}</view>
					<view class="price" style="font-size: 28upx;">
						<text>￥</text>
						{{ item.productSpec.price }}元/{{ item.productSpec.specUnit }}
					</view>
				</view>
				<view class="count">
					<text @click="sub(index)">-</text>
					<text class="input">{{ item.productNum }}</text>
					<text @click="add(index)">+</text>
				</view>
			</view>
		</view>
		<empty-data v-if="productList.length == 0"></empty-data>
<!-- 		<view class="empty" style="width:100%;height:114upx;"></view> -->
		<view class="buy-btn">
			<view class="left" @click="selectAll">
				<image v-if="isShow" src="../../static/home/weixuanzhong_03.png" mode=""></image>
				<image v-else src="../../static/home/xuanzhong_07.png" mode=""></image>
				<text>全选</text>
			</view>
			<view class="right">
				<view>
					合计￥
					<text>{{ totalPrices }}</text>
				</view>
				<view @click="gotoPay">立即下单</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { getShopCartList, delShopCart, addOrder } from '@/request/API/product.js';
export default {
	data() {
		return {
			empty: '',
			editor: false,
			no_data: true,
			select_all: true,
			pageNo: 1, //分页页码
			productList: [], //列表
			imgURL: '',
			isShow: true,
			totalPrices: 0
		};
	},
	computed: {
		...mapState(['userId'])
	},
	onShow() {
		this.totalPrices = 0;
		this.imgURL = imgURl;
		this.productList = [];
		(this.isShow = true), this.getShopCartList(this.userId, this.pageNo, 10);
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.getShopCartList(this.userId, this.pageNo, 10);
	},
	methods: {
		//获取购物车列表
		getShopCartList(userId, pageNo, pageSize) {
			getShopCartList(userId, pageNo, pageSize).then(res => {
				if (res.data.code == 0) {
					for (let item of res.data.data.list) {
						Object.assign(item, { ick: false });
					}
					this.productList = [...this.productList, ...res.data.data.list];
				}
			});
		},
		//清除购物车
		clear(id) {
			delShopCart(this.userId, id).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '删除成功',
						duration: 1000
					});
					this.pageNo = 1; //分页页码
					this.productList = []; //列表
					this.getShopCartList(this.userId, this.pageNo, 10);
				} else {
					uni.showToast({
						title: '删除失败',
						icon: 'none',
						duration: 1000
					});
				}
			});
		},
		editorChange() {
			this.editor = !this.editor;
		},
		statusChange(e) {
			var index = e;
		},
		isIck(index) {
			this.productList[index].ick = !this.productList[index].ick;
			let totalPrices = 0;
			for (let item of this.productList) {
				if (item.ick) {
					totalPrices = item.productSpec.price * item.productNum + totalPrices;
				}
			}
			this.totalPrices = totalPrices;
		},
		sub(index) {
			if (this.productList[index].productNum == 1) {
				return;
			}
			this.productList[index].productNum--;
			let totalPrices = 0;
			for (let item of this.productList) {
				if (item.ick) {
					totalPrices = item.productSpec.price * item.productNum + totalPrices;
				}
			}
			this.totalPrices = totalPrices;
		},
		add(index) {
			this.productList[index].productNum++;
			let totalPrices = 0;
			for (let item of this.productList) {
				if (item.ick) {
					totalPrices = item.productSpec.price * item.productNum + totalPrices;
				}
			}
			this.totalPrices = totalPrices;
		},
		selectAll() {
			this.isShow = !this.isShow;

			if (this.isShow) {
				for (let item of this.productList) {
					item.ick = false;
				}
			} else {
				for (let item of this.productList) {
					item.ick = true;
				}
			}
			let totalPrices = 0;
			for (let item of this.productList) {
				if (item.ick) {
					totalPrices = item.productSpec.price * item.productNum + totalPrices;
				}
			}
			this.totalPrices = totalPrices;
		},
		//去下单页面
		gotoPay() {
			let paramsList = [];
			for (let item of this.productList) {
				if (item.ick) {
					let params = {
						expressId: item.product.expressId, //配送方式
						specUnit: item.productSpec.specUnit, //单位
						shopId: item.product.shopId,
						productId: item.productId,
						specId: item.specId,
						productName: item.product.productName,
						productPrice: item.productSpec.price,
						productCount: item.productNum,
						prescriptionPrice: item.productSpec.price * item.productNum,
						addressId: item.addressId
					};
					paramsList.push(params);
				}
			}
			if (paramsList.length == 0) {
				uni.showModal({
					title: '',
					content: '请选择要结算的商品',
					showCancel: false
				});
				return;
			}
			let productList2 = [];
			for (let item of paramsList) {
				let product = {
					expressId: item.expressId,
					shopId: item.shopId,
					productId: item.productId,
					specId: item.specId,
					productName: item.productName,
					productPrice: item.productPrice,
					productCount: item.productCount,
					prescriptionPrice: item.prescriptionPrice,
					addressId: item.addressId,
					orderRemark: ''
				};
				productList2.push(product);
			}
			let params2 = {
				userId: this.userId,
				orderDetailList: productList2
			};
			addOrder(params2).then(res => {
				if (res.data.code == 0) {
					uni.navigateTo({
						url: '/pages/confirmOrder/confirmOrder?paramsList=' + JSON.stringify(paramsList) + '&orderList=' + res.data.data.orderIdList.join(',')
					});
				} else {
					uni.showToast({
						title: '生成订单失败',
						icon: 'none',
						duration: 1000
					});
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.title1 {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20upx;
	height: 80upx;
	background-color: #eee;
	font-size: 28upx;
	color: #888;
}

.title1 text:nth-child(2) {
	color: #c30;
	font-size: 30upx;
}

.list {
	width: 100%;
	overflow: hidden;
	background-color: #fff;
}

.list .list-item {
	width: 750upx;
	padding: 15upx 0;
	display: flex;
	position: relative;
}

.list .list-item .clear {
	width: 70upx;
	height: 160upx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.list .list-item .clear image {
	width: 40upx;
	height: 40upx;
}

.list .list-item .img {
	width: 160upx;
	height: 160upx;
	margin-left: 20upx;
	background-color: #eee;
	position: relative;
}

.list .list-item .img::after {
	content: '';
	width: 710upx;
	border-top: 1px solid #eee;
	position: absolute;
	bottom: -15upx;
	left: 0upx;
}

.list .list-item .msg-detail {
	height: 160upx;
	width: 460upx;
	padding: 0 20upx;
}

.list .list-item .msg-detail .product-name {
	font-size: 28upx;
	height: 80upx;
	line-height: 40upx;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.list .list-item .msg-detail .versions {
	color: #999;
	font-size: 24upx;
	margin-top: 3px;
}

.list .list-item .msg-detail .price {
	color: #c30;
	font-size: 32upx;
	margin-top: 3px;
}
.list .list-item .msg-detail .guige {
	color: #999999;
}
.list .list-item .msg-detail .price text {
	font-size: 24upx;
}

.list .list-item .count {
	position: absolute;
	right: 20upx;
	bottom: 15upx;
	width: 170upx;
	height: 50upx;
	font-size: 26upx;
	border-radius: 3px;
	color: #999999;
	border: 1px solid #ddd;
	display: flex;
}

.list .list-item .count text {
	width: 60upx;
	text-align: center;
	height: 50upx;
	line-height: 50upx;
	box-sizing: border-box;
	border-right: 1px solid #ddd;
}

.list .list-item .count text:nth-child(3) {
	border-right: none;
}

.list .list-item .count input {
	width: 70upx;
	text-align: center;
	height: 50upx;
	line-height: 50upx;
	box-sizing: border-box;
	border-right: 1px solid #ddd;
}

.buy-btn {
	width: 100%;
	height: 100upx;
	position: fixed;
	bottom: 0;
	background-color: #fff;
	padding-bottom: 5px;
	z-index: 2000;
	border-top: 1px solid #eee;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.buy-btn .left {
	margin-left: 25upx;
	display: flex;
	align-items: center;
}

.buy-btn .left icon {
	display: block;
}

.buy-btn .left text {
	margin-left: 5px;
}
.buy-btn .left image {
	height: 35upx;
	width: 35upx;
}
.buy-btn .right {
	font-size: 30upx;
	color: #999;
	display: flex;
	align-items: center;
}

.buy-btn .right view text {
	margin-right: 50upx;
	font-size: 34upx;
	color: #c30;
	font-weight: bold;
}

.buy-btn .right view:nth-child(2) {
	width: 220upx;
	height: 90upx;
	line-height: 90upx;
	text-align: center;
	color: #fff;
	border-radius: 20upx;
	background-color: #6d71d5;
	font-size: 34upx;
	margin-left: 5px;
}

icon {
	display: block;
}
</style>
