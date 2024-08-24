import React from "react";
import { newInStore } from "../../data.js";
import NewItemsSliderSecond from "./NewItemsSliderSecond.js";
const NewItemsSecond = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col  lg:flex-row">
        <div className="xl:mx-10 lg:mx-10 lg:max-w-[840px] sm:max-w-[550px] xl:max-w-[1400px] lg:absolute">
          <NewItemsSliderSecond />
        </div>
      </div>
    </div>
  );
};

export default NewItemsSecond;
