import axios, {AxiosInstance} from "axios";

const isDev = process.env.NODE_ENV === 'development';

const token = window.sessionStorage.getItem("token")



const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
}

console.log("myAxios:token="+token)

const myAxios: AxiosInstance = axios.create({
    baseURL: isDev ? 'http://localhost:8081' : 'http://42.192.183.104:8081',
    headers: headers
});

// myAxios.defaults.withCredentials = true; // 配置为true

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求啦', config)
    const token = window.sessionStorage.getItem("token");
    // Do something before request is sent
    config.headers['Authorization'] = `Bearer ${token}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦', response)
    // 未登录则跳转到登录页
    if (response?.data?.code === 40100) {
        const redirectUrl = window.location.href;
        window.location.href = `/user/login?redirect=${redirectUrl}`;
    }
    // Do something with response data
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;
