import { Alert, Button } from "@mui/material";
import PropTypes from "prop-types";
import { useEffect } from "react";

import BasicLayoutMobile from "../../../layouts/mobile/single_layout";
import { formatteCurrency } from "../../../utils/formatNumber";
import { LoadingScreenFixed } from "../../../shared/loader";
import { fromNow } from "../../../utils/dateFormat";
import Images from "../images";
import MainContainer from "../../../shared/container";

const Mobile = ({ data, isLoading }) => {
  return (
    <BasicLayoutMobile container="off" title={data?.title}>
      {!isLoading ? (
        <div className="w-full flex-col flex justify-between gap-6 pb-28">
          <div className="flex flex-col gap-6 w-full">
            {data?.images[0] && <Images images={data?.images} />}
          </div>
          <MainContainer>
            <div className="w-full flex justify-between gap-36">
              <div className="flex flex-col gap-4 w-full">
                <h5 className="w-full text-left text-lg text-gray-900 leading-10">
                  {data?.title}
                </h5>
                <div className=" text-base font-bold w-full text-left text-gray-600 ">
                  {data?.amount && data?.amount > 0
                    ? formatteCurrency(data?.amount)
                    : "Best Offer"}
                </div>
                <span className="text-gray-400 text-sm  mb-3">
                  {fromNow(data?.created_at)}
                </span>
                {/* {data?.isDelete ? (
                  <Alert icon={<></>} severity="error">
                    آگهی حذف شده است
                  </Alert>
                ) : (
                  <div className="w-full flex justify-between">
                    <div className="flex flex-row gap-3 ">
                      <Button
                        size="medium"
                        variant="contained"
                      >
                        Contact Info
                      </Button>
                    </div>
                    <div className="flex flex-row gap-3 "></div>
                  </div>
                )} */}
                {/* <hr className="w-full" /> */}
              </div>
            </div>
          </MainContainer>
        </div>
      ) : (
        <LoadingScreenFixed />
      )}
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = { data: PropTypes.any, isLoading: PropTypes.bool };
export default Mobile;
