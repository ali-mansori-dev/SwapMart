import PropTypes from "prop-types";
import { IconButton } from "@mui/material";

import BasicLayoutMobile from "../../../layouts/mobile/single_layout";
import { formatteCurrency } from "../../../utils/formatNumber";
import { LoadingScreenFixed } from "../../../shared/loader";
import { fromNow } from "../../../utils/dateFormat";
import Images from "../images";
import MainContainer from "../../../shared/container";
import bookmark_icon from "../../../assets/icon/bookmark-outline.svg";
import bookmark_fill_icon from "../../../assets/icon/bookmark.svg";

const Mobile = ({ data, isLoading }) => {
  return (
    <BasicLayoutMobile
      container="off"
      title={data?.title}
    >
      {!isLoading ? (
        <div className="w-full flex-col flex justify-between gap-6 pb-28">
          <div className="flex flex-col gap-6 w-full">
            {data?.images && data?.image?.length ? (
              <Images images={data?.images} />
            ) : (
              <img
                className="relative w-full h-[280px] lg:w-[380px] lg:h-[350px] pb-2/3 lg:rounded-md"
                src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
              />
            )}
            11
          </div>
          111
          <MainContainer>
            <div className="w-full flex justify-between gap-36">
              <div className="flex flex-col gap-4 w-full">
                <h5 className="w-full text-left text-lg text-gray-900 leading-10">
                  {data?.title}
                  111
                </h5>
                <div className=" text-base font-bold w-full text-left text-gray-600 ">
                  {data?.amount && data?.amount > 0
                    ? formatteCurrency(data?.amount)
                    : "Best Offer"}
                </div>
                <span className="text-gray-400 text-sm  mb-3">
                  {fromNow(data?.created_at)}
                </span>
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
Mobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default Mobile;
