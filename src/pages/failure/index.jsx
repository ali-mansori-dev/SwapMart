import PropTypes from "prop-types";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const PaymentFailure = ({ isMobile }) => {
  return isMobile ? <Mobile /> : <Desktop />;
};
PaymentFailure.prototype = {
  isMobile: PropTypes.bool,
};
export default PaymentFailure;
