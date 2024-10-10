import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { memo } from "react";

// import { dateFormate } from "../../../shared/util/dateFormat";
import { formatteCurrency } from "../../utils/formatNumber";
import { API_UPLOADED_IMAGES_URL } from "../../config";
import { fromNow } from "../../utils/dateFormat";

function PostCard({ title, images, district, slug, amount, updatedAt }) {
  return (
    <Link
      to={`/v/${slug}`}
      className="flex p-4 border border-gray-200 justify-between rounded-xl gap-2 cursor-pointer min-w-[310px]"
    >
      <div className="flex flex-col justify-between w-max h-full max-w-[50%]">
        <h1 className="text-gray-700 text-sm max-h-[70px]  font-semibold w-full leading-5 line-clamp-2 Fanum">
          {title}
        </h1>
        <div className="flex flex-col">
          <div className="text-gray-400 text-xs py-1">
            {amount && amount > 0 ? formatteCurrency(amount) : "Best Offer"}
          </div>
          <div className="text-gray-400 text-xs line-clamp-1">
            <span>{fromNow(updatedAt)}</span> in {district}
          </div>
        </div>
      </div>
      <div className="relative w-[130px] h-[130px] pb-2/3 border border-gray-100 rounded-md">
        {images[0] ? (
          <>
            <img
              className="absolute w-[130px] h-full inset-0 object-cover object-top rounded-lg"
              src={`${API_UPLOADED_IMAGES_URL}${images[0]}`}
              srcSet={`${API_UPLOADED_IMAGES_URL}${images[0]}`}
              alt={title}
              loading="lazy"
            />
            <span className="absolute top-1 left-1 text-white bg-gray-600 text-xs px-2 p-1 inline-flex items-center flex-row-reverse gap-1 rounded-md bg-opacity-75">
              {/* <ImagesIcon size={12} /> */}
              <span className="text-xs Fanum">{images.length}</span>
            </span>
          </>
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center text-gray-400">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9cSGzVkaZvJD5722MU5A-JJt_T5JMZzotcw&s"
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
  updatedAt: PropTypes.any,
};
export default memo(PostCard);
