import apiRequest from '@/utils/apiRequest';

const STORAGE_URL = process.env.VUE_APP_STORAGE_URL;

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
      user.avatar = STORAGE_URL + user.avatar

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
    refresh({ commit, getters }) {
      return new Promise((resolve, reject) => {
        if(getters.isAuthorized) {
          resolve();
        } else {
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
        }
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
  },
};
