import React, { useState } from "react";
import axios from "axios";
import { google } from "../../assets";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const LoginForm = ({ onSignupClick, onForgotPasswordClick, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

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

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-g711.onrender.com/api/login",
        {
          email,
          password,
        }
      );
      console.log("Login successful", response.data);
      toast.success("Login successful");
      toast.success("Proceed to place an order");
      setEmail("");
      setPassword("");
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Login error", error);
      if (error.response && error.response.data) {
        setErrors({ form: error.response.data.message });
      } else {
        setErrors({
          form: "An error occurred during login. Please try again.",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">LOGIN</h2>
      {errors.form && (
        <div className="text-red-500 text-center mb-4">{errors.form}</div>
      )}
      <form onSubmit={handleLoginClick} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Email address
          </label>
          <input
            type="email"
            className="w-full p-2 rounded border"
            placeholder="Email address *"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <div className="text-red-500">{errors.email}</div>}
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full p-2 rounded border"
              placeholder="Password *"
              value={password}
              onChange={handlePasswordChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <div className="text-red-500">{errors.password}</div>
          )}
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
        <button
          type="submit"
          className="w-full py-2 bg-black font-semibold text-white rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <div className="text-center mt-4">
        <p>Or</p>
        <button className="w-full py-2 bg-black text-white rounded mt-2 flex gap-4 justify-center items-center">
          <img src={google} alt="Google logo" />
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
