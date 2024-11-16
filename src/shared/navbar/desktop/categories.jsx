import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

// import { CategoryIconsXs } from "../../../../category/category_icons";
// import Spinner from "../../../../../shared/components/spiner";
// import Button from "../../../../../shared/components/button";
import { fetch_category_data } from "../../../queries/category";
import {
  close_all,
  open_category_modal,
} from "../../../features/layout/layoutSlice";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const { isCategoryDropOpen } = useSelector((state) => state.layout);
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const openDropDown = () => {
    dispatch(open_category_modal());
  };
  const closeDropDown = () => {
    dispatch(close_all());
  };

  const { data } = useQuery("drop_categories", fetch_category_data);

  useEffect(() => {
    if (data?.length > 0) setCategory(data[0]);
  }, [data]);

  return (
    <>
      <section className="relative">
        <Button
          size="small"
          variant="textonly"
          className={isCategoryDropOpen && `!bg-gray-200`}
          // rightIcon={
          //   <ChevronDownIcon
          //     className={isCategoryOpen && `rotate-180`}
          //     size={"12px"}
          //   />
          // }
          onClick={openDropDown}
        >
          Categories
        </Button>
        {isCategoryDropOpen && (
          <>
            <div
              onClick={closeDropDown}
              className="fixed top-[64px] left-0 right-0 bottom-0 bg-black bg-opacity-25 z-0"
            ></div>
            <div className="absolute top-[130%] flex gap-4 left-0 bg-white z-30 w-[40vw] rounded-md p-6 drop-shadow-modal">
              {data ? (
                <>
                  <div className="w-1/4 flex flex-col gap-2 border-r pr-3">
                    {data?.map((value, index) => (
                      <Link
                        key={index}
                        onMouseEnter={setCategory.bind(this, value)}
                        onClick={closeDropDown}
                        to={`/${value.slug}`}
                        className={`flex flex-row justify-between items-center gap-2 text-gray-400  px-2 py-2 rounded-lg ${
                          category?._id === value._id
                            ? `hover:bg-gray-100 text-gray-800`
                            : `hover:bg-gray-100 hover:text-gray-800`
                        }`}
                      >
                        <span className="flex gap-2 items-center">
                          {/* {value.icon !== "" && CategoryIconsXs[value.icon]} */}
                          <span className="text-xs">{value.name}</span>
                        </span>
                        {/* <ChevronLeftIcon size={14} /> */}
                      </Link>
                    ))}
                  </div>
                  <div className="w-3/4 flex flex-col gap-1">
                    {category?.children &&
                      category?.children.length > 0 &&
                      category?.children?.map((value, index) => (
                        <div key={index} className="flex flex-col gap-4 pb-8">
                          <Link
                            key={index}
                            to={`/${value.slug}`}
                            onClick={closeDropDown}
                            className={`flex flex-row items-center gap-2 text-gray-800`}
                          >
                            <span className="text-sm">{value.name}</span>
                          </Link>
                          {value?.children && value?.children.length > 0 && (
                            <div className="flex flex-col gap-2">
                              {value?.children &&
                                value?.children?.map((value, index) => (
                                  <Link
                                    key={index}
                                    to={`/${value.slug}`}
                                    onClick={closeDropDown}
                                    className={`flex flex-row items-center gap-2 text-gray-400 hover:text-primary-default`}
                                  >
                                    <span className="text-xs">
                                      {value.name}
                                    </span>
                                  </Link>
                                ))}
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                </>
              ) : (
                <CircularProgress size="30px" color="inherit" />
              )}
            </div>
          </>
        )}
      </section>
    </>
  );
};
Categories.propTypes = {
  isCategoryOpen: PropTypes.bool,
  toggle_category: PropTypes.func,
};
export default Categories;
