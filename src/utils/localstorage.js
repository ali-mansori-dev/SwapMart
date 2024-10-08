export const setAccessToken = (token) => {
  return localStorage.setItem(import.meta.env.VITE_ACESS_TOKEN, token);
};
export const getAccessToken = async () => {
  return localStorage.getItem(import.meta.env.VITE_ACESS_TOKEN);
};
export const removeAccessToken = async () => {
  return localStorage.removeItem(import.meta.env.VITE_ACESS_TOKEN);
};
