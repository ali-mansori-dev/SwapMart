import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import chevron from "../../../../assets/icon/chevron-down.svg";
import { resetAll } from "../../../../features/layout/layoutSlice";

const CategoryItem = ({ item, onCategorySelect }) => {
  const dispatch = useDispatch();

  // Handle subcategory or item click
  const handleClick = (data) => {
    onCategorySelect(data);
    dispatch(resetAll());
  };

  return item?.children?.length > 0 ? (
    <div className="border-b border-gray-300">
      {/* Parent Category */}
      <div className="w-full flex justify-between items-center px-4 py-4">
        <span className="w-full line-clamp-1">{item?.name || "Unnamed Category"}</span>
        <img src={chevron} alt="chevron" className="w-4" />
      </div>

      {/* Subcategories */}
      <div className="flex flex-row gap-4 p-4">
        {item.children.map((childItem) => (
          <div
            key={childItem.id}
            onClick={() => handleClick(childItem)}
            className="bg-gray-200 cursor-pointer text-xs px-1 py-2 text-center rounded-md w-1/2 line-clamp-2 mx-auto flex justify-center items-center"
          >
            {childItem?.name || "Unnamed Subcategory"}
          </div>
        ))}
      </div>
    </div>
  ) : (
    // Single Category (No Children)
    <div
      className="w-full flex justify-between items-center border-b border-gray-300 px-4 py-4 cursor-pointer"
      onClick={() => handleClick(item)}
    >
      <span className="w-full line-clamp-1">{item?.name || "Unnamed Category"}</span>
      <img src={chevron} alt="chevron" className="w-4 -rotate-90" />
    </div>
  );
};

// PropTypes Validation
CategoryItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string,
    slug: PropTypes.string,
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        name: PropTypes.string,
        slug: PropTypes.string,
      })
    ),
  }).isRequired,
  onCategorySelect: PropTypes.func.isRequired,
};

export default CategoryItem;
