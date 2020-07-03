<template>
	<div id='main-tab-bar'>
		<tab-bar>
			<tab-bar-item path='/home' styleColor='red'>
				<img slot='item-icon' src="../../../assets/img/home.svg">
				<img slot='item-icon-active' src="../../../assets/img/home-active.svg">
				<div slot='item-text'>首页</div>
			</tab-bar-item>
			<tab-bar-item path='/category' styleColor='red'>
				<img slot='item-icon' src="../../../assets/img/fenlei.svg">
				<img slot='item-icon-active' src="../../../assets/img/fenlei-active.svg">
				<div slot='item-text'>分类</div>
			</tab-bar-item>
			<tab-bar-item path='/cart' styleColor='red'>
				<img slot='item-icon' src="../../../assets/img/buy.svg">
				<img slot='item-icon-active' src="../../../assets/img/buy-active.svg">
				<div slot='item-text'>购物车</div>
			</tab-bar-item>
			<tab-bar-item path='/profile' styleColor='red'>
				<img slot='item-icon' src="../../../assets/img/user.svg">
				<img slot='item-icon-active' src="../../../assets/img/user-active.svg">
				<div slot='item-text'>我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from '../../common/tabbar/TabBar.vue'
import TabBarItem from '../../common/tabbar/TabBarItem.vue'
	
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
	
</style>
