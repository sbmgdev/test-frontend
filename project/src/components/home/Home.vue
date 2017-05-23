<template>
  <div>
    <div class="container">
    
    <div class="search-bar">
      <input class="search-input " type="text" v-model="searchString" placeholder="Procure pelo nome do curso, Categoria ou Cidade..." />
      <md-icon>search</md-icon>
    </div>
      <md-layout md-gutter="16">
          <md-layout v-for="course in filteredCourses" md-flex-xsmall="100" md-flex-medium="50" md-flex-large="33"  md-flex-xlarge="33" :key="course.id"  >
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
    ]),

    filteredCourses () {
        let courses_array = this.allCourses,
            searchString = this.searchString;

        if(!searchString){
            return courses_array;
        }

        searchString = searchString.trim().toLowerCase();

        courses_array = courses_array.filter(function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }else if (item.category.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }else if (item.address.city.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
        })

        // Return an array with the filtered data.
        return courses_array;;
    }
  },
  methods: {
    ...mapActions([
      'getAllCourses',
    ])
  },
  data(){
    return{
      searchString: "",
    }
  },

}
</script>

<style lang="scss">
  .search-input{
    width: 100%;
    max-width: 480px;
    display: block;
    padding: 13px;
    background-color: #54c4f7;
    border: none;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    z-index: 10;
    font-size: 14px;
    padding-left:50px;
  }
  ::-webkit-input-placeholder { 
      color:    #fff;
  }
  :-moz-placeholder {
     color:    #fff;
     opacity:  1;
  }
  .search-bar{
    position: relative;
    margin: 0 auto;
    max-width: 480px;
    z-index: 10;
    top: 0;
    margin-bottom:25px;
    @media (min-width: 720px) {
      top: -70px;
      margin-bottom:0;
    }
    .md-icon{
      position:absolute;
      top:10px;
      left:15px;
      color:#fff;
    }
  }
</style>
