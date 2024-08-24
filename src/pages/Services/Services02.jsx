import React from 'react'
import { furnitureWork, glassWork } from '../../data'
import {services} from '../../assets/services'
import ServiceCard from '../../components/Service/ServiceCard'

const Services02 = () => {
  const {products, description,name, price } = furnitureWork
  const {products2, description2,name2, price2 } = glassWork
  return (
    <div className='container mx-auto items-center justify-center pb-10'>
    <h1 className="text-4xl text-primary font-semibold sm:-mt-[40px] xs:-mt-[40px] md:mt-0 lg:mt-0 xl:mt-0">
              Browse our Services
          </h1>
          <h2 className="mb-5 mt-3 text-lg ">
              Ideal for your home
          </h2>
      <hr/>
  
    <div className='sm:mt-[40px] xs:mt-[20px] md:mt-[50px] lg:mt-[50px] xl:mt-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px]'>

{
services.map((item, index) => (
  <ServiceCard item={item} index={index} key={index} />
))
}
</div>

    </div>
  )
}

export default Services02