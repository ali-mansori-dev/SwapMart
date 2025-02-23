import { AppBar, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import chevrow from "../../assets/icon/chevron-down.svg";
import MainContainer from "../../shared/container";

const SingleLayoutMobile = ({
  children,
  title = "",
  navbarActions,
  buttonNavigation,
  container,
}) => {
  let navigate = useNavigate();

  return (
    <>
      <AppBar
        className="!bg-white !shadow-none border-b h-[56px] justify-center"
        position="fixed"
      >
        <MainContainer
          className={`w-full flex flex-row-reverse justify-between gap-5 py-3 `}
        >
          <div className="flex flex-row-reverse justify-center items-center gap-2 w-3/4">
            <IconButton onClick={navigate.bind(this, -1)}>
              <img src={chevrow} className="w-4 -rotate-90" />
            </IconButton>
            <span className="line-clamp-1 w-full text-sm text-right">
              {title}
            </span>
          </div>
          <div className="text-base font-bold">{navbarActions}</div>
        </MainContainer>
      </AppBar>
      <main
        className={`pt-[56px] ${buttonNavigation !== "off" && `pb-[100px]`}`}
      >
        {container === "off" ? (
          children
        ) : (
          <MainContainer className={`w-full flex justify-center gap-5 py-8`}>
            {children}
          </MainContainer>
        )}
        {buttonNavigation}
      </main>
    </>
  );
};
SingleLayoutMobile.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  navbarActions: PropTypes.node,
  buttonNavigation: PropTypes.array,
  container: PropTypes.string,
};
export default SingleLayoutMobile;
