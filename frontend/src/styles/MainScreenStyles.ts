import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
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
});
