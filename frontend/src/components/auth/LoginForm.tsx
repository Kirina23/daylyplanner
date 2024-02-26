import React, { useState } from 'react';
import { View, TextInput, Text} from 'react-native';
import { styles } from '../../styles/LoginFormStyles'; 
import { Pressable } from 'react-native';


const LoginForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Обработка данных формы
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Номер телефона"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
        secureTextEntry
      />
      <Pressable onPress={handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Войти</Text>
      </Pressable>
    </View>
  );
};

export default LoginForm;
