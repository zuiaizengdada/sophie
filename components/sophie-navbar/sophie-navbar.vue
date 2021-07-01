<template>
	<!-- sophie导航栏组件 -->
	<view class="sophie-navbar">
		<!-- 导航顶部 -->
		<view class="navbar-top">
			<view class="back">
				<slot name="back"></slot>
			</view>
			<view class="title">
				<slot name="title"></slot>
			</view>
			<view class="icon1">
				<slot name="icon1"></slot>
			</view>
			<view class="icon2">
				<slot name="icon2"></slot>
			</view>
		</view>
		<!-- 导航底部 -->
		<view class="navbar-bottom">
			<view class="">
				
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'sophie-navbar',
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped></style>
