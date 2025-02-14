import PropTypes from "prop-types";
import React from "react";

const Image = ({ src, width, height, className }) => {
  const imageUrl =
    src && src?.length > 0
      ? `${
          import.meta.env.VITE_SUPABASE_URL
        }/storage/v1/object/public/images/SwapMart/${src}`
      : "https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg";

  return <img src={imageUrl} width={width} height={height} loading="lazy" className={className} />;
};
Image.propTypes = {
  src: PropTypes.any,
  className: PropTypes.string,
};
export default Image;
