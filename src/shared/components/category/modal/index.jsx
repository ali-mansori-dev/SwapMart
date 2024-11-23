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
import { resetAll } from "../../../../features/layout/layoutSlice";
import { fetch_category_data } from "../../../../queries/category";

import SideItem from "./side_item";
import PropTypes from "prop-types";
import RightSide from "./right_side";

const Index = ({ onCategorySelect, title, all_item }) => {
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();
  const [category, setCategory] = useState(null);

  // Fetch categories
  const { data, isLoading, error } = useQuery("categories_data", fetch_category_data);

  // Set initial category
  useEffect(() => {
    if (data?.length > 0) {
      setCategory(data[0]);
    }
  }, [data]);

  const onClose = () => {
    dispatch(resetAll());
  };

  return (
    <Dialog
      fullScreen={isMobile}
      open
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="select-none bg-gray-100"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex justify-between items-center gap-2 border-b border-gray-300 py-4"
      >
        <h1 className="text-base text-gray-800">{title}</h1>
        <IconButton size="small" onClick={onClose}>
          X
        </IconButton>
      </DialogTitle>

      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <CircularProgress size="30px" color="inherit" />
        </div>
      ) : error ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <p className="text-red-500">Failed to load categories.</p>
        </div>
      ) : (
        <div className="w-screen h-screen flex">
          {/* Left Sidebar */}
          <div className="w-1/4 border-r border-gray-300">
            {data.map((item) => (
              <SideItem
                key={item.id}
                item={item}
                setCategory={setCategory}
                isActive={category?.id === item?.id}
              />
            ))}
          </div>

          {/* Right Side Content */}
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

// Default Props
Index.defaultProps = {
  onCategorySelect: () => {},
  title: "Categories",
  all_item: false,
};

// PropTypes Validation
Index.propTypes = {
  onCategorySelect: PropTypes.func,
  title: PropTypes.string,
  all_item: PropTypes.bool,
};

export default Index;
