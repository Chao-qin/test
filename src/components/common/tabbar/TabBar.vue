<template>
	<div id='tab-bar'>
		<slot></slot>
	</div>
</template>

<script>
	import TabBarItem from './TabBarItem.vue'
	export default{
		name:'TabBar',
		components:{
			TabBarItem
		}
	}
</script>

<style>
	#tab-bar{
		height: 49px;
		background-color: #f6f6f6;
		position: fixed;
		bottom:0;
		left: 0;
		right: 0;
		box-shadow: 0 -2px 1px rgba(100,100,100,0.08);
		display: flex;
	}
</style>
