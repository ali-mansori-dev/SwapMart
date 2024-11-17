import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import PropTypes from "prop-types";

import CategorySelect from "../component/category_select";
import useBoolean from "../../../hooks/useBoolean";
import UploadImages from "../image/upload_image";

const Fildes = ({
  register,
  errors,
  images,
  setImages,
  category,
  setCategory,
}) => {
  const [isVisible, show, hide] = useBoolean(true);
  return (
    <>
      {isVisible && <CategorySelect setCategory={setCategory} onClose={hide} />}
      <TextField
        label={"Categories"}
        value={category?.name}
        focused
        className="!text-sm"
        InputProps={{
          endAdornment: (
            <Button
              onClick={show}
              variant="contained"
              size="small"
              className="!py-2 !px-5"
            >
              <span className="w-max">select</span>
            </Button>
          ),
        }}
      />
      <UploadImages images={images} setImages={setImages} />
      <TextField
        label={"Title"}
        placeholder="Post Title"
        {...register("title")}
        autoComplete="off"
        errorMessage={errors?.title?.message}
      />
      <TextField
        label={"Price"}
        placeholder="Post Price"
        {...register("amount")}
        autoComplete="off"
        errorMessage={errors?.amount?.message}
      />
      <TextField
        label={"Description"}
        placeholder="Post Description"
        {...register("content")}
        autoComplete="off"
        errorMessage={errors?.content?.message}
        multiline
        rows={4}
      />
    </>
  );
};
Fildes.propTypes = {
  register: PropTypes.any,
  errors: PropTypes.any,
  images: PropTypes.any,
  setImages: PropTypes.any,
  category: PropTypes.any,
  setCategory: PropTypes.any,
};
export default Fildes;
