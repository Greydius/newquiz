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
      requiredAuth: false,
    },
  },
  {
    path: '/modules/:moduleId',
    name: 'module',
    component: () => import(/* webpackChunkName: "module" */ '../views/pages/Module'),
    meta: {
      title: 'Выбор блоков тестирования',
      requiredAuth: false,
    },
  },
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/pages/Info'),
    meta: {
      title: 'Главная',
      requiredAuth: false,
    },
    redirect: { name: 'welcome' },
    children: [
      {
        path: '',
        name: 'welcome',
        component: () => import(/* webpackChunkName: "welcome" */ '../views/pages/info/Welcome'),
        meta: {
          title: 'Добро пожаловать!',
          requiredAuth: false,
        },
      },
      {
        path: '/support',
        name: 'support',
        component: () => import(/* webpackChunkName: "support" */ '../views/pages/info/Support'),
        meta: {
          title: 'Поддержка',
        },
      },
      {
        path: '/documents',
        name: 'documents',
        component: () => import(/* webpackChunkName: "support" */ '../views/pages/info/Documents'),
        meta: {
          title: 'Документы',
        },
      },
      {
        path: 'guide',
        name: 'guide',
        component: () => import(/* webpackChunkName: "guide" */ '../views/pages/info/Guide'),
        meta: {
          title: 'Инструкция по прохождению',
          requiredAuth: true,
        },
        redirect: { name: 'guide-intro' },
        children: guideRoutes,
      },
      {
        path: 'test-guide',
        name: 'test-guide',
        component: () => import(/* webpackChunkName: "test-guide" */ '../views/pages/info/TestGuide'),
        meta: {
          title: 'Инструкция по прохождению',
          requiredAuth: true,
        },
        redirect: { name: 'test-guide-intro' },
        children: [
          {
            path: '',
            name: 'test-guide-intro',
            component: () => import(/* webpackChunkName: "test-guide-intro" */ '../views/pages/info/guide/TestIntro'),
            meta: {
              title: 'Введение - Инструкция по прохождению',
              requiredAuth: true,
            },
          },
        ],
      },
      {
        path: 'lite-guide',
        name: 'lite-guide',
        component: () => import(/* webpackChunkName: "lite-guide" */ '../views/pages/info/LiteGuide'),
        meta: {
          title: 'Инструкция по прохождению',
          requiredAuth: true,
        },
      },
      {
        path: 'goodbye',
        name: 'goodbye',
        component: () => import(/* webpackChunkName: "goodbye" */ '../views/pages/info/Goodbye'),
        meta: {
          title: 'С завершением!',
        },
      },
      {
        path: 'test-goodbye',
        name: 'test-goodbye',
        component: () => import(/* webpackChunkName: "test-goodbye" */ '../views/pages/info/TestGoodbye'),
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
  store.dispatch('auth/refresh')
  .then(() => {
    const isAuthorized = store.getters['auth/isAuthorized'];

    if (to.meta.requiredAuth && !isAuthorized) {
      next({ name: 'login' });
    } else {
      document.title = `${to.meta.title} - Ecoforum40.ru`;
      next();
    }
  })
  .catch(() => {
    if (to.meta.requiredAuth) {
      next({ name: 'login' });
    } else {
      document.title = `${to.meta.title} - Ecoforum40.ru`;
      next();
    }
  });
});

export default router;

