
import { useState } from "react";

import PropTypes from "prop-types";

const Images = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="flex flex-col gap-3">
      <div className="relative w-full h-[280px] lg:w-[460px] lg:h-[400px] pb-2/3 lg:rounded-md">
        {images[0] ? (
          <img
            className="absolute w-full h-full inset-0 object-cover object-top lg:rounded-md"
            src={`${images[imageIndex]}`}
            alt="metal post thumbnail"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded-md flex justify-center items-center text-gray-400">
            {/* <ImageOffIcon size={32} /> */}
          </div>
        )}
      </div>
      <div className="flex flex-row gap-4 max-w-[460px] h-[100p] lg:px-0 px-3">
        {images.slice(0, 5).map((image, index) => (
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
              src={`${image}`}
              alt="metal post thumbnail"
              loading="lazy"
            />
          </div>
        ))}
        {images.length > 5 && (
          <div className="relative w-[60px] h-[60px] lg:w-1/6 lg:h-[60px] pb-2/3  rounded-md">
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-45 rounded-md z-10 text-white flex items-center justify-center Fanum">
              {images.length > 6 && images.length - 6 + "+"}
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
