import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:9090/api',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.clear();
    }
    if (error.response?.status === 403) {
      // Sin permisos
      window.location.href = '/YouDontHaveAccessToThisPageBecauseYouDontHavePermissionDuhStupidUserGoOutNoRole';
    }
    return Promise.reject(error);
  }
);

export default api;
