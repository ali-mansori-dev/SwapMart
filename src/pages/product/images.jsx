import { useState } from "react";
import PropTypes from "prop-types";

const Images = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full h-[280px] lg:w-[380px] lg:h-[350px] pb-2/3 lg:rounded-md">
        {images && images?.length > 0 ? (
          <img
            className="absolute w-full h-full inset-0 object-cover object-top lg:rounded-md"
            src={`${
              import.meta.env.VITE_SUPABASE_URL
            }/storage/v1/object/images/SwapMart/${images.at(imageIndex)}`}
            srcSet={`${
              import.meta.env.VITE_SUPABASE_URL
            }/storage/v1/object/images/SwapMart/${images.at(imageIndex)}`}
            alt="metal post thumbnail"
            loading="lazy"
          />
        ) : (
          <img
            className="relative w-full h-[280px] border lg:w-[380px] lg:h-[350px] pb-2/3 lg:rounded-md"
            src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
          />
        )}
      </div>
      <div className="flex flex-row gap-4 max-w-[460px] h-[100p] lg:px-0 px-3">
        {images?.slice(0, 5).map((image, index) => (
          <div
            key={index}
            className="relative w-[60px] h-[60px] lg:w-1/6 lg:h-[60px] pb-2/3  rounded-md"
            onClick={setImageIndex.bind(this, index)}
          >
            {imageIndex !== index && (
              <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-45 rounded-md z-10"></div>
            )}
            <img
              className="absolute w-full h-full inset-0 object-cover object-top rounded-md z-0"
              src={`${
                import.meta.env.VITE_SUPABASE_URL
              }/storage/v1/object/images/SwapMart/${image}`}
              srcSet={`${
                import.meta.env.VITE_SUPABASE_URL
              }/storage/v1/object/images/SwapMart/${image}`}
              alt="metal post thumbnail"
              loading="lazy"
            />
          </div>
        ))}
        {images?.length > 5 && (
          <div className="relative w-[60px] h-[60px] lg:w-1/6 lg:h-[60px] pb-2/3  rounded-md">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-45 rounded-md z-10 text-white flex items-center justify-center ">
              {images?.length > 6 && images?.length - 6 + "+"}
            </div>
            <img
              className="absolute w-full h-full inset-0 object-cover object-top rounded-md z-0"
              src={`${images[6]}`}
              alt="metal post thumbnail"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
};
Images.propTypes = { images: PropTypes.any };
export default Images;
