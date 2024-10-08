import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { fetch_data, log_in } from "../features/auth/authSlice";
import { userinfo } from "../queries/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { data } = useQuery("myinfo", userinfo);

  useEffect(() => {
    dispatch(fetch_data());

    if (data?.statusCode === 201) {
      dispatch(
        log_in({
          userInfo: data?.user,
          userToken: data?.user?.accessToken,
        })
      );
    }
    // if (data?.statusCode === 401) {
    //   dispatch(log_out());
    // }
  }, [data, dispatch]);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export const useAuth = () => useContext(AuthContext);
