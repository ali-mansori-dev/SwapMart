import PropTypes from "prop-types";
import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { useSelector } from "react-redux";

const CartPage = ({ isMobile }) => {
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return isMobile ? (
    <Mobile />
  ) : (
    <Desktop
      cartItems={cartItems}
      totalQuantity={totalQuantity}
      totalPrice={totalPrice}
    />
  );
};
CartPage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};
export default CartPage;
