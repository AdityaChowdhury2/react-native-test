import Content from "@/components/Content"
import { Slot, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import React from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';


const Layout = () => {
    return <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer />
    </GestureHandlerRootView>
    // return <Stack screenOptions={{
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // }}>
    //     <Stack.Screen name="index" />
    //     <Stack.Screen name="registration" />
    // </Stack>
    // return <Content>
    //     <StatusBar style="dark" />
    // </Slot />
    // </Content>
}

export default Layout