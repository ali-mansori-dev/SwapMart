import PropTypes from "prop-types";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import CardsPreview from "../cards_preview";
import Slider from "../slider";
import CategorySection from "../category";
import Footer from "../../../shared/footer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Desktop = ({ data, isLoading, lastItemRef, hasNextPage }) => {
  return (
    <BasicLayoutDesktop>
      <Slider />
      <CategorySection />
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
      <div className="w-full bg-primary-40 text-white h-[150px] mb-10 rounded-2xl flex flex-row justify-between items-center p-10">
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold">
            Add tire installation to your order
          </span>
          <span className="text-xl text-primary-0">
            Have your new set installed locally by our network of experts.
          </span>
        </div>
        <Link className="text-primary-60 font-bold bg-white rounded-full px-5 py-2">
          Show Top Brands
        </Link>
      </div>
      <div className="w-full bg-slate-200 mb-10 rounded-lg h-[300px]"></div>
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
  lastItemRef: PropTypes.any,
  hasNextPage: PropTypes.bool,
};
export default Desktop;
