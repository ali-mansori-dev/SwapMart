import { AppBar, Typography, Button, Container, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { open_auth_modal } from "../../../features/layout/layoutSlice";
import UserDropDown from "./user_drop_down";
import Logo from "../../../assets/Logo.svg";
import Categories from "./categories";
import Search from "./search";

function Navbar() {
  const dispatch = useDispatch();
  const { isAuthed, loading } = useSelector((redux) => redux.auth);
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
            {loading ? <Skeleton width={100} height={50} /> : <UserDropDown />}
            {loading ? (
              <Skeleton width={100} height={50} />
            ) : isAuthed ? (
              <Link to={"/new"}>
                <Button variant="contained" size="small">
                  Create Post
                </Button>
              </Link>
            ) : (
              <Button onClick={onClose} variant="contained" size="small">
                Create Post
              </Button>
            )}
          </div>
        </div>
      </Container>
    </AppBar>
  );
}

export default Navbar;
