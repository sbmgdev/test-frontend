<template>
	<div>
		<router-link :to="{ name: 'course', params: { id: id }}">
			<h1>{{ id }}</h1>
			 <h2>{{ title }}</h2>
			 <p>{{ description }}</p>
			 <p>{{ category }}</p>
			 <span>De {{ start }} a {{ finish }}</span>
			 <span>{{ city }}</span>
		</router-link>
	</div>
</template>
<script>
	export default {
	   props: ['id', 'title', 'description', 'category', 'start', 'finish', 'city' ]
	}
</script>

<style lang="scss" scoped>

</style>