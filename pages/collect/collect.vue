<template>
	<view class="content">
		<view class="head" >
			<text>共{{ productList.length }}个商品</text>
			<text @click="editorChange()">{{ editor ? '完成' : '管理' }}</text>
		</view>
		<view class="collect_item" v-for="(item, index) in productList" :key="index" v-if="productList.length != 0" >
			<view class="left" v-if="editor">
				<image v-if="item.ick" src="../../static/home/morendizhi_07.png" mode="" @click="isIck(index)"></image>
				<image v-else src="../../static/home/sheweimoren_18.png" mode="" @click="isIck(index)"></image>
			</view>
			<view class="center"><image :src="imgURl + item.product.imgList[0]" mode=""></image></view>
			<view class="right">
				<text class="title">{{ item.product.productName }}</text>
				<text class="title2">{{ item.product.descript }}</text>
				<view class="price">
					<text>￥{{ item.product.price }}元/斤</text>
					<text class="GG" v-if="editor" @click="gotoDetail(item.productId)">进店逛逛</text>
				</view>
			</view>
		</view>
		<empty-data v-if="productList.length == 0"></empty-data>
		<view class="btn" v-if="editor">
			<image v-if="isShow" src="../../static/home/sheweimoren_18.png" mode="" @click="sellAll()"></image>
			<image v-else src="../../static/home/morendizhi_07.png" mode="" @click="sellAll()"></image>
			<text @click="sellAll()">全选</text>
			<text @click="Delete()">删除</text>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { queryCollectionList, delCollection } from '@/request/API/product.js';
export default {
	data() {
		return {
			imgURl:'',
			editor: false,
			isShow: true, //全选非全选
			pages: 1, //页码
			productList: [] //收藏列表
		};
	},
	computed: {
		...mapState(['userId'])
	},
	onLoad() {
		this.imgURl = imgURl;
		this.queryCollectionList(this.userId, this.pages, 10);
	},
	onReachBottom() {
		this.pages++;
		this.queryCollectionList(this.userId, this.pages, 10);
	},
	methods: {
		//获取收藏列表
		queryCollectionList(userId, pageNo, pageSize) {
			queryCollectionList(userId, pageNo, pageSize).then(res => {
				if (res.data.code == 0) {
					if (res.data.data.list.length == 0) {
						uni.showToast({
							title: '没有更多数据了',
							icon: 'none',
							duration: 1000
						});
					}
					for (let item of res.data.data.list) {
						Object.assign(item, { ick: false });
					}
					this.productList = [...this.productList, ...res.data.data.list];
				}
			});
		},
		isIck(index) {
			this.productList[index].ick = !this.productList[index].ick;
		},
		editorChange() {
			this.editor = !this.editor;
		},
		Delete() {
			let aaa = [];
			for (let item of this.productList) {
				if (item.ick) {
					aaa.push(item.collectId);
				}
			}
			let collectId = aaa.join(',');
			console.log(collectId);
			delCollection(this.userId, collectId).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '删除成功',
						icon: 'none',
						duration: 1000
					});
					this.pages = 1;
					this.productList = [];
					this.queryCollectionList(this.userId, this.pages, 10);
				}
			});
		},
		gotoDetail(id){
			uni.navigateTo({
				url: '/pages/product_detaill/product_detaill?id=' + id
			});
		},
		sellAll() {
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
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	.head {
		color: #999999;
		height: 85upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20upx;
		box-sizing: border-box;
		text:last-of-type {
			color: #ef7f89;
		}
	}
	.collect_item {
		display: flex;
		align-items: center;
		padding: 20upx;
		box-sizing: border-box;
		.left {
			image {
				height: 35upx;
				width: 35upx;
			}
		}
		.center {
			height: 200upx;
			width: 200upx;
			margin-left: 20upx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.right {
			flex: 1;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			.title {
				font-weight: bold;
			}
			.title2 {
				margin-top: 20upx;
				color: #999999;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			.price {
				margin-top: 20upx;
				display: flex;
				justify-content: space-between;
				text:first-of-type {
					color: #ef7f89;
					font-weight: bold;
				}
				.GG {
					color: #999999;
					padding: 10upx 20upx;
					border: 1px solid #999999;
					border-radius: 20upx;
				}
			}
		}
	}
	.btn {
		height: 110upx;
		width: 100%;
		padding: 0 30upx;
		display: flex;
		z-index: 9999;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #ffffff;
		border-top: 1px solid #dddddd;
		image {
			height: 35upx;
			width: 35upx;
		}
		text {
			margin-left: 20upx;
		}
		text:last-of-type {
			color: #ffffff;
			margin-left: 350upx;
			padding: 20upx 80upx;
			background-color: #6d71d5;
			border-radius: 10upx;
		}
	}
}
</style>
