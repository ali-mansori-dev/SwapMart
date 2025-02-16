import { Typography, Container, Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";

import successAnimation from "../../../lotties/Logo.json";
import UserDropDown from "./user_drop_down";
import Search from "./search";

function NavbarDesktop() {
  const { is_authed, loading } = useSelector((redux) => redux.auth);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: successAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container maxWidth="lg">
      <div className="flex justify-between items-center h-[65px]">
        <div className="flex flex-row gap-16 items-center">
          <Link to={`/`}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <div className="flex items-center -ms-5">
                <Lottie options={defaultOptions} height={105} width={105} />
                <span className="text-xl font-bold -ms-4">SwapMart</span>
              </div>
            </Typography>
          </Link>
          <Search />
        </div>
        {is_authed}
        <div className="flex flex-row gap-3 items-center">
          {loading ? <Skeleton width={100} height={50} /> : <UserDropDown />}
        </div>
      </div>
    </Container>
  );
}

export default NavbarDesktop;
