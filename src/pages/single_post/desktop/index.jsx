import PropTypes from "prop-types";
import BasicLayoutDesktop from "../../../layouts/desktop/basic_layout";
import { LoadingScreenFixed } from "../../../shared/loader";
import PostBreadcrumbs from "../post_breadcrumbs";
import { formatteCurrency } from "../../../utils/formatNumber";
import { fromNow } from "../../../utils/dateFormat";
import { Alert, Button } from "@mui/material";
import Images from "../images";

const Desktop = ({ data, isLoading }) => {
  return (
    <BasicLayoutDesktop>
      {!isLoading && data?.data && data?.data?.title ? (
        <div className="w-full flex-col flex justify-between gap-6 px-44">
          <PostBreadcrumbs
            bread_crumb={data?.bread_crumb}
            title={data?.data?.title}
          />
          <div className="w-full flex justify-between gap-36">
            <div className="flex flex-col gap-4 w-1/2">
              <h5 className="text-xl text-gray-900 leading-10">
                {data?.data?.title}
              </h5>
              <div className="Fanum text-sm lg:text-md w-2/3 text-right text-gray-600 ">
                {data?.data?.amount && data?.data?.amount > 0
                  ? formatteCurrency(data?.data?.amount)
                  : "Best Offer"}
              </div>
              <span className="text-gray-400 text-xs Fanum mb-3">
                {fromNow(data?.data?.updatedAt)} in {data?.data?.district}
              </span>
              {data?.data?.isDelete ? (
                <Alert icon={<></>} severity="error">
                  آگهی حذف شده است
                </Alert>
              ) : (
                <div className="w-full flex justify-between">
                  <div className="flex flex-row gap-3 ">
                    <Button
                      size="medium"
                      variant="contained"
                      //   disabled={showPhone}
                      //   onClick={setShowPhone.bind(this, true)}
                    >
                      Contact Info
                    </Button>
                  </div>
                  <div className="flex flex-row gap-3 "></div>
                </div>
              )}
              <hr className="w-full" />
            </div>
            <div className="flex flex-col gap-6 w-1/2">
              {data?.data?.images[0] && <Images images={data?.data?.images} />}
            </div>
          </div>
        </div>
      ) : (
        <LoadingScreenFixed />
      )}
    </BasicLayoutDesktop>
  );
};
Desktop.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Desktop;
