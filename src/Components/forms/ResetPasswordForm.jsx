import React, { useState } from 'react';
import FormComponent from './FormComponent';

const ResetPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset request logic
  };
  const handleClose = () => {
    // Handle form close logic
  };

  const fields = [
    {
      type: 'email',
      name: 'email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
      required: true,
    },
  ];

  return (
    <FormComponent
      title="RESET PASSWORD"
      fields={fields}
      onSubmit={handleSubmit}
      onClose={handleClose}>
      <button type="submit">Reset Password</button>

    </FormComponent>

  );
};

export default ResetPasswordForm;
