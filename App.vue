<script>
export default {
	onLaunch() {
		let currThemeType = 'dark';
		if (!!uni.getStorageSync('currThemeType')) {
			currThemeType = uni.getStorageSync('currThemeType');
		}
		this.setCurrThemeType(currThemeType);
	},
	onShow() {
		console.log('App Show');
	},
	onHide() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */
@import url('@/static/css/uni.css');
@import url('@/static/css/common.css');
@import url('@/static/font/iconfont.css');
</style>
