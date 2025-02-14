import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

import { formatteCurrency } from "../../../utils/formatNumber";
import Image from "../image";
import CartButton from "../card/product_card";

function PostCard({ title, image = [], id, price, created_at }) {
  return (
    <Link
      to={`/v/${id}`}
      className="max-w-[340px] h-[380px] flex flex-col border border-gray-300 rounded-lg overflow-hidden"
    >
      <div className="h-[220px]">
        <Image
          src={image?.at(0)}
          className="w-full h-[220px] border-b border-gray-200 object-cover"
        />
      </div>
      <div className="p-4 flex items-start flex-col">
        <h2 className="text-lg font-bold line-clamp-1 pb-2 h-[36px]">
          {title}
        </h2>
        <h6 className="text-sm text-gray-700 pb-12 h-[28px]">
          {price && price > 0 ? formatteCurrency(price) : "Best Offer"}
        </h6>
        <CartButton data={{ title, image, id, price, created_at }} />
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  price: PropTypes.number,
  created_at: PropTypes.string.isRequired,
};

export default memo(PostCard);
