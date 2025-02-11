import React from "react";
import BasicLayoutDesktop from "../../layouts/desktop/basic_layout";
import { Skeleton } from "@mui/material";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import icons from "../../shared/icons.js";

const Desktop = ({ data, loading, error }) => {
  return (
    <BasicLayoutDesktop>
      <div className="flex flex-row justify-around my-12 h-[139px]">
        {loading
          ? Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <Skeleton variant="circular" width={90} height={90} />
                <Skeleton variant="text" height={24} width={100} />
              </div>
            ))
          : data?.map((item, index) => (
              <span className="flex-1 max-w-[130px]">
                <Link
                  key={index}
                  to={`/filter/${item.slug}`}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="bg-gray-200 rounded-full p-6 w-[90px] h-[90px]">
                    <img
                      src={icons[item?.icon]}
                      className="w-10"
                      alt="home-icon"
                    />
                  </div>
                  <span className="text-center">{item?.name}</span>
                </Link>
              </span>
            ))}
      </div>
      <div className="flex gap-10 pb-10">
        <img
          loading="lazy"
          src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Banner/banner1.webp"
          className="w-full bg-slate-100 object-cover rounded-2xl h-[300px]"
        />
        <img
          loading="lazy"
          src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Banner/banner2.webp"
          className="w-full bg-slate-100 object-cover rounded-2xl h-[300px]"
        />
      </div>
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.any,
};
export default Desktop;
