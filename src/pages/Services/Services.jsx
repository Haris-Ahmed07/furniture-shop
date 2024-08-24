import React from 'react'
import {services} from '../../assets/services'
import ServiceCard from '../../components/Service/ServiceCard.jsx'

import  { useState, useEffect } from "react";
import Logo from "../../assets/img/logo-png.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { navigation } from "../../data.js";
import NavMobile from "../../components/NavMobile/NavMobile.jsx";
import { Link } from "react-router-dom";

import { furnitureWork, glassWork } from '../../data'
const Services = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  const {products, description,name, price } = furnitureWork
  const {products2, description2,name2, price2 } = glassWork
  return (
    <div className='w-full xl:mt-0 lg:mt-0 md:-mt-10 me-10'>
         <header
      className={`${
        bg ? "bg-primary  " : "bg-primary"
      } fixed left-0 w-full xl:py-3 lg:py-3 md:py-3 sm:py-3 xs:py-3 z-10 transition-all duration-200 xs:mt-10 sm:mt-10 md:mt-20 lg:mt-0 xl:mt-0`}
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
      
      <div className=' mx-auto items-center justify-center  xs:pt-[150px] sm:pt-[180px] md:pt-[220px] lg:pt-[170px] xl:pt-[170px] pb-10 w-full '>
      <h1 className="mt-5  text-4xl text-primary font-semibold">
                Browse our Services
            </h1>
            <h2 className="mb-4 pt-3 font-semibold text-lg ">
                Ideal for your home
            </h2>
        <hr/>
        <section className='  lg:py-10  flex items-center'>
    
  <div className='container mx-auto'>
    {}
    <div className='flex flex-col lg:flex-row items-center'>
      <div className='grid  flex-1 justify-center items-center lg:mb-0'>
        <img className=' border rounded-md h-[400px] w-[600px] max-w-[900px] lg:max-w-sm' src={products[0].type} alt='' />
      
        
      </div>
      <div className='justify-center xl:mt-0 lg:mt-0 md:mt-10 sm:mt-10 xs:mt-10 flex-1 text-center lg:text-left'>
        <h1 className='text-[28px] font-medium  max-b-[450px] mx-auto lg:mx-0'>
          {name}
        </h1>
        
        <p className='mb-5'>{description}</p>
        <div className='text-[33px] text-green-800 font-medium mb-6'>
            {price}
        </div>
      </div>
    </div>
    
  </div>
  </section>
      <div className='xs:ms-5 sm:ms-4 md:ms-4 lg:ms-16 xl:ms-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>

{
  services.map((item, index) => (
    <ServiceCard item={item} index={index} key={index} />
  ))
}
</div>
<div className=' w-full lg:ms-0 xl:ms-[80px] md:ms-0 sm:ms-0 xs:ms-0 lg:py-10  mt-10 flex items-center'>
    
    <div className='container mx-auto'>
      {}
      <div className='flex flex-col lg:flex-row items-center'>
       
        <div className='flex-1 text-center lg:text-left'>
          <h1 className='text-[28px] font-medium mb-2 max-b-[450px] mx-auto lg:mx-0'>
            {name2}
          </h1>
          
          <p className='mb-5'>{description2}</p>
          <div className='text-[33px] text-green-800 font-medium mb-6'>
              {price2}
          </div>
        </div>
        <div className='grid  flex-1 justify-center items-center mb-8 lg:mb-0'>
          <img className=' border rounded-md h-[400px] w-[600px] max-w-[900px] lg:max-w-sm' src={products2[0].type} alt='' />
        
          
        </div>
      </div>
      
    </div>
    </div>
      </div>
   
    </div>
  )
}

export default Services
