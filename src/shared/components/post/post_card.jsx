import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

import { formatteCurrency } from "../../../utils/formatNumber";
import { fromNow } from "../../../utils/dateFormat";

function PostCard({ title, images, slug, amount, created_at }) {
  return (
    <Link
      to={`/v/${slug}`}
      className="flex p-4 border border-gray-200 justify-between rounded-xl gap-2 cursor-pointer w-full"
    >
      <div className="flex flex-col justify-between w-max h-full max-w-[50%]">
        <h1 className="text-gray-700 text-sm max-h-[70px]  font-semibold w-full leading-5 line-clamp-2 ">
          {title}
        </h1>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs py-1">
            {amount && amount > 0 ? formatteCurrency(amount) : "Best Offer"}
          </div>
          <div className="text-gray-400 text-xs line-clamp-1">
            <span>{fromNow(created_at)}</span>
          </div>
        </div>
      </div>
      <div className="relative w-[110px] h-[110px] pb-2/3 border border-gray-100 rounded-md">
        {images[0] ? (
          <>
            <img
              className="absolute w-[110px] h-full inset-0 object-cover object-top rounded-lg"
              src={`${
                import.meta.env.VITE_SUPABASE_URL
              }/storage/v1/object/images/${images[0]}`}
              srcSet={`${
                import.meta.env.VITE_SUPABASE_URL
              }/storage/v1/object/images/${images[0]}`}
              // src={`https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg`}
              alt={title}
              loading="lazy"
              onError={(e) =>
                (e.target.src = `https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/post_place_holder.png`)
              }
            />
          </>
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center text-gray-400">
            <img
              // src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/post_place_holder.png"
              src={`https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg`}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </Link>
  );
}
PostCard.propTypes = {
  title: PropTypes.string,
  images: PropTypes.string,
  district: PropTypes.number,
  slug: PropTypes.string,
  amount: PropTypes.number,
  created_at: PropTypes.any,
};
export default memo(PostCard);
