<template>
	<view class="addAddress">
		<view class="line">
			<view class="title">信息</view>
			<view>
				<view>
					<text>姓名</text>
					<input type="text" v-model="params.userName" placeholder="请填写收货人的姓名" />
				</view>
				<view>
					<text>手机号码</text>
					<input type="text" v-model="params.userPhone" placeholder="请填写收货人的手机号码" />
				</view>
			</view>
		</view>
		<view class="line">
			<view class="title">地址</view>
			<view>
				<view>
					<text>所在地区</text>
					<view @click="showMulLinkageThreePicker">{{ params.location_a ? params.location_a + '-' + params.location_b + '-' + params.location_c : '请选择地址' }}</view>
				</view>
				<view>
					<text>详细地址</text>
					<input type="text" v-model="params.addressLine1" placeholder="请填写收货人的详细地址" />
				</view>
			</view>
		</view>
		<view class="set">
			<view>
				<view>设置默认地址</view>
				<view @click="is_default ? (is_default = 0) : (is_default = 1)"><view :class="{ act: is_default }"></view></view>
			</view>
		</view>
		<view class="btn" v-if="!params.addressId"><button type="primary" @click="Addaddress">提交</button></view>
		<view class="btn" v-else><button type="primary" @click="Addaddress2">修改</button></view>
		<mpvue-city-picker
			:themeColor="themeColor"
			ref="mpvueCityPicker"
			:pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel"
			@onConfirm="onConfirm"
		></mpvue-city-picker>
	</view>
</template>

<script>
import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker';
import { addUserAddress, updAddById } from '@/request/API/index.js';
import { mapState } from 'vuex';
export default {
	name: 'comaddr',
	components: {
		mpvueCityPicker
	},
	computed: {
		...mapState(['userId'])
	},
	data() {
		return {
			cityPickerValueDefault: [0, 0, 1],
			themeColor: '#007AFF',
			disabled: false,
			is_default: 0,
			params: {
				addressId: '',
				userName: '', //姓名
				userPhone: '', //电话
				addressLine1: '', //地址
				location_a: '', //省
				location_b: '', //市
				location_c: '' //区
			}
		};
	},
	onLoad(options) {
		if (options.params) {
			this.params = JSON.parse(options.params);
		}
	},
	methods: {
		//添加
		Addaddress() {
			console.log(this.params);
			if (this.params.userName == '') {
				uni.showModal({
					title: '',
					content: '请输入姓名',
					showCancel: false
				});
				return;
			}
			if (this.params.userPhone == '') {
				uni.showModal({
					title: '',
					content: '电话不能为空',
					showCancel: false
				});
				return;
			}
			if (this.params.addressLine1 == '') {
				uni.showModal({
					title: '',
					content: '详细地址不能为空',
					showCancel: false
				});
				return;
			}
			if (this.params.location_a == '') {
				uni.showModal({
					title: '',
					content: '省市区不能为空',
					showCancel: false
				});
				return;
			}
			let params = {
				userId: this.userId,
				userName: this.params.userName,
				userPhone: this.params.userPhone,
				province: this.params.location_a,
				city: this.params.location_b,
				area: this.params.location_c,
				addressLine1: this.params.addressLine1,
				isDefault: this.is_default
			};
			addUserAddress(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
					setTimeout(() => {
						uni.navigateBack({
							data: 1
						},2000);
					});
				}
			});
		},
		//修改
		Addaddress2() {
			if (this.params.userName == '') {
				uni.showModal({
					title: '',
					content: '请输入姓名',
					showCancel: false
				});
				return;
			}
			if (this.params.userPhone == '') {
				uni.showModal({
					title: '',
					content: '电话不能为空',
					showCancel: false
				});
				return;
			}
			if (this.params.addressLine1 == '') {
				uni.showModal({
					title: '',
					content: '详细地址不能为空',
					showCancel: false
				});
				return;
			}
			if (this.params.location_a == '') {
				uni.showModal({
					title: '',
					content: '省市区不能为空',
					showCancel: false
				});
				return;
			}
			let params = {
				addressId: this.params.addressId,
				userId: this.userId,
				userName: this.params.userName,
				userPhone: this.params.userPhone,
				province: this.params.location_a,
				city: this.params.location_b,
				area: this.params.location_c,
				addressLine1: this.params.addressLine1,
				isDefault: this.is_default
			};
			updAddById(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: res.data.data,
						duration: 2000
					});
					setTimeout(() => {
						uni.navigateBack({
							data: 1
						},2000);
					});
				}
			});
		},
		onCancel(e) {},
		onConfirm(e) {
			console.log(e);
			const city = e.label.split('-');
			this.params.location_a = city[0];
			this.params.location_b = city[1];
			this.params.location_c = city[2];
		},
		showMulLinkageThreePicker() {
			this.$refs.mpvueCityPicker.show();
		}
	}
};
</script>

<style lang="less">
.addAddress {
	.line {
		.title {
			height: 80upx;
			line-height: 80upx;
			font-size: 26upx;
			padding: 0 15px;
			& + view {
				padding: 0 15px;
				background-color: white;
				& > view {
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 20upx 0;
					position: relative;
					&:last-of-type {
						&::after {
							display: none;
						}
					}
					&::after {
						position: absolute;
						content: '';
						border-bottom: 1px solid #f3f3f3;
						left: 0;
						bottom: 0;
						width: 100%;
					}
					& > text {
						font-size: 26upx;
						width: 120upx;
						text-align: justify;
						text-align-last: justify;
						padding-right: 30upx;
					}
					& > view {
						flex: 1;
						padding: 5upx 0;
						font-size: 26upx;
						color: #999;
					}
					& > input {
						font-size: 26upx;
						flex: 1;
					}
					& > picker {
						font-size: 26upx;
					}
				}
			}
		}
	}
	.set {
		& > view {
			display: flex;
			justify-content: space-between;
			margin-top: 30upx;
			background: white;
			padding: 20upx 15px;
			& > view {
				font-size: 26upx;
				&:last-of-type {
					& > view {
						width: 35upx;
						height: 35upx;
						border: 1px solid #e3e3e3;
						border-radius: 50%;
						box-sizing: border-box;
						margin-right: 15upx;
						&.act {
							background: #ec0000;
							border-color: #ec0000;
							position: relative;
							&::after {
								position: absolute;
								content: '\393';
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								color: white;
								text-align: center;
								transform: rotate(-135deg);
								font-size: 22upx;
							}
						}
					}
				}
			}
		}
	}
	.btn {
		margin: 60upx 15px;
	}
}
</style>
