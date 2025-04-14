import axios from "axios";

// Create an Axios instance
const api = axios.create({
  baseURL: "http://192.168.192.254:8000/api/v1", // Update with your base API URL
});

// Add a request interceptor to handle token expiration
api.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = localStorage.getItem("refreshToken");

    // If the error is a 401 (Unauthorized) and the refresh token exists
    if (
      error.response.status === 401 &&
      refreshToken &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      try {
        const { data } = await axios.post(
          "http://192.168.192.254:8000/api/v1/auth/token/refresh/",
          {
            refresh: refreshToken,
          }
        );

        const newAccessToken = data.access;
        localStorage.setItem("token", newAccessToken); // Store the new access token

        // Update the original request with the new access token
        originalRequest.headers.Authorization = `JWT ${newAccessToken}`;

        // Retry the original request
        return api(originalRequest);
      } catch (refreshError) {
        console.error("Failed to refresh token:", refreshError);
        // Optionally: Log the user out or redirect to login
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
