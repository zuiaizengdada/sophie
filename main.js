import Vue from 'vue'
import App from './App'
import store from './stroe'
import themeMixin from './mixin/themeMixin.js'

Vue.config.productionTip = false;
Vue.mixin(themeMixin);

App.mpType = 'app'

const app = new Vue({
	...App,
	store
})
app.$mount()
