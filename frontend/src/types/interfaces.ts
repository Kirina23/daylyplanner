export interface UserData {
    phone: string;
    password: string;
    // Дополнительные поля, которые вам могут понадобиться для регистрации пользователя
  }
  
  export interface AuthResponse {
    token: string;
    // Дополнительные поля, которые может возвращать ваш API при аутентификации
  }