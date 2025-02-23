import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import BasicLayoutMobile from "../../layouts/mobile/basic_layout";
import icons from "../../shared/icons.js";

const Mobile = ({ data, loading }) => {
  return (
    <BasicLayoutMobile>
      <ul className="flex flex-row flex-wrap gap-1 justify-around my-12 min-h-[80px]">
        {loading &&
          Array.from({ length: 4 }).map((_, index) => (
            <li
              key={index}
              className="w-1/4 flex-1 flex flex-col items-center gap-2 lg:gap-3"
            >
              <div className="w-[52px] h-[52px] lg:w-[90px] lg:h-[90px]">
                <Skeleton variant="rounded" sx={{ height: "100%" }} />
              </div>
              <div className="w-[52px] h-[16px] lg:w-[90px] lg:h-[24px]">
                <Skeleton variant="text" sx={{ height: "100%" }} />
              </div>
            </li>
          ))}
        {data &&
          data?.map((item, index) => (
            <li key={index} className="flex-1 w-1/4 max-w-[80px]">
              <Link
                key={index}
                to={`/filter/${item.slug}`}
                className="flex flex-col items-center gap-3"
              >
                <div className="inline-flex  items-center justify-center bg-gray-200 rounded-md p-2 w-[52px] h-[52px] lg:w-[90px] lg:h-[90px]">
                  <img
                    src={icons[item?.icon]}
                    className="w-6"
                    alt="home-icon"
                  />
                </div>
                <span className="text-center text-xs line-clamp-1">
                  {item?.name}
                </span>
              </Link>
            </li>
          ))}
      </ul>
      <div className="flex mb-8 z-0">
        <img
          loading="lazy"
          src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Banner/banner1.webp"
          className="w-[calc(50%-4px)] bg-slate-100 object-cover rounded-2xl h-[100px] me-1"
        />
        <img
          loading="lazy"
          src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Banner/banner2.webp"
          className="w-[calc(50%-4px)] bg-slate-100 object-cover rounded-2xl h-[100px] ms-1"
        />
      </div>
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
};
export default Mobile;
