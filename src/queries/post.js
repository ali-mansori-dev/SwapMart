import Supabase from "../lib/helper/ClientSupabase";

export const fetchAllPostData = async (slug) => {
  try {
    let ids = [];

    if (slug) {
      // Fetch category and children
      const { data: categoryData, error: categoryError } = await Supabase.rpc(
        "get_category_and_children_json",
        { category_slug: slug }
      );

      if (categoryError)
        throw new Error(`Category fetch error: ${categoryError.message}`);
      if (categoryData) {
        ids = categoryData.map((category) => category.id);
      }
    }

    // Query posts, optionally filtered by category IDs
    const query = Supabase.from("sw_posts")
      .select("*")
      .order("created_at", { ascending: false })
      .range(0, 8);

    if (ids.length) {
      query.in("category", ids);
    }

    const { data: posts, error: postError } = await query;

    if (postError) throw new Error(`Post fetch error: ${postError.message}`);
    return posts;
  } catch (error) {
    console.error("Error fetching post data:", error.message);
    throw error;
  }
};

export const FindPostbySlugFn = async (slug) => {
  if (!slug) {
    console.error("Error: Slug is required to fetch a post.");
    return null;
  }

  try {
    const { data, error } = await Supabase.from("sw_posts")
      .select("*")
      .eq("slug", slug)
      .single(); // Fetches a single row, assuming `slug` is unique

    if (error) {
      throw new Error(
        `Error fetching post by slug "${slug}": ${error.message}`
      );
    }

    return data;
  } catch (error) {
    console.error("FindPostbySlugFn Error:", error.message);
    throw error; // Rethrow the error for the caller to handle if needed
  }
};
