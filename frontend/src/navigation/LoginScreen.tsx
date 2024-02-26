import { View, Text } from 'react-native';
import LoginForm from '../components/auth/LoginForm';
import styles from '../styles/LoginScreenStyles'; // Убедитесь, что путь к файлу стилей верный

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход в систему</Text>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;
