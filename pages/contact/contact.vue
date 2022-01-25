<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info phone" @click="phoneHandle">联系电话: 0890-17834590495 (点击拨打)</view>
		<view class="info adress">地址: 上海市黄浦区老西门安吉大厦</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" :scale='scale' title='东方明珠'></map>
	</view>
</template>

<script>
export default {
	data() {
		return {
			longitude: 121.499027,
			latitude: 31.19436,
			scale:11,
			markers:[
				{
					longitude: 121.499027,
					latitude: 31.19436,
					iconPath:'../../static/logo.png'
				}
			]
		};
	},
	methods: {
		// 拨打电话
		phoneHandle(){
			uni.makePhoneCall({
				phoneNumber:'0890-17834590495',
				
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.contact {
	image {
		width: 750rpx;
		height: 320rpx;
	}
	.info {
		font-size: 30rpx;
		height: 80rpx;
		line-height: 80rpx;
		padding-left: 15px;
		border-bottom: 1px solid #eee;
	}
	.map {
		width: 750rpx;
		height: 750rpx;
	}
}
</style>
