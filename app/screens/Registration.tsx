import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Registration = ({ navigation }: { navigation: any }) => {
    const handleNavigate = () => {
        navigation.navigate('Main')
    }
    return (
        <View>
            <Text className='bg-red-300' style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Registration</Text>

            <Pressable onPress={handleNavigate}>
                <Text>Home</Text>
            </Pressable>
        </View>
    )
}

export default Registration