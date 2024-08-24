import React from 'react'
import Home from '../../pages/Home/Home.jsx'
import About from '../../pages/About/About.jsx'
import Shop from '../../pages/Shop/Shop.jsx'
import { Routes, Route } from 'react-router-dom'
import Services from '../../pages/Services/Services.jsx'
import Contact from '../../pages/Contact/Contact.jsx'
import GlassServices from '../../pages/Services/GlassServices.jsx'
import ConstructionServices from '../../pages/Services/ConstructionServices.jsx'
import PaintServices from '../../pages/Services/PaintServices.jsx'
import OtherServices from '../../pages/Services/OtherServices.jsx'
import SofaServices from '../../pages/Services/SofaServices.jsx'
import FurnitureServices from '../../pages/Services/FurnitureServices.jsx'
const RoutesConfiguration = () => {
  return (
    <div className='w-full lg:mt-0 md:-mt-10 sm:-mt-10 xs:-mt-10 xl:mt-0'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/glassServices" element={<GlassServices />} />
          <Route path="/services/constructionServices" element={<ConstructionServices />} />
          <Route path="/services/otherServices" element={<OtherServices />} />
          <Route path="/services/paintServices" element={<PaintServices />} />
          <Route path="/services/furnitureServices" element={<FurnitureServices />} />
          <Route path="/services/sofasRenovation" element={<SofaServices />} />
          <Route path="/services/home" element={<Home />} />
          <Route path="/services/about" element={<About />} />
          <Route path="/services/contact" element={<Contact />} />
          <Route path="/services/shop" element={<Shop />} />
          <Route path="/services/services" element={<Services />} />
        </Routes>
    </div>
  )
}

export default RoutesConfiguration;