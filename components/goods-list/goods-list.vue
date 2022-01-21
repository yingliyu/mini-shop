<template>
	<view class="goods">
		<view v-for="(item, index) in goods" :key="item.goods_id" class="goods-item">
			<!-- <image src="../../static/goods.jpg" mode=""></image> -->
			<image :src="item.goods_big_logo || customImg" mode=""></image>
			<view class="price">
				<text>￥{{ item.goods_price }}</text>
				<text>￥2998</text>
			</view>
			<text class="name">{{ item.goods_name }}</text>
		</view>
	</view>
</template>

<script>
const customImg = require('../../static/goods.jpg');
export default {
	name: 'GoodsList',
	props: ['goods'],
	data() {
		return { customImg };
	},
	methods: {}
};
</script>

<style lang="scss">
.goods {
	// background-color: $uni-bg-color;
	padding: 0 15rpx;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	.goods-item {
		width: 355rpx;
		margin: 10rpx 0;
		padding: 15rpx;
		box-sizing: border-box;
		background-color: $uni-bg-color;
		image {
			width: 80%;
			height: 150px;
			display: block;
			margin: 0 auto;
		}
		.price {
			margin: 20rpx 0 5rpx 0;
			color: $shop-color;
			font-size: 36rpx;
			text:nth-child(2) {
				margin-left: 17rpx;
				font-size: 28rpx;
				color: #ccc;
				text-decoration: line-through;
			}
		}
		.name {
			font-size: 28rpx;
			line-height: 50rpx;
			padding: 10rpx 0 15rpx 0;
		}
	}
}
</style>
