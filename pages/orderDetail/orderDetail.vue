<template>
	<view class="content">
		<view class="head">
			<text>订单编号：{{ orderDetail.order.orderSn }}</text>
			<text>下单时间：{{ orderDetail.updatedTime }}</text>
			<text>{{ currentorderStatus }}</text>
		</view>
		<view class="liubai"></view>
		<view class="center">
			<text class="title">收货信息</text>
			<text>收货人:{{ orderDetail.order.consignee }}</text>
			<text>联系方式:{{ orderDetail.order.userPhone }}</text>
			<text>收货地址:{{ orderDetail.order.province }}{{ orderDetail.order.city }}{{ orderDetail.order.area }}</text>
		</view>
		<view class="liubai"></view>
		<view class="mingzi">商品信息</view>
		<view class="footer">
			<image :src="imgURl + orderDetail.product.imgList[0]" mode=""></image>
			<view class="msg">
				<text>{{ orderDetail.productName }}</text>
				<text>订单号:{{ orderDetail.order.orderSn }}</text>
				<text>{{ orderDetail.updatedTime }}</text>
				<text class="price">{{ orderDetail.productPrice }}元x{{ orderDetail.productCount }}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getOrderDetailById } from '@/request/API/product.js';
export default {
	data() {
		return {
			imgURl: '',
			orderDetail: {
				order: {
					orderSn: '',
					consignee: '',
					userPhone: '',
					province: '',
					city: '',
					area: ''
				},
				product: {
					imgList: []
				}
			}
		};
	},
	computed: {
		currentorderStatus() {
			if (this.orderDetail.orderStatus == 0) {
				return '待确认';
			} else if (this.orderDetail.orderStatus == 1 || this.orderDetail.orderStatus == 2) {
				return '待收货';
			} else if (this.orderDetail.orderStatus == 3) {
				return '待评价';
			} else if (this.orderDetail.orderStatus == 4) {
				return '已完成';
			}
		}
	},
	onLoad(options) {
		this.imgURl = imgURl;
		this.getOrderDetailById(options.id);
	},
	methods: {
		getOrderDetailById(id) {
			getOrderDetailById(id).then(res => {
				if (res.data.code == 0) {
					this.orderDetail = res.data.data;
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	.head {
		padding: 20upx;
		color: #999999;
		display: flex;
		flex-direction: column;
		text {
			margin-top: 10upx;
		}
	}
	.liubai {
		height: 20upx;
		width: 100%;
		background-color: #f7f7f7;
	}
	.mingzi {
		padding: 20upx;
	}
	.center {
		padding: 20upx;
		color: #999999;
		display: flex;
		flex-direction: column;
		.title {
			color: #000000;
			border-bottom: 1px solid #999999;
		}
		text {
			margin-top: 20upx;
		}
	}
	.footer {
		padding: 20upx;
		display: flex;
		image {
			width: 200upx;
			height: 150upx;
		}
		.msg {
			margin-left: 10upx;
			display: flex;
			flex-direction: column;
			position: relative;
			text {
				margin-top: 10upx;
			}
			.price {
				position: absolute;
				right: 20upx;
				bottom: 5upx;
				color: red;
			}
		}
	}
}
</style>
