import axios from "axios";

import { API_AUTH_URL } from "../config";

export const signin = async (data) => {
  const response = await axios.post(`${API_AUTH_URL}/signin`, data);
  return response.data;
};
export const signup = async (data) => {
  const response = await axios.post(`${API_AUTH_URL}/signup`, data);
  return response.data;
};
export const sendotp = async (data) => {
  const response = await axios.post(`${API_AUTH_URL}/send-otp`, data);
  return response.data;
};
export const checkotp = async (data) => {
  const response = await axios.post(`${API_AUTH_URL}/check-otp`, data);
  return response.data;
};
