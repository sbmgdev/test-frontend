<template>
  <div>
  	<my-topbar />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
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
.pagina-enter-active, .pagina-leave-active {
  transition: opacity .3s;
}
.pagina-enter, .pagina-leave-active {
  opacity: 0;
}
</style>
