export const setAccessToken = (token) => {
  return localStorage.setItem(import.meta.env.VITE_SUPABASE_COOKIE_KEY, token);
};
export const getAccessToken = async () => {
  return localStorage.getItem(import.meta.env.VITE_SUPABASE_COOKIE_KEY);
};
export const removeAccessToken = async () => {
  return localStorage.removeItem(import.meta.env.VITE_SUPABASE_COOKIE_KEY);
};
