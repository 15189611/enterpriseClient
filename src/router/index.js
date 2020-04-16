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

import mProductDetails from '@/pages/product_details'
import mCreateTeam from '@/pages/create-team'
import mInterview from '@/pages/interview'

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
      // redirect: '/mProduct/mInterview',
      meta: {
        title: '产品中心'
      },
      children: [
        {
          path: '/mProduct/mInterview/:id',
          component: mInterview, 
          props: true
        },
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
      meta: {
        title: '最新动向'
      },
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
      redirect : '/mJoin/mProductDetails',
      meta: {
        title: '加我我们'
      },
      children : [
        {
          path: 'mProductDetails',
          name: '产品想我',
          component: mProductDetails,
          props : true,
          meta: {
            title: '产品想我'
          }
        }
      ]
    },



    // { 
    //   path: '/', 
    //   redirect : '首页',
    //   component: mHome,
    //   meta:{
    //     title: '首页'
    //   },
    // },
  ]
})
