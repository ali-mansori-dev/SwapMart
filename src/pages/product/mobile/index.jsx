import PropTypes from "prop-types";

import BasicLayoutMobile from "../../../layouts/mobile/single_layout";
import CartButton from "../../../shared/components/card/cart_button";
import { formatteCurrency } from "../../../utils/formatNumber";
import ImageComponent from "../../../shared/components/image";
import { LoadingScreenFixed } from "../../../shared/loader";
import MainContainer from "../../../shared/container";

const Mobile = ({ data, isLoading }) => {
  return (
    <BasicLayoutMobile
      container="off"
      buttonNavigation={
        <div className="bg-white fixed inline-flex justify-between items-center left-0 right-0 bottom-0 h-[65px] border-t border-gray-200 px-4">
          <div className="inline-flex flex-row gap-3 items-center">
            <div className="flex flex-col gap-1">
              {data?.offer > 0 && data?.price && (
                <span className="text-gray-400 text-xs line-through">
                  {formatteCurrency(data.price)}
                </span>
              )}
              {data?.price && (
                <span className="text-sm font-bold text-gray-600">
                  {formatteCurrency(data.price)}
                </span>
              )}
            </div>
            {data?.offer > 0 && (
              <span className="text-xs bg-primary-50 text-white h-max py-[1px] px-[4px]  rounded-full">
                {data?.offer}%
              </span>
            )}
          </div>

          <CartButton data={{ product_id: data?.id, ...data, id: undefined }} />
        </div>
      }
      title={data?.title}
    >
      {isLoading && <LoadingScreenFixed />}
      {data && !isLoading && (
        <div className="w-full flex-col flex justify-between gap-2 pb-28">
          {/* <div className="flex flex-col gap-6 w-full">
            {data?.images && data?.image?.length ? (
              <Images images={data?.images} />
            ) : (
              <img
                className="relative w-full h-[280px] lg:w-[380px] lg:h-[350px] pb-2/3 lg:rounded-md"
                src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
              />
            )}
          </div> */}
          <ImageComponent src={data?.image?.at(0)} />
          <MainContainer>
            <div className="w-full flex justify-between gap-36">
              <div className="flex flex-col gap-4 w-full">
                <h5 className="w-full text-left text-lg font-bold text-gray-800 leading-10">
                  {data?.title}
                </h5>
                <div className=" text-base font-bold w-full text-left text-gray-600 ">
                  {data?.price && data?.price > 0
                    ? formatteCurrency(data?.price)
                    : "Best Offer"}
                </div>
              </div>
            </div>
          </MainContainer>
        </div>
      )}
    </BasicLayoutMobile>
  );
};
Mobile.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
};
export default Mobile;
