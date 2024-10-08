import { setCookies, getCookies, removeCookies } from "./cookie";

export const setAccessTokenCookies = (token) => {
  return setCookies(import.meta.env.VITE_ACESS_TOKEN, token, 7);
};
export const getAccessTokenCookies = async () => {
  return await getCookies(import.meta.env.VITE_ACESS_TOKEN);
};
export const removeAccessTokenCookies = async () => {
  return await removeCookies(import.meta.env.VITE_ACESS_TOKEN);
};
