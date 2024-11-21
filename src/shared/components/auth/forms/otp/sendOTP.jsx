import { Button, MenuItem, Select, TextField } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import PropTypes from "prop-types";

import { sendotp } from "../../../../../queries/auth";
import { sendOtpSchema } from "./schemas";

const SendOTP = ({ setMobile, nextLevel, setExpireCode }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(sendOtpSchema),
  });

  const { mutate } = useMutation("sendFormData", (formData) => {
    return sendotp(formData)
      .then((result) => {
        setLoading(false);
        if (result?.statusCode && result?.statusCode === 200) {
          setMobile(`+${formData?.prefix}${formData?.mobile}`);
          setExpireCode(result?.expiresIn);
          nextLevel();
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  });

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      mutate(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full gap-4"
    >
      <div className="w-full inline-flex items-center gap-3">
        <Select {...register("prefix")} value={98}>
          <MenuItem value={98}>+98</MenuItem>
          <MenuItem value={1}>+1</MenuItem>
          <MenuItem value={23}>+23</MenuItem>
          <MenuItem value={2}>+2</MenuItem>
        </Select>
        <div className="w-full flex flex-col gap-1">
          <TextField
            type="tel"
            {...register("mobile")}
            placeholder="9919654789"
            label={"Mobile"}
            fullWidth
            autoComplete="off"
            autoFocus
          />
        </div>
      </div>
      <span className="text-red-700 text-xs">{errors?.mobile?.message}</span>
      <Button variant="contained" type="submit" fullWidth>
        {loading ? "Loading" : "Send Code"}
      </Button>
    </form>
  );
};
SendOTP.propTypes = {
  setMobile: PropTypes.func,
  nextLevel: PropTypes.func,
  setExpireCode: PropTypes.func,
};
export default SendOTP;
