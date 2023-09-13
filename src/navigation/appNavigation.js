import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WellcomeScreen from '../screens/WellcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpNameScreen from '../screens/SignUpNameScreen';
import useAuth from '../hooks/useAuth';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const {user} = useAuth();
    if(user){
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name='Home' options={{headerShown: false}} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Wellcome'>
                    <Stack.Screen name='Wellcome' options={{headerShown: false}} component={WellcomeScreen} />
                    <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen} />
                    <Stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
                    <Stack.Screen name="SignUpName" options={{headerShown: false}} component={SignUpNameScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}
