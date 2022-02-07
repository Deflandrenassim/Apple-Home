import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ipad from '../views/Ipad.vue'
import Iphone from '../views/Iphone.vue'
import Mac from '../views/Mac.vue'
import Airpods from '../views/Airpods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Iphone',
    name: 'Iphone',
    component : Iphone
  },
  {
    path: '/Ipad',
    name : 'Ipad',
    component: Ipad
  },
  {
    path: '/Airpods',
    name : 'Airpods',
    component : Airpods
  },
  {
    path: '/Mac',
    name : 'Mac',
    component : Mac
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
