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
      next(!store.getters.getUser ? null : { path: '/dashboard' })
    }
  },

  // Protected routes must come here
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../layouts/DashboardLayout'),
    children: [
      // { path: '', name: 'home', component: () => import('../views/Home.vue') },

      // Unit routes
      { path: '/unit', name: 'unitList', component: () => import('../views/Unit/List.vue') },
      { path: '/unit/add', name: 'unitFormNew', component: () => import('../views/Unit/Form.vue') },
      { path: '/unit/edit/:id', name: 'unitFormEdit', component: () => import('../views/Unit/Form.vue') },

      // Ingredient routes
      { path: '/ingredient', name: 'ingredientList', component: () => import('../views/Ingredient/List.vue') },
      { path: '/ingredient/add', name: 'ingredientFormNew', component: () => import('../views/Ingredient/Form.vue') },
      { path: '/ingredient/edit/:id', name: 'ingredientFormEdit', component: () => import('../views/Ingredient/Form.vue') },

      // Ingredient routes
      { path: '/recipe', name: 'recipeList', alias: '', component: () => import('../views/Recipe/List.vue') },
      { path: '/recipe/add', name: 'recipeFormNew', component: () => import('../views/Recipe/Form.vue') },
      { path: '/recipe/details/:id', name: 'recipeDetails', component: () => import('../views/Recipe/Details.vue') },
      { path: '/recipe/edit/:id', name: 'recipeFormEdit', component: () => import('../views/Recipe/Form.vue') }
    ],
    beforeEnter (to, from, next) {
      next(store.getters.getUser ? null : { path: '/signin' })
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
