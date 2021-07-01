<template>
	<!-- 重置密码页面 -->
	<view class="reset vh100">
		<!-- 去注册 -->
		<view class="p-5 flex justify-start ">
			<navigator url="/pages/login/login" hover-class="navigator-hover" class="register font-weight-bolder">
				<image src="../../static/icons/back.png" mode="widthFix" style="width: 50rpx;"></image>
			</navigator>
		</view>
		<!-- 重置密码卡片 -->
		<form @submit="reset">
			<view
				class="reset-card p-4 flex flex-column align-center justify-center bg-white"
				:class="getCurrThemeType == 'dark' ? 'dark-theme' : 'light-theme'"
				:style="{ bottom: offsetBottom > 0 ? offsetBottom + 'rpx' : '0' }"
			>
				<view class="flex justify-start w100"><text class="reset-title h2 ">重置</text></view>
				<view class="reset-from w100 mt-2 ">
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
						class="rounded p-2 mb-1"
						type="text"
						:focus="passwordFocus"
						@confirm="confirm('password')"
						:adjust-position="false"
						placeholder="请输入新密码"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<input
						id="comfirmPwd"
						class="rounded p-2"
						type="text"
						:focus="comfirmPwdFocus"
						@confirm="confirm('comfirmPwd')"
						:adjust-position="false"
						placeholder="确认密码"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<sophie-button class="mt-4" form-type="submit" label="重置密码"></sophie-button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
export default {
	name: 'reset',
	data() {
		return {
			offsetBottom: '', //登录卡片距离屏幕底部距离
			phoneFocus: false, //手机输入框是否聚焦
			passwordFocus: false, //密码输入框是否聚焦
			comfirmPwdFocus: false //确认密码输入框是否聚焦
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
			switch (type) {
				case 'phone':
					this.phoneFocus = false;
					this.passwordFocus = true;
					break;
				case 'password':
					this.passwordFocus = false;
					this.comfirmPwdFocus = true;
					break;
				case 'comfirmPwd':
					(this.nickFocus = false), (this.phoneFocus = false), (this.passwordFocus = false);
					this.comfirmPwdFocus = false;
					uni.hideKeyboard();
					break;
			}
		},
		// 重置密码
		reset({ detail: { value } }) {
			let formData = value;
			uni.navigateTo({
				url: '/pages/login/login'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// 登录页面
.reset {
	background: url(../../static/images/Background.png) fixed no-repeat center / cover;
	// 去注册
	.register {
		color: #ffffff;
	}
	// 登录卡片
	.reset-card {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.reset-title {
			letter-spacing: 10rpx;
		}
		.reset-from {
			#phone,
			#password,
			#comfirmPwd{
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
