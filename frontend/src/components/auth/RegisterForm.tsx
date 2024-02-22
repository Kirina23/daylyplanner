import React, { useState } from 'react';
import { registerUser } from '../../api/apiService'; 
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import styles from '../../styles/RegisterScreenStyles';

const RegisterForm = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Обработка отправки формы
  const handleRegister = () => {
    // Здесь будет логика регистрации
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
        <TouchableOpacity onPress={handleRegister} style={styles.button}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterForm;