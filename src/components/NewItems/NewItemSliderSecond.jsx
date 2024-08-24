import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { newInStore2 } from "../../data.js";

const NewItemsSliderSecond = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
    >
      {newInStore2.products.map((product, index) => {
        return (
          <SwiperSlide
            key={index}
            className="max-w-[265px]  border border-white rounded-2xl"
          >
            <div className="relative ">
              <img
                className="h-[380px] border border-white rounded-md"
                src={product.image.type}
                alt=""
              ></img>
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

export default NewItemsSliderSecond;
