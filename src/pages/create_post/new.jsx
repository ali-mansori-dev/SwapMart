import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { useMutation, useQuery } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { FindOptionbyCategorySlugFn } from "./option_query";
import UploadImages from "./image/upload_image";
import { uploadImageFn } from "./image/mutation";
import { CreatePostSchema } from "./schema";
import { CreatePostFn } from "./mutation";
import PropTypes from "prop-types";
import OptionComponent from "./option";

const New = ({ name, id, slug }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const { data:OptionData, refetch } = useQuery({
    queryKey: ["category_options"],
    queryFn: FindOptionbyCategorySlugFn.bind(this, slug),
    enabled: false,
  });

  const CreatePostMutation = useMutation({
    mutationFn: CreatePostFn.bind(this),
  });

  useEffect(() => {
    if (slug) refetch();
  }, [slug]);

  const onSuccessMutation = () => {
    setOpen(true);
  };

  const onErorrMutation = (data) => {
    console.error(data);
  };

  const onSubmit = async (data) => {
    console.log(data);
    
    const postImages = await images
      .filter((value) => value.id !== "")
      .map((value) => value.id);

    const formData = {
      category: id,
      title: data?.title,
      content: data?.content,
      amount: data?.amount,
      images: postImages,
      province: "Amesterdam",
      city: "Amesterdam",
      district: "Amesterdam",
      cordinate: [51.123654411, 35.123654411],
      options: {},
    };

    delete data?.title;
    delete data?.content;
    delete data?.amount;

    for (let key in data) {
      if (data[key] === "") {
        delete data[key];
      }
    }
    const options = [];
    for (let key in data) {
      const option = OptionData?.data?.filter((value) => value._id === key)[0];
      options.push({
        _id: option._id,
        title: option.title,
        type: option.type,
        prefix: option.prefix,
        value: data[key],
      });
    }
    formData.options = options;
    try {
      CreatePostMutation.mutateAsync(formData, {
        onSuccess: onSuccessMutation,
        onError: onErorrMutation,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(CreatePostSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-10 mb-[55px]"
    >
      <div className="text-xl text-gray-800 hidden lg:block">Sell</div>
      <TextField
        label={"Categories"}
        focused
        value={name}
        className="!text-sm"
        InputProps={{
          // startAdornment: (
          //   <InputAdornment position="start">
          //     {CategoryIconsXs[icon]}
          //   </InputAdornment>
          // ),
          endAdornment: (
            <Link
              to={"/new"}
              className="bg-primary-default text-white text-xs flex items-center w-max py-2 px-4 gap-2  rounded-lg"
            >
              <span className="w-max">Change</span>
              {/* <ChevronLeftIcon size={16} /> */}
            </Link>
          ),
        }}
      />
      <UploadImages
        images={images}
        setImages={setImages}
        uploadImageFn={uploadImageFn}
      />
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
      <div className="flex flex-col gap-8">
        {OptionData?.data?.map &&
          OptionData?.data?.map((value, index) => {
            return (
              <OptionComponent register={register} {...value} key={index} />
            );
          })}
      </div>
      <div className="flex flex-row gap-3 justify-end pt-4 fixed lg:static bottom-0 left-0 right-0 bg-white z-40 p-[12px] lg:p-0 border-t lg:border-t-0 border-gray-300">
        <Button fullWidth variant="contained" type="submit">
          send post
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          onClick={navigate.bind(this, "/")}
        >
          cancel
        </Button>
      </div>

      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Your Post Sended
          <Link to={"/"} className="!ml-2">
            <Button variant="text">ok</Button>
          </Link>
        </Alert>
      </Snackbar>
    </form>
  );
};
New.propTypes = {
  name: PropTypes.any,
  id: PropTypes.any,
  slug: PropTypes.any,
  icon: PropTypes.any,
};
export default New;
