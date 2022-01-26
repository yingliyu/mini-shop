<template>
	<view>
		<box-title title="表格示例" />
		<uni-table border stripe emptyText="暂无更多数据">
			<!-- 表头行 -->
			<uni-tr>
				<uni-th align="center">日期</uni-th>
				<uni-th align="center">姓名</uni-th>
				<uni-th align="left">地址</uni-th>
			</uni-tr>
			<!-- 表格数据行 -->
			<uni-tr>
				<uni-td>2020-10-20</uni-td>
				<uni-td>Jeson</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-21</uni-td>
				<uni-td>HanMeiMei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-22</uni-td>
				<uni-td>LiLei</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
			<uni-tr>
				<uni-td>2020-10-23</uni-td>
				<uni-td>Danner</uni-td>
				<uni-td>北京市海淀区</uni-td>
			</uni-tr>
		</uni-table>
		<box-title title="表单示例" />
		<view class="form-wrapper">
			<uni-forms ref="form" :modelValue="formData" :rules="rules" label-align="right">
				<uni-forms-item label="姓名" name="name"><uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" /></uni-forms-item>
				<uni-forms-item label="邮箱 " name="email"><uni-easyinput v-model="formData.email" type="text" placeholder="请输入邮箱" /></uni-forms-item>
				<uni-forms-item required name="hobby" label="兴趣爱好"><uni-data-checkbox multiple v-model="formData.hobby" :localdata="hobby" /></uni-forms-item>
			</uni-forms>
			<button type="primary" @click="submit">提交</button>
			<text>{{JSON.stringify(submitMsg)}}</text>
		</view>
	</view>
</template>

<script>
import BoxTitle from '@/components/box-title/box-title.vue';
export default {
	components: {
		BoxTitle
	},
	data() {
		return {
			formData: {
				name: '',
				email: '',
				hobby: ''
			},
			submitMsg:'',
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
				// 对email字段进行必填验证
				email: {
					rules: [
						{
							format: 'email',
							errorMessage: '请输入正确的邮箱地址'
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
					this.submitMsg = res
				})
				.catch(err => {
					this.submitMsg = err
					console.log('表单错误信息：', err);
				});
		}
	}
};
</script>

<style>
.form-wrapper {
	padding: 30rpx;
}
</style>
