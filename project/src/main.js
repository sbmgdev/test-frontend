import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'

sync(store, router)

const moment = require('moment')
require('moment/locale/pt-br')

Vue.use(require('vue-moment'), {
    moment
})

Vue.use(VueMaterial)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})