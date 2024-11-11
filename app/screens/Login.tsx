import { View, Text, Pressable, } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Login = ({ navigation }: { navigation: any }) => {
    return (
        <View>
            <Text className='bg-indigo-600' style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Login</Text>

            <Pressable onPress={() => {
                navigation.navigate('Registration')
            }}>
                <Text>Registration</Text>
            </Pressable>
        </View>
    )
}

export default Login