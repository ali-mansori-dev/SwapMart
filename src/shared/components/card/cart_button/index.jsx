import { useSelector, useDispatch } from "react-redux";
import { add_to_cart, decrease_qty } from "../../../../features/cart/cartSlice";
import { Button } from "@mui/material";
import trash from "../../../../assets/icon/trash-outline.svg";
import PropTypes from "prop-types";
import {
  addIncreaseCartItemsToLocalStorage,
  removeDecreaseCartItemsToLocalStorage,
} from "./functions";

const CartButton = ({ data }) => {
  const productId = data?.id;

  const dispatch = useDispatch();

  const allCartsData = useSelector((state) => state.cart.cartItems);

  const cartsData = allCartsData?.find((item) => item.id === productId);

  // const { is_authed } = useSelector((state) => state.auth);

  //   const saveCartItem = (cartItemData) => {
  //     console.log(is_authed, cartItemData);

  //     if (!is_authed) return addIncreaseCartItemsToLocalStorage(cartItemData);
  //     addCartItemsToSupabase(cartItemData);
  //   };

  // sw_cart
  const addToCartHandle = (e) => {
    e.preventDefault();
    // const dataProp = is_authed ? data : data;
    dispatch(add_to_cart(data));
    addIncreaseCartItemsToLocalStorage(data);
  };
  const DeleteFromCartHandle = (e) => {
    e.preventDefault();
    dispatch(decrease_qty(productId));
    removeDecreaseCartItemsToLocalStorage(data);
  };

  return (
    <div>
      {cartsData?.quantity > 0 ? (
        <div className="cart-controls w-full flex justify-between items-center">
          <Button onClick={DeleteFromCartHandle}>
            {cartsData?.quantity <= 1 ? (
              <img src={trash} className="w-4 py-1" />
            ) : (
              "-"
            )}
          </Button>
          <span className="">{cartsData?.quantity}</span>
          <Button onClick={addToCartHandle}>+</Button>
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
