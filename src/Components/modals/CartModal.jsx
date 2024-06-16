import React from "react";
import Modal from "../Modals";
import { FaTrashAlt } from "react-icons/fa";

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  const calculateTotalPrice = (item) => {
    const price = parseFloat(item.newP.replace(/[^0-9.-]+/g, ""));
    return (price * item.quantity).toFixed(2);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      const price = parseFloat(item.newP.replace(/[^0-9.-]+/g, ""));
      subtotal += price * item.quantity;
    });
    return subtotal.toFixed(2);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-semibold">Your Cart</h2>
        {cartItems.length > 0 ? (
          <div className="w-full">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-gray-300 py-2"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">{item.newP}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-lg font-semibold">
                    <span className="pr-2">#</span>
                    {calculateTotalPrice(item)}
                  </p>
                  <button
                    onClick={() => onRemoveFromCart(item)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-end mt-4">
              <div className="border-t border-gray-300 w-full flex justify-between py-2">
                <p className="font-bold text-lg">Total</p>
                <p className="pr-6 text-xl font-bold">
                  <span className="pr-2">#</span>
                  {calculateSubtotal()}
                </p>
              </div>
            </div>
            <button
              className="bg-black text-white w-full py-4 rounded mt-6 font-semibold"
              onClick={() => {
                console.log("Proceed to Checkout clicked!");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </Modal>
  );
};

export default CartModal;
