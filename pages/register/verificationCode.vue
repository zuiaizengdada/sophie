<template>
	<!-- 验证码页面 -->
	<view class="verification-code bg-color" :class="getCurrThemeType == 'dark' ? 'dark-theme-base' : 'light-theme'">
		<!-- 提示标题 -->
		<view class="tip">
			<text class="tip-big h1 font-weight-bold d-block">请输入验证码</text>
			<text class="tip-small text-muted mb-5 mt-3 d-block">安全，放心，高效地为您创建账号</text>
		</view>
		<!-- 验证码输入框 -->
		<view class="groupBox flex align-center justify-around w-100">
			<input
				class="groupBox-item rounded font-md font-weight-bolder text-center"
				:class="[focus_index == index ? 'isWrite' : '']"
				type="number"
				maxlength="1"
				v-for="(item, index) in verificationCode"
				:key="index"
				:id="'input-' + index"
				:focus="focus_index == index"
				v-model="verificationCode[index]"
				:adjust-position="false"
				autocomplete="off"
				autocapitalize="off"
				autocorrect="off"
				@keyup.delete="deleteVerificationCode"
				@input="inputVerificationCode"
				@focus="focusVerificationCode"
			/>
		</view>
		<!-- 验证状态 -->
		<view class="verification-status flex flex-column align-center justify-center mt-5" v-if="isVerify">
			<view class="verification-icon"><image ref="icon" src="../../static/icons/spinner-circle.png" mode="widthFix"></image></view>
			<text class="verification-tip text-muted mt-1">验证中</text>
		</view>

		<!-- 重发验证码 -->
		<view class="verification-resend text-center mt-5">
			<text>
				收不到验证码?
				<text v-show="isReSend">{{ verifyTime }}s后</text>
				<text :class="{ isReSend }" @click="!isReSend && reSend(timer)">点击重发</text>
			</text>
		</view>
	</view>
</template>

<script>
export default {
	name: 'verification-code',
	data() {
		return {
			focus_index: -1, //光标下标
			//验证码
			verificationCode: {
				0: '',
				1: '',
				2: '',
				3: ''
			},
			isVerify: false, // 是否验证
			isReSend: true, // 是否重发

			verifyTime: 60, //重发验证码时间
			timer: null // 定时器
		};
	},
	mounted() {
		this.reSend();
	},
	onUnload() {
		// 清除定时器
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	},
	methods: {
		// 删除验证码
		deleteVerificationCode({ target: { id } }) {
			// 获取当前光标索引下标
			const currIndex = id.slice(6);

			if (this.verificationCode[currIndex] == '' && currIndex > 0) this.focus_index = Number(currIndex) - 1;
		},
		// 输入验证码
		inputVerificationCode({ target: { id }, detail: { value } }) {
			// 获取当前光标索引下标
			const currIndex = id.slice(6);
			// 当前输入的验证码数组
			const verificationCodeArr = [];

			if (currIndex != '3' && value != '') {
				this.focus_index = Number(currIndex) + 1;
			}
			for (let [k, v] of Object.entries(this.verificationCode)) {
				if (v) verificationCodeArr.push(v);
			}
			if (verificationCodeArr.length == 4) {
				this.focus_index = currIndex;
				this.isVerify = true;
				setTimeout(() => {
					this.isVerify = false;
				}, 2000);
			}
		},
		// 光标聚焦事件
		focusVerificationCode({ target: { id } }) {
			// 获取当前光标索引下标
			const currIndex = id.slice(6);
			this.focus_index = currIndex;
			if (this.verificationCode[currIndex] != '') this.verificationCode[currIndex] = '';
		},
		// 重发验证码
		reSend(timer) {
			this.isReSend = true;
			this.verifyTime = 60;

			// 清除定时器
			if (typeof timer == 'object') {
				clearInterval(timer);
			} else {
				timer = setInterval(() => {
					if (this.verifyTime > 0) {
						this.verifyTime--;
					} else {
						this.isReSend = false;
					}
				}, 100);
			}
		}
	}
};
</script>

<style lang="scss" scoped>
// 验证动画
@keyframes Verify {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

// 是否重发
.isReSend {
	color: #656877 !important;
}

// 是否填写
.isWrite {
	background-color: #ffffff !important;
	box-shadow: 0 10rpx 30rpx 5rpx #eeeeee;
}

//验证码页面
.verification-code {
	padding: 180rpx 60rpx 0;
	// 提示标题
	.tip {
	}
	// 验证码输入框
	.groupBox {
		.groupBox-item {
			width: 100rpx;
			height: 100rpx;
			background-color: #f2f5f6;
		}
	}
	// 验证状态
	.verification-status {
		.verification-icon {
			image {
				width: 60rpx;
				height: 60rpx;
				animation: Verify 2s linear infinite;
			}
		}
		.verification-tip {
		}
	}
	// 重发验证码
	.verification-resend {
		text {
			color: #007bff;
		}
	}
}
</style>
