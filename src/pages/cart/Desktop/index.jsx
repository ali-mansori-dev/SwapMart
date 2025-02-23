import { Button } from "@mui/material";
import PropTypes from "prop-types";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import CartItem from "../../../shared/components/card/cart_item";
import { formatteCurrency } from "../../../utils/formatNumber";

const Desktop = ({ cartItems, totalQuantity, totalPrice }) => {
  return (
    <BasicLayoutDesktop>
      <div className="flex justify-between gap-6 pb-40">
        <div className="w-3/4">
          {totalQuantity > 0 ? (
            cartItems?.map((item, key) => <CartItem key={key} {...item} />)
          ) : (
            <div className="flex justify-center py-4">Your cart is empty</div>
          )}
        </div>
        <div className="border w-1/4 rounded-lg p-4">
          <div className="flex justify-between pb-6">
            <span>Total</span>
            <strong>{formatteCurrency(totalPrice)}</strong>
          </div>
          <Button variant="contained" fullWidth>
            checkout
          </Button>
        </div>
      </div>
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = {
  cartItems: PropTypes.array,
  totalQuantity: PropTypes.number,
  totalPrice: PropTypes.number,
};
export default Desktop;
