<template>
	<div id='home'>
		<nav-bar class='home-nav'>
			<!-- 使用三个插槽 -->
			<div slot='center' class='color'>购物街</div>
		</nav-bar>
	</div>
</template>

<script>
	import NavBar from'../../components/common/navBar/NavBar.vue'
	export default{
		name:'Home',
		components:{
			NavBar
		}
	}
</script>

<style>
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
</style>
