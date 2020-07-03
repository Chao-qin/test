import axios from 'axios'
export function request(config){
	//在其他地方调用，接受参数
	const instance1 = axios.create({
		baseURL:'http://123.207.32.32:8000',
		timeout: 5000,
	})
	
	//2设置拦截器,请求拦截
	instance1.interceptors.request.use(config=>{
		//拦截器的回调的参数是config
		// console.log('请求成功时拦截')
		
		//使用拦截器必须返回config，让后面的函数继续使用
		//如果没有返回return则then中调转到catch
		return config
	}, err => {
		console.log('请求失败时拦截')
		console.log(err)
		return err
	})
	
	// // //2.2响应拦截 , 参数是两个函数，函数的参数分别是请求的结果成功或者失败
	instance1.interceptors.response.use(res=>{
		// console.log('响应成功时拦截')
		
		//返回结果
		return res.data
	} , err =>{
		console.log(err)
		return err + '响应失败的拦截'
	})
	
	
	//3.让每个request函数返回值指定，每个instance1都是一个Promise，可以使用then或者reject
	return instance1(config)
	// instance1的参数:{
	// 	baseURl,
	// 	params:{
	// 		type: 'pop',
	// 		page: 1
	// 	}
	// }
	
	
	//每个instance需要的参数是对象，这个对象url和params等数据
}
