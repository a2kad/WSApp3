import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { auth } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, signInAnonymously } from 'firebase/auth';

export default function ResultatFormation() {
    const count = useSelector(state => state.counter.value);

    const getData = async () => {
        try {
            const email = await AsyncStorage.getItem('userEmail');
            const password = await AsyncStorage.getItem('userPass');
            console.log('Login : ',email)
            console.log('Pass : ',password)
            //await createUserWithEmailAndPassword(auth, email, password);
            await signInAnonymously(auth);
            
        } catch (e) {
            console.log('Read async data error : ',e.message)
        }
    };
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-around items-center'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center py-4'>Votre résultat {count}/10</Text>
                </View>
                <View className='flex justify-center mx-5'>
                    <Text className='text-justify text-xl text-gray-500'>Il serait préférable de vous inscrire à nos ateliers numériques.</Text>
                    <Text className='text-justify text-xl text-gray-500 my-2'>Contactez-nous: </Text>
                </View>
                <View className="space-y-4">
                    <TouchableOpacity
                        onPress={getData}
                        //onPress={()=>navigation.navigate('Question1')}
                        className="py-3 px-7 bg-yellow-400 mx-7 rounded-xl">
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