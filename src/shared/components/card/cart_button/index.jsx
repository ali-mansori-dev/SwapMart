import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, decrease_qty } from "../../../../features/cart/cartSlice";
import { Button, CircularProgress, IconButton } from "@mui/material";
import trash from "../../../../assets/icon/trash-outline.svg";
import add from "../../../../assets/icon/add-outline.svg";
import remove from "../../../../assets/icon/remove-outline.svg";
import PropTypes from "prop-types";
import { useState } from "react";
import { addToSupabase, removeFromSupabase } from "./functions";

const CartButton = ({ data }) => {
  const [loading, setIsloading] = useState(false);
  const productId = data?.product_id;

  const dispatch = useDispatch();
  const allCartsData = useSelector((state) => state.cart.cartItems);
  const { is_authed, user_info } = useSelector((state) => state.auth);

  const cartsData = allCartsData?.find((item) => item.product_id === productId);

  const addToCartHandle = async (e) => {
    e.preventDefault();
    setIsloading(true);

    if (is_authed) await addToSupabase(data, user_info);
    dispatch(add_to_cart(data));
    setIsloading(false);
  };

  const DeleteFromCartHandle = async (e) => {
    e.preventDefault();
    setIsloading(true);

    if (is_authed) await removeFromSupabase(data, user_info);
    dispatch(decrease_qty(productId));
    setIsloading(false);
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
            disabled={loading}
            onClick={DeleteFromCartHandle}
          >
            {cartsData?.quantity <= 1 ? (
              <img src={trash} className="w-4 py-1" />
            ) : (
              <img src={remove} className="w-4 py-1" />
            )}
          </IconButton>
          <span className="w-full min-w-[48px] text-center">
            {loading ? (
              <span className="w-[100px]">
                <CircularProgress size={24} color="warning" />
              </span>
            ) : (
              cartsData?.quantity
            )}
          </span>
          <IconButton
            sx={{
              width: 38,
              height: 38,
              border: "1px solid",
              borderColor: "gainsboro",
            }}
            disabled={loading}
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
          disabled={loading}
          onClick={addToCartHandle}
        >
          {loading ? (
            <span className="w-[90px] h-[22px]">
              <CircularProgress size={23} color="white" />
            </span>
          ) : (
            "add to cart"
          )}
        </Button>
      )}
    </div>
  );
};

CartButton.propTypes = { data: PropTypes.any };
export default CartButton;
