import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import { formatteCurrency } from "../../../utils/formatNumber";
import CartButton from "./product_card";
import Image from "../image";

const CartItem = ({ id, image, title, price }) => {
  return (
    <Link
      to={`/v/${id}`}
      className="flex gap-4 border-b border-b-gray-100 last:border-b-0 p-3"
    >
      <Image
        src={image?.at(0)}
        height={100}
        width={100}
        className="rounded-lg border border-gray-200"
      />
      <div className="flex flex-col gap-1">
        <span className="text-base font-semibold line-clamp-1">{title}</span>
        <span className="text-sm text-gray-600">
          {price && price > 0 ? formatteCurrency(price) : "Best Offer"}
        </span>
        <CartButton data={{ id, image, title, price }} />
      </div>
    </Link>
  );
};
CartItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
  price: PropTypes.number,
};
export default CartItem;
