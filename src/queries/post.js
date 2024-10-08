import axios from "axios";

import { POST_AUTH_URL } from "../config";

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
