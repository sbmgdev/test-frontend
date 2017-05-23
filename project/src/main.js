import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'
import VueMaterial from 'vue-material'
import VueMoment from 'vue-moment'

sync(store, router)

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(VueMoment)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})