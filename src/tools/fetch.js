
import axios from 'axios';



let server = axios.create({
	baseURL:'',
})

// 请求拦截器
server.interceptors.request.use(function(config){
    return config;
}, function(error){
    return Promise.reject(error);
})

// 响应拦截器
server.interceptors.response.use(function(response) {
  return response;
}, function(error) {
  return Promise.reject(error);
})



export default function fetch(url) {
  return new Promise((resolve, reject) => {
    server(url)
      .then(response => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      })
  })
}
