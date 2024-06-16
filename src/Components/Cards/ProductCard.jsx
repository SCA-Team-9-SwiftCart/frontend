import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { star } from "../../assets";

const calculateDiscount = (newP, oldP) => {
  const newPrice = parseFloat(newP.replace(/[^0-9.-]+/g, ""));
  const oldPrice = parseFloat(oldP.replace(/[^0-9.-]+/g, ""));
  const discount = ((oldPrice - newPrice) / oldPrice) * 100;
  return discount.toFixed(0);
};

const ProductCard = ({
  imageSrc,
  title,
  productClass,
  newP,
  oldP,
  stock,
  onAddToCartClick,
}) => {
  return (
    <div className="flex h-fit flex-col px-8 py-4 rounded-xl shadow-xl">
      <img src={imageSrc} alt={title} className="h-[250px]" />
      <div className="flex flex-col p-5 gap-2 font-raleway">
        <h3 className="text-grey font-medium">{title}</h3>
        <h3 className="text-grey font-medium">{productClass}</h3>
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-semibold">{newP}</span>
          <div className="flex gap-4 items-center">
            {oldP && <span className="line-through text-grey">{oldP}</span>}
            {oldP && (
              <span className="text-[#6B5005] bg-[#FFE7B0] p-1">
                -{calculateDiscount(newP, oldP)}%
              </span>
            )}
          </div>
        </div>
        {stock && (
          <div className="flex gap-4">
            <img src={star} alt="ratings" />
            <p className="stock">({stock})</p>
          </div>
        )}
      </div>
      <button
        className="bg-yellow py-3 text-xl flex justify-center items-center gap-4 w-full"
        onClick={onAddToCartClick}
      >
        <CgShoppingCart />
        <h4 className="font-semibold">Add to Cart</h4>
      </button>
    </div>
  );
};

export default ProductCard;
