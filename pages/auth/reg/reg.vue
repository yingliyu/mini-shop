<template>
	<view class="form-wrapper">
		<text class="title">欢迎注册</text>
		<uni-forms ref="form" :modelValue="formData" :rules="rules" label-align="right">
			<uni-forms-item label="" name="name"><uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" /></uni-forms-item>
			<uni-forms-item label="" name="phone"><uni-easyinput v-model="formData.phone" type="text" placeholder="请输入手机号" /></uni-forms-item>
		<uni-forms-item label="" name="password"><uni-easyinput v-model="formData.password" type="password" placeholder="请输入密码" /></uni-forms-item>
		</uni-forms>
		<button type="primary" @click="submit">注 册</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			formData: {
				name: '',
				phone: '',
				hobby: ''
			},
			submitMsg: '',
			hobby: [{ value: 0, text: '篮球' }, { value: 1, text: '足球' }, { value: 2, text: '游泳' }],
			rules: {
				// 对name字段进行必填验证
				name: {
					rules: [
						{
							required: true,
							errorMessage: '请输入姓名'
						},
						{
							minLength: 3,
							maxLength: 5,
							errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符'
						}
					]
				},
				// 对phone字段进行必填验证
				phone: {
					rules: [
						{
							required: true,
							errorMessage: '请输入手机号'
						},
						{
							format: 'phone',
							errorMessage: '请输入正确的手机号'
						}
					]
				},
				// 对password字段进行必填验证
				password: {
					rules: [
						{
							required: true,
							errorMessage: '请输入密码'
						},
						{
							minLength: 6,
							maxLength: 10,
							errorMessage: '密码长度在 {minLength} 到 {maxLength} 个字符'
						}
					]
				}
			}
		};
	},
	methods: {
		// 触发提交表单
		submit() {
			this.$refs.form
				.validate()
				.then(res => {
					console.log('表单数据信息：', res);
					this.submitMsg = res;
				})
				.catch(err => {
					this.submitMsg = err;
					console.log('表单错误信息：', err);
				});
		}
	}
};
</script>

<style lang="scss">
	.form-wrapper{
		padding: 40rpx;
		.title{
			display: block;
			padding-bottom: 30rpx;
			font-size: 40rpx;
			font-weight: bold;
		}
	}
</style>
