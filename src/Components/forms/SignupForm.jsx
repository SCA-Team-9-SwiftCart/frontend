import React from "react";
import { google } from "../../assets";

const SignUpForm = ({ onLoginClick, onClose }) => {
  const handleLoginClick = (e) => {
    e.preventDefault();
    onLoginClick();
    onClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">SIGN UP</h2>
      <form className="space-y-4">
        <div>
          <label>Email address *</label>
          <input
            type="email"
            className="w-full p-2 border"
            required
            placeholder="Email address *"
          />
        </div>
        <div>
          <label>Password *</label>
          <input
            type="password"
            className="w-full p-2 border"
            required
            placeholder="Password *"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white">
          Sign up
        </button>
      </form>
      <div className="text-center mt-4">Or</div>
      <button className="w-full py-2 bg-black text-white rounded mt-2 flex gap-4 justify-center items-center">
        <img src={google} alt="" />
        Continue with Google
      </button>
      <div className="text-center mt-4">
        <p> Already have an Account?</p>
        <button
          onClick={handleLoginClick}
          className="underline text-black font-semibold"
        >
          Log in
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
