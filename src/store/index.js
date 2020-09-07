import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import testsResult from './testsResult';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth, // Auth && User,
    testsResult
  },
});
