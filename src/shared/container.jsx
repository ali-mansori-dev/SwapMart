import PropTypes from "prop-types";

function MainContainer({ children, className }) {
  return (
    <div
      className={`container text-gray-800 lg:max-w-[1340px] w-full lg:min-w-[800px] lg:w-[88%] mx-auto px-4 lg:px-0 select-none ${className}`}
    >
      {children}
    </div>
  );
}
MainContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
export default MainContainer;
