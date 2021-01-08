import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/components/Login')
    },
    {
      path: '/Register',
      name: 'Register',
      component: () => import('@/components/Register')
    },
    {// 《蜜蜂收卡闲置资源转让协议》
      path: '/Agreement',
      name: 'Agreement',
      component: () => import('@/components/Agreement')
    },
    { // 《蜜蜂收卡卡密转让规则》
      path: '/Rules',
      name: 'Rules',
      component: () => import('@/components/Rules')
    },
    {
      path: '/Index',
      name: 'Index',
      component: () => import('@/components/Index/Index'),
      redirect: '/UserIndex',
      children:[{
        path: '/UserIndex',
        name: 'UserIndex',
        component: () => import('@/components/Index/UserIndex'),
      },
      {
        path: '/UserInfor',
        name: 'UserInfor',
        component: () => import('@/components/Index/UserInfor'),
      },
      {//修改密码
        path: '/ChangePassword',
        name: 'ChangePassword',
        component: () => import('@/components/Index/ChangePassword'),
      },
      {//首页
        path: '/FirstPage',
        name: 'FirstPage',
        component: () => import('@/components/Index/FirstPage'),
      },
      {//卡密类型
        path: '/CardType',
        name: 'CardType',
        component: () => import('@/components/Card/CardType'),
      },
      {//卡密状态
        path: '/MyTask',
        name: 'MyTask',
        component: () => import('@/components/Card/MyTask'),
      },
      {//申请卡种
        path: '/Apply',
        name: 'Apply',
        component: () => import('@/components/Card/Apply'),
      }]
    }
  ]
})
