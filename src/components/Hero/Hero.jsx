import React from "react";

//import data

import { hero } from "../../data.js";
import Stats from "../Stats/Stats.jsx";
const { title, subtitle, buttonText } = hero;

const Hero = () => {
  return (
    <section className="w-full h-[850px] bg-hero bg-cover bg-no-repeat text-white pt-[225px] pb-[254px] relative 
    xl:mb-24 md:mb-0 sm:mb-0 xs:mb-12 
    lg:bg-center lg:mb-28 
    md:bg-right-top 
    sm:bg-right
    xs:bg-center">

    <div className="container mx-auto text-center">
        <h1 className="text-2xl mx-auto font-semibold mb-[30px] lg:text-[64px] lg:leading-tight lg:max-w-[888px] ">
          {title}
        </h1>

        <h2 className="mb-[30px] max-w-[627px] mx-auto lg:mb-[65px] lg:text-xl">
          {subtitle}
        </h2>

        <button className="bg-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.5)] px-[35px] py-[9px] mb-[160px] text-xl rounded-md backdrop-blur-md transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]">
        <a
                      className="capitalize text-xl text-white hover:border-b transition-all"
                      href="/shop"
                    >{buttonText}</a>
        </button>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
