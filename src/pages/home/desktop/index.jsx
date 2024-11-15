import PropTypes from "prop-types";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import CardsPreview from "../cards_preview";

const Desktop = ({ data, isLoading }) => {
  return (
    <BasicLayoutDesktop>
      <CardsPreview key={1} data={data} isLoading={isLoading} city="aaa" />
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Desktop;
