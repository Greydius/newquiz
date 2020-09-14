export default [
  {
    path: '',
    name: 'guide-intro',
    component: () => import(/* webpackChunkName: "guide-intro" */ '../views/pages/info/guide/Intro'),
    meta: {
      title: 'Введение - Инструкция по прохождению',
      requiredAuth: true,
    },
  },
  {
    path: 'modules',
    name: 'guide-modules',
    component: () => import(/* webpackChunkName: "guide-modules" */ '../views/pages/info/guide/Modules'),
    meta: {
      title: 'Этапы - Инструкция по прохождению',
      requiredAuth: true,
    },
  },
  {
    path: 'module',
    name: 'guide-module',
    component: () => import(/* webpackChunkName: "guide-module" */ '../views/pages/info/guide/Module'),
    meta: {
      title: 'Первый этап - Инструкция по прохождению',
      requiredAuth: true,
    },
  },
  {
    path: 'modules-again',
    name: 'guide-modules-again',
    component: () => import(/* webpackChunkName: "guide-modules-again" */ '../views/pages/info/guide/ModulesAgain'),
    meta: {
      title: 'Вновь этапы - Инструкция по прохождению',
      requiredAuth: true,
    },
  },
  {
    path: 'test',
    name: 'guide-test',
    component: () => import(/* webpackChunkName: "guide-test" */ '../views/pages/info/guide/Test'),
    meta: {
      title: 'Проба тестов - Инструкция по прохождению',
      requiredAuth: true,
    },
  },
  {
    path: 'finish',
    name: 'guide-finish',
    component: () => import(/* webpackChunkName: "guide-finish" */ '../views/pages/info/guide/Finish'),
    meta: {
      title: 'Финиш! - Инструкция по прохождению',
      requiredAuth: true,
    },
  },
]
