import App from './App.vue'
import router from './router'
import store from './store'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/app.scss'
import 'bootstrap'

Vue.use(BootstrapVue)

Vue.use(IconsPlugin)
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
