import Vue from 'vue'
import App from './App.vue'
import { store } from './store';
import { setupInterceptors } from './utils/httpInterceptors';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created() {
    setupInterceptors(store);
  },
  store
}).$mount('#app')
