// NewPasswordForm.jsx
import React, { useState } from "react";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri"; // Import eye icons

const NewPasswordForm = ({ onNewPwCreated, onClose }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation if needed
    if (newPassword === confirmPassword) {
      // Call the prop function passed from parent
      onNewPwCreated();
      // Close the modal using onClose prop
      onClose();
    } else {
      alert("Passwords do not match!");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create New Password
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label>New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border"
              required
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password *"
            />
            <button
              type="button"
              className="absolute text-grey right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          </div>
        </div>
        <div>
          <label>Confirm New Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-2 border"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password *"
            />
            <button
              type="button"
              className="absolute text-grey right-3 top-3"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            </button>
          </div>
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
