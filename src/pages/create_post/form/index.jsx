import { Button, CircularProgress } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useCallback } from "react";

import SnackbarComponent from "../../../shared/components/notifications/snackbar_component";
import { generateUniqueSlug } from "../../../utils/random";
import Supabase from "../../../lib/helper/ClientSupabase";
import useAlert from "../../../hooks/useAlert";
import { CreatePostSchema } from "../schema";
import Fildes from "./fildes";

const Form = () => {
  const [alert, setAlert] = useAlert(false);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  // Helper to redirect to home
  const redirectHome = useCallback(() => navigate("/"), [navigate]);

  // Form submission logic
  const onSubmit = async (data) => {
    if (!category?.id) {
      setAlert("error", "Category not selected!");
      return;
    }

    const hasUnuploadedImages = images.some((image) => !image.uploaded);
    if (hasUnuploadedImages) {
      setAlert("error", "Please wait for all images to upload.");
      return;
    }

    setLoading(true);

    const post_images = images.reduce((acc, image) => {
      if (image.url) acc.push(image.url);
      return acc;
    }, []);

    const slug = generateUniqueSlug();

    const form_data = {
      category: category.id,
      title: data.title,
      content: data.content,
      amount: data.amount,
      images: post_images,
      slug,
    };

    try {
      const { error } = await Supabase.from("sw_posts").insert(form_data);
      setLoading(false);

      if (error) {
        setAlert("error", error.message);
        return;
      }

      setAlert("success", "Post Successfully Created!");
      redirectHome(); // Navigate after successful creation
    } catch (err) {
      setLoading(false);
      console.error("Post creation error:", err);
      setAlert("error", "An unexpected error occurred.");
    }
  };

  // React Hook Form setup
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
        <Button fullWidth variant="contained" type="submit" disabled={loading}>
          {loading ? (
            <CircularProgress size="30px" color="inherit" />
          ) : (
            "Send Post"
          )}
        </Button>
        <Button
          fullWidth
          size="small"
          variant="outlined"
          onClick={redirectHome}
          disabled={loading}
        >
          Cancel
        </Button>
      </div>
      <SnackbarComponent data={alert} />
      <div className="h-4"></div>
    </form>
  );
};

export default Form;
