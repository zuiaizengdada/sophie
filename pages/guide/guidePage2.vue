<template>
	<!-- 导航页2 -->
	<view class="guide-page2 vh100 p-5">
		<!-- 引导文字 -->
		<view class="guide-text position-absolute w-100 flex flex-column align-center justify-center">
			<text class=" h2 font-weight-bold d-block text-white">发现你附近的朋友</text>
			<text class="font-sm text-white mb-5 mt-3 d-block">注册并登录后和你的朋友们畅聊吧</text>
		</view>
		<!-- 登录/注册 -->
		<view class="login-register">
			<sophie-button class="next px-5 py-3 font-sm" label="已有账号？去登录" @tap="login" />
			<sophie-button class="next px-5" label="去注册" @tap="register" bgColor="#ffffff" color="#707070" />
		</view>
	</view>
</template>

<script>
export default {
	name: 'guide-page2',
	data() {
		return {};
	},
	methods: {
		// 去登录
		login() {
			uni.navigateTo({
				url: '/pages/login/login'
			});
		},
		// 去注册
		register() {
			uni.navigateTo({
				url: '/pages/register/register'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// 导航页2
.guide-page2 {
	background: url(@/static/images/guide-bg-2.png) fixed no-repeat center / 100% 100%;
	// 引导文字
	.guide-text {
		bottom: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	// 下一页
	.login-register {
		position: fixed;
		bottom: 10%;
		left: 0;
		right: 0;
	}
}
</style>
