import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from '@/components/core/safe-area-view'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        // <SafeAreaView>
        //     <StatusBar style="auto" />
        <View>
            <Text>Welcome to the Home Screen</Text>
        </View>
        // </SafeAreaView>
    )
}

export default Home