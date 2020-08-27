import apiRequest from '@/utils/apiRequest';

import { IMAGES_URI } from '@/config/api';

export default {
  namespaced: true,
  state: {
    user: undefined,
    token: undefined,
    isAuthorized: undefined,
  },
  getters: {
    isAuthorized: (state) => state.isAuthorized === true,
    getUser: (state) => {
      const user = state.user
      user.avatar = IMAGES_URI + user.avatar

      return user;
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      localStorage.setItem('token', token);
      apiRequest.defaults.headers.Authorization = `Bearer ${token}`;
      state.token = token;
    },
    SET_USER(state, user) {
      state.user = user;
    },
    SET_AUTHORIZED_STATUS(state, status) {
      state.isAuthorized = status;
    },

    REMOVE_TOKEN(state) {
      localStorage.removeItem('token');
      state.token = false;
    }
  },
  actions: {
    login({ commit }, formData) {
      return new Promise((resolve, reject) => {
        apiRequest
          .post('/auth/login', formData)
          .then((result) => {
            const { access_token, user } = result.data;

            commit('SET_TOKEN', access_token);
            commit('SET_USER', user);
            commit('SET_AUTHORIZED_STATUS', true);

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    refresh({ commit }) {
      return new Promise((resolve, reject) => {
        apiRequest
          .post('/auth/refresh')
          .then((result) => {

            const { access_token, user } = result.data;

            commit('SET_TOKEN', access_token);
            commit('SET_USER', user);
            commit('SET_AUTHORIZED_STATUS', true);

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        apiRequest
          .post('/auth/logout')
          .then(() => {
            commit('REMOVE_TOKEN');
            commit('SET_AUTHORIZED_STATUS', false);

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      })
    },
    testLogout({ commit }) {
      return new Promise((resolve) => {
        localStorage.removeItem('testToken');
        commit('SET_AUTHORIZED_STATUS', false);
        resolve()
      })
    },
    testLogin({ commit }, formData) {
      return new Promise((resolve, reject) => {
        if(formData.username === 'guest1@ecoforum40.ru' && formData.password === 'Hardweb123!') {
          localStorage.setItem('testToken', 'Hardweb123!-guest1');
          commit('SET_AUTHORIZED_STATUS', true);
          resolve();
        } else {
          reject();
        }
      });
    },
    testRefresh({ commit }) {
      if(localStorage.getItem('testToken') === 'Hardweb123!-guest1') {
        commit('SET_AUTHORIZED_STATUS', true);
      } else {
        commit('SET_AUTHORIZED_STATUS', false);
      }
    },
  },
};
