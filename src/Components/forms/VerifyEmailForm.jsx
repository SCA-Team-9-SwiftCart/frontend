import React, { useState } from 'react';
import FormComponent from './FormComponent';

const VerifyEmailForm = () => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle verify email logic
  };
  const handleClose = () => {
    // Handle form close logic
  };

  const fields = [
    {
      type: 'text',
      name: 'one-time-password',
      value: otp,
      onChange: (e) => setOtp(e.target.value),
      required: true,
    },
  ];

  return (
    <FormComponent
      title="VERIFY EMAIL"
      fields={fields}
      onSubmit={handleSubmit}
      onClose={handleClose}>
      <button type="submit">Check OTP</button>

    </FormComponent>

  );
};

export default ResetPasswordForm;
