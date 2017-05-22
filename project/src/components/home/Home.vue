<template>
  <div>
    <div v-for="course in allCourses">
      <my-card :id="course.id"
               :title="course.title" 
               :description="course.description"
               :category="course.category"
               :start="course.start"
               :finish="course.finish" />
    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import Card from '../shared/card/Card.vue'

export default {
  components: {
   'my-card' : Card
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
