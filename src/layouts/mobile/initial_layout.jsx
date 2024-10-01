import { AppBar } from "@mui/material";

import MainContainer from "../../shared/container";
import PropTypes from "prop-types";

const InitialLayoutMobile = ({ children }) => {
  return (
    <>
      <AppBar
        className="!bg-white !shadow-none border-b border-gray-300 h-[65px] justify-center"
        position="fixed"
      >
        <MainContainer className={`flex flex-row justify-center items-center`}>
          Logo
        </MainContainer>
      </AppBar>
      <main className={`mt-[65px]`}>
        <MainContainer
          className={`w-full flex flex-col justify-center gap-8 py-8`}
        >
          {children}
        </MainContainer>
      </main>
    </>
  );
};
InitialLayoutMobile.propTypes = {
  children: PropTypes.node.isRequired,
  tisearchTexttle: PropTypes.string,
  filter: PropTypes.array,
};
export default InitialLayoutMobile;
