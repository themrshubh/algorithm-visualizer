import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/linear-search',
    name: 'LinearSearch',
    component: () => import('../views/LinearSearch.vue'),
  },
  {
    path: '/binary-search',
    name: 'BinarySearch',
    component: () => import('../views/BinarySearch.vue'),
  },
  {
    path: '/insertion-sort',
    name: 'InsertionSort',
    component: () => import('../views/InsertionSort.vue'),
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
