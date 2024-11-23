import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { fetchAllPostData } from "../../queries/post";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useParams } from "react-router-dom";

const Index = ({ isMobile }) => {
  const { slug } = useParams();

  const { isLoading, data } = useQuery(
    ["all_post_data", slug],
    () => fetchAllPostData(slug || undefined),
    { keepPreviousData: false }
  );

  return isMobile ? (
    <Mobile isLoading={isLoading} data={data} />
  ) : (
    <Desktop isLoading={isLoading} data={data} />
  );
};
Index.propTypes = { isMobile: PropTypes.bool };
export default Index;
