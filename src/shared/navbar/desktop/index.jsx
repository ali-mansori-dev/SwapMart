import { AppBar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

// import useToggle from "../../../hooks/useToggle";
import UserDropDown from "./user_drop_down";
import Logo from "../../../assets/Logo.svg";
import Categories from "./categories";
import Search from "./search";
import { useDispatch } from "react-redux";
import { open_auth_modal } from "../../../features/layout/layoutSlice";
import AuthModal from "../../../components/auth/modal";

function Navbar() {
  const dispatch = useDispatch();
  const onClose = () => {
    dispatch(open_auth_modal());
  };
  return (
    <AppBar position="fixed" color="default">
      <Container maxWidth="lg">
        <div className="flex justify-between items-center h-[65px]">
          <div className="flex flex-row gap-10 items-center">
            <Link to={`/`}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img src={Logo} className="h-8" />
              </Typography>
            </Link>
            <Categories />
            <Search />
          </div>
          <div className="flex flex-row gap-5">
            <UserDropDown />
            <Button onClick={onClose} variant="contained" size="small">
              Create Post
            </Button>
          </div>
        </div>
      </Container>
      <AuthModal />
    </AppBar>
  );
}

export default Navbar;
