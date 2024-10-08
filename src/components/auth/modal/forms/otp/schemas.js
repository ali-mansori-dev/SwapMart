import * as yup from "yup";

export const sendOtpSchema = yup.object().shape({
  prefix: yup.string(),
  mobile: yup.number().min(9, "Mobile min in 9").required("Mobile is require"),
});

export const checkOtpSchema = yup.object().shape({
  code: yup
    .string()
    .matches(/^[0-9]{6}$/, "کد ورود به درستی وارد نشده است.")
    .required("کد ورود را وارد کنید."),
});
