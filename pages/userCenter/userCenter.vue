<template>
	<view class="content">
		<view class="head">
			<!-- 		<image class="img_1" :src="imgURl+imglist" mode=""></image> -->
			<image v-if="imglist" class="img_1" :src="imgURl + imglist" mode=""></image>
			<image v-else class="img_1" src="../../static/home/touxiang_03.png" mode=""></image>
			<view class="msg">
				<text>{{ nickName ? nickName : '未填写' }}</text>
				<text>{{ spec_name ? spec_name : '未填写' }}</text>
			</view>
			<image class="img_2" src="../../static/home/baigou.png" mode="" @click="gotoUserMsg"></image>
		</view>
		<view class="tabs">
			<navigator class="item" url="/pages/addressList/addressList">
				<image src="../../static/home/dizhiguanli_07.png" mode=""></image>
				<text>地址管理</text>
			</navigator>
			<navigator class="item" url="/pages/collect/collect">
				<image src="../../static/home/wodeshoucnag_10.png" mode=""></image>
				<text>我的收藏</text>
			</navigator>
			<navigator class="item" url="/pages/zhuji/zhuji">
				<image src="../../static/home/shangpinzuji_09.png" mode=""></image>
				<text>商品足迹</text>
			</navigator>
			<navigator class="item" @click="fenxiang()">
				<image src="../../static/home/wodefenxiang_15.png" mode=""></image>
				<text>我的分享</text>
			</navigator>
		</view>
		<navigator class="GG" url="/pages/ggList/ggList"><image src="../../static/home/dianpugonggao_03.png" mode=""></image></navigator>
		<view class="list">
			<navigator class="list_item" url="/pages/merchant/merchant">
				<image src="../../static/home/shangjiaruzhu_26.png" mode=""></image>
				<text>商家入驻</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/complain/complain">
				<image src="../../static/home/tousujianyi_29.png" mode=""></image>
				<text>投诉建议</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/callCenter/callCenter">
				<image src="../../static/home/kefuzhongxin_33.png" mode=""></image>
				<text>客服中心</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/Account_center/Account_center">
				<image src="../../static/home/zhanghuanquan_37.png" mode=""></image>
				<text>账户安全</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/system_setup/system_setup">
				<image src="../../static/home/xitongshezhi_41.png" mode=""></image>
				<text>系统设置</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
		</view>
		<view class="tankuang" v-if="isShow">
			<view class="container1">
				<view class="close" @click="bottomClose">
					<text>分享</text>
					<image class="close2" src="../../static/home/tuichu_07.png" mode=""></image>
				</view>
				<view class="share">
					<view class="btn" open-type="share">
						<view><image src="../../static/home/pengyouquan_05.png"></image></view>
						<text>分享给朋友</text>
					</view>
					<view class="btn" @click="ontophaibao">
						<view><image src="../../static/home/weixin_03.png"></image></view>
						<text>分享朋友圈</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { mapState } from 'vuex';
import { getUserById } from '@/request/API/index.js';
export default {
	data() {
		return {
			imgURl:'',
			imglist: '', //用户头像
			nickName: '', //用户昵称
			spec_name: '', //用户签名
			isShow: false
		};
	},
	onLoad() {
		this.imgURl = imgURl;
		this.getUserById();
	},
	methods: {
		//获取用户信息
		getUserById() {
			getUserById(this.userId).then(res => {
				this.imglist = res.data.data.userPhoto;
				this.spec_name = res.data.data.specName;
				this.nickName = res.data.data.nickName;
			});
		},
		bottomClose() {
			this.isShow = false;
		},
		gotoUserMsg() {
			uni.navigateTo({
				url: '/pages/userMsg/userMsg'
			});
		},
		fenxiang() {
			this.isShow = true;
		}
	},
	computed: {
		...mapState(['userId'])
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	background-color: #f7f7f7;
	.head {
		padding: 0 30upx;
		box-sizing: border-box;
		height: 220upx;
		width: 100%;
		color: #ffffff;
		background-color: #6d71d5;
		display: flex;
		align-items: center;
		// justify-content: space-between;
		.img_1 {
			height: 130upx;
			width: 130upx;
		}
		.img_2 {
			height: 40upx;
			width: 40upx;
		}
		.msg {
			margin-left: 20upx;
			width: 70%;
			display: flex;
			flex-direction: column;
			text:first-of-type {
				font-weight: bold;
			}
		}
	}
	.tabs {
		border-radius: 10upx;
		padding: 0 20upx;
		box-sizing: border-box;
		margin: 0 auto;
		width: 90%;
		height: 160upx;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				height: 45upx;
				width: 35upx;
			}
		}
	}
	.GG {
		width: 90%;
		margin: 20upx auto;
		height: 220upx;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.list {
		width: 90%;
		margin: 0 auto;
		padding: 0 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 20upx;
		margin-bottom: 30upx;
		.list_item {
			height: 95upx;
			width: 100%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #dddddd;
			image:first-of-type {
				height: 40upx;
				width: 40upx;
			}
			image:last-of-type {
				height: 30upx;
				width: 30upx;
			}
			text {
				margin-left: 5%;
				width: 85%;
			}
		}
	}

	.tankuang {
		height: 100%;
		width: 100%;
		background-color: rgba(0, 0, 0, 0.6);
		z-index: 103;
		position: absolute;
		right: 0;
		bottom: 0;
	}

	.tankuang .container1 {
		background-color: #eee;
		height: 35%;
		width: 100%;
		position: fixed;
		right: 0;
		bottom: 0;
		animation: fenxiang 0.4s;
		overflow: hidden;
	}

	@keyframes fenxiang {
		from {
			height: 0%;
		}

		to {
			height: 35%;
		}
	}

	.tankuang .container1 .share {
		height: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}

	.tankuang .container1 .share .btn {
		font-size: 28upx;
		height: 200upx;
		width: 330upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: rgba(0, 0, 0, 0);
	}

	.tankuang .container1 .share .btn::after {
		border: none;
	}

	.tankuang .container1 .share image {
		width: 100upx;
		height: 100upx;
	}

	.tankuang .container1 .close {
		background-color: #fff;
		height: 100upx;
		width: 100%;
		line-height: 100upx;
		text-align: center;
		position: relative;
		.close2 {
			position: absolute;
			right: 30upx;
			top: 30upx;
			height: 40upx;
			width: 40upx;
		}
	}
}
</style>
