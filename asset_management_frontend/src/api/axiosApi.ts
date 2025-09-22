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
    if (err.response?.status === 403) {
      ElMessage.success('未授權，請重新登入');
    }
    return Promise.reject(err);
  }
);

export default axiosApi;
