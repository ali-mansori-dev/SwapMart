import PropTypes from "prop-types";
import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import SmallPostCard from "../../../shared/components/product/small_product_cart";
import { Button } from "@mui/material";

const Mobile = ({ data, loading }) => {
  return (
    <BasicLayoutMobile>
      <div className="mb-3">
        <Button variant="contained">Filter</Button>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 ">
        {loading &&
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-gray-100 h-[247px] rounded-lg"></div>
          ))}
        {data &&
          data?.map((item, index) => <SmallPostCard {...item} key={index} />)}
      </div>
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = {
  data: PropTypes.any,
  loading: PropTypes.bool,
};
export default Mobile;
