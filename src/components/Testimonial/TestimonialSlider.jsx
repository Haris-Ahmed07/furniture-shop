import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation"; // For navigation styles
import "swiper/css/autoplay";   // This might not be needed as autoplay does not have specific styles
import { Navigation, Autoplay } from "swiper";

import { testimonial } from "../../data.js";

const TestimonialSlider = () => {
  return (
    <Swiper
      className="testimonialSlider"
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;

        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px]">
              <div className="justify-center items-center gap-x-5 mb-9">
                <img src={avatar.type} alt=""></img>
                <div>
                  <div className="text-xl font-semibold">{name}</div>
                  <div className="text-gray-500">{occupation}</div>
                </div>
                <div className="text-xl max-w-[570px]">{message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
