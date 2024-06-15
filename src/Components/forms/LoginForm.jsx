import React from "react";
import { google } from "../../assets";

const LoginForm = ({ onSignupClick, onForgotPasswordClick, onClose }) => {
  const handleSignupClick = (e) => {
    e.preventDefault();
    onSignupClick();
    onClose();
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    onForgotPasswordClick();
    onClose();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full p-2 rounded"
            placeholder="Email address *"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded"
            placeholder="Password *"
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2">Remember me</span>
          </label>
          <a
            href="#"
            className="text-sm text-black font-semibold"
            onClick={handleForgotPasswordClick}
          >
            Forgot your password?
          </a>
        </div>
        <button className="w-full py-2 bg-black font-semibold text-white rounded">
          Log in
        </button>
      </form>
      <div className="text-center mt-4">
        <p>Or</p>
        <button className="w-full py-2 bg-black text-white rounded mt-2 flex gap-4 justify-center items-center">
          <img src={google} alt="" />
          Continue with Google
        </button>
        <p className="mt-4">Don't have an Account?</p>
        <button
          onClick={handleSignupClick}
          className="underline text-black font-semibold"
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
