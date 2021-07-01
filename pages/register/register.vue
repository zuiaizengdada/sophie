<template>
	<!-- 注册页面 -->
	<view class="register bg-color">
		<!-- 去登录 -->
		<view class="p-5 flex justify-end"><navigator url="/pages/login/login" hover-class="navigator-hover" class="login font-weight-bolder">去登录</navigator></view>
		<!-- 注册卡片 -->
		<form @submit="register">
			<view
				class="register-card p-4 flex flex-column align-center justify-center bg-white"
				:class="getCurrThemeType == 'dark' ? 'dark-theme' : 'light-theme'"
				:style="{ bottom: offsetBottom > 0 ? offsetBottom + 'rpx' : '0' }"
			>
				<view class="flex justify-start w100"><text class="register-title h2">注册</text></view>
				<view class="register-from w100 mt-2 ">
					<input
						id="nickName"
						name="nickName"
						v-model="registerFrom.nickName"
						class="rounded p-2 mb-1"
						type="text"
						:focus="nickFocus"
						@confirm="confirm('nickName')"
						:adjust-position="false"
						placeholder="请输入昵称"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<input
						id="phone"
						name="phone"
						v-model="registerFrom.phone"
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
						name="password"
						v-model="registerFrom.password"
						class="rounded p-2 mb-1"
						type="text"
						:focus="passwordFocus"
						@confirm="confirm('password')"
						:adjust-position="false"
						placeholder="请输入密码"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<input
						id="comfirmPwd"
						name="comfirmPwd"
						v-model="registerFrom.comfirmPwd"
						class="rounded p-2 mb-1"
						type="text"
						:focus="comfirmPwdFocus"
						@confirm="confirm('comfirmPwd')"
						:adjust-position="false"
						placeholder="确认密码"
						:placeholder-class="getCurrThemeType == 'dark' ? 'dark-placeholder' : ''"
						placeholder-style="font-size:28rpx"
					/>
					<sophie-button class="mt-4" form-type="submit" label="注册"></sophie-button>
				</view>
			</view>
		</form>
	</view>
</template>

<script>
// 组件

// 方法
export default {
	name: 'register',
	data() {
		return {
			offsetBottom: '', //注册卡片距离屏幕底部距离
			nickFocus: false, //昵称输入框是否聚焦
			phoneFocus: false, //手机号输入框是否聚焦
			passwordFocus: false, //密码输入框是否聚焦
			comfirmPwdFocus: false, //确认密码输入框是否聚焦
			// 注册表单
			registerFrom: {
				nickName: '', //昵称
				phone: '', //手机号
				password: '', //密码
				comfirmPwd: '' //确认密码
			}
		};
	},
	components: {},
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
				case 'nickName':
					this.nickName = false;
					this.phoneFocus = true;
					break;
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
		// 用户注册
		register({ detail: { value } }) {
			let formData = value;
			uni.navigateTo({
				url: '/pages/register/chooseGander'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// 注册页面
.register {
	background: url(../../static/images/Background.png) fixed no-repeat center / 100% 100%;
	background-size: cover;
	// 去登录
	.login {
		color: #ffffff;
	}
	// 注册卡片
	.register-card {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		border-top-left-radius: 20rpx;
		border-top-right-radius: 20rpx;
		.register-title {
			letter-spacing: 10rpx;
		}
		.register-from {
			#nickName,
			#phone,
			#password,
			#comfirmPwd {
				background-color: #f2f5f6;
			}
		}
	}
}
</style>
