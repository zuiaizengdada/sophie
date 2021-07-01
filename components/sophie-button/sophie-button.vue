<template>
	<!-- sophie按钮组件 -->
	<view class="sophie-button">
		<button v-bind="$attrs" v-on="$listeners" @tap="$emit('tap')" :hover-class="hoverClass" :style="styleObj">
			{{ $attrs.label ? $attrs.label : $slots.default ? $slots.default[0].text : '' }}
		</button>
	</view>
</template>

<script>
export default {
	name: 'sophie-button',
	data() {
		return {
			hoverClass: this.$attrs['hover-class'] ? this.$attrs['hover-class'] : 'button-hover', //按钮点击样式
			// 按钮样式对象
			styleObj: {
				backgroundImage: this.$attrs['bgColor'] ? '' : 'linear-gradient(to bottom right, #2cb9b0, #38ef7d)',
				backgroundColor: this.$attrs['bgColor'] ? this.$attrs['bgColor'] : '',
				color: this.$attrs['color'] ? this.$attrs['color'] : '#ffffff',
				borderRadius: this.$attrs['borderRadius'] ? this.$attrs['borderRadius'] : '45rpx'
			}
		};
	},
	mounted() {}
};
</script>

<style lang="scss" scoped>
</style>
