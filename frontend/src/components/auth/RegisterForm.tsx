import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../api/apiService';
import styles from '../../styles/RegisterScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';

// Определите типы для вашего стека навигации
type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  // Определите другие маршруты здесь
};

// Определите типы для параметров функции навигации
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

const RegisterForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<RegisterScreenNavigationProp>();

  // Обработка отправки формы
  const handleRegister = async () => {
    try {
      const response = await registerUser({ phone, password });
      if (response && response.token) {
        // Успешная регистрация
        Alert.alert("Регистрация прошла успешно", "Токен: " + response.token);
        // Перенаправление на HomeScreen
        console.log("Переход на HomeScreen");
        navigation.navigate('HomeScreen');
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
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Пароль"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RegisterForm;
