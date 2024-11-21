import PropTypes from "prop-types";

import CreatePostDesktop from "./desktop";
import CreatePostMobile from "./mobile";

const Index = ({ isMobile }) => {
  return isMobile ? <CreatePostMobile /> : <CreatePostDesktop />;
};
Index.propTypes = { isMobile: PropTypes.bool };
export default Index;
