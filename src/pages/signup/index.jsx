import PropTypes from "prop-types";

import Desktop from "./desktop";
import Mobile from "./mobile";

const Index = ({ isMobile }) => {
  return isMobile ? <Mobile /> : <Desktop />;
};
Index.propTypes = {
  isMobile: PropTypes.bool,
};
export default Index;
