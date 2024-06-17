import React from "react";

const VerifyCodePwReset = ({ onClose, onOtpSent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onOtpSent();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold uppercase mb-4 text-center">
        Verify Your Email
      </h2>
      <p className="text-center ">
        A One-Time Password (OTP) has been sent to your email address. Kindly enter your code.
      </p>

      <div className="flex flex-col gap-2 pt-5">
        <input
          type="text"
          className="w-full p-2 border"
          required
          placeholder="Enter OTP *"
        />
        <button className="w-full bg-none text-grey italic text-left">
          Resend code
        </button>
        <button
          type="submit"
          className="w-full font-semibold py-4 mt-3 rounded-[4px] text-lg bg-black text-white"
        >
          Check OTP
        </button>
      </div>
    </form>
  );
};

export default VerifyCodePwReset;
