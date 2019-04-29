<template>
	<view class="content">
		<image :src="imgURl+detail.imageId" mode=""></image>
		<text>
			&nbsp;&nbsp;{{detail.content}}
		</text>
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
	image {
		height: 333upx;
		width: 100%;
	}
	text {
		padding: 20upx;
		display: inline-block;
		color: #999999;
		text-indent: 50upx;
	}
}
</style>
