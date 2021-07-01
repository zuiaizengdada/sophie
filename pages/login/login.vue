<template>
	<!-- 登录页面 -->
	<view class="login bg-color">
		<!-- 去注册 -->
		<view class="p-5 flex justify-end"><navigator url="/pages/register/register" hover-class="navigator-hover" class="register font-weight-bolder">去注册</navigator></view>
		<form @submit="login">
			<!-- 登录卡片 -->
			<view
				class="login-card p-4 flex flex-column align-center justify-center bg-white"
				:class="getCurrThemeType == 'dark' ? 'dark-theme' : 'light-theme'"
				:style="{ bottom: offsetBottom > 0 ? offsetBottom + 'rpx' : '0' }"
			>
				<view class="flex justify-start w100"><text class="login-title h2 ">登录</text></view>
				<view class="login-from w100 mt-2 ">
					<input
						id="phone"
						class="rounded p-2 mb-1"
						type="number"
						:focus="phoneFocus"
						@confirm="confirm('phone')"
						:adjust-position="false"
						placeholder="请输入手机号"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<input
						id="password"
						class="rounded p-2"
						type="text"
						:focus="passwordFocus"
						@confirm="confirm('password')"
						:adjust-position="false"
						placeholder="请输入密码"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<sophie-button class="mt-4" form-type="submit" label="登录"></sophie-button>
				</view>
				<navigator class="forgetPwd text-light-muted mt-3" url="/pages/resetPwd/resetPwd" hover-class="navigator-hover">忘记密码</navigator>
			</view>
		</form>
	</view>
</template>

<script>
export default {
	name: 'login',
	data() {
		return {
			offsetBottom: '', //登录卡片距离屏幕底部距离
			phoneFocus: false, //手机输入框是否聚焦
			passwordFocus: false //密码输入框是否聚焦
		};
	},
	onReady() {
		// 监听键盘高度变化，以便设置输入框的高度
		uni.onKeyboardHeightChange(({ height }) => {
			this.offsetBottom = height + 300;
			if (height === 0) this.offsetBottom = 40;
		});
	},
	methods: {
		// 键盘完成事件
		confirm(type) {
			if (type == 'phone') {
				this.phoneFocus = false;
				this.passwordFocus = true;
			} else {
				this.$nextTick(() => {
					this.passwordFocus = false;
				});
				uni.hideKeyboard();
			}
		},
		// 登录
		login({ detail: { value } }) {
			let formdata = value;
			console.log(11)
			uni.switchTab({
				url: '/pages/message/index'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// 登录页面
.login {
	background: url(../../static/images/Background.png) fixed no-repeat center / 100% 100%;
	background-size: cover;
	// 去注册
	.register {
		color: #ffffff;
	}
	// 登录卡片
	.login-card {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.login-title {
			letter-spacing: 10rpx;
		}
		.login-from {
			#phone,
			#password {
				background-color: #f2f5f6;
			}

			button {
				background-image: linear-gradient(to bottom right, #2cb9b0, #38ef7d);
				color: #ffffff;
				border-radius: 45rpx;
			}
		}
		.forgetPwd {
			font-size: 20rpx;
		}
	}
}
</style>
