<template>
	<view class="charts-wrapper">
		<navigator v-if='!loginState' class="to-login" url="../auth/login/login">登录</navigator>
		<button v-else type="primary" @click="logout">退出登录</button>
		<box-title title="用户信息" />
		<view class="user-info" v-if="userInfo">
			<image class="avator" v-if="userInfo.avator" :src="userInfo.avator" mode="aspectFit"></image>
			<view class="info">
				<view class="uname" v-if="userInfo.userName">{{ userInfo.userName }}</view>
				<view class="phone" v-if="userInfo.phone">{{ userInfo.phone }}</view>
			</view>
		</view>
		<!-- 柱状图 -->
		<view class="charts-box">
			<box-title title="柱状图" />
			<qiun-data-charts type="column" :chartData="chartData" :echartsH5="true" :echartsApp="true" background="#fff" />
		</view>
		<!-- 折线图 -->
		<view class="charts-box">
			<box-title title="折线图" />
			<qiun-data-charts type="line" :chartData="chartData" :echartsH5="true" :echartsApp="true" background="#fff" />
		</view>
		<!-- 词云 -->
		<view class="charts-box">
			<box-title title="词云" />

			<qiun-data-charts type="word" :chartData="wordCloudChartData" />
		</view>
	</view>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import BoxTitle from '@/components/box-title/box-title.vue';
export default {
	components: { BoxTitle },
	data() {
		return {
			chartData: {
				categories: ['2016', '2017', '2018', '2019', '2020', '2021'],
				series: [
					{
						name: '目标值',
						data: [35, 36, 31, 33, 13, 34]
					},
					{
						name: '完成量',
						data: [18, 27, 21, 24, 6, 28]
					}
				]
			},
			wordCloudChartData: {
				series: [
					{
						name: '跨全端图表',
						textSize: 25
					},
					{
						name: '微信小程序',
						textSize: 20
					},
					{
						name: '支付宝小程序',
						textSize: 20
					},
					{
						name: '百度小程序',
						textSize: 20
					},
					{
						name: 'QQ小程序',
						textSize: 20
					},
					{
						name: '头条小程序',
						textSize: 20
					},
					{
						name: '抖音小程序',
						textSize: 20
					},
					{
						name: '360小程序',
						textSize: 20
					},
					{
						name: '跨全端',
						textSize: 10
					},
					{
						name: '跨全端',
						textSize: 12
					},
					{
						name: '跨全端',
						textSize: 10
					},
					{
						name: '跨全端',
						textSize: 12
					},
					{
						name: '跨全端',
						textSize: 10
					},
					{
						name: '跨全端',
						textSize: 12
					},
					{
						name: '跨全端',
						textSize: 10
					},
					{
						name: '跨全端',
						textSize: 12
					}
				]
			},
			wordCloud: {}
		};
	},

	computed: {
		...mapState({ loginState: state => state.user.loginState }),
		...mapState({ userInfo: state => state.user.userInfo })
	},
	onLoad() {
		this.wordCloud = JSON.parse(JSON.stringify(this.wordCloudChartData));
		console.log(this.userLogoutAction());
	},
	methods: {
		...mapActions(['userLogoutAction']),
		logout(){
			this.userLogoutAction()
			uni.showToast({
			  title: '您已退出登录~',
			  icon: 'none',
			})
		}
	}
};
</script>

<style lang="scss">
.charts-wrapper {
	width: 750rpx;
	height: 100%;
	padding: 20rpx 20rpx 200rpx 20rpx;
	background-color: $bg-color-grey;
	box-sizing: border-box;
	.to-login {
		padding: 20rpx;
		margin-bottom: 20rpx;
		text-align: center;
		background-color:#2979ff ;
		font-weight: bold;
		color: $shop-white;
		cursor: pointer;
		border-radius: 5px;
	}
	.user-info {
		display: flex;
		padding: 30rpx 20rpx;
		.avator {
			width: 100rpx;
			height: 100rpx;
			margin-right: 15rpx;
		}
		.info {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.phone {
				font-size: 30rpx;
			}
		}
	}
	/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
	.charts-box {
		width: 710rpx;
		height: 250px;
		margin-bottom: 100rpx;
	}
}
</style>
