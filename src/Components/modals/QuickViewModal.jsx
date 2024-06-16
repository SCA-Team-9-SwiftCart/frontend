import React, { useState, useEffect } from "react";
import { CgShoppingCart } from "react-icons/cg";
import Modal from "../Modals";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const calculateDiscount = (newP, oldP) => {
  const newPrice = parseFloat(newP.replace(/[^0-9.-]+/g, ""));
  const oldPrice = parseFloat(oldP.replace(/[^0-9.-]+/g, ""));
  const discount = ((oldPrice - newPrice) / oldPrice) * 100;
  return discount.toFixed(0);
};

const QuickViewModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setQuantity(1);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product, quantity);
      // Show toast notification
      toast.success(`${product.title} added to cart`, {
        position: "top-right",
        autoClose: 3000, // Close the toast after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    onClose();
  };

  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex lgss:flex-row flex-col gap-8 justify-center items-center">
        <img
          src={product.imageSrc}
          alt={product.title}
          className="lgss:h-[300px] pt-3 lgss:w-[200px]"
        />

        <div className="flex flex-col items-center lgss:p-4">
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <p className="text-lg text-gray-700">{product.productClass}</p>
          <div className="flex items-center pt-4">
            <button
              onClick={() =>
                setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1))
              }
              className="px-3 py-1 border"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={() =>
                setQuantity((prevQuantity) =>
                  Math.min(product.stock, prevQuantity + 1)
                )
              }
              className="px-3 py-1 border"
            >
              +
            </button>
          </div>
          <p className="text-xl font-bold mt-4">{product.newP}</p>
          {product.oldP && (
            <div className="flex gap-4 items-center">
              <span className="line-through text-grey">{product.oldP}</span>
              <span className="text-[#6B5005] bg-[#FFE7B0] p-1">
                -{calculateDiscount(product.newP, product.oldP)}%
              </span>
            </div>
          )}
          <div className="flex lgss:flex-row flex-col justify-center gap-2 items-center pt-5">
            <div className="border-[1px] border-grey rounded-[8px] py-2 px-2">
              <p className="">{product.stock} in stock</p>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-yellow py-3 px-3 text-xl flex items-center gap-2"
            >
              <CgShoppingCart />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
