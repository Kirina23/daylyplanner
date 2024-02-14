import React, { useState } from 'react';

export const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Здесь вызовите функцию из authService для отправки данных
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Телефон" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" />
      <button type="submit">Войти</button>
    </form>
  );
};
