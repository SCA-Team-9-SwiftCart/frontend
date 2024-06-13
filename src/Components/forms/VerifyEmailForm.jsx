// VerifyEmail.js
import React from "react";

const VerifyEmailForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Verify Your Email
      </h2>
      <p className="text-center mb-4">
        A verification email has been sent to your email address. Please check
        your inbox and click on the verification link.
      </p>
      <button className="w-full py-2 bg-black text-white">
        Resend Verification Email
      </button>
    </div>
  );
};

export default VerifyEmailForm;
