import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/Index.js';
import firebase from './firebase';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
