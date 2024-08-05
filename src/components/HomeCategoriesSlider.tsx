import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React from "react";
import { mainSliderImages } from "../mocks/mainSliderImages.ts";
import { NavLink } from "react-router-dom";
import "swiper/css/pagination";

export default function HomeCategoriesSlider() {
  return (
    <div className="px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView="auto"
        allowTouchMove={false}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet h-3 w-3 border-2 border-white",
          bulletActiveClass: "opacity-100 bg-red-500",
        }}
        loop
        autoplay={{ pauseOnMouseEnter: true }}
        spaceBetween={0}
        className="rounded"
      >
        {mainSliderImages.map((item) => (
          <SwiperSlide key={item}>
            <NavLink to="/cart/">
              <img src={item} alt="img" className="w-full object-fill h-80" />
            </NavLink>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
