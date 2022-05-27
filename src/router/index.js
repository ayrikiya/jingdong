import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    //异步路由 按需加载 在用到这个组件时才会加载webpackChunckName这个chunk js文件
    component: () => import(/* webpackChunkName: "home" */ '../views/home/Home')
  },{
    path: '/cartList',
    name: 'CartList',
    component: () => import(/* webpackChunkName: "cartList" */ '../views/cartList/CartList')
  },{
    //动态路由
    path: '/orderConfirmation/:id/:addressId?',
    name: 'OrderConfirmation',
    component: () => import(/* webpackChunkName: "orderConfirmation" */ '../views/orderConfirmation/OrderConfirmation')
  }, {
    path: '/orderList',
    name: 'OrderList',
    component: () => import(/* webpackChunkName: "orderList" */ '../views/orderList/OrderList')
  },{
    path: '/shop/:id',
    name: 'Shop',
    component: () => import(/* webpackChunkName: "shop" */ '../views/shop/Shop')
  }, {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register/Register'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  }, {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login/Login'),
    beforeEnter(to, from, next) {
      const { isLogin } = localStorage;
      isLogin ? next({ name: 'Home'}):  next();
    }
  }, {
    path: '/chooseAddressList/:shopId',
    name: 'ChooseAddressList',
    component: () => import(/* webpackChunkName: "chooseAddressList" */ '../views/chooseAddressList/ChooseAddressList'),
  },{
    path: '/myAddressList',
    name: 'MyAddressList',
    component: () => import(/* webpackChunkName: "myAddressList" */ '../views/myAddressList/MyAddressList'),
  }, {
    path: '/upsertAddress/:id?',
    name: 'UpsertAddress',
    component: () => import(/* webpackChunkName: "upsertAddress" */ '../views/upsertAddress/UpsertAddress'),
  }, {
    path: '/person',
    name: 'PersonalInfo',
    component: () => import(/* webpackChunkName: "person" */ '../views/personalInfo/PersonalInfo'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
//路由守卫 实现基础登陆校验功能
//beforeEach表示每次路由跳转之前都会执行这个方法
router.beforeEach((to, from ,next) => {
  const { isLogin } = localStorage;
  const { name } = to;
  const isLoginOrRegister = (name === "Login" || name === "Register");
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login'});
})

export default router
