<template>
	<view class="home">
		<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :circular="true" :duration="duration">
			<swiper-item v-for="item in banners" :key="item.goods_id"><image :src="item.image_src" /></swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav-item" v-for="item in navList" :key="item.title" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{ item.title }}</text>
			</view>
		</view>

		<!-- 推荐商品 -->
		<view class="hot-goods">
			<view class="title">推荐商品</view>
			<goods-list :goods="goods" @goodsItemClick='goGoodsDetail'/>
		</view>
	</view>
</template>

<script>
import GoodsList from '../../components/goods-list/goods-list.vue';
export default {
	name: 'Home',
	components: { 'goods-list':GoodsList },
	data() {
		return {
			background: ['color1', 'color2', 'color3'],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			navList: [
				{
					icon: 'iconfont iconjishushichang-copy',
					title: '京喜超市',
					path: '/pages/goods/goods'
				},
				{
					icon: 'iconfont iconzhuanli',
					title: '新品多多',
					path: '/pages/contact/contact'
				},
				{
					icon: 'iconfont iconzhuanli1',
					title: '社区图片',
					path: '/pages/picture/picture'
				},
				{
					icon: 'iconfont icontushuguan',
					title: '联系我们',
					path: '/pages/contact/contact'
				}
			],
			banners: [],
			goods: [],
			
		};
	},
	onLoad() {
		this.getBanners();
		this.getHotGoods();
	},
	methods: {
		// 导航点击处理事件
		navItemClick(url) {
			uni.navigateTo({ url });
		},
		// 获取轮播图数据
		async getBanners() {
			const res = await this.$request({
				url: '/api/public/v1/home/swiperdata'
			});
			console.log(res);
			this.banners = res;
			// 1.使用 Await/Await 方式调用
			// try {
			// 	const [temp, res] = await uni.request({
			// 		url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
			// 	});
			// 	console.log(res);
			// 	if (res.data.meta.status !== 200) {
			// 		return uni.showToast({
			// 			title: '获取数据失败'
			// 		});
			// 	}
			// 	this.banners = res.data.message;
			// } catch (e) {
			// 	//TODO handle the exception
			// }

			// 2.默认方式
			// uni.request({
			// 	url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
			// 	success: res => {
			// 		console.log(res.data);
			// 		if (res.data.meta.status !== 200) {
			// 			return uni.showToast({
			// 				title: '获取数据失败'
			// 			});
			// 		}
			// 		this.banners = res.data.message;
			// 	}
			// });
		},
		// 获取商品列表
		async getHotGoods() {
			const res = await this.$request({
				url: '/api/public/v1/goods/search?pagenum=1&pagesize=10'
			});
			this.goods = res.goods;
		},
		// 跳转到商品详情页
		goGoodsDetail(id){
			console.log(id);
			uni.navigateTo({
				url:`/pages/goods/detail?id=${id}`
			})
		}
	}
};
</script>

<style lang="scss">
.home {
	background-color: #eee;
	.swiper {
		width: 750rpx;
		height: 380rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.nav {
		display: flex;
		justify-content: space-around;
		background-color: $uni-bg-color;
		padding-bottom: 20rpx;
		.nav-item {
			// width: 25%;
			text-align: center;
			view {
				width: 120rpx;
				height: 120rpx;
				margin: 10px auto;
				background-color: #cd3333;
				color: #fff;
				border-radius: 50%;
				line-height: 120rpx;
				font-size: 50rpx;
			}
			text {
				font-size: 30rpx;
			}
		}
	}
	.hot-goods {
		.title {
			width: 750rpx;
			height: 50px;
			line-height: 50px;
			text-align: center;
			color: $shop-color;
			letter-spacing: 20px;
			margin-top: 10rpx;
			background-color: $uni-bg-color;
			font-weight: bold;
		}
	}
}
</style>
