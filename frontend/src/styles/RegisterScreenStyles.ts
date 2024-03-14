import { StyleSheet, Platform } from 'react-native';

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
    flexDirection: 'row',
    width: '100%',
    paddingTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    padding: 10,
    margin: 10,
    ...Platform.select({
      ios: {
        shadowOpacity: 0.3, // Добавлено для прозрачности тени
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: '#000',
      },
      android: {
        elevation: 3,
      },
      web: {
        // boxShadow уже был правильно установлен для веба
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
      }
    }),
  },
  buttonPressed: {
    backgroundColor: '#0056b3',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorMessage: {
    color: 'red',
    marginTop: 10,
    marginBottom: 5,
    textAlign: 'center',
  }
  
});

export default styles;
