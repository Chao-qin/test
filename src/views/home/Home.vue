<template>
	<div id='home'>
		<nav-bar class='home-nav'>
			<!-- 使用三个插槽 -->
			<div slot='center' class='color'>购物街</div>
		</nav-bar>
		
		<!-- //向子组件传递信息 -->
		<home-swiper :banners="banners"></home-swiper>
	</div>
</template>

<script>
	import NavBar from '../../components/common/navBar/NavBar.vue';
	import {getHomeMultidata} from '../../network/home.js';
	
	import HomeSwiper from './childComps/HomeSwiper.vue'
	
	
	export default{
		name:'Home',
		components:{
			NavBar,
			HomeSwiper
		},
		data(){
			return{
				banners:'',
				// recommends:''
			}
		},
		created(){
			  
			  //使用生命周期函数，当组件创建时就调用网络请求
			  //getHomeMultidata方法的返回值是一个Promise
			  getHomeMultidata()
			  .then( res =>{
				  this.banners = res.data.banner.list;
				  this.recommends = res.data.recommend.list;
					
			  })
			  .catch(err=>{
				  console.log(err)
			  })
		}
		
	}
</script>

<style>
	.home-nav{
		background-color: var(--color-tint);
		color: #FFFFFF;
	}
	.slide-img{
		width:100vw;
		
	}
</style>
