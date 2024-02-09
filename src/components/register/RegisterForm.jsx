import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('/api/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({ email, password }),
      });

      if (response.ok) {
       
      } else {
        throw new Error('Не удалось зарегистрироваться');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className='auth__style__register'>
      <h1>Регистрация</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button className='btn-log-reg' onClick={handleRegister}>Регистрация</button>
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default RegisterForm;