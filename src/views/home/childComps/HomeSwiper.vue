<template>
	<swiper  ref="mySwiper" :options="swiperOptions">
		<swiper-slide v-for="item in banners">
			<a :href="item.link">
				<img :src="item.image" class='slide-img' >
			</a>
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
		
	</swiper>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import '../../../swiper/swiper.css'
	
	export default{
		name:'HomeSwiper',
		data(){
			return{
				swiperOptions:{
					autoplay:true,
					loop: true,
					pagination: {
					    el: '.swiper-pagination'
					}
				}
			}
		},
		components:{
			Swiper,
			SwiperSlide
		},
		props:{
			banners:{
				type:Array,
				default() {
					return []
				}
			}
		}
	}
</script>

<style>
</style>
