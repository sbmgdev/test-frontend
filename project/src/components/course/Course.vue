<template>
	<div>
		{{ course.title }}
	</div>
</template>
<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    mounted () {
      this.getAllCourses()
      console.log('oi')
    },
    computed: {
      ...mapGetters([
        'allCourses'
      ]),
      course () {
        let id = parseInt(this.$route.params.id)
        return this.allCourses.find((p) => p.id === id) || {}
      }
    },
    methods: {
      ...mapActions([
        'getAllCourses',      
      ])
    }
  }
</script>
<style></style>