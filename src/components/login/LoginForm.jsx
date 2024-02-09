import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    fetch('api/register.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ email, password }),
    })
      .then(response => {
        if (response.ok) {
          // Handle successful login (e.g., redirect to dashboard)
        } else {
          throw new Error('Не удалось войти');
        }
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <div className='auth__style'>
      <h1>Авторизация</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" /> 
      <label class="checkbox__label">
  <input type="checkbox" name="" id="" className='checkbox__login' />
  <span class="checkbox__text">Запомнить меня</span>
</label>
      <button className='btn-log-reg' onClick={handleLogin}>Вход</button>
     
      {error && <p className='error'>{error}</p>}
    </div>
  );
};

export default LoginForm;