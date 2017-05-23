<template>
	<div>
		<md-toolbar>
			<router-link :to="{ name: 'home'}">
			    <h1 class="md-title" style="flex: 1">
			    	Cursos <md-icon v-if="['course'].indexOf($route.name) > -1"><i class="material-icons">keyboard_backspace</i></md-icon>
			    </h1>
				
			</router-link>
		</md-toolbar>
	</div>
</template>
<script>
export default {
  
}
</script>

<style lang="scss" scoped>
	.md-theme-default.md-toolbar{
		background-color:#2196f3;
	}
	h1{
		color:#ffffff;
		&:hover{
			color:#ccc;
		}
	}
	a:not(.md-button):not(.md-bottom-bar-item):hover{
		text-decoration:none;
	}
	.material-icons{
		color:#fff;
	}
</style>