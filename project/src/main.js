import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import router from './router'
import store from './store/index'
import { sync } from 'vuex-router-sync'

sync(store, router)

Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})