import axios from 'axios';

const axiosInstance = axios.create({

  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Use environment variables for the base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add interceptors for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log or handle errors globally
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
