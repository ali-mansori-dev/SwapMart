import PropTypes from "prop-types";

import PostCardSkeleton from "../../shared/components/post/post_card_skeleton";
import PostCard from "../../shared/components/post/post_card";
import EmptyState from "./empty_state";

const CardsPreview = ({ isLoading, data }) => {
  const skeleton = "0".repeat(12).split("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5 pb-5 mb-28">
      {isLoading ? (
        skeleton.map((_, index) => <PostCardSkeleton key={index} />)
      ) : data?.length > 0 ? (
        data?.map((value, index) => <PostCard key={index} {...value} />)
      ) : (
        <EmptyState />
      )}
      <div className="h-8"></div>
    </div>
  );
};
CardsPreview.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.any,
  city: PropTypes.string,
};
export default CardsPreview;
