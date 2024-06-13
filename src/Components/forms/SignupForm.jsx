// SignUpForm.js
import React from 'react';
import { google } from '../../assets';

const SignUpForm = ({ onLoginClick }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">SIGN UP</h2>
      <form className="space-y-4">
        <div>
          <label>Email address *</label>
          <input type="email" className="w-full p-2 border" required />
        </div>
        <div>
          <label>Password *</label>
          <input type="password" className="w-full p-2 border" required />
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
        Already have an Account?{" "}
        <span onClick={onLoginClick} className="text-black font-bold cursor-pointer">
          Log in
        </span>
      </div>
    </div>
  );
};

export default SignUpForm;
