import { useEffect, useState } from "react";
import {
  DialogTitle,
  IconButton,
  Dialog,
  CircularProgress,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";

import { useResponsive } from "../../../../context/ResponsiveContext";
import { close_all } from "../../../../features/layout/layoutSlice";
import { fetch_category_data } from "../../../../queries/category";

import SideItem from "./side_item";
import PropTypes from "prop-types";
import RightSide from "./right_side";

const Index = ({
  onCategorySelect = (e) => {
    return e;
  },
  title = "Categories",
  all_item = false,
}) => {
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();
  const [category, setCategory] = useState();

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
      className="select-none bg-gray-100"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300 !py-4"
      >
        <h1 className="text-base  text-gray-800">{title}</h1>
        <IconButton size="small" onClick={onClose}>
          X
        </IconButton>
      </DialogTitle>
      {isLoading ? (
        <div className="w-screen h-screen inline-flex justify-center items-center">
          <CircularProgress size="30px" color="inherit" />
        </div>
      ) : (
        <div className="w-screen h-screen flex flex-row">
          <div className="w-1/4 border-r border-gray-300">
            {data &&
              data?.map((item, index) => (
                <SideItem
                  key={index}
                  item={item}
                  setCategory={setCategory}
                  isActive={category?.id && category?.id === item?.id}
                />
              ))}
          </div>
          <RightSide
            category={category}
            onCategorySelect={onCategorySelect}
            all_item={all_item}
          />
        </div>
      )}
    </Dialog>
  );
};
Index.propTypes = {
  onCategorySelect: PropTypes.any,
  title: PropTypes.string,
  all_item: PropTypes.bool,
};
export default Index;
