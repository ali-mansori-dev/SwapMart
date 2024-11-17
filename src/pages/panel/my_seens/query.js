import Supabase from "../../../lib/helper/ClientSupabase";

export const find_my_seens = async (user_id) => {
  const { data } = await Supabase.from("sw_post_viewed")
    .select(
      `
        id,
        sw_posts (*)
      `
    )
    .eq("user", user_id);
  return data;
};
