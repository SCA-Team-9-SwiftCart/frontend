import React, { useState } from 'react';
import FormComponent from './FormComponent';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic
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
    {
      type: 'password',
      name: 'password',
      value: password,
      onChange: (e) => setPassword(e.target.value),
      required: true,
    },
  ];

  return (
    <FormComponent
      title="SIGNUP"
      fields={fields}
      onSubmit={handleSubmit}
      onClose={handleClose}>
      <button type="submit">Sign Up</button>
      <div>
        <p>or</p>
        <button type="button" onClick={() => { /* Handle Google login logic */ }}>
          Continue with Google
        </button>
      </div>
      <p className='signup-login'>Already have an account? <span>Log in</span></p>
    </FormComponent>

  );
};

export default SignupForm;
