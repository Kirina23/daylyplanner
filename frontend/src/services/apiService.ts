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

    if (response.ok) {
      // Если ответ успешный, принимаем, что возвращается AuthResponse.
      const data: AuthResponse = await response.json();
      return data;
    } else {
      // Если ответ не успешный, предполагаем, что сервер вернул ошибку в формате { error: string }.
      const errorData: { error?: string } = await response.json();
      throw new Error(errorData.error || 'Network response was not ok');
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
      throw error; // Перебрасываем ошибку дальше, чтобы ее можно было обработать в компоненте.
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error'); // Создаем и перебрасываем новый экземпляр ошибки.
    }
  }
};



