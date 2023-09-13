import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

export default function SignUpNameScreen() {
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
                <Text className='text-gray-700 my-2 p-2'>Nom</Text>
                <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Votre nom'
                value={email} onChangeText={value=>setEmail(value)}></TextInput>
                <Text className='text-gray-700 my-2 p-2'>Prénom</Text>
                <TextInput className='p-4 bg-gray-200 text-gray-700 rounded-2xl' placeholder='Votre prénom'
                value={password} onChangeText={value=>setPassword(value)}></TextInput>
            </View>
            <View className="space-y-4">
                <TouchableOpacity
                    onPress={handleSubmit}
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