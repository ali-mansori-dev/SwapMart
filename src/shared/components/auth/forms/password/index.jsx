import { Button, CircularProgress, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
// import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";

// import { resetAll } from "../../../../../features/layout/layoutSlice";
// import { log_in } from "../../../../../features/auth/authSlice";
// import { signin } from "../../../../../queries/auth";
import { basicAuthSchema } from "./schemas";
import Supabase from "../../../../../lib/helper/ClientSupabase";
import AlertComponent from "../../../notifications/alert_component";
import useAlert from "../../../../../hooks/useAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordForm = () => {
  const [alert, setAlertConent] = useAlert();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(basicAuthSchema),
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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
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

        <AlertComponent data={alert} />
        <Button variant="contained" type="submit" fullWidth>
          {loading ? (
            <CircularProgress size="30px" color="inherit" />
          ) : (
            "Continue"
          )}
        </Button>
      </form>
    </>
  );
};

export default PasswordForm;
