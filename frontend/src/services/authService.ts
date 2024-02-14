// Импортируйте интерфейсы, если они у вас есть
import { UserData, AuthResponse } from '../types/interfaces';

export const registerUser = async (userData: UserData): Promise<AuthResponse | void> => {
  // Реализация функции регистрации пользователя
};

export const loginUser = async (userData: UserData): Promise<AuthResponse | void> => {
  // Реализация функции входа пользователя
};
