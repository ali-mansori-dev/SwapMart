import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

import PostCardSkeleton from "../../shared/components/product/product_card_skeleton";
import PostCard from "../../shared/components/product/product_card";
import EmptyState from "./empty_state";

const CardsPreview = ({ isLoading, data, lastItemRef, hasNextPage }) => {
  const skeleton = "0".repeat(12).split("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 pb-5 mb-28">
      {isLoading ? (
        skeleton.map((_, index) => <PostCardSkeleton key={index} />)
      ) : data?.pages.length > 0 ? (
        <>
          {data.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.data.map((item, index) => {
                return <PostCard key={index} {...item} />;
              })}
            </React.Fragment>
          ))}
          <div className="pb-16 flex justify-center grid-cols-3">
            {!isLoading && hasNextPage && (
              <CircularProgress ref={lastItemRef} />
            )}
          </div>
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
};
CardsPreview.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.any,
  city: PropTypes.string,
  lastItemRef: PropTypes.any,
  hasNextPage: PropTypes.bool,
};
export default CardsPreview;
