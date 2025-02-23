import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

import { formatteCurrency } from "../../../utils/formatNumber";
import ImageComponent from "../image";

function SmallPostCard({ title, image = [], id, price, offer }) {
  return (
    <Link
      to={`/v/${id}`}
      className="h-[248px] lg:h-[290px] flex flex-col border border-gray-300 rounded-lg overflow-hidden"
    >
      <div className="text-gray-700 flex flex-col w-full h-full bg-white rounded-lg overflow-hidden">
        <div className="h-[calc(100%-112px)] p-3 pb-0">
          <ImageComponent
            src={image?.at(0)}
            className="w-full h-[135px] lg:h-[163px]  border-gray-200 object-cover rounded-lg"
          />
        </div>
        <div className=" bg-white flex flex-col pb-4 pt-1 px-4">
          <h3 className="line-clamp-1 mb-3 text-gray-900 overflow-hidden h-[24px]">
            {title}
          </h3>
          <div className="w-full flex flex-row justify-between items-center text-xs">
            <div className="flex flex-col gap-1">
              {offer > 0 && price && (
                <span className="text-gray-400 line-through">
                  {formatteCurrency(price)}
                </span>
              )}
              {price && (
                <span className="text-sm font-bold text-gray-600">
                  {formatteCurrency(price)}
                </span>
              )}
            </div>
            {offer > 0 && (
              <span className="text-xs bg-primary-50 text-white h-max py-[1px] px-[4px]  rounded-full">
                {offer}%
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

SmallPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string.isRequired,
  price: PropTypes.number,
  offer: PropTypes.number,
  created_at: PropTypes.string,
};

export default memo(SmallPostCard);
