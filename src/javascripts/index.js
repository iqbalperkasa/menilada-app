import Vue from 'vue'
import App from './App.vue';

import router from './router';

const APP_WRAPPER = '#app';

new Vue({
  el: APP_WRAPPER,
  router,
  render: h => h(App),
});
