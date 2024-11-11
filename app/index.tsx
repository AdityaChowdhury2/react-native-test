import { View, Text, useColorScheme } from 'react-native'
import React from 'react'
import RootNavigator from './navigation/RootNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
// import { SafeAreaView } from 'react-native-safe-area-context'

import '../global.css'
import { SafeAreaView } from '@/components/core/safe-area-view'


const Page = () => {
    const colorScheme = useColorScheme()
    console.log(colorScheme)
    return (
        // <View style={{ flex: 1 }}>
        //     <StatusBar style='light' />
        //     <Text className='text-white bg-emerald-900'>Hello</Text>
        // </View>
        <NavigationContainer independent={true}>
            <RootNavigator />
        </NavigationContainer>


    )
}

export default Page