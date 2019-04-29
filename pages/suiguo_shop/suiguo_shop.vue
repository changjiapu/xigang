<template>
	<view class="suiguo_shop">
		<view class="shop_list" v-for="(item, index) in shopList" :key="index" @click="gotoDetaill(item.shopId)">
			<image :src="imgURl+item.shopLogo"></image>
			<view class="shop_msg">
				<text>{{item.shopName}}</text>
				<text>{{item.shopDesc}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getShopByCategoryId,getAllShopByContent } from '@/request/API/product.js';
export default {
	name: 'suiguo_shop',
	data() {
		return {
			shopList:[],
			imgURl:''
		};
	},
	onLoad(options) {
		this.imgURl=imgURl
		//分类页面进来
		if(options.id){
			this.getShopByCategoryId(options.id);
		}
		//搜索页进来
		if(options.search){
			this.getAllShopByContent(1,20,options.search)
		}
		
	},
	methods: {
		//搜索
		getAllShopByContent(pageNo,pageSize,content){
			getAllShopByContent(pageNo,pageSize,content).then(res=>{
						if (res.data.code == 0) {
					this.shopList = res.data.data.list;
				}
			})
		},
		//获取店铺列表
		getShopByCategoryId(id) {
			getShopByCategoryId(id).then(res => {
				if (res.data.code == 0) {
					this.shopList = res.data.data;
				}
			});
		},
		gotoDetaill(id) {
			uni.navigateTo({
				url: '/pages/suiguo_list/suiguo_list?id='+id
			});
		}
	}
};
</script>

<style lang="less" scoped>
.suiguo_shop {
	width: 100%;
	font-size: 26upx;
	background-color: #f7f7f7;
	.shop_list {
		margin-top: 20upx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		height: 200upx;
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		image {
			height: 150upx;
			width: 150upx;
		}
		.shop_msg {
			width: 500upx;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			text:first-of-type {
				font-weight: bold;
			}
			text:last-of-type {
				margin-top: 15upx;
				color: rgb(158, 158, 158);
			}
		}
	}
}
</style>
