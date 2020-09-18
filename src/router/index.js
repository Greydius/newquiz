import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    name: 'home',
    component: () => import(/* webpackChunkName: "welcome" */ '../views/pages/info/Welcome'),
    meta: {
      title: 'Главная',
      requiredAuth: false,
    },
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Ecoforum40.ru`;
  next();
});

export default router;

