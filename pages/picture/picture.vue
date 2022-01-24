<template>
	<view class="pictures">
		<scroll-view v-if="picList.length" scroll-y="true" class="left-sidebar">
			<view v-for="(item, index) in picList" :key="item.cat_id" :class="active === index ? 'active' : ''" @click="changePicType(index)">{{ item.cat_name }}</view>
		</scroll-view>
		<scroll-view scroll-y="true" class="content" v-if="activePics && activePics.length !== 0">
			<view class="item-wrapper">
				<view class="item" v-for="item in activePics" :key="item.cat_id">
					<image :src="item.cat_icon || img" @click="previewImg(item.cat_icon)"></image>
					<text>{{ item.cat_name + '发到空间里的飞机离开东法兰克风格的给回复高' }}</text>
				</view>
			</view>
		</scroll-view>
		<text v-if="activePics && activePics.length === 0" class="nodata-tip">暂无数据</text>
	</view>
</template>

<script>
const pic = require('../../static/goods.jpg');
export default {
	data() {
		return {
			picList: [],
			active: 0,
			activePics: [],
			img: pic
		};
	},
	onLoad() {
		this.getPicsTypes();
	},
	methods: {
		async getPicsTypes() {
			const res = await this.$request({
				url: '/api/public/v1/categories'
			});
			this.picList = res;
			this.getActivePics();
		},
		changePicType(index) {
			this.active = index;
			this.getActivePics();
		},
		getActivePics() {
			if (!this.picList.length) {
				return
			};
			this.picList.forEach((item, index) => {
				if (index === this.active) {
					this.activePics = item.children[0].children||[];
				} 
			});
		},
		previewImg(current) {
			const urls = this.activePics.map(item => item.cat_icon);
			uni.previewImage({
				urls,
				current
			});
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
}
.pictures {
	display: flex;
	height: 100%;
	background-color: $bg-color-grey;
	.left-sidebar {
		width: 200rpx;
		height: 100%;
		border-right: 1px solid #eee;
		background-color: $shop-white;
		view {
			height: 60px;
			line-height: 60px;
			color: #333;
			text-align: center;
			font-size: 30rpx;
			border-top: 1px solid #eee;
		}
		.active {
			color: #fff;
			background-color: $shop-color;
		}
	}
	.content {
		height: 100%;
		width: 530rpx;
		margin: 10rpx auto;
		.item-wrapper {
			width: 100%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;

			view {
				width: 260rpx;
				&:nth-child(2n) {
					margin-left: 5rpx;
				}
			}
			image {
				width: 245rpx;
				height: 245rpx;
				border-radius: 5px;
				display: block;
				background-color: pink;
				margin: 20rpx auto;
			}
			text {
				font-size: 30rpx;
				line-height: 50rpx;
			}
		}
	}
	.nodata-tip {
		width: 100%;
		text-align: center;
		line-height: 80rpx;
		color: #999;
	}
}
</style>
