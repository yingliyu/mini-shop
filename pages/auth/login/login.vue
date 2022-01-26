<template>
	<view class="form-wrapper">
		<text class="title">你好，欢迎登录~</text>
		<uni-forms ref="form" :modelValue="formData" :rules="rules" label-align="right">
			<uni-forms-item label="" name="name"><uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" /></uni-forms-item>
			<uni-forms-item label="" name="phone"><uni-easyinput v-model="formData.phone" type="text" placeholder="请输入手机号" /></uni-forms-item>
			<uni-forms-item label="" name="password"><uni-easyinput v-model="formData.password" type="password" placeholder="请输入密码" /></uni-forms-item>
		</uni-forms>
		<button class="login-btn" type="primary" @click="submit">登 录</button>
		<view class="login-footer">
			<navigator class="reg-link" url="../reg/reg">注册账号</navigator>
			<navigator class="reg-link" url="../reg/reg">忘记密码</navigator>
		</view>
		<view class="third-login">
			<view class="wx">
				<uni-icons type="weixin" size="40" color="#32CD32"></uni-icons>
				<view class="name">微信</view>
			</view>
			<view class="qq">
				<uni-icons type="qq" size="40" color="#00B2EE"></uni-icons>
				<view class="name">QQ</view>
			</view>
		</view>
		<view class="login-auth">
			<text>
				登录代表同意
				<navigator class="link" url="/">用户协议</navigator>
				、
				<navigator class="link" url="/">隐私政策</navigator>
				，并授权使用您的账号信息（如昵称、头像、收获地址等）以便您统一管理
			</text>
		</view>
		<view>
			<!-- 提示信息弹窗 -->
			<uni-popup ref="message" type="message"><uni-popup-message type="success" :message="messageText" :duration="2000"></uni-popup-message></uni-popup>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			timer: null,
			messageText: '',
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
		// 触发登录提交表单
		submit() {
			this.$refs.form
				.validate()
				.then(async data => {
					console.log('表单数据信息：', data);
					try {
						await this.$request({
							method: 'POST',
							url: '/shop/login',
							data
						});
						this.messageToggle();
					} catch (e) {
						//TODO handle the exception
					}
				})
				.catch(err => {
					console.log('表单错误信息：', err);
				});
		},
		messageToggle() {
			this.messageText = '登录成功，即将跳转...';
			this.$refs.message.open();
			this.timer = setTimeout(function() {
				uni.switchTab({
					url: '../../index/index'
				});
			}, 500);
		}
	},
	destoryed() {
		console.log('组件销毁了~');
		clearTimeout(this.timer)
	}
};
</script>

<style lang="scss">
.form-wrapper {
	padding: 40rpx;

	.title {
		display: block;
		padding-bottom: 30rpx;
		font-size: 40rpx;
		font-weight: bold;
	}
	.login-btn {
		font-size: 30rpx;
	}
	.login-footer {
		display: flex;
		justify-content: space-between;
		font-size: 30rpx;
		.reg-link {
			color: #007aff;
			text-align: center;
			margin-top: 15rpx;
		}
	}
	.third-login {
		display: flex;
		justify-content: space-around;
		margin-top: 200rpx;
		.name {
			text-align: center;
			font-size: 30rpx;
		}
	}
	.login-auth {
		position: absolute;
		bottom: 20rpx;
		font-size: 25rpx;
		color: #888;
		line-height: 40rpx;
		.link {
			color: $shop-color;
			display: inline-block;
		}
	}
}
</style>
