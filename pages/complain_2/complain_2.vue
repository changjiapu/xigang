<template>
	<view class="content">
		<view class="item">
			<text>主题</text>
			<input type="text" v-model="mTopic" placeholder="请输入主题" />
		</view>
		<textarea v-model="mContent" placeholder="请输入内容" />
		<view class="item">
			<text>姓名</text>
			<input type="text" v-model="mName" placeholder="选填" />
		</view>
		<view class="item">
			<text>电话</text>
			<input type="text" v-model="mPhone" placeholder="选填" />
		</view>
		<view class="btn" @click="submit">提交</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
import { customerFeedback } from '@/request/API/index.js';
export default {
	data() {
		return {
			mTopic: '', //主题
			mContent: '', //内容
			mPhone: '', //手机号
			mName: '' //姓名
		};
	},
	onLoad() {},
	computed: {
		...mapState(['userId'])
	},
	methods: {
		submit() {
			if (this.mTopic == '') {
				uni.showModal({
					title: '',
					content: '请输入主题',
					showCancel: false
				});
				return;
			}
			if (this.mTopic == '') {
				uni.showModal({
					title: '',
					content: '请输入内容',
					showCancel: false
				});
				return;
			}
			let params = {
				userId: this.userId,
				mTopic: this.mTopic, //主题
				mContent: this.mContent, //内容
				mPhone: this.mPhone, //手机号
				mName: this.mName, //姓名
				mType: 0 // 0 投诉与建议 1意见反馈
			};
			customerFeedback(params).then(res => {
				if (res.data.code == 0) {
					uni.showToast({
						title: '投诉建议成功',
						icon: 'none',
						duration: 1000
					});
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	padding: 20upx;
	font-size: 20upx;
	.item {
		display: flex;
		height: 95upx;
		align-items: center;
		border-bottom: 1px solid #dddddd;
		text {
			width: 150upx;
		}
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
