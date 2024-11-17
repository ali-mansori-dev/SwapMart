import Supabase from "../../../lib/helper/ClientSupabase";

export const find_my_posts = async (user_id) => {
  const { data } = await Supabase.from("sw_posts")
    .select("*")
    .eq("user", user_id);
  return data;
};
