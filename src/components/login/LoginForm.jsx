import React, { useState } from 'react';

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
    <div>
      <h2>Авторизация</h2>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Почта" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button onClick={handleLogin}>Вход</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LoginForm;