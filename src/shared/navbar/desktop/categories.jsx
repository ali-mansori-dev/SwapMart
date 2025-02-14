import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, CircularProgress } from "@mui/material";
import { useQuery } from "react-query";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { fetch_category_data } from "../../../queries/category";
import { resetAll, openLayout } from "../../../features/layout/layoutSlice";

const Categories = () => {
  const { is_category_drop_open } = useSelector((state) => state.layout);
  const [category, setCategory] = useState();
  const dispatch = useDispatch();

  const openDropDown = () => {
    dispatch(openLayout("is_category_drop_open"));
  };
  const closeDropDown = () => {
    dispatch(resetAll());
  };

  const { data, isLoading } = useQuery("catgories_data", fetch_category_data);

  useEffect(() => {
    if (data?.length > 0) setCategory(data[0]);
  }, [data]);

  return (
    <>
      <section className="relative">
        <Button
          size="small"
          variant="textonly"
          className={is_category_drop_open && `!bg-gray-200`}
          onClick={openDropDown}
        >
          Categories
        </Button>
        <>
          <div
            onClick={closeDropDown}
            className="fixed top-[64px] left-0 right-0 bottom-0 bg-black bg-opacity-25 z-0"
          ></div>
          <div className="absolute top-[130%] flex gap-4 left-0 bg-white z-30 w-[40vw] rounded-md p-6 drop-shadow-modal">
            {isLoading ? (
              <CircularProgress size="30px" color="inherit" />
            ) : (
              <>
                <div className="w-1/4 flex flex-col gap-2 border-r ps-3">
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
                        <span className="text-xs">{value.name}</span>
                      </span>
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
                                  <span className="text-xs">{value.name}</span>
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </>
      </section>
    </>
  );
};
Categories.propTypes = {};
export default Categories;
