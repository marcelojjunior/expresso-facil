import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEPATH,
});

api.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${import.meta.env.VITE_API_TOKEN}`;
      config.headers.Accept = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );