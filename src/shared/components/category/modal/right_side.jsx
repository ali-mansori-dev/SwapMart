import PropTypes from "prop-types";

import CategoryItem from "./category_item";

const RightSide = ({ category, onCategorySelect, all_item }) => {
  return (
    <div className="flex flex-col w-3/4">
      {all_item && category?.name && (
        <CategoryItem
          item={{ name: `All ${category?.name}`, slug: category?.slug }}
          onCategorySelect={onCategorySelect}
        />
      )}
      {category?.children && category?.children[0] ? (
        category?.children?.map((item, index) => (
          <CategoryItem
            key={index}
            item={item}
            onCategorySelect={onCategorySelect}
          />
        ))
      ) : (
        <CategoryItem
          item={{
            name: category?.name,
            slug: category?.slug,
            id: category?.id,
          }}
          onCategorySelect={onCategorySelect}
        />
      )}
    </div>
  );
};
RightSide.propTypes = {
  category: PropTypes.any,
  onCategorySelect: PropTypes.any,
  all_item: PropTypes.bool,
};
export default RightSide;
