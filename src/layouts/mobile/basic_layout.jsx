import PropTypes from "prop-types";

import Navbar from "../../shared/navbar";
import MainContainer from "../../shared/container";

const BasicLayoutMobile = ({ children, searchText, filter = [] }) => {
  return (
    <>
      <Navbar searchText={searchText} />
      <main
        className={`${
          filter?.length > 0 ? `mt-[122px]` : `mt-[12px]`
        } mb-[65px]`}
      >
        {filter?.length > 0 && (
          <div className="fixed top-[72px] right-0 left-0 flex flex-row gap-2 border-b border-gray-300 px-3 py-2 bg-white z-40">
            {filter?.map((value, index) => (
              <span
                key={index}
                className=" flex flex-row gap-2 items-center justify-center border border-primary-default text-primary-default w-max h-max text-xs px-3 py-2 rounded-full"
              >
                {value.key}: {value.value}
              </span>
            ))}
          </div>
        )}
        {/* <Container maxWidth="lg"></Container> */}
        <MainContainer
          className={`w-full flex flex-col justify-center gap-8 py-8 `}
        >
          {children}
        </MainContainer>
      </main>
    </>
  );
};
BasicLayoutMobile.propTypes = {
  children: PropTypes.node.isRequired,
  searchText: PropTypes.string,
  filter: PropTypes.array,
};
export default BasicLayoutMobile;
