import * as mutationTypes from './mutation-types'

const user = {
	//存放状态
	state: {
		token: uni.getStorageSync('token')||'',
		loginState: uni.getStorageSync('loginState')==='ok'?true:false,
		userInfo: !!uni.getStorageSync('userInfo')?JSON.parse(uni.getStorageSync('userInfo')):{
			userId: '',
			userName: "未知用户",
			nickName:'未知用户',
			avator: '/static/avator.png',
			phone: ''
		}
	},
	mutations: {
		// 登入
		[mutationTypes.USERLOGIN](state, userInfo) {
			state.loginState = true
			state.userInfo = userInfo
			uni.setStorageSync('loginState', 'ok')
			uni.setStorageSync('userInfo', JSON.stringify(userInfo))
		},
		// 登出
		[mutationTypes.USERLOGOUT](state) {
			state.loginState = false
			state.userInfo = {
				userId: '',
				userName: "未知用户",
				avator: '/static/avator.png',
				phone: ''
			}
			// 清除缓存中的数据
			uni.clearStorageSync('token')
			uni.clearStorageSync('loginState')
			uni.clearStorageSync('userInfo')
		},
		[mutationTypes.SET_TOKEN](state, token) {
			uni.setStorageSync('token', token)
		}
	},
	actions: {
		checkLoginAction(context, token) {
			commit(mutationTypes.SET_TOKEN, token)
		},
		userLoginAction({
			commit
		}, userInfo) {
			commit(mutationTypes.USERLOGIN, userInfo)
		},
		userLogoutAction(context) {
			context.commit(mutationTypes.USERLOGOUT)
		}
	},
	getters: {
		getNameById: (state) => (id) => {
			return state.userInfo.find(item => {
				if (item.userId === id) {
					return item.userName
				}
			})
		}
	},
}
export default user
