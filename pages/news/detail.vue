<template>
	<view class="news-detail">
		<text class="title">{{ newsDetail.title }}</text>
		<view class="info">
			<text>发表时间：{{ newsDetail.add_time }}</text>
			<text>浏览：{{ newsDetail.click }}</text>
		</view>
		<view class="content">
			<rich-text :nodes='newsDetail.content'></rich-text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			newsDetail: null
		};
	},
	onLoad(options) {
		this.getNewsDetail(options.id);
	},
	methods: {
		async getNewsDetail(id) {
			const res = await this.$request({
				url: '/shop/news/detail',
			});
			console.log(res);
			if (!res.length) return;
			this.newsDetail = res[0];
		}
	}
};
</script>

<style lang="scss">
.news-detail {
	font-size: 30rpx;
	padding: 0 20rpx;
	.title {
		width: 710rpx;
		text-align: center;
		display: block;
		margin: 20rpx 0;
		font-weight: bold;
	}
	.info {
		display: flex;
		justify-content: space-between;
		font-size: 23rpx;
	}
	.content {
		line-height: 50rpx;
		margin-top: 30rpx;
	}
}
</style>
