import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

const routes = [
  // Unprotected routes here
  {
    path: '/',
    name: 'Home',
    component: () => import('../layouts/IntroLayout'),
    children: [
      { path: '', redirect: { name: 'signin' } },
      { path: '/signin', name: 'signin', component: () => import('../views/Signin.vue') },
      { path: '/signup', name: 'signup', component: () => import('../views/Signup.vue') }
    ],
    beforeEnter (to, from, next) {
      next(!(store.state && store.state.user) ? null : { name: 'home' })
    }
  },

  // Protected routes must come here
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../layouts/DashboardLayout'),
    children: [
      { path: '', name: 'home', component: () => import('../views/Home.vue') }
    ],
    beforeEnter (to, from, next) {
      next((store.state && store.state.user) ? null : { name: 'signin' })
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
