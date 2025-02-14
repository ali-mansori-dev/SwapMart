import Supabase from "../../lib/helper/ClientSupabase";

async function fetchBrands() {
  const { data } = await Supabase.from("sw_brands").select("*").limit(6);
  return data;
}

export { fetchBrands };
