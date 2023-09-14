import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import WellcomeScreen from '../screens/WellcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpNameScreen from '../screens/SignUpNameScreen';
import Question1Screen from '../screens/questions/Question1Screen';
import Question2Screen from '../screens/questions/Question2Screen';
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
                    <Stack.Screen name="SignUpName" options={{headerShown: false}} component={SignUpNameScreen} />
                    <Stack.Screen name="Question1" options={{headerShown: false}} component={Question1Screen} />
                    <Stack.Screen name="Question2" options={{headerShown: false}} component={Question2Screen} />
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
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
    
}
