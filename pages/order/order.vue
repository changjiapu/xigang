<template>
	<view class="content">
		<view class="head" scroll-x>
			<text :class="{ active: currentTab == 0 }" @click="tabs(0, '')">全部</text>
			<text :class="{ active: currentTab == 1 }" @click="tabs(1, 0)">待确认</text>
			<text :class="{ active: currentTab == 2 }" @click="tabs(2, 1)">待收货</text>
			<text :class="{ active: currentTab == 4 }" @click="tabs(4, 3)">待评价</text>
			<text :class="{ active: currentTab == 3 }" @click="tabs(3, 4)">已完成</text>
			<!-- 		<text :class="{ active: currentTab == 5 }" @click="tabs(5)">售后</text> -->
		</view>
		<view class="item" v-for="(item, index) in orderList" :key="index">
			<image :src="imgURl + item.product.imgList[0]" mode="" @click="gotoDetail(item.detailId)"></image>
			<view class="msg">
				<view class="title">
					<text>{{ item.product.productName }}</text>
					<text>￥{{ item.prescriptionPrice }}元</text>
				</view>
				<text class="msg_2" style="font-size: 24upx;margin-top: 10upx;">下单时间:{{ item.updatedTime }}</text>
				<view class="btn">
					<text v-if="item.orderStatus == 1 || item.orderStatus == 2" @click="gotoDetail(item.detailId)">查看订单</text>
					<text v-if="item.orderStatus == 3 && item.orderStatus != 4" class="pingjia" @click="gotoComment(item)">立即评价</text>
					<text v-if="item.orderStatus == -3">订单已取消</text>
					<text v-if="item.orderStatus == 0" @click="cancelOrder(item.detailId)">取消订单</text>
					<text v-if="item.orderStatus == 0" class="pingjia" @click="ConfirmOrder(item.detailId)">确认订单</text>
					<text v-if="item.orderStatus == 1 || item.orderStatus == 2" @click="qRshouhuo(item.detailId, item.orderStatus)">
						{{ item.orderStatus == 2 ? '确认收货' : '商家确认中' }}
					</text>
					<text v-if="item.orderStatus == 3 || item.orderStatus == 4" @click="shouHou(item)">{{ item.order.saleService ? '售后处理中' : '申请售后' }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { queryOrderList, cancelOrder, ConfirmOrder } from '@/request/API/product.js';
export default {
	data() {
		return {
			currentTab: 0,
			imgURl: '',
			orderList: [],
			state: '', //
			pageNo: 1 //页码
		};
	},
	onShow() {
		this.pageNo=1
	    this.orderList=[],
		this.imgURl = imgURl;
		this.queryOrderList(this.userId, this.state, this.pageNo, 10);
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.queryOrderList(this.userId, this.state, this.pageNo, 10);
	},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		//获取订单列表
		queryOrderList(userId, state, pageNo, pageSize) {
			queryOrderList(userId, state, pageNo, pageSize).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.orderList = [...this.orderList, ...res.data.data.list];
				}
			});
		},
		tabs(tab, state) {
			this.currentTab = tab;
			this.state = state;
			this.orderList = [];
			this.pageNo = 1;
			this.queryOrderList(this.userId, this.state, this.pageNo, 10);
		},
		//取消订单
		cancelOrder(id) {
			cancelOrder(id).then(res => {
				if (res.data.code == 0) {
					this.orderList = [];
					this.pageNo = 1;
					this.queryOrderList(this.userId, this.state, this.pageNo, 10);
				}
			});
		},
		//确认订单
		ConfirmOrder(id) {
			//订单状态修改 1-用户确认订单（待收货）3-用户确认收货
			ConfirmOrder(id, 1).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '订单已确认',
						icon: 'none',
						duration: 1500
					});
					this.orderList = [];
					this.pageNo = 1;
					this.queryOrderList(this.userId, this.state, this.pageNo, 10);
				}
			});
		},
		//确认收货
		qRshouhuo(id, orderStatus) {
			console.log(22222);
			if (orderStatus == 2) {
				ConfirmOrder(id, 3).then(res => {
					if (res.data.code == 0) {
						uni.showToast({
							title: '订单已确认',
							icon: 'none',
							duration: 1500
						});
						this.orderList = [];
						this.pageNo = 1;
						this.queryOrderList(this.userId, this.state, this.pageNo, 10);
					}
				});
			} else {
				uni.showToast({
					title: '等待商家确认',
					icon: 'none',
					duration: 1500
				});
			}
		},
		gotoDetail(id) {
			uni.navigateTo({
				url: '/pages/orderDetail/orderDetail?id=' + id
			});
		},
		gotoComment(item) {
			let params = {
				orderId: item.orderId,
				productId: item.product.productId,
				productName: item.product.productName,
				descript: item.product.descript,
				img: item.product.imgList[0]
			};
			uni.navigateTo({
				url: '/pages/comment/comment?params=' + JSON.stringify(params)
			});
		},
		shouHou(item) {
			//saleService 为0可以申请 为1是商家处理中
			if (!item.order.saleService) {
				let params = {
					updatedTime: item.updatedTime,
					orderId: item.orderId,
					orderSn: item.order.orderSn,
					productName: item.productName,
					productPrice: item.productPrice,
					productCount: item.productCount,
					img: item.product.imgList[0]
				};
				uni.navigateTo({
					url: '/pages/shouHou/shouHou?params=' + JSON.stringify(params)
				});
			} else {
				uni.showToast({
					title: '等待商家处理',
					icon: 'none',
					duration: 1500
				});
			}
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	background-color: #f7f7f7;
	font-size: 28upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	.head {
		box-sizing: border-box;
		padding: 0 20upx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 95upx;
		align-items: center;
		background-color: white;
		text {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -10upx;
				height: 2px;
				width: 100%;
				background-color: #e91e63;
				transition: all 0.4s;
				transform: scaleX(0);
			}
			&.active {
				color: red;
				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
	.item {
		margin-top: 20upx;
		width: 95%;
		background-color: #ffffff;
		display: flex;
		padding: 20upx;
		box-sizing: border-box;
		image {
			height: 160upx;
			width: 200upx;
		}
		.msg {
			flex: 1;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			.title {
				display: flex;
				justify-content: space-between;
				text:first-of-type {
					font-weight: bold;
				}
				text:last-of-type {
					color: #e91e63;
				}
			}
			.msg_2 {
				color: #999999;
			}
			.btn {
				margin-left: 120upx;
				margin-top: 30upx;
				color: #999999;
				text {
					padding: 8upx 15upx;
					border: 1px solid #dddddd;
					border-radius: 20upx;
					&:nth-of-type(2) {
						margin-left: 30upx;
					}
					&.pingjia {
						background-color: #6d71d5;
						color: #ffffff;
						border: none;
					}
				}
			}
		}
	}
}
</style>
