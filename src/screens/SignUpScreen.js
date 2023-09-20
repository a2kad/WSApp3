import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUpScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const storeData = async () => {
        try {
            await AsyncStorage.setItem('userEmail', email);
            await AsyncStorage.setItem('userPass', password);
            console.log('email  : ',email);
            console.log('pass  : ',password);
            navigation.navigate('Question1')
        } catch (e) {
            console.log('Async error : ',e.message)
        }
    };

    const handleSubmit = async () => {
        if (email && password) {
            try {
                //await createUserWithEmailAndPassword(auth, email, password)
                navigation.navigate('SignUpName')
            } catch (err) {
                console.log('Got error', err.message);
            }
        }
    }
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 flex justify-around m-4' >
                <Text className='font-bold text-4xl leading-10 text-gray-700 text-center my-2'>Bienvenue sur{"\n"}Web Solidarité App</Text>
                <View className='flex justify-center mx-4'>
                    <Text className='text-2xl text-gray-500'>Renseigner votre e-mail et mot de passe pour continuer</Text>
                </View>
                <View className='mx-4 '>
                    {/* <Text className='text-gray-700 my-2 p-2'>Numéro de téléphone</Text>
                <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Téléphone'></TextInput> */}
                    <Text className='text-gray-700 my-2 p-2'>E-mail</Text>
                    <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='E-mail'
                        value={email} onChangeText={value => setEmail(value)}></TextInput>
                    <Text className='text-gray-700 my-2 p-2'>Mot de passe</Text>
                    <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Mot de passe' secureTextEntry
                        value={password} onChangeText={value => setPassword(value)}></TextInput>
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={storeData}
                        className="py-3 bg-yellow-400 mx-7 rounded-xl">
                        <Text
                            className="text-xl font-bold text-center text-gray-700"
                        >
                            Continuer
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SignUpScreen