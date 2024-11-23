import { useQuery } from "react-query";
import PropTypes from "prop-types";
import { fetchAllPostData } from "../../queries/post";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useParams } from "react-router-dom";

const Index = ({ isMobile }) => {
  const { slug } = useParams();

  // Query to fetch posts data
  const { isLoading, data, error } = useQuery(
    ["all_post_data", slug],
    () => fetchAllPostData(slug),
    {
      keepPreviousData: false,
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
      retry: 2, // Retry fetching data up to 2 times on failure
      refetchOnWindowFocus: false, // Prevent refetching on tab/window focus
    }
  );

  // Render error state
  if (error) {
    console.error("Error fetching post data:", error);
    return <div>Error loading posts. Please try again later.</div>;
  }

  // Render based on device type
  return isMobile ? (
    <Mobile isLoading={isLoading} data={data} />
  ) : (
    <Desktop isLoading={isLoading} data={data} />
  );
};

Index.propTypes = {
  isMobile: PropTypes.bool.isRequired, // Added `isRequired` for clarity
};

export default Index;
