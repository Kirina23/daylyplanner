// Предполагая, что у вас есть эти интерфейсы где-то в вашем проекте
import { UserData, AuthResponse } from '../types/interfaces'; // Импортируем типы

// Функция для регистрации пользователя
export const registerUser = async (userData: UserData): Promise<AuthResponse | void> => {
  try {
    const response = await fetch('http://127.0.0.1:8000/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: AuthResponse = await response.json(); // ответ содержит данные авторизации
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};


