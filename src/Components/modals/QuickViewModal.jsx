import React, { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import Modal from "../Modals";

const QuickViewModal = ({ isOpen, onClose, product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product, quantity);
    }
    onClose();
  };

  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center p-4">
        <img src={product.imageSrc} alt={product.title} className="w-1/2" />
        <h3 className="text-2xl font-semibold mt-4">{product.title}</h3>
        <p className="text-lg text-gray-700">{product.productClass}</p>
        <div className="flex items-center mt-4">
          <button
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            className="px-3 py-1 border"
          >
            -
          </button>
          <span className="px-4">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="px-3 py-1 border"
          >
            +
          </button>
        </div>
        <p className="text-xl font-bold mt-4">{product.newP}</p>
        <button
          onClick={handleAddToCart}
          className="bg-yellow py-3 px-6 text-xl flex items-center gap-2 mt-4"
        >
          <CgShoppingCart />
          <span>Add to Cart</span>
        </button>
      </div>
    </Modal>
  );
};

export default QuickViewModal;
