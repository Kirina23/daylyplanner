interface AuthResponse {
    token: string;
    // Дополнительные поля, которые может возвращать API
  }
  
  interface UserData {
    phone: string;
    password: string;
    // Дополнительные поля по необходимости
  }
  
  export const registerUser = async (userData: UserData): Promise<AuthResponse | undefined> => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
  
      // Логируем статус ответа для диагностики
      console.log('Register response status:', response.status);
  
      if (!response.ok) {
        const errorData = await response.text(); // Получаем текст ошибки для лучшего понимания
        console.error('Register error response:', errorData); // Логируем текст ошибки
        throw new Error('Network response was not ok');
      }
  
      const data: AuthResponse = await response.json();
      console.log('Registration successful:', data); // Логирование успешного ответа
      return data;
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  };
  
  
  export const loginUser = async (userData: UserData): Promise<AuthResponse | undefined> => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
  
      // Логируем статус ответа для диагностики
      console.log('Login response status:', response.status);
  
      if (!response.ok) {
        const errorData = await response.text(); // Получаем текст ошибки для лучшего понимания
        console.error('Login error response:', errorData); // Логируем текст ошибки
        throw new Error('Network response was not ok');
      }
  
      const data: AuthResponse = await response.json();
      console.log('Login successful:', data); // Логирование успешного ответа
      return data;
    } catch (error) {
      console.error('Error during user login:', error);
    }
  };
  