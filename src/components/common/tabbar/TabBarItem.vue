<template>
	<div class='tab-bar-item' @click='itemClick'>
		
		<div v-if='!isActive'>
			<slot name='item-icon'></slot>
		</div>
		<div v-else>
			<slot name='item-icon-active'></slot>
		</div>
		<div :style='activeColor'>
			<slot name='item-text'></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		props:{
			path:String,
			styleColor:{
				type:String,
				default:'green'
			}
		},
		data(){
			return{
				// isActive:true
			}
		},
		methods:{
			itemClick(){
				// this.$router.replace(this.path)
				this.$router.replace(this.path)
				// console.log(this.$router)
				// console.log(this.path)
			}
		},
		computed:{
			
			//动态决定isActive
			isActive(){
				/*返回值是一个布尔值
				用indexOf检测路由激活路径和当前活跃路径不等于-1时，即为活跃，等于-1为不活跃
				*/
			   
			   return this.$route.path.indexOf(this.path) != -1
			},
			
			activeColor(){
				return this.isActive?{color: this.styleColor}:{}
			}
		}
		
	}
	
</script>

<style>
	.tab-bar-item{
		flex:1;
		text-align: center;
	}
	.tab-bar-item img{
		width: 26px;
		height: 26px
	}
	
</style>
