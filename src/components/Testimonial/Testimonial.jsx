import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { testimonial } from "../../data.js";

const Testimonial = () => {
  const { image, title } = testimonial;
  return (
    <section className="xl:-mt-[60px] lg:-mt-[60px] md:-mt-[90px] sm:-mt-[80px] xs:-mt-[110px] xl:-mb-[10px] lg:-mb-[50px] md:-mb-[40px] sm:-mb-[50px] xs:-mb-[60px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-2 ">
          <div className="lg:max-w-[50%] justify-center items-center">
            <h2 className="title">{title}</h2>
            <TestimonialSlider />
          </div>
          <div className="order-1 ">
            <img src={image.type} alt="" className="w-full"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
