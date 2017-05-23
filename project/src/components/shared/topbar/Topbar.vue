<template>
	<div>
		<md-toolbar>
			<router-link :to="{ name: 'home'}">
			  <h1 class="md-title" style="flex: 1">Cursos</h1>

		  	
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
</style>