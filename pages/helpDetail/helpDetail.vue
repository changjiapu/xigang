<template>
	<view class="content">
		<text class="title">Q:{{helpTitle}}</text>
		<view class="msg">
			<text class="left">A:</text>
			<view class="msg_list">
				<text>{{helpInstructions}}</text>

			</view>
		</view>
		<view class="btn" @click="callUp()">
			<image src="../../static/home/dianhua_07.png" mode=""></image>
			<text>客服热线：029-2678386</text>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			helpTitle:'',
			helpInstructions:'',
		};
	},
	onLoad(options) {
		this.helpTitle=options.helpTitle
		this.helpInstructions=options.helpInstructions
	},
	methods: {
		callUp() {
			uni.makePhoneCall({
				phoneNumber: '029-2678386'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	padding: 20upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	.title {
		width: 100%;
		height: 95upx;
		line-height: 95upx;
		border-bottom: 1px solid #dddddd;
		font-size: 40upx;
	}
	.msg {
		margin-top: 20upx;
		display: flex;
		.left {
			font-size: 40upx;
		}
		.msg_list {
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			color: #999999;
		}
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 95upx;
		width: 80%;
		margin: auto;
		background-color: #6d71d5;
		margin-top: 30upx;
		border-radius: 10upx;
		color: #ffffff;
		image {
			height: 40upx;
			width: 40upx;
		}
	}
}
</style>
