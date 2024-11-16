import axios from "axios";

import Supabase from "../../lib/helper/ClientSupabase";

export const FindCategoryFn = async () => {
  // const data = await axios.get(`${API_CATEGORY_URL}/`);
  // return data.data;
};
export const FindCategorybySlugFn = async (slug) => {
  if (slug && slug !== "root") {
    const { data } = await Supabase.from("sw_category")
      .select("*")
      .eq("slug", slug);
    return data;
  }
  const { data } = await Supabase.from("sw_category").select("*");
  return data;
};
export const find_all_categories = async () => {
  const { data } = await Supabase.from("sw_category").select("*");
  return data;
};
export const SearchCategoryFn = async (query) => {
  // const trimedQuery = query.trim();
  // return (
  //   await axios.get(
  //     `${API_CATEGORY_URL}/search/${trimedQuery.length ? trimedQuery : "no"}`
  //   )
  // ).data;
};
