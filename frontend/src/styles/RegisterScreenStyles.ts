import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    marginTop: 50, // Или любое другое значение, чтобы отодвинуть форму от верхнего края экрана
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 6,
    marginBottom: 10, // Отступ между полями ввода
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonPressed: { // Добавляем этот стиль
    backgroundColor: '#0056b3',
  },
});

export default styles;
