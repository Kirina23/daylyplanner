// MainScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/MainScreenStyles'; // Предполагаем, что стили находятся в этом пути

const MainScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Добро пожаловать в ваше приложение!</Text>
      {/* Здесь может быть дополнительный контент, если это необходимо */}
    </View>
  );
};

export default MainScreen;
