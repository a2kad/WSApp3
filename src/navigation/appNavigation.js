import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WellcomeScreen from '../screens/WellcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Wellcome'>
                <Stack.Screen name='Wellcome' options={{headerShown: false}} component={WellcomeScreen} />
                <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
                <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation