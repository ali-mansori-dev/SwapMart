import { useDispatch, useSelector } from "react-redux";

import { openLayout } from "../../../features/layout/layoutSlice";
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
          Search on <span className="text-primary-30 font-bold">SwapMart</span>
        </div>
      </div>
      {is_search_result_open && <Search />}
    </>
  );
};

export default NavbarMobile;
