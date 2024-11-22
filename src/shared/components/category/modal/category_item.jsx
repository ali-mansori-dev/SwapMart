import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import chevron from "../../../../assets/icon/chevron-down.svg";
import { close_all } from "../../../../features/layout/layoutSlice";

const CategoryItem = ({ item, onCategorySelect }) => {
  const dispatch = useDispatch();

  const onSubChildClick = (data) => {
    onCategorySelect(data);
    dispatch(close_all());
  };
  return item?.children && item?.children.length > 0 ? (
    <div className="border-b  border-gray-300">
      <div className="w-full inline-flex justify-between gap-3 items-center px-4 py-4">
        <span className="w-full line-clamp-1">{item?.name}</span>
        <span className="">
          <img src={chevron} alt="chevron" className="w-4 " />
        </span>
      </div>
      <div className="flex flex-row gap-4 p-4">
        {item?.children?.map((childitem, index) => (
          <div
            key={index}
            onClick={onSubChildClick.bind(this, childitem)}
            className="bg-gray-200 cursor-pointer text-xs px-1 py-2 text-center rounded-md w-1/2 line-clamp-2 mx-auto inline-flex justify-center items-center"
          >
            {childitem?.name}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div
      className="w-full inline-flex justify-between gap-3 items-center border-b border-gray-300 px-4 py-4 cursor-pointer"
      onClick={onSubChildClick.bind(this, item)}
    >
      <span className="w-full line-clamp-1">{item?.name}</span>
      <span className="">
        <img src={chevron} alt="chevron" className="w-4 -rotate-90" />
      </span>
    </div>
  );
};
CategoryItem.propTypes = {
  item: PropTypes.any,
  onCategorySelect: PropTypes.any,
};
export default CategoryItem;
