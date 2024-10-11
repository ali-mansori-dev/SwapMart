import { createContext, useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import {
  fetch_data,
  log_in,
  log_out,
  no_token_status,
} from "../features/auth/authSlice";
import { userinfo } from "../queries/user";
import { getAccessToken } from "../utils/localStorage";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  const { data, refetch } = useQuery("myinfo", userinfo);

  useEffect(() => {
    const init = async () => {
      const token = await getAccessToken();
      if (token && token !== null && token !== undefined) {
        refetch();
        dispatch(fetch_data());
      }
      if (!token || token === null) dispatch(no_token_status());
    };
    init();
  }, []);

  useEffect(() => {
    if (data?.statusCode === 201) {
      dispatch(
        log_in({
          userInfo: data?.user,
          userToken: data?.user?.accessToken,
        })
      );
    }
    if (data?.statusCode === 401 && data?.message === "your token not valid!") {
      dispatch(log_out());
    }
  }, [data, dispatch]);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export const useAuth = () => useContext(AuthContext);
