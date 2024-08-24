import React from "react";
import { useState, useEffect } from "react";
import Logo from "../../assets/img/logo-png.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../../data.js";
import NavMobile from "../../components/NavMobile/NavMobile.jsx";
import { Link } from "react-router-dom";
import SendEmail from "../../components/SendEmail/SendEmail.jsx";
import { signupImg } from "../../data";
import Header from "../../components/Header/Header.jsx";

const Contact = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    query: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { name, email, query } = formData;

    const result = await SendEmail(name, email, query);
    if (result) {
      setFormData({ name: "", email: "", query: "" });

      alert("Email sent successfully!");
    } else {
      alert("Failed to send email. Please try again.");
    }
  };
  return (
    <div>
      <div className="z-50">
        <Header color="dark" />
      </div>
      <section className="mt-0 px-5 xl:px-0">
        <div className="max-w-[1170px] pt-[120px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="hidden lg:block bg-primaryColor rounded-l-lg mb-[20px]">
              <figure className="w-full rounded-l-lg">
                <img src={signupImg} alt=""></img>
              </figure>
            </div>
            <div className="rounded-l-lg lg:pl-16 xl:py-16 lg:py-16 md:py-3 sm:py-0">
              <h3 className="text-headingColor text-[30px] leading-9 font-bold xl:mb-10 lg:mb-2 md:mb-4 sm:mb-2">
                Send Us A Message!
              </h3>
              <form onSubmit={submitHandler}>
                <div className="pt-5 mb-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full ps-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer rounded-lg"
                    required
                  ></input>
                </div>
                <div className="mb-5">
                  <input
                    type="email"
                    placeholder="Your email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full ps-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer rounded-lg"
                    required
                  ></input>
                </div>
                <div className="mb-5">
                  <input
                    type="textarea"
                    placeholder="Your Query"
                    name="query"
                    value={formData.query}
                    onChange={handleInputChange}
                    className="w-full h-[90px] ps-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor placeholder:text-textColor  cursor-pointer rounded-lg"
                    required
                  ></input>
                </div>

                <div className="mt-7">
                  <button
                    type="submit"
                    className="w-full bg-gray-800 hover:bg-accent text-white text-[18px] leading-[30px] rounded-lg px-4 py-3"
                  >
                    Send!
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
