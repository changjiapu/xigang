<template>
	<view class="content">
		<view class="item3">
			<text>头像</text>
			<view class="right" @click="paizhao">
				<image v-if="imglist" class="tx" :src="imgurl + imglist" mode=""></image>
				<image v-else class="tx" src="../../static/home/touxiang_03.png" mode=""></image>
				<image class="bq" src="../../static/home/gengduo_41.png" mode=""></image>
			</view>
		</view>
		<view class="item">
			<text>用户名</text>
			<input type="text" v-model="userinfo.name" :placeholder="userinfo.name" @blur="nameChange()" />
		</view>
		<view class="item">
			<text>昵称</text>
			<input type="text" value="" v-model="userinfo.nickName" :placeholder="userinfo.nickName" @blur="nickNameChange()" />
		</view>
		<view class="item">
			<text>电话</text>
			<input type="text" value="" v-model="userinfo.userPhone" :placeholder="userinfo.userPhone" @blur="userPhoneChange()" />
		</view>
		<picker mode="selector" @change="bindPickerChange" :range="range">
			<view class="item3">
				<text>性别</text>
				<text>{{ userinfo.userSex == 0 ? '男' : '女' }}</text>
				<view class="right"><image class="bq" src="../../static/home/gengduo_41.png" mode=""></image></view>
			</view>
		</picker>
		<view class="item2">
			<text>个性签名</text>
			<textarea class="text" type="text" v-model="userinfo.spec_name" :placeholder="userinfo.spec_name" @blur="specnameChange()" />
		</view>
	</view>
</template>

<script>
import { baseURL, imgURl } from '../../common/config/index.js';
import { mapState } from 'vuex';
import { getUserById, updUserPhoto, updUserName, updUserNikeName, updUserSpecName, updUserPhone, updUserSex } from '@/request/API/index.js';
export default {
	data() {
		return {
			imglist: '',
			//获取的用户信息
			userinfo: {
				name: '请输入用户名',
				userPhone: '请输入电话号码',
				userSex: '',
				nickName: '请输入用户昵称',
				spec_name: '请输入个性签名'
			},
			//输入的用户信息
			imgurl: '',
			range: ['男', '女']
		};
	},
	onLoad() {
		this.imgurl = imgURl;
		//获取用户信息
		this.getUserById();
	},
	methods: {
		//获取用户信息
		getUserById() {
			getUserById(this.userId).then(res => {
				this.imglist = res.data.data.userPhoto;
				this.userinfo.name = res.data.data.userName;
				this.userinfo.userPhone = res.data.data.userPhone;
				this.userinfo.spec_name = res.data.data.specName;
				this.userinfo.userSex = res.data.data.userSex;
				this.userinfo.nickName = res.data.data.nickName;
			});
		},
		//修改用户名
		nameChange() {
			let params = {
				userId: this.userId,
				userName: this.userinfo.name
			};
			updUserName(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
				}
			});
		},
		//修改用户昵称
		nickNameChange() {
			let params = {
				userId: this.userId,
				nickName: this.userinfo.nickName
			};
			updUserNikeName(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
				}
			});
		},
		//修改用户电话号码
		userPhoneChange() {
			const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
			if (!reg.test(this.userinfo.userPhone)) {
				uni.showModal({
					title: '',
					content: '请输入正确的手机号码',
					showCancel: false
				});
				return;
			}
			let params = {
				userId: this.userId,
				phone: this.userinfo.userPhone
			};
			updUserPhone(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
				}
			});
		},
		//修改个性签名
		specnameChange() {
			let params = {
				userId: this.userId,
				specName: this.userinfo.spec_name
			};
			updUserSpecName(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '修改个性签名成功',
						duration: 2000
					});
				}
			});
		},
		bindPickerChange(e) {
			this.userinfo.userSex = e.detail.value;
			let params = {
				userId: this.userId,
				userSex: this.userinfo.userSex
			};
			updUserSex(params).then(res => {});
		},
		paizhao() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					console.log(res);
					this.imglist = res.tempFilePaths[0];
					//上传图片
					uni.uploadFile({
						url: baseURL + '/file/upload', //仅为示例，非真实的接口地址
						filePath: res.tempFilePaths[0],
						name: 'file',
						formData: {
							user: 'test',
							file: res.tempFilePaths[0]
						},
						success: uploadFileRes => {
							let aaa = JSON.parse(uploadFileRes.data);
							let params = {
								userId: this.userId,
								userPhoto: aaa.data
							};
							updUserPhoto(params).then(res => {
								if (res.data.code == 0) {
									uni.showToast({
										title: res.data.data,
										mask: false,
										duration: 1500
									});
								}
							});
						}
					});
				}
			});
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
	input {
		color: #999999;
	}
	textarea {
		color: #999999;
	}
	.item {
		padding: 20upx;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
		// justify-content: space-between;
		text {
			margin-right: 20upx;
		}
	}
	.item2 {
		padding: 20upx;
		.text {
			margin-top: 20upx;
			width: 100%;
			border: 1px solid #cccccc;
		}
	}
	.item3 {
		padding: 20upx;
		width: 100%;
		height: 100upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
		border-bottom: 1px solid #cccccc;
		text {
			margin-right: 20upx;
		}
		.right {
			display: flex;
			align-items: center;
			.tx {
				height: 80upx;
				width: 80upx;
				border-radius: 100%;
			}
			.bq {
				height: 30upx;
				width: 30upx;
			}
		}
	}
}
</style>
