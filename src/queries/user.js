import axios from "axios";

import { API_USER_URL } from "../config";
import { getAccessToken } from "../utils/localStorage";
import authorizedAxios from "../api/authrized_axios";

export const userinfo = async () => {
  const token = await getAccessToken();
  const response = await axios.get(`${API_USER_URL}/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
export const fetchMyBookmark = async () => {
  const response = await authorizedAxios.get(`${API_USER_URL}/my-bookmark`);
  return response.data;
};
