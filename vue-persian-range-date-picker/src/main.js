import Vue from 'vue'
import App from './App.vue'
import VueDateRangePicker from "./components/VueDateRangePicker";
Vue.component('vue-date-range-picker', VueDateRangePicker);

import './assets/scss/picker.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
