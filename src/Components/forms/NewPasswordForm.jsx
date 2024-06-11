import React, { useState } from 'react';
import FormComponent from './FormComponent';

const NewPasswordForm = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic
  };
  const handleClose = () => {
    // Handle form close logic
  };

  const fields = [
    {
      type: 'password',
      name: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      required: true,
    },
    {
        type: 'password',
        name: 'confirmpassword',
        value: confirmPassword,
        onChange: (e) => setConfirmPassword(e.target.value),
        required: true,
      },
  ];

  return (
    <FormComponent
      title="CREATE NEW PASSWORD"
      fields={fields}
      onSubmit={handleSubmit}
      onClose={handleClose}>
      <button type="submit">Submit</button>

    </FormComponent>

  );
};

export default NewPasswordForm;
