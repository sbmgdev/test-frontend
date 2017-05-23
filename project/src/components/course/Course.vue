<template>
	<div class="container">
		<h2>{{ course.title }}</h2>
    <p>{{ course.description }}</p>

    <div>
      <md-list>
        <md-list-item>
          <md-icon>today</md-icon><span>{{ course.start | moment("DD") }} de {{ course.start | moment("MMMM") }} de {{ course.start | moment("Y") }} </span>
        </md-list-item>

        <md-list-item>
          <md-icon>query_builder</md-icon> <span>De {{ course.start | moment("HH:mm") }} as {{ course.finish | moment("HH:mm") }} </span>
        </md-list-item>

        <md-list-item>
          <md-icon>room</md-icon> <span>{{ course.address.street }}, {{ course.address.number }} - {{ course.address.city }}</span>
        </md-list-item>

        <md-list-item>
          <md-icon>attach_money</md-icon> <span>R$ {{ course.price }}</span>
        </md-list-item>

        <md-list-item>
          <md-icon>label</md-icon> <span>{{ course.category }}</span>
        </md-list-item>

        <md-list-item>
          <md-avatar>
            <img :src="course.consultant.avatar" alt="People">
          </md-avatar>

          <span>{{ course.consultant.name }}</span>

        </md-list-item>

        <md-button class="md-raised md-warn">Inscrição</md-button>
      </md-list>
    </div>
	</div>
</template>
<script>

  import { mapActions, mapGetters } from 'vuex'

  export default {
    mounted () {
      this.getAllCourses()
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

<style lang="scss" scoped>
  .container{
    max-width:730px;
    margin:0 auto;
  }
  .md-list-item{
    color:#7e7e7e;
    .md-list-item-container{
      padding:0;
    }
    span{
      font-size:14px;
    }
  }
  .md-button{
    max-width: 120px;
    color: #000;
    margin: 30px auto;
    background-color: #ff9101;
  }
  h2{
    font-weight:normal;
    font-size:26px;
  }
  p{
    color:#7e7e7e;
  }
</style>