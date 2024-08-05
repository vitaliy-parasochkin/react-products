import IconButton from "./IconButton.tsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";
import SwiperCore from "swiper";

interface DetailProductSliderProps {
  images: string[];
}

export default function DetailProductSlider({
  images,
}: DetailProductSliderProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  return (
    <div className="flex min-h-0 relative h-2/3 w-full">
      <div className="flex gap-x-2 justify-end">
        <IconButton
          variant="secondary"
          onClick={() => swiperInstance?.slidePrev()}
          className="swiper-button absolute top-1/2 left-1 z-40"
        >
          <AiOutlineArrowLeft />
        </IconButton>
        <IconButton
          variant="secondary"
          onClick={() => swiperInstance?.slideNext()}
          className="swiper-button absolute top-1/2 right-1 z-40"
        >
          <AiOutlineArrowRight />
        </IconButton>
      </div>
      <Swiper
        onSwiper={setSwiperInstance}
        loop
        slidesPerView={1}
        className="h-full"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image}
            className="flex items-center justify-center bg-gray-50 rounded p-2"
          >
            <img src={image} alt="img" className="h-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
