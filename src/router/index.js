import Vue from 'vue'
import Router from 'vue-router'

import mHome from '@/pages/home'
import mProduct from '@/pages/product'
import mAbout from '@/pages/about'
import mNewsaction from '@/pages/newsaction'
import mContact from '@/pages/contact'
import mJoin from '@/pages/join'


import mAboutSelf from '@/pages/about_self'
import mAboutVision from '@/pages/about_vision'
import mAboutGoals from '@/pages/about_goals'
import mAboutNumber from '@/pages/about_number'


import mCreateTeam from '@/pages/create-team'
import mProductDetails from '@/pages/product_details'

import mInterview from '@/pages/interview'
import mProductInfo from '@/pages/product_info'
import mNewsActionInfo from '@/pages/newsaction_info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/mHome'
    },
    {
      path: '/mHome',
      name: '首页',
      component: mHome,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/mProduct',
      name: '产品中心',
      component: mProduct,
      redirect: '/mProduct/mProductInfo',
      meta: {
        title: '产品中心'
      },
      children : [
        {
          path: 'mProductInfo',
          name: '产品中心',
          component: mProductInfo,
          props: function (route) {
            return { 
              id: route.query.id ,
              type : route.query.type
            };
          },
          meta: {
            title: '产品中心'
          }
        }
      ]
    },
    {
      path: '/mAbout',
      name: '关于我们',
      component: mAbout,
      redirect: '/mAbout/mAboutSelf',
      children: [
        {
          path: 'mAboutSelf',
          component: mAboutSelf,
          meta: {
            title: '关于我们'
          },
        },
        {
          path: 'mAboutVision',
          component: mAboutVision,
          meta: {
            title: '关于我们'
          },
        },
        {
          path: 'mAboutGoals',
          component: mAboutGoals,
          meta: {
            title: '关于我们'
          },
        },
        {
          path: 'mAboutNumber',
          component: mAboutNumber,
          meta: {
            title: '关于我们'
          },
        }
      ]
    },
    {
      path: '/mNewsaction',
      name: '最新动向',
      component: mNewsaction,
      redirect: '/mNewsaction/mNewsActionInfo',
      meta: {
        title: '最新动向'
      },
      children : [
        {
          path: 'mNewsActionInfo',
          name: '最新动向',
          component: mNewsActionInfo,
          props: function (route) {
            return { 
              id: route.query.id ,
              type : route.query.type
            };
          },
          meta: {
            title: '最新动向'
          }
        }, 
      ]
    },
    {
        path: '/mProductDetails2',
        name: '最新动向详情',
        components: {
            xiaobai : mProductDetails
        },
          props: function (route) {
            return { 
              id: route.query.id,
            };
          },
          meta: {
            title: '最新动向详情'
          }
    },
    {
      path: '/mContact',
      name: '联系我们',
      component: mContact,
      meta: {
        title: '联系我们'
      }
    },
    {
      path: '/mJoin',
      name: '加我我们',
      component: mJoin,
      redirect : '/mJoin/mInterview',
      meta: {
        title: '加我我们'
      },
      children : [
        {
          path: 'mInterview',
          name: '加入我们',
          component: mInterview,
          props: function (route) {
            return { 
              id: route.query.id 
            };
          },
          meta: {
            title: '加入我们'
          }
        }
      ]
    },

  ]
})
