// src/router/index.ts (kalau pakai TypeScript) atau index.js
import { createRouter, createWebHistory } from 'vue-router';
import LayoutDashboard from '@/components/layout/dashboard/layout.vue';
import DashboardPages from '@/pages/dashboard/pages.vue';

const routes = [
  {
    path        : '/',
    component   : LayoutDashboard,
    children    : [
        {
            path        : '',
            name        : 'Home',
            component   : DashboardPages
        },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
