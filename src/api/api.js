import fetch from '@/tools/fetch.js';



let api = {}
// 获取城市热门api
api.hotCity = function(){
	return fetch({
		method: 'get',
		url:'/v1/cities?type=hot'
	})
}

// 获取所有城市参数api
api.allCity = function(){
	return fetch({
		method: 'get',
		url:'/v1/cities?type=group'
	})
}

export default api;