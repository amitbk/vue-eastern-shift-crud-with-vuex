import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import "bootstrap-icons"

import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);

export const bus = new Vue();
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
