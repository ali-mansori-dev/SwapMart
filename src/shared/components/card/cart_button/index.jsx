import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, decrease_qty } from "../../../../features/cart/cartSlice";
import { Button, IconButton } from "@mui/material";
import trash from "../../../../assets/icon/trash-outline.svg";
import add from "../../../../assets/icon/add-outline.svg";
import remove from "../../../../assets/icon/remove-outline.svg";
import PropTypes from "prop-types";
import Supabase from "../../../../lib/helper/ClientSupabase";

const CartButton = ({ data }) => {
  const productId = data?.product_id;

  const dispatch = useDispatch();
  const allCartsData = useSelector((state) => state.cart.cartItems);
  const { is_authed } = useSelector((state) => state.auth);

  const cartsData = allCartsData?.find((item) => item.product_id === productId);

  const syncToSupabase = async (cartData) => {
    console.log(cartData);

    const { data, error } = await Supabase.from("sw_cart")
      .upsert(cartData, {
        onConflict: ["id"],
      })
      .select("*")
      .single();

    if (error) {
      console.error("Error syncing to Supabase:", error);
    }
    return data;
  };

  const addToCartHandle = async (e) => {
    e.preventDefault();

  //   if (is_authed) {
  //     const responsedata = await syncToSupabase({
  //       ...cartsData,
  //       product_id: productId,

  //       quantity: cartsData?.quantity ? cartsData?.quantity + 1 : 1,
  //     });
  //     return dispatch(add_to_cart(responsedata));
  //   }
    dispatch(add_to_cart(data));
  };

  const DeleteFromCartHandle = async (e) => {
    e.preventDefault();
    dispatch(decrease_qty(productId));
  };

  return (
    <div>
      {cartsData?.quantity > 0 ? (
        <div className="cart-controls w-full flex justify-between items-center">
          <IconButton
            sx={{
              width: 38,
              height: 38,
              border: "1px solid",
              borderColor: "gainsboro",
            }}
            onClick={DeleteFromCartHandle}
          >
            {cartsData?.quantity <= 1 ? (
              <img src={trash} className="w-4 py-1" />
            ) : (
              <img src={remove} className="w-4 py-1" />
            )}
          </IconButton>
          <span className="w-full min-w-[48px] text-center">
            {cartsData?.quantity}
          </span>
          <IconButton
            sx={{
              width: 38,
              height: 38,
              border: "1px solid",
              borderColor: "gainsboro",
            }}
            onClick={addToCartHandle}
          >
            <img src={add} className="w-4 py-1" />
          </IconButton>
        </div>
      ) : (
        <Button
          fullWidth
          variant="contained"
          size="small"
          onClick={addToCartHandle}
        >
          add to cart
        </Button>
      )}
    </div>
  );
};

CartButton.propTypes = { data: PropTypes.any };
export default CartButton;
