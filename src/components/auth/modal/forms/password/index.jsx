import { Button, Divider, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { close_all } from "../../../../../features/layout/layoutSlice";
import { log_in } from "../../../../../features/auth/authSlice";
import { signin } from "../../../../../queries/auth";
import { basicAuthSchema } from "./schemas";

const PasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(basicAuthSchema),
  });
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
      })
      .catch((error) => {
        console.log(error);
      });
  });
  const onSubmit = (dataParams) => {
    mutate(dataParams);
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <TextField
            {...register("email")}
            label="Email"
            fullWidth
            autoFocus
            autoComplete="off"
          />
          <span className="text-red-700 text-xs">{errors?.email?.message}</span>
        </div>
        <div className="flex flex-col gap-1">
          <TextField
            {...register("password")}
            label="Password"
            type="password"
            fullWidth
            autoComplete="off"
          />
          <span className="text-red-700 text-xs">
            {errors?.password?.message}
          </span>
        </div>

        <Button variant="contained" type="submit" fullWidth>
          Continue
        </Button>
      </form>
      <div className="py-4">
        <Divider>or</Divider>
      </div>
      <div className="flex flex-col gap-4">
        <Link to={`/signup`}>
          <Button onClick={()=>dispatch(close_all())} variant="outlined" fullWidth>
            signup
          </Button>
        </Link>
      </div>
    </>
  );
};

export default PasswordForm;
