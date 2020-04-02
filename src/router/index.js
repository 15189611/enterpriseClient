import Vue from 'vue'
import Router from 'vue-router'

import mHome from '@/pages/home'
import mProduct from '@/pages/product'
import mAbout from '@/pages/about'
import mNewsaction from '@/pages/newsaction'
import mContact from '@/pages/contact'
import mJoin from '@/pages/join'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mHome',
      name: '首页',
      component: mHome
    },
    {
      path: '/mProduct',
      name: '产品中心',
      component: mProduct
    },
    {
      path: '/mAbout',
      name: '关于我们',
      component: mAbout
    },
    {
      path: '/mNewsaction',
      name: '最新动向',
      component: mNewsaction
    },
    {
      path: '/mContact',
      name: '联系我们',
      component: mContact
    },
    {
      path: '/mJoin',
      name: '加我我们',
      component: mJoin
    },



    
    { 
      path: '/*', 
      name : '首页',
      component: mHome
    },
  ]
})
