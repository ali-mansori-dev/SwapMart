import PropTypes from "prop-types";
import BasicLayoutMobile from "../../../layouts/mobile/basic_layout";
import { LoadingScreenFixed } from "../../../shared/loader";
// import PostBreadcrumbs from "../post_breadcrumbs";
import { formatteCurrency } from "../../../utils/formatNumber";
import { fromNow } from "../../../utils/dateFormat";
import { Alert, Button } from "@mui/material";
import Images from "../images";
import { useEffect } from "react";

const Mobile = ({ data, isLoading }) => {
  useEffect(() => {
    console.log(isLoading, data);
  }, [isLoading, data]);
  
  return (
    <BasicLayoutMobile>
      {!isLoading ? (
        <div className="w-full flex-col flex justify-between gap-6 px-2 pb-28">
          <div className="flex flex-col gap-6 w-full">
            {data?.images[0] && <Images images={data?.images} />}
          </div>
          {/* <PostBreadcrumbs
            bread_crumb={data?.bread_crumb}
            title={data?.title}
          /> */}
          <div className="w-full flex justify-between gap-36">
            <div className="flex flex-col gap-4 w-full">
              <h5 className="w-full text-left text-xl text-gray-900 leading-10">
                {data?.title}
              </h5>
              <div className="Fanum text-sm lg:text-md w-full text-left text-gray-600 ">
                {data?.amount && data?.amount > 0
                  ? formatteCurrency(data?.amount)
                  : "Best Offer"}
              </div>
              <span className="text-gray-400 text-xs Fanum mb-3">
                {fromNow(data?.updatedAt)} in {data?.district}
              </span>
              {data?.isDelete ? (
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
          </div>
        </div>
      ) : (
        <LoadingScreenFixed />
      )}
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Mobile;
