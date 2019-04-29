<template>
	<view class="content">
		<view class="head">
			<image :src="imgURl + product.img" mode=""></image>
			<view class="msg">
				<text>{{ product.productName }}</text>
				<text>{{ product.descript }}</text>
			</view>
		</view>
		<view class="title">
			<image src="../../static/home/dianpupingfen_03.jpg" mode=""></image>
			<text>店铺评分</text>
		</view>
		<view class="rate">
			<view>
				<text>描述相符</text>
				<uni-rate size="25" v-model="rate" @change="getrate($event)"></uni-rate>
			</view>
			<view>
				<text>服务态度</text>
				<uni-rate size="25" v-model="rate2"  @change="getrate2($event)"></uni-rate>
			</view>
		</view>
		<view class="btn2" @click="commemt()">立即评价</view>
	</view>
</template>

<script>
import uniRate from '../../components/uni-rate.vue';
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { addComment } from '@/request/API/product.js';
export default {
	components: {
		uniRate
	},
	data() {
		return {
			rate: 0,
			rate2: 0,
			product: {}
		};
	},
	onLoad(options) {
		if (options.params) {
			this.product = JSON.parse(options.params);
		}
		this.imgURl = imgURl;
	},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		getrate(e) {
			this.rate = e.value;
		},
		getrate2(e) {
			this.rate2 = e.value;
		},
		commemt() {
			console.log(this.rate, this.rate2);
			let params = {
				productId: this.product.productId,
				orderId: this.product.orderId,
				userId: this.userId,
				commentStar: this.rate,
				upvoteNum: this.rate2
			};
			addComment(params).then(res => {
				if(res.data.code==0){
					uni.showToast({
						title:'评价成功',
						duration:1500,
					})
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
	.head {
		padding: 20upx;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1px solid #dddddd;
		image {
			width: 130upx;
			height: 110upx;
		}
		.msg {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 20upx;

			text:first-of-type {
				font-weight: bold;
			}
			text:last-of-type {
				color: #999999;
			}
		}
	}
	.title {
		padding: 20upx;
		width: 100%;
		display: flex;
		align-items: center;
		image {
			margin-right: 30upx;
			height: 40upx;
			width: 40upx;
		}
	}
	.rate {
		padding: 20upx;
		color: #999999;
		margin-bottom: 30upx;
		text {
			margin-right: 20upx;
		}
		view {
			margin-top: 20upx;
			display: flex;
			align-items: center;
		}
	}
	.btn2 {
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
</style>
