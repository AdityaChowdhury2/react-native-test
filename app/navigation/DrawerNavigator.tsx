// app/navigation/DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import { MaterialIcons } from '@expo/vector-icons';
import { router, Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Platform, StatusBar, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const insets = useSafeAreaInsets();
    return (
        <Drawer.Navigator screenOptions={
            {
                drawerPosition: 'left',
                drawerType: 'back',
                headerStyle: {
                    backgroundColor: '#fff',
                },
                headerTintColor: 'black',
                sceneContainerStyle: {
                    backgroundColor: '#fff',

                },
                headerRight: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <MaterialIcons name="arrow-back" color="black" size={24} />
                    </TouchableOpacity>
                ),
                headerRightContainerStyle: {
                    paddingRight: 16,

                },
                headerTitleAlign: 'left',


            }
        }>
            <Drawer.Screen name="Home" component={Home} options={{
                drawerIcon: ({ color, size }) => (
                    <MaterialIcons name="home" color={color} size={size} />
                ),
                title: 'Home',
            }} />
            {/* Add more screens that should appear in the drawer */}
        </Drawer.Navigator>
    );
}
