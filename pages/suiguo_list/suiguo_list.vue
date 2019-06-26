<template>
	<view class="content">
		<!-- 头部 -->
		<view class="liubai"></view>
		<view class="head">
			<image class="back" src="../../static/home/zuojiantou_2.png" mode="" @click="gotoBack()"></image>
			<view class="input">
				<image src="../../static/home/sousuo_06.png" mode=""></image>
				<input type="text" v-model="search" placeholder="请输入要搜索的商品" @confirm="searchProduct()" />
			</view>
			<view class="ditu" @click="ditudakai()">
				<image src="../../static/home/dizhi4.png" mode=""></image>
				<text>导航</text>
			</view>
		</view>
		<view class="title">
			<text>全部商品</text>
			<view class="price" @click="isShangChange()">
				<text>价格排序</text>
				<image v-if="isShang" src="../../static/home/shangjiantou.png" mode=""></image>
				<image v-else src="../../static/home/xiajiantou.png" mode=""></image>
			</view>
		</view>
		<view class="scroll-view">
			<view class="list-item" v-for="(item, index) in productList" :key="index" @click="gotoDetail(item.productId)">
				<image :src="imgURl + item.imgList[0]" mode=""></image>
				<view class="list_msg">
					<text>{{ item.productName }}</text>
					<text>{{ item.descript }}</text>
					<text>￥{{ item.price }}元/{{ item.specUnit }}</text>
					<image class="cart" src="../../static/home/gouwuche_44.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getProductByShopId, getAllProductByContent } from '@/request/API/product.js';
export default {
	data() {
		return {
			search: '',
			isShang: true,
			pageNo: 1,
			productList: [],
			imgURl: '',
			sortWay: 0, //排序方式
			productId: '',
			categoryId: '',
			addressName: '',
			location: ''
		};
	},
	onLoad(options) {
		if (options.location) {
			this.location = options.location;
		}
		if (options.shopAddress) {
			this.shopAddress = options.shopAddress;
		}
		this.categoryId = options.categoryId;
		this.productId = options.id;
		this.imgURl = imgURl;
		this.getProductByShopId(this.pageNo, 10, this.productId, this.categoryId, 1, this.sortWay);
	},
	//上拉加载
	onReachBottom() {
		if (this.search == '') {
			this.pageNo++;
			this.getProductByShopId(this.pageNo, 10, this.productId, this.categoryId, 1, this.sortWay);
		}
	},
	methods: {
		ditudakai() {
			let list = this.location.split(',');
			console.log(list);
			const a = Number(list[0]);
			const b = Number(list[1]);
			uni.openLocation({
				latitude: b,
				longitude: a,
				// scale: 18,
				name: this.shopAddress
				// address: ''
				// name: app.globalData.location.location_city,
				// address: this.data.shop_detail.address
			});
		},
		//获取商品列表
		getProductByShopId(pageNo, pageSize, shopId, categoryId, publishStatus, sortWay) {
			getProductByShopId(pageNo, pageSize, shopId, categoryId, publishStatus, sortWay).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.productList = [...this.productList, ...res.data.data.list];
				}
			});
		},
		isShangChange() {
			this.isShang = !this.isShang;
			this.productList = [];
			this.pageNo = 1;
			if (this.sortWay == 0) {
				this.sortWay = 1;
			} else {
				this.sortWay = 0;
			}
			this.getProductByShopId(this.pageNo, 10, this.productId, this.categoryId, 1, this.sortWay);
		},
		gotoBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		gotoDetail(id) {
			uni.navigateTo({
				url: '/pages/product_detaill/product_detaill?id=' + id
			});
		},
		searchProduct() {
			getAllProductByContent(1, 20, this.search).then(res => {
				if (res.data.data.list.length == 0) {
					uni.showToast({
						title: '没有更多数据了',
						icon: 'none',
						duration: 1000
					});
				}
				this.productList = [...res.data.data.list];
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 22upx;
	width: 100%;
	// background-color: #f7f7f7;
	.liubai {
		position: fixed;
		top: 0;
		height: 60upx;
		z-index: 999999;
		width: 100%;
		background-color: #6d71d5;
	}
	.head {
		position: fixed;
		z-index: 999;
		top: 60upx;
		width: 100%;
		background-color: #6d71d5;
		padding-bottom: 20upx;
		// height: 150upx;
		display: flex;
		align-items: center;
		justify-content: space-around;

		.back {
			height: 45upx;
			width: 45upx;
		}
		.ditu {
			display: flex;
			align-items: center;
			justify-content: center;
			color: #ffffff;
			font-size: 30upx;
			image {
				height: 38upx;
				width: 36upx;
			}
		}
		.input {
			height: 65upx;
			width: 60%;
			font-size: 22upx;
			display: flex;
			align-items: center;
			background-color: #ffffff;
			padding: 0 20upx;
			border-radius: 10upx;
			input {
				width: 100%;
			}
			image {
				height: 30upx;
				width: 30upx;
			}
		}
	}
	// .head {
	// 	z-index: 999;
	// 	background-color: #ffffff;
	// 	position: fixed;
	// 	top: 0;
	// 	width: 100%;
	// 	padding-top: 30upx;
	// 	height: 150upx;
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;
	// 	font-size: 30upx;
	// 	color: rgb(153, 153, 153);
	// 	.left {
	// 		position: absolute;
	// 		left: 30upx;
	// 		height: 80upx;
	// 		width: 80upx;
	// 		display: flex;
	// 		align-items: center;
	// 		justify-content: center;
	// 		image {
	// 			height: 30upx;
	// 			width: 30upx;
	// 		}
	// 	}
	// 	.input {
	// 		height: 80upx;
	// 		width: 50%;
	// 		font-size: 22upx;
	// 		display: flex;
	// 		align-items: center;
	// 		background-color: rgb(235, 235, 235);
	// 		padding: 0 20upx;
	// 		border-radius: 10upx;
	// 		input {
	// 			width: 100%;
	// 		}
	// 		image {
	// 			height: 30upx;
	// 			width: 30upx;
	// 		}
	// 	}
	// 	.img {
	// 		height: 80upx;
	// 		display: flex;
	// 		align-items: center;
	// 		image {
	// 			height: 50upx;
	// 			width: 50upx;
	// 		}
	// 	}
	// }
	.title {
		position: fixed;
		top: 135upx;
		z-index: 999;
		height: upx;
		display: flex;
		width: 100%;
		background-color: #ffffff;
		text {
			width: 50%;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
		}
		.price {
			width: 50%;
			height: 80upx;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				height: 40upx;
				width: 30upx;
			}
		}
	}
	.scroll-view {
		margin-top: 210upx;
		width: 100%;
		.list-item {
			margin-top: 25upx;
			display: inline-block;
			height: 500upx;
			width: 320upx;
			border-radius: 10upx;
			box-shadow: 8upx 8upx 8upx #f3f3f3;
			margin-left: 35upx;
			image {
				width: 100%;
				height: 300upx;
			}
			.list_msg {
				position: relative;
				width: 100%;
				box-sizing: border-box;
				padding: 20upx 15upx;
				display: flex;
				flex-direction: column;
				text {
					margin-top: 5upx;
				}
				text:first-of-type {
					font-size: 30upx;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				text:nth-of-type(2) {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 22upx;
					color: rgb(153, 153, 153);
				}
				text:last-of-type {
					font-size: 28upx;
					color: rgb(227, 84, 97);
				}
				.cart {
					position: absolute;
					bottom: 20upx;
					right: 20upx;
					height: 30upx;
					width: 30upx;
				}
			}
		}
	}
}
</style>
