import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Course from '../components/course/Course.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/course/:id',
      name: 'course',
      component: Course
    }
  ],
  mode: 'history',
})