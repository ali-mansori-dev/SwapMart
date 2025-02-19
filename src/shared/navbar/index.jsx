import { AppBar } from "@mui/material";

import { useResponsive } from "../../context/ResponsiveContext";
import NavbarDesktop from "./desktop";
import NavbarMobile from "./mobile";
import { useMemo } from "react";

const Navbar = () => {
  const { isMobile } = useResponsive();
  const NavbarDesktopmemo = useMemo(() => {
    return <NavbarDesktop />;
  }, []);
  return (
    <AppBar
      position="fixed"
      color="default"
      className="!shadow-none border-b border-gray-300 !bg-white"
    >
      {isMobile ? <NavbarMobile /> : NavbarDesktopmemo}
    </AppBar>
  );
};

export default Navbar;
