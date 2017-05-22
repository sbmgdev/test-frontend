<template>
  <div>
    <div v-for="course in courses">
      <my-card :id="course.id"
               :title="course.title" 
               :description="course.description"
               :category="course.category"
               :start="course.start"
               :finish="course.finish"
               :city="course.address.city" />
    </div>
  </div>
</template>

<script>

import Card from '../shared/card/Card.vue'

export default {
  components: {
    'my-card' : Card
  },

  data () {
    return {
      courses: [],
    }
  },

  created() {
    let promise = this.$http.get('https://raw.githubusercontent.com/skyzito/test-frontend/cc0aa070048b331539630344611c475a7d5b477d/api/courses.json');
    
    promise
    .then(function(res) {
      this.courses = res.body.data;
    });
  },
}
</script>

<style lang="scss">

</style>
