import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const $get = async (url: string, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error: any) {
    console.error("GET request failed:", error);
    throw error.response ? error.response.data : error;
  }
};

export const $post = async (
  url: string,
  data: { username: string; password: string }
) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error: any) {
    console.error("POST request failed:", error);
    throw error.response ? error.response.data : error;
  }
};

export const $put = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error: any) {
    console.error("PUT request failed:", error);
    throw error.response ? error.response.data : error;
  }
};
