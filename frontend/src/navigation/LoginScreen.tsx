// screens/LoginScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Это страница входа</Text>
            <Button title="Вернуться" onPress={() => navigation.goBack()} />
        </View>
    );
};

export default LoginScreen;

