import axios from "axios";

import { API_USER_URL } from "../config";
import { getAccessToken } from "../utils/localStorage";

export const userinfo = async () => {
  const token = await getAccessToken();
  console.log(token);

  const response = await axios.get(`${API_USER_URL}/info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
