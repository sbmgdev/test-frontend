<template>
  <div>
  	<my-topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Topbar from './components/shared/topbar/Topbar.vue'

export default {
  components: {
   'my-topbar' : Topbar
  },
}
</script>

<style lang="scss">
.container{
	max-width:1030px;
	margin:0 auto;
	padding:20px 20px;
}
</style>
