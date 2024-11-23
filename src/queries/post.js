import Supabase from "../lib/helper/ClientSupabase";

export const fetchAllPostData = async (slug) => {
  if (slug) {
    const { data: data2 } = await Supabase.rpc(
      "get_category_and_children_json",
      {
        category_slug: slug,
      }
    );
    const ids = await data2.map((value) => {
      return value.id;
    });

    const { data, error } = await Supabase.from("sw_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .in("category", ids);
    if (error) {
      throw error;
    }
    return data;
  }

  const { data, error } = await Supabase.from("sw_posts")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }
  return data;
};
export const FindPostbySlugFn = async (slug) => {
  try {
    const { data, error } = await Supabase.from("sw_posts")
      .select("*")
      .eq("slug", `${slug ?? ``}`);

    if (error) {
      throw error;
    }
    return data[0];
  } catch (error) {
    console.error(error);
  }
};
