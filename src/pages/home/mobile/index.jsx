import { Button } from "@mui/material";
import PropTypes from "prop-types";

import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import CardsPreview from "../cards_preview";

const Mobile = ({ data, isLoading }) => {
  return (
    <BasicLayoutMobile>
      <CardsPreview key={1} data={data} isLoading={isLoading} city="aaa" />
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Mobile;
