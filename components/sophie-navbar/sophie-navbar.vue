<template>
	<!-- sophie导航栏组件 -->
	<view class="sophie-navbar pt-5 px-2 text-white" v-bind="$attrs" v-on="$listeners">
		<!-- 导航顶部 -->
		<view class="navbar-top pb-1 font-weight-bold  flex align-end justify-between">
			<!-- 导航左侧区域 -->
			<view class="flex align-center flex-1">
				<!-- 返回按钮 -->
				<view class="back" @tap="$emit('arrowClick')" v-if="isLeftArrow"><text class="iconfont icon-back"></text></view>
				<!-- 左侧标题 -->
				<view class="title-left">
					<text class="font-lg ml-2" v-if="isLeftTitle">{{ $attrs['left-title'] }}</text>
					<!-- 用户昵称以及状态 -->
					<view class="ml-2" v-if="isUserInfo">
						<text class="nickname font-sm d-block">{{ $attrs['user-info'].nickname }}</text>
						<text class="status font-small d-block">{{ $attrs['user-info'].status }}</text>
					</view>
				</view>
			</view>
			<!-- 中间标题 -->
			<view class="title-center font-weight-normal " v-if="isCenterTitle">
				<text class="h5">{{ $attrs['center-title'] }}</text>
			</view>
			<!-- 图标组 -->
			<view class="icon-group flex align-center justify-end flex-1">
				<view class="icon1" @tap="$emit('arrowClick')" v-if="isIcon1"><text :class="`iconfont ${$attrs['icon1']}`"></text></view>
				<view class="icon2 ml-3" @tap="$emit('arrowClick')" v-if="isIcon2"><text :class="`iconfont ${$attrs['icon2']}`"></text></view>
				<view class="icon3 ml-3" @tap="$emit('arrowClick')" v-if="isIcon3"><text :class="`iconfont ${$attrs['icon3']}`"></text></view>
			</view>
		</view>
		<!-- 导航底部 -->
		<view class="navbar-bottom font-sm" v-if="isNavBottom">
			<!-- tabBar -->
			<view class="tabBar flex align-center justify-between text-center " v-if="isTabBar">
				<view class="tabBarItem message flex-1 p-2">
					<text>消息</text>
					<text></text>
				</view>
				<view class="tabBarItem group flex-1 p-2 mx-2">
					<text>组</text>
					<text>99</text>
				</view>
				<view class="tabBarItem calls flex-1 p-2">
					<text>通话</text>
					<text>99</text>
				</view>
			</view>
			<!-- 搜索框 -->
			<view class="searchBar" v-if="isSearchBar"></view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'sophie-navbar',
	data() {
		return {
			events: Object.keys(this.$listeners), //事件集合
			isLeftArrow: this.$attrs['left-arrow'] ? true : false, //是否显示返回按钮
			isLeftTitle: this.$attrs['left-title'] ? true : false, //是否显示左侧标题
			isUserInfo: Object.keys(this.$attrs['user-info'] || {}).length === 0 ? false : true, //是否显示用户昵称以及状态
			isCenterTitle: this.$attrs['center-title'] ? true : false, //是否显示中间标题
			isIcon1: this.$attrs['icon1'] ? true : false, //是否显示第一个图标(从左至右)
			isIcon2: this.$attrs['icon2'] ? true : false, //是否显示第二个图标(从左至右)
			isIcon3: this.$attrs['icon3'] ? true : false, //是否显示第三个图标(从左至右)
			isNavBottom: this.$attrs['tabBar'] || this.$attrs['searchBar'] ? true : false, //是否显示导航底部
			isTabBar: this.$attrs['tabBar'] ? true : false, //是否显示tabBar
			isSearchBar: this.$attrs['searchBar'] ? true : false //是否显示searchBar
		};
	},
	mounted() {
		console.log(this.$attrs);
	},

	methods: {}
};
</script>

<style lang="scss" scoped>
// sophie导航栏组件
.sophie-navbar {
	background-color: #2cb9b0;

	// 导航顶部
	.navbar-top {
		height: 88rpx;
		.back {
		}
	}
	// 导航底部
	.navbar-bottom {
		.tabBar {
			.tabBarItem {
				border-bottom: 4rpx solid #ffffff;
			}
		}
	}
}
</style>
