import React from "react";
import "./Style.css";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';

const ProductCard = ({ product }) => {
  return (
    <div className="flex justify-center">
      <div className="border rounded-md product-one max-w-[40rem] px-10 mx-3 py-10 bg-gray-200">
        <div className="product-image">
          <img className="w-[20rem]" src={product.imageUrl.type} alt="" />
          <div className="overlay">
            <FavoriteIcon/>
            <ShoppingBagIcon/>
            <SearchIcon/>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <h4 className="sm">{product.name}</h4>
          </div>
          <div className="right">
            <section>{product.price}</section>
          </div>
        </div>
        <div className="flex text-start">
          <article>{product.category}</article>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
