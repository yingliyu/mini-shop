<template>
	<view>
		<ld-select :multiple="true" :list="roleOptions" label-key="value" value-key="value" placeholder="请选择" clearable
			v-model="roles" @change="rolePickerChange"></ld-select>
		<view> 文件上传：</view>
		<uni-file-picker :value='files' fileMediatype="all" file-extname='pdf,xls,doc,docx,png,txt' @select="selectFile" @progress="uploadProgress"
			@success="uploadSuccess" @fail="uploadFail" />
		</uni-forms-item>
		<button @tap='uploadFile'>上传微信附件</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				roles: [],
				roleOptions: [{
					name: 'aaa',
					value: '总裁'
				}, {
					name: 'bbb',
					value: '总经理'
				}, {
					name: 'ccc',
					value: '总经理助理'
				}, {
					name: 'ddd',
					value: '部门经理'
				}],
				files: [{
					"name": "",
					"extname": "",
					"url": "",
				}]
			}
		},
		methods: {
			// 文件上传
			uploadFile() {
				console.log('文件上传')
				wx.chooseMessageFile({
					count: 10,
					type:'file',
					success(res) {
						console.log(res)
						const tempFilePaths = res.tempFiles[0].path
						wx.uploadFile({
							// url: 'http://127.0.0.1:8081/api/uploader',
							url:'https://file.cn-abs.com/filestore/common/upload/cnabs',
							filePath: tempFilePaths,
							name: 'file',
							success: (data, statusCode) => {
								console.log(data, statusCode)
							},
							fail: (err) => {
								console.log('失败或取消', err)
							}
			
						})
					}
				})
			},
			uploadimage(){
				wx.chooseImage({
				  success (res) {
				    const tempFilePaths = res.tempFilePaths
				    wx.uploadFile({
				      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
				      filePath: tempFilePaths[0],
				      name: 'file',
				      formData: {
				        'user': 'test'
				      },
				      success (res){
				        const data = res.data
				        //do something
				      }
				    })
				  }
				})
			},
			rolePickerChange(val) {
				console.log(val)
				this.roles = val
			},
			// 获取图片上传状态
			async selectFile(e) {
				console.log('选择文件：', e);
				// const filePath = e.tempFilePaths[0];
				const files = e.tempFiles[0];
				console.log(files)
				const {
					extname,
					name,
					url,
					path
				} = files
				this.files[0].name = name
				this.files[0].extname = extname
				this.files[0].url = url

				uni.uploadFile({
					url: 'https://file.cn-abs.com/filestore/common/uploadimg/cnabs',
					filePath: path,
					name: 'file',
					formData: {
						'user': 'test'
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					}
				})
				// try {
				// 	const res = await commonApi.uploadImg(param);
				// 	console.log(res);
				// 	// if (res && res.length) {
				// 	// 	state.form.mingpian = res[0].FileCode
				// 	// }
				// } catch (e) {
				// 	//TODO handle the exception
				// }
			},
			// 获取上传进度
			uploadProgress(e) {
				console.log('上传进度：', e);
			},

			// 上传成功
			uploadSuccess(e) {
				console.log('上传成功');
			},

			// 上传失败
			uploadFail(e) {
				console.log('上传失败：', e);
			}
		}
	}
</script>

<style>

</style>
