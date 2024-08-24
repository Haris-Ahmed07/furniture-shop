import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import './Style.css'
import HeaderDark from "../../components/Header/HeaderDark";
import {products2} from '../../data'
import  { useState, useEffect } from "react";
import Logo from "../../assets/img/logo-png.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../../data.js";
import NavMobile from "../../components/NavMobile/NavMobile.jsx";
import { Link } from "react-router-dom";
const Shop = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });

  return (
    <div className="">
             <header
      className={`${
        bg ? "bg-primary " : "bg-primary"
      } fixed left-0 w-full xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3 z-10 transition-all duration-200 xs:mt-10 sm:mt-10 md:mt-10 lg:mt-0 xl:mt-0`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link to="/home">
            <img className="h-[70px] w-[100px]" src={Logo} alt=""></img>
          </Link>
          <div
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl  text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className="hidden md:flex ">
            <ul className="md:flex md:gap-x-12">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      className="capitalize text-xl text-white hover:border-b transition-all"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div
            className={`${
              mobileNav ? "left-0" : "-left-full"
            } md:hidden fixed botton-0 w-full max-w-xs h-screen transition-all`}
          >
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
      <div className="xl:pt-[190px] lg:pt-[150px] md:pt-[180px] sm:pt-[200px] xs:pt-[200px] xl:px-16 lg:px-10 md:px-5 sm:px-5 xs:px-5 big-product " id="features">
        <div className="product-title">
            <h1 className="text-4xl font-semibold">
                Browse our items
            </h1>
            <h2 className="text-xl font-semibold pb-4 pt-3">
                Ideal for your home
            </h2>
            <hr />
            
        </div>
      
        <Grid container spcaing={2} className="mt-10">
          {products2.map((product)=>(
            <Grid item xs={12} lg={3} sm={6} md={4} >
            <ProductCard product={product}/>
            </Grid>
          ))}

        </Grid>
    </div>
    </div>
  );
};

export default Shop;
