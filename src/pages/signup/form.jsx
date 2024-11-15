import { Button, CircularProgress, Divider, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";

import { signUpSchema } from "./schemas";
import Supabase from "../../lib/helper/ClientSupabase";
import useAlert from "../../hooks/useAlert";
import AlertComponent from "../../components/alert_component";
import { useState } from "react";
import OAuth from "../../components/auth/modal/forms/oauth";

const Form = () => {
  const [alert, setAlertConent] = useAlert();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const { mutate } = useMutation("sendFormData", (formData) => {
    return Supabase.auth
      .signUp({ email: formData?.email, password: formData?.password })
      .then((res) => {
        setLoading(false);
        if (res?.error?.message)
          return setAlertConent("error", res?.error?.message);
        setAlertConent("success", "Email Verification Send!");
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
        <Button variant="contained" type="submit" disabled={loading} fullWidth>
          {loading ? (
            <CircularProgress size="30px" color="inherit" />
          ) : (
            "Signup"
          )}
        </Button>
        <div className="py-0">
          <Divider>or</Divider>
        </div>
        <OAuth />
        <div className="flex flex-row items-center justify-center gap-2 pt-3">
          <span className="">Have Account ?</span>
          <Link to={`/signin`} className="text-primary-60">
            Signin
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
