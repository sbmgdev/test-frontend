<template>
	<div>
		<router-link :to="{ name: 'course', params: { id: id }}">
			<md-card class="card-ripple" md-with-hover>
			  <div class="pd-17">
			      <p>{{ category }}</p>
			      <h2>{{ title }}</h2>
			      <span>{{ city }}</span>
		      </div>
			  <md-card-actions class="pd-17">
			  <span class="date">De {{ start | moment("DD/MM") }} a {{ finish | moment("DD/MM/YYYY") }}</span>
			    <md-button class="md-icon-button">
			      <md-icon>today</md-icon>
			    </md-button>
			  </md-card-actions>
			</md-card>
		</router-link>
	</div>
</template>

<script>
	export default {
	   props: ['id', 'title', 'description', 'category', 'start', 'finish', 'city' ]
	}
</script>

<style lang="scss" scoped>
	.md-card{
		margin-bottom:25px;
		min-height:220px;
	}
	hr{
		width:100%;
		border-color:#ccc;
	}
	p{
		color:#757575;
		font-size:12px;
		margin:0;
	}
	h2{
		color:#242424;
		font-size:16px;
		font-weight:normal;
	}
	span{
		color:#757575;
		font-size:14px;
		&.date{
			position:absolute;
			left:17px;
		}
	}
	a:not(.md-button):not(.md-bottom-bar-item):hover{
		text-decoration:none;
	}
	.pd-17{
		padding:17px;
	}
	.md-layout{
		> div{
			width:100%;
		}
	}
	.md-card-actions{
		position: absolute;
	    bottom: 0;
	    border-top: 1px solid #ccc;
	    width: 100%;
	}
</style>