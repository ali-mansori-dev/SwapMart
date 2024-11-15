import { useParams } from "react-router-dom";
import { FindPostbySlugFn } from "../../queries/post";
import { useQuery } from "react-query";
import Mobile from "./mobile";
import Desktop from "./desktop";
import PropTypes from "prop-types";

const SinglePost = ({ isMobile }) => {
  const { slug } = useParams();
  const { isLoading, data } = useQuery(
    "singlepost",
    FindPostbySlugFn.bind(this, slug)
  );

  return isMobile ? (
    <Mobile isLoading={isLoading} data={data} />
  ) : (
    <Desktop isLoading={isLoading} data={data} />
  );
};
SinglePost.propTypes = { isMobile: PropTypes.bool };
export default SinglePost;
