import { Button, CircularProgress, Divider, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link, useNavigate } from "react-router-dom";

import { signInSchema } from "./schemas";
import AlertComponent from "../../components/alert_component";
import useAlert from "../../hooks/useAlert";
import { useState } from "react";
import Supabase from "../../lib/helper/ClientSupabase";
import OAuth from "../../components/auth/modal/forms/oauth";

const Form = () => {
  const [alert, setAlertConent] = useAlert();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  
  const navigate = useNavigate();
  const { mutate } = useMutation("sendFormData", (formData) => {
    return Supabase.auth
      .signUp({ email: formData?.email, password: formData?.password })
      .then((res) => {
        setLoading(false);
        if (res?.error?.message)
          return setAlertConent("error", res?.error?.message);
        navigate("/my-panel/dashboard");
      });
  });
  const onSubmit = (dataParams) => {
    setLoading(true);
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
        <AlertComponent data={alert} />
        <Button variant="contained" type="submit" fullWidth>
          {loading ? (
            <CircularProgress size="30px" color="inherit" />
          ) : (
            "Signin"
          )}
        </Button>
        <div className="py-0">
          <Divider>or</Divider>
        </div>
        <OAuth />
        <div className="flex flex-row items-center justify-center gap-2 pt-3">
          <span className="">New User ?</span>
          <Link to={`/signup`} className="text-primary-60">
            SignUp
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
