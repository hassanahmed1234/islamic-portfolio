import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:4000/api/v1',
  // timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true // Cookies (Refresh token) handle karne ke liye
});

API.interceptors.request.use(
  (config) => {
    let localObj = JSON.parse(localStorage.getItem('localObj'));
   

    if (localObj?.token) {
      config.headers.Authorization = `Bearer ${localObj.token}`;
    }

    if (localObj?.academyId) {
      config.headers["academyid"] = localObj.academyId;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Token expiration and auto-refresh logic
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Refresh token endpoint hit karein
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL || 'http://192.168.100.16:5000/api/v1'}/auth/refresh-token`,
          {},
          { withCredentials: true }
        );
        
        const { accessToken } = res.data.data;
        localStorage.setItem('accessToken', accessToken);
        
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default API;