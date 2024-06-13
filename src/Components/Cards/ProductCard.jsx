import React from "react";
import { CgShoppingCart } from "react-icons/cg";

function ProductCard({ imageSrc, title, productClass, newP, oldP }) {
  return (
    <div className="flex flex-col py-2 rounded-xl shadow-xl">
      <img src={imageSrc} alt={title} />
      <div className="flex flex-col p-5 gap-2 font-raleway">
        <h3 className="text-grey font-medium">{title}</h3>
        <h3 className="text-grey font-medium">{productClass}</h3>
        <p className="text-2xl font-semibold">{newP}</p>
        <p className="line-through text-grey">{oldP}</p>
        <button className="bg-yellow py-3 text-3xl flex justify-center items-center gap-4 w-full">
          <CgShoppingCart />
          <h4 className="font-semibold">Add to Cart</h4>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
