import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueDateRangePicker from "vue-persian-range-date-picker";

Vue.use(VueDateRangePicker);

new Vue({
  render: h => h(App),
}).$mount('#app');
