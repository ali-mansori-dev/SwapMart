import { createContext, useContext } from "react";
import { useMediaQuery } from "@mui/material";
import PropTypes from "prop-types";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const isMobile = useMediaQuery("(max-width: 1224px)");

  return (
    <ResponsiveContext.Provider value={{ isMobile }}>
      {children}
    </ResponsiveContext.Provider>
  );
};
ResponsiveProvider.propTypes = { children: PropTypes.node };
export const useResponsive = () => useContext(ResponsiveContext);
