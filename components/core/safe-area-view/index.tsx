/**
 *
 * SafeAreaView is a component that wraps the children with a View component and applies padding to the top of the children based on the safe area insets.
 *
 * This is a more versatile version of the SafeAreaView component from react-native-safe-area-context.
 *
 * @module
 * @param {ReactNode} children - The children of the SafeAreaView.
 * @return {React.FC<SafeAreaViewProps>}
 *
 * @example
 * import { SafeAreaView } from '@components/core/SafeAreaView/SafeAreaView';
 *
 * const MyComponent = () => {
 * return (
 * <SafeAreaView>
 *  <Text>SafeAreaView</Text>
 * </SafeAreaView>
 * );
 *
 */

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import React from 'react';


export const SafeAreaView = ({
    children,
    paddingX = 16,
    className,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    paddingX?: number;
}>) => {
    const insets = useSafeAreaInsets();
    console.log(className)
    console.log(insets.top - paddingX / 2)

    return (
        <View
            className='bg-blue-500'
            style={{
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left + paddingX / 2,
                paddingRight: insets.right + paddingX / 2,
            }}
        >
            {children}
        </View>
    );
};
