<template>
  <div>
    <div class="container">
      <md-layout md-gutter="16">
          <md-layout v-for="course in allCourses" md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33"  md-flex-xlarge="33" :key="course.id"  >
          <my-card :id="course.id"
                   :title="course.title" 
                   :description="course.description"
                   :category="course.category"
                   :start="course.start"
                   :finish="course.finish"
                   :city="course.address.city" />
          </md-layout>
      </md-layout>
    </div>

  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Card from '../shared/card/Card.vue'

export default {
  components: {
   'my-card' : Card,
  },
  mounted () {
    this.getAllCourses()
  },
  computed: {
    ...mapGetters([
      'allCourses',
    ])
  },
  methods: {
    ...mapActions([
      'getAllCourses',
    ])
  }
}
</script>

<style lang="scss">

</style>
