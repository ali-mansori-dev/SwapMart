import { Alert, Button, Snackbar, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { close_all } from "../../features/layout/layoutSlice";
import { log_in } from "../../features/auth/authSlice";
import { signin } from "../../queries/auth";
import { signInSchema } from "./schemas";

const Form = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useMutation("sendFormData", (formData) => {
    return signin(formData)
      .then((result) => {
        dispatch(
          log_in({
            userInfo: result?.user,
            userToken: result?.token,
          })
        );
        dispatch(close_all());
        navigate("/my-panel/dashboard");
      })
      .catch((error) => {
        if (error?.response?.data?.message) {
          setOpenSnackbar(true);
        }
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
          Signin
        </Button>
        <Link to={`/signup`}>
          <Button variant="text" fullWidth>
            Signup
          </Button>
        </Link>
        {/* <div className="py-1">
          <Divider>or</Divider>
        </div>
        <Button
          variant="outlined"
          // onClick={setAuthMethod.bind(this, "password")}
          fullWidth
        >
          Continue with Google
        </Button> */}
      </form>
      <Snackbar open={openSnackbar} autoHideDuration={6000}>
        <Alert severity="error" variant="filled" sx={{ width: "100%" }}>
          This User Not Exist!
          <Link to={"/signup"} className="!ml-2">
            <Button variant="text">Go to signup</Button>
          </Link>
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Form;
