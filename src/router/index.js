import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home/Home'
import Login from 'components/Login/Login'
import Register from 'components/Register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/accounts/register',
      component: Register
    },
    {
      path: '/accounts/login',
      component: Login
    },
    {
      path: '/',
      component: Home
    }
  ]
})
