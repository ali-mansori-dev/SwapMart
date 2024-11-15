import { useQuery } from "react-query";
import PropTypes from "prop-types";

import { fetchData } from "../../queries/post";
import Desktop from "./desktop";
import Mobile from "./mobile";

const Index = ({ isMobile }) => {
  const { isLoading, data } = useQuery("postData", fetchData);

  

  return isMobile ? (
    <Mobile isLoading={isLoading} data={data} />
  ) : (
    <Desktop isLoading={isLoading} data={data} />
  );
};
Index.propTypes = { isMobile: PropTypes.bool };
export default Index;
