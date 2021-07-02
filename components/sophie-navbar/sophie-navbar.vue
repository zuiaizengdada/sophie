<template>
	<!-- sophie导航栏组件 -->
	<view class="sophie-navbar py-5 px-2" v-bind="$attrs" v-on="$listeners">
		<!-- 导航顶部 -->
		<view class="navbar-top font-weight-bold text-white flex align-center justify-between">
			<!-- 导航左侧区域 -->
			<view class="flex align-center flex-1">
				<!-- 返回按钮 -->
				<view class="back" @tap="$emit('arrowClick')" v-if="$attrs['left-arrow'] ? true : false"><text class="iconfont icon-back"></text></view>
				<!-- 左侧标题 -->
				<view class="title-left">
					<text class="h3" v-if="$attrs['left-title'] ? true : false">{{ $attrs['left-title'] }}</text>
					<!-- 用户昵称以及状态 -->
					<view class="" v-if="Object.keys($attrs['user-info']).length === 0 ? false : true">
						<text class="nickname d-block">{{$attrs['user-info'].nickname}}</text>
						<text class="status d-block">{{$attrs['user-info'].status}}</text>
					</view>
				</view>
			</view>
			<!-- 中间标题 -->
			<view class="title-center font-weight-normal " v-if="$attrs['center-title'] ? true : false">
				<text class="h5">{{ $attrs['center-title'] }}</text>
			</view>
			<!-- 图标组 -->
			<view class="icon-group flex align-center justify-end flex-1">
				<view class="icon1" @tap="$emit('arrowClick')" v-if="$attrs['icon1'] ? true : false"><text :class="`iconfont ${$attrs['icon1']}`"></text></view>
				<view class="icon2 ml-3" @tap="$emit('arrowClick')" v-if="$attrs['icon2'] ? true : false"><text :class="`iconfont ${$attrs['icon2']}`"></text></view>
				<view class="icon3 ml-3" @tap="$emit('arrowClick')" v-if="$attrs['icon3'] ? true : false"><text :class="`iconfont ${$attrs['icon3']}`"></text></view>
			</view>
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
			events: Object.keys(this.$listeners)
		};
	},
	mounted() {
		console.log(this.events);
	},
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
