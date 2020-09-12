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
      'testing': undefined
    },
    testsDates: {
      'young-botanist': {
        start: undefined,
        end: undefined
      },
      'young-forest-grower': {
        start: undefined,
        end: undefined
      },
      'forest-fire-protection': {
        start: undefined,
        end: undefined
      },
      'forest-plantation': {
        start: undefined,
        end: undefined
      },
      'forest-directions-and-zoology': {
        start: undefined,
        end: undefined
      },
      'forest-diseases-and-pests': {
        start: undefined,
        end: undefined
      },
    }
  },
  getters: {
    isTestingComplete(state) {
      const keys = Object.keys(state.testsResults)
      return keys.every(module => state.testsResults[module] == 'done')
    }
  },
  mutations: {
    SET_TEST_RESULTS(state, { status, test }) {
      const testingModules = [
        'forest-fire-protection',
        'forest-plantation',
        'forest-directions-and-zoology',
        'forest-diseases-and-pests'
      ];

      localStorage.setItem(`test.${test}`, status);
      state.testsResults[test] = status;

      if(status == 'done') {
        localStorage.setItem(`testDates.${test}.end`, Date.now());
        state.testsDates[test].end = Date.now();
      }

      const testingComplete = testingModules.every(testingModule => state.testsResults[testingModule] != undefined)
      if(testingComplete) {
        localStorage.setItem(`test.testing`, 'done');
      }
    },
    SET_TEST_START(state, { date, test, type }) {
      localStorage.setItem(`testDates.${test}.${type}`, date);
      state.testsDates[test][type] = date;
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
