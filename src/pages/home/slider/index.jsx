import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="mb-8 h-[220px] lg:h-[400px] select-none">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
        autoplay
      >
        <SwiperSlide>
          <img
            loading="eager"
            className="h-[220px] object-cover lg:h-[400px]"
            src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Slides/slide1.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="eager"
            className="h-[220px] object-cover lg:h-[400px]"
            src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Slides/slide2.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="eager"
            className="h-[220px] object-cover lg:h-[400px]"
            src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Slides/slide3.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="eager"
            className="h-[220px] object-cover lg:h-[400px]"
            src="https://fwpdokjfwfokcqrgoanf.supabase.co/storage/v1/object/public/images/SwapMart/Slides/slide4.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
