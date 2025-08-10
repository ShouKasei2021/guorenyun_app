import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.guorenyun.com', // 替换为实际的API基础URL
  timeout: 10000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json',
  },
});

// 请求拦截器
apiClient.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证token等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
apiClient.interceptors.response.use(
  (response) => {
    return response.data; // 直接返回数据
  },
  (error) => {
    // 可以在这里处理错误
    return Promise.reject(error);
  }
);

export default apiClient;