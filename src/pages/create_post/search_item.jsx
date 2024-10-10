import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const SearchItemComponent = ({ slug, name, isBack = false }) => {
  return (
    <Link
      to={`/new?slug=${slug}`}
      className={`w-full flex ${
        isBack ? "gap-3" : "justify-between"
      } border-b border-gray-200 py-4 items-center cursor-pointer`}
    >
      {/* {isBack && (
        <span>
          Back
           <MoveRight size={"18px"} className="text-gray-500" />
        </span>
      )} */}
      <div className="flex items-center gap-3">
        {/* {icon !== "" && CategoryIconsSm[icon]} */}
        <p className="text-sm">{name}</p>
      </div>

      {!isBack && (
        <span>
          {/* <ChevronLeftIcon size={"18px"} className="text-gray-500" /> */}
        </span>
      )}
    </Link>
  );
};
SearchItemComponent.propTypes = {
  slug: PropTypes.any,
  name: PropTypes.any,
  isBack: PropTypes.any,
  icon: PropTypes.any,
};
export default SearchItemComponent;
