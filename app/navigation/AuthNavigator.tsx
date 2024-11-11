import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import { StatusBar } from 'expo-status-bar';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} >
            <AuthStack.Screen name="Login" component={Login} options={{
                contentStyle: {
                    backgroundColor: '#fff',
                }
            }} />
            <AuthStack.Screen name="Registration" component={Registration} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator