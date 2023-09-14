import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function SignUpNameScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView className='flex-1'>
            <View className='flex-1 flex justify-around m-4' >
                <Text className='font-bold text-4xl leading-10 text-gray-700 text-center my-2'>Bienvenue sur{"\n"}Web Solidarité App</Text>
            <View className='flex justify-center mx-4'>
                <Text className='text-2xl text-gray-500'>Renseigner votre téléphone, nom et prénom pour continuer</Text>
            </View>
            <View className='mx-4 '>
                <Text className='text-gray-700 my-1 p-2'>Numéro de téléphone</Text>
                <TextInput className='p-3 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Téléphone'></TextInput>
                <Text className='text-gray-700 my-1 p-2'>Nom</Text>
                <TextInput className='p-3 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Votre nom'
                value={email} onChangeText={value=>setEmail(value)}></TextInput>
                <Text className='text-gray-700 my-1 p-2'>Prénom</Text>
                <TextInput className='p-3 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Votre prénom'
                value={password} onChangeText={value=>setPassword(value)}></TextInput>
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Question1')}
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