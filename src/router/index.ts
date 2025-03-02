// src/router/index.ts
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/price'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/price'
      },
      {
        path: 'price',
        component: () => import('@/views/PricePage.vue')
      },
      {
        path: 'holdings',
        component: () => import('@/views/HoldingsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  // Fix: Remove process.env.BASE_URL reference
  history: createWebHistory(''),
  routes
})

export default router;