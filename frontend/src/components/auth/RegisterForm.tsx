import React, { useState } from 'react';
import { registerUser } from '../../api/apiService'; // Убедитесь, что путь к файлу верный

interface RegisterFormData {
  phone: string;
  password: string;
}

const RegisterForm: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({ phone: '', password: '' });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await registerUser(formData);
      if (response && response.token) {
        console.log('Регистрация прошла успешно:', response);
        // Действия после успешной регистрации, например, переход на страницу входа
      } else {
        // Обработка случая, когда ответ от сервера не содержит токен
        console.error("Ошибка регистрации: нет токена в ответе");
      }
    } catch (error) {
      console.error("Ошибка регистрации", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        placeholder="Телефон"
      />
      <input
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        placeholder="Пароль"
      />
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
};

export default RegisterForm;
