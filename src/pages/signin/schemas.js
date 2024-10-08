import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("enter email correctly")
    .required("email is require."),
  password: yup
    .string()
    .min(6, "min password is 6")
    .required("password is require."),
});
