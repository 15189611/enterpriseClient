// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'
Vue.prototype.axios = axios;
if(process.env.NODE_ENV == 'development'){
  //配置本地服务器代理 config/index.js/14行
  axios.defaults.baseURL='/';
}else{
  //正式服务器地址
  axios.defaults.baseURL='http://47.101.52.36:8080'; 
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
