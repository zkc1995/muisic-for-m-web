import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入样式
import './assets/main.css'

// 导入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 实例路由对象
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})



new Vue({
  render: h => h(App),
  // 挂载根实例
  router
}).$mount('#app')
