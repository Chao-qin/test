//引入axios框架
import axios from 'axios'

export function request(config){
	//创建axios实例
	const instance = axios.create({
		//传入基础
		baseURl:'',
		timeout:5000
	})
	
	return instance(config)
}