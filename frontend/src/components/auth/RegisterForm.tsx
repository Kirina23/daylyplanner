import React, { useState } from 'react';
import { loginUser } from '../../api/apiService'; // Импортируйте функцию входа

const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await loginUser({ phone, password });
      // Добавляем проверку на undefined
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        // Перенаправление на главную страницу или дашборд
      } else {
        // Обработка случая, когда response undefined или не содержит token
        console.error("Ошибка входа: отсутствует токен в ответе");
      }
    } catch (error) {
      console.error("Ошибка входа", error);
      // Отобразить сообщение об ошибке
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Номер телефона"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Пароль"
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
