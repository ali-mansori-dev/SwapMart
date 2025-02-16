import { useState } from "react";
import cart from "../../../assets/icon/cart-outline.svg";
import { Badge, Button } from "@mui/material";
import { useSelector } from "react-redux";
import { formatteCurrency } from "../../../utils/formatNumber";
import { Link } from "react-router-dom";
import CartItem from "../../components/card/cart_item";

const CartDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="relative">
      <Badge badgeContent={totalQuantity} color="primary">
        <Button size="small" variant="outlined" onClick={toggleOpen}>
          <img src={cart} className="w-[24px]" />
        </Button>
      </Badge>

      {isOpen && (
        <div className="absolute flex flex-col top-[110%] w-[350px] bg-white border border-gray-200 right-0 rounded-lg shadow-2xl max-h-[80vh]">
          <div className="h-full overflow-auto">
            {totalQuantity > 0 ? (
              cartItems?.map((item, key) => <CartItem key={key} {...item} />)
            ) : (
              <div className="flex justify-center py-4">Your cart is empty</div>
            )}
          </div>
          <div className="border-t p-3 flex items-center justify-between h-[70px]">
            <Link to={"/cart"}>
              <Button variant="contained" disabled={totalQuantity <= 0}>
                check out
              </Button>
            </Link>
            <span>
              Total
              <strong className="pe-2">{formatteCurrency(totalPrice)} $</strong>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartDialog;
