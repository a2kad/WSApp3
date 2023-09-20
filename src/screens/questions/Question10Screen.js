import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Question1Screen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('userEmail');
            const password = await AsyncStorage.getItem('userPass');
            console.log('Login : ',email)
            console.log('Pass : ',password)
            await createUserWithEmailAndPassword(auth, email, password);
            if (email !== null) {
                setEmail(email)
            }
            if (password !== null) {
                setPassword(password)
            }
        } catch (e) {
            console.log('Read async data error : ',e.message)
        }
    };

    const handleSubmit = async () => {
        if (email && password) {
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                //navigation.navigate('SignUpName')
            } catch (err) {
                console.log('Got error', err.message);
            }
        }
    }
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-top items-center m-6'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center py-4'>Question 10/10</Text>
                </View>
                <View className='flex justify-center mx-2'>
                    <Text className='text-justify text-xl text-gray-500'>Seriez-vous en mesure d'identifier la taille d'un fichier (photo, PDF, audio, vidéo) ?</Text>
                </View>
            </View>
            <View className='flex-row justify-around mb-11'>

                <TouchableOpacity
                    onPress={getData}
                    className="py-3 px-7 bg-yellow-400 mx-7 rounded-xl">
                    <Text className="text-xl font-bold text-center text-gray-700">Oui</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    className="py-3 px-7 bg-yellow-400 mx-7 rounded-xl">
                    <Text className="text-xl font-bold text-center text-gray-700">Non</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}