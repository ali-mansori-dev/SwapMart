import axios from "axios";

import { API_CATEGORY_URL } from "../config";

const fetchCategoryData = async () => {
  const response = await axios.get(`${API_CATEGORY_URL}`);
  return response.data;
};
export { fetchCategoryData };
