import { createRouter, createWebHistory } from 'vue-router'
import PageHome from '@/pages/home/PageHome.vue'
import PageAbout from '@/pages/about/PageAbout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome,
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout,
    },
  ],
})

export default router
