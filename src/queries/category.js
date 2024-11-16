import axios from "axios";
import Supabase from "../lib/helper/ClientSupabase";

const fetch_category_data = async () => {
  const { data } = await Supabase.rpc("get_full_category_tree");
  return data;
};
export { fetch_category_data };
