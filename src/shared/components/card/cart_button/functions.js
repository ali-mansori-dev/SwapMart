import Supabase from "../../../../lib/helper/ClientSupabase";

const addIncreaseCartItemsToSupabase = async (data) => {
  try {
    // const { data: user_data } = await Supabase.auth.getUser();
    const { error } = await Supabase.from("sw_cart").insert({
      product_id: data?.id,
      quantity: 1,
    });

    if (error) {
      console.error("Error adding to Supabase:", error);
    } else {
      console.log("Product added to Supabase successfully");
    }
  } catch (err) {
    console.error("Error with Supabase:", err);
  }
};

export {
  addIncreaseCartItemsToSupabase,
};
