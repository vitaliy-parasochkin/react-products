import IconButton from "./IconButton.tsx";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import ProductItem from "./ProductItem.tsx";
import { useState } from "react";
import "swiper/css/navigation";
import "swiper/css";
import ProductsSectionTitle from "./ProductsSectionTitle.tsx";
import { IProductItem } from "../types";
import ProductItemSkeleton from "./ProductItemSkeleton.tsx";

type SectionProducts = {
  items: IProductItem[];
  loading: boolean;
};

interface ProductsSectionProps {
  title: string;
  products: SectionProducts;
}
export default function ProductsSection({
  title,
  products,
}: ProductsSectionProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-3">
        <ProductsSectionTitle>{title}</ProductsSectionTitle>
        <div className="flex gap-x-2 justify-end">
          <IconButton
            variant="secondary"
            onClick={() => swiperInstance?.slidePrev()}
            className={`swiper-button`}
          >
            <AiOutlineArrowLeft />
          </IconButton>
          <IconButton
            variant="secondary"
            onClick={() => swiperInstance?.slideNext()}
            className={`swiper-button`}
          >
            <AiOutlineArrowRight />
          </IconButton>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={6}
        onSwiper={setSwiperInstance}
        loop
        allowTouchMove={false}
        preventClicks={false}
        preventClicksPropagation={false}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1200: { slidesPerView: 5 },
          1440: { slidesPerView: 6 },
        }}
      >
        {products.loading
          ? [...Array(10)].map((_, i) => (
              <SwiperSlide key={i}>
                <ProductItemSkeleton />
              </SwiperSlide>
            ))
          : products.items?.map((item) => (
              <SwiperSlide key={item.id}>
                <ProductItem {...item} />
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
