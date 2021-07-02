<template>
	<view class="message-index"><sophie-navbar left-title="所有对话" tabBar icon1="icon-addUser" icon2="icon-fangdajing"></sophie-navbar></view>
</template>

<script>
// 组件

// 方法
export default {
	name: 'message-index',
	data() {
		return {
			userInfo: {
				nickname: '最爱曾大大',
				status: '在线'
			}
		};
	},
	methods: {
		back() {
			console.log('back');
		}
	}
};
</script>

<style lang="scss" scoped></style>
