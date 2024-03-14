import React, { useRef } from 'react';
import { View, Text, Animated} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/NavigationTypes';
import homeStyles from '../styles/HomeScreenStyles';
import { Pressable } from 'react-native';

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
      friction: 3, // Управляет "скоростью" анимации
      tension: 40, // Управляет "силой" анимации
      useNativeDriver: true, // Может потребоваться изменить на false, если встретится проблема с поддержкой
    }).start();
  };
  
    return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.title}>Welcome to DaylyPlanner</Text>
      <View style={homeStyles.buttonContainer}>
        <Animated.View style={{ transform: [{ scale: scaleRegister }] }}>
          <Pressable
            onPress={() => navigation.navigate('Register')}
            onPressIn={() => animateScale(scaleRegister, 0.95)}
            onPressOut={() => animateScale(scaleRegister, 1)}
            style={homeStyles.button}
          >
            <Text style={homeStyles.buttonText}>Register</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={{ transform: [{ scale: scaleLogin }] }}>
          <Pressable
            onPress={() => navigation.navigate('Login')}
            onPressIn={() => animateScale(scaleLogin, 0.95)}
            onPressOut={() => animateScale(scaleLogin, 1)}
            style={homeStyles.button}
          >
            <Text style={homeStyles.buttonText}>Login</Text>
          </Pressable>
        </Animated.View>
      </View>
    </View>
  );
};

export default HomeScreen;
