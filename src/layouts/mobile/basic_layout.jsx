import { Container } from "@mui/material";
import PropTypes from "prop-types";

import ButtonNavigation from "./button_navigation";
import Navbar from "../../shared/navbar";

const BasicLayoutMobile = ({ children, searchText, filter = [] }) => {
  return (
    <>
      <Navbar searchText={searchText} />
      <main
        className={`${
          filter?.length > 0 ? `mt-[122px]` : `mt-[80px]`
        } mb-[165px] pb-72`}
      >
        <Container maxWidth="lg" className="h-[calc(100vh-170px)] !pb-4">
          {children}
        </Container>
        <div className="h-28"></div>
      </main>
      <ButtonNavigation />
    </>
  );
};
BasicLayoutMobile.propTypes = {
  children: PropTypes.node.isRequired,
  searchText: PropTypes.string,
  filter: PropTypes.array,
};
export default BasicLayoutMobile;
