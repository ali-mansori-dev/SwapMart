import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import { useQuery } from "react-query";

import SearchItemComponent from "./search_item";
import { fetch_category_data } from "../../../queries/category";
import PropTypes from "prop-types";
import { useEffect } from "react";

const CategorySelect = ({ setCategory, onClose }) => {
  const [selected, setSelected] = useState({});
  const { data, isLoading } = useQuery("categories", fetch_category_data);

  useEffect(() => {
    if (selected?.id && !selected?.children) {
      onClose();
      setCategory(selected);
    }
  }, [selected]);

  return (
    <Dialog
      //   fullScreen={isMobile}
      open={true}
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300 !py-5"
      >
        <h1 className="text-base  text-gray-800">Choose Category</h1>
      </DialogTitle>
      <DialogContent className="w-auto lg:!w-[430px] h-[calc(100%-100px)] lg:!max-h-[60vh] !py-6">
        {isLoading ? (
          <div className="flex justify-center mx-auto py-9">
            <CircularProgress size="30px" color="inherit" />
          </div>
        ) : (
          <>
            {selected?.children
              ? selected?.children?.map((value, index) => {
                  return (
                    <SearchItemComponent
                      key={index}
                      {...value}
                      setSelected={setSelected}
                    />
                  );
                })
              : data?.map((value, index) => {
                  return (
                    <SearchItemComponent
                      key={index}
                      {...value}
                      setSelected={setSelected}
                    />
                  );
                })}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
CategorySelect.propTypes = {
  setCategory: PropTypes.func,
  onClose: PropTypes.func,
};
export default CategorySelect;
