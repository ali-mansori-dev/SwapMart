import Supabase from "../lib/helper/ClientSupabase";

export const fetchData = async () => {
  const { data, error } = await Supabase.from("sw_posts").select("*");
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
export const fetchMyPost = async () => {
  // const response = await authorizedAxios.get(`${API_USER_URL}/my-post`);
  // return response.data;
};
export const fetchMyBookmark = async () => {
  // const response = await authorizedAxios.get(`${API_USER_URL}/my-saved`);
  // return response.data;
};
export const fetchMyNotes = async () => {
  // const response = await authorizedAxios.get(`${API_USER_URL}/my-note`);
  // return response.data;
};
export const fetchMySeens = async () => {
  // const response = await authorizedAxios.get(`${API_USER_URL}/my-seen`);
  // return response.data;
};
