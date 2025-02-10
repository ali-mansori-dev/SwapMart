import PropTypes from "prop-types";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import CardsPreview from "../cards_preview";
import Slider from "../slider";

const Mobile = ({ data, isLoading, lastItemRef, hasNextPage }) => {
  return (
    <BasicLayoutMobile>
      <Slider />
      <CardsPreview
        key={1}
        data={data}
        isLoading={isLoading}
        lastItemRef={lastItemRef}
        hasNextPage={hasNextPage}
        city="aaa"
      />
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
  lastItemRef: PropTypes.any,
  hasNextPage: PropTypes.bool,
};
export default Mobile;
