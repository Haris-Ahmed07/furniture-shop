import React from "react";
import { features } from "../../data.js";

const { title, subtitle, image, buttonText, items } = features;

const Features = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[80px]">
          <div className="flex-1 order-1 lg:order-1 w-full">
            <img className="w-full" src={image.type} alt="" />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            <div>
              {items.map((item, index) => {
                const { title, subtitle, icon } = item;

                return (
                  <div className="flex mb-6 lg:last:mb-0 justify-center">
                  
                    <div className="justify-center">
                      <h4 className="text-base lg:text-xl font-semibold mb-0">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
