import vue from 'vue'
import vueRouter from 'vue-router'

//使用懒加载引入各组件
const Home = ()=>import('../views/home/Home')
const Cart = ()=>import('../views/cart/Cart')
const Category = ()=>import('../views/category/Category')
const Profile = ()=>import('../views/profile/Profile')

vue.use(vueRouter)

const routes = [
	{
		path:'/test',
		component: ()=> import('../components/Test.vue')
	},
	{
		path:'/home',
		component:Home,
		meta:{
			title:''
		},
		children:[]
	},
	{
		path:'/cart',
		component: Cart
	},
	{
		path:'/category',
		component:Category
	},
	{
		path:'/profile',
		component:Profile
	},
	{
		path:'',
		redirect:'/home'
	}
]

//创建路由实例
const router = new vueRouter({
	routes,
	mode:'history'
})

//导出路由
export default router