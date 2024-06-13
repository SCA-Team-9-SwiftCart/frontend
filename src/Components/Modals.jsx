import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-8 rounded shadow-lg relative w-[90%] max-w-[400px]">
        <button onClick={onClose} className="absolute text-4xl top-2 right-4 text-black">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
