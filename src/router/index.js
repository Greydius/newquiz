import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store';

import guideRoutes from './guide'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/pages/Login'),
    meta: {
      title: 'Вход',
    }
  },
  {
    path: '/modules',
    name: 'modules',
    component: () => import(/* webpackChunkName: "modules" */ '../views/pages/Modules'),
    meta: {
      title: 'Выбор блоков тестирования',
    },
  },
  {
    path: '/modules/:moduleId',
    name: 'module',
    component: () => import(/* webpackChunkName: "module" */ '../views/pages/Module'),
    meta: {
      title: 'Выбор блоков тестирования',
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/pages/Info'),
    meta: {
      title: 'Главная',
    },
    redirect: { name: 'welcome' },
    children: [
      {
        path: '',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../views/pages/info/Welcome'),
        meta: {
          title: 'Добро пожаловать!',
        },
      },
      {
        path: 'guide',
        name: 'guide',
        component: () => import(/* webpackChunkName: "guide" */ '../views/pages/info/Guide'),
        meta: {
          title: 'Инструкция по прохождению',
        },
        redirect: { name: 'guide-intro' },
        children: guideRoutes,
      },
      {
        path: 'goodbye',
        name: 'goodbye',
        component: () => import(/* webpackChunkName: "goodbye" */ '../views/pages/info/Goodbye'),
        meta: {
          title: 'С завершением!',
        },
      },
    ],
  },
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName: "404" */ '../views/pages/technical/404'),
    meta: {
      title: 'Упс, страница не найдена...',
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // store.dispatch('auth/refresh');
  store.dispatch('auth/testRefresh');
  const isAuthorized = store.getters['auth/isAuthorized'];

  if (isAuthorized) {
    if(to.name === 'login') {
      next({ name: 'home' });
    } else {
      document.title = `${to.meta.title} - Ecoforum40.ru`;
      next();
    }
    next();
  } else {
    if(to.name === 'login') {
      document.title = `${to.meta.title} - Ecoforum40.ru`;
      next();
    } else {
      next({ name: 'login' });
    }
  }
});

export default router;

