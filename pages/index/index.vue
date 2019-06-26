<template>
	<view class="content">
		<!-- 头部 -->
		<view class="head">
			<view class="left">
				<image src="../../static/home/dizhi4.png"></image>
				<text>西安</text>
			</view>
			<view class="input">
				<image src="../../static/home/sousuo_06.png" mode=""></image>
				<input type="text" v-model="search" placeholder="请输入要搜索的店铺" @confirm="searchShop" />
			</view>
			<navigator class="img" url="/pages/fenlei/fenlei"><image src="../../static/home/fenlei_06.png" mode=""></image></navigator>
		</view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item, index) in bannerList" :key="index" @click="gotoDetail2(item.productId)">
				<image :src="imgURl + item.productImage" mode=""></image>
			</swiper-item>
		</swiper>
		<swiper class="gonggao" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000" vertical="true" v-if="gonggaoList.length != 0">
			<swiper-item v-for="(item, index) in gonggaoList" :key="index" @click="gotoDetail(item.id)">
				<view class="msg">
					<text class="title">最新公告 {{ item.title }}</text>
					<text class="neirong">{{ item.content }}</text>
					<image src="../../static/home/tongzhigengduo_03.png" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="fenlei">
			<view class="item" v-for="(item, index) in classify" :key="index" @click="gotoShopList(item.categoryId)">
				<image :src="imgURl + item.categoryIcon" mode=""></image>
				<text>{{ item.categoryName }}</text>
			</view>
		</view>
		<!-- 				<view class="product_title">
			<text>热卖商品</text>
			<text>更多 ></text>
		</view>
		<scroll-view class="scroll-view" scroll-x>
			<view class="list-item" v-for="(item, index) in 6" :key="index" @click="gotoDetail()">
				<image src="../../static/home/tongzhi_03.png" mode=""></image>
				<view class="list_msg">
					<text>新鲜黄瓜</text>
					<text>新鲜蔬菜商品详情</text>
					<text>￥2.5元/斤</text>
					<image class="cart" src="../../static/home/gouwuche_44.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
		<view class="liubai"></view>
				<view class="gonggao_2">
			<view class="title">
				<image src="../../static/home/gonggaozhanshi_38.png" mode=""></image>
				<text>近期公告展示</text>
			</view>
			<swiper class="gonggao_2_swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item><image src="../../static/home/shuichan_17.png" mode=""></image></swiper-item>
				<swiper-item><image src="../../static/home/ganhuo_26.png" mode=""></image></swiper-item>
				<swiper-item><image src="../../static/home/gonggaozhanshi_38.png" mode=""></image></swiper-item>
			</swiper>
		</view>
				<view class="product_title">
			<text>新品推荐</text>
			<text>更多 ></text>
		</view>
				<view class="product_list">
			<view class="list_item" v-for="(item, index) in 6" :key="index">
				<image src="../../static/home/roushi_27.png" mode=""></image>
				<text>以纯</text>
				<text>精美连衣裙</text>
				<view class="price">
					<text>￥299元</text>
					<image src="../../static/home/gouwuche_44.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="product_title">
			<text>热门店铺</text>
			<text>更多 ></text>
		</view>
		<view class="shop_list">
			<view class="list_item" v-for="(item, index) in 3" :key="index">
				<image src="../../static/home/dianpu_img.jpg" mode=""></image>
				<view class="shop_msg">
					<text class="title">水果超市</text>
					<text class="jieshao">最新鲜的橙子今日特卖进店抢购啦最新鲜的橙子今日特卖进店抢购啦</text>
					<view class="btn">
						<text>进店逛逛</text>
						<text>凤城七路</text>
					</view>
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { getProductSlidesList, getNoticeList, getProductCategory } from '@/request/API/product.js';
export default {
	data() {
		return {
			version: '',
			search: '',
			imgURl: '',
			bannerList: [], //轮播图
			gonggaoList: [], //公告列表
			classify: [], //分类列表
			city: '西安'
		};
	},
	onLoad() {
		const userId = uni.getStorageSync('userId');
		const token = uni.getStorageSync('token');
		if (userId) {
			this.$store.commit('SET_USERID', userId);
			this.$store.commit('SET_TOKEN', token);
		} else {
			// uni.reLaunch({
			// 	url: '/pages/logn/logn'
			// });
		}
		this.imgURl = imgURl;
		let _this = this;
		// //#ifdef APP-PLUS
		// plus.geolocation.getCurrentPosition(function(position) {
		// 	console.log(JSON.stringify(position));
		// 	_this.city = position.address.city;
		// });
		// //#endif
		this.version = plus.runtime.version;
		uni.getSystemInfo({
			success: res => {
				console.log(res.platform);
				//检测当前平台，如果是安卓则启动安卓更新
				if (res.platform == 'android') {
					this.AndroidCheckUpdate();
				}
			}
		});
	},
	onShow() {
		this.getProductSlidesList();
		this.getNoticeList();
		this.getProductCategory();
	},
	methods: {
		//检查版本更新
		AndroidCheckUpdate() {
			uni.request({
				url: 'http://114.115.211.170:8018/system/version/getNewVersionNumber?type=1',
				method: 'GET',
				data: {},
				success: res => {
						console.log(this.version)
						console.log(res.data.data)
					if (res.data.data > this.version) {
						if (plus.networkinfo.getCurrentType() != 3) {
							uni.showToast({
								title: '有新的版本发布，检测到您目前非Wifi连接，为节约您的流量，程序已停止自动更新，将在您连接WIFI之后重新检测更新。',
								mask: false,
								duration: 7000,
								icon: 'none'
							});
							return;
						}
						uni.showToast({
							title: '有新的版本发布，检测到您目前为Wifi连接，程序已启动自动更新。新版本下载完成后将自动弹出安装程序。',
							mask: false,
							duration: 7000,
							icon: 'none'
						});
						var dtask = plus.downloader.createDownload('http://114.115.211.170:8008/app/yonghu.apk', {}, function(d, status) {
							// 下载完成
							if (status == 200) {
								plus.runtime.install(plus.io.convertLocalFileSystemURL(d.filename), {}, {}, function(error) {
									uni.showToast({
										title: '安装失败',
										mask: false,
										icon: 'none',
										duration: 1500
									});
								});
							} else {
								uni.showToast({
									title: '更新失败',
									mask: false,
									icon: 'none',
									duration: 1500
								});
							}
						});
						dtask.start();
					}
				},
				fail: () => {},
				complete: () => {}
			});
		},
		gotoDetail2(id) {
			uni.navigateTo({
				url: '/pages/product_detaill/product_detaill?id=' + id
			});
		},
		//轮播图
		getProductSlidesList() {
			getProductSlidesList().then(res => {
				if (res.data.code == 0) {
					this.bannerList = res.data.data;
				}
			});
		},
		//公告列表
		getNoticeList() {
			getNoticeList(1, 10).then(res => {
				if (res.data.code == 0) {
					this.gonggaoList = res.data.data.list;
				}
			});
		},
		//分类列表
		getProductCategory() {
			getProductCategory(1, 1).then(res => {
				this.classify = res.data.data.cateGories;
			});
		},
		//去公告详情
		gotoDetail(id) {
			uni.navigateTo({
				url: '/pages/ggList/ggList'
			});
		},
		gotoShopList(id) {
			uni.navigateTo({
				url: '/pages/suiguo_shop/suiguo_shop?id=' + id
			});
		},
		searchShop() {
			uni.navigateTo({
				url: '/pages/suiguo_shop/suiguo_shop?search=' + this.search
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 22upx;
	.head {
		color: #ffffff;
		z-index: 999;
		background-color: #6d71d5;
		// background: linear-gradient(to right,#16E2D6,#3DADF3);
		position: fixed;
		top: 0;
		width: 100%;
		padding-top: 30upx;
		height: 125upx;
		display: flex;
		// align-items: center;
		justify-content: space-around;
		font-size: 30upx;
		.left {
			margin-top: 35upx;
			height: 80upx;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				height: 40upx;
				width: 40upx;
			}
		}
		.input {
			color: #000000;
			margin-top: 35upx;
			height: 70upx;
			width: 50%;
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
		.img {
			margin-top: 35upx;
			height: 80upx;
			display: flex;
			align-items: center;
			image {
				height: 45upx;
				width: 45upx;
			}
		}
	}
	.swiper {
		margin-top: 150upx;
		height: 375upx;
		width: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.gonggao {
		position: absolute;
		top: 470upx;
		left: 25upx;
		height: 140upx;
		width: 95%;
		background-image: url('../../static/home/tongzhi_03.png');
		background-size: 100% 100%;
		background-repeat: repeat;
		display: flex;
		// justify-content: center;
		align-items: center;
		.img {
			height: 120upx;
			width: 120upx;
			align-items: center;
			image {
				width: 100upx;
				height: 100upx;
			}
		}
		.msg {
			margin-top: 12upx;
			margin-left: 150upx;
			background-color: #ffffff;
			position: relative;
			// justify-content: center;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 10upx;
			box-sizing: border-box;
			border-radius: 10upx;
			width: 500upx;
			height: 115upx;
			box-sizing: border-box;
			font-size: 26upx;
			.title {
				font-weight: bold;
			}
			.neirong {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: rgb(97, 97, 97);
			}
			image {
				position: absolute;
				top: 40upx;
				right: 0upx;
				height: 36upx;
				width: 36upx;
			}
		}
	}
	.fenlei {
		margin: 80upx 0;
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.item {
			color: #333333;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 140upx;
			font-size: 30upx;
			text-align: center;
			margin-left: 80upx;
			margin-top: 20upx;
			image {
				margin-bottom: 10upx;
				height: 100upx;
				width: 100upx;
				border-radius: 100%;
			}
		}
	}
	.product_title {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 88upx;
		background-color: #f7f7f7;
		padding: 0 20upx;
		text:first-of-type {
			font-size: 34upx;
			font-weight: bold;
			margin-left: 20upx;
			position: relative;
		}
		text:first-of-type::after {
			position: absolute;
			top: 0;
			left: -20upx;
			content: '';
			height: 100%;
			width: 5upx;
			background-color: red;
		}
		text:last-of-type {
			font-size: 22upx;
		}
	}
	.scroll-view {
		height: 450upx;
		white-space: nowrap;
		.list-item {
			margin-top: 25upx;
			display: inline-block;
			height: 400upx;
			width: 320upx;
			border-radius: 10upx;
			box-shadow: 8upx 8upx 8upx #f4f4f4;
			margin-left: 50upx;
			image {
				width: 100%;
				height: 220upx;
			}
			.list_msg {
				position: relative;
				width: 100%;
				box-sizing: border-box;
				padding: 20upx 15upx;
				display: flex;
				flex-direction: column;
				text {
					margin-top: 5upx;
				}
				text:first-of-type {
					font-size: 30upx;
				}
				text:nth-of-type(2) {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 22upx;
					color: rgb(153, 153, 153);
				}
				text:last-of-type {
					font-size: 28upx;
					color: rgb(227, 84, 97);
				}
				.cart {
					position: absolute;
					bottom: 20upx;
					right: 20upx;
					height: 30upx;
					width: 30upx;
				}
			}
		}
	}
	.liubai {
		width: 100%;
		height: 20upx;
		background-color: #f7f7f7;
	}
	.gonggao_2 {
		.title {
			width: 100%;
			box-sizing: border-box;
			height: 70upx;
			padding: 0 20upx;
			display: flex;
			align-items: center;
			image {
				height: 50upx;
				width: 60upx;
			}
		}
		.gonggao_2_swiper {
			height: 220upx;
			width: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.product_list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.list_item {
			width: 200upx;
			margin-left: 35upx;
			text-align: center;
			display: flex;
			flex-direction: column;
			font-size: 30upx;
			margin-top: 40upx;
			text {
				margin: 10upx;
			}
			text:nth-of-type(2) {
				font-size: 22upx;
				color: rgb(153, 153, 153);
			}
			image {
				width: 100%;
				height: 200upx;
			}
			.price {
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image {
					height: 30upx;
					width: 30upx;
				}
			}
		}
	}
	.shop_list {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		.list_item {
			width: 100%;
			height: 200upx;
			display: flex;
			align-items: center;
			margin-top: 40upx;
			image {
				height: 200upx;
				width: 200upx;
			}
			.shop_msg {
				padding-left: 20upx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				.title {
					font-size: 30upx;
					font-weight: bold;
				}
				.jieshao {
					width: 400upx;
					margin-top: 20upx;
					font-size: 28upx;
					color: rgb(153, 153, 153);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.btn {
					margin-top: 10upx;
					font-size: 28upx;
					display: flex;
					justify-content: space-between;
					text:first-of-type {
						padding: 10upx;
						color: rgb(233, 120, 130);
						border: 1px solid #e97882;
						border-radius: 10upx;
					}
					text:last-of-type {
						background-image: url(../../static/home/xiaodizhi_44.png);
						background-repeat: no-repeat;
						background-size: 30upx 30upx;
						background-position: left;
						padding-left: 30upx;
						display: flex;
						align-items: center;
					}
				}
			}
		}
		.list_item:first-of-type {
			margin-top: 10upx;
		}
	}
}
</style>
