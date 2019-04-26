import Vue from 'vue'
import App from './App'
import store from '@/common/store'
import EmptyData from '@/components/EmptyData'
Vue.component('empty-data', EmptyData)
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()
