import Vue from 'vue'
import Router from 'vue-router'

import mHome from '@/pages/home'
import mProduct from '@/pages/product'
import mAbout from '@/pages/about'
import mNewsaction from '@/pages/newsaction'
import mContact from '@/pages/contact'
import mJoin from '@/pages/join'


import mProductDetails from '@/pages/product_details'
import mAboutSelf from '@/pages/about_self'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/mHome',
      name: '首页',
      component: mHome,
      meta:{
        title: '首页'
      }
    },
    {
      path: '/mProduct',
      name: '产品中心',
      component: mProduct,
      meta:{
        title: '产品中心'
      }
    },
    {
      path: '/mAbout',
      name: '关于我们',
      component: mAbout,
      redirect: '/mAbout/mAboutSelf',
      children: [
        {
          path: 'mProductDetails',
          component: mProductDetails,
          meta:{
            title: '关于我们'
          },
        },
        {
          path: 'mProductDetails2',
          component: mProduct,
          meta:{
            title: '关于我们'
          },
        },
        {
          path: 'mAboutSelf',
          component: mAboutSelf,
          meta:{
            title: '关于我们'
          },
        }
      ]
    },
    {
      path: '/mNewsaction',
      name: '最新动向',
      component: mNewsaction,
      meta:{
        title: '最新动向'
      },
    },
    {
      path: '/mContact',
      name: '联系我们',
      component: mContact,
      meta:{
        title: '联系我们'
      },
    },
    {
      path: '/mJoin',
      name: '加我我们',
      component: mJoin,
      meta:{
        title: '加我我们'
      },
    }, 
  


    
    { 
      path: '/*', 
      name : '首页',
      component: mHome,
      meta:{
        title: '首页'
      },
    },
  ]
})
