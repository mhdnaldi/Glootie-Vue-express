import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import store from './store/index'

Vue.use(Chartkick.use(Chart))
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store, // vuex
  render: h => h(App)
}).$mount('#app')
