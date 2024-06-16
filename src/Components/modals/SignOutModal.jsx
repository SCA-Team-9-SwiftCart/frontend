// SignOutModal.js
import React from "react";

const SignOutModal = ({ onSignOut, onClose }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
      <button
        onClick={onSignOut}
        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
      >
        Sign Out
      </button>
      <button
        onClick={onClose}
        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
      >
        Close
      </button>
    </div>
  );
};

export default SignOutModal;
