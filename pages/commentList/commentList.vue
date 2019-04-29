<template>
	<view class="content">
		<view class="item" v-for="(item, index) in commentList" :key="index">
			<image class="h_img" :src="imgURl+item.userPhoto" mode=""></image>
			<text>{{item.nickName}}</text>
			<image class="x_img" src="../../static/home/wujiaoxing_03.png" mode="" v-for="(item2, index2) in item.commentStar" :key="index2"></image>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getCommentList } from '@/request/API/product.js';
export default {
	data() {
		return {
			commentList: [],
			pageNo: 1,
			productId: '',
			imgURl:'',
		};
	},
	onLoad(options) {
		this.productId = options.id;
				this.imgURl = imgURl;
		this.getCommentList(this.productId, this.pageNo, 10);
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.getCommentList(this.productId, this.pageNo, 10);
	},
	methods: {
		//获取评论列表
		getCommentList(productId, pageNo, pageSize) {
			getCommentList(productId, pageNo, pageSize).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					this.commentList = [...this.commentList, ...res.data.data.list];
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
	.item {
		padding: 20upx;
		box-sizing: border-box;
		width: 100%;
		margin-top: 10upx;
		display: flex;
		align-items: center;
		color: #999999;
		border-bottom: 1px solid #eeeeee;
		.h_img {
			height: 80upx;
			width: 80upx;
		}
		.x_img {
			margin-left: 10upx;
			height: 30upx;
			width: 30upx;
		}
		text {
			margin-right: 280upx;
		}
	}
}
</style>
