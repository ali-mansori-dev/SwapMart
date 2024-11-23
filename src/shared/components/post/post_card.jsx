import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

import { formatteCurrency } from "../../../utils/formatNumber";
import { fromNow } from "../../../utils/dateFormat";

function PostCard({ title, images = [], slug, amount, created_at }) {
  const imageUrl = images[0]
    ? `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/images/${
        images[0]
      }`
    : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";

  return (
    <Link
      to={`/v/${slug}`}
      className="flex p-4 border border-gray-200 justify-between rounded-xl gap-2 cursor-pointer w-full"
    >
      {/* Post Details */}
      <div className="flex flex-col justify-between w-max h-full max-w-[50%]">
        <h1 className="text-gray-700 text-sm max-h-[70px] font-semibold w-full leading-5 line-clamp-2">
          {title}
        </h1>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs py-1">
            {amount && amount > 0 ? formatteCurrency(amount) : "Best Offer"}
          </div>
          <div className="text-gray-400 text-xs">
            <span>{fromNow(created_at)}</span>
          </div>
        </div>
      </div>

      {/* Post Image */}
      <div className="relative w-[110px] h-[110px] border border-gray-100 rounded-md">
        <img
          className="absolute w-full h-full inset-0 object-cover object-top rounded-lg"
          src={imageUrl}
          alt={title || "Placeholder"}
          loading="lazy"
          onError={(e) => {
            e.target.src =
              "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";
          }}
        />
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  slug: PropTypes.string.isRequired,
  amount: PropTypes.number,
  created_at: PropTypes.string.isRequired,
};

export default memo(PostCard);
