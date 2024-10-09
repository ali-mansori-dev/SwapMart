import axios from "axios";
import { getAccessToken } from "../utils/localStorage";


const authorizedAxios = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

authorizedAxios.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authorizedAxios;
