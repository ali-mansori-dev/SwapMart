import axios from "axios";

import { POST_AUTH_URL } from "../config";

const fetchData = async () => {
  const response = await axios.post(`${POST_AUTH_URL}`);
  return response.data;
};
export { fetchData };
