import Supabase from "../../../../lib/helper/ClientSupabase";

const addIncreaseCartItemsToLocalStorage = (data) => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = storedCart.findIndex(
    (item) => item.id === data.id
  );

  if (existingProductIndex >= 0) {
    storedCart[existingProductIndex].quantity += 1;
  } else {
    storedCart.push({ ...data, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(storedCart));
};
const removeDecreaseCartItemsToLocalStorage = (data) => {
  console.log(data);

  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProductIndex = storedCart.findIndex(
    (item) => item.id === data.id
  );
  console.log(existingProductIndex);

  if (existingProductIndex === undefined) return;

  if (storedCart[existingProductIndex].quantity > 1) {
    storedCart[existingProductIndex].quantity -= 1;
  } else {
    storedCart.splice(existingProductIndex, 1);
  }

  localStorage.setItem("cart", JSON.stringify(storedCart));
};
const addIncreaseCartItemsToSupabase = async (data) => {
  try {
    const { data: user_data } = await Supabase.auth.getUser();
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
  addIncreaseCartItemsToLocalStorage,
  removeDecreaseCartItemsToLocalStorage,
  addIncreaseCartItemsToSupabase,
};
