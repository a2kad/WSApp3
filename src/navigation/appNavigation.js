
import 'react-native-gesture-handler';
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import WellcomeScreen from '../screens/WellcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SignUpNameScreen from '../screens/SignUpNameScreen';
import PolitiqueScreen from '../screens/PolitiqueScreen';
import Question1Screen from '../screens/questions/Question1Screen';
import Question2Screen from '../screens/questions/Question2Screen';
import Question3Screen from '../screens/questions/Question3Screen';
import Question4Screen from '../screens/questions/Question4Screen';
import Question5Screen from '../screens/questions/Question5Screen';
import Question6Screen from '../screens/questions/Question6Screen';
import Question7Screen from '../screens/questions/Question7Screen';
import Question8Screen from '../screens/questions/Question8Screen';
import Question9Screen from '../screens/questions/Question9Screen';
import Question10Screen from '../screens/questions/Question10Screen';
import Question11Screen from '../screens/questions/Question11Screen';
import Question12Screen from '../screens/questions/Question12Screen';
import useAuth from '../hooks/useAuth';
import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import FormationScreen from '../screens/FormationScreen';
import ResultatFormation from '../screens/questions/ResultatFormation';
import ResultatProduits from '../screens/questions/ResultatProduits';
import { HomeIcon } from "react-native-heroicons/mini";
import { ShoppingCartIcon } from "react-native-heroicons/mini";
import { RocketLaunchIcon, ChatBubbleLeftRightIcon, IdentificationIcon } from "react-native-heroicons/mini";
import CustomDrawer from '../screens/CustomDrawer';
import ContactScreen from '../screens/ContactScreen';
import InfoScreen from '../screens/InfoScreen';
import { ActivityIndicator, View } from 'react-native';
import CommandeScreen from '../screens/CommandeScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

export default function AppNavigation() {
    const { user, loading } = useAuth();
    if (loading) {
        return (<View className="flex-1 justify-center items-center">
            <ActivityIndicator size='large' />
        </View>)
    } else {
        if (user) {
            return (
                <NavigationContainer>
                    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}
                        initialRouteName="Home"
                        screenOptions={{
                            drawerLabelStyle: { marginLeft: -25, fontSize: 15 },
                            drawerActiveBackgroundColor: '#e7e5e4',
                            drawerActiveTintColor: '#404040',
                            drawerInactiveBackgroundColor: '#fff',
                            drawerInactiveTintColor: '#737373'
                        }}>
                        <Drawer.Screen name="Home" options={{ drawerLabel: 'Accueil', title: 'Accueil', drawerIcon: ({ color }) => (<HomeIcon color={color} size={24} />) }}
                            component={HomeScreen} />
                        <Drawer.Screen name="Products" options={{ drawerLabel: 'Boutique Solidaire', title: 'Boutique Solidaire', drawerIcon: ({ color }) => (<ShoppingCartIcon color={color} size={24} />) }} component={ProductScreen} />
                        <Drawer.Screen name="Formations" options={{ drawerLabel: 'Formations', title: 'Formations', drawerIcon: ({ color }) => (<RocketLaunchIcon color={color} size={24} />) }} component={FormationScreen} />
                        <Drawer.Screen name="Contacts" options={{ drawerLabel: 'Contacts', title: 'Contacts', drawerIcon: ({ color }) => (<ChatBubbleLeftRightIcon color={color} size={24} />) }} component={ContactScreen} />
                        <Drawer.Screen name="MesInfos" options={{ drawerLabel: 'Mes Infos', title: 'Mes Infos', drawerIcon: ({ color }) => (<IdentificationIcon color={color} size={24} />) }} component={InfoScreen} />
                        
                    </Drawer.Navigator>
                </NavigationContainer>
            )
        } else {
            return (
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='SignUp'>
                        <Stack.Screen name='Wellcome' options={{ headerShown: false }} component={WellcomeScreen} />
                        <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
                        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUpScreen} />
                        <Stack.Screen name="SignUpName" options={{ headerShown: false }} component={SignUpNameScreen} />
                        <Stack.Screen name="Question1" options={{ headerShown: false }} component={Question1Screen} />
                        <Stack.Screen name="Politique" options={{ headerShown: true, title: 'Politique de Confidentialité' }} component={PolitiqueScreen} />
                        <Stack.Screen name="Question2" options={{ headerShown: false, gestureEnabled: false }} component={Question2Screen} />
                        <Stack.Screen name="Question3" options={{ headerShown: false, gestureEnabled: false }} component={Question3Screen} />
                        <Stack.Screen name="Question4" options={{ headerShown: false, gestureEnabled: false }} component={Question4Screen} />
                        <Stack.Screen name="Question5" options={{ headerShown: false, gestureEnabled: false }} component={Question5Screen} />
                        <Stack.Screen name="Question6" options={{ headerShown: false, gestureEnabled: false }} component={Question6Screen} />
                        <Stack.Screen name="Question7" options={{ headerShown: false, gestureEnabled: false }} component={Question7Screen} />
                        <Stack.Screen name="Question8" options={{ headerShown: false, gestureEnabled: false }} component={Question8Screen} />
                        <Stack.Screen name="Question9" options={{ headerShown: false, gestureEnabled: false }} component={Question9Screen} />
                        <Stack.Screen name="Question10" options={{ headerShown: false, gestureEnabled: false }} component={Question10Screen} />
                        <Stack.Screen name="Question11" options={{ headerShown: false, gestureEnabled: false }} component={Question11Screen} />
                        <Stack.Screen name="Question12" options={{ headerShown: false, gestureEnabled: false }} component={Question12Screen} />
                        <Stack.Screen name="ResultatFormation" options={{ headerShown: false, gestureEnabled: false }} component={ResultatFormation} />
                        <Stack.Screen name="ResultatProduits" options={{ headerShown: false, gestureEnabled: false }} component={ResultatProduits} />
                    </Stack.Navigator>
                </NavigationContainer>
            )
        }
    }
}
