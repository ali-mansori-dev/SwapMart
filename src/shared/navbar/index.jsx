import { AppBar } from "@mui/material";

import { useResponsive } from "../../context/ResponsiveContext";
import NavbarDesktop from "./desktop";
import NavbarMobile from "./mobile";

const Navbar = () => {
  const { isMobile } = useResponsive();
  return (
    <AppBar position="fixed" color="default">
      {isMobile ? <NavbarMobile /> : <NavbarDesktop />}
    </AppBar>
  );
};

export default Navbar;
