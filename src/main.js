// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import mock from '../mock/edition';
// import store from './vuex/store';
// Vue.use(mock);
import '@/static/js/common';
import '../mock/common/mock';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV !== 'production';

/* eslint-disable no-new */
new Vue({
  // store,
  router,
  el: '#app',
  ...App,
});
