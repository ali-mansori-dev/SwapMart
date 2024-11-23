import PropTypes from "prop-types";
import CategoryItem from "./category_item";

const RightSide = ({ category, onCategorySelect, all_item }) => {
  const renderCategoryItems = () => {
    return (category?.children || []).map((item) => (
      <CategoryItem
        key={item.id}
        item={item}
        onCategorySelect={onCategorySelect}
      />
    ));
  };

  return (
    <div className="flex flex-col w-3/4">
      {all_item && category?.name && (
        <CategoryItem
          item={{ name: `All ${category.name}`, slug: category.slug }}
          onCategorySelect={onCategorySelect}
        />
      )}
      {renderCategoryItems()}
      {(!category?.children || category?.children.length === 0) && (
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

// PropTypes Validation
RightSide.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    slug: PropTypes.string,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    children: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
        name: PropTypes.string.isRequired,
        slug: PropTypes.string,
      })
    ),
  }),
  onCategorySelect: PropTypes.func.isRequired,
  all_item: PropTypes.bool,
};

export default RightSide;
