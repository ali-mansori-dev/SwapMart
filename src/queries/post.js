import axios from "axios";

import { API_USER_URL, POST_AUTH_URL } from "../config";
import authorizedAxios from "../api/authrized_axios";

export const fetchData = async () => {
  const response = await axios.post(`${POST_AUTH_URL}`);
  return response.data;
};
export const FindPostbySlugFn = async (slug) => {
  try {
    const data = await axios.get(`${POST_AUTH_URL}/${slug ?? ``}`);
    return data.data;
  } catch (error) {
    console.error(error);
  }
};
export const fetchMyPost = async () => {
  const response = await authorizedAxios.get(`${API_USER_URL}/my-post`);
  return response.data;
};
export const fetchMyBookmark = async () => {
  const response = await authorizedAxios.get(`${API_USER_URL}/my-saved`);
  return response.data;
};
export const fetchMyNotes = async () => {
  const response = await authorizedAxios.get(`${API_USER_URL}/my-note`);
  return response.data;
};
