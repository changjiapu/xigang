<template>
	<view class="content">
		<navigator class="address" url="/pages/addressList/addressList">
			<image src="../../static/home/xiaodizhi_44.png" mode=""></image>
			<view v-if="address" class="info">
				<text>收货人:&nbsp;{{ address.userName }}&nbsp;{{ address.userPhone }}</text>
				<text>收货地址:&nbsp;{{ address.province }}-{{ address.city }}-{{ address.area }}{{ address.addressLine1 }}</text>
			</view>
			<view v-else class="info">
				<text>收货人:&nbsp;xxxxx&nbsp;xxxxxxxx</text>
				<text>收货地址:&nbsp;xxxxxxxxxxxxx</text>
			</view>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</navigator>
		<view class="product_detail" v-for="(item, index) in productList" :key="index">
			<image src="../../static/home/dianpupaihangmangguo_05.png" mode=""></image>
			<text>{{ item.productName }}</text>
			<text>￥{{ item.productPrice }}元/斤</text>
			<text class="num">x{{ item.productCount }}</text>
			<text class="peisong">配送方式:{{ item.expressId ? '自提' : '免费配送' }}</text>
		</view>
		<view class="prict">
			<view>
				<text>商品总额</text>
				<text style="color: #E91E63;">￥{{ totalPrices }}</text>
			</view>
			<view>
				<text>配送费</text>
				<text>￥0</text>
			</view>
		</view>
		<view class="beizhu">
			<text>订单备注</text>
			<input type="text" value=""  v-model="orderRemark" placeholder="可输入备注,最多50个字" />
		</view>
		<view class="btn">
			<text>待支付:</text>
			<text>￥12.5</text>
			<text @click="addOrder">确认订单</text>
		</view>
	</view>
</template>

<script>
import { getUserAddressListByUserId } from '@/request/API/index.js';
import { addOrder } from '@/request/API/product.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			orderRemark:'',//备注信息
			address: {},
			productList: [], //结算产品列表
			totalPrices: '' //总价
		};
	},
	computed: {
		...mapState(['userId'])
	},
	onLoad(options) {
		if (options.params) {
			this.productList.push(JSON.parse(options.params));
			this.totalPrices = this.productList[0].prescriptionPrice;
		}
		console.log(this.productList);
	},
	onShow() {
		this.getUserAddressListByUserId(this.userId);
	},
	methods: {
		//用户地址列表
		getUserAddressListByUserId(id) {
			getUserAddressListByUserId(id).then(res => {
				if (res.data.code == 0) {
					//有默认地址取默认地址 没有取第一个
					for (let item of res.data.data) {
						if (item.isDefault) {
							this.address = item;
						} else {
							this.address = res.data.data[0];
						}
					}
				}
			});
		},
		//c创建订单
		addOrder() {
			let orderDetailList = []; //循环遍历 一条就是直接购买，多条就是购物车过来
			for (let item of this.productList) {
				let product = {
					expressId:item.expressId,
					shopId: item.shopId, 
					productId: item.productId,
					specId: item.specId,
					productName: item.productName,
					productPrice: item.productPrice,
					productCount: item.productCount,
					prescriptionPrice: item.prescriptionPrice,
					orderRemark: this.orderRemark,
				};
				orderDetailList.push(product)
			}
			let params = {
				userId: this.userId,
				addressId: this.address.addressId,
				orderDetailList:orderDetailList 
			};
			addOrder(params).then(res => {});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25upx;
	box-sizing: border-box;
	background-color: #f7f7f7;
	.address {
		background-color: #ffffff;
		height: 158upx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		image {
			height: 35upx;
			width: 35upx;
		}
		.info {
			width: 85%;
			display: flex;
			flex-direction: column;
		}
	}
	.product_detail {
		position: relative;
		margin-top: 20upx;
		padding: 0 20upx;
		box-sizing: border-box;
		font-weight: bold;
		background-color: #ffffff;
		height: 158upx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		image {
			height: 110upx;
			width: 110upx;
		}
		text:nth-of-type(2) {
			color: rgb(227, 81, 97);
		}
		.num {
			position: absolute;
			right: 20upx;
			bottom: 10upx;
		}
		.peisong {
			color: #777777;
			position: absolute;
			right: 200upx;
			bottom: 5upx;
		}
	}
	.prict {
		width: 100%;
		margin-top: 20upx;
		background-color: #ffffff;
		view {
			padding: 0 20upx;
			box-sizing: border-box;
			width: 100%;
			height: 95upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:first-of-type {
				border-bottom: 1px solid #dddddd;
			}
		}
	}
	.beizhu {
		width: 100%;
		margin-top: 20upx;
		padding: 0 20upx;
		background-color: #ffffff;
		height: 95upx;
		display: flex;
		align-items: center;
		input {
			margin-left: 20upx;
		}
	}
	.btn {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 95upx;
		display: flex;
		align-items: center;
		border-top: 1px solid #eeeeee;
		text:first-of-type {
			margin-left: 300upx;
		}
		text:nth-of-type(2) {
			margin-left: 10upx;
			font-weight: bold;
			color: rgb(227, 81, 97);
		}
		text:last-of-type {
			margin-left: 15upx;
			height: 70upx;
			width: 190upx;
			text-align: center;
			line-height: 70upx;
			background-color: #6d71d5;
			border-radius: 10upx;
			color: #ffffff;
		}
	}
}
</style>
