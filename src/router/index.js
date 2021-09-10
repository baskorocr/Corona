import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue'),
  },
  {
    path: '/negara',
    name: 'negara',
    component: () => import('../views/negara.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
