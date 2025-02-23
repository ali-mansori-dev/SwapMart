import Supabase from "../../lib/helper/ClientSupabase";

async function fetchBrands() {
  const { data } = await Supabase.from("sw_brands").select("*").limit(6);
  return data;
}
const fetchProductsWithOffers = async () => {
  const { data, error } = await Supabase.from("sw_products")
    .select("*")
    .gt("offer", 0);

  if (error) {
    console.error("Error fetching products:", error);
    return;
  }
  
  return data;
};

export { fetchBrands, fetchProductsWithOffers };
