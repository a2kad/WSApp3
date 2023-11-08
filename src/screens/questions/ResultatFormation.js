import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { auth, usersDb } from '../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createUserWithEmailAndPassword, signInAnonymously } from 'firebase/auth';
import { A } from '@expo/html-elements';
import { addDoc } from 'firebase/firestore';
import useAuth from '../../hooks/useAuth';

export default function ResultatFormation() {
    const count = useSelector(state => state.counter.value);
    const {user} = useAuth();

    const getData = async () => {
        try {
            const phone = await AsyncStorage.getItem('phoneNumber');
            const email = await AsyncStorage.getItem('userEmail');
            const password = await AsyncStorage.getItem('userPass');
            console.log('Login : ',email)
            console.log('Pass : ',password)
            //await createUserWithEmailAndPassword(auth, email, password);
            let result = await signInAnonymously(auth);
            console.log('Result anonimous registration: ',result)
            const docRef = await addDoc(usersDb,{
                phone: phone,
                email: email,
                count: count,
                userId: result._tokenResponse.localId,
            });
            console.log("Document written with ID: ", docRef.id);
            await AsyncStorage.setItem('docRefId', docRef.id);
        } catch (e) {
            console.log('Read async data error : ',e.message)
        }
    };
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 justify-around items-center'>
                <View className='py-6'>
                    <Text className='font-bold text-4xl leading-10 text-gray-700 text-center mx-2 py-4'>Votre résultat  {count}/12</Text>
                </View>
                <View className='flex justify-center mx-2'>
                    <Text className='text-xl text-gray-600'>Il serait préférable de vous inscrire à nos ateliers numériques.</Text>
                    {/* <Text className='text-justify text-xl text-gray-500 my-2'>Notre Site Web :</Text>
                    <A style={{fontSize:20, color:'#0ea5e9', textDecorationLine:'underline'}} href='https://www.asso-websolidarite.org/'>www.asso-websolidarite.org</A> */}
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