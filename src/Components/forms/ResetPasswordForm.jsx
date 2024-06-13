// ResetPasswordForm.js
import React from "react";

const ResetPasswordForm = ({ onCreateNewPasswordClick }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Reset Password
      </h2>
      <form className="space-y-4">
        <div>
          <input type="email" className="w-full p-2 border" required placeholder="Email address *"/>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black text-white"
          onClick={onCreateNewPasswordClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
