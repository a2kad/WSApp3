import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { auth, usersDb } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, getAdditionalUserInfo, signInAnonymously, updateProfile } from 'firebase/auth';
import { addDoc } from 'firebase/firestore';
import useAuth from '../../hooks/useAuth';

export default function ResultatFormation() {
    const count = useSelector(state => state.counter.value);
    const {user} = useAuth();
    const getData = async () => {
        try {
            // Nous lisons le numéro de téléphone et l'e-mail
            const phone = await AsyncStorage.getItem('phoneNumber');
            const email = await AsyncStorage.getItem('userEmail');
            
            // Autorisation anonyme
            let result = await signInAnonymously(auth);
            
            // Nous enregistrons le numéro de téléphone et l'e-mail dans la base de données
            await addDoc(usersDb,{
                phone: phone,
                email: email,
                count: count,
                userId: result._tokenResponse.localId,
            });
        } catch (e) {
            console.log('Read async data error : ',e.message)
        }
    };
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-around items-center'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center mx-2 py-4'>Votre résultat {count}/12</Text>
                </View>
                <View className='flex justify-center mx-2'>
                    <Text className='text-xl text-gray-600'>Bravo!</Text>
                    <Text className='text-xl text-gray-600 my-2'>Nous vous suggérons de privilégier l'achat d'un ordinateur reconditionné ou d'un smartphone reconditionné à prix solidaire pour réduire les déchets D3E, et sensibiliser pour le Réemploi, limitant ainsi les impacts sur  l'environnement.</Text>
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