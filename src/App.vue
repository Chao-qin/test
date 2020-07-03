<template>
  <div id="app">
	<router-view></router-view>
	<main-tab-bar></main-tab-bar>
	
  </div>
</template>

<script>
import MainTabBar from './components/content/mainTabbar/MainTabBar.vue'
import {getHomeMultidata} from './network/home.js'

export default {
  name: 'App',
  components: {
	MainTabBar
  },
	data(){
		return{
			banners:'',
			recommends:''
		}
	},
  
	  
 }

</script>

<style>
	@import "assets/css/base.css";
	
</style>
