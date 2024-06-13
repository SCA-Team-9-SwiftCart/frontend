// CreateNewPasswordForm.js
import React from "react";

const NewPasswordForm = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Create New Password
      </h2>
      <form className="space-y-4">
        <div>
          <label>New Password</label>
          <input
            type="password"
            className="w-full p-2 border"
            required
            placeholder="Enter new password *"
          />
        </div>
        <div>
          <label>Confirm New Password</label>
          <input
            type="password"
            className="w-full p-2 border"
            required
            placeholder="Confirm password *"
          />
        </div>
        <button type="submit" className="w-full py-2 bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPasswordForm;
