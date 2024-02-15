interface AuthResponse {
    token: string;
    // Дополнительные поля, которые может возвращать ваш API
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
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: AuthResponse = await response.json();
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
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: AuthResponse = await response.json();
      return data;
    } catch (error) {
      console.error('Error during user login:', error);
    }
  };
  