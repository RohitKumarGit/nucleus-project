import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import SignupLogin from '../views/SignupLogin'
import Login from '../components/login'
// import Basic from '../components/basic-details'
// import Identity from '../components/identity-verification'
import Setup from '../components/user-setup'
import User from '../components/UserBasic'
import Navbar from '../components/navbar'
import store from '../store'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupLogin,
    children:[//{
    //     path: 'basic',
    //     name: 'basic',
    //     component: Basic,
    //     },
    //     {
    //   path: 'identity',
    //   name: 'identity-verification',
    //   component: Identity,
    //   },
      {
        path: 'setup',
        name: 'setup',
        component: Setup,
        },
    ]
  },
  {
    path: '/user',
    name: 'User',
    component:User,
    meta:{authRequired: true}
  },
  {
     path: '/navbar',
    name: 'Navbar',
    component: Navbar,
    },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to,_,next)=>{
  if(to.matched.some(routeRecord => routeRecord.meta.authRequired)) {
    if(!store.state.user) {
      next({
        path:"/",
        query:{redirect: to.fullPath}
      });
    }
    else{
      next();
    }
  }else{
    next();
  }
});
export default router

