<template>
	<view class="news" v-if="list && list.length">
		<view class="news-item" v-for="item in list" :key="item.id" @click='toNewsDetail(item.id)'>
			<image :src="item.img_url" mode=""></image>
			<view class="content">
				<view class="title">{{ item.title }}</view>
				<view class="info">
					<text>发表时间:{{ item.add_time | formatDate }}</text>
					<text>浏览:{{ item.click }}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	name: 'NewsList',
	props: ['list'],
	filters: {
		formatDate: function(value) {
			const date = value.split(' ')[0];
			return date;
		}
	},
	methods: {
		toNewsDetail(id) {
			this.$emit('toNewsDetail',id)
		}
	},
};
</script>

<style lang="scss">
.news {
	.news-item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid #eee;
		image {
			width: 200rpx;
			height: 150rpx;
		}
		.content {
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			padding: 15rpx 0 15rpx 20rpx;
			.title {
				font-size: 30rpx;
				line-height: 40rpx;
			}
			.info {
				font-size: 24rpx;
				text:first-child {
					padding-right: 20rpx;
				}
			}
		}
	}
}
</style>
