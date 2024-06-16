import React from "react";

const VerifyEmailForm = ({ onClose, onSuccessfulVerification }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccessfulVerification();
    onClose();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold uppercase mb-4 text-center">
        Verify Your Email
      </h2>
      <p className="text-center ">
        A verification email has been sent to your email address. Please check
        your inbox for your One-Time Password.
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

export default VerifyEmailForm;
