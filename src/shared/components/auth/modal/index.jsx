import {
  DialogContent,
  DialogTitle,
  IconButton,
  Divider,
  Dialog,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { useResponsive } from "../../../../context/ResponsiveContext";
import { resetAll } from "../../../../features/layout/layoutSlice";
import PasswordForm from "../forms/password/";
import OAuth from "../forms/oauth";
import close from '../../../../assets/icon/close-outline.svg'

const AuthModal = () => {
  const { is_auth_modal_open } = useSelector((state) => state.layout);
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();

  const onClose = () => {
    dispatch(resetAll());
  };

  return (
    <Dialog
      fullScreen={isMobile}
      open={is_auth_modal_open}
      onClose={onClose}
      keepMounted
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="select-none"
    >
      <DialogTitle
        id="scroll-dialog-title"
        className="flex flex-row justify-between items-center gap-1 border-b border-gray-300 !py-2"
      >
        <div className="text-base  text-gray-800">Login to Account</div>
        <IconButton onClick={onClose}><img className="w-6" src={close}/></IconButton>
      </DialogTitle>
      <DialogContent className="w-auto lg:!w-[430px] h-[calc(100%-100px)] lg:!max-h-[90vh] !py-6">
        <PasswordForm />
        <div className="py-4">
          <Divider>or</Divider>
        </div>
        <OAuth />
        <div className="flex flex-row items-center justify-center gap-2 pt-4">
          <span className="">New User?</span>
          <Link to={`/signup`} className="text-primary-60">
            SignUp
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};
AuthModal.propTypes = { open: PropTypes.bool, onClose: PropTypes.func };
export default AuthModal;
