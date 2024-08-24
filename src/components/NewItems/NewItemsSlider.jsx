import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { newInStore } from "../../data";


const NewItemsSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide key={index} className="max-w-[265px] ">
            <div className="relative">
              <img src={product.image.type} alt=""></img>
              <div className="absolute text-white bottom-[20px] w-full text-center text-[18px] lg:2xl capitalize font-medium">
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
