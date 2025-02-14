import Desktop from "./Desktop";
import Mobile from "./Mobile";

const PaymentSuccess = ({ isMobile }) => {
  
  return isMobile ? <Mobile /> : <Desktop />;
};

export default PaymentSuccess;
