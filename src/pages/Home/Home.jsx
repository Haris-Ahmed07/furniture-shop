import React from "react";
import Hero from "../../components/Hero/Hero.jsx";
import Features from "../../components/Feature/Features.jsx";
import FeaturesSecond from "../../components/Feature/FeaturesSecond.jsx";
import NewItems from "../../components/NewItems/NewItems.jsx";
import Header from "../../components/Header/Header.jsx";
import Services02 from "../Services/Services02.jsx";
// import components

const Home = () => {
  return (
    <>
      <div className="z-50">
        <Header />
      </div>
      <Hero />
      <Features />
      <NewItems />
      <FeaturesSecond />
      <Services02 />
    </>
  );
};

export default Home;
