import React,{useContext} from 'react';
import {  paintWork } from '../../data';
import HeaderDark from '../../components/Header/HeaderDark';
const PaintServices = () => {

const {products, description,name, price } = paintWork
return (<section>
  <HeaderDark />
<section className='  lg:py-20  flex items-center'>
  
<div className='container mt-[100px] mx-auto'>
  {}
    <div className='flex flex-col lg:flex-row items-center'>
     
      <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[28px] font-medium mb-2 max-b-[450px] mx-auto lg:mx-0'>
          {name}
        </h1>
        
        <p className='mb-5'>{description}</p>
        <div className='text-[33px] text-green-800 font-medium mb-6'>
            {price}
        </div>
      </div>
      <div className='grid  flex-1 justify-center items-center mb-8 lg:mb-0'>
        <img className=' border w-[600px] rounded-md h-[400px] max-w-[900px] lg:max-w-sm' src={products[0].type} alt='' />
      
        
      </div>
    </div>
    
  </div>
  </section>
  </section>
  );
};

export default PaintServices;