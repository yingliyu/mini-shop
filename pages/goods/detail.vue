<template>
	<view class="goods-detail">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay">
			<swiper-item v-for="item in swipers" :key="item.pics_id"><image :src="item.pics_big" mode=""></image></swiper-item>
		</swiper>
	</view>
</template>

<script>
export default {
	data() {
		return {
			detail: null,
			swipers: [],
			autoplay: true,
			indicatorDots: true
		};
	},
	onLoad(options) {
		this.getGoodsDetail(options.id);
	},
	methods: {
		async getGoodsDetail(id) {
			const res = await this.$request({
				url: `/api/public/v1/goods/detail?goods_id=${id}`
			});
			this.detail = res;
			this.swipers = res.pics;
			console.log(res);
		}
	}
};
</script>

<style lang="scss">
.goods-detail {
	.swiper {
		height: 700rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
