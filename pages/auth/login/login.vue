<template>
	<view class="form-wrapper">
		<text class="title">你好，欢迎登录~</text>
		<uni-forms ref="form" :modelValue="formData" :rules="rules" label-align="right">
			<uni-forms-item name="name"><uni-easyinput type="text" v-model="formData.name" placeholder="请输入用户名" /></uni-forms-item>
			<!-- 	<uni-forms-item  name="phone"><uni-easyinput v-model="formData.phone" type="text" placeholder="请输入手机号" /></uni-forms-item> -->
			<uni-forms-item name="password"><uni-easyinput v-model="formData.password" type="password" placeholder="请输入密码" /></uni-forms-item>
			<uni-forms-item name="vcode"><move-verify @result="verifyResult" ref="verifyElement"></move-verify></uni-forms-item>
		</uni-forms>
		<button class="login-btn" type="primary" @click="submit">登 录</button>
		<view class="login-footer">
			<navigator class="reg-link" url="../reg/reg">注册账号</navigator>
			<navigator class="reg-link" url="../reg/reg">忘记密码</navigator>
		</view>
		<view class="third-login">
			<!-- #ifdef MP-WEIXIN -->
			<view class="wx" @click="wxLogin">
				<uni-icons type="weixin" size="40" color="#32CD32"></uni-icons>
				<view class="name">微信</view>
			</view>
			<!-- #endif -->
			<!-- #ifdef H5 -->
			<view class="wx" @click="h5WxLogin">
				<uni-icons type="weixin" size="40" color="#32CD32"></uni-icons>
				<view class="name">微信</view>
			</view>
			<!-- #endif -->
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
			<uni-popup ref="message" type="message"><uni-popup-message :type="msgType" :message="messageText" :duration="2000"></uni-popup-message></uni-popup>
		</view>
	</view>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import moveVerify from '@/components/helang-moveVerify/helang-moveVerify.vue';
export default {
	components: {
		'move-verify': moveVerify
	},
	data() {
		return {
			resultData: {},
			timer: null,
			messageText: '',
			msgType: 'success',
			formData: {
				name: '',
				password: ''
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
				vcode: {
					rules: [
						{
							required: true,
							errorMessage: '拖动滑块验证'
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
	computed: {
		...mapState({ loginState: state => state.user.loginState })
	},
	onLoad() {
		wx.cloud.init({ env:'cloud1-8g1haidb510270d6' });
		
	},
	methods: {
		...mapActions(['userLoginAction']),
		async loginAfter(data) {
			if (typeof data === 'string') {
				// 要在storage中保存token
				uni.setStorageSync('token', data);
				// 调用getUserInfo API
				const res = await this.$request({
					url: '/shop/getUserInfo'
				});
				const { userId, userName, avator, phone } = res;
				this.userLoginAction({ userId, userName, avator, phone });
			} else {
				const { avatarUrl, nickName } = data;
				this.userLoginAction({ userName: nickName, avator: avatarUrl });
			}
		},
		// 触发登录提交表单
		submit() {
			this.$refs.form
				.validate()
				.then(async data => {
					console.log('表单数据信息：', data);
					wx.cloud
						.database()
						.collection('user')
						.where({
							userName: data.name
						})
						.get({
							success(res) {
								console.log('获取数据成功=', res);
								if(data.password = res.data[0].password){
									uni.showToast({
										title: '登录成功'
									});
								}
							},
							fail(err) {
								console.log('获取数据失败', err);
							}
						});

					// if (!this.resultData.flag) {
					// 	return this.messageToggle(0);
					// }
					// try {
					// 	const res = await this.$request({
					// 		method: 'POST',
					// 		url: '/shop/login',
					// 		data
					// 	});
					// 	this.loginAfter(res.token);
					// 	this.messageToggle(1);
					// } catch (e) {
					// 	//TODO handle the exception
					// }
				})
				.catch(err => {
					console.log('表单错误信息：', err);
				});
		},
		messageToggle(type) {
			if (type === 1) {
				this.msgType = 'success';
				this.messageText = '登录成功，即将跳转...';
				this.$refs.message.open();
				this.timer = setTimeout(function() {
					uni.switchTab({
						url: '/pages/member/member'
					});
				}, 500);
			} else if (type === 0) {
				this.msgType = 'error';
				this.messageText = '请拖动滑块验证';
				this.$refs.message.open();
			}
		},
		// #ifdef MP-WEIXIN
		wxLogin() {
			console.log('微信登录！');
			uni.getUserProfile({
				desc: '必须授权才可以继续使用', // 必填
				success: res => {
					console.log('授权成功', res);
					this.loginAfter(res.userInfo);
					uni.showToast({
						title: '登录授权成功',
						icon: 'none',
						duration: 5000,
						success() {
							uni.switchTab({ url: '/pages/member/member' });
						}
					});
				},
				fail: res => {
					console.log('授权失败', res);
					wx.showToast({
						title: '登录授权失败，继续使用需重新授权',
						icon: 'none'
					});
				}
			});
		},
		// #endif
		// #ifdef H5
		h5WxLogin() {
			uni.login({
				provider: 'weixin',
				success(authResult, code, errMsg) {
					console.log(authResult, code, errMsg);
					uni.getUserInfo({
						provider: 'weixin',
						success: function(infoRes) {
							console.log(infoRes);
							console.log('用户昵称为：' + infoRes.userInfo.nickName);
						}
					});
				}
			});
		},
		// #endif
		/* 校验结果回调函数 */
		verifyResult(res) {
			console.log(res);
			this.resultData = res;
		},
		/* 校验插件重置 */
		verifyReset() {
			this.$refs.verifyElement.reset();
			/* 删除当前页面的数据 */
			this.resultData = {};
		}
	},
	destoryed() {
		console.log('组件销毁了~');
		clearTimeout(this.timer);
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
