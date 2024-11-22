import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import CategorySelect from "../../../shared/components/category/modal/index";
import UploadImages from "../image/upload_image";
import { open_category_modal_component } from "../../../features/layout/layoutSlice";

const Fildes = ({
  register,
  errors,
  images,
  setImages,
  category,
  setCategory,
}) => {
  const { is_category_modal_component } = useSelector((redux) => redux.layout);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(open_category_modal_component());
  }, [dispatch]);

  const openCategoryModal = () => {
    dispatch(open_category_modal_component());
  };

  return (
    <>
      {is_category_modal_component && (
        <CategorySelect
          onCategorySelect={setCategory}
          title="Choose Category"
        />
      )}
      <TextField
        label={"Categories"}
        value={category?.name}
        focused
        className="!text-sm"
        InputProps={{
          endAdornment: (
            <Button
              onClick={openCategoryModal}
              variant="contained"
              size="small"
              className="!py-2 !px-5"
            >
              <span className="w-max">select</span>
            </Button>
          ),
          readOnly: true,
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
