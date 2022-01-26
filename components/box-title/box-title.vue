<template>
	<view class="title-wrapper">
		<view class="line"></view>
		<text class="title">{{ title }}</text>
	</view>
</template>

<script>
export default {
	name: 'LineTitle',
	props: ['title'],
	data() {
		return {};
	},
	methods: {}
};
</script>

<style lang="scss">
.title-wrapper {
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 12px 10px;
	font-weight: 400;
	.line {
		height: 30rpx;
		background-color: #2979ff;
		border-radius: 10px;
		width: 4px;
		margin-right: 15rpx;
	}
	.title {
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
		flex: 1;
		color: #333;
	}
}
</style>
