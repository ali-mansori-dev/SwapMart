import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import PropTypes from "prop-types";
import { open_auth_modal } from "../features/layout/layoutSlice";
import DotLoader from "../shared/loader/dot_loader";

const AuthGuard = ({ component }) => {
  const { isAuthed, loading, success } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [auth, setAuth] = useState("loading");
  useEffect(() => {
    if (!loading && !isAuthed && !success) {
      setAuth(false);
      dispatch(open_auth_modal());
    }
    if (!loading && isAuthed) setAuth(true);
  }, [loading, isAuthed, success, dispatch]);

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
            onClick={() => dispatch(open_auth_modal())}
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
