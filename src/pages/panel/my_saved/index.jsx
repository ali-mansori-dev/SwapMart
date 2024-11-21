import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { find_my_saved } from "./query";
import MySavedDesktop from "./desktop";
import MySavedMobile from "./mobile";

const MySaved = ({ isMobile }) => {
  const { user_info } = useSelector((redux) => redux.auth);
  const { data, isLoading } = useQuery(
    "my_saved",
    find_my_saved.bind(this, user_info?.id)
  );
  const props = {
    data,
    isLoading,
  };
  return isMobile ? (
    <MySavedMobile {...props} />
  ) : (
    <MySavedDesktop {...props} />
  );
};
MySaved.propTypes = { isMobile: PropTypes.bool };
export default MySaved;
