import PropTypes from "prop-types";

import MainContainer from "../../shared/container";
import Navbar from "../../shared/navbar/desktop";

const BasicLayoutDesktop = ({ children, containerClass, searchText = "" }) => {
  return (
    <>
      <Navbar searchText={searchText} />
      <main className="py-[64px]">
        <MainContainer
          className={`w-full flex justify-center gap-5 py-12 ${containerClass}`}
        >
          {children}
        </MainContainer>
      </main>
    </>
  );
};
BasicLayoutDesktop.propTypes = {
  children: PropTypes.node.isRequired,
  searchText: PropTypes.string,
  containerClass: PropTypes.string,
};
export default BasicLayoutDesktop;
