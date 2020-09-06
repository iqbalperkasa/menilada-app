import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from 'pages/Index';
import Produk from 'pages/Produk';

const routes = [
  { path: '/', component: Index },
  { path: '/produk', component: Produk },
];

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
});

export default router;
