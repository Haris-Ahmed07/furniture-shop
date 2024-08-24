import React,{useContext} from 'react';
import { glassWork } from '../../data';
import HeaderDark from '../../components/Header/HeaderDark';
const GlassServices = () => {

  const {products2, description2,name2, price2 } = glassWork
  return (<section>
    <HeaderDark />
  <section className='  lg:py-20  flex items-center'>
    
  <div className='container mt-[100px]  mx-auto'>
    {}
    <div className='flex flex-col lg:flex-row items-center'>
      <div className='grid  flex-1 justify-center items-center mb-8 lg:mb-0'>
        <img className=' border rounded-md h-[400px] w-[600px] max-w-[900px] lg:max-w-sm' src={products2[0].type} alt='' />
      
        
      </div>
      <div className='flex-1 text-center lg:text-left'>
        <h1 className='text-[28px] font-medium mb-2 max-b-[450px] mx-auto lg:mx-0'>
          {name2}
        </h1>
        
        <p className='mb-5'>{description2}</p>
        <div className='text-[33px] text-green-800 font-medium mb-6'>
            {price2}
        </div>
      </div>
    </div>
    
  </div>
  </section>
  </section>
  );
};

export default GlassServices;