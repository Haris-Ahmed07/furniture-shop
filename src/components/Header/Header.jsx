import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo-png.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../../data.js";
import NavMobile from "../NavMobile/NavMobile.jsx";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header
      className={`${
        props.color === "dark" ? "bg-primary " : "bg-none"
      } fixed left-0 xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3 w-full z-10 transition-all duration-200 md:mt-10 sm:mt-10 xs:mt-10 lg:mt-0 xl:mt-0`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/home">
            <img className="h-[70px] w-[100px]" src={Logo} alt=""></img>
          </Link>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex ">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link
                      className="capitalize text-xl text-white hover:border-b transition-all"
                      to={`/${item.href}`}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed bottom-0 min-w-full w-full max-w-xs h-fit transition-all top-[5.4rem] bg-light rounded-b-2xl shadow-lg border bg-white`}
          >
            <ul className="flex-col flex mt-4">
              {navigation.map((item, index) => (
                <li key={index} onClick={() => setMobileNav(!mobileNav)}>
                  <Link
                    to={`/${item.href}`}
                    className="block pl-4 pr-4 rounded text-left text-lg text-gray-800 py-4"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
