import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import PropTypes from "prop-types";

import { resetAll } from "../../../../../features/layout/layoutSlice";
import { log_in } from "../../../../../features/auth/authSlice";
import { checkotp } from "../../../../../queries/auth";
import { checkOtpSchema } from "./schemas";

const CheckOTP = ({ mobile, expireCode }) => {
  const [loading, setLoading] = useState(false);
  const [second, setSeconds] = useState(0);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(checkOtpSchema),
  });

  useEffect(() => {
    setSeconds(Math.floor((expireCode - Date.now()) / 1000));
    const intervalId = setInterval(() => {
      setSeconds(Math.floor((expireCode - Date.now()) / 1000));
      if (second < 0) {
        clearInterval(intervalId);
        return;
      }
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, [expireCode, second]);

  const { mutate } = useMutation("sendFormData", (formData) => {
    return checkotp(formData)
      .then((result) => {
        setLoading(false);
        dispatch(
          log_in({
            userInfo: result?.user,
            userToken: result?.token,
          })
        );
        dispatch(resetAll());
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      mutate({ ...data, mobile });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full gap-4"
    >
      <div className="w-full flex flex-col gap-1">
        <TextField
          type="text"
          {...register("code")}
          label={"Code"}
          fullWidth
          autoComplete="off"
          autoFocus
        />
        <span className="text-red-700 text-xs">{errors?.code?.message}</span>
      </div>

      <Button variant="contained" type="submit" fullWidth>
        {loading ? "Loading" : "Login"}
      </Button>
    </form>
  );
};
CheckOTP.propTypes = {
  mobile: PropTypes.string,
  expireCode: PropTypes.string,
  authSuccess: PropTypes.func,
};
export default CheckOTP;
