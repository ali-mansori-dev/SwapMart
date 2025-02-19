import Supabase from "../../../../lib/helper/ClientSupabase";

const addToSupabase = async (cartData, user_info) => {
  const { data: existing_data, error } = await Supabase.from("sw_cart")
    .select("*")
    .eq("product_id", cartData?.product_id)
    .eq("user_id", user_info?.id)
    .single();

  if (error) {
    console.error("Error syncing to Supabase:", error);
  }
  if (existing_data)
    return await Supabase.from("sw_cart")
      .update({
        quantity: existing_data.quantity + 1,
      })
      .eq("id", existing_data?.id)
      .select()
      .single();

  return await Supabase.from("sw_cart")
    .insert({ ...cartData, quantity: 1 })
    .select()
    .single();
};
const removeFromSupabase = async (cartData, user_info) => {
  console.log(cartData);
  
  const { data: existing_data, error } = await Supabase.from("sw_cart")
    .select("*")
    .eq("product_id", cartData?.product_id)
    .eq("user_id", user_info?.id)
    .single();

    console.log(existing_data);
    

  if (error) {
    console.error("Error syncing to Supabase:", error);
  }
  if (!existing_data) return;

  if (existing_data?.quantity > 1)
    return await Supabase.from("sw_cart")
      .update({
        quantity: existing_data.quantity - 1,
      })
      .eq("id", existing_data?.id)
      .select()
      .single();

  return await Supabase.from("sw_cart").delete().eq("id", existing_data?.id);
};

export { addToSupabase, removeFromSupabase };
