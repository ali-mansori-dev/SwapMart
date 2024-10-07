import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import GoogleAuth from "./google_auth";
import { useState } from "react";
import PasswordForm from "./forms/password/";
import OTPForm from "./forms/otp/";
import { useDispatch, useSelector } from "react-redux";
import { close_all } from "../../../features/layout/layoutSlice";

const AuthModal = () => {
  const [authMethod, setAuthMethod] = useState("otp");
  const { isAuthModalOpen } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(close_all());
  };

  const renderAuthForm = () => {
    switch (authMethod) {
      case "otp":
        return <OTPForm />;
      case "password":
        return <PasswordForm />;
      default:
        return null;
    }
  };

  return (
    <Dialog
      //   fullScreen={isMobile}
      open={isAuthModalOpen}
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300 !py-2"
      >
        <h1 className="text-base  text-gray-800">Login to Account</h1>
        <IconButton onClick={onClose}>X{/* <X size={16} /> */}</IconButton>
      </DialogTitle>
      <DialogContent className="w-auto lg:!w-[430px] h-[calc(100%-100px)] lg:!max-h-[60vh] !py-6">
        {renderAuthForm()}

        {authMethod === "otp" && (
          <>
            <div className="py-4">
              <Divider>or</Divider>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                variant="outlined"
                onClick={setAuthMethod.bind(this, "password")}
                fullWidth
              >
                Continue with Email
              </Button>
              <GoogleAuth />
            </div>
          </>
        )}
        {authMethod === "password" && (
          <div className="flex flex-col gap-4 pt-4">
            <Button
              variant="outlined"
              onClick={setAuthMethod.bind(this, "otp")}
              fullWidth
            >
              back
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
AuthModal.propTypes = { open: PropTypes.bool, onClose: PropTypes.func };
export default AuthModal;
