import PropTypes from "prop-types";

import PostCardSkeleton from "../../components/post/post_card_skeleton";
import PostCard from "../../components/post/post_card";
import EmptyState from "./empty_state";

const CardsPreview = ({ isLoading, data }) => {
  const skeleton = "0".repeat(12).split("");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full w-full gap-5">
      {/* {categoryData?.name && (
        <div className="text-xs col-span-1 lg:col-span-3 text-gray-800">
          {categoryData?.name} در <span className="text-gray-400">{city}</span>
        </div>
      )} */}
      {isLoading ? (
        skeleton.map((_, index) => <PostCardSkeleton key={index} />)
      ) : data?.result?.length > 0 ? (
        data?.result?.map((value, index) => <PostCard key={index} {...value} />)
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
};
export default CardsPreview;
