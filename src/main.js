import Vue from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';
import ElementsUI from 'element-ui';
import { Carousel } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = 'http://63.142.250.14:10080';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = 'Bearer c8142b259f2d771e58743d0d88ef84be';
Vue.prototype.$http = axios;

Vue.use(ElementsUI, Carousel);
// set language to EN
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

locale.use(lang);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app');
