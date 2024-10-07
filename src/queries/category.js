import axios from "axios";

import { CATEGORY_AUTH_URL } from "../config";

const fetchCategoryData = async () => {
  const response = await axios.get(`${CATEGORY_AUTH_URL}`);
  return response.data;
};
export { fetchCategoryData };
