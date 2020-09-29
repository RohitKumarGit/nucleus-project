import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import SignupLogin from '../views/SignupLogin'
import Login from '../components/login'
import Basic from '../components/basic-details'
import Identity from '../components/identity-verification'
import Setup from '../components/user-setup'
import User from '../components/UserBasic'
import Navbar from '../components/user-navbar'

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
    component: Login,
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
    component: User
  },
  {
    path: '/user-navbar',
        name: 'Navbar',
        component: Navbar,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router

