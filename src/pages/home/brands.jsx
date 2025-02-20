import { useQuery } from "react-query";
import { Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import { fetchBrands } from "./functions";
import { Pagination } from "swiper/modules";

const Brands = () => {
  const { data, isLoading } = useQuery("fetchBrands", fetchBrands);

  return (
    <div className="!z-0 flex flex-col gap-6 lg:gap-10 items-center pb-24 lg:pb-0">
      <span className="lg:text-xl">Top Brands</span>
      <Swiper
        slidesPerView={4}
        pagination={{
          type: "custom",
        }}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide
                key={index}
                className="w-1/4 flex-1 flex flex-col items-center gap-3"
              >
                <div className="w-[68px] h-[68px] lg:w-[90px] lg:h-[90px]">
                  <Skeleton variant="rounded" sx={{ height: "100%" }} />
                </div>
                <div className="w-[68px] h-[16px] lg:w-[90px] lg:h-[24px]">
                  <Skeleton variant="text" sx={{ height: "100%" }} />
                </div>
              </SwiperSlide>
            ))
          : data?.map((item, index) => (
              <SwiperSlide key={index}>
                <Link
                  key={index}
                  to={`/category/${item.slug}`}
                  className=" flex flex-col items-center gap-3"
                >
                  <div className="bg-gray-200 rounded-xl flex justify-center items-center p-1 w-[58px] h-[58px] lg:w-[90px] lg:h-[90px]">
                    <img
                      src={item?.image}
                      className="!w-[36px]"
                      alt="home-icon"
                    />
                  </div>
                  <h3 className="text-xs lg:text-base text-center line-clamp-1">
                    {item?.name}
                  </h3>
                </Link>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default Brands;
