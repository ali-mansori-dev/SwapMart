import axios from "axios";
import Supabase from "../lib/helper/ClientSupabase";

const fetchCategoryData = async () => {
  const { data } = await Supabase.rpc("get_full_category_tree");
  return data;
};
export { fetchCategoryData };
