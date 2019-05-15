<template>
	<view class="content">
		<view class="seach">
			<view class="input">
				<image src="../../static/home/sousuo_06.png" mode=""></image>
				<input type="text" v-model="search" placeholder="请输入要搜索的商品" @confirm="searchShop" @focus="gotoDetaill" />
			</view>
		</view>
		<view class="liubai"></view>
		<view class="container" :style="{height:wHeight+150+'px'}">
			<view class="left" :style="{height:wHeight+150+'px'}">
				<text :class="{ active: tabs == index }" v-for="(item, index) in fenleiList" :key="index" @click="currentTabs(index)">{{ item.categoryName }}</text>
			</view>
			<view class="fenlei" :style="{height:wHeight+150+'px'}">
				<view class="item" v-for="(item, index) in productList" :key="index" @click="gotoShopList(item.productId)">
					<image :src="imgURl + item.imgList[0]" mode=""></image>
					<text>{{ item.productName }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getProductByCategoryId } from '@/request/API/product.js';
export default {
	data() {
		return {
			search: '',
			wHeight: '',
			tabs: 0,
			fenleiList: [],
			productList: [],
			imgURl: ''
		};
	},
	onLoad() {
		this.imgURl = imgURl;
		this.getProductByCategoryId();
		var res = uni.getSystemInfoSync();
		this.wHeight =res.windowWidth;
	},
	methods: {
		getProductByCategoryId() {
			getProductByCategoryId().then(res => {
				if (res.data.code == 0) {
					this.fenleiList = res.data.data;
					this.productList = this.fenleiList[0].productList;
				}
			});
		},
		currentTabs(index) {
			(this.tabs = index), (this.productList = this.fenleiList[index].productList);
		},
		gotoShopList(id) {
			uni.navigateTo({
				url: '/pages/product_detaill/product_detaill?id=' + id
			});
		},
		gotoDetaill() {
			uni.navigateTo({
				url: '/pages/suiguo_list/suiguo_list?'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	.seach {
		.input {
			margin: 0 auto;
			color: #000000;
			height: 80upx;
			width: 70%;
			font-size: 22upx;
			display: flex;
			align-items: center;
			background-color: #f7f7f7;
			padding: 0 20upx;
			border-radius: 10upx;
			input {
				width: 100%;
			}
			image {
				height: 35upx;
				width: 35upx;
			}
		}
	}
	.liubai {
		margin: 10upx 0;
		height: 10upx;
		width: 100%;
		background-color: #f7f7f7;
	}
	.container {
		width: 100%;
		display: flex;
		.left {
			overflow-y:scroll;
			background-color: #f7f7f7;
			display: flex;
			flex-direction: column;
			// align-items: center;
			width: 25%;
			text {
				text-align: center;
				width: 100%;
				height: 90upx;
				line-height: 90upx;
				&.active {
					background-color: #ffffff;
					color: red;
				}
			}
		}
		.fenlei {
			width: 80%;
			display: flex;
			flex-wrap: wrap;
			overflow-y:scroll;
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				width: 180upx;
				height: 140upx;
				font-size: 28upx;
				// margin-left: 70upx;
				margin-top: 20upx;
				image {
					margin-bottom: 10upx;
					height: 90upx;
					width: 90upx;
					border-radius: 100%;
				}
			}
		}
	}
}
</style>
