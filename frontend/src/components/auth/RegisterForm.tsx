import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../api/apiService';
import styles from '../../styles/RegisterScreenStyles';
import mainStyles from '../../styles/MainScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';

// Определите типы для вашего стека навигации
type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
};

// Определите типы для параметров функции навигации
type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

const RegisterForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Добавляем использование useNavigation здесь

  const handleRegisterPress = async () => {
    try {
      // Предположим, что registerUser - это ваша функция для регистрации пользователя
      const response = await registerUser({ phone, password });

      console.log("Response from server:", JSON.stringify(response, null, 2));
        if (response && response.token) {
        Alert.alert("Success", "You have been registered successfully.");
        console.log("Trying to navigate to MainScreen");
        navigation.navigate('MainScreen'); // Переход на главный экран после успешной регистрации
      } else {
        Alert.alert("Registration Error", "Something went wrong with your registration.");
      }
    } catch (error) {
      Alert.alert("Registration Error", "An unexpected error occurred.");
    }
  };

  return (
    <View style={mainStyles.container}>
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={handleRegisterPress} style={styles.button}>
        <Text style={styles.buttonText}>Register</Text> {/* Кнопка "Зарегистрироваться" на английском */}
      </Pressable>
    </View>
  );
};

// Стили и дополнительные компоненты (если требуются)

export default RegisterForm;