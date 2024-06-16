import React from "react";

const SignupVerifyEmail = ({ onClose, onOTPChecked }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onOTPChecked();
    onClose();
  };
  return (
    <div>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold uppercase py-4 text-center">
          email confirmation
        </h2>
        <p className="text-center pb-3">
          Verification successful, kindly proceed to login
        </p>
        <button type="submit" className="w-full py-4 rounded-[4px] font-semibold bg-black text-white">
          Proceed to Login
        </button>
      </form>
    </div>
  );
};

export default SignupVerifyEmail;
