import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import Desktop from "./Desktop";
import Mobile from "./Mobile";

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
