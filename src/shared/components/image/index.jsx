import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ImageComponent = ({
  src,
  alt,
  width,
  height,
  className,
  fallbackSrc,
}) => {
  const [imgSrc, setImgSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!src) {
      setImgSrc(
        fallbackSrc ||
          "https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images//noimage.svg"
      );
      setIsLoading(false);
      return;
    }

    const fullSrc = `${
      import.meta.env.VITE_SUPABASE_URL
    }/storage/v1/object/public/images/SwapMart/${src}`;

    const img = new Image();
    img.src = fullSrc;

    img.onload = () => {
      setImgSrc(fullSrc);
      setIsLoading(false);
    };

    img.onerror = () => {
      setImgSrc(
        fallbackSrc ||
          "https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images//noimage.svg"
      );
      setIsLoading(false);
    };
  }, [src, fallbackSrc]);

  return isLoading ? (
    <div
      width={width}
      height={height}
      className={`${className} bg-slate-100 flex justify-center items-center`}
    >
      <CircularProgress color="warning" size={24} />
    </div>
  ) : (
    <img
      src={imgSrc}
      alt={alt || "Default Image"}
      width={width}
      height={height}
      loading="lazy"
      className={className}
    />
  );
};
ImageComponent.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
  fallbackSrc: PropTypes.string,
};
export default ImageComponent;
