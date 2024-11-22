import PropTypes from "prop-types";

const SideItem = ({ item, isActive = false, setCategory }) => {
  return (
    <div
      onClick={setCategory.bind(this, item)}
      className={`w-full overflow-hidden cursor-pointer text-sm py-4 px-1 text-center border-b border-gray-300 ${
        isActive ? `bg-slate-200` : `hover:bg-slate-100`
      }`}
    >
      {item?.name}
    </div>
  );
};
SideItem.propTypes = {
  item: PropTypes.any,
  isActive: PropTypes.bool,
  setCategory: PropTypes.func,
};
export default SideItem;
