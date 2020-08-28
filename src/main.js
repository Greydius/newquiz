import Vue from 'vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import App from './App.vue'

// Ant Design Vue UI component's
import {
  ConfigProvider,
  Layout,
  Button, Icon, Avatar,
  Result, Modal,
  message,
} from 'ant-design-vue';

// Ant Design Vue UI component's
Vue.use(ConfigProvider)

Vue.use(Layout);
Vue.use(Layout.Header);
Vue.use(Layout.Footer);
Vue.use(Layout.Content);

Vue.use(Result);
Vue.use(Modal);

Vue.use(Avatar);
Vue.use(Button);
Vue.use(Icon);

Vue.prototype.$message = message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
