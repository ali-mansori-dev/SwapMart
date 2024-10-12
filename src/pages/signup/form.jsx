import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { signup } from "../../queries/auth";
import { signUpSchema } from "./schemas";

const Form = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate } = useMutation("sendFormData", (formData) => {
    return signup(formData)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          setOpenSnackbar(true);
        }
        console.log(error?.response?.data?.message);
      });
  });
  const onSubmit = (dataParams) => {
    mutate(dataParams);
  };
  return (
    <div className="w-full h-max flex justify-center items-center my-auto relative lg:py-14">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 border border-gray-200 rounded-md p-8 py-8 w-full lg:w-[35%]"
      >
        <div className="flex flex-col gap-1">
          <TextField
            {...register("fullname")}
            label="FullName"
            fullWidth
            autoFocus
          />
          <span className="text-red-700 text-xs">
            {errors?.fullname?.message}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <TextField {...register("email")} label="Email" fullWidth />
          <span className="text-red-700 text-xs">{errors?.email?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <TextField
            {...register("password")}
            label="Password"
            type="password"
            fullWidth
          />
          <span className="text-red-700 text-xs">
            {errors?.password?.message}
          </span>
        </div>
        <Button variant="contained" type="submit" fullWidth>
          Signup
        </Button>
        <Link to={`/signin`}>
          <Button variant="text" fullWidth>
            Signin
          </Button>
        </Link>
        {/* <div className="py-1">
          <Divider>or</Divider>
        </div>
        <Button
          variant="outlined"
          fullWidth
        >
          Signup with Google
        </Button> */}
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          This User Exist in Swap Mart!
          <Link to={"/signin"} className="!ml-2">
            <Button variant="text">Go to Login</Button>
          </Link>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Form;
