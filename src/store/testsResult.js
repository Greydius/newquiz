import apiRequest from '@/utils/apiRequest';

const testTypes = {
  'young-botanist': 'young_botanist',
  'young-forest-grower': 'young_forest_grower',
  'forest-fire-protection': 'forest_fire_protection',
  'forest-plantation': 'forest_plantation',
  'forest-directions-and-zoology': 'forest_directions_and_zoology',
  'forest-diseases-and-pests': 'forest_diseases_and_pests',
}

export default {
  namespaced: true,
  state: {
    testsResults: {
      'young-botanist': undefined,
      'young-forest-grower': undefined,
      'forest-fire-protection': undefined,
      'forest-plantation': undefined,
      'forest-directions-and-zoology': undefined,
      'forest-diseases-and-pests': undefined,
    },
  },
  getters: {
  },
  mutations: {
    SET_TEST_RESULTS(state, { status, test }) {
      localStorage.setItem(`test.${test}`, status);
      state.testsResults[test] = status;
    },
    SET_ARCHIVED_TESTS_RESULTS(state) {
      for(let testResultName in state.testsResults) {
        state.testsResults[testResultName] = localStorage.getItem(`test.${testResultName}`)
      }
    }
  },
  actions: {
    set({ commit }, {test, formData}) {
      return new Promise((resolve, reject) => {
        apiRequest
          .post('/tests', { [testTypes[test]]: JSON.stringify(formData) })
          .then(() => {
            commit('SET_TEST_RESULTS', { 
              test: test,
              status: 'done'
             });

            resolve();
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};
