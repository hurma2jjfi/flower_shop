import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const LoginPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <h2>Login or Register</h2>
      <button onClick={handleToggleForm}>{showLogin ? 'Register' : 'Login'}</button>
      {showLogin ? <LoginForm /> : <RegisterForm />}
    </div>
  );
};

export default LoginPage;