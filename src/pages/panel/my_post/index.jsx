import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { find_my_posts } from "./query";
import MyPostDesktop from "./desktop";
import MyPostMobile from "./mobile";

const MyPost = ({ isMobile }) => {
  const { user_info } = useSelector((redux) => redux.auth);
  const { data, isLoading } = useQuery(
    "my_post",
    find_my_posts.bind(this, user_info?.id)
  );
  const props = {
    data,
    isLoading,
  };
  return isMobile ? <MyPostMobile {...props} /> : <MyPostDesktop {...props} />;
};
MyPost.propTypes = { isMobile: PropTypes.bool };
export default MyPost;
