import * as mutationTypes from './mutation-types'

const user = {
	//存放状态
	state: {
		token: '',
		userInfo: {
			userId: 'GUID87349374384',
			userName: "foo",
			avator: '',
			phone: ''
		}
	},
	getters: {
		getNameById: (state) => (id) => {
			return state.userInfo.find(item => {
				if(item.userId === id){
					return item.userName
				}
			})
		}
	},
	mutations: {
		[mutationTypes.SET_USERINFO] (state, userInfo) {
		  state.userInfo = userInfo
		  uni.setStorage({
				key:'userInfo',
				data:userInfo
			})
		}
	},
	actions: {
		getUserInfo({commit}) {
			commit(mutationTypes.SET_USERINFO)
		}
	}
}
export default user