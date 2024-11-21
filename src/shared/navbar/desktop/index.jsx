import { Typography, Button, Container, Skeleton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { open_auth_modal } from "../../../features/layout/layoutSlice";
import UserDropDown from "./user_drop_down";
import Logo from "../../../assets/Logo.svg";
import Categories from "./categories";
import Search from "./search";

function NavbarDesktop() {
  const dispatch = useDispatch();
  const { is_authed, loading } = useSelector((redux) => redux.auth);
  const { is_category_drop_open } = useSelector((redux) => redux.layout);

  return (
    <Container maxWidth="lg">
      <div className="flex justify-between items-center h-[65px]">
        <div className="flex flex-row gap-10 items-center">
          <Link to={`/`}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img
                srcSet={Logo}
                loading="eager"
                src={Logo}
                className="h-8"
                onError={(e) =>
                  (e.target.src =
                    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fvectors%2Fmale-placeholder.html&psig=AOvVaw1zOHmukmoCvVm0G_KcfnMy&ust=1731779616467000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJi7j4L03okDFQAAAAAdAAAAABAE")
                }
              />
            </Typography>
          </Link>
          {is_category_drop_open && <Categories />}
          <Search />
        </div>
        {is_authed}
        <div className="flex flex-row gap-3 items-center">
          {loading ? (
            <Skeleton width={100} height={50} />
          ) : (
            is_authed && (
              <Link to={"/new"}>
                <Button variant="contained" size="small">
                  sell
                </Button>
              </Link>
            )
          )}
          {loading ? <Skeleton width={100} height={50} /> : <UserDropDown />}
        </div>
      </div>
    </Container>
  );
}

export default NavbarDesktop;
