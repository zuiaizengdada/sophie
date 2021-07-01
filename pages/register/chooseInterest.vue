<template>
	<!-- 选择兴趣页面 -->
	<view class="choose-interest bg-color" :class="getCurrThemeType == 'dark' ? 'dark-theme' : 'light-theme'">
		<!-- 提示标题 -->
		<view class="tip ">
			<text class="tip-big h1 font-weight-bold d-block">请选择你感兴趣的标签</text>
			<text class="tip-sm text-muted mb-5 mt-3 d-block">找到与自己有相同爱好的朋友</text>
		</view>
		<!-- 标签区域 -->
		<view class="span-area position-relative mt-5">
			<!-- 换一批 -->
			<text class="change position-absolute font" @tap="changeInterestList">
				<text class="iconfont icon-huanyipi" />
				换一批
			</text>
			<!-- 兴趣标签 -->
			<text class="interest-span font-sm" v-for="(item, index) in currInterestList" :id="item.name" :key="index" @tap="spanSelect(index, item)" ref="interestSpan">
				{{ item.name }}
			</text>
		</view>
		<!-- 下一页 -->
		<sophie-button class="next p-5 position-fixed fixed-bottom" label="下一步" @tap="next" />
	</view>
</template>

<script>
export default {
	name: 'choose-interest',
	data() {
		return {
			//兴趣标签列表
			interestList: [
				{ name: '游泳健身', isSelect: false },
				{ name: '吃饭', isSelect: false },
				{ name: '打乒乓球', isSelect: false },
				{ name: '睡觉', isSelect: false },
				{ name: '玩游戏', isSelect: false },
				{ name: '敲代码', isSelect: false },
				{ name: '搞事情', isSelect: false },
				{ name: '玩手机', isSelect: false },
				{ name: '唱歌', isSelect: false },
				{ name: '吃零食', isSelect: false },
				{ name: '学习', isSelect: false },
				{ name: '聊天', isSelect: false },
				{ name: '看电视', isSelect: false },
				{ name: '听歌', isSelect: false },
				{ name: '看小说', isSelect: false },
				{ name: '泡妹', isSelect: false },
				{ name: '打豆豆', isSelect: false },
				{ name: '打王者', isSelect: false },
				{ name: '喝水', isSelect: false },
				{ name: '放屁', isSelect: false },
				{ name: '护肤', isSelect: false },
				{ name: '买东西', isSelect: false },
				{ name: '打扫卫生', isSelect: false },
				{ name: '学开车', isSelect: false }
			],
			// 当前兴趣列表
			currInterestList: [],
			// 已选择兴趣列表
			selectedInterestList: []
		};
	},
	onLoad() {
		this.changeOrder();
	},
	methods: {
		// 整理兴趣列表
		spArr(arr, num) {
			let newArr = []; //首先创建一个新的空数组 用来存放分割好的数组
			for (let i = 0; i < arr.length; ) {
				newArr.push(arr.slice(i, (i += num)));
			}
			return newArr;
		},
		// 下一步
		next() {
			uni.navigateTo({
				url: '/pages/register/verificationCode'
			});
		},
		// 选择兴趣标签
		spanSelect(index, { isSelect, name }) {
			// 渐变颜色列表
			const colorList = [
				['#2cb9b0', '#38ef7d'],
				['#F37335', '#FDC830'],
				['#6DD5ED', '#2193B0'],
				['#8E2DE2', '#4A00E0'],
				['#F46B45', '#EEA849'],
				['#DC2430', '#7B4397'],
				['#654EA3', '#654EA3'],
				['#654EA3', '#654EA3']
			];
			// 随机渐变颜色
			const [leftColor, rightColor] = colorList[Math.floor(Math.random() * colorList.length)];

			// 随机改变背景渐变颜色
			const currDom = this.$refs.interestSpan.find(item => item.$attrs.id == name);

			// 更改标签状态
			if (isSelect) {
				this.currInterestList[index].isSelect = false;
				currDom.$el.style.backgroundImage = '';
				currDom.$el.style.backgroundColor = '#707070';
			} else {
				this.currInterestList[index].isSelect = true;
				currDom.$el.style.backgroundImage = `linear-gradient(to bottom right,${leftColor} , ${rightColor})`;
			}
		},

		// 换一批
		changeInterestList: (() => {
			// 点击次数
			let n = 1;

			return function() {
				// 兴趣列表
				const arr = this.spArr(this.interestList, 10);
				// 兴趣列表长度
				const arrLen = this.spArr(this.interestList, 10).length;

				if (n < arrLen) {
					this.currInterestList = arr[n];
					++n;
				} else {
					this.currInterestList = arr[0];
					n = 1;
				}
			};
		})(),

		// 乱序兴趣列表
		changeOrder() {
			this.interestList.sort(() => 0.5 - Math.random());
			this.currInterestList = this.spArr(this.interestList, 10)[0];
		}
	}
};
</script>

<style lang="scss" scoped>
// 选择兴趣页面
.choose-interest {
	padding: 180rpx 60rpx 0;
	// 提示标题
	.tip {
	}
	// 标签区域
	.span-area {
		display: flex;
		flex-wrap: wrap;
		// 换一批
		.change {
			top: -60rpx;
			right: 0;
			color: #37a1f6;
		}
		// 兴趣标签
		.interest-span {
			line-height: 48upx;
			height: 48upx;
			background: #707070;
			color: #ffffff;
			padding: 10upx 30upx;
			margin: 20upx 10upx 0 0;
			border-radius: 40upx;
		}
	}
	// 下一页
	.next {
		bottom: 40rpx;
	}
}
</style>
