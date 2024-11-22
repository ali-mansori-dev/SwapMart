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
import CategoryItem from "./category_item";
import SideItem from "./side_item";
import PropTypes from "prop-types";

const Index = ({
  onCategorySelect = (e) => {
    return e;
  },
  title='Categories',
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
          <div className="flex flex-col w-3/4">
            {category?.children && (
              <>
                {category?.children &&
                  category?.children[0] &&
                  category?.children?.map((item, index) => (
                    <CategoryItem
                      key={index}
                      item={item}
                      onCategorySelect={onCategorySelect}
                    />
                  ))}
              </>
            )}
          </div>
        </div>
      )}
    </Dialog>
  );
};
Index.propTypes = { onCategorySelect: PropTypes.any, title: PropTypes.string };
export default Index;
