import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { openLayout } from "../features/layout/layoutSlice";
import DotLoader from "../shared/loader/dot_loader";

const AuthGuard = ({ component }) => {
  const { is_authed, loading, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState("loading");
  useEffect(() => {
    if (!loading && !is_authed && !success) {
      setAuth(false);
      // dispatch(openLayout("is_auth_modal_open"));
    }
    if (!loading && is_authed) setAuth(true);
  }, [loading, is_authed, success, dispatch]);

  return (
    <>
      {auth === "loading" && (
        <div className="flex justify-center py-16">
          <DotLoader />
        </div>
      )}
      {auth === true && component}
      {auth === false && (
        <div className="flex flex-col gap-3 justify-center py-16 text-center px-16">
          You Must be Login
          <Button
            variant="contained"
            onClick={() => dispatch(openLayout("is_auth_modal_open"))}
          >
            Login
          </Button>
        </div>
      )}
    </>
  );
};
AuthGuard.propTypes = {
  component: PropTypes.any,
};
export default AuthGuard;
