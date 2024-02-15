// Предполагая, что вы используете TypeScript и React
import React, { useState } from 'react';
import { registerUser } from '../api/apiService'; // Убедитесь, что путь верен

interface RegisterFormData {
  phone: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({ phone: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Предполагая, что у вас есть функция registerUser, отправляющая данные на API
      const response = await registerUser(formData);
      console.log('Registration successful', response);
      // Обработка успешной регистрации: переадресация, сообщение пользователю и т.д.
    } catch (error) {
      console.error('Registration failed', error);
      // Обработка ошибок регистрации
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Телефон"
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Пароль"
      />
      <button type="submit">Регистрация</button>
    </form>
  );
};

export default RegisterForm;
