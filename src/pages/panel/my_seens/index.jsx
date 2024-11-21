import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { find_my_seens } from "./query";
import MySeenDesktop from "./desktop";
import MySeenMobile from "./mobile";

const MySeens = ({ isMobile }) => {
  const { user_info } = useSelector((redux) => redux.auth);
  const { data, isLoading } = useQuery(
    "my_seens",
    find_my_seens.bind(this, user_info?.id)
  );
  const props = {
    data,
    isLoading,
  };
  return isMobile ? <MySeenMobile {...props} /> : <MySeenDesktop {...props} />;
};
MySeens.propTypes = { isMobile: PropTypes.bool };
export default MySeens;
