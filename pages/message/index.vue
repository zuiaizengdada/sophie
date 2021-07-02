<template>
	<view class="message-index"><sophie-navbar  user-info="userInfo" center-title="所有人" icon1="icon-addUser" icon2="icon-fangdajing"></sophie-navbar></view>
</template>

<script>
// 组件

// 方法
export default {
	name: 'message-index',
	data(){
		return{
			userInfo:{
				nickname:'jack',
				status:'online'
			}
		}
	},
	methods: {
		back() {
			console.log('back');
		}
	}
};
</script>

<style lang="scss" scoped></style>
