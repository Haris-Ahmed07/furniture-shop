import React from "react";
import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import "./Style.css";
import Header from "../../components/Header/Header";
import { products2 } from "../../data";
import { useState, useEffect } from "react";
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
      <div className="z-50">
        <Header color="dark" />
      </div>
      <div
        className="xl:pt-[190px] lg:pt-[150px] md:pt-[180px] sm:pt-[200px] xs:pt-[200px] xl:px-16 lg:px-10 md:px-5 sm:px-5 xs:px-5 big-product "
        id="features"
      >
        <div className="product-title">
          <h1 className="text-4xl font-semibold">Browse our items</h1>
          <h2 className="text-xl font-semibold pb-4 pt-3">
            Ideal for your home
          </h2>
          <hr />
        </div>

        <Grid container spcaing={2} className="mt-10">
          {products2.map((product) => (
            <Grid item xs={12} lg={3} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Shop;
