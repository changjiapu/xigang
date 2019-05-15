<template>
	<view class="content">
		<view class="address_list" v-for="(item, index) in addressList" :key="index">
			<view class="head" @click="gotoBack(item)">
				<image src="../../static/home/dizhi3.png" mode=""></image>
				<view class="info">
					<text>收货人:&nbsp;{{ item.userName }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.userPhone }}</text>
					<text>收货地址:&nbsp;{{ item.province }}-{{ item.city }}-{{ item.area }}{{ item.addressLine1 }}</text>
				</view>
			</view>
			<view class="footer">
				<image class="img_1" v-if="!item.isDefault" src="../../static/home/sheweimoren_18.png" mode=""></image>
				<image class="img_1" v-else src="../../static/home/morendizhi_07.png" mode=""></image>
				<text @click="isDefault(item)">{{ item.isDefault ? '默认地址' : '设为默认' }}</text>
				<image class="img_2" src="../../static/home/bianji_09.png" mode=""></image>
				<text @click="edit(item)">编辑</text>
				<image class="img_3" src="../../static/home/shanchu_07.png" mode=""></image>
				<text @click="Delete(item.addressId)">删除</text>
			</view>
		</view>
		<navigator class="btn" url="/pages/address/address">添加地址</navigator>
	</view>
</template>

<script>
import { getUserAddressListByUserId, delAddById, updAddDefaultById } from '@/request/API/index.js';
import { mapState } from 'vuex';
export default {
	data() {
		return {
			moren: false,
			addressList: [] //地址列表
		};
	},
	onLoad() {},
	onShow() {
		this.getUserAddressListByUserId(this.userId);
	},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		//设置取消默认
		isDefault(item) {
			let params = {
				addressId: item.addressId,
				userId: this.userId,
				isDefault: item.isDefault ? 0 : 1
			};
			updAddDefaultById(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
					this.getUserAddressListByUserId(this.userId);
				}
			});
		},
		gotoBack(item) {
			let params = {
				addressId: item.addressId,
				userId: this.userId,
				isDefault: item.isDefault ? 0 : 1
			};
			updAddDefaultById(params).then(res => {
				if (res.data.code == 0) {
					uni.navigateBack({
						data: 1
					});
				}
			});
		},
		//编辑
		edit(item) {
			let params = {
				addressId: item.addressId,
				userName: item.userName, //姓名
				userPhone: item.userPhone, //电话
				addressLine1: item.addressLine1, //地址
				location_a: item.province, //省
				location_b: item.city, //市
				location_c: item.area //区
			};
			uni.navigateTo({
				url: '/pages/address/address?params=' + JSON.stringify(params)
			});
		},
		//删除
		Delete(id) {
			let params = {
				addressId: id,
				userId: this.userId
			};
			delAddById(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
					this.getUserAddressListByUserId(this.userId);
				}
			});
		},
		//用户地址列表
		getUserAddressListByUserId(id) {
			getUserAddressListByUserId(id).then(res => {
				if (res.data.code == 0) {
					this.addressList = res.data.data;
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	background: #f7f7f7;
	.address_list {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		.head {
			background-color: #ffffff;
			height: 158upx;
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid #dddddd;
			image {
				height: 50upx;
				width: 50upx;
			}
			.info {
				width: 85%;
				display: flex;
				flex-direction: column;
			}
		}
		.footer {
			height: 70upx;
			width: 100%;
			padding: 0 20upx;
			display: flex;
			align-items: center;
			background-color: #ffffff;
			.img_1 {
				height: 35upx;
				width: 35upx;
				margin: 0 20upx;
			}
			.img_2 {
				margin-left: 210upx;
				margin-right: 10upx;
				height: 35upx;
				width: 35upx;
			}
			.img_3 {
				margin-left: 30upx;
				margin-right: 10upx;
				height: 35upx;
				width: 35upx;
			}
		}
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
