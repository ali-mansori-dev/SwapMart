import PropTypes from "prop-types";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import { formatteCurrency } from "../../../utils/formatNumber";
import { Alert, CircularProgress } from "@mui/material";
import Images from "../images";
import CartButton from "../../../shared/components/card/product_card";

const Desktop = ({ data, isLoading }) => {
  // Render loading state
  if (isLoading) {
    return (
      <BasicLayoutDesktop>
        <div className="flex items-center justify-center h-[80vh]">
          <CircularProgress size="30px" />
        </div>
      </BasicLayoutDesktop>
    );
  }

  // Main content
  return (
    <BasicLayoutDesktop>
      <div className="w-full flex flex-col justify-between gap-6 py-4">
        <div className="w-full flex justify-between gap-8">
          {/* Right Section: Images */}
          <div className="flex flex-col gap-6 w-[380px]">
            <Images images={data?.image} />
          </div>

          {/* Left Section: Details */}
          <div className="flex flex-col gap-4 w-1/2">
            <h5 className="text-2xl text-gray-900 leading-10">{data?.title}</h5>
            <div className="flex flex-row items-center gap-4">
              <img
                src={data?.brand?.image}
                className="w-[50px] h-[50px]"
                loading="lazy"
              />
              <span className="text-lg font-bold">{data?.brand?.name}</span>
            </div>

            {data?.is_delete ? (
              <Alert icon={null} severity="error">
                This Post Deleted
              </Alert>
            ) : (
              <></>
            )}
          </div>
          <div className="border border-gray-200 min-w-[300px] p-4 rounded-xl">
            <div className="w-full flex justify-between items-center pb-8">
              <span>Price</span>{" "}
              <span className="text-lg font-bold  text-left text-gray-600">
                {data?.price && data?.price > 0
                  ? formatteCurrency(data.price)
                  : "Best Offer"}
              </span>
            </div>
            <CartButton data={data} />
          </div>
        </div>
      </div>
    </BasicLayoutDesktop>
  );
};

// PropTypes for strict type checking
Desktop.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
    image: PropTypes.arrayOf(PropTypes.string),
    is_delete: PropTypes.bool,
  }),
  isLoading: PropTypes.bool,
};

export default Desktop;
