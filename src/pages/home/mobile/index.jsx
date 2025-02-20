import PropTypes from "prop-types";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import Slider from "../slider";
import CategorySection from "../category";
import { Link } from "react-router-dom";
import Brands from "../brands";

const Mobile = () => {
  return (
    <BasicLayoutMobile>
      <Slider />
      <CategorySection />
      <div className="flex gap-2 mb-8 z-0">
        <img
          loading="lazy"
          src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Banner/banner1.webp"
          className="w-full bg-slate-100 object-cover rounded-2xl h-[100px]"
        />
        <img
          loading="lazy"
          src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Banner/banner2.webp"
          className="w-full bg-slate-100 object-cover rounded-2xl h-[100px]"
        />
      </div>
      <div className="w-full bg-primary-40 text-white h-[192px] mb-8 rounded-2xl flex flex-col justify-between items-start gap-6 p-4">
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">
            Add tire installation to your order
          </span>
          <span className="text-sm text-primary-0">
            Have your new set installed locally by our network of experts.
          </span>
        </div>
        <Link className="text-primary-60 text-xs font-bold bg-white rounded-full px-4 py-2">
          Show Top Brands
        </Link>
      </div>
      <Brands />
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
  lastItemRef: PropTypes.any,
  hasNextPage: PropTypes.bool,
};
export default Mobile;
