import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { formatteCurrency } from "../../../utils/formatNumber";
import CartButton from "./cart_button/index";
import Image from "../image";

const CartItem = ({ id, product_id, image, title, price }) => {
  return (
    <Link
      to={`/v/${product_id}`}
      className="flex gap-4 border-b border-b-gray-100 last:border-b-0 p-4 pe-6"
    >
      <Image
        src={image?.at(0)}
        height={100}
        width={100}
        className="rounded-lg border border-gray-200 w-[100px] h-[100px]"
      />
      <div className="w-full flex flex-col gap-1">
        <span className="text-base font-semibold line-clamp-1">{title}</span>
        <span className="text-sm text-gray-600">
          {price && price > 0 ? formatteCurrency(price) : "Best Offer"}
        </span>
        <CartButton data={{ id, product_id, image, title, price }} />
      </div>
    </Link>
  );
};
CartItem.propTypes = {
  id: PropTypes.string,
  product_id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number,
};
export default CartItem;
