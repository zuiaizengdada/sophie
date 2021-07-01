<template>
	<!-- 选择性别页面 -->
	<view class="choose-gander bg-color" ref="chooseGander" :class="getCurrThemeType == 'dark' ? 'dark-theme-base' : 'light-theme'">
		<!-- 提示标题 -->
		<view class="tip">
			<view class="tip-big h1 font-weight-bold">
				<text>Hi {{ nickName }}\n选择你的性别</text>
			</view>
			<view class="tip-small text-muted mb-5 mt-3"><text>天下友人少，不管啥性别</text></view>
		</view>
		<!-- 性别卡片 -->
		<view class="gender-card flex">
			<!-- 男性卡片 -->
			<view
				@tap="
					isChooseMan = true;
					isChooseWoman = false;
				"
				class="man-card flex-1 flex flex-column align-center justify-center rounded"
				:class="{ isChoose: isChooseMan }"
			>
				<image src="../../static/icons/man.png" widthFix></image>
				<text class="font-weight-bold mt-3">男生</text>
			</view>
			<!-- 女性卡片 -->
			<view
				@tap="
					isChooseWoman = true;
					isChooseMan = false;
				"
				class="woman-card flex-1 flex flex-column align-center justify-center rounded ml-2"
				:class="{ isChoose: isChooseWoman }"
			>
				<image src="../../static/icons/women.png" mode="widthFix"></image>
				<text class="font-weight-bold mt-3">女生</text>
			</view>
		</view>
		<!-- 下一步 -->
		<sophie-button class="next position-absolute" @tap="next" label="下一步"></sophie-button>
	</view>
</template>

<script>
export default {
	name: 'choose-gander',
	data() {
		return {
			nickName: 'Micheal', //昵称
			isChooseMan: true, //选择男生
			isChooseWoman: false //选择女生
		};
	},
	onReady() {
		
	},
	methods: {
		// 下一步
		next() {
			uni.navigateTo({
				url: '/pages/register/chooseInterest'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// 是否选择
.isChoose {
	box-shadow: 0 10rpx 30rpx 5rpx #eeeeee;
	background-color: #ffffff !important;
	&::after {
		content: '';
		width: 50rpx;
		height: 50rpx;
		background: url('../../static/icons/checked.png') no-repeat center;
		position: absolute;
		top: 30rpx;
		right: 30rpx;
	}
}
// 选择性别页面
.choose-gander {
	padding: 180rpx 60rpx 0;
	// 提示标题
	.tip {
	}
	// 性别卡片
	.gender-card {
		.man-card,
		.woman-card {
			height: 350rpx;
			background-color: #f2f5f6;
			position: relative;
			&::after {
				content: '';
				width: 50rpx;
				height: 50rpx;
				background-color: #e5e5e5;
				border-radius: 50%;
				position: absolute;
				top: 30rpx;
				right: 30rpx;
			}
			image {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
	// 下一步
	.next {
		bottom: 120rpx;
		left: 60rpx;
		right: 60rpx;
	}
}
</style>
