<template>
	<!-- 导航页1 -->
	<view class="guide-page1 vh100">
		<!-- 跳过 -->
		<view class="p-5 flex justify-end"><navigator url="/pages/login/login" hover-class="navigator-hover" class="skip font-weight-bolder" @tap="skip">跳过</navigator></view>
		<!-- 引导图文 -->
		<view class="guide-image-text flex flex-column align-center justify-center position-absolute w-100">
			<image src="@/static/images/faces1.jpeg" mode="aspectFill" class="rounded-circle" style="width: 200rpx; height: 200rpx;"></image>

			<view class="mt-5 mb-5 text-center">
				<text class=" h2 font-weight-bold">你的朋友都在这 \n</text>
				<text class="font-sm text-muted mb-5 mt-3 ">使用sophie你可以轻松找到\n你的朋友</text>
			</view>
			<view class="text-center">
				<image src="@/static/images/people.png" mode="widthFix" class="w-100"></image>
				<text class="font-sm text-muted mt-3 d-block">很多外国友人也在使用这款app</text>
			</view>
		</view>
		<!-- 下一页 -->
		<sophie-button class="next p-5" label="开启探索之旅" @tap="next" />
	</view>
</template>

<script>
export default {
	name: 'guide-page1',
	data() {
		return {};
	},
	methods: {
		// 下一页
		next() {
			uni.navigateTo({
				url: '/pages/guide/guidePage2'
			});
		},
		// 跳过
		skip() {
			uni.navigateTo({
				url: '/pages/guide/guidePage2'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// 导航页1
.guide-page1 {
	// 跳过
	.skip {
		color: #37a1f6;
	}
	// 引导图文
	.guide-image-text {
		top: 40%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	// 下一页
	.next {
		position: fixed;
		bottom: 10%;
		left: 0;
		right: 0;
	}
}
</style>
