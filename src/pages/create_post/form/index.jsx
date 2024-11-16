import { Alert, Button, CircularProgress, Snackbar } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { CreatePostSchema } from "../schema";
import Supabase from "../../../lib/helper/ClientSupabase";
import { generateUniqueSlug } from "../../../utils/random";
import Fildes from "./fildes";
import useAlert from "../../../hooks/useAlert";
import SnackbarComponent from "../../../components/snackbar_component";

const Form = () => {
  const [alert, setAlert] = useAlert(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const navigate = useNavigate();
  const [images, setImages] = useState([]);

  const redirectHome = () => navigate("/");

  const onSubmit = async (data) => {
    setLoading(true);

    const post_images = images
      .filter((value) => value.url !== "")
      .map((value) => value.url);

    const slug = generateUniqueSlug();

    const form_data = {
      category: category?.id,
      title: data?.title,
      content: data?.content,
      amount: data?.amount,
      images: post_images,
      slug,
      // options: {},
    };

    try {
      await Supabase.from("sw_posts")
        .insert(form_data)
        .then((res) => {
          setLoading(false);
          if (res?.error?.message)
            return setAlert("error", res?.error?.message);
          setAlert("success", "Post Successfully Created!");
          console.log(res);
        })
        .catch((res) => console.log(res));
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
      className="flex flex-col gap-10 pt-5 pb-10"
    >
      <Fildes
        register={register}
        errors={errors}
        images={images}
        setImages={setImages}
        category={category}
        setCategory={setCategory}
      />
      <div className="flex flex-row gap-3 justify-end pt-4 fixed lg:static bottom-0 left-0 right-0 bg-white z-40 p-[12px] lg:p-0 border-t lg:border-t-0 border-gray-300">
        <Button fullWidth variant="contained" type="submit">
          {loading ? (
            <CircularProgress size="30px" color="inherit" />
          ) : (
            "send post"
          )}
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          onClick={redirectHome}
        >
          cancel
        </Button>
      </div>
      <SnackbarComponent data={alert} />
      {/* <Snackbar data={alert} /> */}
    </form>
  );
};
export default Form;
