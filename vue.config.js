module.exports = {
	configureWebpack:{
		resolve:{
			//配置别名路径，已经配置了一个src为@
			alias:{
				'assets':'src/assets',
				'common':'src/common', 
				'components':"src/components",
				'network':'src/network',
				'views':'src/views' 
			}
		}
	}
}