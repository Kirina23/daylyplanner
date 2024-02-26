import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, Alert } from 'react-native';
import { registerUser } from '../../api/apiService';
import styles from '../../styles/RegisterScreenStyles';

const RegisterForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Обработка отправки формы
  const handleRegister = async () => {
    try {
      const response = await registerUser({ phone, password });
      if (response && response.token) {
        // Успешная регистрация
        Alert.alert("Регистрация прошла успешно", "Токен: " + response.token);
      } else {
        // Обработка случая, когда ответ от сервера не содержит токен
        Alert.alert("Ошибка регистрации", "Ответ от сервера не содержит токен");
      }
    } catch (error) {
      if (error instanceof Error) {
        // Ошибка с известным форматом
        Alert.alert("Ошибка регистрации", error.message);
      } else {
        // Неизвестная ошибка
        Alert.alert("Ошибка регистрации", "Произошла неизвестная ошибка");
      }
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.input}
        placeholder="Телефон"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad" // Для ввода номера телефона
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry // Скрытие вводимого пароля
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleRegister} style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed // Стиль для состояния нажатия
          ]}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterForm;
