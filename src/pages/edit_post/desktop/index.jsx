import {
  CircularProgress,
  TextField,
  Snackbar,
  Button,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import PropTypes from "prop-types";
import UploadImages from "../../create_post/image/upload_image";
import { uploadImageFn } from "../../create_post/image/mutation";
import OptionComponent from "../../create_post/option";

const EditPostDesktop = ({
  loading,
  onSubmit,
  images,
  setImages,
  register,
  errors,
  data,
  optionData,
  snackbarOpen,
}) => {
  const navigate = useNavigate();

  return (
    <BasicLayoutMobile>
      <div className="flex flex-col w-[600px] gap-0">
        {loading ? (
          <div className="w-full h-full flex justify-center items-center">
            <CircularProgress />
          </div>
        ) : (
          <form onSubmit={onSubmit} className="flex flex-col gap-10">
            <TextField
              label={"دسته بندی"}
              focused
              value={data?.data?.category?.name}
              className="!text-sm"
              InputProps={{
                endAdornment: (
                  <div
                    to={"/new"}
                    className="bg-primary-default text-white text-xs flex items-center w-max py-2 px-4 gap-2 rounded-lg"
                  >
                    <span className="w-max">تغییر دسته بندی </span>
                  </div>
                ),
              }}
            />
            <UploadImages
              images={images}
              setImages={setImages}
              uploadImageFn={uploadImageFn}
            />
            <TextField
              label="Title"
              placeholder="Post Title"
              {...register("title")}
              errorMessage={errors?.title?.message}
              defaultValue={data?.data?.title}
            />
            <TextField
              label="Price"
              placeholder="Post Price"
              {...register("amount")}
              errorMessage={errors?.amount?.message}
              type="number"
              defaultValue={data?.data?.amount}
            />
            <TextField
              label="Description"
              placeholder="Post Description"
              {...register("content")}
              errorMessage={errors?.content?.message}
              multiline
              defaultValue={data?.data?.content}
            />
            <div className="flex flex-col gap-2">
              {optionData?.data?.length > 0 &&
                optionData?.data?.map((value, index) => {
                  return (
                    <OptionComponent
                      register={register}
                      defaultValue={
                        data?.data?.options?.filter(
                          (item) => item._id === value._id
                        )[0]?.value || ""
                      }
                      {...value}
                      key={index}
                    />
                  );
                })}
            </div>
            <div className="flex flex-row gap-3 justify-end pt-4">
              <Button fullWidth variant="contained" type="submit">
                Send Post
              </Button>
              <Link className="w-full" to={`/my-panel/my-post`}>
                <Button fullWidth variant="outlined">
                  cancel
                </Button>
              </Link>
            </div>
            <Snackbar
              open={snackbarOpen}
              message="your post updated"
              action={
                <div className="w-full flex justify-between">
                  <div className="w-44"></div>
                  <Button
                    onClick={navigate.bind(this, "/my-panel/my-post")}
                    variant="text"
                    size="small"
                    className="!text-primary-default"
                  >
                    Send
                  </Button>
                </div>
              }
            />
          </form>
        )}
      </div>
    </BasicLayoutMobile>
  );
};
EditPostDesktop.propTypes = {
  loading: PropTypes.any,
  onSubmit: PropTypes.any,
  images: PropTypes.any,
  setImages: PropTypes.any,
  register: PropTypes.any,
  errors: PropTypes.any,
  data: PropTypes.any,
  optionData: PropTypes.any,
  snackbarOpen: PropTypes.any,
};
export default EditPostDesktop;
