import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import CategorySelect from "../../../shared/components/category/modal/index";
import UploadImages from "../image/upload_image";
import { openLayout } from "../../../features/layout/layoutSlice";

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

  // Open category modal handler
  const openCategoryModal = () =>
    dispatch(openLayout("is_category_modal_component"));

  return (
    <>
      {is_category_modal_component && (
        <CategorySelect
          onCategorySelect={setCategory}
          title="Choose Category"
        />
      )}
      {/* Category Selection Field */}
      <TextField
        label="Category"
        value={category?.name || ""}
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
              Select
            </Button>
          ),
          readOnly: true,
        }}
        inputProps={{
          tabIndex: -1, // Prevent focus on the field
        }}
      />

      {/* Image Upload Field */}
      <UploadImages images={images} setImages={setImages} />

      {/* Title Field */}
      <TextField
        label="Title"
        placeholder="Post Title"
        {...register("title")}
        autoComplete="off"
        error={!!errors?.title}
        helperText={errors?.title?.message}
      />

      {/* Price Field */}
      <TextField
        label="Price"
        placeholder="Post Price"
        {...register("amount")}
        autoComplete="off"
        error={!!errors?.amount}
        helperText={errors?.amount?.message}
      />

      {/* Description Field */}
      <TextField
        label="Description"
        placeholder="Post Description"
        {...register("content")}
        autoComplete="off"
        multiline
        rows={4}
        error={!!errors?.content}
        helperText={errors?.content?.message}
      />
    </>
  );
};

Fildes.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  images: PropTypes.array.isRequired,
  setImages: PropTypes.func.isRequired,
  category: PropTypes.object,
  setCategory: PropTypes.func.isRequired,
};

export default Fildes;
