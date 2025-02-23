import Supabase from "../lib/helper/ClientSupabase";

const fetch_category_data = async () => {
  const { data } = await Supabase.rpc("get_category_hierarchy");
  return data;
};
export { fetch_category_data };
