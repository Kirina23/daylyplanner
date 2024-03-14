import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { registerUser } from '../../api/apiService';
import registerStyles from '../../styles/RegisterScreenStyles';
import mainStyles from '../../styles/MainScreenStyles';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  MainScreen: undefined;
};

type RegisterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'RegisterScreen'>;

const RegisterForm: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Добавлено состояние для сообщения об ошибке
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleRegisterPress = async () => {
    try {
      setError(''); // Сброс сообщения об ошибке перед запросом
      const response = await registerUser({ phone, password });
      if (response && response.token) {
        Alert.alert("Success", "You have been registered successfully.");
        navigation.navigate('MainScreen');
      }
    } catch (error) {
      if (error instanceof Error && error.message.includes("user with this phone already exists")) {
        setError("A user with this phone number already exists."); // Установка сообщения об ошибке
        setPhone('');
        setPassword('');
      } else {
        Alert.alert("Registration Error", "An unexpected error occurred.");
      }
    }
  };

  return (
    <View style={mainStyles.container}>
      {error ? <Text style={registerStyles.errorMessage}>{error}</Text> : null} {/* Отображение сообщения об ошибке */}
      <TextInput
        style={registerStyles.input}
        placeholder="Phone number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={registerStyles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Pressable onPress={handleRegisterPress} style={registerStyles.button}>
        <Text style={registerStyles.buttonText}>Register</Text>
      </Pressable>
    </View>
  );
};

export default RegisterForm;
