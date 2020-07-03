<!-- //封装一个导航栏 -->

<template>
	<div class='nar-bar'>
		<div class='left'><slot name='left'></slot></div>
		<div class='center'><slot name='center'></slot></div>
		<div class='right'><slot name='right'></slot></div>
	</div>
</template>

<script>
	
	export default{
		name:'NavBar',
		
		
	}
	
</script>

<style>
	.nar-bar{
		height:44px;
		display: flex;
		line-height:44px;
		text-align: center;
		box-shadow: 0px 1px 2px rgba(100,100,100,0.1);
	}
	.left , .right{
		width: 60px;
	}
	.left{
		/* background-color: blue; */
	}
	.right{
		/* background-color: red; */
	}
	
	.center{
		flex:1;
		/* background-color: mediumvioletred; */
		/* color: white; */
	}
	
</style>
