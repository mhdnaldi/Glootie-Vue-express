import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueSweetalert2 from 'vue-sweetalert2'
import store from './store/index'
import moment from 'moment'

Vue.prototype.moment = moment
Vue.use(require('vue-moment'))
Vue.use(Chartkick.use(Chart))
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueSweetalert2)
Vue.config.productionTip = false

Vue.directive('focus', {
  inserted: function(el) {
    el.focus()
  }
})

Vue.directive('fontsize', {
  inserted: function(el, binding) {
    switch (binding.arg) {
      case 'small':
        binding.expression = '14px'
        break
      case 'medium':
        binding.expression = '16px'
        break
      case 'large':
        binding.expression = '20px'
        break
      default:
        binding.expression = '12px'
        break
    }
    el.style.fontSize = binding.expression
  }
})

new Vue({
  router,
  store, // vuex
  render: h => h(App)
}).$mount('#app')
