import apiRequest from '@/utils/apiRequest';

export default {
  namespaced: true,
  state: {
    isAuthorized: undefined,
  },
  getters: {
    isAuthorized: (state) => state.isAuthorized === true,
  },
  mutations: {
    SET_AUTHORIZED_STATUS(state, status) {
      state.isAuthorized = status;
    },
  },
  actions: {
    login({ commit }, formData) {
      return new Promise((resolve, reject) => {
        apiRequest
          .post('/auth/login', formData)
          .then(() => {
            commit('SET_AUTHORIZED_STATUS', true);
            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    refresh({ commit }) {
      return apiRequest
        .get('/auth/refresh')
        .then(() => {
          commit('SET_AUTHORIZED_STATUS', true);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit('SET_AUTHORIZED_STATUS', false);
        resolve()
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
