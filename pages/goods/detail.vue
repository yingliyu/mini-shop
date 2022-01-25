<template>
	<view class="goods-detail">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
			<swiper-item v-for="item in swipers" :key="item.pics_id"><image :src="item.pics_big || swiperImg" mode=""></image></swiper-item>
		</swiper>
		<view class="goods-info">
			<view class="price" v-if="detail && detail.goods_price">
				<text>￥{{ detail.goods_price }}</text>
				<text>￥{{ detail.goods_price + 345 }}</text>
			</view>
			<view class="name" v-if="detail && detail.name">{{ detail.goods_name }}</view>
		</view>
		<view class="other-info">
			<view v-if="detail && detail.goods_id">货号：SD{{ detail.goods_id }}</view>
			<view v-if="detail && detail.goods_number">库存：{{ detail.goods_number }}</view>
		</view>
		<view class="goods-desc">
			<view class="sub-title">详细介绍</view>
			<rich-text v-if="detail && detail.goods_introduce" :nodes="detail.goods_introduce"></rich-text>
		</view>
		<view class="goods-nav"><uni-goods-nav :fill="true" :options="options" :buttonGroup="buttonGroup" @click="onClick" @buttonClick="buttonClick" /></view>
	</view>
</template>

<script>
const swiperImg = require('../../static/goods.jpg');
export default {
	data() {
		return {
			detail: null,
			swipers: [],
			autoplay: true,
			indicatorDots: true,
			swiperImg,
			options: [
				{
					icon: 'headphones',
					text: '客服'
				},
				{
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#ff0000',
					infoColor: '#fff'
				},
				{
					icon: 'cart',
					text: '购物车',
					info: 6
				}
			],
			buttonGroup: [
				{
					text: '加入购物车',
					backgroundColor: '#ff0000',
					color: '#fff'
				},
				{
					text: '立即购买',
					backgroundColor: '#ffa200',
					color: '#fff'
				}
			]
		};
	},
	onLoad(options) {
		this.getGoodsDetail(options.id);
	},
	methods: {
		async getGoodsDetail(id) {
			const res = await this.$request({
				url: `/shop/goods/detail?goods_id=${id}`,
			});
			this.detail = res;
			this.swipers = res.pics;
		},
		onClick(e) {
			console.log(e);
			uni.showToast({
				title: `点击${e.content.text}`,
				icon: 'none'
			});
		},
		buttonClick(e) {
			console.log(e);
			this.options[2].info++;
		}
	}
};
</script>

<style lang="scss">
.goods-detail {
	background-color: $bg-color-grey;
	.swiper {
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.goods-info {
		background-color: $shop-white;
		padding: 30rpx 10rpx;
		.price {
			line-height: 80rpx;
			color: $shop-color;
			font-size: 38rpx;
			text:last-child {
				margin-left: 30rpx;
				color: #ccc;
				font-size: 28rpx;
				text-decoration: line-through;
			}
		}
		.name {
			font-size: 32rpx;
			line-height: 60rpx;
		}
	}
	.other-info {
		margin: 10rpx auto;
		padding: 10rpx;
		font-size: 32rpx;
		line-height: 50rpx;
		background-color: $shop-white;
	}
	.goods-desc {
		padding-bottom: 50rpx;
		font-size: 28rpx;
		color: #333;
		line-height: 50rpx;
		background-color: $shop-white;
		.sub-title {
			padding: 10rpx;
			margin-bottom: 5rpx;
			font-size: 32rpx;
			line-height: 70rpx;
			border-bottom: 1px solid $bg-color-grey;
		}
	}
	.goods-nav {
		width: 750rpx;
		position: fixed;
		bottom: 0px;
	}
}
</style>
