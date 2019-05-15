<template>
	<view class="content">
		<view class="head">
			<image :src="imgURl + orderDetail.img" mode=""></image>
			<view class="msg">
				<text class="title">{{ orderDetail.productName }}</text>
				<text>订单号:{{ orderDetail.orderSn }}</text>
				<view>
					<text>{{ orderDetail.updatedTime }}</text>
					<text>{{ orderDetail.productPrice }}x{{ orderDetail.productCount }}</text>
				</view>
			</view>
		</view>
		<view class="cantainer">
			<text class="title">提交凭证</text>
			<textarea class="input" v-model="descContent" placeholder="请描述你的详细问题" />
			<text class="title">上传凭证</text>
			<image src="../../static/home/xiangji_03.jpg" mode="" @click="paizhao()"></image>
			<view class="img_list" v-if="img_list != 0"><image v-for="(item, index) in img_list" :key="index" :src="item" mode="" @click="paizhao()"></image></view>
			<text class="title2">为了我们更好的帮你解决问题,请上传相关照片</text>
		</view>
		<view class="btn" @click="addSaleService()"><text>提交</text></view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { addSaleService } from '@/request/API/product.js';
export default {
	data() {
		return {
			img_list: [],
			img_list2: [],
			orderDetail: {},
			imgURl: '',
			descContent: ''
		};
	},
	onLoad(options) {
		this.imgURl = imgURl;
		this.orderDetail = JSON.parse(options.params);
	},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		paizhao() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					this.img_list = [...this.img_list, ...res.tempFilePaths];
					uni.uploadFile({
						url: baseURL + '/file/upload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							user: 'test',
							file: res.tempFilePaths[0]
						},
						success: uploadFileRes => {
							let aaa = JSON.parse(uploadFileRes.data);
							this.img_list2.push(aaa.data);
						}
					});
				}
			});
		},
		addSaleService() {
			let params = {
				userId: this.userId,
				orderId: this.orderDetail.orderId,
				descContent: this.descContent,
				productImage: this.img_list2.join(',')
			};
			addSaleService(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '申请售后成功',
						icon: 'none',
						duration: 1500
					});
					setTimeout(res => {
						uni.switchTab({
							url: '/pages/order/order'
						});
					}, 2000);
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	background-color: #f7f7f7;
	font-size: 30upx;
	.head {
		padding: 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		display: flex;
		image {
			width: 200upx;
			height: 180upx;
		}
		.msg {
			flex: 1;
			color: #999999;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			.title {
				margin-top: 10upx;
				margin-bottom: 20upx;
				font-weight: bold;
				color: #000000;
			}
			view {
				margin-top: 20upx;
				display: flex;
				justify-content: space-between;
			}
		}
	}
	.cantainer {
		margin-bottom: 20upx;
		margin-top: 20upx;
		width: 100%;
		background-color: #ffffff;
		padding: 20upx;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		.img_list {
			margin-top: 20upx;
			display: flex;
			flex-wrap: wrap;
			image {
				height: 80upx;
				width: 80upx;
				border: 1px solid #dddddd;
			}
		}
		image {
			padding: 20upx;
			height: 60upx;
			width: 60upx;
			border: 1px solid #dddddd;
		}
		.input {
			width: 100%;
			background-color: #f7f7f7;
		}
		.title {
			margin: 10upx 0;
		}
		.title2 {
			margin-top: 20upx;
			color: #999999;
			font-size: 26upx;
		}
	}
	.btn {
		width: 100%;
		background-color: #ffffff;
		text {
			display: block;
			margin-top: 100upx;
			height: 95upx;
			line-height: 95upx;
			width: 80%;
			background-color: #6d71d5;
			margin: auto;
			text-align: center;
			border-radius: 10upx;
			color: #ffffff;
		}
	}
}
</style>
