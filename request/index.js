const baseUrl = 'http://192.168.1.125:8088/web'
import store from '../common/store/index.js'
export function postRequest(data, url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		uni.request({
			url: baseUrl + url,
			method: 'post',
			data: {
				...data
			},
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function deleteRequest(data, url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		uni.request({
			url: baseUrl + url,
			method: 'DELETE',
			data: {
				...data
			},
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				// if (res.data.code == -14) {
				// 	uni.reLaunch({
				// 		url: '/pages/logn/logn'
				// 	})
				// }
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function postGetRequest(url) {
	return new Promise((resolve, reject) => {
		uni.showLoading()
		uni.request({
			url: baseUrl + url,
			method: 'post',
			header: {
				'content-type': 'application/json',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function getRequest(url) {
	console.log(store.state)
	return new Promise((resolve, reject) => {
		uni.showLoading()
		uni.request({
			url: baseUrl + url,
			method: 'get',
			header: {
				'content-type': 'application/x-www-form-urlencoded',
				'token': store.state.token
			},
			success: (res) => {
				uni.hideLoading()
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
