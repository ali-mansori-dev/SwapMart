import PropTypes from "prop-types";
import Desktop from "./desktop";
import Mobile from "./mobile";
// import { useInfiniteItems } from "../../queries/postInfinitQuery";
// import { useRef } from "react";

const Index = ({ isMobile }) => {
  // const { isLoading, data, hasNextPage, fetchNextPage, isFetchingNextPage } =
  //   useInfiniteItems();
  // const observer = useRef();

  // const lastItemRef = (node) => {
  //   if (isFetchingNextPage) return;
  //   if (observer.current) observer.current.disconnect();

  //   observer.current = new IntersectionObserver((entries) => {
  //     if (entries[0].isIntersecting && hasNextPage) {
  //       fetchNextPage();
  //     }
  //   });

  //   if (node) observer.current.observe(node);
  // };

  return isMobile ? <Mobile /> : <Desktop />;
};

Index.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Index;
