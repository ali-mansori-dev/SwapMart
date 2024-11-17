import Supabase from "../../../lib/helper/ClientSupabase";

export const find_my_notes = async (user_id) => {
  const { data } = await Supabase.from("sw_post_notes")
    .select(
      `
        id,
        sw_posts (*)
      `
    )
    .eq("user", user_id);
  return data;
};
