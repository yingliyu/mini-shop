import App from './App'
import {request} from './utils/api.js'
import store from './store'

Vue.prototype.$request = request
Vue.prototype.$store = store

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	 store,
    ...App
})
app.$mount()
// #endif


// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
	app.use(store)
  return {
    app
  }
}
// #endif