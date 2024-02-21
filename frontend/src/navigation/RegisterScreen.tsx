import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RegisterForm from '../components/auth/RegisterForm'; 

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation(); // Использование хука без дополнительной типизации, если не требуется

  return (
    <View>
      <Text>This is the Register Screen</Text>
      <RegisterForm /> {/* Использование формы регистрации */}
    </View>
  );
};

export default RegisterScreen;

