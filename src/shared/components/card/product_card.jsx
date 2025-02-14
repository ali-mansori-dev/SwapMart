import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, decrease_qty } from "../../../features/cart/cartSlice";
import { Button } from "@mui/material";
import trash from "../../../assets/icon/trash-outline.svg";

const CartButton = ({ data }) => {
  const productId = data?.id;
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.cartItems)?.find(
    (item) => item.id === productId
  );

  const addToCartHandle = (e) => {
    e.preventDefault();
    dispatch(add_to_cart(data));
  };
  const DeleteFromCartHandle = (e) => {
    e.preventDefault();
    dispatch(decrease_qty(productId));
  };

  return (
    <div>
      {cartData?.quantity > 0 ? (
        <div className="cart-controls w-full flex justify-between items-center">
          <Button onClick={DeleteFromCartHandle}>
            {cartData?.quantity <= 1 ? (
              <img src={trash} className="w-4 py-1" />
            ) : (
              "-"
            )}
          </Button>
          <span className="">{cartData?.quantity}</span>
          <Button onClick={addToCartHandle}>+</Button>
        </div>
      ) : (
        <Button fullWidth variant="contained" size="small" onClick={addToCartHandle}>
          add to cart
        </Button>
      )}
    </div>
  );
};

export default CartButton;
