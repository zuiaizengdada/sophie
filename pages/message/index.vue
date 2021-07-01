<template>
	<view class="message-index"><sophie-navbar left-arrow @arrowClick="back"></sophie-navbar></view>
</template>

<script>
// 组件

// 方法
export default {
	name: 'message-index',
	methods: {
		back() {
			console.log('back');
		}
	}
};
</script>

<style lang="scss" scoped></style>
