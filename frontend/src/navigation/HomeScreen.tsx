import React, { useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/NavigationTypes';
import styles from '../styles/HomeScreenStyles';


type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
   // Создаем отдельные анимационные значения для каждой кнопки
  const scaleRegister = useRef(new Animated.Value(1)).current;
  const scaleLogin = useRef(new Animated.Value(1)).current;

  // Функция для анимации масштабирования
  const animateScale = (scale: Animated.Value, newValue: number) => {
    Animated.spring(scale, {
      toValue: newValue,
      friction: 3,
      speed: 0.1, // Меньше значение = медленнее анимация
      bounciness: 4, // Меньше значение = меньше "отскока"
      useNativeDriver: true,
    }).start();
  };

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to DaylyPlanner</Text>
      <View style={styles.buttonContainer}>
        <Animated.View style={{ transform: [{ scale: scaleRegister }] }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            onPressIn={() => animateScale(scaleRegister, 0.95)}
            onPressOut={() => animateScale(scaleRegister, 1)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale: scaleLogin }] }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            onPressIn={() => animateScale(scaleLogin, 0.95)}
            onPressOut={() => animateScale(scaleLogin, 1)}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );
};

export default HomeScreen;
