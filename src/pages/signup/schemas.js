import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  fullname: yup
    .string()
    .min(6,"min fullname is 6")
    .max(20,"max fullname is 20")
    .required("email is require."),
  email: yup
    .string()
    .email("enter email correctly")
    .required("email is require."),
  password: yup
    .string()
    .min(6, "min password is 6")
    .required("password is require."),
});
