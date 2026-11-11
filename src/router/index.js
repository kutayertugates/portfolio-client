import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/home/PageHome.vue'
import PageAuth from '@/pages/auth/PageAuth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },
    {
      path: '/auth',
      name: 'auth',
      component: PageAuth,
    },
  ],
})

export default router
