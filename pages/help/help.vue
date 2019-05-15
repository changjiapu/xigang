<template>
	<view class="content">
		<text class="title">常见问题</text>
		<text v-for="(item,index) in helpList" :key='index'  @click="gotoDeatail(item.helpTitle,item.helpInstructions)">{{item.helpTitle}}</text>

		<view class="btn" @click="callUp()">
			<image src="../../static/home/dianhua_07.png" mode=""></image>
			<text>客服热线：029-2678386</text>
		</view>
	</view>
</template>

<script>
import { getSysHelpList } from '@/request/API/index.js';
export default {
	data() {
		return {
			pageNo:1,
			helpList:[]
		};
	},
	onLoad() {
		this.getSysHelpList(this.pageNo,10)
	},
	methods: {
		getSysHelpList(pageNo,pageSize){
			getSysHelpList(pageNo,pageSize).then(res=>{
				if(res.data.code==0){
					this.helpList=res.data.data.list
				}
			})
		},
		callUp() {
			uni.makePhoneCall({
				phoneNumber: '029-2678386'
			});
		},
		gotoDeatail(helpTitle,helpInstructions){
			uni.navigateTo({
				url:'/pages/helpDetail/helpDetail?helpTitle='+helpTitle+'&helpInstructions='+helpInstructions
			})
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	padding: 20upx;
	display: flex;
	overflow-x: hidden;
	flex-direction: column;
	text {
		height: 90upx;
		line-height: 90upx;
	}
	.title{
		margin-left: 20upx;
		position: relative;
	}
	.title::after {
		position: absolute;
		top: 20upx;
		left: -20upx;
		content: '';
		height: 50%;
		width: 5upx;
		background-color: red;
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
