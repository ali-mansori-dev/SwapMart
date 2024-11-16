import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import ChevrowDown from "../../../assets/chevron-down.svg";

const SearchItemComponent = ({
  setSelected,
  name,
  id,
  icon,
  slug,
  parent,
  children,
}) => {
  const onClick = () => {
    setSelected({ name, id, icon, slug, parent, children });
  };

  return (
    <div
      onClick={onClick}
      className={`w-full flex justify-between border-b border-gray-200 py-4 first:pt-0 last:pb-0 last:border-0 items-center cursor-pointer`}
    >
      <div className="flex items-center gap-3">
        <p className="text-base">{name}</p>
      </div>
      <img src={ChevrowDown} className="w-4 -rotate-90" alt="back" />
    </div>
  );
};
SearchItemComponent.propTypes = {
  setSelected: PropTypes.func,
};
export default SearchItemComponent;
