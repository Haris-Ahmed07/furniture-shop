import React from "react";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import Newsletter from "../../components/NewsLetter/NewsLetter.jsx";
import Gallery from "../../components/Gallery/Gallery.jsx";
import Preview from "../../components/Preview/Preview.jsx";
import HeaderDark from "../../components/Header/HeaderDark.jsx";
const About = () => {
  return (
    <>
    
      <HeaderDark />
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
