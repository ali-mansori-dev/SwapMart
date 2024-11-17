import Supabase from "../../../lib/helper/ClientSupabase";

export const find_my_saved = async (user_id) => {
  const { data } = await Supabase.from("sw_post_saved")
    .select(
      `
        id,
        sw_posts (*)
      `
    )
    .eq("user", user_id);
  return data;
};
