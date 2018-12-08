import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 导入样式
import './assets/main.css'

// 导入axios模块
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = 'http://localhost:3000'

// 导入el-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)
// 导入组件
import index from "./components/index.vue";
import hotSongs from "./components/hotSongs.vue";
import search from "./components/search.vue";
// 定义路由
const routes = [
  { path: '/', redirect: '/index' },
  { path: '/index', component: index },
  { path: '/hotSongs', component: hotSongs },
  { path: '/search', component: search },
]
// 实例路由对象
const router = new VueRouter({
  mode:'history',
  routes // (缩写) 相当于 routes: routes
})


// 导入vuex仓库
import Vuex from 'vuex';

Vue.use(Vuex);
const store = new Vuex.Store({
  state:{
    hisList:["张杰"]
  },
  mutations:{
    historyList(state,n){
      state.hisList.push(n);
    }
  }
})


new Vue({
  render: h => h(App),
  // 挂载根实例
  router,
  store
}).$mount('#app')
