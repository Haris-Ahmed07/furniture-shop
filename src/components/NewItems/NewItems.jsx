import React from "react";
import { newInStore } from "../../data.js";
import NewItemsSlider from "./NewItemsSlider.jsx";
const NewItems = () => {
  return (
    <div className="container mx-auto lg:-mt-8 xs:-mt-10 sm:-mt-8 md:-mt-5">
      <div className="flex flex-col  lg:flex-row w-full  justify-center">
        <div className="xl:mx-10  lg:max-w-[850px] md:max-w-[800px] sm:max-w-[550px] xl:max-w-[1400px] lg:absolute ">
          <NewItemsSlider />
        </div>
      </div>
    </div>
  );
};

export default NewItems;
