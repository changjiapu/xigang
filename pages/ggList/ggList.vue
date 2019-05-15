<template>
	<view class="content">
<!-- 		<view class="fb"></view> -->
		<view class="list" v-for="(item, index) in ggList" :key="index" @click="gotoDetail(item.id)">
			<image :src="imgURl + item.imageId" mode=""></image>
			<view class="msg">
				<text>{{item.title}}</text>
				<text>{{item.content}}</text>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { baseURL, imgURl } from '../../common/config/index.js';
import { getNoticeList } from '@/request/API/product.js';
export default {
	data() {
		return {
			pageNo: 1, //页码
			ggList: [], //公告列表
			imgURl: ''
		};
	},
	onLoad() {
		this.imgURl = imgURl;
		this.getNoticeList(this.pageNo, 10);
	},
	//上拉加载
	onReachBottom() {
		this.pageNo++;
		this.getNoticeList(this.pageNo, 10);
	},
	methods: {
		//获取公告列表
		getNoticeList(pageNo, pageSize) {
			getNoticeList(pageNo, pageSize).then(res => {
				if (res.data.data.list.length == 0) {
					uni.showToast({
						title: '没有更多数据了',
						icon: 'none',
						duration: 1000
					});
				}
				this.ggList = [...this.ggList, ...res.data.data.list];
			});
		},
		gotoDetail(id) {
			uni.navigateTo({
				url: '/pages/ggDetail/ggDetail?id='+id
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	.fb {
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		text-align: right;
		padding-right: 20upx;
		background-color: #f7f7f7;
		box-sizing: border-box;
	}
	.list {
		padding: 0 20upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 180upx;
		width: 100%;
		border-bottom: 1px solid #dddddd;
		image {
			height: 120upx;
			width: 210upx;
		}
		.msg {
			margin-left: 20upx;
			flex: 1;
			text {
				display: block;
			}
			text:first-of-type {
				font-weight: bold;
			}
			text:last-of-type {
				color: #999999;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}
	}
}
</style>
