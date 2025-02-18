import { useState } from "react";
import cart from "../../../assets/icon/cart-outline.svg";
import { Badge, Button, Divider, IconButton, Menu } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { formatteCurrency } from "../../../utils/formatNumber";
import CartItem from "../../components/card/cart_item";
import { openLayout, resetAll } from "../../../features/layout/layoutSlice";
import { useNavigate } from "react-router-dom";

const CartDialog = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { is_cart_modal_open } = useSelector((state) => state.layout);
  const { cartItems, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const handleClick = (event) => {
    dispatch(openLayout("is_cart_modal_open"));
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    dispatch(resetAll());
  };

  const goToCartPage = () => {
    navigate("/cart");
    dispatch(resetAll());
  };

  return (
    <div className="relative">
      <Badge badgeContent={totalQuantity} color="primary" overlap="circular">
        <IconButton
          size="small"
          variant="outlined"
          className="w-[48px] h-[48px]"
          onClick={handleClick}
        >
          <img src={cart} className="w-[24px]" />
        </IconButton>
      </Badge>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={is_cart_modal_open}
        onClose={handleClose}
        className="!shadow-lg"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ paddingY: 0 }}
      >
        <div className="w-[350px] max-h-[65vh] overflow-y-auto">
          {totalQuantity > 0 ? (
            cartItems?.map((item, key) => <CartItem key={key} {...item} />)
          ) : (
            <div className="flex justify-center py-4">Your cart is empty</div>
          )}
        </div>
        <Divider />
        <div className="p-3 flex items-center justify-between h-[70px]">
          <Button
            variant="contained"
            size="small"
            onClick={goToCartPage}
            disabled={totalQuantity <= 0}
          >
            check out
          </Button>
          <span>
            Total:
            <strong className="pe-2">{formatteCurrency(totalPrice)} </strong>
          </span>
        </div>
      </Menu>
    </div>
  );
};
export default CartDialog;
