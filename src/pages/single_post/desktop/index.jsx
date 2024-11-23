import PropTypes from "prop-types";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import { LoadingScreenFixed } from "../../../shared/loader";
import { formatteCurrency } from "../../../utils/formatNumber";
import { fromNow } from "../../../utils/dateFormat";
import { Alert, Button } from "@mui/material";
import Images from "../images";

const Desktop = ({ data, isLoading }) => {
  // Render loading state
  if (isLoading) {
    return (
      <BasicLayoutDesktop>
        <LoadingScreenFixed />
      </BasicLayoutDesktop>
    );
  }

  // Main content
  return (
    <BasicLayoutDesktop>
      <div className="w-full flex flex-col justify-between gap-6 px-28 py-4">
        <div className="w-full flex justify-between gap-10">
          {/* Left Section: Details */}
          <div className="flex flex-col gap-4 w-1/2">
            <h5 className="text-2xl text-gray-900 leading-10">{data?.title}</h5>
            <div className="text-lg font-bold w-2/3 text-left text-gray-600">
              {data?.amount && data?.amount > 0
                ? formatteCurrency(data.amount)
                : "Best Offer"}
            </div>
            <span className="text-gray-400 text-base mb-3">
              {fromNow(data?.created_at)}
            </span>

            {data?.is_delete ? (
              <Alert icon={null} severity="error">
                This Post Deleted
              </Alert>
            ) : (
              <></>
            )}
          </div>

          {/* Right Section: Images */}
          <div className="flex flex-col gap-6 w-1/2">
            {data?.images?.length > 0 && <Images images={data.images} />}
          </div>
        </div>
      </div>
    </BasicLayoutDesktop>
  );
};

// PropTypes for strict type checking
Desktop.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    amount: PropTypes.number,
    images: PropTypes.arrayOf(PropTypes.string),
    is_delete: PropTypes.bool,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Desktop;
