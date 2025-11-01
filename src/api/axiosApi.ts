import axios from 'axios';
import { ElMessage } from 'element-plus'

const axiosApi = axios.create({
  baseURL: import.meta.env.VITE_LOGIN_API,
  timeout: 10000
});

axiosApi.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers = config.headers || {};
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

axiosApi.interceptors.response.use(
  res => res,
  err => {
    if (err.response?.status === 401) {
      ElMessage.warning('登入已過期，請重新登入');
      localStorage.removeItem('access_token');
      setTimeout(() => {
      window.location.href = '/login'
        }, 1000) // 延遲 1 秒再跳轉
      }
    return Promise.reject(err);
  }
);

export default axiosApi;
