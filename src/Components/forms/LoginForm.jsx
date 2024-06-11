import React, { useState } from 'react';
import FormComponent from './FormComponent';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic
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
      title="LOGIN"
      fields={fields}
      onSubmit={handleSubmit}
      onClose={handleClose}>
        <div className="login-remember">
        <input
          type="checkbox"
          name="remember"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
        />
        <p>Remember Me <span>Forgot your password</span></p>
      </div>
      <button type="submit">Log in</button>
      <div>
        <p>or</p>
        <button type="button" onClick={() => { /* Handle Google login logic */ }}>
          Continue with Google
        </button>
      </div>
      <p className='login-signup'>Don't have an account? <span>Sign up</span></p>
    </FormComponent>

  );
};

export default LoginForm;
