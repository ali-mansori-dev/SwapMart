import PropTypes from "prop-types";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useInfiniteItems } from "../../queries/postInfinitQuery";
import { useRef } from "react";

const Index = ({ isMobile }) => {
  // const { slug } = useParams();

  // Query to fetch posts data
  const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteItems();
  const observer = useRef();

  console.log(data);
  

  const lastItemRef = (node) => {
    if (isFetchingNextPage) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (node) observer.current.observe(node);
  };

  // const { isLoading, data, error } = useQuery(
  //   ["all_post_data", slug],
  //   () => fetchAllPostData(slug),
  //   {
  //     keepPreviousData: false,
  //     staleTime: 5 * 60 * 1000, // Cache data for 5 minutes
  //     retry: 2, // Retry fetching data up to 2 times on failure
  //     refetchOnWindowFocus: false, // Prevent refetching on tab/window focus
  //   }
  // );

  // Render error state
  // if (error) {
  //   console.error("Error fetching post data:", error);
  //   return <div>Error loading posts. Please try again later.</div>;
  // }

  // Render based on device type
  return isMobile ? (
    <Mobile
      isLoading={isLoading}
      data={data}
      lastItemRef={lastItemRef}
      hasNextPage={hasNextPage}
    />
  ) : (
    <Desktop
      isLoading={isLoading}
      data={data}
      lastItemRef={lastItemRef}
      hasNextPage={hasNextPage}
    />
  );
};

Index.propTypes = {
  isMobile: PropTypes.bool.isRequired, // Added `isRequired` for clarity
};

export default Index;
