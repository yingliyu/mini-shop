const BASE_URL = 'http://rap2api.taobao.org';

export const request = (options) => {
	const url = (options.baseUrl ? options.baseUrl : BASE_URL + '/app/mock/297725') + options.url
	return new Promise((resolve, reject) => {
		uni.request({
			url,
			method: options.method || 'GET',
			data: options.data,
			success: res => {
				if (res && res.data && res.data.meta && res.data.meta.status !== 200) {
					return uni.showToast({
						title: '获取数据失败'
					});
				}
				resolve(res.data.message);
			},
			fail: err => {
				uni.showToast({
					title: '请求接口失败'
				});
				reject(err);
			}
		});
	});
};
