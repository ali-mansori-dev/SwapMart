import { useDispatch, useSelector } from "react-redux";

import { openLayout, resetAll } from "../../../features/layout/layoutSlice";
import location_icon from "../../../assets/icon/location-outline.svg";
import chevron from "../../../assets/icon/chevron-down.svg";
import Search from "./search/index";

const NavbarMobile = () => {
  const dispatch = useDispatch();
  const { is_search_result_open } = useSelector((redux) => redux.layout);
  const onSeachClick = () => {
    dispatch(openLayout("is_search_result_open"));
  };

  return (
    <>
      <div className="w-full h-full px-4 py-2 inline-flex flex-col gap-3">
        <div
          className="w-full bg-gray-200 inline-flex gap-1 items-center px-4 rounded-lg h-[42px] text-base text-gray-600 cursor-pointer"
          onClick={onSeachClick}
        >
          Search on <span className="text-primary-30">SwapMart</span>
        </div>
        <div className="w-full inline-flex gap-1 justify-center rounded-lg items-center text-sm text-gray-600 cursor-pointer ">
          <img src={location_icon} className="w-[16px] h-[16px]" />
          <span className="w-full line-clamp-1">London, England</span>
          <img src={chevron} className="w-[16px] h-[16px] -rotate-90" />
        </div>
      </div>
      {is_search_result_open && <Search />}
    </>
  );
};

export default NavbarMobile;
