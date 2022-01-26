<template>
	<view class="charts-wrapper">
		<!-- 柱状图 -->
		<view class="charts-box">
			<box-title title='柱状图' />
			<qiun-data-charts type="column" :chartData="chartData" :echartsH5="true" :echartsApp="true" background="#fff" />
		</view>
		<!-- 折线图 -->
		<view class="charts-box">
			<box-title title='折线图' />
			<qiun-data-charts type="line" :chartData="chartData" :echartsH5="true" :echartsApp="true" background="#fff" />
		</view>
		<!-- 词云 -->
		<view class="charts-box">
			
			<box-title title='词云' />
			
			<qiun-data-charts type="word" :chartData="wordCloudChartData" />
		</view>
	</view>
</template>

<script>
	import BoxTitle from '@/components/box-title/box-title.vue';
export default {
	components:{BoxTitle},
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
	onLoad() {
		this.wordCloud = JSON.parse(JSON.stringify(this.wordCloudChartData));
	},
	methods: {}
};
</script>

<style lang="scss">
.charts-wrapper {
	width: 750rpx;
	height: 100%;
	padding: 0 20rpx 200rpx 20rpx;
	background-color: $bg-color-grey;
	box-sizing: border-box;

	/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
	.charts-box {
		width: 710rpx;
		height: 250px;
		margin-bottom: 100rpx;
	}
}
</style>
