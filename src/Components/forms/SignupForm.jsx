import React, { useState } from "react";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";


const SignupForm = ({ onLoginClick, onClose, onSuccessfulSignup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    onLoginClick();
    onClose();
  };

  const handleSignupBtnClick = (e) => {
    e.preventDefault();
    onSuccessfulSignup();
    onClose();
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupClick = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://backend-g711.onrender.com/api/signup",
        {
          email,
          password,
        }
      );
      console.log("Signup successful", response.data);
      toast.success("Signup successful!");
      toast.success("Proceed to Login");
      onClose();
      onLoginClick();
    } catch (error) {
      toast.error("Signup error. Please try again.");
      console.error("Signup error", error);
      if (error.response && error.response.data) {
        setErrors({ form: error.response.data.message });
      } else {
        setErrors({
          form: "An error occurred during signup. Please try again.",
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
      <h2 className="text-2xl font-bold mb-4 text-center">SIGN UP</h2>
      {errors.form && (
        <div className="text-red-500 text-center mb-4">{errors.form}</div>
      )}
      <form className="space-y-4" onSubmit={handleSignupClick}>
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
        <div>
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              className="w-full p-2 rounded border"
              placeholder="Confirm Password *"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-700"
            >
              {passwordVisible ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword}</div>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-black font-semibold text-white rounded"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>
      <div className="text-center mt-4">
        <p>Already have an Account?</p>
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

export default SignupForm;
