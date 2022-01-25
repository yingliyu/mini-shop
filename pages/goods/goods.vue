<template>
	<view class="goods">
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail" />
		<view v-if="noData" class="data-over">-------我是有底线的-------</view>
	</view>
</template>

<script>
import GoodsList from '../../components/goods-list/goods-list.vue';
export default {
	components: { GoodsList },
	data() {
		return {
			goods: [],
			pageIndex: 1,
			noData: false
		};
	},
	onLoad() {
		this.getHotGoods();
	},
	// 上拉加载更多
	onReachBottom() {
		if (this.goods.length < this.pageIndex * 10) return;
		this.noData = true;
		console.log('bottom');
		this.pageIndex += 1000; // 测试用数据量较大，正常+1
		this.getHotGoods();
	},
	// 下拉刷新
	onPullDownRefresh() {
		this.pageIndex = 1;
		this.goods = [];
		this.noData = false;
		setTimeout(() => {
			this.getHotGoods(() => {
				uni.stopPullDownRefresh();
			});
		}, 500);
	},
	methods: {
		// 获取商品列表
		async getHotGoods(callback) {
			const res = await this.$request({
				url: `/shop/goods/list?pagenum=${this.pageIndex}&pagesize=10`,
			});
			this.goods = [...this.goods, ...res.goods];
			callback && callback();
		},
		// 跳转到商品详情页
		goGoodsDetail(id) {
			console.log(id);
			uni.navigateTo({
				url: `/pages/goods/detail?id=${id}`
			});
		}
	}
};
</script>

<style lang="scss">
.goods {
	background-color: $bg-color-grey;
}
.data-over {
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	font-size: 28rpx;
}
</style>
