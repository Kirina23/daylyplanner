import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    paddingTop: 100,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingTop: 100,
    justifyContent: 'center', // Располагаем элементы по центру
    alignItems: 'center', // Центрируем элементы по вертикали, если вам нужно
    paddingHorizontal: 10, // отступы между кнопками с помощью paddingHorizontal
  },
  button: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginHorizontal: 5, // Добавим горизонтальные отступы между кнопками
    elevation: 3,
    padding: 10,
    margin: 10,
      },
  buttonPressed: {
        // Стили для нажатой кнопки
    backgroundColor: '#0056b3', // Более темный цвет для эффекта нажатия
      },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Любой цвет, который вы предпочитаете
  },
  
});
