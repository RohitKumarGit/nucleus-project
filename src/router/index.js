import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import SignupLogin from '../views/SignupLogin'
import Login from '../components/login'
import Basic from '../components/basic-details'
import Identity from '../components/identity-verification'
import Setup from '../components/user-setup'
import User from '../components/UserBasic'
// import Navbar from '../components/navbar'
import Buffet from '../components/buffet'
import Local from '../components/TestSubject'
import store from '../store'
import Table from '../components/table-reserve'
import Table2 from '../components/table-reserve2'
import Table3 from '../components/table-reserve3'
import Room from '../components/room-service-main'

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
    children:[{
        path: 'basic',
        name: 'basic',
        component: Basic,
        },
        {
      path: 'identity',
      name: 'identity-verification',
      component: Identity,
      },
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
    path: '/local',
   name: 'Local',
   component: Local,
   },
   {
    path: '/buffet',
   name: 'Buffet',
   component: Buffet,
   },
{
  path: '/setup',
  name: 'setup',
  component: Setup,
  },
  {
    path: '/table',
   name: 'Table',
   component: Table,
   },
   {
    path: '/table2',
   name: 'Table2',
   component: Table2,
   },
   {
    path: '/table3',
   name: 'Table3',
   component: Table3,
   },
   {
    path: '/room',
   name: 'Room',
   component: Room,
   }
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

