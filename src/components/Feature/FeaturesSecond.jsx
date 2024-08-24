import React from "react";
import { features } from "../../data.js";
const FeaturesSecond = () => {
  const { title, subtitle, image } = features.feature2;
  return (
    <section className="section lg:mt-[380px] xs:-mt-10 sm:-mt-8 md:-mt-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[50px]">
          <div className="flex-1 ">
            <img className="w-full" src={image.type} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center items-center">
            <h2 className="title pt-6">{title}</h2>
            <p className="subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSecond;
