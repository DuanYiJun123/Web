import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)
/* eslint-disable */
Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
 **/
export const constantRouterMap = [
  {path: '/404', component: _import('404'), hidden: true},

  //  首页
  {
    path: '/',
    component: Layout,
    redirect: '/cloudWalkEngine',
    name: '首页',
    hidden: true,
    children: [{
      path: 'cloudWalkEngine',
      component: _import('cloudWalkEngine/index')
    }]
  },
  // 核心技术
  {
    path: '/bankCardRecog',
    component: Layout,
    redirect: '/bankCardRecog/index',
    name: '核心技术',
    meta: {title: '核心技术', icon: 'example', keepAlive: true},
    children: [
      {
        path: '/faceDetRecog',
        name: '人脸检测',
        component: _import('faceDetRecog/index'),
        meta: {title: '人脸检测', icon: 'table'}
      },
      {
        path: '/expressionRecog',
        name: '表情识别',
        component: _import('expressionRecog/index'),
        meta: {title: '表情识别', icon: 'table'}
      },
      {
        path: '/characterRecog',
        name: '人脸属性分析',
        component: _import('characterRecog/index'),
        meta: {title: '人脸属性分析', icon: 'table'}
      },
      {
        path: '/keypointRecog',
        name: '人脸关键点检测',
        component: _import('keypointRecog/index'),
        meta: {title: '人脸关键点检测', icon: 'table'}
      },
      {
        path: '/idCardRecog',
        name: '身份证识别',
        component: _import('idCardRecog/index'),
        meta: {title: '身份证识别', icon: 'table'}
      },
      {
        path: '/bankCardRecog',
        name: '银行卡识别',
        component: _import('bankCardRecog/index'),
        meta: {title: '银行卡识别', icon: 'table'}
      },
      {
        path: '/striationRecog',
        name: '人脸去网纹',
        component: _import('striationRecog/index'),
        meta: {title: '人脸去网纹', icon: 'table'}
      },
      {
        path: '/similarityRecog',
        name: '人脸相似度',
        component: _import('similarityRecog/index'),
        meta: {title: '人脸相似度', icon: 'table'}
      },
      {
        path: '/actionRecog',
        name: '动作活体',
        component: _import('actionRecog/index'),
        meta: {title: '动作活体', icon: 'table'}
      },
      {
        path: '/silentRecog',
        name: '静默活体',
        component: _import('silentRecog/index'),
        meta: {title: '静默活体', icon: 'table'}
      },
      {
        path: '/infraredRecog',
        name: '红外活体',
        component: _import('infraredRecog/index'),
        meta: {title: '红外活体', icon: 'table'}
      },
      {
        path: '/lipreadingRecog',
        name: '唇语识别',
        component: _import('lipreadingRecog/index'),
        meta: {title: '唇语识别', icon: 'table'}
      }
    ]
  },
  // 产品介绍
  {
    path: '/faceGoCubeEngine',
    component: Layout,
    redirect: '/faceGoCubeEngine/index',
    name: '产品介绍',
    meta: {title: '产品介绍', icon: 'example', keepAlive: true},
    children: [
      {
        path: '/faceGoCubeEngine',
        name: '云之眼引擎',
        component: _import('faceGoCubeEngine/index'),
        meta: {title: '云之眼引擎', icon: 'table', keepAlive: true}
      },
      {
        path: '/faceRecognitionEngine',
        name: '人脸识别引擎',
        component: _import('faceRecognitionEngine/index'),
        meta: {title: '人脸识别引擎', icon: 'tree', keepAlive: true}
      },
      {
        path: '/businessSDK',
        name: '商用SDK',
        component: _import('businessSDK/index'),
        meta: {title: '商用SDK', icon: 'tree', keepAlive: true}
      },
      {
        path: '/faceGoSmartEngine',
        name: 'FaceGoSmart',
        component: _import('faceGoSmartEngine/index'),
        meta: {title: 'FaceGoSmart', icon: 'tree', keepAlive: true}
      }
    ]
  },
  // 客户案例
  {
    path: '/securityCase',
    component: Layout,
    redirect: '/securityCase/index',
    name: '客户案例',
    meta: {title: '客户案例', icon: 'example', keepAlive: true},
    children: [
      {
        path: '/securityCase',
        name: '安防',
        component: _import('securityCase/index'),
        meta: {title: '安防', icon: 'table', keepAlive: true}
      },
      {
        path: '/financialCase',
        name: '金融',
        component: _import('financialCase/index'),
        meta: {title: '金融', icon: 'tree', keepAlive: true}
      },
      {
        path: '/otherCase',
        name: '其他',
        component: _import('otherCase/index'),
        meta: {title: '其他', icon: 'tree', keepAlive: true}
      }
    ]
  },
  {path: '*', redirect: '/404', hidden: true}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({y: 0}),
  routes: constantRouterMap
})

