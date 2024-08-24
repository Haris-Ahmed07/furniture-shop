import React from "react";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import Newsletter from "../../components/NewsLetter/NewsLetter.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Preview from "../../components/Preview/Preview.jsx";
import Header from "../../components/Header/Header.jsx";
const About = () => {
  return (
    <>
      <div className="z-50">
        <Header color="dark" />
      </div>
      <Gallery />
      <Preview />
      <Testimonial />
      <br />
      <br />
      <Newsletter />
    </>
  );
};

export default About;
