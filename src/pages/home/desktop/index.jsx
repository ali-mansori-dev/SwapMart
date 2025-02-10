import PropTypes from "prop-types";

import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import CardsPreview from "../cards_preview";
import Slider from "../slider";

const Desktop = ({ data, isLoading, lastItemRef, hasNextPage }) => {
  return (
    <BasicLayoutDesktop>
      <Slider />
      {/* <CardsPreview
        key={1}
        data={data}
        isLoading={isLoading}
        lastItemRef={lastItemRef}
        hasNextPage={hasNextPage}
        city="aaa"
      /> */}
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
  lastItemRef: PropTypes.any,
  hasNextPage: PropTypes.bool,
};
export default Desktop;
