import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useQuery } from "react-query";

import SmallPostCard from "../../shared/components/product/small_product_cart";
import megaphone from "../../assets/icon/megaphone.svg";
import chevron from "../../assets/icon/arrow-down.svg";
import { fetchProductsWithOffers } from "./functions";

const TodaysOfferse = () => {
  const { data, isLoading } = useQuery(
    "productwithoffers",
    fetchProductsWithOffers
  );

  return (
    <>
      {isLoading && (
        <div className="mb-8 bg-gray-200 text-white rounded-lg px-6 py-4 h-[280px] lg:h-[319px]"></div>
      )}
      {data && (
        <div className="mb-8 bg-primary-30 text-white rounded-lg px-6 py-4 h-[280px] lg:h-[319px]">
          <Swiper
            slidesPerView={2}
            spaceBetween={6}
            pagination={{
              type: "custom",
            }}
            navigation={false}
            modules={[Pagination]}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 6,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="w-[140px]">
              <div className="flex flex-col h-full justify-center items-center gap-5">
                <span className="text-lg border-b-2 border-b-white">
                  Todays Offers
                </span>
                <span className="w-24">
                  <img src={megaphone} className="fill-slate-500" />
                </span>
              </div>
            </SwiperSlide>
            {data.map((product, index) => (
              <SwiperSlide key={index}>
                <SmallPostCard {...product} />
              </SwiperSlide>
            ))}
            <SwiperSlide>
              <div className="text-gray-700 flex flex-col gap-4 items-center justify-center w-full h-full bg-white rounded-lg overflow-hidden">
                <span className="text-lg">See All</span>
                <span className="w-6 border rounded-full p-4 border-gray-900">
                  <img src={chevron} className="-rotate-90" />
                </span>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default TodaysOfferse;
