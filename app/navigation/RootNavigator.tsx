import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();


const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Auth" component={AuthNavigator} />
            <Stack.Screen name="Main" component={DrawerNavigator} />

        </Stack.Navigator>

    )
}

export default RootNavigator