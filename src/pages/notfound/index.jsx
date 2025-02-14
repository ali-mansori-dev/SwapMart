import React from "react";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const NotFound = ({ isMobile }) => {
  return isMobile ? <Mobile /> : <Desktop />;
};

export default NotFound;
