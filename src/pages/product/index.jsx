import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useQuery } from "react-query";

import { FindPostbyIdFn } from "../../queries/post";
import Mobile from "./mobile";
import Desktop from "./desktop";

const SinglePost = ({ isMobile }) => {
  const { id } = useParams();

  const { isFetching, data } = useQuery(
    ["post_data", id],
    () => FindPostbyIdFn(id),
    {
      keepPreviousData: false,
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      retry: 2, // Retry fetching data up to 2 times on failure
      refetchOnWindowFocus: false, // Prevent refetching on tab/window focus
    }
  );

  return isMobile ? (
    <Mobile isLoading={isFetching} data={data} />
  ) : (
    <Desktop isLoading={isFetching} data={data} />
  );
};
SinglePost.propTypes = { isMobile: PropTypes.bool };
export default SinglePost;
