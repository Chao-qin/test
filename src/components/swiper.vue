<template>
	<div>
		<swiper ref="mySwiper" :options="swiperOptions">
		    <swiper-slide>
				<div><slot></slot></div>
			</swiper-slide>
		    
		</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import '../swiper/swiper.css'
	
	export default{
		name:'mySwiper',
		data(){
			return{
				swiperOptions:{
					autoplay:true,
					loop: true
				}
			}
		},
		components:{
			Swiper,
			SwiperSlide
		}
	}
</script>

<style>
</style>
