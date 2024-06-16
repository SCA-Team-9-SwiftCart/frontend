import React from "react";

const ResetConfirmation = ({ onClose, onPwResetSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onPwResetSuccess();
    onClose();
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold uppercase py-4 text-center">
          Password reset success
        </h2>
        <p className="text-center pb-3">
          Password Reset successful, kindly proceed to login
        </p>
        <button
          type="submit"
          className="w-full py-4 rounded-[4px] fons bg-black text-white"
        >
          Proceed to Login
        </button>
      </form>
    </div>
  );
};

export default ResetConfirmation;
