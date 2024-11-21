import React, { useEffect, useState } from "react";
import {
  DialogContent,
  DialogTitle,
  IconButton,
  Divider,
  Dialog,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { useResponsive } from "../../../../context/ResponsiveContext";
import { close_all } from "../../../../features/layout/layoutSlice";
import { fetch_category_data } from "../../../../queries/category";
import CategoryItem from "./category_item";

const Index = () => {
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();
  const [category, setCategory] = useState();

  const Small_Item = ({ item, isActive = false }) => {
    return (
      <div
        onClick={setCategory.bind(this, item)}
        className={`w-full overflow-hidden cursor-pointer text-sm py-4 px-1 text-center border-b border-gray-300 ${
          isActive ? `bg-slate-200` : `hover:bg-slate-100`
        }`}
      >
        {item?.name}
      </div>
    );
  };

  const { data, isLoading } = useQuery("catgories_data", fetch_category_data);

  useEffect(() => {
    data && data.length > 0 && setCategory(data[0]);
  }, [data]);

  const onClose = () => {
    dispatch(close_all());
  };
  return (
    <Dialog
      fullScreen={isMobile}
      open={true}
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="select-none"
    >
      <div className="w-screen h-screen flex flex-row">
        <div className="w-1/4 border-r border-gray-300">
          {data &&
            data?.map((item, index) => (
              <Small_Item
                key={index}
                item={item}
                isActive={category?.id && category?.id === item?.id}
              />
            ))}
        </div>
        <div className="w-3/4">
          {category?.children && (
            <>
              {category?.children &&
                category?.children[0] &&
                category?.children?.map((item, index) => (
                  <CategoryItem key={index} item={item} />
                ))}
            </>
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default Index;
