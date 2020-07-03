import {request} from './request.js'

export function getHomeMultidata(){
	
	//将这个函数的返回值设置为request的返回值
	return request({
		url:'/home/multidata',
	})
}