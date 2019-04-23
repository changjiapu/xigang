<script>
	export default {
		onLaunch: function () {
			const userId = uni.getStorageSync('userId')
			const token=uni.getStorageSync('token')
			if(userId){
				this.$store.commit('SET_USERID', userId)
				this.$store.commit('SET_TOKEN', token)
// 				uni.reLaunch({
// 					url:'/pages/index/index'
// 				})
			} 
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	uni-page-body, page {
		font-size: 30upx;
	}
</style>
