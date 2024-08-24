import React from "react";
import Logo from "../../assets/img/logo.jpg";
import { footer, navigation } from "../../data.js";
const Footer = () => {
  return (
    <footer className="bg-primary text-white w-full section md:-mb-[80px] sm:-mb-[100px] xs:-mb-[200px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14">
        <nav className=" md:flex md:justify-center lg:justify-between xl:justify-between sm:justify-center ">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index} className="p-1">
                    <a
                      className="capitalize text-xl text-white hover:border-b transition-all "
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex gap-x-4 xs:justify-between md:justify-center lg:justify-between xl:justify-between sm:justify-center sm:mt-10 xs:mt-10 md:mt-5 lg:mt-0 xl:mt-0">
            {footer.social.map((item, index) => {
              return (
                <div
                  className="w-12 h-12 text-2xl bg-gray-500 hover:bg-accent rounded-full flex justify-center transition items-center"
                  key={index}
                >
                  <a href="#">{item.icon}</a>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-center ">
          &copy; Muhammad Noor - Trading, Contracting & Services
        </p>
        <p className="text-center xs:mb-16 sm:mb-16 md:mb-0 lg:mb-0 xl:mb-0">2024 - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
