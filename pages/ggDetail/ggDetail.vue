<template>
	<view class="content">
		<image :src="imgURl+detail.imageId" mode=""></image>
		<text>
			&nbsp;&nbsp;{{detail.content}}
		</text>
		<text class="right" v-if="detail.userName">联系人:{{detail.userName}}</text>
		<text class="right" v-if="detail.phone">联系电话:{{detail.phone}}</text>
		<text class="right" v-if="detail.address">联系地址:{{detail.address}}</text>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { getNoticeById } from '@/request/API/product.js';
export default {
	data() {
		return {
			detail:{},
			imgURl:'',
		};
	},
	onLoad(options) {
		this.imgURl=imgURl
		this.getNoticeById(options.id);
	},
	methods: {
		//公告信息
		getNoticeById(id) {
			getNoticeById(id).then(res => {
				if(res.data.code==0){
					this.detail=res.data.data
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 28upx;
	width: 100%;
	display: flex;
	flex-direction: column;
	image {
		height: 333upx;
		width: 100%;
	}
	text {
		box-sizing: border-box;
		padding: 20upx 10upx;
		display: inline-block;
		color: #999999;
		text-indent: 50upx;
	}
	.right{
		padding-right: 20upx;
		width: 100%;
		text-align: right;
	}
}
</style>
