<template>
	<!-- sophie导航栏组件 -->
	<view class="sophie-navbar p-5">
		<!-- 导航顶部 -->
		<view class="navbar-top font-weight-bold text-white flex align-center">
			<!-- 返回按钮 -->
			<view class="back font-weight-bold" @tap="$emit('arrowClick')"><text class="iconfont icon-back" v-if="isLeftArrow"></text></view>
			<!-- 左侧标题 -->
			<view class="title-left"><text class="h3">消息</text></view>
			<!-- 中间标题 -->
			<view class="title-center"><slot name="title-center"></slot></view>
			<view class="icon1"><slot name="icon1"></slot></view>
			<view class="icon2"><slot name="icon2"></slot></view>
			<view class="icon3"><slot name="icon3"></slot></view>
		</view>
		<!-- 导航底部 -->
		<view class="navbar-bottom"></view>
	</view>
</template>

<script>
export default {
	name: 'sophie-navbar',
	data() {
		return {
			isLeftArrow: this.$attrs['left-arrow'] ? true : false //是否显示返回键
		};
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="scss" scoped>
// sophie导航栏组件
.sophie-navbar {
	height: 290rpx;
	background-color: #2cb9b0;
	// box-sizing: border-box;
	// 导航顶部
	.navbar-top {
		.back {
		}
	}
	// 导航底部
	.navbar-bottom {
	}
}
</style>
